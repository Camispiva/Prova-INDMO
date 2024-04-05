import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username === 'usuario') { // Usuário cadastrado
      navigation.navigate('Escolha');
    } else {
      alert('Usuário inválido');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
