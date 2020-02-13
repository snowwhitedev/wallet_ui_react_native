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
import dropdownimg from '../assets/images/dropdown.png'
import dropup from '../assets/images/dropup.png'
import avartar from '../assets/avartars/avartar1.png'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
const title = "Transaction History";

let listItems = {}
let sumsItems = {}

export default class Merchant_Trans_History extends Component {
	static navigationOptions = {
		header: null
    };
    
    constructor(){
        super();
        this.state = {
            selIndex:false,
            listdata:[],
        }
        this.loadData()
    }
    displayDateSums(){
        let listArr = []
        if(!this.state.selIndex){
            listArr.push(
                <View style={styles.date_ballance_item}>
                    <Text style={{fontSize:12, color:'#ffffff', fontWeight:'400'}}>Today</Text>
                    <View style={{flexGrow:1}}></View>
                    <Text style={{fontSize:12, color:"#ffffff", fontWeight:'700'}}>$ 1,200</Text>
                </View>
            )
        } else {
            for(let dur in sumsItems){
                listArr.push(
                    <View style={styles.date_ballance_item}>
                        <Text style={{fontSize:12, color:'#ffffff', fontWeight:'400'}}>{dur}</Text>
                        <View style={{flexGrow:1}}></View>
                        <Text style={{fontSize:12, color:"#ffffff", fontWeight:'700'}}>{sumsItems[dur]}</Text>
                    </View>
                )
            }
        }
        return listArr
    }
    displayItems(){
        let listArr = []
        let items = listItems
        for(let date_note in items){
            listArr.push(
                <View style={{width:'100%'}}>
                    <Text style={styles.date_note}>{date_note}</Text>
                </View>
            )
            let subitem = items[date_note]
            
            for(let i = 0; i < subitem.length; i++){
                let type = subitem[i]['trans_type']
                let img = subitem[i]['img']
                let txt_name, txt_time, txt_amount = ''
                let color = ''
                if(type == 0){
                    txt_name = 'Money Added from ' + subitem[i]['name']
                    txt_amount = "+US$" + subitem[i]['amount']
                    color = '#0ec069'
                } else if(type == 1){
                    txt_name = 'Money Sent to ' + subitem[i]['name']
                    txt_amount = "-US$" + subitem[i]['amount']
                    color = '#404553'
                }
                txt_time = subitem[i]['time']
                listArr.push(
                    <View style={styles.listitem}>
                        <Image source={img} style={styles.listavartar}></Image>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:12, color:'#404553', fontWeight:'700'}}>{txt_name}</Text>
                            <Text style={{fontSize:12, color:'#afb8bb', fontWeight:'400'}}>{txt_time}</Text>
                        </View>
                        <View style={{flexGrow:1}}></View>
                        <Text style={{fontSize:12, color:color, fontWeight:'700'}}>{txt_amount}</Text>
                    </View>
                )
            }
        }
        return listArr
    }

    loadData(){
        let items = {}
        items['TODAY'] = []
        for(let i = 0; i < 3; i++){
            let item = {}
            item['name'] = 'HSBC'
            item['img']  = avartar
            item['trans_type'] = i % 2
            item['time'] = '10:43 AM'
            item['amount'] = '50.00'
            items['TODAY'].push(item)
        }
        
        items['JAN 13'] = []
        for(let i = 0; i < 2; i++){
            let item = {}
            item['name'] = 'HSBC'
            item['img']  = avartar
            item['trans_type'] = i % 2
            item['time'] = '13/01/2018: 10:43 AM'
            item['amount'] = '50.00'
            items['JAN 13'].push(item)
        }
        items['FEB 13'] = []
        for(let i = 0; i < 2; i++){
            let item = {}
            item['name'] = 'HSBC'
            item['img']  = avartar
            item['trans_type'] = i % 2
            item['time'] = '13/02/2018: 10:43 AM'
            item['amount'] = '50.00'
            items['FEB 13'].push(item)
        }

        listItems = items

        sumsItems['Today'] = '$ 1,200.00'
        sumsItems['2 Days'] = '$ 2,000.00'
        sumsItems['3 Days'] = '$ 2549.30'
    }


	render() {
		return (
            <View style={{ alignItems:'center', overflow:"scroll"}} >
                <StatusBar barStyle="dark-light" translucent={true} backgroundColor={GlobalColors.colorMainBackTop} hidden={false}></StatusBar>

                <LinearGradient colors = {[GlobalColors.colorMainBackTop, GlobalColors.colorMainBackMiddle, GlobalColors.colorMainBackBottom]} 
                    style = {styles.header}>
                    <View style={styles.header_bar}>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('merchant_home') }>
                            <Image style={styles.header_back_btn} source={backimg}></Image>
                        </TouchableOpacity>
                        <View style={{width:'100%', marginLeft:'33%'}}>
                            <Text style={styles.pageTitle}>{title}</Text>
                        </View>
                    </View>
                    <View style={styles.header_content}>
                        <View>
                            <Text style={styles.header_lbl}>My Wallet Balance</Text>
                            <Text style={styles.header_val}>$ 2,549.30</Text>
                        </View>
                        <View style={{flexGrow:1}}></View>
                        <TouchableOpacity style={{marginRight:20}} onPress={() => this.props.navigation.navigate('merchant_withdraw') }>
                            <View style={styles.btn_withdraw}>
                                <Text style={styles.action_txt}>Withdraw</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.header_filter}>
                        <View style={styles.date_expand}>
                            {this.displayDateSums()}
                        </View>
                        <TouchableOpacity style={styles.date_expand_action} onPress={() =>this.setState({selIndex:!this.state.selIndex})}>
                            <Image style={{width:12, height:6}} source={!this.state.selIndex?dropdownimg:dropup}></Image>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <View style={styles.backDown}></View>
                <ImageBackground style={styles.backUp}></ImageBackground>
                <ScrollView style={{height:500, width:'100%'}}>
                    <View style={styles.trans_list}>
                        {this.displayItems()}
                    </View>
                </ScrollView>
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
        height: 60,
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
        marginLeft:20,
        fontSize:20,
        fontWeight:'bold', 
        fontFamily:AppFonts.Roboto,
        color:'#ffffff'
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
     },
     btn_withdraw:{
        width: 89,
        height: 28,
        borderRadius: 4,
        backgroundColor:'#ffa15d',
        alignItems:'center',
        justifyContent:'center'
        // shadowColor: "rgba(255,129,23,0.33)",
        // shadowOpacity:5,
    },
    action_txt:{
        fontSize:12,
        color:'#ffffff',
        fontWeight:'700',
        textAlign:'center'
    },
    header_filter:{
        width:'100%',
        flexDirection: 'row',
     },
    date_expand_action:{
        marginTop:5,
        width:32,
        height:32,
        borderRadius:16,
        backgroundColor: "#8642b4",
        alignItems:'center',
        justifyContent:'center',
        marginRight:20
    },
    date_expand:{
        marginLeft:20,
        width:'80%'
    },
    date_ballance_item:{
        marginTop:3,
        width:'95%',
        backgroundColor: "#8642b4",
        borderRadius:4,
        flexDirection:'row',
        padding:10
    },

    trans_list:{
        width:'100%',
        padding:10,
        flexDirection:'column'
    },
    date_note:{
        textAlign:'left',
        fontSize: 10,
        color:'#53606f',
        fontWeight:'400',
        marginLeft:10
    },
    listitem:{
        marginTop:5,
        flexDirection:'row',
        padding:10 ,
        width:'100%', 
        borderRadius:6, 
        borderWidth:1,
        borderColor:'#e0e9ed',
        borderStyle:'solid'
    },
    listavartar:{
        width: 29,
        height: 29,
        borderRadius: 15,
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'#ffffff'
    }

  });