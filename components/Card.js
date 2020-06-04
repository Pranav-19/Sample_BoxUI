import React from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import InputForm from './InputForm'

export default class Card extends React.Component{
   
    render(){
    return (
    <View style={{...styles.card,...this.props.style}}>
        {this.props.action==='EDIT_USER' && <InputForm 
        cancel={this.props.cancel} action="'EDIT_USER'" edit={this.props.editUserAsync} 
        user={{name:this.props.name,email:this.props.email,id:this.props.id}}  />}
        <View style={styles.row}>
            <Image source={require('../assets/user.png')} style={styles.image} />
            <View style={styles.userDetails} >
                <Text style={styles.name}>{this.props.name} </Text>
                 <Text style={styles.email}>{this.props.email}</Text>
            </View>
        </View>
        <View style={{...styles.row,marginTop:'1.75%', justifyContent:'space-evenly' }}>
            <TouchableOpacity onPress={this.props.editUserModal} >
                <Text style={styles.edit} >EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.delete} >
                <Text style={styles.delete} >DELETE</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
    }
}

const styles=StyleSheet.create({
    card:
    {
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowRadius:6,
        shadowOffset:{
            width:0,
            height:2
        },
        elevation:8,
        padding:10,
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'white',
        width:'95%',
        height:100,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:20,
    },
    row:{
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
    },
    image:{
        marginTop:'4%',
        resizeMode:'contain',
        width:45,
        height:45,
        borderRadius:25,
    },
    userDetails:{
        marginLeft:'13%',
        justifyContent:'center',
        // alignItems:'center',
    },
    name:{
        fontSize:16,
        fontWeight:'bold',
    },
    email:{
        fontSize:13,
        color:'grey',
    },
    edit:{
        color:'blue',
        fontSize:18,
    },
    delete:{
        color:'red',
        fontSize:18,
    }
})