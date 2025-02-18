import { useState } from "react";
import styles from "../../app/page.module.css";

type ListItemTypes = {
    setTest:any;
    test:boolean;
    setTaskWindowClosed:any;
}


export default function NavigationButtons(props:ListItemTypes){


    const handleMarkAllDone = async () => {
        const res = await fetch(`https://localhost:7259/api/todoItems/update/all`,{
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            }})
            props.setTest(!props.test);
        }
      
  
        const DeleteAll = async () => {
            const res = await fetch(`https://localhost:7259/api/todoItems/delete/all`,{
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                }})
                props.setTest(!props.test);
            }


    return (
        <div className={styles.navigation_button}>
            <button className={styles.add_button} onClick={() => props.setTaskWindowClosed(true)}>Add Item</button>
            <button className={styles.delete_item_button} onClick={handleMarkAllDone}>Mark All Done</button>
            <button className={styles.delete_all_button} onClick={DeleteAll}>Delete All</button>
        </div>
    )
}