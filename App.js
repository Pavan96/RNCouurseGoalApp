import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import GoalItem  from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals]= useState([]);
  
  function addGoalHandler(entertedGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, {text: entertedGoalText, id:Math.random().toString() }
    ]);
  }

  function deletGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
        return  currentCourseGoals.filter((goal) => goal.id != id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
           <View style={styles.goalContainer}>
             <FlatList data={courseGoals} 
                renderItem={(itemData) =>  {

                  return <GoalItem 
                  text ={itemData.item.text}
                  id = {itemData.item.id} 
                  onDeleteItem={deletGoalHandler}/>;
                 } }
                 keyExtractor={(item, index) =>  {
                  return item.id;
                 }} 
                 alwaysBounceVertical={false}
              />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  goalContainer: {
    flex: 8
  },
 
});
