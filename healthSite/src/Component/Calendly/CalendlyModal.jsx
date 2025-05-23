import React, { useEffect, useContext } from 'react';
import MainContext from '../../CreateContext/createContext';
import './CalendlyModal.css';

const CalendlyModal = () => {
    const { showCalendlyModal, closeCalendly } = useContext(MainContext);

    useEffect(() => {
        if (showCalendlyModal) {
            const scriptExists = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
            if (!scriptExists) {
                const script = document.createElement("script");
                script.src = "https://assets.calendly.com/assets/external/widget.js";
                script.async = true;
                document.body.appendChild(script);
            }
        }
    }, [showCalendlyModal]);

    if (!showCalendlyModal) return null;

    return (
        <div className="calendly-modal-overlay">
            <div className="calendly-modal-content">
                <button className="close-button" onClick={closeCalendly} aria-label="Close Calendly Modal">×</button>
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/vinaypatel898944"
                    style={{ minWidth: "320px", height: "100%", width: "100%" }}
                />
            </div>
        </div>
    );
};

export default CalendlyModal;
