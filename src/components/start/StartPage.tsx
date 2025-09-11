import React from 'react';
import { Header } from 'components/layout/Header';
import { Footer } from 'components/layout/Footer';
import { ResponsiveList } from 'components/common/ResponsiveList';
import s from './StartPage.module.scss';

export const StartPage: React.FC = () => {
  const items = [
  { id: 'bakerloo', name: 'Bakerloo' },
  { id: 'central', name: 'Central' },
  { id: 'circle', name: 'Circle' },
  { id: 'district', name: 'District' },
  { id: 'hammersmith-city', name: 'Hammersmith & City' },
  { id: 'jubilee', name: 'Jubilee' },
  { id: 'metropolitan', name: 'Metropolitan' },
  { id: 'northern', name: 'Northern' },
  { id: 'piccadilly', name: 'Piccadilly' },
  { id: 'victoria', name: 'Victoria' },
  { id: 'waterloo-city', name: 'Waterloo & City' },
  { id: 'overground', name: 'Overground' },
  { id: 'liberty', name: 'Liberty' },
  { id: 'mildmay', name: 'Mildmay' },
  { id: 'weaver', name: 'Weaver' },
  { id: 'windrush', name: 'Windrush' },
  { id: 'lioness', name: 'Lioness' },
  { id: 'suffragette', name: 'Suffragette' },
  { id: 'elizabeth-line', name: 'Elizabeth line' },
  { id: 'dlr', name: 'DLR' },
  { id: 'tram', name: 'Tram' }
];


  return (
    <div className={s.pageWrapper}>
      <Header />
      <main >
        <div className="govuk-width-container">
          <div className="govuk-main-wrapper">
            <h1 className="govuk-heading-s">Tube Status updates</h1>
            <ResponsiveList items={items} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
