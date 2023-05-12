import StoryContainer from './src/components/screens/home/stories/StoryContainer';
import Navigation from './src/navigation/Navigation';
import { AuthProvider } from './src/providers/AuthProvider';
import { DataProvicer } from './src/providers/DataProvider';

export default function App() {
	return (
		<AuthProvider>
			<DataProvicer>
				<StoryContainer />
				<Navigation />
			</DataProvicer>
		</AuthProvider>
	);
}
