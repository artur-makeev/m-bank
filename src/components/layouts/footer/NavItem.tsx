import type { FC } from 'react';
import tw from 'twrnc';
import type { IFooterItem } from './types';
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Text } from 'react-native';
import type { TypeRootStackParamList } from '../../../navigation/types';

type Props = {
	item: IFooterItem;
	navigate: (screenName: keyof TypeRootStackParamList) => void;
	currentRoute: string;
};

const NavItem: FC<Props> = ({ item, navigate, currentRoute }) => {
	const isActive = currentRoute === item.title;

	return (
		<Pressable
			style={{ ...tw`items-center`, width: '20%' }}
			onPress={() => navigate(item.title)}
		>
			<AntDesign
				name={item.iconName}
				style={tw`text-xl ${
					isActive ? 'text-blue-500' : 'text-gray-500'
				}`}
			/>
			<Text
				style={{
					...tw`text-xs ${
						isActive ? 'text-blue-500' : 'text-gray-500'
					}`,
					marginTop: 1,
				}}
			>
				{item.displayTitle}
			</Text>
		</Pressable>
	);
};

export default NavItem;
