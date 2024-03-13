import AsyncStorage from '@react-native-async-storage/async-storage';

const GetCache = async ({key}) => {
  if (key !== null) {
    try {
      const datosCache = await AsyncStorage.getItem(key);
      if (datosCache !== null) {
        const datos = JSON.parse(datosCache);
        return datos;
      } else {
        return null;
      }
    } catch (error) {
      console.error('error al obtener datos: ', error);
    }
  }
};

export default GetCache;
