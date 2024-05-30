// ---- Library --- //
export const React = {
  createElement: async (tag, properties, ...children) => {
    if (typeof tag === 'function') {
      return await tag(properties, ...children)
    }

    return {
      tag,
      props: properties,
      children
    };
  }
};

// ---- Library --- //
const myAppState = [];
let myAppStateCursor = 0;

export const useState = (initialState?) => {
  // get the cursor for this useState
  const stateCursor = myAppStateCursor;
  // Check before setting AppState to initialState (reRender)
  myAppState[stateCursor] = myAppState[stateCursor] || initialState;
  console.log(
    `useState is initialized at cursor ${stateCursor} with value:`,
    myAppState[stateCursor]
  );
  const setState = (newState) => {
    console.log(
      `setState is called at cursor ${stateCursor} with newState value:`,
      newState
    );
    myAppState[stateCursor] = newState;
    // Render the UI fresh given state has changed.
    reRender();
  };
  // prepare the cursor for the next state.
  myAppStateCursor++;
  console.log('stateDump', myAppState);
  return [myAppState[stateCursor], setState];
};

// ---- Library --- //
export const renderMethod = async (element, container) => {
  if (element instanceof Promise) return await renderMethod(await element, container)

  let domElement_;
  // 0. Check the type of el
  //    if string we need to handle it like text node.
  if (typeof element === 'string' || typeof element === 'number') {
    // create an actual Text Node
    domElement_ = document.createTextNode(String(element));
    container.append(domElement_);
    // No children for text node so we return.
    return;
  }
  if (Array.isArray(element)) {
    for (const node of element) await renderMethod(node, container);
    return;
  }
  // 1. First create the document node corresponding el
  domElement_ = document.createElement(element.tag);
  // 2. Set the props on domEl
  let elementProperties = element.props
    ? Object.keys(element.props)
    : undefined;
  if (elementProperties && elementProperties.length > 0) {
    for (const property of elementProperties)
      domElement_[property] = element.props[property];
  }
  // 3. Handle creating the Children.
  if (element.children && element.children.length > 0) {
    // When child is rendered, the container will be
    // the domEl we created here.
    for (const node of element.children) await renderMethod(node, domElement_);
  }
  // 4. append the DOM node to the container.
  container.append(domElement_);
};

let domElement;
let rootElement;

export const render = (element, container) => {
  rootElement = element;
  domElement = container;
  renderMethod(React.createElement(rootElement, {}), domElement).then(() => {
    console.log("rendered successfully")
  })
};

const reRender = () => {
  console.log('reRender-ing :)');
  // reset/clean whatever is rendered already
  domElement.innerHTML = '';
  // Reset the global state cursor
  myAppStateCursor = 0;
  // then render Fresh
  renderMethod(React.createElement(rootElement, {}), domElement).then(() => {
    console.log("rendered successfully");
  });
};
