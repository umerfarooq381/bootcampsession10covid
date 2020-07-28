import React from 'react';
import GlobalStats from './GlobalStats'
import AllCountries from './AllCountries'
import Graphs from './Graphs'
export default function InfoPanel({currentScreen}) {
  if(currentScreen === 0)
  {
    return (
      <div>
        <GlobalStats />
      </div>
    );
  }
  else if(currentScreen === 1)
  {
    return (
      <div>
        <AllCountries />
      </div>
    );
  }
  else
  {
    return (
      <div>
        <Graphs />
      </div>
    );
  }
}
