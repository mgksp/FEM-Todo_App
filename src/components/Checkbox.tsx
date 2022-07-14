import { motion } from "framer-motion";
import iconCheck from "../images/icon-check.svg";

interface CheckboxProps {
  id: string;
  checked: boolean;
  handleChange: VoidFunction;
}
export default function Checkbox({ id, checked, handleChange }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={`relative w-5 h-5 rounded-full bg-gradient-to-br from-checkBoxBg-from to-checkBoxBg-to ${
        checked ? "" : "border-2"
      } border-gray-400 hover:border-0 grid place-items-center cursor-pointer md:w-6 md:h-6`}
    >
      <motion.div
        initial={{ scale: checked ? 0 : 1 }}
        animate={{ scale: checked ? 0 : 1 }}
        className="absolute top-0 left-0 w-full h-full hover:p-[2px]"
      >
        <div className="w-full h-full bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue rounded-full"></div>
      </motion.div>

      <img src={iconCheck} alt="" />
      <input
        type="checkbox"
        id={id}
        className="invisible absolute"
        checked={checked}
        onChange={handleChange}
      />
    </label>
  );
}
