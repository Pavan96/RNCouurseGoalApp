import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import GoalItem  from './components/GoalItem';

export default function App() {
  const [entertedGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals]= useState([]);
  
  function goalInputHandler(entertedText) {
    setEnteredGoalText(entertedText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, {text: entertedGoalText, id:Math.random().toString() }
    ]);
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal !' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalContainer}>
      <FlatList data={courseGoals} 
                renderItem={(itemData) =>  {

                  return <GoalItem text ={itemData.item.text}/>;
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

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },

  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },

  goalContainer: {
    flex: 8
  },

 
});
