import React, { createContext, useState } from "react";

export const UserProvider = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [db, setDb] = useState([{ email: "gabriel", password: "senha" }]);

  function addUser({ email, password }) {
    setDb([...db, { email, password }]);
  }

  return (
    <UserProvider.Provider value={{ user, setUser, db, addUser }}>
      {children}
    </UserProvider.Provider>
  );
};

export default UserContext;
