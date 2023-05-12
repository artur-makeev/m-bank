import type { FC } from 'react';
import Padding from '../../ui/Padding';
import tw from 'twrnc';
import { menu } from './menu';
import NavItem from './NavItem';
import type { TypeRootStackParamList } from '../../../navigation/types';

type Props = {
	navigate: (screenName: keyof TypeRootStackParamList) => void;
	currentRoute: string;
};

const Footer: FC<Props> = ({ navigate, currentRoute }) => {
	return (
		<Padding
			style={{
				...tw`flex-row justify-between items-center w-full bg-gray-50 px-0 pb-5 pt-2`,
				borderTopColor: '#E1E1E1',
				borderTopWidth: 1,
			}}
		>
			{menu.map((item) => (
				<NavItem
					key={item.displayTitle}
					item={item}
					navigate={navigate}
					currentRoute={currentRoute}
				/>
			))}
		</Padding>
	);
};

export default Footer;
