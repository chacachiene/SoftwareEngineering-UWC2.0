import React from "react";
import { useState, useContext } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import styles from "./Home.module.css";
import ProgressBar from "../ui/progress/ProgressBar";
import DoughnutChart from "../ui/charts/DoughNutChart.js";
import VerticalChart from "../ui/charts/VerticalChart";
import Wrapper from "../../pages/layouts/Wrapper";


const HomePage = () => {
  const monthWatse = {
    value: {
      janitor: [20, 23, 45, 65, 100, 60, 80],
      collector: [40, 50, 30, 70, 120, 90],
    },
    month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  };

  const tasksJanitor = 70;
  const tasksCollector = 70;
  const monthWaste = 236353;
  const notifications = 1;
  const messages = 1;
  const username = "Nghia Nguyen";
  const [tasks, setTask] = useState(23);
  const tasksTotal = 150;
  const tasksDone = (tasks * 100) / tasksTotal;
  

  return (
    <Wrapper
      header={{
        notifications: notifications,
        messages: messages,
        username: username,
      }}
    >
      <Row>
        <div className={styles.container}>
          <div className={styles.statistic}>
            <Col xl={4} md={4} sm={12}>
              <div className={styles.taskContainer}>
                <h6 className={styles.containerTitle}>TASK TODAY</h6>
                <div className={styles.taskNumber}>{tasks}</div>
                <div className={styles.lineDivider}></div>
                <div className={styles.progressBar}>
                  <ProgressBar value={tasksDone} />
                </div>
              </div>
            </Col>

            <Col xl={4} md={4} sm={12}>
              <div className={styles.janitorContainer}>
                <h6 className={styles.containerTitle}>JANITOR</h6>
                <div className={styles.janitorChart}>
                  <span className={styles.tasksDoneJanitor}>
                    TOTAL DONE <br />
                    {tasksJanitor}%
                  </span>
                  {/* <DoughnutChart dataInput={[10, 20]} size={120} /> */}
                </div>
              </div>
            </Col>

            <Col xl={4} md={4} sm={12}>
              <div className={styles.collectorContainer}>
                <h6 className={styles.containerTitle}>COLLECTOR</h6>
                <div className={styles.collectorChart}>
                  <span className={styles.tasksDoneCollector}>
                    TOTAL DONE <br /> {tasksCollector}%
                  </span>
                  {/* <DoughnutChart dataInput={[10, 20]} size={120} /> */}
                </div>
              </div>
            </Col>
          </div>
        </div>
      </Row>
      <Row>
        <div className={styles.monthlyChart}>
          <h6 className={styles.monthlyChartTitle}>Monthly Waste(kg)</h6>
          <div className={styles.monthlyChartContent}>
            {Intl.NumberFormat().format(monthWaste)}
            {/*<div className={styles.}></div> */}
          </div>
          {/* <VerticalChart dataInput={monthWatse} size={600} /> */}
        </div>
      </Row>
    </Wrapper>
  );
};

export default HomePage;
