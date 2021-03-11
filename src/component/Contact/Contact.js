import {
  Button,
  Container,
  makeStyles,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  contact: {
    marginLeft: "17px",
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  contactText: {
    marginRight: "15px",
    flex: 4,
  },
  contactForm: {
    flex: 6,
  },
  contactFormContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Container id="contact">
      <div className={classes.contact}>
        <div className={classes.contactText}>
          <Typography variant="h4" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2" component="p">
            Are you working on something great? I would love to help make it
            happen. Drop me a letter and start your project right now! Just do
            it.
          </Typography>
        </div>
        <div className={classes.contactForm}>
          <div className={classes.contactFormContent}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="Name"
                label="Name"
                name="name"
                autoComplete="name"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="email"
                type="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextareaAutosize
                style={{ outlineColor: "blue", width: "100%" }}
                placeholder="Message *"
                required
                rows={8}
              />

              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "5px", textTransform: "none" }}
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
