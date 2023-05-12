import type { IFooterItem } from '../../../layouts/footer/types';

export interface IOtherItem extends Pick<IFooterItem, 'iconName'> {
	title: string;
}
