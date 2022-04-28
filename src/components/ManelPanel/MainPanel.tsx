import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { setLogged } from "../../store/login/action";
import { FlyoutMenu } from "../FlyoutMenu";
import { LoginForm } from "../LoginForm";
import { MenuActions } from "../MenuActions";
import { MenuItem } from "../MenuItem/MenuItem";
import styles from "./mainpanel.module.scss";

export function MainPanel() {
  const [showLogin, setShowLogin] = useState(false)
  const [mode, setMode] = useState('')
  const isLogged = useSelector<RootState, Boolean>(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className={styles.panel}>
      <div className={styles.container}>
        <div>
          <Link to="/">
            <span>Home</span>
          </Link>

          {isLogged ? (
            <button className={styles.buttonLogin} onClick={() => {dispatch(setLogged(false))}}>Logout</button>
          ) : (
            <>
              <button className={styles.buttonLogin} onClick={() => {setShowLogin(true); setMode('login')}}>Sign in</button>
              <button className={styles.buttonLogin} onClick={() => {setShowLogin(true); setMode('signup')}}>Sign up</button>
            </>
            
          )}
      
          {showLogin ? (<LoginForm mode={mode} setShowLogin={setShowLogin}/>) : null}
        </div>

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
