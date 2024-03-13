import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {getAllItems} from '../../db/enfermedades';

const Historial = () => {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    obtenerHistorial();
  }, []);

  const obtenerHistorial = () => {
    getAllItems(items => {
      setHistorial(items);
    });
  };
  if (historial) {
    console.log('hisotiral: ', historial);
  }
  const renderItem = ({item}) => (
    <View style={styles.item}>
      {Object.keys(item).map(key => (
        <Text style={styles.texto} key={key}>
          {key}: {item[key]}
        </Text>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={historial}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  texto: {
    fontSize: 18,
  },
});

export default Historial;
