import {StyleSheet,
 View,
TextInput,
Button,      
Modal,
Image} from 'react-native';
import {useState} from 'react'
function GoalInput(props){
    const [enteredGoalText,setEnteredGoalText]=useState('');
   
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
           }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
           setEnteredGoalText('')}
    return(
     <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goalll.png')}/>
      <TextInput  
      style={styles.textInput} 
      onChangeText={goalInputHandler} 
      value={enteredGoalText}
      placeholder='your course goal'/> 
<View style={styles.buttonContainer}> 
 <View style={styles.button}>
 <Button title="Cancle" color="#C01B0F" onPress={props.onCancel}/>
</View>
  <View style={styles.button}> 
<Button title='Add Goal'
       onPress={addGoalHandler}
       color="#2FAC2F"/>
 </View>  
</View>
       </View>
       </Modal>
        
    )
};
export default GoalInput
const styles=StyleSheet.create({
    image:{
        width:100,
        height:100,
        margin:20
    },
    inputContainer:{
        flex:1,
           padding:16,
           flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:"#D7A912"

      },
      textInput:{
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"#ECE181",
        width:"100%",
        padding:16,
        borderRadius:6
      },
      buttonContainer:{
        marginTop:15,
        flexDirection:'row',
      },
      button:{
        width:"30%",
        marginHorizontal:8,
       
      }
})