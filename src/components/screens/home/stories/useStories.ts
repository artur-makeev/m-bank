import { useEffect, useState } from 'react';
import type { IStory } from './types';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../../../firebase';

export const useStories = () => {
	const [stories, setStories] = useState<IStory[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(
		() =>
			onSnapshot(query(collection(db, 'stories')), (snapshot) => {
				setStories(
					snapshot.docs.map(
						(d) =>
							({
								_id: d.id,
								...d.data(),
							} as IStory),
					),
				);

				setIsLoading(false);
			}),
		[],
	);

	return { stories, isLoading };
};
