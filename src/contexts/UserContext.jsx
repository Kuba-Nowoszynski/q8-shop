import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebaseUtils";
import createAction from "../utils/reducer/reducerUtils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const User_Action_Types = {
  setCurrentUser: "setCurrentUser",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case User_Action_Types.setCurrentUser:
      return { ...state, currentUser: action.payload };
    default:
      throw new Error(`Unhandled type ${action.type} in userReducer`);
  }
};

const initialState = { currentUser: null };

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, initialState);
  const setCurrentUser = (user) => {
    dispatch(createAction(User_Action_Types.setCurrentUser, user));
  };

  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) =>
      setCurrentUser(user)
    );

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
