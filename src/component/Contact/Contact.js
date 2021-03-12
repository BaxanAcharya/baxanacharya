import {
  Button,
  CircularProgress,
  Container,
  makeStyles,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import emailjs from "emailjs-com";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill the all fields");
    } else {
      setLoading(true);
      emailjs
        .sendForm(
          "service_1dye66h",
          "template_xgx4qj2",
          e.target,
          "user_t02I6CK3Q9OObDcXivSpP"
        )
        .then(
          (result) => {
            alert("Email send Successfully");
            setEmail("");
            setName("");
            setMessage("");
            setLoading(false);
            console.log(result.text);
          },
          (error) => {
            alert(error.text);
            setLoading(false);
            console.log(error.text);
          }
        );
    }
  };
  return (
    <Container>
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
              {loading && <CircularProgress />}
              <form className="contact_form_class" onSubmit={sendEmail}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  id="Name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextareaAutosize
                  style={{ outlineColor: "blue", width: "100%" }}
                  name="message"
                  placeholder="Message *"
                  required
                  rows={8}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "5px", textTransform: "none" }}
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
