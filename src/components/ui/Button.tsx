import type { FC } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import tailwind from 'twrnc';

type Props = {
	onPress: () => void;
	title: string;
	colors?: [string, string];
};

const Button: FC<Props> = ({
	onPress,
	title,
	colors = ['bg-sky-300', 'bg-sky-500'],
}) => {
	return (
		<TouchableHighlight
			onPress={onPress}
			underlayColor={colors[1]}
			style={tailwind`${colors[0]} text-gray-800 rounded-xl w-full my-4 py-3`}
		>
			<Text style={tailwind`text-center`}>{title}</Text>
		</TouchableHighlight>
	);
};

export default Button;
