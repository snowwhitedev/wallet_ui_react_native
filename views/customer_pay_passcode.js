import React, { Component } from 'react';
import { StyleSheet,
        Image,
        TouchableOpacity,
        StatusBar,
        View,
        Text,
    } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GlobalColors from '../components/styles/Global';
import logoimg from '../assets/images/pizza_logo.png';
import btn_close from '../assets/images/close.png';

export default class Customer_Pay_PassCode extends Component {
	static navigationOptions = {
		header: null
	};
    constructor(){
        super();
        this.state = {
            passcode: '389023',
            price: '00.00',
            productname:'Pizza Hut',
        }
    }
    componentDidMount() {

        this.setState({
//          passcode: this.props.navigation.getParam('passcode'),
        });
    }
	render() {
		return (
            <View style={{height:'100%', width:'100%', alignItems:'center'}}>
                <StatusBar barStyle="dark-content" backgroundColor='white'  translucent={true}  hidden={false}></StatusBar>
                <TouchableOpacity style = {{marginTop:30, flexDirection:'row'}} onPress={() => this.props.navigation.navigate('customer_home') }>
                    <View style={{flexGrow:1}}></View>
                    <Image source={btn_close} style={{marginRight:20, width:12, height:12}}></Image>
                </TouchableOpacity>
                
                <View style = {{top: 100, width:60, height: 60, borderRadius:30, borderColor:GlobalColors.colorFontGray, borderWidth:1, alignItems:'center', justifyContent:'center'}}>
                    <Image source={logoimg} style={{width:50, height:50}}></Image>
                </View>
                <View style = {{height: 50, marginTop: 130, marginLeft:10, alignItems:'center'}}>
                   <View style = {{flexDirection:'row'}} >
                       <Text style = {{color:'#757879', fontSize: 14}}>Transaction of </Text>
                       <Text style = {{color:'#000000', fontWeight:'bold', fontSize: 14}}>$ {this.state.price} </Text>
                   </View>
                   <View style = {{flexDirection:'row'}} >
                       <Text style = {{color:'#757879', fontSize: 14}}>with </Text>
                       <Text style = {{color:'#000000', fontWeight:'bold', fontSize: 14}}>{this.state.productname} </Text>
                   </View>                   
                </View>
                <Text style={{color:GlobalColors.colorFontGray, fontSize: 8, marginTop: 50}}>Passcode for this transaction</Text>
                <LinearGradient colors = {[GlobalColors.colorMainBackTop, GlobalColors.colorMainBackMiddle, GlobalColors.colorMainBackBottom]} 
                    style = {{height:40,width:'50%', borderRadius:5, alignItems:'center', marginTop: 10, justifyContent:'center'}}>
                        <Text style = {styles.passcod_txt}>{this.state.passcode}</Text>
                 </LinearGradient>

            </View>
		);
	}
}
const styles = StyleSheet.create({
    passcod_txt:{
        color:'#FFFFFF',
        fontSize: 18,
        fontWeight:'bold',
        letterSpacing: 8
    }

  });
