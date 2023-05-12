import type { FC } from 'react';
import { ScrollView, View } from 'react-native';
import tw from 'twrnc';
import SubHeading from '../../../ui/SubHeading';
import OtherItem from './item/OtherItem';
import { otherItems } from './data';

const Other: FC = () => {
	return (
		<View>
			<SubHeading text='Оплата услуг' />
			<ScrollView
				style={tw`py-5 h-36`}
				showsHorizontalScrollIndicator={false}
				horizontal
			>
				{otherItems.map((item) => (
					<OtherItem key={item.title} item={item} />
				))}
			</ScrollView>
		</View>
	);
};

export default Other;
