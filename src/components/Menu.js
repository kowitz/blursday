import { MdCheck } from "react-icons/md";

import style from "./Menu.module.css";

export function MenuItem({ checked, label, onSelect }) {
  return (
    <div className={style.menuItem} onClick={onSelect}>
      <div className={style.menuItemIcon}>{checked ? <MdCheck /> : null}</div>
      <div className={style.menuItemLabel}>{label}</div>
    </div>
  );
}

export function MenuSeparator() {
  return <div className={style.separator} />;
}

export function MenuTitle({ label }) {
  return <div className={style.menuItemTitle}>{label}</div>;
}
