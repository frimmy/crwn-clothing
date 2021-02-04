import React from "react";
import { Link, withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";

import styles from "./collection-preview.module.scss";

const CollectionPreview = ({ match, routeName, title, items }) => (
  <div className={styles["collection-preview"]}>
    <Link to={`${match.path}/${routeName}`}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
    </Link>
    <div className={styles.preview}>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
