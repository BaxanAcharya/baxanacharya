import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Messenger from "../../assets/img/messenger.png";

const useStyles = makeStyles((theme) => ({
  portfolio: {
    marginLeft: "17px",
    marginTop: "20px",
  },
  root: {
    maxWidth: 345,
    marginLeft: 25,
  },
  media: {
    height: 140,
  },
}));

const MyWork = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Messenger}
          title="Real Time Messenger"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.portfolio}>
        <Typography variant="h3" gutterBottom>
          Portfolio
        </Typography>
        <div style={{ display: "flex" }}>
          <MyWork />
          <MyWork />
          <MyWork />
          <MyWork />
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
