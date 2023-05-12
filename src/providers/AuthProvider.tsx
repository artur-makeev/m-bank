import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import type { FC, ReactNode } from 'react';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { getErrorMessage } from '../utils/getErrorMessage';
import { auth, db, login, logout, register } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Alert } from 'react-native';

interface IContext {
	user: User | null;
	isLoading: boolean;
	register: (email: string, password: string) => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
}

export const AuthContext = createContext<IContext>({} as IContext);

type Props = {
	children: ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoadingInitial, setIsLoadingInitial] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const registerHandler = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			const { user } = await register(email, password);

			await addDoc(collection(db, 'users'), {
				_id: user.uid,
				displayName: 'No name',
			});
		} catch (error) {
			Alert.alert('Error reg:', getErrorMessage(error));
		} finally {
			setIsLoading(false);
		}
	};

	const loginHandler = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			await login(email, password);
		} catch (error) {
			Alert.alert('Error login:', getErrorMessage(error));
		} finally {
			setIsLoading(false);
		}
	};

	const logoutHandler = async () => {
		setIsLoading(true);
		try {
			await logout();
		} catch (error) {
			Alert.alert('Error logout:', getErrorMessage(error));
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(
		() =>
			onAuthStateChanged(auth, (user) => {
				setUser(user || null);
				setIsLoadingInitial(false);
			}),
		[],
	);

	const value = useMemo(
		() => ({
			user,
			isLoading,
			login: loginHandler,
			logout: logoutHandler,
			register: registerHandler,
		}),
		[user, isLoading],
	);

	return (
		<AuthContext.Provider value={value}>
			{!isLoadingInitial && children}
		</AuthContext.Provider>
	);
};
