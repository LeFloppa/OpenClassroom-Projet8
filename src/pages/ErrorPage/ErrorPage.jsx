import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.scss';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleReturnToHome = () => {
        navigate('/Home');
    };
    return (
        <div className="error-page">
            <h1 className="error-heading">404</h1>
            <p className="error-text">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <p className="error-link" onClick={handleReturnToHome}>
                <u>Retourner sur la page d'accueil</u>
            </p>
        </div>
    );
};

export default ErrorPage;