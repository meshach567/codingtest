// React component with PropTypes validation

import PropTypes from 'prop-types';

const UserCard = ({ name, age }) => (
  <div>
    <h2>{name}</h2>
    <p>Age: {age}</p>
  </div>
);

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default UserCard;

// Example usage:
// <UserCard name="John Doe" age={30} />
