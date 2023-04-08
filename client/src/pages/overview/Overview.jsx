import React from "react";
import { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Wrapper from "../layouts/Wrapper";
import styles from "./Overview.module.css";
import Button from "../../components/ui/buttons/Button";
import { Icons } from "../../constants/icons";
import OptionsMenu from "../../components/ui/menu/OptionsMenu";
// import fakedata from "../../data.json";
import DataTable from "react-data-table-component";
import Modal from "../../components/ui/modal/Modal";
import DeleteModal from "../../components/ui/modal/DeleteModal";

const Overview = () => {
  

  const notifications = 1;
  const messages = 1;
  const username = "Nghia Nguyen";
  return (

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
  );
};

export default Overview;
