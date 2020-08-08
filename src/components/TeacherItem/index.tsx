import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';


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

                <button type="button" >
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;