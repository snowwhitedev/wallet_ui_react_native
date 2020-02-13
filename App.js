import React, {Fragment} from 'react';
import {
  View,
  Text,
} from 'react-native';

import Customer_Home from './views/customer_home'
import AppRouter from './route/index'

const App = () => {
	return (
		<Fragment>
			<AppRouter></AppRouter>
		</Fragment>
	);
};


export default App;
