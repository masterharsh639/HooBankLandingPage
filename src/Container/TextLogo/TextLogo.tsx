import Grid from "@mui/material/Grid";
import "./textlogo.css";
import Typography from "@mui/material/Typography";

interface TextlogoProps {
  logo: string;
  title: string;
  paragraph: string;
}

const TextLogo = ({ logo, title, paragraph }: TextlogoProps) => {
  return (
    <Grid container xs={12}>
      <Grid item xs={12} sm={2} md={2} className="textLogo">
       <img src={logo} alt="logo1" />
      </Grid>
      <Grid item xs={12} sm={10} md={10}>
        <Typography className="h2-18">{title}</Typography>
        <Typography className="h3-18-grey">{paragraph}</Typography>
      </Grid>
    </Grid>
  );
};

export default TextLogo;
