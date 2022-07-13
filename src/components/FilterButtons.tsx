export default function FilterButtons() {
  return (
    <div className="rounded bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue text-lt-darkGrayishBlue dark:text-dt-darkGrayishBlue flex items-center justify-center gap-4 -tracking-[0.2px] text-sm font-bold p-4 md:p-0">
      <button className="text-brightBlue">All</button>
      <button className="">Active</button>
      <button className="">Completed</button>
    </div>
  );
}
