import { StatusBar } from 'expo-status-bar';
import { 
  Button,
  StyleSheet,
  TextInput,
  View, 
FlatList } from 'react-native';
import { Pressable } from 'react-native';
import GoalItem  from './components/GoalItem';
import  { useState } from 'react';
import GoalInput from './components/GoalInput';

export default function App() {
 
  const [courseGoals,setCourseGoals]=useState([]);
   const [modalIsVisible, setModalIsVisible]=useState(false); 

   function startAddGoalHandler(){
    setModalIsVisible(true);
   }
   function endAddGoalHandler(){
    setModalIsVisible(false);
   }
   function addGoalHandler(enteredGoalText){
setCourseGoals(
   (currentCourseGoals)=>[
    ...currentCourseGoals,{text:enteredGoalText, id:Math.random().toString()}, ]);
 endAddGoalHandler(); }
   function deleteGoalHandler(id){
setCourseGoals((currentCourseGooals)=>{
  return currentCourseGooals.filter((goal)=> goal.id!==id);
});
   }

  return (<>
  <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title="Add New Goal"  placeholder="Add New Goal" color="#BF8808"
      onPress={startAddGoalHandler}/>
       {modalIsVisible && <GoalInput visible={modalIsVisible}
       onAddGoal={addGoalHandler}
       onCancel={endAddGoalHandler}/>}
       <View style={styles.goalsContainer}>
       <FlatList
        data={courseGoals} 
       renderItem={(itemData)=>{
        return <GoalItem onDeletItem={deleteGoalHandler} text={itemData.item.text} id={itemData.item.id}/> 
        }
        }
        keyExtractor={(item,index)=>{
          return item.id 
        }}
         alwaysBounceVertical={false}/>
        
       </View>
      
      </View>
      </>
    
  );
} 

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop:80,
    paddingHorizontal:16
    
  },
 
   goalsContainer:{
    flex:4,
    
  
   },
   
   
});
