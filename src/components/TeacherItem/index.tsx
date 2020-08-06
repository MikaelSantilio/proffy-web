import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item" >
            <header>
                <img src="https://avatars1.githubusercontent.com/u/40041499?s=460&u=b484cfea7185c43f1a07cc8ba3a75a82cdc20b27&v=4" alt="Perfil"/>
                <div>
                    <strong>Mikael Santilio</strong>
                    <span>Filosofia</span>
                </div>
            </header>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum quis ipsum eu egestas. 
            Maecenas molestie sapien ut leo vehicula varius. Aenean egestas, mauris nec auctor pharetra, 
            lectus metus posuere tortor, eu finibus mauris mi quis dolor.
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>USD 100,00</strong>
                </p>

                <button type="button" >
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;