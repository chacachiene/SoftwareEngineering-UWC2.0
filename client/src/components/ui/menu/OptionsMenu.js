import React from "react";
import { useEffect } from "react";
import styles from "./OptionsMenu.module.css";

const OptionsMenu = ({ options, functions }) => {
  useEffect(() => {
    const handler = (e) => {

      if (!e.target.closest(".drop-down-menu")) {

        functions[1]();

      }

    };
    document.addEventListener("mousedown", handler);

    return () => {

      document.removeEventListener("mousedown", handler);
      
    };
  }, []);

  return (
    <div className={styles.container}>
      <ul className="drop-down-menu">
        {options.map((option, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                functions[0](option);
              }}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OptionsMenu;
