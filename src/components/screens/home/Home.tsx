import type { FC } from 'react';
import Layout from '../../layouts/Layout';
import Header from './Header';
import Stories from './stories/Stories';
import Accounts from './accounts/Accounts';
import ApplyNewProduct from './accounts/apply-new-products/ApplyNewProduct';

const Home: FC = () => {
	return (
		<Layout>
			<Header />
			<Stories />
			<Accounts />
			<ApplyNewProduct />
		</Layout>
	);
};

export default Home;
