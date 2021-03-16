import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions.js";

import styles from "./collection-item.module.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);
  console.log({ hovered });

  return (
    <div
      className={classnames(styles["collection-item"])}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div
        className={classnames({ [styles["image--hover"]]: hovered }, styles["image"])}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={styles["collection-footer"]}>
        <span className={styles["name"]}>{name}</span>
        <span className={styles["price"]}>{price}</span>
      </div>
      <CustomButton
        onClick={() => addItem(item)}
        inverted
        customStyles={classnames(
          { [styles["collection-item__custom-button--hover"]]: hovered },
          styles["collection-item__custom-button"]
        )}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
