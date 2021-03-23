import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

/**Author: Hubert */
const Authorize = () =>{
  const [authCode, setText] = useState(':');
  return (
    <View  style={{padding: 20, backgroundColor: '#008080'}}>
      <Text style={{height: 20, fontSize:16,marginTop:25}}>Enter your Access Code:</Text>
      <TextInput
        style={{marginBottom: 5,marginTop:10, borderColor:'black', backgroundColor:'#fff', borderWidth: 1,paddingLeft:5}}
        placeholder="Type here to translate!"
        onChangeText={authCode => setText(authCode)}
        defaultValue={authCode}
      />
      <Button
        title="Submit"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Text style={{padding: 10,marginTop:30, fontSize: 24}}>
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