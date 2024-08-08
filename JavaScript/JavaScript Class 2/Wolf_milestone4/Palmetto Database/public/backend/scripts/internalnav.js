const NavigationInternal = () => {
  return (
    <nav
      id="mainNav"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "10px 0",
        paddingRight: "20px",
      }}
    >
      <a href="../index.html">
        <img src="../../images/TCTG.png" alt="TCTG logo" />
      </a>
      <a href="../../index.html">Front End</a>|
      <div className="dropdown">
        <a>User</a>
        <div className="dropdown-content">
          <a href="./../user/insertuser.html">Insert</a>
          <a href="./../user/searchuser.html">Search</a>
          <a href="./../user/updateuser.html">Update</a>
        </div>
      </div>
      |
      <div className="dropdown">
        <a>Player</a>
        <div className="dropdown-content">
          <a href="./../player/insertplayer.html">Insert</a>
          <a href="./../player/searchplayer.html">Search</a>
          <a href="./../player/updateplayer.html">Update</a>
        </div>
      </div>
      |
      <div className="dropdown">
        <a>Product</a>
        <div className="dropdown-content">
          <a href="./../product/insertproduct.html">Insert</a>
          <a href="./../product/searchproduct.html">Search</a>
          <a href="./../product/updateproduct.html">Update</a>
        </div>
      </div>
      |
      <div className="dropdown">
        <a>Category</a>
        <div className="dropdown-content">
          <a href="./../category/insertcategory.html">Insert</a>
          <a href="./../category/searchcategory.html">Search</a>
          <a href="./../category/updatecategory.html">Update</a>
        </div>
      </div>
      |
      <div className="dropdown">
        <a>Inventory</a>
        <div className="dropdown-content">
          <a href="./../inventory/insertinventory.html">Insert</a>
          <a href="./../inventory/searchinventory.html">Search</a>
          <a href="./../inventory/updateinventory.html">Update</a>
        </div>
      </div>
      |
      <div className="dropdown">
        <a>Purchase</a>
        <div className="dropdown-content">
          <a href="./../purchase/insertpurchase.html">Insert</a>
          <a href="./../purchase/searchpurchase.html">Search</a>
          <a href="./../purchase/updatepurchase.html">Update</a>
        </div>
      </div>
      |
      <div className="dropdown">
        <a>Purchase Detail</a>
        <div className="dropdown-content">
          <a href="./../purchasedetail/insertpurchasedetail.html">Insert</a>
          <a href="./../purchasedetail/searchpurchasedetail.html">Search</a>
          <a href="./../purchasedetail/updatepurchasedetail.html">Update</a>
        </div>
      </div>
      |
      <div className="dropdown">
        <a>Reservation</a>
        <div className="dropdown-content">
          <a href="./../reservation/insertreservation.html">Insert</a>
          <a href="./../reservation/searchreservation.html">Search</a>
          <a href="./../reservation/updatereservation.html">Update</a>
        </div>
      </div>
      |
      <div className="dropdown">
        <a>Cart</a>
        <div className="dropdown-content">
          <a href="./../cart/insertcart.html">Insert</a>
          <a href="./../cart/searchcart.html">Search</a>
          <a href="./../cart/updatecart.html">Update</a>
        </div>
      </div>
    </nav>
  );
};

const App = () => (
  <div id="internalnav">
    <NavigationInternal />
  </div>
);

ReactDOM.render(<App />, document.getElementById("internalnav"));
