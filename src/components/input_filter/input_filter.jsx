import "./input_filter.css";
export const InputFilter = () => {
  return (
    <div>
      <input
        type="text"
        className={"search-form"}
        placeholder="Type to search:"
      />
      <div className={"button-wrapper"}>
        <button className={"all-filter-button"}>All</button>
        <button className={"important-filter-button"}>Important</button>
        <button className={"done-filter-button"}>Done</button>
      </div>
    </div>
  );
};
