const Navigation = () => (
  <nav
    id="mainNav"
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0",
    }}
  >
    <div className="nav-links left">
      <a href="index.html">Home</a>
      <a href="aboutus.html">About Us</a>
    </div>
    <div className="logo">
      <img src="../images/PalmettoLogoNav.png" alt="Logo" />
    </div>
    <div className="nav-links right">
      <a href="merchandise.html">Merchandise</a>
      <a href="bookteetimes.html">Book Tee Times</a>
    </div>
  </nav>
);

const AboutUsPage = () => (
  <div
    className="about-us-page"
    style={{
      backgroundImage: 'url("./images/Palmetto-Hall-Golf-Course_The-@2x.png")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
      backgroundSize: "fill",
      color: "white",
      height: "100vh",
    }}
  >
    <section className="about-us-content">
      <div>
        <h2>About Us</h2>
        <p style={{ fontSize: "30px", margin: "200px" }}>
          Palmetto Golf Course was created in-1973 by designer Edmund Alt.
          Edmund wanted nothing more than the stunning view of the Intracoastal
          Waterway as a background to create an extravagant 18-hole golf course
          right on the waterfront. Palmetto Golf Course is the first ever course
          in Myrtle Beach to be built and played directly on the Waterway, so
          this draws attention to many locals and tourest who love golf as much
          as they love the water. Our par 4 18th hole is one of the area's most
          challenging, and has one of the most amazing views that you will
          remember forever! forever!
        </p>
      </div>
      <div></div>
    </section>
  </div>
);

const Footer = () => (
  <footer
    style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      background: "rgb(49, 80, 88)",
      color: "#ffffff",
      padding: "20px 0",
    }}
  >
    <div className="footer-section">
      <h2>Sign up to become a Palmetto Golf player today!</h2>
      <div style={{ display: "flex" }}>
        <div
          className="footer-contact"
          style={{
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
          }}
        >
          <p className="footer-contact-title">Address:</p>
          <p>
            1500 48th Avenue North,
            <br />
            Myrtle Beach, SC 29577
          </p>
          <p className="footer-contact-title">Phone:</p>
          <p>843-742-GOLF</p>
        </div>
        <div
          className="footer-logo"
          style={{ border: "1px solid white", paddingTop: "30px" }}
        >
          <img
            src="../images/PalmettoLogo.png"
            alt="Palmetto Logo"
            style={{ maxWidth: "100px" }}
          />
          <p>For beginners and professionals alike...</p>
        </div>
        <div
          className="footer-debug"
          style={{
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
          }}
        >
          <h3>This site is unfinished!</h3>
          <p>
            For debugging purposes
            <br />
            click{" "}
            <a
              href="backend/home.html"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              here
            </a>{" "}
            to access the backend.{" "}
          </p>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div id="app">
    <Navigation />
    <AboutUsPage />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
