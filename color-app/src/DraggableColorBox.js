import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
const styles = {
    root: {
        width: "25%",
        height:"25%",
        margin: "0 0",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover svg": {
            color: "white",
            transform:"scale(1.5)"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "10px",
        padding: "10px",
        color: "rgba(0,0,0,0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "0.2s ease-in-out"
    }
}

function DraggableColorBox(props) {
    const { classes } = props;
    return (
        <div className={classes.root} style={{ backgroundColor: props.color }}>
            <div className={classes.boxContent}>
                <span>{props.name}</span>
                <span><DeleteIcon className={classes.deleteIcon}/></span>
            </div>
                        
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);