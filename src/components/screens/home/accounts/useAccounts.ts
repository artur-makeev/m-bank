import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../../../firebase';
import type { IAccount } from './types';
import { useAuth } from '../../../../hooks/useAuth';

export const useAccounts = () => {
	const { user } = useAuth();
	const [accounts, setAccounts] = useState<IAccount[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(
		() =>
			onSnapshot(
				query(
					collection(db, 'accounts'),
					where('userId', '==', user?.uid),
				),
				(snapshot) => {
					setAccounts(
						snapshot.docs.map(
							(d) =>
								({
									_id: d.id,
									...d.data(),
								} as IAccount),
						),
					);

					setIsLoading(false);
				},
			),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	return { accounts, isLoading };
};
