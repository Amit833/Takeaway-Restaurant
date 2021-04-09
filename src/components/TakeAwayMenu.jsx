import React from 'react';
import { TakeAwayMenuCard } from '../components/TakeAwayMenuCard';
import { useSelector } from 'react-redux';
import { menu } from '../dummyData.json';
import { SearchBar } from './SearchBar';

export const TakeAwayMenu = () => {
  const state = useSelector((state) => state.searchReducer);
  console.log('state', state);
  const menuItems = Object.values(menu);
  const searchstate = state.toLowerCase().trim();
  const tragetCategory = menuItems.map((category) => {
    /* checks if input has string if true searches for match and returns match only */
    if (state !== '') {
      return category
        .filter(
          (item) =>
            !item.category.search(searchstate) ||
            !item.name.toLowerCase().search(searchstate)
        )
        .map((item) => <TakeAwayMenuCard key={item.id} item={item} />);
    } else {
      return category.map((item) => (
        <TakeAwayMenuCard key={item.id} item={item} />
      ));
    }
  });

  return (
    <>
      <SearchBar />
      <div className='takeawaymenu_container'>{tragetCategory}</div>
    </>
  );
};
