import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [goals, setGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setUserInput(enteredText);
  };


  function addGoalHandler() {
    setGoals([...goals, userInput]);
    console.log(userInput);
    setUserInput("");
  };

  function handleDelete (index){
    setGoals(goals.filter((_,i)=> i!=index));
  }
  return (
    <ScrollView style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Enter To do"
          value={userInput}
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        {goals.length >= 1 ? (
          <Text style={styles.listOfGoalsText}>List of Goals...</Text>
        ) : (
          ""
        )}
        {goals.map((goal, index) => ( 
          <View style={styles.goalsListContainer}>
          <Text style={styles.goalsList} key={index}>
            {goal}
          </Text>
          <Button onPress={()=>handleDelete(index)} key={index+1} title="Delete"/>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 20,
    paddingTop: 100,
    flex: 1,
    backgroundColor: "lavender",
  },
  textInput: {
    width: "78%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 8,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    alignItems: "center",
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
  listOfGoalsText: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 20,
  },
  goalsListContainer:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#5e0acc',
    paddingHorizontal:12,
    borderRadius:10,
    marginBottom:5
  },
  goalsList: {
    color: "white",
    backgroundColor: "#5e0acc",
    borderRadius: 8,
    padding: 15,
    textAlign: "center",
    margin: 8,
    flex:1,
    
  },
});
