import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getFirestore } from '../../Firebase/config';
import { getRandomInt } from '../../Helpers/getRandomInt';
import './PlayOnline.css';

export const PlayOnline = () => {
  const [productId, setProductId] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const products = db.collection('products');

    products
      .get()
      .then((res) => {
        const arrayOfProductsIds = res.docs.map((doc) => {
          return { id: doc.id };
        });

        setProductId(
          arrayOfProductsIds[getRandomInt(0, arrayOfProductsIds.length - 1)].id
        );
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="play-online-main">
      <div className="play-onlione-flex-container">
        <div className="play-online-text">
          <p className="hero-info-main-text --smaller">
            You can test our kits online using your keyboard, without
            downloading anything. Have fun!
          </p>
          <Link
            className="hero-info-btn --cta --try"
            to={`/productDetails/${productId}`}
          >
            Try Random Pack
          </Link>
        </div>
        <img
          alt="pads for playing kits online"
          src="https://firebasestorage.googleapis.com/v0/b/sample-bucket-5d173.appspot.com/o/pads.png?alt=media&token=aa3d0581-23bd-47fe-bd09-82510efed7a3"
        />
      </div>
    </div>
  );
};
