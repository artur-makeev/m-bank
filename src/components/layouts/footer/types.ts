import type { TypeRootStackParamList } from '../../../navigation/types';
import type { AntDesign } from '@expo/vector-icons';

export interface IFooterItem {
	iconName: keyof typeof AntDesign.glyphMap;
	title: keyof TypeRootStackParamList;
	displayTitle: string;
}
