import React, { useState } from 'react';
import { CascadeSelect } from 'primereact/cascadeselect';

export default function TemplateDemo({ countries, onSelectCountry }) {
    const [selectedCity, setSelectedCity] = useState(null);

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                {option.states && <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                className={`flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />}
                {option.cities && <i className="pi pi-compass"/>}
                {option.cname && <i className="pi pi-map-marker"/>}
                <span>{option.cname || option.name}</span>
            </div>
        );
    }

    return (
        <div className="dropdown-content">
            <CascadeSelect value={selectedCity} onChange={(e) => {
                setSelectedCity(e.value);
                onSelectCountry(e.value);
            }} options={countries} 
                optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} 
                placeholder="Select a Country" itemTemplate={countryOptionTemplate} style={{ minWidth: '14rem' }} />
        </div>
    )
}
