import type { FC } from 'react';
import type { IAccount } from '../types';
import tw from 'twrnc';
import { View } from 'react-native';
import Currency from './Currency';
import Balance from './Balance';
import ImageCard from './ImageCard';

type Props = {
	account: IAccount;
};

const AccountItem: FC<Props> = ({ account }) => {
	return (
		<View style={tw`flex-row items-center justify-between mb-7`}>
			<Currency currency={account.currency} />
			<Balance account={account} />
			<ImageCard account={account} />
		</View>
	);
};

export default AccountItem;
