interface ShoppingItemProps {
  id?: string;
  name?: string;
  price?: number;
}

export default function ShoppingItem(props: ShoppingItemProps) {
  return (
    <div className="shopping-item">
      <h3 className="shopping-item__title">{props.name}</h3>
      <div className="shopping-item__price">${props.price}</div>
    </div>
  );
}
