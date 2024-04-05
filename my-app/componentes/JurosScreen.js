import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';

const JurosScreen = () => {
  const [valor, setValor] = useState('');
  const [juros, setJuros] = useState('');
  const [total, setTotal] = useState('');

  const calcularJuros = () => {
    const valorFloat = parseFloat(valor);
    const jurosFloat = parseFloat(juros);
    const totalJuros = valorFloat * (jurosFloat / 100);
    const totalPago = valorFloat + totalJuros;
    setTotal(totalPago.toFixed(2));
  };

  return (
    <View>
      <TextInput
        placeholder="Valor do produto"
        value={valor}
        onChangeText={text => setValor(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Porcentagem de juros"
        value={juros}
        onChangeText={text => setJuros(text)}
        keyboardType="numeric"
      />
      <Button title="Calcular" onPress={calcularJuros} />
      <Text>Total a ser pago: R$ {total}</Text>
    </View>
  );
};

export default JurosScreen;
