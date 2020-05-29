import React from 'react'
import {View,FlatList,StyleSheet} from 'react-native'
import Box from './Box'
data=[{text:'A'},{text:'B'},{text:'C'},{text:'D'},{text:'E'},{text:'F'},
{text:'G'},{text:'H'},{text:'I'},{text:'J'}]

export default App= (props)=>{

return(
<View style={styles.container} >
    <FlatList data={data}  showsVerticalScrollIndicator={false} numColumns={2}  renderItem={ ({item})=>{
        return(<Box text={item.text} />)
    } } keyExtractor={ item => item.text}  />
</View>
)}
const styles=StyleSheet.create({
container:{
    // flex:1
}
})