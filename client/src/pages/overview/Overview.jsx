import React from "react";
import { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Wrapper from "../layouts/Wrapper";
import styles from "./Overview.module.css";
import Button from "../../components/ui/buttons/Button";
import { Icons } from "../../constants/icons";
import OptionsMenu from "../../components/ui/menu/OptionsMenu";
import fakedata from "../../data.json";
import DataTable from "react-data-table-component";
import Modal from '../../components/modal/Modal'
import DeleteModal from "../../components/modal/DeleteModal";

const Overview = () => {
  const data = useMemo(() => fakedata, []);

  const columns = useMemo(
    () => [
      {
        name: "ID",
        selector: (row) => row.id,
        sortable: true,
      },

      {
        name: "Date",
        selector: (row) => row.date,
        sortable: true,
      },
      {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
      },
      {
        name: "MCP",
        selector: (row) => row.mcp,
        sortable: true,
      },
      {
        name: "Tool",
        selector: (row) => row.tool,
        sortable: true,
      },
      {
        name: "Route",
        selector: (row) => row.route,
        sortable: true,
      },
      {
        name: "Status",
        selector: (row) => row.status,
        sortable: true,
      },
      {
        name: "Progress",
        selector: (row) => row.propress,
        sortable: true,
      },
    ],
    []
  );

  const [keywordSelected, setKeywordSelected] = useState(false);
  const [keyword, setKeyword] = useState("Keyword");
  const [searchInteredText, setSearchInteredText] = useState("");
  const [records, setRecords] = useState(data);
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const handleFilter = (e) => {
    const newData = data.filter((row) => {
      switch (keyword) {
        case "ID":
          return row.id.toLowerCase().includes(e.target.value.toLowerCase());
        case "Name":
          return row.name.toLowerCase().includes(e.target.value.toLowerCase());
        case "Date":
          return row.date.toLowerCase().includes(e.target.value.toLowerCase());
        case "MCP":
          return row.mcp.toLowerCase().includes(e.target.value.toLowerCase());
        case "tool":
          return row.tool.toLowerCase().includes(e.target.value.toLowerCase());
        case "route":
          return row.route.toLowerCase().includes(e.target.value.toLowerCase());
        case "status":
          return row.status
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        case "progress":
          return row.progress
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        default:
          return row.name.toLowerCase().includes(e.target.value.toLowerCase());
      }
    });
    setRecords(newData);
  };
  const updateKeywordHanlder = (keywordIsChoosen) => {
    setKeyword(keywordIsChoosen);
    setKeywordSelected(false);
  };

  const displayKeywordMenuHandler = () => {
    setKeywordSelected(!keywordSelected);
  };

  const searchHandler = (input) => {
    setSearchInteredText(input);
  };


  const storageTasks = JSON.parse(localStorage.getItem('tasks'))

  const [tasks, setTask] = useState({})


  const createTaskHandler = (task) => {
    setCreateModalIsOpen(!createModalIsOpen);
    setTask(task);
  };
  
  const deleteTaskHandler = () => {
    setDeleteModalIsOpen(!deleteModalIsOpen);
  };




  const notifications = 1;
  const messages = 1;
  const username = "Nghia Nguyen";
  return (
    <Wrapper
      header={{
        notifications: notifications,
        messages: messages,
        username: username,
      }}
    >
      <Row>
        {createModalIsOpen && 
        <Modal 
        title="Create Task" 
        message="Fill out all input fields below to create a task"
        onConfirm={createTaskHandler}
        >
        </Modal>}

        {deleteModalIsOpen && 
        <DeleteModal 
        title="Delete Task" 
        message="Do you want to delete this task?"
        onConfirm={deleteTaskHandler}
        >
        </DeleteModal>}
        <div className={styles.outerContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.header}>
              <Col xl={4}>
                <div className={styles.titleHeader}>OVERVIEW</div>
              </Col>
              <Col xl={2}>
                <div className={styles.filterContainer}>
                  <span
                    className={styles.filterText}
                    onClick={displayKeywordMenuHandler}
                  >
                    {keyword}
                  </span>
                  <Icons.AiFillCaretDown
                    style={{ padding: "0 12px" }}
                    size={44}
                    color="#D9D9D9"
                    onClick={displayKeywordMenuHandler}
                  />
                  {keywordSelected && (
                    <OptionsMenu
                      options={[
                        "Date",
                        "ID",
                        "Name",
                        "MCP",
                        "Tool",
                        "Route",
                        "Status",
                        "Progress",
                      ]}
                      functions={[
                        updateKeywordHanlder,
                        displayKeywordMenuHandler,
                      ]}
                    />
                  )}
                </div>
              </Col>
              <Col xl={4}>
                <div className={styles.searchBarContainer}>
                  <div className={styles.searchBar}>
                    <Icons.AiOutlineSearch size={30} color="#D9D9D9" />
                    <input
                      type="text"
                      className={styles.inputText}
                      placeholder="Search"
                      // value={searchInteredText}
                      onChange={handleFilter}
                    />
                  </div>
                  <Button
                    size={80}
                    color="#00CC66"
                    // onClick={handleFilter}
                  >
                    Search
                  </Button>
                </div>
              </Col>
            </div>
            <div className={`${styles.tableContainer} ${styles}`}>
              <DataTable
                columns={columns}
                data={records}
                responsive={true}
                highlightOnHover={true}
                pointerOnHover={true}
                selectableRows
                onSelectedRowsChange={(state) => console.log(state.selectedRows)}
                fixedHeader
                fixedHeaderScrollHeight="400px"
                // title = "Task Overview"
              ></DataTable>
            </div>
            <div className={styles.buttonControl}>
              <div className={styles.button}>
                <Button size={140} color="rgb(48 64 212)" onClick={createTaskHandler}>
                  CREATE NEW
                </Button>
              </div>
              <div className={styles.button}>
                <Button
                  size={140}
                  color="#f34949"
                  onClick={deleteTaskHandler}
                >
                  DELETE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Wrapper>
  );
};

export default Overview;
