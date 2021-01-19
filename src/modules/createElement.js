const createElement = function create(type, text, elementClass) {
  const element = document.createElement(type);

  if (text !== '') {
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }

  if (typeof elementClass !== 'undefined') {
    element.classList.toggle(elementClass);
  }
  return element;
};

export default createElement;
