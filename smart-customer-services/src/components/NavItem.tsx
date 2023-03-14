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
        <a className="nav-link" aria-current="page" href={link}>
          {text}
        </a>
      </li>
    );
  } else {
    let itemList;
    if (dropdown_items) {
      itemList = dropdown_items.map((item, index) => {
        return (
          <>
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
          </>
        );
      });
    }
    return (
      <li className="nav-item dropdown-center">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {text}
        </a>
        <ul className="dropdown-menu dropdown-menu-end">{itemList}</ul>
      </li>
    );
  }
}
