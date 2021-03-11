import {
  ClickAwayListener,
  Container,
  Divider,
  Grow,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Popper,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import Logo from "../../assets/img/Logo.png";
import LogoBlack from "../../assets/img/LogoBlack.png";
import MenuIcon from "@material-ui/icons/Menu";

const styles = (theme) => ({
  header: {
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.19)",
    position: "sticky",
    top: 0,
    zIndex: 100,

    width: "100%",
  },

  headerBackgroundWhite: {
    background: "white",
  },
  headerBackgroundBlack: {
    background: "black",
    color: "white",
  },
  headerContainer: {
    display: "flex",
    marginTop: "10px",
    height: "60px",
    alighItems: "center",
  },

  headerContainerGap: {
    flex: 1,
  },
  headerContainerLink: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  headerContainerSpan: {
    cursor: "pointer",
    marginLeft: "10px",
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: "#4466f9",
      textDecoration: "underline",
    },
  },
  headerImg: {
    height: 40,
    width: 200,
    marginTop: "13px",
    objectFit: "contain",
  },
  sectionMobile: {
    display: "inline",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  btntransition: {
    backgroundSize: "200%",
    transition: "all ease 0.5s",
    cursor: "pointer",
    background: "linear-gradient(to left, #ffff 50%, #2196F3 50%) right",
    "&:hover": {
      backgroundPosition: "left",
      transform: `translateX(100 %)`,
    },
  },
  paper: {
    marginTop: "13px",
    backgroundColor: "#ffff",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  paperroot: {
    width: "200px",
    maxWidth: 200,
    borderRadius: "10px",
    backgroundColor: theme.palette.background.paper,
  },
});
class Header extends Component {
  state = { open: false, scrolled: false };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        this.setState({
          scrolled: true,
        });
      } else {
        this.setState({
          scrolled: false,
        });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  handleToggle = () => {
    this.setState((state) => ({ open: !state.open }));
  };
  handleClose = (event) => {
    if (this.mobileMoreAnchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };

  isMobileMenuOpen = () => {
    return Boolean(this.mobileMoreAnchorEl);
  };

  renderMobileView = (classes) => {
    return (
      <Popper
        open={this.state.open}
        anchorEl={this.mobileMoreAnchorEl}
        transition
        disablePortal={false}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={this.handleClose}>
                <div className={classes.paperroot}>
                  <List component="nav" aria-label="nav bar items">
                    <ListItem button className={classes.btntransition}>
                      <ListItemText
                        primary="Intro"
                        onClick={this.handleClose}
                      />
                    </ListItem>

                    <Divider />
                    <ListItem button className={classes.btntransition}>
                      <ListItemText
                        primary="Skills"
                        onClick={this.handleClose}
                      />
                    </ListItem>
                    <Divider />
                    <Divider />
                    <ListItem button className={classes.btntransition}>
                      <ListItemText
                        primary="Experience"
                        onClick={this.handleClose}
                      />
                    </ListItem>
                    <Divider />
                    <ListItem button className={classes.btntransition}>
                      <ListItemText
                        primary="Education"
                        onClick={this.handleClose}
                      />
                    </ListItem>
                    <Divider />
                    <ListItem button className={classes.btntransition}>
                      <ListItemText
                        primary="Portfolio"
                        onClick={this.handleClose}
                      />
                    </ListItem>
                    <Divider />

                    <ListItem button className={classes.btntransition}>
                      <ListItemText
                        primary="Contact Me"
                        onClick={this.handleClose}
                      />
                    </ListItem>
                  </List>
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <header
          className={`${classes.header} ${
            this.state.scrolled
              ? classes.headerBackgroundBlack
              : classes.headerBackgroundWhite
          }`}
        >
          <Container>
            <div className={classes.headerContainer}>
              <div className>
                <img
                  src={`${this.state.scrolled ? LogoBlack : Logo}`}
                  className={classes.headerImg}
                  alt="Web Logo"
                />
              </div>
              <div className={classes.headerContainerGap} />
              <div className={classes.headerContainerLink}>
                <a href="#intro" className={classes.headerContainerSpan}>
                  <span> Intro</span>
                </a>
                <a href="#skills" className={classes.headerContainerSpan}>
                  <span>Skills</span>
                </a>
                <a
                  href="#experienceEducation"
                  className={classes.headerContainerSpan}
                >
                  <span>Expericence</span>
                </a>

                <a
                  href="#experienceEducation"
                  className={classes.headerContainerSpan}
                >
                  <span>Education</span>
                </a>

                <a href="#portfolio" className={classes.headerContainerSpan}>
                  {" "}
                  <span>Portfolio</span>
                </a>
                <a href="#contact" className={classes.headerContainerSpan}>
                  <span>Contact Me</span>
                </a>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  buttonRef={(node) => {
                    this.mobileMoreAnchorEl = node;
                  }}
                  className={classes.mobileViewMenuIconButton}
                  aria-owns={this.open ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  onClick={() => {
                    this.setState({ open: !this.state.open });
                  }}
                >
                  <MenuIcon
                    style={{
                      color: `${this.state.scrolled ? "white" : "blue"}`,
                    }}
                  />
                </IconButton>
              </div>
            </div>
          </Container>
        </header>
        {this.renderMobileView(classes)}
      </>
    );
  }
}

export default withStyles(styles)(Header);
