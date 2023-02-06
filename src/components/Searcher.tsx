import React, { useState } from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";

interface Props {
  setInputUser: (user: string) => void;
  notFound: boolean;
}
const Searcher: React.FC<Props> = ({ setInputUser, notFound }) => {
  const [value, setValue] = useState("");

  const onSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    setInputUser(value);
  };
  return (
    <Stack
      direction="column"
      sx={{
        marginTop: "30px",
        width: "100%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Github User"
        variant="outlined"
        placeholder="ingrese un nombre de usuario..."
        onChange={onSearchValueChange}
        sx={{
          width: "90%",
        }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSubmit}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      ></TextField>
      {notFound && (
        <Typography sx={{ color: "red" }}>
          No se encontro el usuario...
        </Typography>
      )}
    </Stack>
  );
};

export default Searcher;
