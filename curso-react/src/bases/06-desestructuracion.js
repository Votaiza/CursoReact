
const persona = {
    nombre: 'Victor',
    apellido: 'Otaiza',
    anios: 29,
    cargo: 'tester',
}

const retornaPersona = ({nombre, apellido, anios, cargo}) => {
    return {
        alias: 'Cachirulo',
        dni: '35472859',
        ciudad: {
            nombre: 'General Cabrera',
            provincia: 'Cordoba',
            pais: 'Argentina',
        }
    }
}

const { alias, dni, ciudad:{ nombre, provincia, pais } } = retornaPersona(persona);

console.log(alias, dni, nombre, provincia, pais);
