import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import registro from '../styles/RegistroStyles';

const AbrirCamara = ({uriImagen}) => {
  const [imagen, setImagen] = useState(null);

  //   useEffect(() => {
  //     if (Platform.OS === 'android') {
  //       solicitarPermisoCamara();
  //     }
  //   }, []);

  const solicitarPermisoCamara = async () => {
    try {
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
        title: 'Permiso para usar la cámara',
        message: 'Se necesita acceso a la cámara para poder tomar fotos.',
        buttonPositive: 'Aceptar',
      });
    } catch (err) {
      console.warn(err);
    }
  };

  const abrirCamara = async () => {
    if (Platform.OS === 'android') {
      solicitarPermisoCamara();
    }

    const opciones = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(opciones, response => {
      if (response.didCancel) {
        Alert.alert('Se canceló la operacion');
      } else if (response.error) {
        Alert.alert('Hubo un error');
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        uriImagen(imageUri);
        setImagen(imageUri);
      }
    });
  };
  return (
    <View style={registro.camara_cont}>
      <TouchableOpacity style={registro.button} onPress={abrirCamara}>
        <Text style={registro.buttonText}>Capturar Receta</Text>
      </TouchableOpacity>
      {imagen && <Image source={{uri: imagen}} style={registro.imagen} />}
    </View>
  );
};

export default AbrirCamara;
