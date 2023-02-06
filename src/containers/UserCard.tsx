import CardMedia from "@mui/material/CardMedia";
import { Grid, Paper, Stack } from "@mui/material";
import React from "react";
import { UserData } from "../services/user";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";
import BusinessIcon from "@mui/icons-material/Business";
import TwitterIcon from "@mui/icons-material/Twitter";
interface Props {
  userState: UserData;
}

const UserCard: React.FC<Props> = ({ userState }) => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        marginTop: "20px",
      }}
    >
      <Grid
        item
        sm={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CardMedia
          sx={{
            width: "75%",
            borderRadius: "150px",
            border: "6px solid #666",
          }}
          component="img"
          alt="GitHub User"
          image={userState.avatar_url}
        />
      </Grid>
      <Grid item sm={9}>
        <Stack direction="column" spacing={1}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{ justifyContent: "space-between" }}
          >
            <Typography sx={{ flexWrap: "nowrap" }} variant="h4">
              {userState.name}
            </Typography>
            <Typography variant="h6">
              {userState.created_at &&
                new Date(userState.created_at).toLocaleDateString("en-us")}
            </Typography>
          </Stack>
          <Typography variant="caption">{"@" + userState.login}</Typography>
          <Stack direction="column" spacing={1}>
            {userState.bio ? (
              <Typography>{userState.bio}</Typography>
            ) : (
              <Typography>"lorem ipsum dolor sit amet"</Typography>
            )}
            <Paper elevation={4}>
              <Stack
                direction="row"
                sx={{ justifyContent: "space-between", margin: "20px" }}
              >
                <Stack direction="column">
                  <Typography variant="h6">Repos:</Typography>
                  <Typography>{userState.public_repos}</Typography>
                </Stack>
                <Stack direction="column">
                  <Typography variant="h6">Followers:</Typography>
                  <Typography>{userState.followers}</Typography>
                </Stack>
                <Stack direction="column">
                  <Typography variant="h6">Following:</Typography>
                  <Typography>{userState.following}</Typography>
                </Stack>
              </Stack>
            </Paper>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                  <LocationOnIcon />
                  <Typography>{userState.location}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                  <TwitterIcon />
                  {userState.twitter_username ? (
                    <Typography>{userState.twitter_username}</Typography>
                  ) : (
                    <Typography>Not Available</Typography>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                  <LinkIcon />
                  {userState.blog ? (
                    <a target="_blank" href={userState.blog} rel="noreferrer">
                      <Typography
                        sx={{
                          overflowWrap: "anywhere",
                        }}
                      >
                        {userState.blog}
                      </Typography>
                    </a>
                  ) : (
                    <Typography>Not Available</Typography>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                  <BusinessIcon />
                  {userState.company ? (
                    <Typography>{userState.company}</Typography>
                  ) : (
                    <Typography>Not Available</Typography>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserCard;
