import React from "react"
import styles from "./Form.module.css"
import { useState } from "react"
import validation from "./validation";

export default function Form(props) {
const [userData, setUserData] = useState({
    username: "",
    password: "",
});

const [errors, setErrors] = useState({
    username: "",
    password: "",
});

function handleInputChange(event){
  const {name, value} = event.target;
  setUserData({...userData, [name]: value})
  setErrors(validation({
    ...userData, [name]: value,
  }))
};

function handleSubmit(event){
  event.preventDefault();
  props.login(userData);
}

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.divForm}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" className={styles.inputForm} value={userData.username} onChange={handleInputChange}/>
            {errors.username ? <p className={styles.error}>{errors.username && errors.username}</p> : null}
            <br/>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" className={styles.inputForm} value={userData.password} onChange={handleInputChange}/>
            {errors.password ? <p className={styles.error}>{errors.password && errors.password}</p> : null}
            <br/>
            <button type="submit" className={styles.buttonForm}>Login</button>
            </div>
        </form>
    );
}