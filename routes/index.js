const express = require('express');
const router = express.Router();
const Functions = require("../util/functions")
router.get('/',(req, res)=>{
    const title = 'MemoryGame';
    res.status(200).render('welcome', {title});
})

router.post('/memorygame',(req, res)=>{
    const level = req.body.niveles
    let filas =0
    let columnas = 0;

    if(level == "Nivel 1 (4x3)"){
        columnas = 4;
        filas = 3;
    }
    if(level == "Nivel 2 (6x3)"){
        columnas = 6;
        filas = 3;
    }
    if(level == "Nivel 3 (6x4)"){
        columnas = 6;
        filas = 4;
    }
    const totalitems = filas * columnas;
    // creo dos arreglos aleatorios para las parejas.
    let array1= Functions.randomize(totalitems);
    let array2 = Functions.randomize(totalitems);
    const orden = Functions.combinate(array1,array2);
    const imgnames = Functions.imgnames(orden);
    const claseid = Functions.getclaseid(imgnames);
    const title = 'MemoryGame';
    res.status(200).render('viewgame', {
        title,
        filas,
        columnas,
        orden,
        imgnames,
        claseid
    });
})


module.exports= router;