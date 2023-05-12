import type { FC } from 'react';
import { TextInput } from 'react-native';
import tailwind from 'twrnc';

type Props = {
	onChange: (val: string) => void;
	val: string;
	placeholder: string;
	isSecure?: boolean;
};

const Field: FC<Props> = ({ onChange, val, placeholder, isSecure }) => {
	return (
		<TextInput
			placeholder={placeholder}
			onChangeText={onChange}
			value={val}
			secureTextEntry={isSecure}
			autoCapitalize='none'
			style={tailwind`rounded-xl bg-gray-100 mt-3 p-3 w-full`}
		/>
	);
};

export default Field;
