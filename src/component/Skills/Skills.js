import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  skillsContainer: {
    marginTop: "33px",
  },
  skillWrapper: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  skills: {
    marginLeft: "17px",
    width: "50%",
    marginTop: "20px",
    height: "135px",
    paddingBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
    },
  },
  skillsBorder: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.19)",
  },
}));

const SkillsContainer = ({ title, description, isBig }) => {
  return (
    <>
      <Typography variant={isBig ? "h4" : "h5"} gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" component="p">
        {description}
      </Typography>
    </>
  );
};

const skillsDesc =
  " I am inspired by creating great work with people who are as passionate as I am about building something awesome.";

const webDesc =
  "Javascript, JAVA, Node.JS techonlogy and the framework related to it.";

const uiuxDesc =
  "PhotoShop, Adobe XD, Figma Illustrator, Sketch, Axure, Prototyping, Wireframing, User Research. ";

const frontendDesc =
  "HTML, CSS, Bootstrap, Jquery, AJAX, React, Native, WordPress.";

const consultingDesc = "Google Analytics, Ranking and Speed Optimization.";

const androidDesc =
  "Android App Development (Java and React-native) with Sensors, Google Map , Notification, Permissions, Security, Responsive and many more. ";

const iotDesc =
  "Automation is everywhere and it provides Efficency, Performance and Effectiveness and IOT (Internet Of Things) is a thing that provide all of IT and we provide these Solution and Service.";

const desktopDesc =
  "Service like Desktop App is provided according to client Requirement, Responsive, Good, looking Desktop App that fits the requirement";
const dbDesc =
  "Relation databases like MySQL, SQL Server and No Sql databases like MongoDb, Firebase.";
const Skills = () => {
  const classes = useStyles();
  return (
    <Container className={classes.skillsContainer} id="skills">
      <div className={classes.skillWrapper}>
        <div className={classes.skills}>
          <SkillsContainer title={"Skills"} isBig description={skillsDesc} />
        </div>
        <div className={`${classes.skills} ${classes.skillsBorder}`}>
          <SkillsContainer title={"Web Development"} description={webDesc} />
        </div>
        <div className={`${classes.skills} ${classes.skillsBorder}`}>
          <SkillsContainer title={"UI/UX Design"} description={uiuxDesc} />
        </div>
      </div>
      <div className={classes.skillWrapper}>
        <div className={`${classes.skills} ${classes.skillsBorder}`}>
          <SkillsContainer
            title={"Frontend Development"}
            description={frontendDesc}
          />
        </div>
        <div className={`${classes.skills} ${classes.skillsBorder}`}>
          <SkillsContainer
            title={"Consulting & SEO Audit "}
            description={consultingDesc}
          />
        </div>
        <div className={`${classes.skills} ${classes.skillsBorder}`}>
          <SkillsContainer
            title={"Android Development "}
            description={androidDesc}
          />
        </div>
      </div>
      <div className={classes.skillWrapper}>
        <div className={`${classes.skills} ${classes.skillsBorder}`}>
          <SkillsContainer
            title={"Internet Of Things (IOT)"}
            description={iotDesc}
          />
        </div>
        <div className={`${classes.skills} ${classes.skillsBorder}`}>
          <SkillsContainer
            title={"Desktop App Development "}
            description={desktopDesc}
          />
        </div>
        <div className={`${classes.skills} ${classes.skillsBorder}`}>
          <SkillsContainer
            title={"Database Development "}
            description={dbDesc}
          />
        </div>
      </div>
    </Container>
  );
};

export default Skills;
