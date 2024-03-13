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
      (_, {renScritos, insertId}) => {
        if (renScritos > 0) {
          callback(insertId);
        } else {
          console.error(
            'No se pudo insertar el registro en la tabla historial',
            insertId,
            renScritos,
          );
        }
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
