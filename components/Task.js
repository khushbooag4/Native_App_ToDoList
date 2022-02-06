import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const Task = (props) => {
    return (
      <View style = {styles.taskWrapper}>
          <View style = {styles.itemLeft}>
             <View style = {styles.square}></View>
             <Text style = {styles.Stext}>{props.text}</Text>
          </View>
          <View style = {styles.circular}></View>
      </View>
    );
}

const styles = StyleSheet.create({
  taskWrapper: {
    backgroundColor: "#EEE",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginRight :20,
    borderColor : "#222"
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  Stext: {
    fontSize : 18,
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});
export default Task;
