export type TypeCurrency = 'RUB' | 'USD';
export type TypeName = 'M-Bank Black' | 'M-Bank Gold';

export interface IAccount {
	_id: string;
	userId: string;
	balance: number;
	cardNumber: string;
	currency: TypeCurrency;
	name: TypeName;
}
