import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';


interface ProffyUser {
    id: number;
    avatar: string;
    bio: string;
    name: string;
    whatsapp: string;
}

export interface Teacher {
    proffy_user: ProffyUser;
    cost: number;
    subject: string;
}

interface TeacherItemProps {
    teacher: Teacher; 
}


const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function createNewConnection() {
        api.post('connections/', {
            proffy_user_id: teacher.proffy_user.id
        })
    }

    return (
        <article className="teacher-item" >
            <header>
                <img src={ teacher.proffy_user.avatar } alt="Perfil"/>
                <div>
                    <strong>{ teacher.proffy_user.name }</strong>
                    <span>{ teacher.subject }</span>
                </div>
            </header>
            <p>{ teacher.proffy_user.bio }</p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ { teacher.cost }</strong>
                </p>

                <a 
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={createNewConnection}
                    href={`https://wa.me/${teacher.proffy_user.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;