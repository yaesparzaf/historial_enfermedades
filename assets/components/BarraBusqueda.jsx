import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {getItem} from '../../db/enfermedades';

const BarraBusqueda = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const aBuscar = () => {
    getItem(query, respuesta => {
      onSearch(respuesta);
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        value={query}
        onChangeText={texto => {
          setQuery(texto);
          aBuscar();
        }}
      />
      {/* <Button title="Buscar" onPress={aBuscar} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default BarraBusqueda;
