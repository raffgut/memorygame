const fs = require('fs');

class Functions{
    static randomize(items){
        let orden = [];
        let cont = 1;
        const max= items / 2;
        while (cont <=max) {
            let num = getRandomInt(1,max+1);
            if(orden.length>0){
            const result = orden.some((value)=> value == num ? true : false)
            if(!result){
                orden.push(num);
                cont++
            }
            }else{
            orden.push(num);
            cont++
            }
        }
        return orden
    }

    static combinate(array1,array2){
        let newarray = [];
        let array3= array1.concat(array2)
        let i = 0;
        let num = 0;
        let aleat= [];
        while(i<array3.length){
            num= getRandomInt(0,(array3.length))
            if(aleat.length>0){
                const result = aleat.some((value)=> value == num ? true : false)
                if(!result){
                    newarray.push(array3[num]);
                    aleat.push(num);
                    i++
                }
            }else{
                newarray.push(array3[num]);
                aleat.push(num);
                i++
            }
        }
        return newarray;
    }

    static imgnames(orden){
        let arraynames=[];
        //nombres de las imagenes en orden
        let imgs = fs.readFileSync('./util/list_imgs.txt').toString().split('\n');
        let imgsneworder = Functions.randomize(imgs.length * 2)
        let imgsnewnames= [];
        imgsneworder.forEach(num=> imgsnewnames.push(imgs[num-1]))
        let i = 0;
        while (i<orden.length) {
            arraynames.push(imgsnewnames[orden[i]-1]);
            i++
        }
        return arraynames;
    }

    static getclaseid(imgnames){
        const idpar= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        let idpares=[];
        let validanames = [];
        let i= 0;
        imgnames.forEach(imgname =>{
            if(validanames.length>0){
                const result = validanames.findIndex(name=> name== imgname);
                if(result!=-1){
                    idpares.push(idpar[result]);
                }else{
                    idpares.push(idpar[i]);
                    validanames.push(imgname);
                    i++
                }
            }else{
                idpares.push(idpar[i]);
                validanames.push(imgname);
                i++
            }
            
        } )
        return idpares
    }
}   
//num aleatorios
function getRandomInt(min, max) {
    return Math.floor(Math.random()* (max - min) + min);
}

module.exports = Functions;
