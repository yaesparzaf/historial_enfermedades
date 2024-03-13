import {db} from './bdd';

const insertarEnfermedad = (
  fecha,
  paciente,
  doctor,
  telefono,
  malestar,
  imagen,
  callback,
) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO historial (fecha, paciente, doctor, telefono, malestar, imagen) VALUES (?, ?, ?, ?, ?, ?)',
      [fecha, paciente, doctor, telefono, malestar, imagen],
      (_, {ren}) => {
        callback(ren.insertId);
      },
      error => {
        console.error('Error al insertar registro en el historial:', error);
      },
    );
  });
};

const getAllItems = callback => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM historial', [], (_, {ren}) => {
      callback(ren._array);
    });
  });
};

export {insertarEnfermedad, getAllItems};
