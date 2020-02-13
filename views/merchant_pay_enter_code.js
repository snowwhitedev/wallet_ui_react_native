import React, { Component } from 'react';
import { StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    View,
    Text,}
from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import GlobalColors from '../components/styles/Global';
import userimg from '../assets/avartars/profileimage.png';
import btn_close from '../assets/images/close.png';
import btn_next from '../assets/images/btn_next_active.png';
import code_none_img from '../assets/images/code_none.png';
import code_input_img from '../assets/images/code_input.png';
import backspace from '../assets/images/backspace.png';
const userName = "Jube Bowman";
const req_text = "$ 350";


export default class Merchant_Pay_Enter_Code extends Component {
	static navigationOptions = {
		header: null
    };
    constructor(){
        super();
        this.state = {
            inputCode:'',
        }
    }
    showCode(){
        let len = this.state.inputCode.length
        let codeInoutArr = []
        for(let i = 0; i < len; i++){
            codeInoutArr.push(
                <Image style={styles.code_img} source={code_input_img}></Image>
            )
        }
        for(let i = len; i < 6; i++){
            codeInoutArr.push(
                <Image style={styles.code_img} source={code_none_img}></Image>
            )
        }
        return codeInoutArr
    }
    
    inputCode(code){
        let len = this.state.inputCode.length
        let current = this.state.inputCode
        let newcode = ''
        if(code == 10){
            if(len > 0){
                newcode = current.slice(len)
                this.setState({inputCode:newcode})
            }
        }else{
            if(len < 6){
                newcode = current + code
                this.setState({inputCode:newcode})
            }
        }
    }
    
    render() {
		return (
            <View style={{height:'100%', alignItems:'center'}}>
                <StatusBar barStyle="dark-light" translucent={true}  hidden={false}></StatusBar>
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
                <View style={{marginTop:20}}>
                    <Text style={styles.noteText}>Enter Passcode for this transaction</Text>
                </View>
                <View style={styles.codeInput}>
                    {this.showCode()}
                </View>
                
                <LinearGradient colors = {[GlobalColors.colorMainBackTop, GlobalColors.colorMainBackMiddle, GlobalColors.colorMainBackBottom]} 
                    style = {styles.keyboard}>
                    <View style={styles.key_line}>
                        <TouchableOpacity style={styles.key} onPress={() => this.inputCode(3)}>
                            <Text style={styles.key_txt}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.key} onPress={() => this.inputCode(2)}>
                            <Text style={styles.key_txt}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.key} onPress={() => this.inputCode(1)}>
                            <Text style={styles.key_txt}>1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.key_line}>
                        <TouchableOpacity style={styles.key} onPress={() => this.inputCode(6)}>
                            <Text style={styles.key_txt}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.key} onPress={() => this.inputCode(5)}>
                            <Text style={styles.key_txt}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.key} onPress={() => this.inputCode(4)}>
                            <Text style={styles.key_txt}>4</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.key_line}>
                        <TouchableOpacity style={styles.key} onPress={() => this.inputCode(9)}>
                            <Text style={styles.key_txt}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.key} onPress={() => this.inputCode(8)}>
                            <Text style={styles.key_txt}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.key} onPress={() => this.inputCode(7)}>
                            <Text style={styles.key_txt}>7</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.key_line}>
                        <TouchableOpacity style={styles.key} onPress={() => this.inputCode(10)}>
                            <Image style={styles.backspace} source={backspace}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.key} onPress={() => this.inputCode(0)}>
                            <Text style={styles.key_txt}>0</Text>
                        </TouchableOpacity>
                        <View style={styles.key}>
                        </View>
                    </View>

                    <TouchableOpacity style={{width:80, height:80, marginTop:0, borderRadius:40 }} onPress={() => this.props.navigation.navigate('merchant_pay_success') }>
                        <Image  source={btn_next} style={{zIndex:10}}></Image>
                    </TouchableOpacity>
                </LinearGradient>
              
            </View>
		);
	}
}
const styles = StyleSheet.create({
    btn_close:{
        width:12,
        height:12,
        marginTop:40,
        marginRight:20, 
        flexDirection:"row"
    },
    container: {
      marginTop: 20,
      width:'90%',
      borderRadius:25,
      alignItems:'center',
      flexDirection:'row'
    },
    textName:{
        fontSize:16,
        fontWeight:'700',
        color:'#53606f',
        fontFamily:'Roboto'
    },
    textEmail:{
        fontSize:16,
        color:'#53606f',
        fontWeight:'400',
        fontFamily:'Roboto'
    },

    noteText:{
        marginTop:20,
        fontSize: 16,
        color: '#53606f',
        fontFamily: "Roboto",
        fontWeight: '700',
        textAlign: "center",
        lineHeight: 17
    },

    codeInput:{
        marginTop: 20,
        flexDirection: 'row'
    },
    code_img:{
        marginLeft:10
    },
    
    keyboard:{
        width:'100%',
        flexDirection: 'column',
        alignItems:"center",
        
        flex:3,
        paddingTop:20,
        marginTop:30
    },
    key_line:{
        flexDirection:'row-reverse',
        width: "80%",
        alignItems:'center',
        // justifyContent:"center",
        justifyContent:"space-between"

    },
    key:{
        width:70,
        height:70,
        alignItems:'center',
        justifyContent:'center'
    },
    key_txt:{
        fontSize: 32,
        letterSpacing: 0,
        color: '#ffffff',
        fontFamily: "Roboto",
        fontWeight: "400",
        textAlign: 'center'
    },
    backspace:{
        width:23,
        height:18
    }



});