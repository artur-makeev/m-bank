import type { FC } from 'react';
import { useState } from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import { useData } from '../../../../hooks/useData';
import tw from 'twrnc';

const StoryContainer: FC = () => {
	const { activeStories, setActiveStories } = useData();
	const [storyIndex, setStoryIndex] = useState(0);

	const handlePress = () => {
		setStoryIndex((prev) => {
			if (activeStories && prev + 1 === activeStories.length) {
				setActiveStories(null);
				return 0;
			}
			return prev + 1;
		});
	};

	return (
		activeStories && (
			<Pressable onPress={handlePress}>
				<View style={tw`w-full h-full`}>
					<ImageBackground
						source={{ uri: activeStories[storyIndex] }}
						style={{ width: '100%', height: '100%' }}
					/>
				</View>
			</Pressable>
		)
	);
};

export default StoryContainer;
