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
      (_, ren) => {
        callback(ren);
      },
      error => {
        console.error('Error al insertar registro en el historial:', error);
      },
    );
  });
};

const getAllItems = callback => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM historial', [], (_, resultados) => {
      var temp = [];
      for (let i = 0; i < resultados.rows.length; ++i) {
        temp.push(resultados.rows.item(i));
      }
      callback(temp);
    });
  });
};

const getItem = (consulta, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM historial 
      WHERE paciente LIKE ? OR doctor LIKE ? OR malestar LIKE ?`,
      [`%${consulta}%`, `%${consulta}%`, `%${consulta}%`],
      (_, resultados) => {
        var temp = [];
        for (let i = 0; i < resultados.rows.length; ++i) {
          temp.push(resultados.rows.item(i));
        }
        callback(temp);
      },
    );
  });
};

const eliminarTodoDeTabla = callback => {
  db.transaction(tx => {
    tx.executeSql(
      `DELETE FROM historial`,
      [],
      (_, resultado) => {
        callback(resultado.rowsAffected);
      },
      error => {
        console.error(
          `Error al eliminar todos los registros de la tabla historial`,
          error,
        );
      },
    );
  });
};

export {insertarEnfermedad, getAllItems, getItem, eliminarTodoDeTabla};
