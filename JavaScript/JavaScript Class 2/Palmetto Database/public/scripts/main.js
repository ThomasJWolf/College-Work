const HeaderHeroContainer = () => (
  <div
    className="header-hero-container"
    style={{
      backgroundImage: 'url("./images/golfcourse_l@2x.png")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
      backgroundSize: "cover",
    }}
  >
    <Header />
    <Navigation />
    <HeroSection />
  </div>
);
const Header = () => (
  <header className="header-content">
    <img
      style={{ maxHeight: "120px" }}
      src="./images/PalmettoLogo.png"
      alt="Event Image"
    />
    <h1 style={{ color: "white" }}>Palmetto Golf Course</h1>
  </header>
);
const Navigation = () => (
  <nav
    id="mainNav"
    style={{
      display: "flex",
      justifyContent: "space-evenly",
      padding: "10px 0",
    }}
  >
    <a href="index.html">Home</a>
    <a href="aboutus.html">About Us</a>
    <a href="merchandise.html">Merchandise</a>
    <a href="bookteetimes.html">Book Tee Times</a>
  </nav>
);
const HeroSection = () => (
  <div className="hero-section">
    <h2>WELCOME TO PALMETTO GOLF COURSE</h2>
    <p>est. 1973</p>
    <p>One of Myrtle Beach’s most enjoyable 18-hole golf courses</p>
  </div>
);
const AboutUs = () => (
  <section className="aboutUs-section" style={{ display: "flex" }}>
    <div style={{ flexBasis: "50%", padding: "0 20px" }}>
      <h3>About Us</h3>
      <p>
        Palmetto Golf Course is a premier public golf course located in Myrtle
        Beach, South Carolina. Our course is known for its beautiful setting,
        challenging layout, and friendly staff. Whether you're a beginner or an
        experienced golfer, we welcome you to come enjoy a round of golf with
        us.
      </p>
      <button
        className="button"
        onClick={() => (window.location.href = "aboutus.html")}
      >
        Contact
      </button>
    </div>
    <div style={{ flexBasis: "50%" }}>
      <img
        src="images/img_6540-scaled.png"
        alt="Event Image"
        style={{ width: "100%", height: "auto", borderRadius: "4px" }}
      />
    </div>
  </section>
);
const TeeTimeReservation = () => (
  <section className="teeTime-section">
    <h3>Reserve Tee Times</h3>
    <p>
      Secure your spot on the green with our convenient online reservation
      system. Choose your preferred date and time, and we'll have your tee time
      ready when you arrive. No hassle, just golf.
    </p>
    <button
      className="button"
      onClick={() => (window.location.href = "bookteetimes.html")}
    >
      Book Now
    </button>
  </section>
);
const Merchandise = () => (
  <section className="merchandise-section" style={{ display: "flex" }}>
    <div style={{ flexBasis: "50%" }}>
      <img
        src="images/Waterway_Pub_and_Grill_01-1.png"
        alt="Event Image"
        style={{ width: "100%", height: "auto", borderRadius: "4px" }}
      />
    </div>
    <div style={{ flexBasis: "50%" }}>
      <h3>Golf Merchandise</h3>
      <p>
        Explore our premium selection of golf gear and accessories. From the
        latest clubs to stylish apparel, find everything you need to hit the
        course in comfort and style.
      </p>
      <button
        className="button"
        onClick={() => (window.location.href = "merchandise.html")}
      >
        Shop Now
      </button>
    </div>
  </section>
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
            alt="PalmettoLogo Logo"
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
              href="backend/"
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
    <HeaderHeroContainer />
    <AboutUs />
    <Merchandise />
    <TeeTimeReservation />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
