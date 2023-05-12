import type { FC } from 'react';
import { Text, View } from 'react-native';
import type { IMessage } from './types';
import { useAuth } from '../../../hooks/useAuth';
import tw from 'twrnc';

type Props = {
	message: IMessage;
};

const Message: FC<Props> = ({ message }) => {
	const { user } = useAuth();

	const isMsgByAuthUser = user?.uid === message.userId;

	return (
		<View
			style={tw`flex-row items-end rounded-lg ${
				isMsgByAuthUser
					? 'bg-blue-500 self-end'
					: 'bg-gray-200 self-start'
			} my-2 py-2 px-3`}
		>
			<Text
				style={tw`${isMsgByAuthUser ? 'text-white' : 'text-gray-800'}`}
			>
				{message.text}
			</Text>
			<Text
				style={{
					...tw`${
						isMsgByAuthUser ? 'text-white' : 'text-gray-700'
					} opacity-70 ml-2`,
					fontSize: 10,
				}}
			>
				{String(message.timestamp)}
			</Text>
		</View>
	);
};

export default Message;
