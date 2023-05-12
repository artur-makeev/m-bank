import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import {
	collection,
	limit,
	onSnapshot,
	query,
	where,
} from 'firebase/firestore';
import { db } from '../../../firebase';

export interface IProfile {
	_id: string;
	displayName: string;
	docId: string;
}

export const useProfile = () => {
	const { user } = useAuth();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [profile, setProfile] = useState<IProfile>({} as IProfile);
	const [name, setName] = useState<string>('');

	useEffect(
		() =>
			onSnapshot(
				query(
					collection(db, 'users'),
					where('_id', '==', user?.uid),
					limit(1),
				),
				(snapshot) => {
					const profile = snapshot.docs.map((d) => ({
						...(d.data() as Omit<IProfile, 'docId'>),
						docId: d.id,
					}))[0];

					setProfile(profile);
					setName(profile.displayName);
					setIsLoading(false);
				},
			),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	const value = useMemo(
		() => ({
			profile,
			isLoading,
			name,
			setName,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[profile, isLoading, name],
	);

	return value;
};
