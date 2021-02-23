import { MdCheck } from "react-icons/md";

import style from "./Menu.module.css";

export function Menu({ children }) {
  return <div className={style.menu}>{children}</div>;
}

export function MenuItem({ icon, checked, label, onSelect, href }) {
  let itemIcon = null;
  if (checked) {
    itemIcon = <MdCheck />;
  } else if (icon) {
    itemIcon = icon;
  }

  const contents = (
    <>
      <div className={style.menuItemIcon}>{itemIcon}</div>
      <div className={style.menuItemLabel}>{label}</div>
    </>
  );

  return href ? (
    <a className={style.menuItem} href={href} target="_none" onClick={onSelect}>
      {contents}
    </a>
  ) : (
    <button className={style.menuItem} onClick={onSelect}>
      {contents}
    </button>
  );
}

export function MenuSeparator() {
  return <div className={style.separator} />;
}

export function MenuTitle({ label }) {
  return <div className={style.menuItemTitle}>{label}</div>;
}
