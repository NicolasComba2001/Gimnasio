import React from 'react';
import CartasMembresia from './CartasMembresia';
import './EstilosSeccionTexto/EstilosSeccionTexto.scss';



export default function SeccionTexto(){

     
 
    return(
        <section className='contenedorInfo'>
            <h2 className='contenedorInfo__titulo'>Fitness Club, Mas que un Gimnasio... </h2>
            <p className='contenedorInfo__info'>Morbi quis malesuada leo, ac tempus nulla.
             Curabitur consectetur efficitur risus, sit amet congue nibh pulvinar eget.
              Nunc porttitor nulla id mi blandit, nec fermentum lectus tempus.
               Cras efficitur placerat nisl vitae posuere. Donec eget nulla sit amet dolor blandit sagittis sit amet quis ligula.
            </p>
            <div className='contenedorInfo__cartas'>
            <CartasMembresia src={"https://images.pexels.com/photos/3757943/pexels-photo-3757943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
             alt={"Pesas, entrenamiento solo para VIP"}
              mensaje="DESCARGA YA!"
              beneficios ={[
                {titulo: "Reserva tu horario mas comodo"},
                {titulo: "Paga desde el lugar donde quieras"},
                {titulo: "Recibe rutinas personalizadas"},
                {titulo: "Noticias del GYM todos los dias"},
                {titulo: "Atencion personalizada las 24 horas del dia"}
            ]}
              ></CartasMembresia>

            <CartasMembresia src={"https://images.pexels.com/photos/2628215/pexels-photo-2628215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
             alt={"Pesas, entrenamiento solo para VIP"}
              mensaje="INSCRIBETE YA!"
              beneficios = {[
                {titulo: "Área de peso libre, peso integrado, cardio y clases coletivas"},
                {titulo: "Acceso a todas las áreas del gimnasio"},
                {titulo: "Acceso a otras unidades de la cadena"},
                {titulo: "Invitar un amigo a entrenar"},
                {titulo: "Sillones de masaje"}
            ]
             }
              ></CartasMembresia>
            </div>  
            <p className='contenedorInfo__info'>Morbi quis malesuada leo, ac tempus nulla.
             Curabitur consectetur efficitur risus, sit amet congue nibh pulvinar eget.
              Nunc porttitor nulla id mi blandit, nec fermentum lectus tempus.
               Cras efficitur placerat nisl vitae posuere. Donec eget nulla sit amet dolor blandit sagittis sit amet quis ligula.
            </p>
        </section>
    );
}

