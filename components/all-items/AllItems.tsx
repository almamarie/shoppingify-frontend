import ItemsList from "./ItemsList";

export type AllItemsExpectedDataType = {
  items: {};
};

const AllItems: React.FC<AllItemsExpectedDataType> = (props) => {
  return (
    <section>
      {Object.keys(props.items).map((item) => {
        return (
          <ItemsList
            key={item}
            category={item}
            items={props.items[item as keyof typeof props.items]}
          />
        );
      })}
    </section>
  );
};

export default AllItems;
