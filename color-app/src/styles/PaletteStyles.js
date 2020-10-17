import sizes from './Sizes';
export default {
    goBack: {
        width: "19.7%",
        height: "50%",
        margin: "0 0",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        backgroundColor: "black",
        "& a":{
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            background: "rgba(255, 255, 255, 0.3)",
            color:"white",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            border: "none",
            textDecoration: "none",
            opacity:"1"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height:"33.3333%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height:"20%"
        },
        [sizes.down("xs")]: {
            width: "100%",
            height:"10%"
        },
        
    },
    palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    colors: {
        height: "88%"
    },
}