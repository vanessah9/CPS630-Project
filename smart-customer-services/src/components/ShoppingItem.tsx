interface ShoppingItemProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
}

export default function ShoppingItem(props: ShoppingItemProps) {
  return (
    <div className="shopping-item">
      <img id={props.id} src={props.image} className="shopping-item__image" />
      <h3 className="shopping-item__title">{props.name}</h3>
      <div className="shopping-item__price">${props.price}</div>
    </div>
  );
}
