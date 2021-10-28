import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';

import { getFirestore } from '../../Firebase/config';
import { Spinner } from '../Spinner/Spinner';

import { ItemList } from './ItemList';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const products = categoryId
      ? db.collection('products').where('category', '==', categoryId)
      : db.collection('products');

    products
      .get()
      .then((res) => {
        const newItems = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setItems(newItems);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId, setLoading]);

  return (
    <>
      <nav className="nav-categories">
        <p>Filter by genre:</p>
        <NavLink
          exact
          activeClassName="article-category-active"
          className="article-category-link"
          to="/products"
        >
          All
        </NavLink>
        <NavLink
          activeClassName="article-category-active"
          className="article-category-link"
          to="/products/RAP"
        >
          Rap
        </NavLink>
        <NavLink
          activeClassName="article-category-active"
          className="article-category-link"
          to="/products/TRAP"
        >
          Trap
        </NavLink>
        <NavLink
          activeClassName="article-category-active"
          className="article-category-link"
          to="/products/DRILL"
        >
          Drill
        </NavLink>
      </nav>
      <section className="item-card-section">
        {loading ? <Spinner /> : <ItemList products={items} />}
      </section>
    </>
  );
};
