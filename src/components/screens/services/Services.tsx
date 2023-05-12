import type { FC } from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import Layout from '../../layouts/Layout';
import { services } from './data';
import ServiceItem from './item/ServiceItem';

const Services: FC = () => {
	return (
		<Layout>
			<Text style={tw`text-center text-lg mb-6`}>Петрозаводск</Text>
			<View style={tw`flex-row flex-wrap justify-center`}>
				{services.map((service) => (
					<ServiceItem key={service.title} service={service} />
				))}
			</View>
		</Layout>
	);
};

export default Services;
