import React from 'react';

import s from './Header.module.scss';

export const Header: React.FC = () => (
  <header className="govuk-header" role="banner">
    
    <div className="govuk-width-container">
      <div className={`${s.logoContainer} govuk-!-padding-2`}>
      <span className={s.logo} aria-hidden="true" />
      <span >Transport for London</span>
      </div>
    </div>
  </header>
);
