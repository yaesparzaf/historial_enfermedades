import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const FormEnfermedad = () => {
  const [fecha, setFecha] = useState(new Date());
  const [paciente, setPaciente] = useState('');
  const [doctor, setDoctor] = useState('');
  const [telefono, setTelefono] = useState('');
  const [malestar, setMalestar] = useState('');
  const [imagen, setImagen] = useState('');
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const guardar = () => {
    // Validación de los campos
    let errors = {};
    let isValid = true;

    if (!fecha) {
      errors.fecha = 'Fecha es requerida';
      isValid = false;
    }

    if (!paciente) {
      errors.paciente = 'Paciente es requerido';
      isValid = false;
    }

    if (!doctor) {
      errors.doctor = 'Doctor es requerido';
      isValid = false;
    }

    if (!telefono || isNaN(telefono) || telefono.length !== 10) {
      errors.telefono = 'Teléfono es requerido y debe tener 10 dígitos';
      isValid = false;
    }

    if (!malestar) {
      errors.malestar = 'Malestar es requerido';
      isValid = false;
    }

    if (!imagen) {
      errors.imagen = 'Imagen es requerida';
      isValid = false;
    }

    if (!isValid) {
      setErrors(errors);
      return;
    }

    // Si todo está correcto, continuar con el proceso de guardar
    // Aquí podrías guardar los datos en la base de datos o hacer lo que sea necesario
    // Por ahora, solo mostramos una alerta
    Alert.alert('Registro guardado correctamente');
    // Redirigir a la vista Listado
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Fecha</Text>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={fecha}
        onConfirm={date => {
          setOpen(false);
          setFecha(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      {errors.fecha && <Text style={styles.error}>{errors.fecha}</Text>}

      <Text style={styles.texto}>Paciente</Text>
      <TextInput
        style={styles.input}
        maxLength={150}
        value={paciente}
        onChangeText={text => setPaciente(text)}
      />
      {errors.paciente && <Text style={styles.error}>{errors.paciente}</Text>}

      <Text style={styles.texto}>Doctor</Text>
      <TextInput
        style={styles.input}
        maxLength={150}
        value={doctor}
        onChangeText={text => setDoctor(text)}
      />
      {errors.doctor && <Text style={styles.error}>{errors.doctor}</Text>}

      <Text style={styles.texto}>Teléfono</Text>
      <TextInput
        style={styles.input}
        maxLength={10}
        value={telefono}
        onChangeText={text => setTelefono(text)}
        keyboardType="numeric"
      />
      {errors.telefono && <Text style={styles.error}>{errors.telefono}</Text>}

      <Text style={styles.texto}>Malestar</Text>
      <TextInput
        style={styles.input_malestar}
        maxLength={1024}
        numberOfLines={4}
        textAlignVertical="top"
        value={malestar}
        onChangeText={text => setMalestar(text)}
      />
      {errors.malestar && <Text style={styles.error}>{errors.malestar}</Text>}

      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#007bff'}]}
        onPress={() => {} /* Agregar lógica para capturar la imagen */}>
        <Text style={styles.buttonText}>Capturar</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>Imagen</Text>
      <TextInput
        style={styles.input}
        value={imagen}
        onChangeText={text => setImagen(text)}
      />
      {errors.imagen && <Text style={styles.error}>{errors.imagen}</Text>}

      <Button title="Guardar" onPress={guardar} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default FormEnfermedad;
