import { makeStyles } from '@material-ui/core/styles';




export const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.5s",
    height: "400px",
    cursor: "pointer",
    borderRadius: "5px",
    '&:hover': {
      boxShadow: "0 4px 100px 0 rgba(0,0,0,0.8)",
    }
  },divNetWork:{
    width: "100%", 
    justifyContent: "space-between", 
    textAlign: "right" 
  },
  divNetWorkHidden:{
    display: "none"
  },
  container: {
    borderRadius: "5px 5px 0 0",
    height: "100%",
    width: "100%"
  },
  image: {
    borderRadius: "5px 5px 0 0",
    height: "100%",
    width: "100%"
  },
  containerText: {
    padding: "2px 8px"
  },
  fliper: {
    position: "relative",
    width: "100%",
    height: "300px",
    transition: "0.8s",
    transformStyle: "preserve-3d",
  }, 
  fliperRotation: {
    position: "relative",
    width: "100%",
    height: "300px",
    transition: "0.8s",
    transformStyle: "preserve-3d",
    transform: 'rotateY(180deg)'
  },
  fliperConainer: {
    width: "100%",
    height: "80%",
    perspective: "1000px",
  },
  front: {
    position: "absolute",
    width: "100%",
    height: "85%",
    backfaceVisibility: "hidden",
  },
  back: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    transform: 'rotateY(180deg)',
    marginBottom: "150px"
  }
}));


