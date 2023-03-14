interface InputProps {
  dropdown_items: string[][];
  icon: string;
}

export default function NavButton({ dropdown_items, icon }: InputProps) {
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
