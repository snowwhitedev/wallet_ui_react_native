import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;   // height on portrait
const screenWidth = width < height ? width : height;    // width on portrait

const GlobalColors = {
    colorButtonBlue: '#0049C0',
    colorYellow: '#FFFFBE',
    colorPink: '#FFE6e6',   // start page backcolor
    colorGreen: '#E8F9E7',  // signup page backcolor
    colorDarkGreen: '#C5E2C3',
    colorBlue: '#E6EEFF',
    // self
    colorLoginBack: '#e8eff8',  // login page backcolor
    colorSignupCameraBack: '#d9d7d7',

    colorMainBackTop: '#503C80',
    colorMainBackMiddle: '#63368C',
    colorMainBackBottom: '#6F3293',
    colorFontGray:'#53606F',
    colorFontLightGray:'#647285',
    colorBackDown:'#EFEAF3',
    colorBackUp: '#C4B4D4'
};

const AppFonts = {
    Roboto         : "Roboto",
    Eurostile_Black: "eurostile_extended_black",
    Nimbus_Black: "Nimbus-Sans-D-OT-Black-Extended",
    Nimbus_Bold: "Nimbus-Sans-D-OT-Bold-Extended",
    Nimbus_Regular: "Nimbus-Sans-D-OT-Regular-Extended",
};


const GlobalValue = {
    TabBarHeight: Math.round(screenWidth * 0.13),
    // StatusBarHeight: (Platform.OS === 'ios') ? 25 : 0,
    HeaderArrowWidth: Math.round(screenWidth * 0.18),
    SearchHomeFeedLimit: 20,
    SearchOneUserFeed: 20,
    SearchHotLimit: 6,
    SearchNewLimit: 6,
    sizeSet: ["6", "8", "10", "12", "14", "16"],
    horizontalButtonLineTop: (Platform.OS === 'ios') ? -3 : 0,    // horizontal group buttons
    topHeader: 10,    // header too close arrow -> 
    toastDuration: 3000,
    // SearchCategory   1:all, 2: liked, 3:reviews, 4:clothes, 5:tech, 6:home, 7:books, 8:other
    // TransactionStatus:   0:declined  1:proposed, 2:accept, 3:after time pass, see Confirmationpage,success  4:ordercanceled 
    // ChatType:    0:declined, 1:proposed, 2:new pickup proposed, 3:accepted, 4: general chat
    // NotificationType 1~3: like, comment, follow
}

const GlobalStyles = StyleSheet.create({
    Header: {
//        fontFamily: AppFonts.Nimbus_Black,
        fontSize: 30,
        color: 'black'
    },
    HeaderMedium: {
//        fontFamily: AppFonts.Nimbus_Black, 
        fontSize: 26,
        color: 'black'
    },
    HeaderSmall: {
//        fontFamily: AppFonts.Nimbus_Black,
        fontSize: 22,
        color: 'black'
    },
});

export default {
    screenWidth,
    screenHeight,
    ...GlobalColors,
    ...AppFonts,
    ...GlobalValue,
    ...GlobalStyles,
};