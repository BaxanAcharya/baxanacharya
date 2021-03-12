import {
  Container,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Messenger from "../../assets/img/messenger.png";
import Voiceapp from "../../assets/img/voiceapp.png";
import Youtube from "../../assets/img/youtube.png";
import Covid from "../../assets/img/covid.png";
import Discord from "../../assets/img/discord.png";
import Amazon from "../../assets/img/amazon.png";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  portfolio: {
    marginLeft: "17px",
    marginTop: "20px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.19)",
    paddingBottom: "25px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.white,
    fontWeight: 500,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const tileData = [
  {
    img: Messenger,
    title: "Real Time Messenger (React)",
    author: "Biplab Acharya",
    url: "https://friendssms-6e074.web.app/",
  },
  {
    img: Voiceapp,
    title: "Voice Controlled News app (React)",
    author: "Biplab Acharya",
    url: "https://news-app-voice-controlled.web.app/",
  },
  {
    img: Covid,
    title: "Covid-19 Tracker (React)",
    author: "Biplab Acharya",
    url: "https://covid-19-tracker-49681.web.app/",
  },
  {
    img: Youtube,
    title: "Youtube Clone (React)",
    author: "Biplab Acharya",
    url: "https://clone-78340.web.app/",
  },

  {
    img: Discord,
    title: "Discord Clone (React)",
    author: "Biplab Acharya",
    url: "https://discord-c0fc7.web.app/",
  },
  {
    img: Amazon,
    title: "Amazon Clone (React)",
    author: "Biplab Acharya",
    url: "https://clone-31223.web.app/",
  },
];

const MyWork = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <a href={tile.url} target="_blank" rel="noreferrer">
              <img src={tile.img} alt={tile.title} />
            </a>

            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <MoreVertIcon
                    className={classes.title}
                    style={{ color: "white" }}
                  />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Container id="portfolio">
      <div className={classes.portfolio}>
        <Typography variant="h3" gutterBottom>
          Portfolio
        </Typography>
        <MyWork />
      </div>
    </Container>
  );
};

export default Portfolio;
