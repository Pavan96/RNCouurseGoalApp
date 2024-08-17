import {View, TextInput, Button, StyleSheet} from "react-native";
import { useState } from "react";



    function GoalInput(props) {
        const [entertedGoalText, setEnteredGoalText] = useState('');

        return (
           <View style={styles.inputContainer}>
           <TextInput style={styles.textInput} placeholder='Your course goal !' onChangeText={goalInputHandler} value={entertedGoalText}/>
           <Button title='Add Goal' onPress={addGoalHandler}/>
           </View> );
    
    

    function goalInputHandler(entertedText) {
        setEnteredGoalText(entertedText);
      }

      function addGoalHandler() {
        props.onAddGoal(entertedGoalText);
        setEnteredGoalText('');
      }
}

     

export default GoalInput;

const styles = StyleSheet.create({

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

});