import React from "react";
import { Link } from "react-router-dom";
import { FlyoutMenu } from "../FlyoutMenu";
import { MenuActions } from "../MenuActions";
import { MenuItem } from "../MenuItem/MenuItem";
import styles from "./mainpanel.module.scss";

export function MainPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.container}>
        <Link to="/">
          <span>Home</span>
        </Link>

        <div className={styles.menucontainer}>
          <MenuItem name="Apparel">
            <FlyoutMenu
              items={[
                "unisex / men's t-shirts",
                "women's t-shirts",
                "hoodies & sweatshirts",
              ]}
            />
          </MenuItem>

          <MenuItem name="Homeware">
            <FlyoutMenu items={["pillows", "bath", "bedding"]} />
          </MenuItem>

          <MenuItem name="Accessories">
            <FlyoutMenu items={["face masks", "phone cases", "socks"]} />
          </MenuItem>
        </div>

        <MenuActions />
      </div>
    </div>
  );
}
