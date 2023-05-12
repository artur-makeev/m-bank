import type { FC } from 'react';
import { Alert } from 'react-native';
import Padding from '../../../../ui/Padding';
import tw from 'twrnc';
import Button from '../../../../ui/Button';
import { getErrorMessage } from '../../../../../utils/getErrorMessage';
import { asyncAlert } from './asyncAlert';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../../../../../hooks/useAuth';
import { db } from '../../../../../firebase';
import { getRandomCardNumber } from '../../../../../utils/getRandomCardNumber';

const ApplyNewProduct: FC = () => {
	const { user } = useAuth();

	const registerHandler = async () => {
		try {
			const currency = await asyncAlert({
				title: 'Валюта',
				msg: 'Выберите валюту счета',
				buttons: {
					text: 'RUB',
					resolveValue: 'RUB',
					textSecond: 'USD',
					resolveValueSecond: 'USD',
				},
			});

			const cardType = await asyncAlert({
				title: 'Тип Карты',
				msg: 'Выберите тип карты',
				buttons: {
					text: 'M-Bank Black',
					resolveValue: 'M-Bank Black',
					textSecond: 'M-Bank Gold',
					resolveValueSecond: 'M-Bank Gold',
				},
			});

			await addDoc(collection(db, 'accounts'), {
				timestamp: serverTimestamp(),
				userId: user?.uid,
				balance: 0,
				cardNumber: getRandomCardNumber(),
				currency,
				name: cardType,
			});
		} catch (error) {
			Alert.alert('Error apply new product', getErrorMessage(error));
		}
	};

	return (
		<Padding style={tw`mt-6`}>
			<Button onPress={registerHandler} title='Добавить продукт' />
		</Padding>
	);
};

export default ApplyNewProduct;
