import React from 'react';

export default function createStore(reducer, initialState = {}) {
  const StoreContext = React.createContext();
  const DispatchContext = React.createContext();

  function StoreProvider({ children }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
      <DispatchContext.Provider value={dispatch}>
        <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
      </DispatchContext.Provider>
    );
  }

  function useStore() {
    return React.useContext(StoreContext);
  }

  function useDispatch() {
    return React.useContext(DispatchContext);
  }

  return [StoreProvider, useStore, useDispatch];
}
