import React, { useEffect, useState } from 'react';
import './EstilosPersonal/EstilosPersonal.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Persona({nombre, apellido, correo}){
   
    return(
        <div className='contenedorPersona' data-aos="fade-down">
            <figure className='imagenPersona'>
                <img className='imagenPersona__img' src="personalImg.png" alt='Personal de nuestro Gimnasio'></img>
            </figure>
            <article className='infoPersona' >
                    <strong><FontAwesomeIcon className='personalIcon' icon={["fa-solid","fa-dumbbell"]}></FontAwesomeIcon>Entrenador/a</strong>
                <p className='infoPersona__nombre'data-aos="fade-left"
                                             data-aos-delay="30"
                                             data-aos-duration="1000"><FontAwesomeIcon className='personalIcon' icon={["fa-solid","fa-user-graduate"]}></FontAwesomeIcon>{nombre}, {apellido}</p>
                <p className='infoPersona__correo'data-aos="fade-right"
                                             data-aos-delay="40"
                                             data-aos-duration="1000">{correo}<FontAwesomeIcon className='personalIcon' icon={["fa-solid","fa-message"]}></FontAwesomeIcon></p>
            </article>
        </div>
    );
}


export default function Personal(){

    const [personal, setPersonal] = useState([]);

    useEffect(()=>{
        const personal = async ()=>{
            const informacion = await fetch("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole");
            let res = await informacion.json();

          for(let i = 0; i < 5; i++){
              
                let persona = {
                    nombre: res[i].first,
                    apellido: res[i].last,
                    correo: res[i].email
                }

                setPersonal(personal =>[...personal, persona]);
          }
          
        }
        personal();
    },[])

    
    return(
        <article>
            <h3 className='tituloPersonal'>EQUIPO DE FITNESS SPORT CLUB</h3>
             <section className='personal'>
        {personal.map((el, key) =><Persona key={key} nombre={el.nombre} apellido={el.apellido} correo={el.correo}></Persona>)}
         
        </section>
        </article>
       
    );
}