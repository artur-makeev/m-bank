import { useEffect, useState } from 'react';
import type { IMessage } from './types';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../../firebase';
import dayjs from 'dayjs';

export const useMessages = () => {
	const [messages, setMessages] = useState<IMessage[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(
		() =>
			onSnapshot(
				query(collection(db, 'messages'), orderBy('timestamp', 'asc')),
				(snapshot) => {
					setMessages(
						snapshot.docs.map((d) =>
							d.data()?.timestamp
								? ({
										_id: d.id,
										...d.data(),
										timestamp: dayjs
											.unix(d.data().timestamp.seconds)
											.format('HH:mm'),
										// eslint-disable-next-line no-mixed-spaces-and-tabs
								  } as IMessage)
								: ({
										_id: d.id,
										...d.data(),
										// eslint-disable-next-line no-mixed-spaces-and-tabs
								  } as IMessage),
						),
					);

					setIsLoading(false);
				},
			),
		[],
	);

	return { messages, isLoading };
};
