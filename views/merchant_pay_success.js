import React, { Component } from 'react';
import { StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    View,
    Text
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import GlobalColors from '../components/styles/Global';
import successimg from '../assets/images/success.png';
import avartar from '../assets/avartars/avartar1.png';

export default class Customer_TopUp_Success extends Component {
	static navigationOptions = {
		header: null
    };
    render() {
		return (
            <View style={{height:'100%', alignItems:'center'}}>
                <StatusBar barStyle="dark-light" translucent={true} backgroundColor={GlobalColors.colorMainBackTop} hidden={false}></StatusBar>

                <LinearGradient colors = {[GlobalColors.colorMainBackTop, GlobalColors.colorMainBackMiddle, GlobalColors.colorMainBackBottom]} 
                    style = {{height:'100%',width:'100%', alignItems:'center', flexDirection:'column'}}>
                    
                    <View style={{marginTop:60}}>
                        <Image style={styles.noteImg} source={successimg}></Image>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={styles.noteText}>Top Up Success!</Text>
                    </View>
                    <View style={styles.trans_list}>
                        <View style={styles.trans_item}>
                            <Text style={styles.item_name}>Transaxtion ID</Text>
                            <View style={{flexGrow:1}}></View>
                            <Text style={styles.item_res}>TXN89389</Text>                                
                        </View>
                        <View style={styles.trans_item}>
                            <Text style={styles.item_name}>Date</Text>
                            <View style={{flexGrow:1}}></View>
                            <Text style={styles.item_res}>12/10/2018 10:45pm</Text>                                
                        </View>
                        <View style={styles.trans_item}>
                            <Text style={styles.item_name}>Amount</Text>
                            <View style={{flexGrow:1}}></View>
                            <Text style={styles.item_res}>$50</Text>                                
                        </View>
                        <View style={styles.trans_item}>
                            <Text style={styles.item_name}>Payed by</Text>
                            <View style={{flexGrow:1}}></View>
                            <View>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Image style={styles.item_image} source={avartar}></Image>
                                    <Text style={styles.item_res}>Lubomir Dvorak</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.trans_item_res}>
                            <Text style={styles.item_name}>New Wallet Ballance</Text>
                            <View style={{flexGrow:1}}></View>
                            <Text style={styles.item_res_val}>$ 1,300.00</Text>                                
                        </View>
                    </View>
                    <View style={{flexGrow:1}}></View>
                    <TouchableOpacity style = {styles.act_bottom} onPress={() => this.props.navigation.navigate('merchant_home') }>
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
    trans_list:{
        flexDirection:'column',
        marginTop: 40,
        width:'90%',
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:'white',
        borderRadius:10
    },
    trans_item:{
        paddingTop:20,
        paddingBottom:20,
        flexDirection:'row',
        borderBottomColor:'#f1f3f4',
        borderBottomWidth:1,
        borderStyle: "solid"
    },
    item_name:{
        fontFamily:"Roboto",
        fontSize:12,
        color:"#53606f",
        fontWeight:"400"
    },
    item_res:{
        fontSize:12,
        color: '#53606f',
        fontFamily:"Roboto",
        fontWeight:'500',
        textAlign:"right"
    },
    item_image:{
        width:29,
        height:29,
        borderRadius:15,
        marginRight:5
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
    trans_item_res:{
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',
    },
    item_res_val:{
        fontSize:22,
        color:'#53606f',
        fontFamily:'Roboto',
        fontWeight: "700"
    },
    action_txt2:{
        fontSize: 14,
        fontFamily: "Roboto",
        color: "#ffffff",
        letterSpacing:1,
        fontWeight: "700"
    },
});