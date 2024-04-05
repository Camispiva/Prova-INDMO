import React from 'react';
import { View, Button } from 'react-native';

const EscolhaScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Switch" onPress={() => navigation.navigate('Switch')} />
      <Button title="Juros" onPress={() => navigation.navigate('Juros')} />
    </View>
  );
};

export default EscolhaScreen;
