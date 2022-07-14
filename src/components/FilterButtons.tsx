import { useDispatch, useSelector } from "react-redux";
import { filter } from "../enums/filters";
import { changeFilter } from "../redux/filters";

export default function FilterButtons() {
  const activeFilter = useSelector(
    (state: { filters: { value: filter } }) => state.filters.value
  );
  const dispatch = useDispatch();

  return (
    <div className="rounded bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue text-lt-darkGrayishBlue dark:text-dt-darkGrayishBlue flex items-center justify-center gap-4 -tracking-[0.2px] text-sm font-bold p-4 md:p-0">
      <button
        className={activeFilter === filter.ALL ? "text-brightBlue" : ""}
        onClick={() => dispatch(changeFilter(filter.ALL))}
      >
        All
      </button>
      <button
        className={activeFilter === filter.ACTIVE ? "text-brightBlue" : ""}
        onClick={() => dispatch(changeFilter(filter.ACTIVE))}
      >
        Active
      </button>
      <button
        className={activeFilter === filter.COMPLETED ? "text-brightBlue" : ""}
        onClick={() => dispatch(changeFilter(filter.COMPLETED))}
      >
        Completed
      </button>
    </div>
  );
}
