import React, { Component } from 'react';
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import PaletteMetaForm from './PaletteMetaForm';

const drawerWidth = 400;

const styles = theme => ({
    root: {
      display:"flex"  
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        height:"64px"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20
    },
    hide: {
        display: "none"
    },
    navBtns: {
        marginRight: "1rem",
        "& a": {
            textDecoration :"none"
        } 
    },
    button: {
        margin: "0 0.5rem",
    },  
});


class PaletteFormNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPaletteName: "",
            formShowing:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }

    hideForm() {
        this.setState({ formShowing: false });
    }

    showForm() {
        this.setState({ formShowing: true });
    }

    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        });
    }
    render() {
        const { classes, open, palettes, handleSubmit } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position='fixed'
                    color='default'
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open
                    })}
                >
                <Toolbar disableGutters={!open}>
                    <IconButton
                        color='inherit'
                        aria-label='Open drawer'
                        onClick={this.props.handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' color='inherit' noWrap>
                            Create A Palette
                    </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        
                        <Link to="/"><Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            >Go back
                            </Button>
                        </Link>
                        <Button className={classes.button} variant="contained" color="primary" onClick={this.showForm}>
                            Save
                        </Button>
                    </div>
                </AppBar>
                {this.state.formShowing &&
                    (<PaletteMetaForm
                        hideForm={this.hideForm}
                        palettes={palettes}
                        handleSubmit={handleSubmit}
                    />)
                }
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);