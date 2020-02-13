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
import repeatimg from '../assets/images/repeat.png';
import walletimg from '../assets/images/wallet.png';


export default class Login extends Component {
	static navigationOptions = {
		header: null
    };
    render() {
		return (
            <View style={{height:'100%', alignItems:'center'}}>
                <StatusBar barStyle="dark-light" translucent={true} backgroundColor={GlobalColors.colorMainBackTop} hidden={false}></StatusBar>

                <LinearGradient colors = {[GlobalColors.colorMainBackTop, GlobalColors.colorMainBackMiddle, GlobalColors.colorMainBackBottom]} 
                    style = {{height:'100%',width:'100%', alignItems:'center', flexDirection:'column'}}>
                    
                    <View style={{marginTop:100}}>
                        <Image style={styles.noteImg} source={walletimg}></Image>
                    </View>
                    <View style={{marginTop:30}}>
                        <Text style={styles.noteText}>Select User type</Text>
                    </View>    
                    <TouchableOpacity style = {styles.transaction} onPress={() => this.props.navigation.navigate('customer_home') }>
                        <Text style={styles.action_txt1}>Customer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.transaction} onPress={() => this.props.navigation.navigate('merchant_home') }>
                        <Text style={styles.action_txt1}>Merchant</Text>
                    </TouchableOpacity>
                 </LinearGradient>
            </View>
		);
	}
}
const styles = StyleSheet.create({

    noteImg:{
        width:97,
        height:75
    },
    noteText:{
        fontSize: 18,
        color: "#ffffff",
        fontFamily: "Roboto",
        fontWeight: '700',
        textAlign: "center",
    },
    transaction:{
        flexDirection:'row',
        marginTop: 30,
        width:158,
        height: 44,
        borderWidth:1,
        borderStyle:"solid",
        borderColor: 'white',
        borderRadius:6,
        alignItems:"center",
        justifyContent:"center"

    },
    action_txt1:{
        fontSize: 12,
        fontFamily: "Roboto",
        color: "#ffffff",
        fontWeight: "bold",
        letterSpacing:1,
        marginLeft: 3
    },
});