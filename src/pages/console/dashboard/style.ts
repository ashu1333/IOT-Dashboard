import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },

  icon: {
    marginRight: theme.spacing(2),
    color: "#000",
  },
  iconRight: {
    float: "right",
    color: "#000",
  },
  logo: {
    float: "right",
  },
  title: {
    flexGrow: 1,
    color: "#000",
  },
  imgFluid: {
    maxWidth: "100%",
    height: "auto",
  },
  subIcon: {
    maxWidth: "13%",
    float: "left",
    marginRight: "15px",
  },
  mainBg: {
    backgroundColor: "#000",
  },
  TreatmentTitle: {
    fontSize: "32px",
    color: "#43AAC5",
    fontWeight: "normal",
    textTransform: "uppercase",
  },

  TreatmentSubTitle: {
    fontSize: "26px",
    color: "#fff",
    fontWeight: "normal",
    clear: "both",
  },
  tSetting: {},
  tSupply: {},

  tTreatment: {},

  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  roundButton:{
    borderRadius:"50%",
    backgroundColor:"red",
    height:"60px",
    width:"40px",
    display:"inline-block",
    border:"6px solid #ccc",
    clear:'both',
    marginBottom:'10px',

  },
  roundButtonYellow:{
    borderRadius:"50%",
    backgroundColor:"yellow",
    height:"60px",
    width:"50px",
    display:"inline-block",
    border:"6px solid #ccc",
    clear:'both',
    marginBottom:'10px',

  },
  roundButtonGreen:{
    borderRadius:"50%",
    backgroundColor:"green",
    height:"60px",
    width:"50px",
    display:"inline-block",
    border:"6px solid #ccc",
    clear:'both',

  },
  roundButtonRed:{
    backgroundColor:"red",
    borderRadius:"90%",
    width:"10px",
    height:"55px",
    border:"5px solid grey"
  },
 
  
}));
export default useStyles;
