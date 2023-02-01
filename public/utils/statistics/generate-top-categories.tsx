import { ExpectedTopItemFormat } from "../../../components/statistics/TopItems";

type ItemType = {
  isCompleted: boolean;
  itemId: string;
  quantity: number;
};

// type for the generateTopCategories expected data
type ExpectedDataType = { categoryName: string; items: ItemType[] }[];

// type for the getTotalItemQuantities function
type GetTotalItemQuantitiesType = { categoryName: string; items: ItemType[] };

export const generateTopCategories = (
  items: ExpectedDataType,
  totalQuantity: number
) => {
  if (!items || items.length <= 0 || totalQuantity <= 0) {
    return [];
  }

  //   create a variable to store the categories and their total quantities
  let categoriesWithPercentages: { name: string; percentage: number }[] = [];

  //   create an array of all the items in each category
  items.forEach((category) => {
    const tmp = getTotalItemQuantities(category, totalQuantity);
    categoriesWithPercentages = [...categoriesWithPercentages, tmp];
  });

  //   sort the categories in descending order
  categoriesWithPercentages.sort((currentCategory, nextCategory) => {
    return nextCategory.percentage - currentCategory.percentage;
  });

  //   return the highest 3
  return categoriesWithPercentages.slice(0, 3);
};

const getTotalItemQuantities = (
  data: GetTotalItemQuantitiesType,
  totalQuantity: number
) => {
  //   console.log("item sent: ", data);
  const total = data.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  //   console.log("Total found: ", total, totalQuantity);
  return {
    name: data.categoryName,
    percentage: Math.floor((total / totalQuantity) * 100),
  };
};
