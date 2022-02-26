import React, { useState } from 'react';
import './estilosHeader/EstilosHeader.scss';
import ModalMembresia from './ModalMembresia';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header(){

    const [menu, setMenu] = useState(false);
    const [membresia, setMembresia] = useState(false);

    function handleClicked(e) {
        e.preventDefault();
        setMembresia(!membresia);
    }
    const abrirMenu = ()=>{
        setMenu(!menu);
    }

    return (
        <header>
            <section className='header' data-aos="fade-down">
                <a href="https://github.com/NicolasComba2001"   rel="noreferrer" target="_blank" nofollow="true"  className='header__logo'>FITNESS</a>
                <BtnHeader EstadoMenu={menu} FMenu={abrirMenu}></BtnHeader>
                <nav className={`menu ${menu ? "menuAbrir" : ""}`}>
                    <ul className={`menuItems ${menu ? "mostrar": ""}`}>
                        <li className='menuItems__btn'><a href="#Inicio" data-text="INICIO"><FontAwesomeIcon icon={["fa-solid","house"]}></FontAwesomeIcon> INICIO</a></li>
                        <li className='menuItems__btn'><a href="#Rutinas" data-text="RUTINAS"><FontAwesomeIcon icon={["fa-solid","heart-pulse"]}></FontAwesomeIcon> RUTINAS</a></li>
                        <li className='menuItems__btn'><a href="#Membresia" data-text="MEMBRESIA" onClick={handleClicked}><FontAwesomeIcon icon={["fa-solid","hand-holding-dollar"]}></FontAwesomeIcon> MEMBRESIA</a></li>
                        <li className='menuItems__btn'><a href="#Contacto" data-text="CONTACTO"><FontAwesomeIcon icon={["fa-solid","phone"]}></FontAwesomeIcon> CONTACTO</a></li>
                    </ul>
                </nav>
                {membresia !== false ? <ModalMembresia clase={'brillante'}EstadoModal={membresia} funcion={handleClicked} 
                beneficios = {[
                {titulo: "Área de peso libre, peso integrado, cardio y clases coletivas"},
                {titulo: "Acceso a todas las áreas del gimnasio"},
                {titulo: "Acceso a otras unidades de la cadena"},
                {titulo: "Invitar un amigo a entrenar"},
                {titulo: "Nutricionista designado"},
                {titulo: "INSCRIPCION: U$D 200"}]} 
                mensaje="INSCRIBETE AHORA!"
                titulo="UNETE AL EQUIPO!"></ModalMembresia> : ""}
            </section>
        </header>
    );
        
    
}

function BtnHeader(props){
    return(
        <div className={`header__icono ${props.EstadoMenu ? "estiloIcono" : ""}`} onClick={props.FMenu}>
            <div className='header__icono--abrirMenu'></div>
        </div>

    );
}




