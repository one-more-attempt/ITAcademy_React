import './add_form.css'
export const AddForm = () => {
  return (
    <div className={"input-form-wrapper"}>
      <input type="text" className={"input-form"} placeholder="Add new todo:" />
      <button className={"add-todo-button"}>Add</button>
    </div>
  );
};
