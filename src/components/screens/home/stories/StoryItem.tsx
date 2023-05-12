import type { FC } from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import type { IStory } from './types';
import tw from 'twrnc';
import { useData } from '../../../../hooks/useData';

type Props = {
	story: IStory;
};

const StoryItem: FC<Props> = ({ story }) => {
	const { setActiveStories } = useData();
	return (
		<Pressable onPress={() => setActiveStories(story.images)}>
			<View
				style={{
					...tw`w-24 h-24 rounded-2xl ml-4 border-solid border-blue-400`,
					padding: 2,
					borderWidth: 1,
				}}
			>
				<ImageBackground
					source={{ uri: story.images[0] }}
					resizeMode='cover'
					style={tw`w-full h-full justify-end`}
					imageStyle={tw`rounded-xl`}
				>
					<Text
						style={{ ...tw`text-white`, fontSize: 12, margin: 8 }}
					>
						{story.heading}
					</Text>
				</ImageBackground>
			</View>
		</Pressable>
	);
};

export default StoryItem;
