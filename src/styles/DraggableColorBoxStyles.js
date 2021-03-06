import sizes from './Sizes';
import chroma from 'chroma-js';

const styles = {
    root: {
        width: "20%",
        height:"24.7%",
        margin: "0 0",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover svg": {
            color: "white",
            transform:"scale(1.5)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height:"20%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height:"10%"
        },
        [sizes.down("sm")]: {
            width: "99%",
            height:"4.8%"
        },

    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "10px",
        padding: "10px",
        color: props => chroma(props.color).luminance() <= 0.08 ? "white" : "rgba(0,0,0,0.7)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [sizes.down("sm")]: {
            padding: "0px",
            bottom: "0px",
        },
        [sizes.down("xs")]: {
            padding: "0px",
            bottom: "0px",
        },
    },
    deleteIcon: {
        transition: "0.2s ease-in-out"
    }
}

export default styles;