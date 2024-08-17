import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [entertedGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals]= useState([]);
  
  function goalInputHandler(entertedText) {
    setEnteredGoalText(entertedText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, entertedGoalText,
    ]);
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal !' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalContainer}>
        {courseGoals.map((goal) => (
          <View key= {goal} style={styles.goalItem}>
           <Text style={styles.goaltext} >{goal}</Text>
           </View>
           ))}
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

  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius:6, 
    backgroundColor: '#5e0acc',
    color: 'white'
  },

  goaltext: {
    color: 'white'
  }
});
