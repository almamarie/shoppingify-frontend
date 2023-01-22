export const DUMMY_HISTORY = [
  {
    title: "August 2020",
    data: [
      {
        name: "Grocery List",
        date: "Mon 27.8.2020",
        status: "completed",
        items: [
          {
            categoryName: "Fruits and vegetables",
            items: [
              {
                name: "Avocado",
                quantity: 4,
              },
              {
                name: "Banana",
                quantity: 9,
              },
            ],
          },

          {
            categoryName: "Beverages",
            items: [
              {
                name: "coca-cola",
                quantity: 1,
              },

              {
                name: "malta",
                quantity: 5,
              },
            ],
          },
          {
            categoryName: "Pets",
            items: [
              {
                name: "Salmon 1kg",
                quantity: 1,
              },
            ],
          },
        ],
      },
      {
        name: "Ero's Farewell Party",
        date: "Mon 24.8.2020",
        status: "completed",
        items: [
          {
            categoryName: "Fruits and vegetables",
            items: [
              {
                name: "Avocado",
                quantity: 4,
              },
              {
                name: "Banana",
                quantity: 9,
              },
            ],
          },

          {
            categoryName: "Pets",
            items: [
              {
                name: "Salmon 1kg",
                quantity: 3,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "July 2020",
    data: [
      {
        name: "Board Game Week 2",
        date: "Mon 27.7.2020",
        status: "completed",
        items: [
          {
            categoryName: "Fruits and vegetables",
            items: [
              {
                name: "Avocado",
                quantity: 4,
              },
              {
                name: "Banana",
                quantity: 9,
              },
            ],
          },

          {
            categoryName: "Beverages",
            items: [
              {
                name: "coca-cola",
                quantity: 1,
              },

              {
                name: "malta",
                quantity: 5,
              },
            ],
          },
          {
            categoryName: "Pets",
            items: [
              {
                name: "Salmon 1kg",
                quantity: 2,
              },
            ],
          },
        ],
      },
      {
        name: "Grocery List",
        date: "Mon 16.7.2020",
        status: "canceled",
        items: [
          {
            categoryName: "Fruits and vegetables",
            items: [
              {
                name: "Avocado",
                quantity: 4,
              },
              {
                name: "Banana",
                quantity: 9,
              },
            ],
          },

          {
            categoryName: "Pets",
            items: [
              {
                name: "Salmon 1kg",
                quantity: 7,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const HISTORY_FROM_DATABASE = {
  "-NMPl9fSJoiNjS0hppTa": {
    cartState: "completed",
    cartTitle: "New Shopping List",
    date: "2023-01-22T18:36:39.735Z",
    items: [
      {
        categoryName: "Fruits and vegetables",
        items: [
          { isCompleted: true, itemId: "Watermelon", quantity: 3 },
          { isCompleted: true, itemId: "Piele De Sapo Melon", quantity: 1 },
          { isCompleted: true, itemId: "Avocado", quantity: 2 },
        ],
      },
      {
        categoryName: "Meat and Fish",
        items: [{ isCompleted: true, itemId: "Chicken 1kg", quantity: 3 }],
      },
      {
        categoryName: "Beverages",
        items: [
          { isCompleted: true, itemId: "Sprite", quantity: 7 },
          { isCompleted: false, itemId: "Coca-Cola", quantity: 7 },
        ],
      },
    ],
    totalQuantity: 23,
  },
  "-NMPlH51h5g1oVAceRBm": {
    cartState: "completed",
    cartTitle: "Ama's Wedding",
    date: "2023-01-22T18:37:10.104Z",
    items: [
      {
        categoryName: "Beverages",
        items: [
          { isCompleted: true, itemId: "Coca-Cola", quantity: 1 },
          { isCompleted: true, itemId: "Malta", quantity: 1 },
        ],
      },
      {
        categoryName: "Meat and Fish",
        items: [{ isCompleted: true, itemId: "Chicken 1kg", quantity: 1 }],
      },
      {
        categoryName: "Fruits and vegetables",
        items: [
          { isCompleted: true, itemId: "Piele De Sapo Melon", quantity: 1 },
        ],
      },
    ],
    totalQuantity: 4,
  },
  "-NMPlLO7haX8_U06F_Cj": {
    cartState: "canceled",
    cartTitle: "Woody's homecoming",
    date: "2023-01-22T18:37:27.713Z",
    items: [
      {
        categoryName: "Fruits and vegetables",
        items: [{ isCompleted: false, itemId: "Banana", quantity: 1 }],
      },
      {
        categoryName: "Meat and Fish",
        items: [{ isCompleted: false, itemId: "Chicken 1kg", quantity: 1 }],
      },
      {
        categoryName: "Beverages",
        items: [{ isCompleted: false, itemId: "Pepsi", quantity: 1 }],
      },
    ],
    totalQuantity: 3,
  },
  "-NMPl_VhlzqPGzpqONBV": {
    cartState: "completed",
    cartTitle: "New Shopping List",
    date: "2023-01-22T18:38:29.633Z",
    items: [
      {
        categoryName: "Fruits and vegetables",
        items: [
          { isCompleted: true, itemId: "Watermelon", quantity: 5 },
          { isCompleted: true, itemId: "Banana", quantity: 3 },
          { isCompleted: false, itemId: "Avocado", quantity: 2 },
          { isCompleted: true, itemId: "Pre cooked corn 450g", quantity: 5 },
          { isCompleted: true, itemId: "Mandarin Nadorcott", quantity: 10 },
        ],
      },
    ],
    totalQuantity: 25,
  },
  "-NMPllMqnofG3L446B-o": {
    cartState: "completed",
    cartTitle: "Wonyo",
    date: "2023-01-22T18:39:18.223Z",
    items: [
      {
        categoryName: "Beverages",
        items: [
          { isCompleted: true, itemId: "Pepsi", quantity: 4 },
          { isCompleted: true, itemId: "Malta", quantity: 4 },
          { isCompleted: true, itemId: "Coca-Cola", quantity: 4 },
          { isCompleted: true, itemId: "Sprite", quantity: 4 },
        ],
      },
      {
        categoryName: "Fruits and vegetables",
        items: [
          { isCompleted: true, itemId: "Mandarin Nadorcott", quantity: 8 },
        ],
      },
    ],
    totalQuantity: 24,
  },
  "-NMPlowCOUC_FoI4C89r": {
    cartState: "canceled",
    cartTitle: "Name",
    date: "2023-01-22T18:39:32.838Z",
    items: [
      {
        categoryName: "Meat and Fish",
        items: [
          { isCompleted: false, itemId: "Salmon 1kg", quantity: 1 },
          { isCompleted: false, itemId: "Chicken 1kg", quantity: 1 },
        ],
      },
      {
        categoryName: "Beverages",
        items: [{ isCompleted: false, itemId: "Malta", quantity: 1 }],
      },
      {
        categoryName: "Fruits and vegetables",
        items: [
          { isCompleted: false, itemId: "Mandarin Nadorcott", quantity: 1 },
        ],
      },
    ],
    totalQuantity: 4,
  },
};
