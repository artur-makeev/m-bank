import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { createContext, useMemo, useState } from 'react';

interface IContext {
	activeStories: string[] | null;
	setActiveStories: Dispatch<SetStateAction<string[] | null>>;
}

export const DataContext = createContext<IContext>({} as IContext);

type Props = {
	children: ReactNode;
};

export const DataProvicer: FC<Props> = ({ children }) => {
	const [activeStories, setActiveStories] = useState<string[] | null>(null);

	const value = useMemo(
		() => ({
			activeStories,
			setActiveStories,
		}),
		[activeStories],
	);

	return (
		<DataContext.Provider value={value}>{children}</DataContext.Provider>
	);
};
