import SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase('marvelapp.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY NOT NULL, email TEXT NOT NULL, nombre TEXT NOT NULL, apellido TEXT NOT NULL, direccion TEXT NOT NULL, cel TEXT NOT NULL,imagen TEXT NOT NULL)', [],
                (_, results) => {

                    resolve(results);
                }, (_, err) => {
                    reject(err);
                });
        });

        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS personaje (id INTEGER PRIMARY KEY NOT NULL, identificador INTEGER NOT NULL, nombre TEXT NOT NULL, descripcion TEXT NOT NULL, imagen TEXT NOT NULL, uripersonaje TEXT NOT NULL, uricomics TEXT NOT NULL, uriseries TEXT NOT NULL, urihistorias TEXT NOT NULL, url TEXT NOT NULL)', [],
                (_, results) => {

                    resolve(results);
                }, (_, err) => {
                    reject(err);
                });
        });

        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS comic (id INTEGER PRIMARY KEY NOT NULL, identificador INTEGER NOT NULL, nombre TEXT NOT NULL, descripcion TEXT NOT NULL, imagen TEXT NOT NULL, uricomic TEXT NOT NULL, uricreadores TEXT NOT NULL,url TEXT NOT NULL)', [],
                (_, results) => {

                    resolve(results);
                }, (_, err) => {
                    reject(err);
                });
        });

        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS favorito (id INTEGER PRIMARY KEY NOT NULL, email TEXT NOT NULL, nombre TEXT NOT NULL)', [],
                (_, results) => {

                    resolve(results);
                }, (_, err) => {
                    reject(err);
                });
        });

        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS mipersonaje (id INTEGER PRIMARY KEY NOT NULL, email TEXT NOT NULL, imagen TEXT NOT NULL, nombre TEXT NOT NULL, descripcion TEXT NOT NULL, superpoder1 TEXT NOT NULL, superpoder2 TEXT NOT NULL, superpoder3 TEXT NOT NULL, latitude TEXT NOT NULL, longitude TEXT NOT NULL )', [],
                (_, results) => {

                    resolve(results);
                }, (_, err) => {
                    reject(err);
                });
        });
    });

    return promise;
}

// ---------------------------------------------------

// QUERIES DE USUARIO

export const buscarUsuario = (email) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM usuario WHERE email = ?', [email],
                (_, result) => {

                    let data = []
                    var len = result.rows.length;
                    for (let i = 0; i < len; i++) {
                        let row = result.rows.item(i);
                        data.push(row);
                    }

                    resolve(data);
                }, (_, err) => {
                    reject(err);
                });
        });
    });

    return promise;
}

