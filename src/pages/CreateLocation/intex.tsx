import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import {Map, TileLayer, Marker } from 'react-leaflet';
import bateria from '../../assets/bateria.svg';
import eletronico from '../../assets/eletronico.svg';
import oleo from '../../assets/oleo.svg';
import organico from '../../assets/organico.svg';
import papel from '../../assets/papel.svg';
import vidro from '../../assets/vidro.svg';

import logo from '../../assets/logo.svg';

import './styles.css';

const CreateLocation: React.FC = () => {
    return(       
        <div id="page-create-location">
            <div className="content">
                <header>
                    <img src={logo} alt="coleta seletiva"/>
                    <Link to='/'>
                        <FiArrowLeft />
                        Voltar para home
                    </Link>
                </header>

                <form>
                    <h1>Cadastro do <br/> local de coleta</h1>

                    <fieldset>
                        <legend>
                            <h2>Dados</h2>
                        </legend>
                        <div className="field">
                            <label htmlFor="name" >Nome da entidade</label>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                            />                     
                        </div>
                        <div className="field-group">
                            <div className="field">
                                    <label htmlFor="email" >E-mail</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        id="email"
                                    />                     
                                </div>
                                <div className="field">
                                    <label htmlFor="whatsapp" >whatsapp</label>
                                    <input 
                                        type="text"
                                        name="whatsapp"
                                        id="whatsapp"
                                    />
                                </div>                     
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            <h2>Endereço</h2>
                            <span>Marque o endereço no mapa</span>
                        </legend>
                        <Map center={[-13.6283037,-41.3310294]} zoom={14}>
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[-13.6283037,-41.3310294]} />
                        </Map>
                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="city">Cidade</label>
                                <input 
                                    type="text"
                                    name="city"
                                    id="city"
                                    
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="uf">Estado</label>
                                <input 
                                    type="text"
                                    name="uf"
                                    id="uf"
                                    
                                />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>                        
                        <legend>
                            <h2>Itens Coletados</h2>
                            <span>Você pode marcar um ou mais itens</span>
                        </legend>
                        <ul className="items-grid">
                            <li>
                                <img src={bateria} alt="bateria"/>
                            </li>
                            <li className="selected">
                                <img src={eletronico} alt="eletronico"/>
                            </li>
                            <li>
                                <img src={oleo} alt="oleo"/>
                            </li>
                            <li>
                                <img src={organico} alt="organico"/>
                            </li>
                            <li>
                                <img src={papel} alt="papel"/>
                            </li>
                            <li>
                                <img src={vidro} alt="vidro"/>
                            </li>
                        </ul>
                        <button type="submit">
                            Cadastrar locar de coleta
                        </button>
                    </fieldset>
                </form>

            </div>

        </div>
        
    );
}
export default CreateLocation;