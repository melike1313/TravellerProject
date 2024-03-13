import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './Button';
import './Navbar.css';
import './Button.css';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { Scrollbars } from 'react-custom-scrollbars-2';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showCities, setShowCities] = useState(false); // Durumu ekleyin

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const handleCountryHover = (country) => {
    setSelectedCountry(country);
    setShowCities(true); // Şehirleri göster
  };

  const handleCountryLeave = () => {
    setShowCities(true); // Şehirleri gizle
  };

  const countries = [
    {
      name: 'United States',
      cities: ['New York', 'Los Angeles', 'Las Vegas', 'Miami', 'San Francisco']
    },
    {
      name: 'Canada',
      cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa']
    },
    {
      name: 'Australia',
      cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide']
    },
    {
      name: 'United Kingdom',
      cities: ['London', 'Manchester', 'Birmingham', 'Glasgow', 'Liverpool']
    },
    {
      name: 'Germany',
      cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt']
    },
    {
      name: 'France',
      cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice']
    },
    {
      name: 'Italy',
      cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo']
    },
    {
      name: 'Spain',
      cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza']
    },
    {
      name: 'Netherlands',
      cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven']
    },
    {
      name: 'Japan',
      cities: ['Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo']
    },
    {
      name: 'South Korea',
      cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon']
    },
    {
      name: 'China',
      cities: ['Shanghai', 'Beijing', 'Tianjin', 'Guangzhou', 'Shenzhen']
    },

    {
      name: 'Brazil',
      cities: ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Brasília', 'Fortaleza']
    },
    {
      name: 'Mexico',
      cities: ['Mexico City', 'Ecatepec', 'Guadalajara', 'Puebla', 'Juárez']
    },

    {
      name: 'Egypt',
      cities: ['Cairo', 'Alexandria', 'Giza', 'Shubra El-Kheima', 'Port Said']
    },



  ];

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faPlane} />
            TRAVELLER
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <span className='nav-links'>Countries <i className='fas fa-caret-down' /></span>
              <div className='dropdown-content'>
                <Scrollbars style={{ height: 300 }}>
                  {countries.map(country => (
                    <div
                      key={country.name}
                      className="dropdown"
                      onMouseEnter={() => handleCountryHover(country)}
                      onMouseLeave={handleCountryLeave}
                    >
                      <Link to={`/countries/${country.name}`} className='nav-links'>
                        {country.name} <i className='fas fa-caret-right' />
                      </Link>

                    </div>
                  ))}
                </Scrollbars>
                {showCities && selectedCountry && selectedCountry.cities && (
                  <div className="countries-list">
                    {selectedCountry.cities.map(city => (
                      <Link
                        key={city}
                        to={`/${selectedCountry.name}/${city}`}
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        {city}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li className='nav-item'>
              <Link to='/explore' className='nav-links' onClick={closeMobileMenu}>
                Explore
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;