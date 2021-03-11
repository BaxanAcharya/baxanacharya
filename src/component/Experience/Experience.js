import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  experienceContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    marginLeft: "17px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.19)",
    paddingBottom: "25px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  experience: {
    flex: 6,
  },
  experienceJava: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.19)",
    paddingBottom: "10px",
  },
  experienceInfo: {
    flex: 4,
    marginRight: "15px",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "10px",
    },
  },
  experienceFreelancer: {
    marginTop: "10px",
  },
}));

const Experience = ({
  leftTitle,
  leftDescription,
  rightTopTitle,
  rightTopBadge,
  rightTopYear,
  rightTopDescription,
  rightBottomTitle,
  rightBottomBadge,
  rightBottomYear,
  showLink,
}) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.experienceContainer} id="experienceEducation">
        <div className={classes.experienceInfo}>
          <Typography variant="h4" gutterBottom>
            {leftTitle}
          </Typography>
          <Typography variant="body2" component="p">
            {leftDescription}
          </Typography>
        </div>
        <div className={classes.experience}>
          <div className={classes.experienceJava}>
            <Typography variant="h6" gutterBottom>
              {rightTopTitle}
              {"   "}
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "#777F7F",
                }}
              >
                {rightTopBadge}
              </label>
            </Typography>
            <p
              style={{
                fontSize: "15px",
                color: "#777F7F",
              }}
            >
              {rightTopYear}
            </p>
            <Typography variant="body2" component="p">
              <i>{rightTopDescription}</i>
            </Typography>
          </div>

          <div className={classes.experienceFreelancer}>
            <Typography variant="h6" gutterBottom>
              {rightBottomTitle}{" "}
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "#777F7F",
                }}
              >
                {rightBottomBadge}
              </label>
            </Typography>
            <p
              style={{
                fontSize: "15px",
                color: "#777F7F",
              }}
            >
              {rightBottomYear}
            </p>
            {showLink && (
              <Typography variant="body2" component="p">
                <i>
                  Upwork:{" "}
                  <a
                    href="https://www.upwork.com/freelancers/~01f13b6ee86383b716"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    Visit Profile
                  </a>
                </i>
              </Typography>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
