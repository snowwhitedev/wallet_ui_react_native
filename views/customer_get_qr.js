import React, { Component } from 'react';
import { StyleSheet,
    View,
    PermissionsAndroid,
} from 'react-native';

//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';

// const imageHeight = Math.round(GlobalStyle.screenWidth * 0.7)

import GlobalColors from '../components/styles/Global';

export default class Customer_Get_QR extends Component {
	static navigationOptions = {
		header: null
	};
	constructor(){
		super();
		this.state = {
			QR_Code_Value: '',
			Start_Scanner: false,
		};
	} 

	onQR_Code_Scan_Done = (QR_Code) => {

		this.setState({ QR_Code_Value: QR_Code });

		this.setState({ Start_Scanner: false });
		console.log(QR_Code)
		this.props.navigation.navigate('customer_pay_passcode', {QRcodeVal: this.state.QR_Code_Value});
	}   

	componentDidMount() {
		this.props.navigation.navigate('customer_pay_passcode', {QRcodeVal: this.state.QR_Code_Value});
 	}
	open_QR_Code_Scanner=()=> {
		var that = this;
		if (Platform.OS === 'android') {
			async function requestCameraPermission() {
				try {
					const granted = await PermissionsAndroid.request(
						PermissionsAndroid.PERMISSIONS.CAMERA, {
						'title': 'Camera App Permission',
						'message': 'Camera App needs access to your camera '
						}
					)
					if (granted === PermissionsAndroid.RESULTS.GRANTED) {
						that.setState({ QR_Code_Value: '' });
						that.setState({ Start_Scanner: true });
					} else {
						alert("CAMERA permission denied");
					}
				} catch (err) {
					alert("Camera permission err", err);
					console.warn(err);
				}
			}
			requestCameraPermission();
		} else {
			that.setState({ QR_Code_Value: '' });
			that.setState({ Start_Scanner: true });
		}
	}
	render() {
   	return (
			<View style={{ flex: 1 }}>
				<CameraKitCameraScreen
					showFrame={true}
					scanBarcode={true}
					laserColor={'#FF3D00'}
					frameColor={'#00C853'}
					colorForScannerFrame={'black'}
					onReadCode={event =>
						this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
					}
				/>
			</View>
		);
	}
}



