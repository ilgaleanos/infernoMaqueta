import { observable } from 'mobx';

const store = observable ({
        cadena: 'Hello World',
        cargando: true,
})

module.exports = store;
