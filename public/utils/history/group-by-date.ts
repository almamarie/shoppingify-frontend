import { HISTORY_FROM_DATABASE } from "../../../store/dummy_history";

export const groupByDate = () => {
  const history = HISTORY_FROM_DATABASE;
  const groups = [];
  Object.entries(history).forEach((item, value) => {});
};
