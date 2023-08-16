import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const SignupScreen = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user.data.signupSuccessful) {
      props.navigation.goBack();
    }
  }, [user]);

  return (
    <View>
      <TextInput
        style={styles.input}
        value={email}
        autoCapitalize="none"
        onChangeText={changedText => {
          setEmail(changedText);
        }}
        placeholder="Email"></TextInput>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={changedText => {
          setPassword(changedText);
        }}
        placeholder="Password"></TextInput>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
