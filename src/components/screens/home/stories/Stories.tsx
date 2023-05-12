import type { FC } from 'react';
import { ScrollView, View } from 'react-native';
import tw from 'twrnc';
import { useStories } from './useStories';
import Loader from '../../../ui/Loader';
import StoryItem from './StoryItem';

const Stories: FC = () => {
	const { stories, isLoading } = useStories();

	return (
		<>
			<View style={tw`my-7`}>
				{isLoading ? (
					<Loader />
				) : (
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
					>
						{stories.map((story) => (
							<StoryItem key={story._id} story={story} />
						))}
					</ScrollView>
				)}
			</View>
		</>
	);
};

export default Stories;
