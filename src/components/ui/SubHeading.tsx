import type { FC } from 'react';
import { Text } from 'react-native';
import tw from 'twrnc';
import Padding from './Padding';

type Props = {
	text: string;
};

const SubHeading: FC<Props> = ({ text }) => {
	return (
		<Padding>
			<Text style={tw`text-xl font-bold text-gray-800`}>{text}</Text>
		</Padding>
	);
};

export default SubHeading;
