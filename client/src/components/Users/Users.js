import React, { useEffect, useState , useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from "../../actions/userAction";
import User from './User/User.js'
import styles from "./Users.module.css";
import Button from "../../components/ui/buttons/Button";
import { Icons } from "../../constants/icons";
import OptionsMenu from "../../components/ui/menu/OptionsMenu";
import fakedata from "../../constants/data.json";
import DataTable from "react-data-table-component";
import Modal from "../../components/ui/modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";



const Users = () => {
    const initialState = {name: ''};
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);
    const [searchQuery, setSearchQuery] = useState(initialState)

    useEffect(() => {
        dispatch(getUsers(searchQuery));   
    }, [dispatch, searchQuery])

    const handleChange = (e) => {
        setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value});
        
    }
    const clear = () => {
        setSearchQuery(initialState);
    }
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
    const [modifyModalIsOpen, setModifyModalIsOpen] = useState(false);
  
    const handleFilter = (e) => {
        const newData = data.filter((row) => {
            if (keyword === 'Keyword') {
                return row.name.toLowerCase().includes(e.target.value.toLowerCase());
              }
              return row[keyword.toLowerCase()].toLowerCase().includes(e.target.value.toLowerCase());
        
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
  
  
    const modifyUserInfo = (task) => {
      setModifyModalIsOpen(!modifyModalIsOpen);
      setTask(task);
    };
    

  
  
    return (
    <>
{/* 
        <h1>Employees List</h1>
        <div className="input-group mb-3" style={{width:"50vw"}}>
        <input type="text" className="form-control" name="name" value={searchQuery.name} onChange={handleChange}/>
            <div className="input-group-append">
                <span className="input-group-text"><i className="bi bi-x" role="button" onClick={clear}/></span>
            </div>
        </div>
        {!users.length ? <div className="spinner-border" role="status"/> :
        <table className="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => <User user={user} key={user._id}/>)}
        </tbody>
        </table>}     */}
        <Row>
        {modifyModalIsOpen && 
        <Modal 
        title="Create Task" 
        message="Fill out all input fields below to create a task"
        onConfirm={modifyUserInfo}
        >
        </Modal>}

    
        
        <div className={styles.outerContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.header}>
              <Col xl={4}>
                <div className={styles.titleHeader}>EMPLOYEES</div>
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
                //select
                selectableRows
                onSelectedRowsChange={() => console.log('test')}
                Clicked
                onRowClicked = {() => setModifyModalIsOpen(true)}   
                fixedHeader
                fixedHeaderScrollHeight="400px"
                // title = "Task Overview"
              ></DataTable>
            </div>
            {/* <div className={styles.buttonControl}>
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
            </div> */}
          </div>
        </div>
      </Row>
    </>
    )
};

export default Users;