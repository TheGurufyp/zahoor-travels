import { createContext, useState, useEffect } from "react";
export const userContext = createContext();
import { useCookies } from "react-cookie";

export const UserState = (props) => {
  const [cookies, setCookie] = useCookies(["token"]);

  const [user, setuser] = useState();
  const [token, settoken] = useState("");

  useEffect(() => {
    settoken(cookies.token);
    setuser({ username: cookies.username });
  }, []);
  //   console.log(cookies);
  return (
    <userContext.Provider value={{ user, setuser, token, settoken }}>
      {props.children}
    </userContext.Provider>
  );
};
