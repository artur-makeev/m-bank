import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBN1Sj4ii96JTCRF4s6lHLSrKgeACWHxJ8',
	authDomain: 'm-bank-55596.firebaseapp.com',
	projectId: 'm-bank-55596',
	storageBucket: 'm-bank-55596.appspot.com',
	messagingSenderId: '573841199616',
	appId: '1:573841199616:web:5987d79493d760625a7ee5',
	measurementId: 'G-HQ2ZGZHKX4',
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
