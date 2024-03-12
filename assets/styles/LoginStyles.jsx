import {StyleSheet} from 'react-native';

const login = StyleSheet.create({
  contenedor: {
    flex: 0.5,
    width: '80%',
  },
  titulo: {
    fontSize: 30,
  },
  form_cont: {
    marginTop: 20,
    marginBottom: 20,
    //backgroundColor: 'blue',
  },
  texto: {
    color: 'rgb(0, 130, 252)',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  enviar_btn: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'rgb(0, 130, 252)',
  },
  texto_btn: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default login;
