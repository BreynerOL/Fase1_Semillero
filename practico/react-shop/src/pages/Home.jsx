import React from 'react';
import ProductList from '../containers/ProductList';
import Header from '../components/Header';

const Home = () => {
	return (
		<>
            <Header />
			<ProductList />
		</>
	);
}

export default Home;