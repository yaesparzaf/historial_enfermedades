import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import AbrirCamara from './AbrirCamara';
import {ScrollView} from 'react-native-gesture-handler';
import registro from '../styles/RegistroStyles';
import {insertarEnfermedad} from '../../db/enfermedades';
import {useNavigation} from '@react-navigation/native';

const FormEnfermedad = () => {
  const navegacion = useNavigation();
  const [fecha, setFecha] = useState(new Date());
  const [paciente, setPaciente] = useState('');
  const [doctor, setDoctor] = useState('');
  const [telefono, setTelefono] = useState('');
  const [malestar, setMalestar] = useState('');
  const [imagen, setImagen] = useState('');
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const guardar = () => {
    let errors = {};
    let isValid = true;
    let fechaString;

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
    if (fecha) {
      fechaString = fecha.toISOString();
    }
    if (fechaString && paciente && doctor && telefono && malestar && imagen) {
      insertarEnfermedad(
        fechaString,
        paciente,
        doctor,
        telefono,
        malestar,
        imagen,
      );
    }
    navegacion.navigate('Home', {
      screen: 'Listado',
      params: {reload: true},
    });
  };

  const getImagen = uri => {
    if (uri) {
      setImagen(uri);
    }
  };

  return (
    <ScrollView>
      <Text style={registro.texto}>Fecha</Text>
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
      {errors.fecha && <Text style={registro.error}>{errors.fecha}</Text>}

      <Text style={registro.texto}>Paciente</Text>
      <TextInput
        style={registro.input}
        maxLength={150}
        value={paciente}
        onChangeText={text => setPaciente(text)}
      />
      {errors.paciente && <Text style={registro.error}>{errors.paciente}</Text>}

      <Text style={registro.texto}>Doctor</Text>
      <TextInput
        style={registro.input}
        maxLength={150}
        value={doctor}
        onChangeText={text => setDoctor(text)}
      />
      {errors.doctor && <Text style={registro.error}>{errors.doctor}</Text>}

      <Text style={registro.texto}>Teléfono</Text>
      <TextInput
        style={registro.input}
        maxLength={10}
        value={telefono}
        onChangeText={text => setTelefono(text)}
        keyboardType="numeric"
      />
      {errors.telefono && <Text style={registro.error}>{errors.telefono}</Text>}

      <Text style={registro.texto}>Malestar</Text>
      <TextInput
        style={registro.input_malestar}
        maxLength={1024}
        numberOfLines={4}
        textAlignVertical="top"
        value={malestar}
        onChangeText={text => setMalestar(text)}
      />
      {errors.malestar && <Text style={registro.error}>{errors.malestar}</Text>}
      <View>
        <AbrirCamara uriImagen={getImagen} />
      </View>
      {errors.imagen && <Text style={registro.error}>{errors.imagen}</Text>}

      <Button title="Guardar" onPress={guardar} />
    </ScrollView>
  );
};

export default FormEnfermedad;
