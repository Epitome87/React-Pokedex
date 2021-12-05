import React from 'react';
import styles from './LoadingSpinner.module.css';

function LoadingSpinner(props) {
  return (
    <div className={`${styles.LoadingSpinner} ui active dimmer`}>
      <div className='ui massive text '>{props.children}</div>
    </div>
  );
}

LoadingSpinner.defaultProps = {
  children: 'L O A D I N G . . .',
};

export default LoadingSpinner;
