import {StyleSheet} from 'react-native';

const login = StyleSheet.create({
  contenedor: {
    flex: 0.5,
    width: 300,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
  },
  form_cont: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    //backgroundColor: 'blue',
  },
  input: {
    width: 250,
    marginBottom: 20,
    borderRadius: 30,
    borderWidth: 1,
  },
  enviar_btn: {
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'rgb(0, 130, 252)',
  },
});
export default login;
