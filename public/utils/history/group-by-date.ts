import { HISTORY_FROM_DATABASE } from "../../../store/dummy_history";
import { HistoryType } from "../types";
// import { NUMBERS_TO_MONTHS, MonthType } from "./months";

export const groupByDate = () => {
  const history = HISTORY_FROM_DATABASE;

  if (Object.keys(history).length < 0) {
    return [];
  }
  const groups: HistoryType[] = [];
  try {
    Object.entries(history).forEach((item, _) => {
      // extract year and month
      const [year, monthNumber] = item[1].date.slice(0, 7).split("-");
      const month = convertMonth(monthNumber);

      const groupTitle = `${month} ${year}`;

      // find index of title in gropus array
      const groupIndex = groups.findIndex((singleGroup) => {
        return singleGroup.title === groupTitle;
      });

      if (groupIndex < 0) {
        const tmp: HistoryType = {
          title: groupTitle,
          data: [item[1]],
        };

        groups.push(tmp);
      }
      // console.log(groupIndex);

      if (groupIndex >= 0) {
        console.log(`${groupTitle} already in system`);
        groups[groupIndex].data.push(item[1]);
      }
    });
  } catch (error) {
    console.log("Error occured with grouping data");
    return [];
  }
  console.log("Groups: ", groups);

  return groups;
};

function convertMonth(monthNumber: string) {
  switch (monthNumber) {
    case "01":
      return "January";

    case "02":
      return "February";

    case "03":
      return "March";

    case "04":
      return "April";

    case "05":
      return "May";

    case "06":
      return "June";

    case "07":
      return "July";

    case "08":
      return "August";

    case "09":
      return "September";

    case "10":
      return "October";

    case "11":
      return "November";

    case "12":
      return "December";

    default:
  }
}

// =======

[
  "-NMPllMqnofG3L446B-o",
  {
    cartState: "completed",
    cartTitle: "Wonyo",
    date: "2023-01-22T18:39:18.223Z",
    items: [[Object], [Object]],
    totalQuantity: 24,
  },
];

// ========

[
  {
    title: "July 2020",
    data: [
      {
        cartTitle: "Board Game Week 2",
        cartState: "completed",
        date: "Mon 27.7.2020",
        items: [
          {
            categoryName: "Fruits and vegetables",
            items: [
              {
                itemId: "Avocado",
                quantity: 4,
              },
              {
                itemId: "Banana",
                quantity: 9,
              },
            ],
          },

          {
            categoryName: "Beverages",
            items: [
              {
                itemId: "coca-cola",
                quantity: 1,
              },

              {
                itemId: "malta",
                quantity: 5,
              },
            ],
          },
          {
            categoryName: "Pets",
            items: [
              {
                itemId: "Salmon 1kg",
                quantity: 2,
              },
            ],
          },
        ],
      },
      {
        cartTitle: "Grocery List",
        cartState: "canceled",
        date: "Mon 16.7.2020",
        items: [
          {
            categoryName: "Fruits and vegetables",
            items: [
              {
                itemId: "Avocado",
                quantity: 4,
              },
              {
                itemId: "Banana",
                quantity: 9,
              },
            ],
          },

          {
            categoryName: "Pets",
            items: [
              {
                itemId: "Salmon 1kg",
                quantity: 7,
              },
            ],
          },
        ],
      },
    ],
  },
];
