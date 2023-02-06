import React, { useState, useEffect } from "react";
import { Container } from "@mui/system";
import Searcher from "./components/Searcher";
import { getUser } from "./services/user";
import UserCard from "./containers/UserCard";

function App() {
  const [inputUser, setInputUser] = useState("frankbenitez98");
  const [userState, setUserState] = useState({});
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const userResponse = await getUser(inputUser);
      if (userResponse.message === "Not Found") {
        setNotFound(true);
        console.log("NOT FOUND");
      } else {
        setNotFound(false);
        setUserState(userResponse);
      }
    }
    fetchUser();
  }, [inputUser]);
  console.log(userState);
  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "85vw",
        borderRadius: "16px",
        marginTop: "40px",
        paddingBottom: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher setInputUser={setInputUser} notFound={notFound} />
      <UserCard userState={userState} />
    </Container>
  );
}

export default App;
