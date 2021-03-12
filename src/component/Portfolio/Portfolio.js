import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
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

const useStyles = makeStyles((theme) => ({
  portfolio: {
    marginLeft: "17px",
    marginTop: "20px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.19)",
    paddingBottom: "25px",
  },
  root: {
    maxWidth: 345,
    minHeight: 300,
    maxHeight: 345,
  },
  media: {
    height: 200,
  },
}));

const tileData = [
  {
    id: 1,
    img: Messenger,
    title: "Real Time Messenger",
    author: "Biplab Acharya",
    url: "https://friendssms-6e074.web.app/",
    technology: "React, Firebase, Contex API",
  },
  {
    id: 2,
    img: Voiceapp,
    title: "Voice Controlled News app ",
    author: "Biplab Acharya",
    url: "https://news-app-voice-controlled.web.app/",
    technology: "React, Alan AI, Third party API",
  },
  {
    id: 3,
    img: Covid,
    title: "Covid-19 Tracker",
    author: "Biplab Acharya",
    url: "https://covid-19-tracker-49681.web.app/",
    technology: "React, Material UI, Third party API",
  },
  {
    id: 4,
    img: Youtube,
    title: "Youtube Clone",
    author: "Biplab Acharya",
    url: "https://clone-78340.web.app/",
    technology: "React, Material UI",
  },

  {
    id: 5,
    img: Discord,
    title: "Discord Clone",
    author: "Biplab Acharya",
    url: "https://discord-c0fc7.web.app/",
    technology: "React, Material UI, Redux, Firebase",
  },
  {
    id: 6,
    img: Amazon,
    title: "Amazon Clone",
    author: "Biplab Acharya",
    url: "https://clone-31223.web.app/",
    technology: "React, Material UI, Context API",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Container id="portfolio">
        <div className={classes.portfolio}>
          <Typography variant="h3" gutterBottom>
            Portfolio
          </Typography>
          <Grid container spacing={3}>
            {tileData.map((tile) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={tile.id}>
                <Card className={classes.root}>
                  <CardActionArea href={tile.url} target="_blank">
                    <CardMedia
                      className={classes.media}
                      image={tile.img}
                      title={tile.title}
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {tile.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <strong>Designed by :</strong>
                      {tile.author}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      component="p"
                    >
                      <strong>Technologies:</strong> {tile.technology}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
