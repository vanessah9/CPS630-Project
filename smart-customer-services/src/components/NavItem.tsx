import { Link } from "react-router-dom";

interface InputProps {
  text: string;
  link?: string;
  dropdown: boolean;
  dropdown_items?: string[][];
}

export default function NavItem({
  text,
  link,
  dropdown,
  dropdown_items,
}: InputProps) {
  if (!dropdown) {
    return (
      <li className="nav-item">
        <Link to={link ?? ""} className="nav-link" aria-current="page">
          {text}
        </Link>
      </li>
    );
  } else {

    let itemList;
    
    if (dropdown_items) {
      itemList = dropdown_items.map((item, index) => {
        return (
          <>
            <li key={index}>
              <Link className="dropdown-item" to={item[1]}>
                {item[0]}
              </Link>
            </li>
            {index < dropdown_items.length - 1 && (
              <li>
                <hr className="dropdown-divider" />
              </li>
            )}
          </>
        );
      });
    }

    return (
      <li className="nav-item dropdown-center">
        <Link
          className="nav-link dropdown-toggle"
          to="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {text}
        </Link>
        <ul className="dropdown-menu dropdown-menu-end">{itemList}</ul>
      </li>
    );
  }
}
