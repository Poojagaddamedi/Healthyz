import React, { useState } from 'react';
import MainContext from './createContext';

const ContextProvider = ({ children }) => {
    const [showCalendlyModal, setShowCalendlyModal] = useState(false);

    const openCalendly = () => setShowCalendlyModal(true);
    const closeCalendly = () => setShowCalendlyModal(false);

    return (
        <MainContext.Provider value={{ showCalendlyModal, openCalendly, closeCalendly }}>
            {children}
        </MainContext.Provider>
    );
};

export default ContextProvider;
