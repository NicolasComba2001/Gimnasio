import React from 'react';

export default function ElegirRutina({rutinasRandom}){
    let indiceRandom = Number.parseInt(Math.random() * (4 - 1) + 0) //como funciona math.random
    console.log(indiceRandom);
       return(
        <article>
            <h2>RUTINA: </h2>
            <ul>
                {rutinasRandom[indiceRandom].map((el,index)=>{
                    return(
                        <>
                        <li>{el.titulo}</li>
                        <li>{el.ejercicio}</li>
                        <li>{el.domada}</li>
                        <li>{el.baile}</li>
                        </>
                        
                    )
                })}
            </ul>
        </article>
    );
}