import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { HiArrowSmLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { Spinner } from '../Spinner/Spinner';
import { getFirestore } from '../../Firebase/config';

import { ItemDetail } from './ItemDetail';
import { SamplePads } from './SamplePads';
import { CartControls } from './CartControls';

import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();
  const [invalidId, setInvalidId] = useState(true);
  const { goBack } = useHistory();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const products = db.collection('products');
    const product = products.doc(itemId);

    product
      .get()
      .then((doc) => {
        if (doc.data() === undefined) {
          setInvalidId(true);
        } else {
          setItem({
            id: doc.id,
            ...doc.data()
          });
          setInvalidId(false);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [itemId, setLoading]);

  return (
    <>
      {invalidId ? (
        loading ? (
          <div className="item-details-main">
            <Spinner />
          </div>
        ) : (
          <div className="invalid-main">
            <div className="invalid-id">
              <h2>Invalid ID</h2>
              <Link className="form-submit-btn" id="return" to="/products">
                Return to Products
              </Link>
            </div>
          </div>
        )
      ) : loading ? (
        <div className="item-details-main">
          <Spinner />
        </div>
      ) : (
        <div className="item-details-main">
          <div className="item-details-flex-container">
            <HiArrowSmLeft
              className="go-back-icon"
              onClick={() => goBack()}
            ></HiArrowSmLeft>
            <div>{<ItemDetail {...item} />}</div>
            <SamplePads itemId={itemId} />
            <CartControls {...item} />
          </div>
        </div>
      )}
    </>
  );
};
