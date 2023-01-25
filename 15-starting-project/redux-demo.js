const redux = require("redux");

const counterReducer = (oldState = { counter: 0 }, action) => {
  if (action.type === "ADD") {
    return { counter: oldState.counter + 1 };
  }
  if (action.type === "SUB") {
    return { counter: oldState.counter - 1 };
  }
  return oldState;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(counterSubscriber);

const add = () => {
  store.dispatch({ type: "ADD" });
};
const sub = () => {
  store.dispatch({ type: "SUB" });
};

add();
add();
sub();
