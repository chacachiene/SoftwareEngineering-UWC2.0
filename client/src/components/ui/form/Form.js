import React from "react";
import { useState } from "react";
import styles from "./Form.module.css";
import Button from "../buttons/Button";

const Form = (props) => {
  const { name, setName } = useState("");
  const { mcp, setMcp } = useState("");

  const { tool, setTool } = useState("");

  const { route, setRoute } = useState("");

  const { date, setDate } = useState("");

  const [newTaskInput, setNewTaskInput] = useState(() => {
    return {
      name: "123",
      mcp: "",
      tool: "",
      route: "",
      date: "",
    };
  });

  const submitHandler = () => {
    props.onConfirm(newTaskInput);
  };

  return (
    <form method={props.method}>
      <div className={styles.container}>
        <header className={styles.headerForm}>
          {/* <h6 className={styles.headerText}>Create new task</h6> */}
        </header>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.inputLabel}>
            <h6>Name</h6>
          </label>
          <input
            type="text"
            className={styles.inputText}
            name="name"
            id="name"
            value={newTaskInput.name}
          />
          <span className={styles.errorMsg}></span>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="mcp" className={styles.inputLabel}>
            <h6>MCP</h6>
          </label>
          <input
            type="text"
            className={styles.inputText}
            name="mcp"
            id="mcp"
            value={newTaskInput.mcp}
          />
          <span className={styles.errorMsg}></span>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="tool" className={styles.inputLabel}>
            <h6>Tool</h6>
          </label>
          <input
            type="text"
            className={styles.inputText}
            name="tool"
            id="tool"
            value={newTaskInput.tool}
          />
          <span className={styles.errorMsg}></span>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="route" className={styles.inputLabel}>
            <h6>Route</h6>
          </label>
          <input
            type="text"
            className={styles.inputText}
            name="route"
            id="route"
            value={newTaskInput.route}
          />
          <span className={styles.errorMsg}></span>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="date" className={styles.inputLabel}>
            <h6>Date</h6>
          </label>
          <input
            type="date"
            className={styles.inputText}
            name="date"
            id="date"
            value={newTaskInput.date}
          />
          <span className={styles.errorMsg}></span>
        </div>
      </div>
      <footer className={styles.formControl}>
        <Button size={100} onConfirm={submitHandler} color='#059c26'>
          Submit
        </Button>
      </footer>
    </form>
  );
};

export default Form;
