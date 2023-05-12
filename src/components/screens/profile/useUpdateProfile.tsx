import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { Alert } from 'react-native';
import { getErrorMessage } from '../../../utils/getErrorMessage';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

export const useUpdateProfile = (name: string, docId: string) => {
	const { user } = useAuth();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const updateProfile = async () => {
		setIsLoading(true);

		if (!user) return;

		try {
			const docRef = doc(db, 'users', docId);

			await updateDoc(docRef, {
				displayName: name,
			});

			setIsSuccess(true);
			setTimeout(() => setIsLoading(false), 2000);
		} catch (error) {
			Alert.alert('Error update profile', getErrorMessage(error));
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, updateProfile, isSuccess };
};
