import FilterList from "./components/filter-list";
import data from "./data-store/events-data.json";
import { TEVENT_DATA } from "./components/filter-list/types";
import classes from './app.module.scss'

function App() {
  return (
    <div className={classes.appContainer}>
      <FilterList data={data as TEVENT_DATA[]} />
    </div>
  );
}

export default App;
