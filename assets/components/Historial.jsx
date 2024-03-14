import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {getAllItems, getItem} from '../../db/enfermedades';
import Info from './Info';
const Historial = ({reload, buscar}) => {
  const [historial, setHistorial] = useState([]);
  const [recargar, setRecargar] = useState(false);

  useEffect(() => {
    setRecargar(reload);
    const obtenerHistorial = () => {
      if (buscar) {
        getItem(buscar, items => {
          setHistorial(items);
        });
      } else {
        getAllItems(items => {
          setHistorial(items);
        });
      }
    };
    obtenerHistorial();
  }, [reload, buscar, recargar]);

  return (
    <View style={styles.container}>
      <FlatList
        data={historial}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Info info={item} recarga={recargar} />}
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
});

export default Historial;
