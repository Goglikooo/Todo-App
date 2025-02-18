import { useEffect, useState } from "react";
import styles from "../../app/page.module.css";


type ListItemTypes = {
    
    setTaskWindowClosed:any;
    taskWindowClosed:boolean;
}

export default function AddItem(props:ListItemTypes) {

    const [inputText, setInputText] = useState<string>("");
    const[id, setId] = useState<number>(0);
  

    const changeInputValue = (e:any) => {
        setInputText(e.target.value)
      }
  

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const formJsonValue = Object.fromEntries(formData.entries()).inputValue;

    let response = await fetch(`https://localhost:7259/api/todoItems/${id}/${formJsonValue}`, {
        method: 'POST',
        body: JSON.stringify({
            Id: setId(id+1),
            Value: `${formJsonValue}`,
            done:false
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })

    response = await response.json()
    setInputText("");
    props.setTaskWindowClosed(false);    
}

    return (
        <div className={ props.taskWindowClosed ? styles.add_item_container : styles.add_item_container_closed}>
              <div className={styles.add_item_container_header}>
                <div className={styles.add_item_container_dots}>
                <div style={{backgroundColor:"#ed5aa5", width:"20px", borderRadius:"50px"}}></div>
                <div style={{backgroundColor:"#ef4070", width:"20px", borderRadius:"50px"}}></div>
                <div style={{backgroundColor:"#f8887d", width:"20px", borderRadius:"50px"}}></div>
                </div>
                <button className={styles.close_button} onClick={() => props.setTaskWindowClosed(false)}>close</button>
              </div>
              <div className={styles.add_item_main}>


                <form className={styles.task_form_container} method="post" onSubmit={handleSubmit} action="#">
                  <div className={styles.task_form_header}>Enter your task below</div>
                  <input type="text" className={styles.task_form_input} name="inputValue" onChange={changeInputValue} value={inputText}/>
                  <button type="submit" className={styles.task_form_submit}>submit</button>
                </form>


              </div>
              <div className={styles.add_item_footer}></div>
            </div>
    );
}