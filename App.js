import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Enter To do"/>
         <Button title="Add Goal"/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingHorizontal:20,
    paddingTop:100,
    flex:1
  },
  textInput:{
    width:'78%',
    borderWidth:1,
    borderColor:'black',
    borderRadius:5,
    padding:8,
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap:8,
    paddingBottom:10,
    marginBottom:40,
    borderBottomWidth:1,
    borderBottomColor:'gray',
    alignItems:'center',
    flex:1
  },
  goalsContainer:{
    flex:5
  }
});
