import type { FC } from 'react';
import { Text } from 'react-native';
import Layout from '../../layouts/Layout';
import Heading from '../../ui/Heading';
import Padding from '../../ui/Padding';
import tw from 'twrnc';
import Currencies from './currencies/Currencies';

const More: FC = () => {
	return (
		<Layout>
			<Heading text='Еще' />
			<Padding>
				<Currencies />
				<Text style={tw`text-center text-gray-500 opacity-50 my-4`}>
					Версия 0.0.1
				</Text>
			</Padding>
		</Layout>
	);
};

export default More;
