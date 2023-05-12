import type { FC } from 'react';
import { useState } from 'react';
import { Pressable, Text } from 'react-native';
import type { IContact } from './types';
import tw from 'twrnc';
import Avatar from '../../../ui/Avatar';
import { useAccounts } from '../../home/accounts/useAccounts';
import PaymentModal from '../PaymentModal';

type Props = {
	contact: IContact;
};

const ContactItem: FC<Props> = ({ contact }) => {
	const { accounts } = useAccounts();
	const [modalVisible, setModalVisible] = useState(false);

	const showDialog = () => {
		setModalVisible(true);
	};

	return (
		<>
			<Pressable style={tw`ml-4 mr-1 items-center`} onPress={showDialog}>
				<Avatar name={contact.displayName} size='large' />
				<Text style={tw`mt-1 text-xs`}>{contact.displayName}</Text>
			</Pressable>
			<PaymentModal
				visible={modalVisible}
				setVisible={setModalVisible}
				account={accounts[0]}
				cardNumber={contact.cardNumber}
			/>
		</>
	);
};

export default ContactItem;
