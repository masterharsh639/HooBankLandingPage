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
      <Grid xs={2} item>
       <img src={logo} alt="" />
      </Grid>
      <Grid xs={10} item>
        <Typography className="h2-18">{title}</Typography>
        <Typography className="h3-16">{paragraph}</Typography>
      </Grid>
    </Grid>
  );
};

export default TextLogo;
