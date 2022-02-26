import React, {useState } from 'react';
import './EstilosRutinas/Estilosrutinas.scss';
import RutinasModales from './RutinasModales';

let banderaNivel;

let banderaRutina;


export default function Rutinas(){
    
    const [rutina_1, setRutina_1] = useState(false);
    const [rutina_2, setRutina_2] = useState(false);
    const [rutina_3, setRutina_3] = useState(false);

   
   
    const [modal_1, setModal_1] = useState(false);
    const [modal_2, setModal_2] = useState(false);
    const [modal_3, setModal_3] = useState(false);

    function handleClicked(e){
        if(e.target.textContent === "PRINCIPIANTE"){setRutina_1(!rutina_1); banderaNivel=0;
             setRutina_2(false);
              setRutina_3(false);
              setModal_2(false);
              setModal_3(false);
            }
        if(e.target.textContent === "INTERMEDIO"){setRutina_2(!rutina_2); banderaNivel=1;
             setRutina_1(false);
              setRutina_3(false)
              setModal_1(false);
              setModal_3(false);
              
            }
        if(e.target.textContent === "AVANZADO"){setRutina_3(!rutina_3); banderaNivel=2;
             setRutina_2(false);
              setRutina_1(false);
              setModal_1(false);
              setModal_2(false);
              
            }
             
    }
    
    function abrirModal(banderaNivel, e){
        if(banderaNivel === 0){

            if(e.target.textContent === "DEFINICION")
            {setModal_1(!modal_1); banderaRutina=0; }

            if(e.target.textContent === "VOLUMEN" )
            {setModal_1(!modal_1); banderaRutina=1;}

            if(e.target.textContent === "FUNCIONAL")
            {setModal_1(!modal_1); banderaRutina=2;}
        }

        if(banderaNivel === 1){

            if(e.target.textContent === "DEFINICION")
            {setModal_2(!modal_2); banderaRutina=0;}

            if(e.target.textContent === "VOLUMEN" )
            {setModal_2(!modal_2); banderaRutina=1;}

            if(e.target.textContent === "FUNCIONAL")
            {setModal_2(!modal_2); banderaRutina=2;}
        }

        if(banderaNivel === 2){

            if(e.target.textContent === "DEFINICION")
            {setModal_3(!modal_3); banderaRutina=0;}

            if(e.target.textContent === "VOLUMEN" )
            {setModal_3(!modal_3); banderaRutina=1;}

            if(e.target.textContent === "FUNCIONAL")
            {setModal_3(!modal_3); banderaRutina=2;}
        }
        

    }
   
    return(
        <section>
        <div className='rutina' id='Rutinas'>
            <figure className='contRutina'>
                <img className='contRutina__img' data-aos="fade-left" src="https://images.pexels.com/photos/2261483/pexels-photo-2261483.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
                <figcaption className='rutinaTexto' data-aos="fade-right"
                                                    data-aos-delay="20">
                    <p className='rutinaTexto__titulo' onClick={(e)=>handleClicked(e)} >PRINCIPIANTE</p>
                    <div className='rutinaTexto__nivel'><em>1 mes a 6 meses</em></div>
                </figcaption>
                {
                rutina_1 && <div className='tipoRutina'>
                    <span><button className='tipoRutina__btn' onClick={e=>abrirModal(banderaNivel,e)}>DEFINICION</button></span>
                    <span><button className='tipoRutina__btn' onClick={e=>abrirModal(banderaNivel,e)}>VOLUMEN</button></span>
                    <span><button className='tipoRutina__btn' onClick={e=>abrirModal(banderaNivel,e)}>FUNCIONAL</button></span>
                </div>
                }
            </figure>
            {
             modal_1 && <RutinasModales emodal={modal_1} fmodal={setModal_1} nivel={banderaNivel} rutina={banderaRutina}></RutinasModales>
            }
        </div>
        <div className='rutina'>
            <figure className='contRutina'>
                <img className='contRutina__img' data-aos="fade-right" src="https://images.pexels.com/photos/260409/pexels-photo-260409.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
                <figcaption className='rutinaTexto' data-aos="fade-left"
                                                    data-aos-delay="20">
                    <p className='rutinaTexto__titulo' onClick={(e)=>handleClicked(e)}>INTERMEDIO</p>
                    <em className='rutinaTexto__nivel'>6 mes a 1 ano</em>
                </figcaption>
                {
                rutina_2 && <div className='tipoRutina'>
                    <span><button className='tipoRutina__btn' onClick={e=>abrirModal(banderaNivel, e)}>DEFINICION</button></span>
                    <span><button className='tipoRutina__btn' onClick={e=>abrirModal(banderaNivel, e)}>VOLUMEN</button></span>
                    <span><button className='tipoRutina__btn' onClick={e=>abrirModal(banderaNivel, e)}>FUNCIONAL</button></span>
                </div>
                }
            </figure>
            {
            modal_2 && <RutinasModales emodal={modal_2} fmodal={setModal_2} nivel={banderaNivel} rutina={banderaRutina}></RutinasModales>
            }
        </div>
        <div className='rutina'>
            <figure className='contRutina'>
                <img className='contRutina__img' data-aos="fade-left" src="https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
                <figcaption className='rutinaTexto' data-aos="fade-right"
                                                    data-aos-delay="20">
                    <p className='rutinaTexto__titulo' onClick={(e)=>handleClicked(e)} >AVANZADO</p>
                    <em className='rutinaTexto__nivel'>mayor a 1 ano y medio</em>
                </figcaption>

                {
                rutina_3 && <div className='tipoRutina'>
                    <span><button className='tipoRutina__btn'onClick={e=>abrirModal(banderaNivel, e)}>DEFINICION</button></span>
                    <span><button className='tipoRutina__btn'onClick={e=>abrirModal(banderaNivel, e)}>VOLUMEN</button></span>
                    <span><button className='tipoRutina__btn'onClick={e=>abrirModal(banderaNivel, e)}>FUNCIONAL</button></span>
                </div>
                }

            </figure>
            {
            modal_3 && <RutinasModales emodal={modal_3} fmodal={setModal_3} nivel={banderaNivel} rutina={banderaRutina}></RutinasModales>
            }
        </div>
        </section>
    );
}