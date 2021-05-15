import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import ToDo from './components/ToDo';

export default class App extends Component {

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.textcontainer}>
          <Image
            style={styles.imageIcon}
            source={{
              uri: 'https://image.flaticon.com/icons/png/128/2872/2872362.png',
            }}></Image>
          <Text style={styles.text}>To-Do List</Text>
        </View>

        <View>
          <ToDo />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageIcon: {
    alignSelf: 'center',
    width: 70,
    height: 70,
    marginBottom: 20,
  },
  body: {
    backgroundColor: '#F8E8D4',
    height: '100%',
  },
  textcontainer: {
    marginTop: 50,
    padding: 2,
  },
  text: {
    color: '#AA8160',
    fontWeight: 500,
    textAlign: 'center',
    letterSpacing: 3,
    fontSize: 25,
  },
});
