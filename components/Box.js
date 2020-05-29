import React from 'react'
import {View,Text,StyleSheet,Dimensions} from 'react-native'


export default Box= (props)=>{
return(
    <View style={styles.box}>
        <Text style={styles.text} >{props.text}</Text>
    </View>
)}
const styles=StyleSheet.create({
    box:{
        margin:2,
        borderWidth:0.5,
        width:(Dimensions.get('window').width)*0.48,
        height:(Dimensions.get('window').height)*0.28,
        backgroundColor:'#4a2334',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
      fontSize:16,
      color:'white',
    }
})