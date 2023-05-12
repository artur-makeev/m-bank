import { useEffect, useState } from 'react';
import type { ICurrency } from './types';
import { Alert } from 'react-native';
import { getErrorMessage } from '../../../../utils/getErrorMessage';
import { URL } from './API';

export const useCurrencies = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [currencies, setCurrencies] = useState<ICurrency[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${URL}&base_currency=RUB`);
				const result = await response.json();

				setCurrencies([
					{
						name: 'USD',
						value: (1 / result.data.USD).toFixed(2),
					},
					{
						name: 'EUR',
						value: (1 / result.data.EUR).toFixed(2),
					},
					{
						name: 'GBP',
						value: (1 / result.data.GBP).toFixed(2),
					},
				]);
			} catch (error) {
				Alert.alert('Fetch currencies', getErrorMessage(Error));
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	return { isLoading, currencies };
};
