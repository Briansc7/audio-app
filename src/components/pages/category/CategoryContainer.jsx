import { useParams } from "react-router-dom";
import Category from "./Category";

const CategoryContainer = () => {
  const { categoryName } = useParams();
  if (categoryName.match(/^[a-zA-Z]+$/)) {
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

export default CategoryContainer;
