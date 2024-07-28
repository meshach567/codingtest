// React component using refs to focus input

import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
