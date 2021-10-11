import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { fetchItems } from '../../Helpers/fetchItems';
import { useParams, NavLink } from 'react-router-dom';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    fetchItems()
      .then((res) => {
        if (categoryId) {
          setItems(res.filter((prod) => prod.category === categoryId));
        } else {
          setItems(res);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

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
        {loading ? <h2>Loading...</h2> : <ItemList products={items} />}
      </section>
    </>
  );
};
