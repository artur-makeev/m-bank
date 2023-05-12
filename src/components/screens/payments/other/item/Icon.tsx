import type { FC } from 'react';
import { View } from 'react-native';
import type { IFooterItem } from '../../../../layouts/footer/types';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';

type Props = Pick<IFooterItem, 'iconName'>;

const Icon: FC<Props> = ({ iconName }) => {
	return (
		<View
			style={tw`rounded-full bg-blue-500 w-8 h-8 items-center justify-center`}
		>
			<AntDesign name={iconName} size={19} />
		</View>
	);
};

export default Icon;
