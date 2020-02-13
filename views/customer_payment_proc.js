import React, { Component } from 'react';
import { StyleSheet,
    Text,
    Image,
    StatusBar,
    View} 
from 'react-native';

import GlobalColors from '../components/styles/Global';
import wallet_img from '../assets/images/wallet.png';



export default class Customer_Payment_Proc extends Component {
	static navigationOptions = {
		header: null
    };
    constructor(){
        super();
        this.state = {
            pendingnote:['.', '..', '...'],
            noteIndex: 0,
            bfound: 0,
        }
    }
   
    getRes(){
            
        if(this.state.noteIndex > 10){
            console.log("endddd")
            if(this.state.bfound == 0){
                this.props.navigation.navigate('customer_topup_failed')
                this.setState({bfound:1})
            }
        }
                    
    }

    componentDidMount() {
        setInterval(() => (
            this.setState(previousState => (
                { noteIndex: previousState.noteIndex + 1 }
            ))
        ), 300);
   }
   componentDidUpdate(){
       this.getRes()
   }
	render() {
		return (
            <View style={{height:'100%', alignItems:'center', justifyContent:'center'}}>
                <StatusBar barStyle="light-content" translucent={true} backgroundColor='white' hidden={false}></StatusBar>
                <Image  source={wallet_img}></Image>
                <View style={{marginTop:30, width:'100%', alignItems:'center'}}>
                    <Text style={styles.proc_text}>Payment processing{this.state.pendingnote[this.state.noteIndex % 3]}</Text>
                </View>
                <View style={{marginTop:20, width:'80%', alignItems:'center'}}>
                    <Text style={styles.note_text} >Please authorize the transaction of
                        Rs on your xxx platform
                    </Text>
                </View>
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
    proc_text:{
        fontSize: 18,
        color: "#503c7f",
        fontFamily: "Roboto",
        fontWeight: "700"
    },
    note_text:{
        fontSize: 14,
        color: '#53606f',
        fontFamily: "Roboto",
        fontWeight: "400",
        marginLeft:20,
        textAlign:'center'
 
    }


});