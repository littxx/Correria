import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  let [km, setKm] = useState('');
  let [valor, SetValor] = useState('');
  var [resultado, setResultado] = useState('');

  function calculo() {
    const numericDistance = parseFloat(km);
    const numericValuePaid = parseFloat(valor);

    const result = numericValuePaid / numericDistance;

    setResultado(result.toFixed(2));
  }

  function limpar() {
    setKm('');
    SetValor('');
    setResultado('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Correria</Text>
      <TextInput
        style={styles.Input}
        placeholder="km"
        value={km}
        onChangeText={setKm}
        keyboardType="decimal-pad"
      />
      <TextInput
        style={[styles.Input, {paddingTop: 10}]}
        placeholder="Valor combustivel"
        value={valor}
        onChangeText={SetValor}
        keyboardType="decimal-pad"
      />
      <TouchableOpacity style={styles.button} onPress={calculo}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.Titulo}>ola {resultado}</Text>
      <TouchableOpacity style={styles.button} onPress={limpar}>
        <Text style={styles.textButton}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Titulo: {
    color: '#fff',
    fontSize: 45,
  },

  Input: {
    marginTop: 10,
    color: '#000',
    backgroundColor: '#fff',
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,

    borderRadius: 25,
  },
  button: {
    borderColor: '#fff',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 25,
  },
  textButton: {
    color: '#fff',
    fontSize: 35,
  },
});

export default App;
