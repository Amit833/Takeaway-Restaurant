import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/basketActions';

export const TakeAwayMenuCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className='menu_card'>
      <div className='content_wrap'>
        <div className='image_container'>
          <img src={item.images} alt='Lorem Picsum' />
        </div>
        <div className='content_container'>
          <div>
            <strong>{item.name}</strong>
          </div>
          <div>€{item.price.price}</div>
          <button onClick={() => dispatch(addItem(item))}>add to basket</button>
        </div>
      </div>
    </div>
  );
};
