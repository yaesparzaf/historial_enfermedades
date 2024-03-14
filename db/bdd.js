import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {name: 'historial', location: 'default'},
  () => ('Base de datos abierta correctamente'),
  error => console.error('Error al abrir la base de datos:', error),
);

const crearTabla = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS historial (id INTEGER PRIMARY KEY AUTOINCREMENT, fecha TEXT, paciente TEXT, doctor TEXT, telefono TEXT, malestar TEXT, imagen TEXT)',
    );
  });
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT)',
      [],
      () => {
        tx.executeSql(
          'INSERT INTO usuario (email, password) VALUES (?, ?)',
          ['jhon@mail.com', '77@1$'],
          (_, {rows}) => {
            ('Registro inicial agregado correctamente.');
          },
          error => {
            console.error('Error al agregar el registro inicial:', error);
          },
        );
      },
      error => {
        console.error('Error al crear la tabla de usuario:', error);
      },
    );
  });
};

const getUsuario = (email, password, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM usuario WHERE email = ? AND password = ?',
      [email, password],
      (_, {rows}) => {
        if (rows.length > 0) {
          callback(true);
        } else {
          callback(false);
        }
      },
      error => {
        callback(false);
      },
    );
  });
};

const eliminarTabla = () => {
  db.transaction(tx => {
    tx.executeSql(
      'DROP TABLE IF EXISTS historial',
      [],
      () => {
        ('Tabla de usuarios eliminada correctamente.');
      },
      error => {
        console.error('Error al eliminar la tabla de usuarios:', error);
      },
    );
  });
};

export {db, getUsuario};
export {crearTabla, eliminarTabla};
