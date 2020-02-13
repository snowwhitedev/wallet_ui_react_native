import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '../views/login';

import Customer_Home from '../views/customer_home';
import Customer_TopUp from '../views/customer_topup';
import Customer_Payment_Proc from '../views/customer_payment_proc';
import Customer_TopUp_Failed from '../views/customer_topup_failed';
import Customer_TopUp_Success from '../views/customer_topup_success';
import Customer_Get_QR from '../views/customer_get_qr';
import Customer_Pay_PassCode from '../views/customer_pay_passcode'

import Merchnat_Home from '../views/merchant_home'
import Merchant_TopUp from '../views/merchant_topup'
import Merchant_Pay_Enter_Code from '../views/merchant_pay_enter_code'
import Merchant_Pay_Succes from '../views/merchant_pay_success'
import Merchant_Trans_History from '../views/merchant_trans_history'
import Merchant_Withdraw from '../views/merchant_withdraw'
import Merchant_Withdraw_Success from '../views/merchant_withdraw_success'

let headerOptions = {
	headerStyle: {
		display: 'none'
	}
}

const AppRouter = createStackNavigator({
	'login':{
		screen:Login
	},
	'customer_home': {
		screen:	Customer_Home,
	},
	'customer_topup':{
		screen:Customer_TopUp,
	},
	'customer_payment_proc':{
		screen:Customer_Payment_Proc
	},
	'customer_topup_failed':{
		screen:Customer_TopUp_Failed
	},
	'customer_topup_success':{
		screen:Customer_TopUp_Success
	},
	'customer_get_qr':{
		screen:Customer_Get_QR
	},
	'customer_pay_passcode':{
		screen:Customer_Pay_PassCode
	},
	'merchant_home':{
		screen: Merchnat_Home
	},
	'merchant_topup':{
		screen: Merchant_TopUp
	},
	'merchant_pay_enter_code':{
		screen: Merchant_Pay_Enter_Code
	},
	'merchant_pay_success':{
		screen:Merchant_Pay_Succes
	},
	'merchant_trans_history':{
		screen:Merchant_Trans_History
	},
	'merchant_withdraw':{
		screen:Merchant_Withdraw
	},
	'merchant_withdraw_success':{
		screen:Merchant_Withdraw_Success
	}
	
}, {
	initialRouteName: 'login'
})

export default createAppContainer( AppRouter);