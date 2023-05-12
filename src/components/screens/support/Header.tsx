import type { FC } from 'react';
import { Image, Text, View } from 'react-native';
import tw from 'twrnc';

const Header: FC = () => {
	return (
		<View style={tw`flex-row items-center py-1 mb-2`}>
			<Image
				source={require('../../../../assets/images/mini-logo.png')}
				style={{ ...tw`mr-2`, width: 40, height: 40 }}
			/>
			<View>
				<Text style={tw`text-sm text-gray-800 font-medium`}>
					Поддержка
				</Text>
				<Text style={tw`text-xs text-gray-500`}>Онлайн 24/7</Text>
			</View>
		</View>
	);
};

export default Header;
