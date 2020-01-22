const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log(resp));


// clima.getCLima( 40.750000, -74.000000)
//     .then( console.log )
//     .catch( console.log )


const getInfo =  async ( direccion ) => {
    
        
    try {
        console.log(`Consultando CLima`);
        const coords = await lugar.getLugarLatLng( direccion );
        const temp   = await clima.getCLima(coords.lat, coords.lng);
        return `el clima de la ciudad: ${coords.direccion}, es de: ${temp} Grados centigrados.`;
    
    } catch (e) {
    
        return `No se pudo determinar el clima de la ciudad: ${direccion}.`;
    }

}

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log )