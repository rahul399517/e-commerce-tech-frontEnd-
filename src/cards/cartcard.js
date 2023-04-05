//                                 Thought Note
/*
This is a functional component called CartCard that displays a 
card for a specific item in a shopping cart.

It takes two props as input: item which contains information about the product such as name, 
image, cost, and quantity added to the cart, 

It also provide removeHandler which is a function to remove the item from the cart.

*/
function CartCard({ item, removeHandler }) {
  return (
    //cart horizontel
    <div
      className="card mb-3 shadow"
      style={{
        maxWidth: "100%",
        marginTop: "10px",
        border: "1px solid gray",
        marginLeft: "5px",
      }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            style={{ width: "250px", height: "200px" }}
            src={item.Image}
            className="img-fluid rounded-start"
            alt={item.FullName}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.ProductName}</h5>
            <p className="card-text">
              <p
                style={{
                  fontSize: "Medium",
                  textAlign: "left",
                  fontWeight: "bold",
                  display: "inline",
                  paddingLeft: "10px",

                  marginLeft: "10px",
                }}
              >
                {" "}
                Price{" "}
                <p
                  style={{
                    display: "inline",
                    fontSize: "large",
                    color: "red",
                  }}
                >
                  ${item.Cost}
                </p>
              </p>
            </p>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4" style={{ fontWeight: "700" }}>
                {" "}
                Quantity Added :{item.qty}
              </div>
              {/*  
              It also displays a "Delete" button that calls the removeHandler function when clicked.

              The card is styled using Bootstrap classes to make it responsive and visually appealing. */}
              <div className="col-4">
                {" "}
                <button
                  className="form-control btn btn-warning"
                  onClick={() => removeHandler(item.product)}
                >
                  Delete
                </button>
              </div>
            </div>

            <br></br>

            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartCard;
