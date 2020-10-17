import sizes from './Sizes';
import bg from './bg.svg';
export default {
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        /* background by SVGBackgrounds.com */
        backgroundColor: "#08444e",
        backgroundImage: `url(${bg})`,
        overflow: "scroll"    
    },
    header: {
        fontSize: "2rem"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width:"80%"
        },
        [sizes.down("xs")]: {
            width:"75%"
        },

    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems:"center",
        color: "white",
        "& a": {
            color:"white"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2,100%)",
            width:"50%"
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1,100%)",
            width: "100%",
            gridGap: "1.5rem",
            
        },
    }
};