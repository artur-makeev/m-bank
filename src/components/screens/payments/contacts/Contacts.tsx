import type { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { useContacts } from './useContacts';
import tw from 'twrnc';
import SubHeading from '../../../ui/SubHeading';
import Loader from '../../../ui/Loader';
import ContactItem from './ContactItem';

const Contacts: FC = () => {
	const { contacts, isLoading } = useContacts();

	return (
		<View style={tw`my-8`}>
			<SubHeading text={'По номеру телефона'} />
			{isLoading ? (
				<Loader />
			) : (
				<ScrollView
					style={tw`mt-5`}
					showsHorizontalScrollIndicator={false}
					horizontal
				>
					{contacts.map((contact) => (
						<ContactItem key={contact._id} contact={contact} />
					))}
				</ScrollView>
			)}
		</View>
	);
};

export default Contacts;
