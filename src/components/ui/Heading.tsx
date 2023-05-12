import type { FC } from 'react';
import { Text } from 'react-native';
import tw from 'twrnc';
import Padding from './Padding';

type Props = {
	text: string;
	isCenter?: boolean;
};

const Heading: FC<Props> = ({ text, isCenter = false }) => {
	return (
		<Padding>
			<Text
				style={tw`text-2xl font-bold text-gray-800 ${
					isCenter ? 'text-center' : ''
				}`}
			>
				{text}
			</Text>
		</Padding>
	);
};

export default Heading;
