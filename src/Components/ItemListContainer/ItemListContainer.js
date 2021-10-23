import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams, NavLink } from 'react-router-dom';
import { getFirestore } from '../../Firebase/config';
import { Spinner } from '../Spinner/Spinner';

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
          to="/products"
          activeClassName="article-category-active"
          className="article-category-link"
        >
          All
        </NavLink>
        <NavLink
          to="/products/RAP"
          activeClassName="article-category-active"
          className="article-category-link"
        >
          Rap
        </NavLink>
        <NavLink
          to="/products/TRAP"
          activeClassName="article-category-active"
          className="article-category-link"
        >
          Trap
        </NavLink>
        <NavLink
          to="/products/DRILL"
          activeClassName="article-category-active"
          className="article-category-link"
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
