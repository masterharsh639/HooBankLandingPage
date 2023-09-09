import Grid from "@mui/material/Grid";
import logo from  '../../assests/HooBank.svg'
import './header.css';

const Header = () => {
  return (
    <Grid container xs={12} className="page-section header-section">
      <Grid item xs={4}>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid item xs={4} className="header-navs">
        <p className="h2-18">Home</p>
        <p className="h2-18">About Us</p>
        <p className="h2-18">Features</p>
        <p className="h2-18">Solution</p>
      </Grid>
    </Grid>
  );
};

export default Header;
