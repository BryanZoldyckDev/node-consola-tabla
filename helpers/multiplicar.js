const fs = require('fs');
const colors = require('colors')

const crearTabla = async(base = 5, listar = false, hasta = 10) => {

    try {                
        let salida = '', consola = '';
        
        for(let i=1; i<= hasta; i++){
                salida += (`${base} x ${i} = ${base*i}\n`);
                consola += (`${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`);
        }

        if(listar) {
            console.log('---------------------'.green);
            console.log('    TABLA DEL '.green, colors.green(base));
            console.log('---------------------'.green);
            console.log(consola);
        } 
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;
    } catch (error) {
        throw err;
    }
    
}

module.exports = {
    crearTabla
}