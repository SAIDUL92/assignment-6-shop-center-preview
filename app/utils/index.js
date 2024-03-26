export const getUniqueCategories = (products) => {
  const categories = [];
  products.forEach(product => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });
  return categories;
};