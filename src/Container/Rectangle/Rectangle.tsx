import Grid from "@mui/material/Grid";
import "./rectangle.css";
import PremiumHeading from "../../Components/PremiumHeading/PremiumHeading";

const Rectangle = () => {
  return (
    <Grid container xs={12} md={10} sm={10}>
      <Grid item>
        <PremiumHeading
          title="Let’s try our service now!"
          paragraph="Everything you need to accept card payments and grow your business anywhere on the planet."
        />
      </Grid>
    </Grid>
  );
};

export default Rectangle;
