import React, { useEffect, useState } from 'react';
import { ItemInCart } from './ItemInCart';
import { fetchItems } from '../../Helpers/fetchItems';
import './ItemInCartContainer.css';

export const ItemInCartContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  //   Hago envío ficticio de un item para modelar el Carrito
  const itemId = 1;

  useEffect(() => {
    setLoading(true);

    fetchItems()
      .then((res) => {
        setItem(res.find((prod) => prod.id === Number(itemId)));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return <div>{loading ? <h2>Loading...</h2> : <ItemInCart {...item} />}</div>;
};
