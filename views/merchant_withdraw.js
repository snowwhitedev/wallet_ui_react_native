import React, { Component } from 'react';
import { StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    View,
    Text,
    ImageBackground,
    CheckBox} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';
import GlobalColors from '../components/styles/Global';
import AppFonts from '../components/styles/Global';
import backimg from '../assets/images/btn_back.png';
import uncheckedimg from '../assets/images/btn_unchecked.png';
import checkedimg from '../assets/images/btn_checked.png';
import checkAllimg from '../assets/images/check.png'
import btn_next_inactive from '../assets/images/btn_next_inactive.png';
import btn_next_active from '../assets/images/btn_next_active.png';
import bank_logo1 from '../assets/images/bank_logo1.png';
import bank_logo2 from '../assets/images/bank_logo2.png';

const title = "Withdraw Money";

let bank_logo = [bank_logo1, bank_logo2]
let card_no = '****8979'
let acnt_name = 'Banck Account'
export default class Merchant_Withdraw extends Component {
	static navigationOptions = {
		header: null
    };
    
    constructor(){
        super();
        this.state = {
            selIndex:0,
            checkedAll:true,
        }
    }
    
    showDestination(){
        boxListArr = [];
        for ( let i = 1 ; i < 10 ; i++ )
        {
            let logo = bank_logo[i % 2]        
            boxListArr.push(
                <TouchableOpacity elevation={5} style={i==this.state.selIndex?styles.amount_active:styles.amount_inactive} onPress={() => this.activeAmount(i)}>
                    <View style={{flexDirection:'row', alignItems:'center',marginLeft:14, marginTop:14}}>
                        <Image style={i==this.state.selIndex?styles.btn_checked:styles.btn_unchecked} source={i==this.state.selIndex?checkedimg:uncheckedimg}></Image>
                        <View style={{flexGrow:1}}></View>
                        <Image source={logo} style={{marginRight:14}}></Image>
                    </View>
                    <Text style={{fontSize:12, color:'#404553', fontWeight:'700',marginTop:20, marginLeft:14}}>{card_no}</Text>    
                    <Text style={{fontSize:12, color:'#afb8bb', fontWeight:'400', marginLeft:14}}>{acnt_name}</Text>    
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
                 </LinearGradient>
                 <View style={styles.backDown}></View>
                 <ImageBackground style={styles.backUp}></ImageBackground>
                 
                 <View style={{marginTop:20}}>
                    <Text style={{fontSize:14, fontWeight:'bold',  color:"#aaaaaa"}}>
                        Enter amount to withdraw
                    </Text>
                </View>
                <View style={{marginTop:10, width:'100%', paddingHorizontal:30}}>
                    <TextInput style={styles.input_amount} textAlign={"center"} placeholder = "$ 00.00" placeholderTextColor = "#cccccc"></TextInput>
                </View>
                <View style={{marginTop:10, width:'100%', paddingHorizontal:30, flexDirection:'row'}}>
                    <TouchableOpacity  onPress={() => this.setState({checkedAll: !this.state.checkedAll})}>
                        <View style={this.state.checkedAll?styles.checkAll:styles.uncheckAll}>
                            <Image source={checkAllimg} style={{width:12, height:7}}></Image>
                        </View>
                    </TouchableOpacity >
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:12, color:'#afb8bb', fontWeight:'400'}}>Withdraw all available ballance</Text>
                        <Text style={{fontSize:12, color:'#53606f', fontWeight:'700'}}>$ 2,549.30</Text>
                    </View>
                </View>
               
                 
                <View style={{marginTop:40}}>
                    <Text style={{color:GlobalColors.colorFontGray, fontWeight:'bold', fontSize:14}}>
                            Withdraw Destination
                    </Text>
                </View>
                
                <View style={{height:120, width:'100%', marginTop:20}}>
                    <ScrollView horizontal={true} style={styles.selAmount}>
                    {this.showDestination()}
                    </ScrollView>
                </View>
                <TouchableOpacity style={{marginTop:30}} onPress={() => this.props.navigation.navigate('merchant_withdraw_success') }>
                    <Image style={this.state.selIndex>0?styles.btn_active:styles.btn_inactive} source={this.state.selIndex>0?btn_next_active:btn_next_inactive} ref="btn_next"></Image>
                </TouchableOpacity>

            </View>
		);
	}
}
const styles = StyleSheet.create({
    header:{
        width:'100%',
        borderRadius:15,
        alignItems:'center',
        paddingBottom:20
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
    checkAll:{
        width:16,
        height:16,
        borderRadius:2,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#ffa15d',
        backgroundColor:'#ffa361',
        alignItems:"center",
        justifyContent:'center'
    },
    uncheckAll:{
        width:16,
        height:16,
        borderRadius:2,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#ffa15d',
        backgroundColor:'#ffffff'
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
    },
    btn_unchecked:{
        width: 18,
        height: 17,

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