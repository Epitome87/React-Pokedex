import React from 'react';
import styles from './Page.module.css';

function Page(props) {
  return <section className={styles.Page}>{props.children}</section>;
}

export default Page;
