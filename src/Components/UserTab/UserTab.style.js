import {StyleSheet} from "react-native";
import {rem,border} from "css";


const css=StyleSheet.create({
    usertab:{
        width:"90%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf:"center",
        marginVertical:10,
        backgroundColor:"#f9f9f9",
        borderRadius:10,
    },
    col0:{
        flex:1,
        padding:1*rem,
        alignItems:"center",
        overflow:"hidden",
    },
    col1:{
        flex:2,
        paddingVertical:1*rem,
        justifyContent:"center",
    },
    userimage:{
        maxWidth:8*rem,
        height:8*rem,
        borderRadius:50,
        overflow:"hidden",
    },
    username:{
        fontSize:2*rem,
        fontWeight:"bold",
        textTransform:"capitalize",
    },
    userjob:{
        fontSize:1.1*rem,
        fontWeight:"700",
        letterSpacing:1,
        color:"gray",
        
    },
    useremail:{
        fontSize:1.1*rem,
        fontWeight:"200",
        textTransform:"capitalize",
        color:"#ff9e9e",
    },
});

export default css;
