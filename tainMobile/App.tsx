import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

/**Author: Hubert */
const Authorize = () =>{
  const [authCode, setText] = useState('Enter Code here');
  return (
    <View  style={{padding: 10}}>
      <TextInput
        style={{height: 20}}
        placeholder="Type here to translate!"
        onChangeText={authCode => setText(authCode)}
        defaultValue={authCode}
      />
      <Text style={{padding: 10, fontSize: 42}}>
      {authCode}
    </Text>       
    </View>
   
  );
}

function IndexPage(){

}

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to PinkApp</Text>
      <TouchableOpacity
        onPress={() =>alert('Hello, World!')}
        style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    marginTop: 10,
    padding:5
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
});

export default Authorize;