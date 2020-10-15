import React from 'react';
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
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

const DraggableColorBox = SortableElement((props) => {
    const { classes, handleClick, name, color } = props;
    return (
        <div className={classes.root} style={{ backgroundColor: color }}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <span><DeleteIcon className={classes.deleteIcon} onClick={handleClick}/></span>
            </div>                
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox);
