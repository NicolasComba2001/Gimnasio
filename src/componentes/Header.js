import React from 'react';
import 'EstilosHeader.scss';

export default function Header(){
    return (
        <header>
            <section className='header'>
                <div className='header__logo'>VIDA-FITNESS</div>
                <nav className='menu'>
                    <ul className='menuItems'>
                        <li className='menuItems__btn'><a href="#Inicio">INICIO</a></li>
                        <li className='menuItems__btn'><a href="#Rutinas">RUTINAS</a></li>
                        <li className='menuItems__btn'><a href="#Contacto">CONTACTO</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}

