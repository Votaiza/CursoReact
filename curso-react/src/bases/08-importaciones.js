import heroes, { owner } from './data/heroes';

const getHeroesById = (id) => heroes.find( (element) => element.id === id );

const getHeroesByOwner = (owner) => heroes.filter( (element) => element.owner === owner );


console.log( getHeroesById(3) );

console.log( getHeroesByOwner('DC') );

console.log( owner );