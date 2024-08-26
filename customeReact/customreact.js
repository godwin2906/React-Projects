function customRender(reactElement, container) {
  const domElemnt = document.createElement(reactElement.type);
  domElemnt.innerHTML = reactElement.children;
  for (prop in reactElement.props) {
    domElemnt.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElemnt);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer)
