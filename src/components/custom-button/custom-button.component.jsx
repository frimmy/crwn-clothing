import React from 'react';
import classNames from 'classnames/bind';

import './custom-button.module.scss';
import styles from  './custom-button.module.scss';

let cx = classNames.bind(styles);

const CustomButton = ({children, isGoogleSignIn, inverted, customStyles, ...otherProps}) => {

  const buttonClassName = cx({
    [styles['base-button-container']]: true,
    [styles['custom-button']]: !isGoogleSignIn,
    [styles['google-sign-in']]: isGoogleSignIn,
    inverted: inverted,
  }, customStyles);
  return (
    <button className={buttonClassName} {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
