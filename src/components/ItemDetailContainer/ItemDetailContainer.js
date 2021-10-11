import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchItems } from '../../Helpers/fetchItems';
import { ItemDetail } from './ItemDetail';
import { SamplePads } from './SamplePads';
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

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

  return (
    <div className="item-details-main">
      <div className="item-details-grid-container">
        <div>{loading ? <h2>Loading...</h2> : <ItemDetail {...item} />}</div>
        <SamplePads />
      </div>
    </div>
  );
};
