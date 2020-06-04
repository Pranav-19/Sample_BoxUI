import React from 'react'
import {View,Text,StyleSheet,FlatList, Button} from 'react-native'
import Card from './Card'
import {editUser,createUser} from '../api'
import InputForm from './InputForm'

export default class Users extends React.Component{

    state={
        users:[],
        isFormVisible:false,
        action:'',
        id:'',
      }
        createUserAsync = async(obj)=>{
            try{
                const result=await createUser(obj)
                console.log("New user", result)
                this.setState( prevState => {
                    return{ users:[...prevState.users,result],isFormVisible:false,action:'' }
                })
            }
            catch(err){
                console.log(err)
            }
        }

        editUserAsync = async (user,obj)=>{
            try{
                const result= await editUser(user.id,obj)
                const new_user={...result,id:user.id}
                console.log("result", new_user)
                console.log("Prev users", this.state.users)
                const new_Users= this.state.users.map(item=>{
                    return item.id!==user.id?item: new_user
                })
                console.log("New userr",new_Users)
                this.setState({users:new_Users,isFormVisible:false,action:'',id:''})
            }
            catch(err){
                console.log(err)
            }
        }

        deleteUser =(user)=>{
            const new_Users=this.state.users.filter((item)=>{
                return item.id!==user.id
            })
            this.setState({users:new_Users})
        }

        cancel = ()=>{
            this.setState({isFormVisible:false,action:''})
        }
        createUserModal =()=>{
            this.setState({isFormVisible:true, action:'CREATE_USER'})
        }

        editUserModal =(id)=>{
            this.setState({action:'EDIT_USER',id:id})
        }

render()
{
    return(
    <View style={styles.container} >
        <Button title="Create User" onPress={this.createUserModal} color="blue" />

        {this.state.isFormVisible && this.state.action==='CREATE_USER' && <InputForm visible={this.state.isFormVisible} 
        cancel={this.cancel} action={this.state.action} create={this.createUserAsync} />}

        {this.state.users && <FlatList data={this.state.users} showsVerticalScrollIndicator={false}  
        keyExtractor={ user => user.id.toString()} 
        renderItem ={({item})=> <Card {...item} editUserModal={this.editUserModal}
        editUserAsync={this.editUserAsync} action={this.state.action} cancel={this.cancel} edit_id={this.state.id}
         delete={()=>this.deleteUser(item)}  /> }
        />}
    </View>
    )
}
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})