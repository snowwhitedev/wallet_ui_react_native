import React, { Component } from 'react';
import { StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    View,
    Text,
         
    ImageBackground} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import GlobalColors from '../components/styles/Global';
import userimg from '../assets/avartars/profileimage.png';
import histimg from '../assets/images/btn_hist.png';
const userName = "Jube Bowman";
const UserEmail = "jubebowman@gmail.com";
const ballance = "2,549";
const ballanceFloat = ".30";

export default class Merchant_Home extends Component {
	static navigationOptions = {
		header: null
    };
    render() {
		return (
            <View style={{height:'100%', alignItems:'center'}}>
                <StatusBar barStyle="dark-light" translucent={true} backgroundColor={GlobalColors.colorMainBackTop} hidden={false}></StatusBar>

                <LinearGradient colors = {[GlobalColors.colorMainBackTop, GlobalColors.colorMainBackMiddle, GlobalColors.colorMainBackBottom]} 
                    style = {{height:'80%',width:'100%', borderRadius:15, alignItems:'center'}}>
                    <View style={styles.container} >
                        <Image style={{width:40, height:40, borderRadius:20, marginLeft:10 }} source={userimg}></Image>
                        <View style = {{flex:2, flexDirection:'column', marginLeft:10}}>
                                <Text style={styles.textName}>{userName}</Text>
                                <Text style={styles.textEmail}>{UserEmail}</Text>
                        </View>
                    </View>
                    <Text style={{color:'white',top:200,  fontSize:16, fontWeight:'bold' }}>My Wallet Balance</Text>
                    <View style={{position:'relative', flexDirection:'row', justifyContent:'center', top:200}}>
                        <Text style={{color:'white',  fontSize:16, fontWeight:'bold',marginTop:5 }}>$  </Text>
                        <Text style={{color:'white',  fontSize:30, fontWeight:'bold' }}>{ballance}</Text>
                        <Text style={{color:'white',  fontSize:16, fontWeight:'bold',marginTop:5 }}>{ballanceFloat}</Text>
                    </View>

                    <TouchableOpacity style = {styles.transaction} onPress={() => this.props.navigation.navigate('merchant_trans_history') }>
                        <Image style={{width:12, height:12, marginTop:3 }} source={histimg}></Image>
                        <Text style={{color:'white',  fontSize:12 , marginLeft:5}}>Transaction History</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.backDown}></View>
                <ImageBackground style={styles.backUp}></ImageBackground>
                <TouchableOpacity style={{marginTop: 20, marginLeft:10 }} onPress={() => this.props.navigation.navigate('merchant_topup')}>
                    <Text style={{fontSize:14, color:GlobalColors.colorFontGray}}>Top Up Wallet</Text>
                </TouchableOpacity>
            </View>
		);
	}
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      position: 'absolute',
      top: 50,
      height:50,
      width:'90%',
      borderRadius:25,
      backgroundColor: '#ffffff',
      alignItems:'center',
      flexDirection:'row'
    },
    textName:{
        fontSize:12,
        fontWeight:'bold',
        color:GlobalColors.colorFontGray,
    },
    textEmail:{
        fontSize:10,
        color:GlobalColors.colorFontGray,
    },
    transaction:{
        flexDirection:'row',
        marginTop: 300,
        height: 15
    },
    backDown:{
        position: 'relative',
        height:30, 
        width:'80%',
        backgroundColor:GlobalColors.colorBackDown,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    backUp:{
        position: 'relative',
        top: -30,
        height:15, 
        width:'90%',
        backgroundColor:GlobalColors.colorBackUp,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        opacity:0.5
     }

  });