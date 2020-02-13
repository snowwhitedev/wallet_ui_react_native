import React, { Component } from 'react';
import { StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    View,
    Text,
    TextInput,   
    ImageBackground} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import GlobalColors from '../components/styles/Global';
import userimg from '../assets/avartars/profileimage.png';
import btn_close from '../assets/images/close_white.png';
import btn_next from '../assets/images/btn_next_active.png';
const userName = "Jube Bowman";
const req_text = "Wants to make a payment";


export default class Merchant_TopUp extends Component {
	static navigationOptions = {
		header: null
    };
    constructor(){
        super();
        this.state = {
            alertText:'',
            maxVal:400,
            inputAmount:'00.00'
        }
    }
    diplayNote(text){
        let len = text.trim().length
        if(len  > 1){
            let input = text.slice(1)
            this.setState({inputAmount:input.trim()})
            if(parseFloat(input) > parseFloat(this.state.maxVal)){
                this.setState({alertText:"Insufficient fund in cusotmer account"})
            }
        } else {
            this.setState({inputAmount:''})
        }
       
    }
    render() {
		return (
            <View style={{height:'100%', alignItems:'center'}}>
                <StatusBar barStyle="dark-light" translucent={true} backgroundColor={GlobalColors.colorMainBackTop} hidden={false}></StatusBar>

                <LinearGradient colors = {[GlobalColors.colorMainBackTop, GlobalColors.colorMainBackMiddle, GlobalColors.colorMainBackBottom]} 
                    style = {{height:'80%',width:'100%', borderRadius:15, alignItems:'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexGrow:1}}></View>
                        <TouchableOpacity style={styles.btn_close} onPress={() => this.props.navigation.navigate('merchant_home') }>
                            <Image  source={btn_close} style={{zIndex:10}}></Image>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.container} >
                        <Image style={{width:48, height:48, borderRadius:20, marginLeft:10 }} source={userimg}></Image>
                        <View style = {{flex:2, flexDirection:'column', marginLeft:10}}>
                            <Text style={styles.textName}>{userName}</Text>
                            <Text style={styles.textEmail}>{req_text}</Text>
                        </View>
                    </View>
                    
                    <View style={{marginTop:100, width:'80%'}}>
                        <TextInput style={styles.input_amount} textAlign={"center"} placeholder = "$ 00.00" placeholderTextColor = "#ffffff"
                            onChangeText={(text) =>this.diplayNote(text)}
                            value={"$ " + this.state.inputAmount}>
                        </TextInput>
                        <Text style={styles.noteText}>{this.state.alertText}</Text>
                    </View>

                </LinearGradient>
                <View style={styles.backDown}></View>
                <ImageBackground style={styles.backUp}></ImageBackground>
                <TouchableOpacity style={{width:80, height:80, marginTop:-90, borderRadius:40 }} onPress={() => this.props.navigation.navigate('merchant_pay_enter_code') }>
                    <Image  source={btn_next} style={{zIndex:10}}></Image>
                </TouchableOpacity>
                
            </View>
		);
	}
}
const styles = StyleSheet.create({
    btn_close:{
        width:12,
        height:12,
        marginTop:30,
        marginRight:20, 
        flexDirection:"row"
    },
    container: {
      marginTop: 50,
      width:'90%',
      borderRadius:25,
      alignItems:'center',
      flexDirection:'row'
    },
    textName:{
        fontSize:12,
        fontWeight:'bold',
        color:'#ffffff',
    },
    textEmail:{
        fontSize:10,
        color:'#ffffff',
    },

    input_amount:{
        borderBottomWidth:1,
        borderBottomColor:"#ffffff",
        borderStyle: 'solid',
        padding:15,
        fontFamily:"Roboto",
        fontSize:24,
        fontWeight:'bold',
        color:'#ffffff'
    },

    noteText:{
        marginTop:5,
        fontSize: 12,
        color: '#ff4e64',
        fontFamily: "Roboto",
        fontWeight: '400',
        textAlign: "center"
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