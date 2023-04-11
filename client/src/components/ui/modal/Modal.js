import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Fragment } from "react";
import styles from "./Modal.module.css";

import Card from "../card/Card";
import Form from "../form/Form";



const  BackDrop = ( props) => {
  
  return <div className={styles.backdrop} onClick={props.isShowModal}/>
    
}


const ModalOverlay = (props) => {
  
  


  return (
    <Card className={styles.modal}>
          <div className={styles.closeButton}>
              <button onClick={props.isShowModal}>X</button>
          </div>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p> {props.message}</p>
            <Form onConfirm={props.onConfirm}/>
          </div>
          {/* <footer className={styles.actions}>
            <Button onClick={props.onConfirm} size={100}>
              Submit
            </Button>
          </footer> */}
        </Card>
  )

}
  

const Modal = (props) => {

  return (
    <Fragment>
        {createPortal(<BackDrop onConfirm = {props.onConfirm}/>, document.getElementById('backdrop-root'))}
        {createPortal(<ModalOverlay title = {props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
    </Fragment>
  );
};

export default Modal;
