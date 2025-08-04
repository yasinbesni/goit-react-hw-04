import styles from "./ErrorMessage.module.css";
import React from "react";
function ErrorMessage({ message }) {
  return <p className={styles.error}>{message}</p>;
}
export default ErrorMessage;
