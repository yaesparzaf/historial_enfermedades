import {StyleSheet} from 'react-native';

const registro = StyleSheet.create({
  safeArea: {
    marginHorizontal: 20,
  },
  container: {
    padding: 20,
  },
  texto: {
    color: '#007bff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input_malestar: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  camara_cont: {
    alignItems: 'center',
    padding: 20,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 20,
  },
  imagen: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});

export default registro;
