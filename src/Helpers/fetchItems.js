import { stock } from '../Data/stock';

export const fetchItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 300);
  });
};
