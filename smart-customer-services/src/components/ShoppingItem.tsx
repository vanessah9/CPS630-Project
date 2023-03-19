interface ShoppingItemProps {
  id?: string;
  name?: string;
  price?: number;
}

export default function ShoppingItem(props: ShoppingItemProps) {
  return (
    <div>
      <h3>{props.name}</h3>
      <div>${props.price}</div>
    </div>
  );
}
