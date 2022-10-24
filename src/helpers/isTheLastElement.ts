const isTheLastElement = <T>(elements: Array<T>, element: T) => {
  const lastElement = elements[elements.length - 1];
  return lastElement === element;
};

export default isTheLastElement;
