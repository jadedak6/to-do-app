import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  DrawerLayoutAndroidBase,
  TouchableOpacity,
  Modal,
  TextInput
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      taskValue: '',
      taskCompleted: false,
      allTasks: [],
    };
  }


  addTask(){
    db.collection("tasks").add({
      taskValue: this.state.taskValue
    });
  }

  showTasks = async () => {
    try {
      var allTasks = [];
      var tasks = db
        .collection('tasks')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            allTasks.push(doc.data());
          });
          this.setState({ allTasks });
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View>
        <TextInput
          multiline
          style={styles.inputBox}
          onChangeText={(taskValue) => {
            this.setState({ taskValue: taskValue });
          }}
          value={this.state.taskValue}
          placeholder="Add task"
        />
        <TouchableOpacity style={[styles.button]} 
        onPress={() => {
              this.addTask()
            }}>
          <Text style={styles.textStyle}>Submit</Text>
          </TouchableOpacity>

       <Text>{this.state.allTasks}</Text>
      </View>
    );
  }
}

export default ToDo;

const styles = StyleSheet.create({
  inputBox: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    outline: 'none',
  },
  button: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#AA8160',
    marginTop: 40,
    letterSpacing: 2,
    borderRadius: 20,
    padding: 8,
    elevation: 2,
  },
  textStyle: {
    fontWeight: 500,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});
