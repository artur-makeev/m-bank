import type { FC } from 'react';
import type { TypeCurrency } from '../types';
import { View } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
	currency: TypeCurrency;
};

const Currency: FC<Props> = ({ currency }) => {
	return (
		<View
			style={tw`rounded-full bg-blue-500 w-9 h-9 items-center justify-center`}
		>
			<View
				style={{
					...tw`w-5 h-5 rounded-full items-center justify-center`,
					backgroundColor: '#EDF4FE',
				}}
			>
				<FontAwesome
					color='#488CF9'
					size={13}
					name={currency === 'RUB' ? 'rouble' : 'usd'}
				/>
			</View>
		</View>
	);
};

export default Currency;
