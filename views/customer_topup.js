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
import AppFonts from '../components/styles/Global';
import backimg from '../assets/images/btn_back.png';
import uncheckedimg from '../assets/images/btn_unchecked.png';
import checkedimg from '../assets/images/btn_checked.png';
import btn_next_inactive from '../assets/images/btn_next_inactive.png';
import btn_next_active from '../assets/images/btn_next_active.png';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
const title = "Top Up Wallet";

export default class Customer_TopUp extends Component {
	static navigationOptions = {
		header: null
    };
    
    constructor(){
        super();
        this.state = {
            selIndex:0,
        }
    }
    
    selectAmount(){
        boxListArr = [];
        const marginx = 10;
        for ( let i = 1 ; i < 10 ; i++ )
        {
            const backStr = i * 5
            const amount = i * 50        
            boxListArr.push(
                <TouchableOpacity key={i} elevation={5} style={i==this.state.selIndex?styles.amount_active:styles.amount_inactive} onPress={() => this.activeAmount(i)}>
                    <Image style={i==this.state.selIndex?styles.btn_checked:styles.btn_unchecked} source={i==this.state.selIndex?checkedimg:uncheckedimg}></Image>
                    <Text style={styles.sel_amount}>$ {amount}</Text>
                    <Text style={styles.back_str}>{backStr}</Text>
                </TouchableOpacity> 
                   
            );
        }
        return boxListArr;
    }

    activeAmount(index){
        this.setState({selIndex:index})
    }

	render() {
		return (
            <View style={{height:'100%', alignItems:'center'}}>
                <StatusBar barStyle="dark-light" translucent={true} backgroundColor={GlobalColors.colorMainBackTop} hidden={false}></StatusBar>

                <LinearGradient colors = {[GlobalColors.colorMainBackTop, GlobalColors.colorMainBackMiddle, GlobalColors.colorMainBackBottom]} 
                    style = {styles.header}>
                    <View style={styles.header_bar}>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('customer_home') }>
                            <Image style={styles.header_back_btn} source={backimg}></Image>
                        </TouchableOpacity>
                        <View style={{width:'100%', marginLeft:'33%'}}>
                            <Text style={styles.pageTitle}>{title}</Text>
                        </View>
                    </View>
                    <View style={styles.header_content}>
                        <Text style={styles.header_lbl}>My Wallet Balance</Text>
                        <View style={{flexGrow:1}}></View>
                        <Text style={styles.header_val}>$ 2,549.30</Text>
                    </View>
                 </LinearGradient>
                 <View style={styles.backDown}></View>
                 <ImageBackground style={styles.backUp}></ImageBackground>
                 <View style={{marginTop:10}}>
                     <Text style={{color:GlobalColors.colorFontGray, fontWeight:'bold', fontSize:14}}>Select an amount to top up</Text>
                 </View>
                
                 <View style={{height:120, width:'100%', marginTop:20}}>
                      <ScrollView horizontal={true} style={styles.selAmount}>
                        {this.selectAmount()}
                     </ScrollView>
                 </View>
                
                 <View style={{marginTop:20, width:40, height:40, backgroundColor:'#eeeeee', borderRadius:20, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:"#bbbbbb"}}>
                        OR
                    </Text>
                </View>

                <View style={{marginTop:20}}>
                    <Text style={{fontSize:14, fontWeight:'bold',  color:"#aaaaaa"}}>
                        Enter other amount
                    </Text>
                </View>

                <View style={{marginTop:10, width:'80%'}}>
                    <TextInput style={styles.input_amount} textAlign={"center"} placeholder = "$ 00.00" placeholderTextColor = "#cccccc"></TextInput>
                </View>
                
                <TouchableOpacity style={{marginTop:30}} onPress={() => this.props.navigation.navigate('customer_payment_proc') }>
                    <Image style={this.state.selIndex>0?styles.btn_active:styles.btn_inactive} source={this.state.selIndex>0?btn_next_active:btn_next_inactive} ref="btn_next"></Image>
                </TouchableOpacity>

            </View>
		);
	}
}
const styles = StyleSheet.create({
    header:{
        height:'20%',
        width:'100%',
        borderRadius:15,
        alignItems:'center'
    },

    header_bar:{
        width: '100%',
        height:30,
        marginTop:25,
        flexDirection:'row',
        alignItems: 'center',
        // justifyContent: 'center'
        fontFamily:AppFonts.Roboto
    },
    header_back_btn:{
        marginLeft:10,
        marginTop:5,
        width:14,
        height:14
    },
    pageTitle:{
        fontFamily:AppFonts.Roboto,
        fontSize:14,
        fontWeight:'bold',
        color: '#ffffff',
        justifyContent:'center',
        width:'90%'
    },
    header_content:{
        width:'100%',
        height: 80,
        flexDirection: 'row',
        alignItems:'center'
    },
    header_lbl:{
        marginLeft:20,
        fontSize:12,
        fontWeight:'bold', 
        fontFamily:AppFonts.Roboto,
        color:'#ffffff'
    },
    header_val:{
        marginRight:20,
        fontSize:20,
        fontWeight:'bold', 
        fontFamily:AppFonts.Roboto,
        color:'#ffffff'
    },
    selAmount:{
        marginLeft:10,
        height:120,
        width:'100%',
    },

    amount_active:{
        width:140,
        height:116,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#ffa15d',
        marginLeft:20,
        borderRadius:8
    },
    amount_inactive:{
        width:140,
        height:116,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e0e9ed',
        marginLeft:20,
        borderRadius:8
    },
    btn_checked:{
        width: 18,
        height: 18,
        marginLeft:14,
        marginTop:14
    },
    btn_unchecked:{
        width: 18,
        height: 17,
        marginLeft:14,
        marginTop:14
    },

    sel_amount:{
        fontSize:20,
        fontWeight:'bold', 
        fontFamily:AppFonts.Roboto,
        color:GlobalColors.colorFontGray,
        marginLeft: 18,
        marginTop:40,
        zIndex:1
    },
    back_str:{
        fontSize:70,
        fontWeight:"700", 
        fontFamily:AppFonts.Roboto,
        marginLeft: 55,
        marginTop:-80,
        color:'#eeeeee'
    },
    input_amount:{
        borderBottomWidth:1,
        borderBottomColor:"#cccccc",
        borderStyle: 'solid',
        padding:15,
        fontFamily:AppFonts.Roboto,
        fontSize:24,
        fontWeight:'bold'
    },
    btn_inactive:{
        width:60,
        height:61
    },
    btn_active:{
        width:90,
        height:91
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