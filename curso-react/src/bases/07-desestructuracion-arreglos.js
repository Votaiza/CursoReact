
const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = useState( 'Victor' );

console.log( nombre );

setNombre();