export const MARCAS = [
    { id: 1, nombre: 'Europeo' },
    { id: 2, nombre: 'Americano' },
    { id: 3, nombre: 'Asiático' },
];

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(
    new Array(30), 
    (valor, index) =>  YEARMAX - index
);

export const PLANES = [
    { id: 1, nombre: 'Basico' },
    { id: 2, nombre: 'Completo' }
];
