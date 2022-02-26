import React, { useEffect } from 'react';
import CartasMembresia from './CartasMembresia';
import './EstilosSeccionTexto/EstilosSeccionTexto.scss';
import AOS from "aos";
import "aos/dist/aos.css";



export default function SeccionTexto(){

  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1000
    });
    AOS.refresh();
  }, []);
    return(
        <section className='contenedorInfo'>
          <div data-aos="fade-up">
          <h2 className='contenedorInfo__titulo' data-aos="fade-down">Fitness Club, Mas que un Gimnasio... </h2>
              <p className='contenedorInfo__info'data-aos="fade-up"> Fitness Sport Club, ofrece una rutina <span className='contenedorInfo__info--rojo'>diaria dinamica y divertida</span>, para que puedas sentirte a gusto dentro de tu segunda casa. <br></br>
              Fitness Club, se califica como el <span className='contenedorInfo__info--rojo'>mejor gimnasio</span> de San Francisco; contamos con secciones de entrenamiento a aire abierto, a la manana y con los mejores <span className='contenedorInfo__info--rojo'>precios</span> adaptados a la situacion del cliente, 
              con diferentes metodos de pagos y los mas accesibles! <br></br>
              <span className='contenedorInfo__info--rojo'>Entrenamiento en casa, al aire libre, con musica, funcional, orientado a la musculacion, definicion y fuerza</span> son lo que nos otorga 4.5 estrellas de satisfaccion otorgados por todos nuestros clientes.
              </p>
          </div>
              
              <div className='contenedorInfo__cartas' >
            <CartasMembresia src={"https://images.pexels.com/photos/3757943/pexels-photo-3757943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
             alt={"Descarga nuestra aplicacion Fitness en casa"}
              mensaje="DESCARGA"
              beneficios ={[
                {titulo: "Reserva tu horario mas comodo"},
                {titulo: "Paga desde el lugar donde quieras"},
                {titulo: "Recibe rutinas personalizadas"},
                {titulo: "Noticias del GYM todos los dias"},
                {titulo: "Atencion personalizada las 24 horas del dia"},
                {titulo: "Dietas dictadas por un profesional"}
            ]}
              textoCarta="Descarga nuestra aplicacion 'FITNESS EN CASA' para que lleves tus rutinas a donde quieras"
              precioCarta='$50'
              titulo="FITNESS APP"
           
              ></CartasMembresia>

            <CartasMembresia src={"https://images.pexels.com/photos/2628215/pexels-photo-2628215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
             alt={"musculacion y definicion, entrenamiento solo para VIP"}
              mensaje="INSCRIBETE"
              beneficios = {[
                {titulo: "Área de peso libre, peso integrado, cardio y clases coletivas"},
                {titulo: "Acceso a todas las áreas del gimnasio"},
                {titulo: "Acceso a otras unidades de la cadena"},
                {titulo: "Invitar un amigo a entrenar"},
                {titulo: "Sillones de masaje"},
                {titulo: "Clases gruplaes"}
            ]}
              textoCarta="Inscribete para recibir los mejores entrenamientos de la mano de nuestros especialistas"
              precioCarta='$20'
              titulo="ENTRENA AHORA!"
              ></CartasMembresia>
            </div>  
          
        </section>
    );
}

