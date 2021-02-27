import {StyleSheet} from "react-native";
import {rem,border} from "css";


const css=StyleSheet.create({
    usertab:{
        width:"90%",
        //maxHeight:10*rem,
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf:"center",
        marginVertical:10,
        backgroundColor:"#f9f9f9",
        borderRadius:10,
        //...border(2,"solid","black"),
    },
    col0:{
        flex:1,
        padding:1*rem,
        //justifyContent:"flex-start",
        alignItems:"center",
        //backgroundColor:"khaki",
        overflow:"hidden",
    },
    col1:{
        flex:2,
        paddingVertical:1*rem,
        justifyContent:"center",
        //backgroundColor:"dodgerblue",
    },
    userimage:{
        maxWidth:"90%",
        height:8*rem,
        resizeMode:"contain",
        borderRadius:200,
        overflow:"hidden",
    },
    username:{
        fontSize:2.25*rem,
        textTransform:"capitalize",
    },
    userjob:{
        fontSize:1.25*rem,
        letterSpacing:2,
        color:"gray",
    },
    useremail:{
        fontSize:1.1*rem,
        flexWrap:"nowrap",
        letterSpacing:0.5,
        color:"gray",
    },
});

export default css;
