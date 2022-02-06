import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,TextInput, Keyboard } from 'react-native';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native-web';
import Task from './components/Task';
import Customize from './components/Customize';

export default function App() {
  const [task,setTask] = useState();
  const [taskItems , setTaskItems] = useState([]); //array the tasks

  const handleChange = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems , task]);//present taskItem me task will be appended at last
    setTask(null);
  }

  const completeTask = (index) => {
     let itemCopy = {...taskItems};
     itemCopy.splice(index,1);
     setTaskItems(itemCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>Today's Tasks</Text>
        <View style={styles.tasks}>
          <Task text = "Task 1" />
          {taskItems.map( (item,index) => {
             return (
               <TouchableOpacity key = {index} onPress = { () => completeTask(index)} >
                 <Task text={item} />
               </TouchableOpacity>
             );
          })}
        </View>
      </View>
  

      <KeyboardAvoidingView 
         behaviour = {Platform.OS === "ios" ? "padding" : "height"}
         style = {styles.keyboard}
         >
           <TextInput style ={styles.input} placeholder={"Enter the Task"} value = {task} onChangeText={text => setTask(text)} />
           <TouchableOpacity onPress = {() => handleChange()}>
               <View style = {styles.addWrapper}>
                   <Text style={styles.addText}>+</Text>
               </View>
           </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    paddingTop: 80,
    paddingRight:20,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tasks: {
    marginTop: 30,
  },
  keyboard: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 370,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#333",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 3,
    paddingBottom:"11px",
    marginRight :"30px"
  },
  addText : {
    fontSize : 45,
    color : "#ee2BB1",
  }
});
