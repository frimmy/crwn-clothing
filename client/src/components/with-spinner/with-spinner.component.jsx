import React from "react";

import styles from "./with-spinner.module.scss";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  console.log({ isLoading });
  return isLoading ? (
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinnerContainer} />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;