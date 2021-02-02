import React from 'react';
import styled from '@emotion/styled';
import { primeraMayus } from '../helper';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
padding: 1rem;
text-align: center;
background-color: #00838F;
color: #FFF;
margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    // extraer datos
    const {marca, anio, plan} = datos;

    if (marca === '' || anio === '' || plan === '') {
        return null;
    }

    return ( 

        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: { primeraMayus(marca)}</li>
                <li>Plan: { primeraMayus(plan)}</li>
                <li>Año del Auto: { primeraMayus(anio)}</li>
            </ul>
        </ContenedorResumen>
     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;
