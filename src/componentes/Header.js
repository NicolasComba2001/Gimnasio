import React, { useState } from 'react';
import './estilosHeader/EstilosHeader.scss';



export default function Header(){

    const [menu, setMenu] = useState(false);

    const abrirMenu = ()=>{
        setMenu(!menu);
    }

    return (
        <header>
            <section className='header'>
                <div className='header__logo'>FITNESS</div>
                <BtnHeader EstadoMenu={menu} FMenu={abrirMenu}></BtnHeader>
                <nav className={`menu ${menu ? "menuAbrir" : ""}`}>
                    <ul className='menuItems'>
                        <li className='menuItems__btn'><a href="#Inicio" data-text="INICIO">INICIO</a></li>
                        <li className='menuItems__btn'><a href="#Rutinas" data-text="RUTINAS">RUTINAS</a></li>
                        <li className='menuItems__btn'><a href="#Rutinas" data-text="MEMBRESIA">MEMBRESIA</a></li>
                        <li className='menuItems__btn'><a href="#Contacto" data-text="CONTACTO">CONTACTO</a></li>
                    </ul>
                </nav>
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




