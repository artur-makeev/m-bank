import type { FC } from 'react';
import { useState } from 'react';
import { Alert, Pressable, TextInput, View } from 'react-native';
import { useAuth } from '../../../hooks/useAuth';
import tw from 'twrnc';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getErrorMessage } from '../../../utils/getErrorMessage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase';

const Field: FC = () => {
	const { user } = useAuth();
	const [message, setMessage] = useState('');

	const handleSendMessage = async () => {
		try {
			await addDoc(collection(db, 'messages'), {
				timestamp: serverTimestamp(),
				userId: user?.uid,
				text: message,
			});
		} catch (error) {
			Alert.alert('Err add new msg: ', getErrorMessage(error));
		} finally {
			setMessage('');
		}
	};

	return (
		<View style={tw`mt-3 flex-row items-center justify-between py-1`}>
			<TextInput
				placeholder='Введите сообщение'
				onChangeText={setMessage}
				value={message}
				autoCapitalize='none'
				style={tw`bg-gray-100 rounded-xl p-3 w-5/6 h-10 rounded-2xl`}
			/>
			<Pressable onPress={handleSendMessage}>
				<MaterialCommunityIcons
					name='send-circle-outline'
					size={42}
					style={tw`text-blue-300`}
				/>
			</Pressable>
		</View>
	);
};

export default Field;
