import React, { useEffect, useState, useMemo } from 'react'

import './styleMp.css';
import HourComp from '../../services/HourComp';
import AddFacebook from '../AddFacebook';

import mlabsLogin from '../../assets/mlabsLogin.svg';

//<li className="logo"><img className="header-img" src="https://www.mlabs.com.br/assets/brand/mlabs-login.svg" alt="mLabs" /></li>

export default function MainPg() {
    return (
        <>
        <div>	
			<header>
			    <nav>
				    <ul className="menu">
                    <li className="logo"><img className="header-img" src="{mlabsLogin}" alt="mLabs" /></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Dashboard">dashboard</i><br/>Dashboard</a></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Agendar post">event_note</i><br/>Agendar post</a></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Calendário">date_range</i><br/>Calendario</a></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Inbox">inbox</i><br/>Inbox</a></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Feed">dvr</i><br/>Feed</a></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Workflow">ballot</i><br/>Workflow</a></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Acompanhamento">show_chart</i><br/>Acompanhamento</a></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Relatórios">pie_chart</i><br/>Relatórios</a></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Menu/User">apps</i><br/>Menu/User</a></li>
				    </ul>
			    </nav>
			</header>
		</div>

        <section id="Designs" className="Designs">
            <div className="container">
                            
                <div className="cards">
                    <div id="templates">
                        <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/facebook.svg" />
                            <p>FACEBOOK</p>
                    </div>
                    <p><a id="hw_button" href="{AddFacebook(getElementeById('#openModal2'))}" >Adicionar</a></p>
                </div>

                <div className="cards">
                    <div id="templates">
                        <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/twitter.svg" />
                        <br/>TWITTER
                    </div>
                    <p><a id="hw_button" href="#openModal" >Adicionar</a></p>
                </div>

                <div className="cards">
                    <div id="templates">
                        <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/instagram.svg" />
                        <br/>INSTAGRAM
                    </div>
                    <p><a id="hw_button" href="#openModal" >Adicionar</a></p>
                </div>

                <div className="cards">
                    <div id="templates">
                        <i class="material-icons">store_mall_directory</i>
                        <br/>GOOGLE MEU NEGÓCIO
                    </div>
                    <p><a id="hw_button" href="#openModal" >Adicionar</a></p>
                </div>

                <div className="cards">
                    <div id="templates">
                        <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/pinterest.svg" />
                        <br/>PINTEREST
                    </div>
                    <p><a id="hw_button" href="#openModal" >Adicionar</a></p>
                </div>

                <div className="cards">
                    <div id="templates">
                        <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/linkedin.svg" />
                        <br/>LINKEDIN
                    </div>
                    <p><a id="hw_button" href="#openModal" >Adicionar</a></p>
                </div>

                <div className="cards">
                    <div id="templates">
                        <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/youtube.svg" />
                        <br/>YOUTUBE
                    </div>
                    <p><a id="hw_button" href="#openModal" >Adicionar</a></p>
                </div>

                <div className="cards">
                    <div id="templates">
                        <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/whatsapp.svg" />
                        <br/>WHATSUP
                    </div>
                    <p><a id="hw_button" href="#openModal" >Adicionar</a></p>
                </div>

                <div className="cards">
                    <div id="templates">
                        <i class="material-icons">assessment</i>
                        <br/>GOOGLE ANALYTICS
                    </div>
                    <p><a id="hw_button" href="#openModal" >Adicionar</a></p>
                </div>

            </div>

            <div id="openModal" className="modalDialog">
                <div>

                    <a href="#close" title="Close" className="close">X</a>

                        <ul>
                            <h2>Menu</h2>
                            <li><a href="#top">One</a></li>
                            <li><a href="#top">Two</a></li>
                            <li><a href="#top">Three</a></li>
                            <li><a href="#top"><i class="material-icons">account_box</i>Login</a></li>
                        </ul>
                </div>
            </div>

            <div id="openModal2" className="modalDialog2">
                <div>

                    <a href="#close2" title="Close" className="close2">X</a>
                    <p>hello from a component</p>

                </div>
            </div>

        </section>

		<footer>
            <div className="btnList text-center">
        
                <div id="time"><p id="footerp"> Copyright MLabs 2019. All Rights Reserved.{HourComp}</p></div>

            </div>
        </footer>  

        </>
    )
}