export const insertarUsuario = (email) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO usuario (email, nombre, apellido, direccion, cel, imagen) VALUES (?,?, ?, ?, ?, ?)',
                [email, 'Por favor completar', 'Por favor completar', 'Por favor completar', 'Por favor completar', '0'],
                (_, result) => {
                    console.log(result);
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

export const actualizarUsuario = (email, nombre, apellido, direccion, celular, imagen) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE usuario set email=?, nombre=?, apellido=?, direccion=?, cel=?, imagen=? where email=?',
                [email, nombre, apellido, direccion, celular, imagen, email],
                (_, result) => {
                    console.log(result);
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

// ---------------------------------------------------

// QUERIES DE PERSONAJE

export const buscarPersonaje = (nombre) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM personaje WHERE nombre = ?', [nombre],
                (_, result) => {

                    let data = []
                    var len = result.rows.length;
                    for (let i = 0; i < len; i++) {
                        let row = result.rows.item(i);
                        data.push(row);
                    }

                    resolve(data);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

export const buscarTodosLosPersonajes = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM personaje', [],
                (_, result) => {

                    let data = []
                    var len = result.rows.length;
                    for (let i = 0; i < len; i++) {
                        let row = result.rows.item(i);
                        data.push(row);
                    }

                    resolve(data);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

export const insertarPersonaje = (id, nombre, descripcion, imagen, uri, uricomic, uriseries, urihistorias, url) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO personaje (identificador, nombre, descripcion, imagen, uripersonaje, uricomics,uriseries,urihistorias,url) VALUES (?, ?, ?, ?, ?, ?,?,?,?)',
                [id, nombre, descripcion, imagen, uri, uricomic, uriseries, urihistorias, url],
                (_, result) => {
                    console.log("INSERTE PERSONAJE")
                    console.log(result);
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

// ---------------------------------------------------

// QUERIES DE COMICS

export const insertarComic = (id, nombre, descripcion, imagen, uricomic, uricreadores, url) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO comic (identificador, nombre, descripcion, imagen, uricomic, uricreadores, url) VALUES (?, ?, ?, ?, ?, ?,?)',
                [id, nombre, descripcion, imagen, uricomic, uricreadores, url],
                (_, result) => {
                    console.log("INSERTE COMIC");
                    console.log(result)
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

export const buscarTodosLosComics = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM comic', [],
                (_, result) => {

                    let data = []
                    var len = result.rows.length;
                    for (let i = 0; i < len; i++) {
                        let row = result.rows.item(i);
                        data.push(row);
                    }

                    resolve(data);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

// QUERIES DE FAVORITOS

export const buscarEnFavoritos = (email, nombre) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM favorito WHERE email = ? AND nombre = ?', [email, nombre],
                (_, result) => {

                    let data = []
                    var len = result.rows.length;
                    for (let i = 0; i < len; i++) {
                        let row = result.rows.item(i);
                        data.push(row);
                    }

                    resolve(data);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

export const insertarFavorito = (email, nombre) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO favorito (email, nombre) VALUES (?, ?)',
                [email, nombre],
                (_, result) => {
                    console.log("INSERTE FAVORITO")
                    //console.log(result);
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

export const buscarTodosLosFavoritos = (email) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM favorito f INNER JOIN personaje p ON f.nombre = p.nombre WHERE email = ?',
                [email],
                (_, result) => {

                    let data = []
                    var len = result.rows.length;
                    for (let i = 0; i < len; i++) {
                        let row = result.rows.item(i);
                        data.push(row);
                    }

                    resolve(data);
                },

                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

export const eliminarUnFavorito = (email, nombre) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM favorito WHERE email = ? AND nombre = ?',
                [email, nombre],
                (_, result) => {

                    resolve(result);
                },

                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

// QUERIES DE MIS PERSONAJES

export const insertarNuevoPersonaje = (email, imagen, nombre, descripcion, superpoder1, superpoder2, superpoder3, latitude, longitude) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO mipersonaje (email, imagen,nombre,descripcion,superpoder1,superpoder2,superpoder3,latitude,longitude) VALUES (?, ?,?,?,?,?,?,?,?)',
                [email, imagen, nombre, descripcion, superpoder1, superpoder2, superpoder3, latitude, longitude],
                (_, result) => {
                    console.log("INSERTE NUEVO PERSONAJE PROPIO")
                    //console.log(result);
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

export const buscarTodosMisPersonajes = (email) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM mipersonaje WHERE email = ?',
                [email],
                (_, result) => {

                    let data = []
                    var len = result.rows.length;
                    for (let i = 0; i < len; i++) {
                        let row = result.rows.item(i);
                        data.push(row);
                    }

                    resolve(data);
                },

                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

export const buscarEnMisPersonajes = (email, nombre) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM mipersonaje WHERE email = ? AND nombre = ?',
                [email, nombre],
                (_, result) => {

                    let data = []
                    var len = result.rows.length;
                    for (let i = 0; i < len; i++) {
                        let row = result.rows.item(i);
                        data.push(row);
                    }

                    resolve(data);
                },

                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

export const eliminarUnPersonajeCreado = (email, nombre) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM mipersonaje WHERE email = ? AND nombre = ?',
                [email, nombre],
                (_, result) => {

                    resolve(result);
                },

                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}