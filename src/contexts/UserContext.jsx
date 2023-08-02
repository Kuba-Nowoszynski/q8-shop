import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebaseUtils";

// Maybe it's better solution, but for now looks like not needed. I'll just use (null)
//
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) =>
      setCurrentUser(user)
    );

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
