import React from 'react'
import {View,Modal,StyleSheet,TextInput,Button,Text} from 'react-native'
import ValidationComponent from 'react-native-form-validator';

export default class InputForm extends ValidationComponent{

    state={
        name:'',
        email:'',
    }
    handleNameChange =(newName)=>
    {
        this.setState({name:newName})
    }
    handleEmailChange =(newEmail)=>
    {
        this.setState({email:newEmail})
    }

    addUser=  async ()=>{
        this.validate({
            name:{minlength:3, maxlength:20, required: true},
            email: {email: true,required:true}
        })
        console.log('Valdity',this.isFormValid())
        try{
        if(this.isFormValid())
        {
            if(this.props.action==='CREATE_USER')
                await this.props.create(this.state)
            else{
                await this.props.edit(this.props.user,this.state)
            }
        }
    }   catch(err){console.log(err)}

    }

render()
{
    return(
    <Modal transparent={true} visible={this.props.visible} animationType='slide' >
        <View style={styles.container} >
        <TextInput style={styles.input} placeholder='Name...' value={this.state.name} onChangeText={this.handleNameChange}  />
        <TextInput style={styles.input} placeholder='Email...' value={this.state.email} onChangeText={this.handleEmailChange}  />
        <View style={styles.buttons}>
           <View style={{width:'30%'}}><Button title="Cancel" onPress={this.props.cancel} color='red' /></View>
            <View style={{width:'30%'}} ><Button title="Add" onPress={this.addUser} /></View>
        </View>
        <Text style={{fontSize:16,alignSelf:'center',color:'white'}} >
            {this.getErrorMessages()}
         </Text>
        </View>
    </Modal>
    )}
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000000aa',
        paddingTop:150
    },
    input:{
        width:'90%',
        margin:10,
        height:40,
        padding:5,
        borderWidth:3,
        borderColor:'green',
        color:'white',
        borderRadius:8,
    },
    buttons:{
        flexDirection:'row',
        margin:10,
        alignItems:'center',
        width:'90%',
        justifyContent:'space-around'
    }

})