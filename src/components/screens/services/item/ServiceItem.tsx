import type { FC } from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import type { IService } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import Percent from './Perc';

type Props = {
	service: IService;
};

const ServiceItem: FC<Props> = ({ service }) => {
	return (
		<View style={tw`mb-4`}>
			<View style={tw`rounded-xl overflow-hidden w-14 h-14 mx-4`}>
				<LinearGradient
					colors={['#433CA2', '#4A73C0']}
					style={tw`w-full h-full items-center justify-center`}
				>
					<Percent percent={service.percent} />
					<MaterialIcons
						name={service.iconName}
						size={30}
						color='#fff'
					/>
				</LinearGradient>
			</View>
			<Text style={{ ...tw`text-xs text-center`, marginTop: 6 }}>
				{service.title}
			</Text>
		</View>
	);
};

export default ServiceItem;
