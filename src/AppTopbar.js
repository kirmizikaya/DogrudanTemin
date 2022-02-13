import React  from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const AppTopbar = (props) => {

    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo ">
                <img src={props.layoutColorMode === 'light' ? 'https://ekap.kik.gov.tr/EKAP/App_Themes/Resp/img/ekap_logo_36.png' : 'assets/layout/images/logo-white.svg'} alt="logo"/>
                <span className="text-lg text-blue-300 font-semibold ml-1 white-space-nowrap">Doğrudan Temin Arama</span>
            </Link>

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars"/>
            </button>
 
             
 
 
                
        </div>
    );
}
