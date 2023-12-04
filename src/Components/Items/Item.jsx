const Item = (item) => {
  const items = item.shopItem;
  // console.log(shopItem);
  return (
    <div className="mb-8">
      <img className="w-56" src={items.image} alt="" />
      <p className="w-56 text-sm mt-2">{items.name}</p>
      <div className="w-20 flex">
        <p className="mr-1 text-gray-950">${items.new_price}</p>
        <p className="ml-1 text-sm font-medium mt-1 text-gray-600 line-through">
          ${items.old_price}
        </p>
      </div>
    </div>
  );
};

export default Item;
