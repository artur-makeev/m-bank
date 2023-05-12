import type { FC } from 'react';
import { ScrollView, View } from 'react-native';
import Layout from '../../layouts/Layout';
import Padding from '../../ui/Padding';
import Header from './Header';
import Message from './Message';
import { useMessages } from './useMessages';
import Field from './Field';
import { Dimensions } from 'react-native';

const Support: FC = () => {
	const { messages } = useMessages();
	const chatHeight = Dimensions.get('window').height - 250;

	return (
		<Layout>
			<Padding>
				<Header />
				<View>
					<ScrollView style={{ height: chatHeight }}>
						{messages.map((msg) => (
							<Message key={msg._id} message={msg} />
						))}
					</ScrollView>
				</View>
				<Field />
			</Padding>
		</Layout>
	);
};

export default Support;
