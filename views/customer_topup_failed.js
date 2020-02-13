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
import repeatimg from '../assets/images/repeat.png';
import failedimg from '../assets/images/failed.png';


export default class Customer_TopUp_Failed extends Component {
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
                        <Image style={styles.noteImg} source={failedimg}></Image>
                    </View>
                    <View style={{marginTop:30}}>
                        <Text style={styles.noteText}>Top Up Failed</Text>
                    </View>    
                    <TouchableOpacity style = {styles.transaction} onPress={() => this.props.navigation.navigate('customer_topup_success') }>
                        <Image style={{width:16, height:19, marginTop:3 }} source={repeatimg}></Image>
                        <Text style={styles.action_txt1}>RETRY</Text>
                    </TouchableOpacity>
                    <View style={{flexGrow:1}}></View>
                    <TouchableOpacity style = {styles.act_bottom} onPress={() => this.props.navigation.navigate('customer_home') }>
                        <Text style={styles.action_txt2}>Go to Wallet</Text>
                    </TouchableOpacity>
                 </LinearGradient>
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
    noteImg:{
        width:80,
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

    act_bottom:{
        flexDirection:'row',
        marginBottom: 30,
        width:'80%',
        height: 40,
        borderWidth:1,
        borderStyle:"solid",
        borderColor: 'white',
        borderRadius:6,
        alignItems:"center",
        justifyContent:"center"
    },

    action_txt2:{
        fontSize: 14,
        fontFamily: "Roboto",
        color: "#ffffff",
        letterSpacing:1,
        fontWeight: "700"
    },
});