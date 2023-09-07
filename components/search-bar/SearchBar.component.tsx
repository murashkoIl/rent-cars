'use client';

import React, { memo, useState } from 'react';
import { SearchBarProps } from './search-bar.types';
import { SearchManufacturer } from '../search-manufacturer';

const SearchBarComponent = ({ onSubmit }: SearchBarProps) => {
  const [manufacturer, setManufacturer] = useState('');

  return (
    <form className="searchbar" onSubmit={onSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default memo(SearchBarComponent);
