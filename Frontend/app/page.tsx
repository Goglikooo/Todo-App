"use client"
import styles from "./page.module.css";
import Heading from "./components/heading";
import { useState, useEffect } from "react";
import ListItems from "./components/listItems";
import AddItem from "./components/addItem";
import NavigationButtons from "./components/navigationButtons";

export default function Home() {


    const [taskWindowClosed, setTaskWindowClosed] = useState<boolean>(false);
    const [test, setTest] = useState<boolean>(false);
    

  return (
    <div className={styles.main_div}>
      <div className={styles.todo_container}>
          <AddItem  setTaskWindowClosed={setTaskWindowClosed} taskWindowClosed={taskWindowClosed}/>
          <Heading/>
          <ListItems taskWindowClosed={taskWindowClosed} test={test}/>
          <NavigationButtons  setTaskWindowClosed={setTaskWindowClosed} setTest={setTest} test={test}/>
      </div>
    </div>
  );
}
