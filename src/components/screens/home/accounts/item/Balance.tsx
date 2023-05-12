import type { FC } from 'react';
import type { IAccount } from '../types';
import tw from 'twrnc';
import { Text, View } from 'react-native';

type Props = {
	account: IAccount;
};

const Balance: FC<Props> = ({ account: { balance, currency, name } }) => {
	return (
		<View style={tw`w-8/12`}>
			<Text style={{ fontSize: 15 }}>{name}</Text>
			<Text style={{ ...tw`font-bold`, marginTop: 2, fontSize: 15 }}>
				{Intl.NumberFormat(undefined, {
					currency,
					style: 'currency',
				}).format(balance)}
			</Text>
		</View>
	);
};

export default Balance;
