import Grid from "@mui/material/Grid";
import './premiumheading.css'
interface PremiumHeadingProps {
  title: string;
  paragraph: string;
}

const PremiumHeading = ({ title, paragraph }: PremiumHeadingProps) => {
  return (
    <Grid container xs={12} className="premiumHeading">
      <Grid item xs={12} className="h1-48">
        {title}
      </Grid>
      <Grid item xs={12} className="h3-18-grey premium-para">
        {paragraph}
      </Grid>
    </Grid>
  );
};

export default PremiumHeading;
