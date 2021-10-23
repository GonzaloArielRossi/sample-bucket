import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { ItemDetail } from './ItemDetail';
import { SamplePads } from './SamplePads';
import { getFirestore } from '../../Firebase/config';
import { CartControls } from './CartControls';
import './ItemDetailContainer.css';
import { HiArrowSmLeft } from 'react-icons/hi';
import { Spinner } from '../Spinner/Spinner';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const products = db.collection('products');
    const product = products.doc(itemId);

    product
      .get()
      .then((doc) => {
        setItem({
          id: doc.id,
          ...doc.data()
        });
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [itemId, setLoading]);

  const { goBack } = useHistory();

  return (
    <div className="item-details-main">
      <div className="item-details-flex-container">
        <HiArrowSmLeft
          className="go-back-icon"
          onClick={() => goBack()}
        ></HiArrowSmLeft>
        <div>{loading ? <Spinner /> : <ItemDetail {...item} />}</div>
        <SamplePads />
        <CartControls {...item} />
      </div>
    </div>
  );
};
