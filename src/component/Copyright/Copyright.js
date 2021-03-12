import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <div id="contact">
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        style={{ marginTop: "25px" }}
      >
        {"Copyright © "}
        <Link color="inherit" href="http://localhost:3000/">
          Biplab Acharya Portfolio
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}

export default Copyright;
