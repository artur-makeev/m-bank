import type { Dispatch, FC, SetStateAction } from 'react';
import { useState } from 'react';
import Dialog from 'react-native-dialog';
import { handleTransfer } from './handleTransfer';
import type { IAccount } from '../home/accounts/types';
import { View } from 'react-native';

type Props = {
	visible: boolean;
	setVisible: Dispatch<SetStateAction<boolean>>;
	account: IAccount;
	cardNumber: string;
};

const PaymentModal: FC<Props> = ({
	visible,
	setVisible,
	account,
	cardNumber,
}) => {
	const [amount, setAmount] = useState<string>('');

	const onChange = (value: string) => {
		const intNumber = value.replace(/([^0-9]+)/, '');
		setAmount(intNumber);
	};

	const handleSubmit = () => {
		handleTransfer(account, cardNumber, amount);
		setVisible(false);
	};

	return (
		<View>
			<Dialog.Container visible={visible}>
				<Dialog.Title>Сумма перевода</Dialog.Title>
				<Dialog.Description>Введите сумму:</Dialog.Description>
				<Dialog.Input
					value={String(amount)}
					onChangeText={onChange}
					inputMode='numeric'
				/>
				<Dialog.Button
					label='Отменить'
					onPress={() => setVisible(false)}
				/>
				<Dialog.Button label='Отправить' onPress={handleSubmit} />
			</Dialog.Container>
		</View>
	);
};

export default PaymentModal;
