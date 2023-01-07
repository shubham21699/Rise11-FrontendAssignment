import { React, useState, useEffect } from "react";
import { Link } from "@mui/material";
import { Grid } from "@mui/material";
import Welcome from "../Images/welcome.webp";
import Travel from "../Images/tour.jpg";

function Footer() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 1170) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const data = [
    {
      tag: "Welcome to our new website",
      link: "LEARN ABOUT VIRGINAMERICA.COM",
      imageName: Welcome,
    },
    {
      tag: "Deals from $49 to your favourite cities",
      link: "SEE ALL DEALS",
      imageName: Travel,
    },
  ];
  return (
    <div
      className="FooterBar"
      style={{ backgroundColor: "rgb(196, 195, 195)", padding: "0.05rem" }}
    >
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {data.map((elem) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={screenSize > 1170 ? 4 : 6}
            key={data.indexOf(elem)}
          >
            <div className="footer">
              <p style={{ margin: "1rem" }}>{elem.tag}</p>
              <img src={elem.imageName} style={{ width: "18rem" }} />
              <Link style={{ margin: "1rem" }}>{elem.link}</Link>
            </div>
          </Grid>
        ))}

        {(screenSize >= 1170 || screenSize <= 650) && (
          <Grid item key={3} className="footerDetails">
            <ul style={{ padding: "1rem" }}>
              <h3>Support</h3>
              <p>Help and Contact</p>
              <p>Before you book</p>
              <p>At the airport</p>
              <p>On the flight</p>
              <p>Lost property</p>
            </ul>
          </Grid>
        )}
        {(screenSize >= 1170 || screenSize <= 650) && (
          <Grid item key={4} className="footerDetails">
            <ul style={{ padding: "1rem" }}>
              <h3>More</h3>
              <p>Buiseness travel</p>
              <p>Virgin America cargo</p>
              <p>Travel trade</p>
              <p>Affiliates</p>
              <p>Partners</p>
            </ul>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Footer;
