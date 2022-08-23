import { Grid, IconButton, Typography, Button, Tooltip } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SellIcon from "@mui/icons-material/Sell";
import React from "react";
import { menuHeader } from "../../../constants/menu";
import LinkRouter from "../../link-router";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Grid position={"sticky"} top={0} bgcolor={"#fff"} zIndex={100}>
      <Grid container columns={15} bgcolor={"black"}>
        <Grid
          item
          xs={4}
          pl={2}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton aria-label="delete">
            <CallIcon color="secondary" />
          </IconButton>
          <Typography component={"span"} color={"secondary"}>
            (+84) 326347291
          </Typography>
          <Typography component={"span"} color={"secondary"} ml={1}>
            88455438
          </Typography>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={3} pr={2} textAlign="right">
          <IconButton aria-label="delete">
            <FacebookIcon color="secondary" />
          </IconButton>
          <IconButton aria-label="delete">
            <TwitterIcon color="secondary" />
          </IconButton>
          <IconButton aria-label="delete">
            <SellIcon color="secondary" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container columns={15} boxShadow={3} py={2} alignItems="center">
        <Grid item xs={4} pl={3.5}>
          <Typography fontSize={20}>LOGO</Typography>
        </Grid>
        <Grid item xs={8}>
          {menuHeader.map((v, index) => {
            return (
              <Typography component={"span"} px={2} key={index}>
                <Tooltip title={v?.des || ""}>
                  <LinkRouter to={v.path}>
                    {v.text.toLocaleUpperCase()}
                  </LinkRouter>
                </Tooltip>
              </Typography>
            );
          })}
        </Grid>
        <Grid item xs={3} pr={2} textAlign="right">
          <Button variant="outlined">
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              Login
            </Link>
          </Button>

          <IconButton aria-label="delete">
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Header;
