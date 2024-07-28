// React component using React.memo

import { memo } from "react";


const ExpensiveComponent = memo(({ data }) => {
  console.log('ExpensiveComponent rendered');
  return <div>Data: {data}</div>;
});

export default ExpensiveComponent;

// Example usage:
// <ExpensiveComponent data="Some data" />
