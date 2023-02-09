/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';

function debounce(func, timeout = 300) {
  let timer;
  return (arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(arg);
    }, timeout);
  };
}

/**
 *
 * A React hook for debouncing react synthetic events.
 *
 * Returns the value and non-debounced event handler.
 *
 * @example
 * const [value, handleChange] = useDebouncedInput({
 *   ms: 200,
 *   init: initialValue,
 *   onChange: debouncedEvent => {
 *     // do your expensive function call here
 *   },
 * });
 *
 */
const useDebouncedInput = ({ ms = 200, init, onChange = () => {} }) => {
  const [input, setInput] = useState(init);

  useEffect(() => setInput(init), [init]);

  const debounceEvent = useCallback(debounce(onChange, ms), []);

  const handleChange = useCallback(
    (event) => {
      event.persist();
      const { name, value } = event.target;
      setInput((prev) => (typeof init === 'object' ? { ...prev, [name]: value } : value));
      debounceEvent(event);
    },
    [debounceEvent, init],
  );

  return [input, handleChange];
};

export default useDebouncedInput;
