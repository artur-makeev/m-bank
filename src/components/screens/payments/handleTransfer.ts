import { Alert } from 'react-native';
import type { IAccount } from '../home/accounts/types';
import { getErrorMessage } from '../../../utils/getErrorMessage';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	query,
	updateDoc,
	where,
} from 'firebase/firestore';
import { db } from '../../../firebase';

export const handleTransfer = async (
	fromAccout: IAccount,
	cardNumber: string,
	amount: string,
) => {
	try {
		let accountToId = '';
		let currentToBalance = '';

		const querySnapshot = await getDocs(
			query(
				collection(db, 'accounts'),
				where('cardNumber', '==', cardNumber),
				limit(1),
			),
		);

		querySnapshot.docs.forEach((doc) => {
			accountToId = doc.id;
		});

		const docRefTo = doc(db, 'accounts', accountToId);
		const docSnapTo = await getDoc(docRefTo);

		if (docSnapTo.exists()) {
			currentToBalance = docSnapTo.data().balance;
		} else {
			Alert.alert('Карта с указанным номером не существует');
			return;
		}

		await updateDoc(docRefTo, {
			balance: currentToBalance + Number(amount),
		});

		const docRefFrom = doc(db, 'accounts', fromAccout._id);

		await updateDoc(docRefFrom, {
			balance: fromAccout.balance - Number(amount),
		});

		return;
	} catch (error) {
		Alert.alert('Error transfer', getErrorMessage(error));
	}
};
