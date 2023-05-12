import type { FC, ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import tailwind from 'twrnc';

type Props = {
	isScrollView?: boolean;
	children: ReactNode;
};

const Layout: FC<Props> = ({ children, isScrollView = true }) => {
	return (
		<View style={tailwind`h-full w-full bg-white pt-16`}>
			{isScrollView ? <ScrollView>{children}</ScrollView> : children}
		</View>
	);
};

export default Layout;
