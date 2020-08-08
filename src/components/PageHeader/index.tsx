import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
    title: string;
    description?: string | null;
}
// dentro dos parenteses ( props ) ou
// com a abertura do objeto ( { propriedades_aqui } )
// children é uma propriedade automatica do react para o centro dentro da tag jsx
const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ title, children, description }) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>                        
                </Link>
                <img src={logoImg} alt="Proffy"/>                        
            </div>
            
            <div className="header-content">
                <strong>{ title }</strong>
                { description && <p>{ description }</p> }
            </div>
            {children}
        </header>
    );
}

export default PageHeader;