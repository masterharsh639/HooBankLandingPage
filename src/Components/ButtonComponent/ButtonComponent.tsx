import { Grid } from "@mui/material";
import "./buttoncomponent.css";
interface ButtonProps {
  title: string;
}

const ButtonComponent = ({ title }: ButtonProps) => {
  return (
    <Grid container xs={12}>
      <Grid item className="button-css">
        {title}
      </Grid>
    </Grid>
  );
};

export default ButtonComponent;
