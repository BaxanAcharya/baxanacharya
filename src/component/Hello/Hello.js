import {
  Button,
  Container,
  Link,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";

import React from "react";
import ProfileImage from "../../assets/img/Profile.png";
import Me from "../../assets/img/Me.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

const useStyles = makeStyles((theme) => ({
  helloContainer: {
    display: "flex",
    marginTop: "40px",
    paddingBottom: "13px",
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.19)",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },

  helloContainerSection: {
    flex: 5,
  },
  root: {
    flexGrow: 1,
  },
  myImg: {
    width: "100%",
    height: "auto",
  },
  description: {
    paddingTop: "24px",
    paddingRight: "19px",
    display: "flex",
  },
  social: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  socialIcon: {
    "&:hover": {
      color: "red",
    },
  },
  buttonContact: {
    background: "#583A8B",
    color: "white",
    textTransform: "none",
    "&:hover": {
      background: "#583A8B",
      color: "white",
    },
  },
  buttonDownload: {
    background: "blue",
    color: "white",
    marginLeft: "41px",
    textTransform: "none",
    textDecoration: "none",
    "&:hover": {
      background: "blue",
      color: "white",
    },
  },
  descriptionGap: {
    marginTop: "35px",
  },
}));

const Hello = () => {
  const classes = useStyles();
  return (
    <Container className={classes.helloContainer}>
      <div className={classes.helloContainerSection}>
        <div>
          <img
            src={ProfileImage}
            alt="Biplab Acharya"
            className={classes.myImg}
          />
          <div>
            <div className={classes.description}>
              <Typography variant="body2" component="p">
                I'm a <strong>Full-Stack Software Developer</strong> and I have
                created many projects . My expertise is to analyse, design,
                implement, test, deploy and maintain Websites, Apps, Mockups and
                many Former. I have completed my bachelor degree in{" "}
                <strong>Bsc. Hons. Computing</strong> from Coventry University
                (Softwarica College of IT and E-Commerce). I am a young
                Enterpreneur and Software Developer with Researcher. I am
                passionate to software development field. In addtion to that, I
                love to watch movies and series.
              </Typography>
            </div>
          </div>
          <div className={classes.description}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <strong>Phone</strong>
              <strong className={classes.descriptionGap}>Email</strong>
              <strong className={classes.descriptionGap}>Address</strong>
              <strong className={classes.descriptionGap}>Social</strong>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "5%",
                  justifyContent: "space-between",
                }}
              >
                <label>+9779812915302</label>
                <label className={classes.descriptionGap}>
                  baxanacharya@gmail.com
                </label>
                <label className={classes.descriptionGap}>
                  Nepal, Kathmandu, Sifal
                </label>
                <div className={`${classes.social} ${classes.descriptionGap}`}>
                  <Tooltip title="Facebook">
                    <a
                      href="https://www.facebook.com/biplab.acharya.142"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FacebookIcon
                        fontSize="small"
                        className={classes.socialIcon}
                      />
                    </a>
                  </Tooltip>
                  <Tooltip title="Twitter">
                    <a
                      href="https://twitter.com/baxanacharya"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TwitterIcon
                        fontSize="small"
                        className={classes.socialIcon}
                      />
                    </a>
                  </Tooltip>
                  <Tooltip title="Linkedin">
                    <a
                      href="https://www.linkedin.com/in/biplab-acharya-3417a5146/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon
                        fontSize="small"
                        className={classes.socialIcon}
                      />
                    </a>
                  </Tooltip>
                  <Tooltip title="Instagram">
                    <a
                      href="https://www.instagram.com/biplavacharya152/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon
                        fontSize="small"
                        className={classes.socialIcon}
                      />
                    </a>
                  </Tooltip>
                  <Tooltip title="Upwork">
                    <a
                      href="https://www.upwork.com/freelancers/~01f13b6ee86383b716"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GroupWorkIcon
                        fontSize="small"
                        className={classes.socialIcon}
                      />
                    </a>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.description}></div>
          <div className={classes.description}>
            <Button
              size="large"
              variant="contained"
              className={classes.buttonContact}
              component={Link}
              href="#contact"
            >
              Contact Me
            </Button>
            <Button
              size="large"
              variant="contained"
              className={classes.buttonDownload}
              component={Link}
              href="https://raw.githubusercontent.com/BaxanAcharya/baxanacharya/082fc802439b7281b7c00c77aa93465da24dfd9e/src/assets/pdf/Biplab-Resume.pdf"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.helloContainerSection}>
        <img src={Me} className={classes.myImg} alt="Biplab Acharya" />
      </div>
    </Container>
  );
};

export default Hello;
