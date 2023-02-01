import { useEffect } from "react";
import { useAppDispatch } from "../../../store";
import { uiActions } from "../../../store/ui-slice";

const ChangeTab: React.FC<{
  tab: "items" | "statistics" | "history";
}> = (props) => {
  // this component is used to control the navigation.
  // I encounted this error when I tried use useAppDispatch.useDispatch in a dynamic component with server side rendering:
  // React Hook "useAppDispatch" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function
  // This helper function helps address that error.
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(uiActions.setCurrentTab(props.tab));
  });
  return <p></p>;
};

export default ChangeTab;
