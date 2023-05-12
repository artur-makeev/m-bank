import type { FC } from 'react';
import { useState } from 'react';
import { Pressable, Text } from 'react-native';
import type { IOtherItem } from '../types';
import Icon from './Icon';
import { BOX_SHADOW } from '../../../../../styles';
import tw from 'twrnc';
import { useAccounts } from '../../../home/accounts/useAccounts';
import PaymentModal from '../../PaymentModal';

type Props = {
	item: IOtherItem;
};

const CASH_CARD_NUMBER = '4990 2284 8592 2274';

const OtherItem: FC<Props> = ({ item }) => {
	const { accounts } = useAccounts();

	const [modalVisible, setModalVisible] = useState(false);

	const showDialog = () => {
		setModalVisible(true);
	};
	return (
		<>
			<Pressable
				style={{
					...tw`ml-4 rounded-xl p-2 w-24 h-24 bg-white`,
					...BOX_SHADOW,
				}}
				onPress={showDialog}
			>
				<Icon iconName={item.iconName} />
				<Text style={{ ...tw`text-xs`, marginTop: 6 }}>
					{item.title}
				</Text>
			</Pressable>
			<PaymentModal
				visible={modalVisible}
				setVisible={setModalVisible}
				account={accounts[0]}
				cardNumber={CASH_CARD_NUMBER}
			/>
		</>
	);
};

export default OtherItem;
