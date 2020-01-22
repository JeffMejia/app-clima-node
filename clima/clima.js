const axios = require('axios');

const getCLima = async( lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=00549dc3244996d24559a4643fbb9d54&units=metric`)//se agregan las variables entre otros datos a solicitar
    return resp.data.main.temp;
}


module.exports = {
    getCLima
}