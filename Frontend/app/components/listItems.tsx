import { useState, useEffect } from "react";
import styles from "../../app/page.module.css";
import { log } from "console";

type ListItemsType = {
    test:boolean;
    taskWindowClosed:any;
    
}


export  default  function ListItems(props:ListItemsType){
  
  
  const [todoItem, setTodoItem] = useState<object[]>();
  const [done, setDone] = useState<boolean>(false);


  useEffect(() => {
    if(!props.taskWindowClosed){
      getAllTodos();
      
    }
    
}, [props.taskWindowClosed, done, props.test])


   const getAllTodos = async () => {
    const response = await fetch('https://localhost:7259/api/todoItems', {cache: 'no-store'});
    const todoItem = await response.json();
    setTodoItem(todoItem);
    
  };


    const clickDoneButton = async (id:number) => {
        const res = await fetch(`https://localhost:7259/api/todoItems/update/${id}`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          }})
          setDone(!done);
      }
      


     return (


        <div className={styles.list_item_container}>
          
            {todoItem?.map((item:any, index:number) => 
              <div className={styles.list_item} key={index}>  
              <p style={{textDecoration: item.done ? "line-through" : "none"}} >{item.value}</p>
                <button className={item.done ? styles.done_button_undo : styles.done_button} onClick={() => clickDoneButton(index)}>{item.done ? "undo" : "done"}</button> 
                 
            </div>
            
            )}
            
          </div>
    );  
}

