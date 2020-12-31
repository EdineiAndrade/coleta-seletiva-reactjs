import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom'

import logo from '../../assets/logo.svg';
import './styles.css';

const Home: React.FC = () => {
    return(       
        <div id="page-home">
            <div className="content">

            <header>
                <img src={logo} alt="Reciclagem"/>
            </header>
            <main>
                <h1>Coleta Seletiva e Recilcagem em Geral</h1>
                <p>Reciclagem de Matereias diverdos</p>

                <Link to ='/create-location'>
                    <span>
                        <FiLogIn/>
                    </span>
                    <strong>cadastrar um novo local de coleta</strong>
                </Link>
                
            </main> 
            </div>
        </div>
        
    );
}
export default Home;