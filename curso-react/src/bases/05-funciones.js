
const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC567',
        username: nombre,
});

const usuarioActivo = getUsuarioActivo('Victor');
console.table( usuarioActivo );
