import type { FC } from 'react';
import type { IAccount } from '../types';
import { ImageBackground } from 'react-native';
import tw from 'twrnc';
import type { ImageSourcePropType } from 'react-native';
import { Text } from 'react-native';

type Props = {
	account: IAccount;
};

const ImageCard: FC<Props> = ({ account: { name, cardNumber } }) => {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const imageBlack: ImageSourcePropType = require('../../../../../../assets/images/card-black.png');
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const imageGold: ImageSourcePropType = require('../../../../../../assets/images/card-gold.png');

	return (
		<ImageBackground
			source={name === 'M-Bank Black' ? imageBlack : imageGold}
			resizeMode='contain'
			style={{ ...tw`justify-end w-14 h-10`, padding: 4.5 }}
		>
			<Text style={{ ...tw`text-white font-medium`, fontSize: 11 }}>
				{cardNumber.slice(-4)}
			</Text>
		</ImageBackground>
	);
};

export default ImageCard;
