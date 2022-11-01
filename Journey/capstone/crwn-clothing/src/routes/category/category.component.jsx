import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.contexts";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";

import { CategoryContainer, CategoryTitle } from "./category.styles.js";

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
}

export default Category;
