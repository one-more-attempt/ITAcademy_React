import logo from "./logo.svg";
import "./App.css";
import { AddForm } from "./components/add_form/add_form";
import { InputFilter } from "./components/input_filter/input_filter";
import { Header } from "./components/header/header";
import { Tasks } from "./components/tasks/tasks";

function App() {
  return (
    <div className="App">
      <Header />
      <InputFilter />
      <Tasks taskName="Task 1"/>
      <Tasks taskName="Task 2"/>
      <Tasks taskName="Task 3"/>
      <AddForm />
    </div>
  );
}

export default App;
