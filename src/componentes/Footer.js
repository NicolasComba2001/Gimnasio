import React from 'react';
import './EstilosFooter/EstilosFooter.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
 //TIPOS DE ICONOS: SOLID(FAS) / BRANDS(FAB)
   
export default function Footer(){
    return(
        <footer className='footer' id='Contacto'>

            <div className='FlogoCentral'>
                <p className='FlogoCentral__logo'> FITNESS SPORT CLUB </p>
            </div>
        <div className='footerInfo'>
            <ul className='footerList'>
                <h4 className='footerList__titulo'>Sobre tu GYM</h4>
                <li className='Fcontact'><a href="https://github.com/NicolasComba2001" nofollow={"true"} className='Fcontact__items'><FontAwesomeIcon className='footerIcons' icon={["fa-solid","fa-question"] }/> QUIENES SOMOS</a></li>
                <li className='Fcontact'><a href="https://github.com/NicolasComba2001" nofollow={"true"} className='Fcontact__items'><FontAwesomeIcon className='footerIcons' icon={["fa-solid","fa-users"]} /> TRABAJA CON NOSOTROS</a></li>
                <li className='Fcontact'><a href="https://github.com/NicolasComba2001" nofollow={"true"} className='Fcontact__items'><FontAwesomeIcon className='footerIcons' icon={["fa-solid","fa-book"]} /> LIBRO DE QUEJAS</a></li>
                <li className='Fcontact'><a href="https://github.com/NicolasComba2001" nofollow={"true"} className='Fcontact__items'><FontAwesomeIcon className='footerIcons' icon={["fa-solid","fa-cancel"]} /> CANCELACION DE PLANES</a></li>
            </ul>

            <ul className='footerList'>
                <h4 className='footerList__titulo'>Punto de encuentro</h4>
                <li className='Fcontact'><p className='Fcontact__items'><FontAwesomeIcon className='footerIcons' icon={["fa-solid","fa-phone" ]}/> Tel: (3564) 112233</p></li>
                <li className='Fcontact'><address className='Fcontact__items'><FontAwesomeIcon className='footerIcons' icon={["fa-solid","fa-envelope"]} /> fitness_sport@outlook.es</address></li>
                <li className='Fcontact'><p className='Fcontact__items'><FontAwesomeIcon className='footerIcons' icon={["fa-solid","fa-map-location"]}></FontAwesomeIcon> Ubicacion: Av. Illia 321</p></li>
            </ul>
            
            <div className='FredesSociales'>
            
                <figure className='FredSocial'>
                    <a href="https://github.com/NicolasComba2001"   rel="noreferrer" target="_blank" nofollow="true" className='FredSocial__img'><img className='FredSocial__img' src="face.png" alt="Tu gimnasio fitness en Facebook" /></a>
                </figure>
                <figure className='FredSocial'>
                    <a href="https://github.com/NicolasComba2001"   rel="noreferrer" target="_blank" nofollow="true" className='FredSocial__img'><img className='FredSocial__img' src="wpp.png" alt="Tu gimnasio fitness en WhatsApp" /></a>

                </figure>
                <figure className='FredSocial'>
                    <a href="https://github.com/NicolasComba2001"   rel="noreferrer" target="_blank" nofollow="true" className='FredSocial__img'><img className='FredSocial__img' src="insta.png" alt="Tu gimnasio fitness en Instagram" /></a>
                </figure>
            </div>
        </div>
        
            <em className='copy'>&copy; Copyright 2022 - Página creada por Webs_Arg - Todos los derechos reservados</em>

        </footer>
    );
}