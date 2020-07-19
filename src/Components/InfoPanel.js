import React, { useEffect, useState } from 'react';
import GlobalStats from './GlobalStats'
import AllCountries from './AllCountries'
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
}
