import {StyleSheet, View, Text, Pressable} from 'react-native';
function GoalItem(props) {

    return(
         <View style={styles.goalItem}> 
         <Pressable 
         style={({pressed})=> pressed && styles.pressedItem}
    android_ripple={{color:"black"}} 
    onPress= {props.onDeletItem.bind(this ,props.id)}>
        <Text style={styles.goalText}>
     {props.text} </Text>
     </Pressable>
        </View>
    );

}
export default GoalItem;
const styles=StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:'#D7A912',
        color:"white"
       },
       goalText:
   {
    color:"white", 
    padding:8,
   },
   pressedItem:{
    opacity:0.5
   }
});