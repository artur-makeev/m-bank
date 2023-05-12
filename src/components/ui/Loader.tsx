import type { FC } from 'react';
import { ActivityIndicator } from 'react-native';

const Loader: FC = () => {
	return <ActivityIndicator size='large' color='#212A3E' />;
};

export default Loader;
