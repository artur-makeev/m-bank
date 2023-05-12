import type { FC } from 'react';
import { Text, View } from 'react-native';
import { useProfile } from './useProfile';
import Heading from '../../ui/Heading';
import Layout from '../../layouts/Layout';
import Padding from '../../ui/Padding';
import Loader from '../../ui/Loader';
import Field from '../../ui/Field';
import Button from '../../ui/Button';
import { useAuth } from '../../../hooks/useAuth';
import { useUpdateProfile } from './useUpdateProfile';
import tw from 'twrnc';

const Profile: FC = () => {
	const { logout } = useAuth();
	const {
		isLoading: isProfileLoading,
		name,
		setName,
		profile,
	} = useProfile();

	const { isLoading, isSuccess, updateProfile } = useUpdateProfile(
		name,
		profile.docId,
	);

	return (
		<Layout>
			<Heading text='Профиль' isCenter={true} />
			<Padding>
				{isSuccess && (
					<View style={tw`bg-green-500 p-3 py-2 rounded-lg`}>
						<Text style={tw`text-white text-center`}>
							Профиль успешно обновлен
						</Text>
					</View>
				)}
				{isProfileLoading || isLoading ? (
					<Loader />
				) : (
					<>
						<Field
							onChange={setName}
							val={name}
							placeholder='Введите имя'
						/>
						<Button
							onPress={updateProfile}
							title='Обновить профиль'
						/>
						<Button
							onPress={logout}
							title='Выйти'
							colors={['bg-gray-200', '#D6D8DB']}
						/>
					</>
				)}
			</Padding>
		</Layout>
	);
};

export default Profile;
