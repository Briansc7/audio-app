import { useParams } from "react-router-dom";
import Category from "./Category";

const CategoryContainer = () => {
  const { categoryName } = useParams();
  if (isCategoryNameValid(categoryName)) {
    return (
      <div>
        <Category categoryName={categoryName} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Categoría inválida</h1>
      </div>
    );
  }
};

function isCategoryNameValid(categoryName) {
  return categoryName.match(/^[a-zA-Z]+$/);
}

export default CategoryContainer;
