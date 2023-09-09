import Grid from "@mui/material/Grid";
import "./businesssection.css";
import PremiumHeading from "../PremiumHeading/PremiumHeading";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import TextLogo from "../../Container/TextLogo/TextLogo";
import star from "../../assests/star.png";
import arrow from "../../assests/arrow.png";
import tick from "../../assests/tick.png";

const BusinessSection = () => {
  return (
    <Grid container className="business-section page-section">
      <Grid xs={12} sm={6} md={6}>
        <PremiumHeading
          title="You do the business, we ll handle the money."
          paragraph="With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."
        />
        <ButtonComponent title="Get Started" />
      </Grid>
      <Grid xs={12} sm={5} md={5} className="textlogo">
        <TextLogo
          logo={star}
          title="Rewards"
          paragraph="The best credit cards offer some tantalizing combinations of promotions and prizes"
        />
        <TextLogo
          logo={tick}
          title="100% Secured"
          paragraph="We take proactive steps make sure your information and transactions are secure."
        />
        <TextLogo
          logo={arrow}
          title="Balance Transfer"
          paragraph="A balance transfer credit card can save you a lot of money in interest charges."
        />
      </Grid>
    </Grid>
  );
};

export default BusinessSection;
