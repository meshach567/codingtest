// React component using refs to focus input

import { useEffect, useRef, useState } from "react";

const useDebounce = (text, delay) => {
  const [debounce, setDebounce] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text)
    }, delay)

    return () => {
      clearTimeout(timer);
    }
  }, [text, delay])

  return debounce;
}

const FocusInput = () => {
  const [text, setText] = useState('');
  const debounceText = useDebounce(text, 5000);
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} onChange={(e) => setText(e.target.value)} type={'text'} value={text} placeholder="Focus me" />
      <p>debounced value: {debounceText}</p>
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
