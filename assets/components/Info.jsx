import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Info = ({info}) => {
  return (
    <View key={info.id} style={styles.item}>
      <View style={styles.column}>
        <Image source={{uri: info.imagen}} style={styles.imagen} />
      </View>
      <View style={styles.column}>
        {Object.keys(info).map(
          key =>
            key !== 'imagen' &&
            key !== 'id' && (
              <Text style={styles.texto} key={key}>
                {info[key]}
                {key + ': '}
                {key === 'fecha'
                  ? new Date(info[key]).toLocaleDateString()
                  : info[key]}
              </Text>
            ),
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  texto: {
    fontSize: 18,
    marginBottom: 5,
  },
  imagen: {
    width: 150,
    height: 200,
    marginTop: 20,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
  },
  imagen_cont: {
    alignItems: 'center',
  },
});

export default Info;
