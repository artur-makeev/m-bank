import type { FC, ReactNode } from 'react';
import type { ViewStyle } from 'react-native';
import { View } from 'react-native';
import tw from 'twrnc';

type Props = {
	children: ReactNode;
	style?: ViewStyle;
};

const Padding: FC<Props> = ({ children, style = {} }) => {
	return <View style={{ ...tw`px-4`, ...style }}>{children}</View>;
};

export default Padding;
