import {StyleSheet} from 'react-native';

const listado = StyleSheet.create({
  listado_cont: {
    flex: 1,
    backgroundColor: 'red',
  },
  logout_btn: {
    marginRight: 10,
  },
  logout_text: {
    color: 'red',
    fontWeight: 'bold',
  },
  float_btn_cont: {
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default listado;
