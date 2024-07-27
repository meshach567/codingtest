import Proptypes from 'prop-types';


const ItemList = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

ItemList.propTypes = {
    items: Proptypes.array
}

export default ItemList;

// Example usage:
// <ItemList items={['Item 1', 'Item 2', 'Item 3']} />
