import React from "react";
import classnames from 'classnames/bind';

import styles from "./form-input.module.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const cx = classnames.bind(styles);

  return (
   <div className={styles.group}>
    <input className={styles['form-input']} onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={cx({shrink: otherProps.value.length}, 'form-input-label')}
      >
        {label}
      </label>
    ) : null}
  </div>
)};

export default FormInput;
