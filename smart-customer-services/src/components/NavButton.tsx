import React from "react";

interface InputProps {
  dropdown_items?: string[][];
  icon?: string;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavButton({ dropdown_items, icon, text, onClick }: InputProps) {
  let itemList;
  if (dropdown_items) {
    itemList = dropdown_items.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <li key={index}>
            <a className="dropdown-item" href={item[1]}>
              {item[0]}
            </a>
          </li>
          {index < dropdown_items.length - 1 && (
            <li>
              <hr className="dropdown-divider" />
            </li>
          )}
        </React.Fragment>
      );
    });
  }

  if (text) {
    return (
      <button
      className="btn btn-warning"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
    )
  }
  return (
    <>
      <button
        className="btn btn-success dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src={icon} />
      </button>
      <ul className="dropdown-menu dropdown-menu-end">{itemList}</ul>
    </>
  );
}
