import React, { createContext, Component, Children } from "react";

export const CartContext = createContext();

class CartContextProvider extends Component {
  state = {
    cartCount: 1,
    redCounter: {
      color: "white",
      backgroundColor: "#FF9000",
      borderRadius: "50%",
      fontSize: "11px",
      position: "absolute",
      padding: "16px",
      paddingTop: "10px",
      marginTop: "0px",
      marginLeft: "82vw",
      height: "15px",
      width: "15px",
      textAlign: "center",
      paddingBottom: "25px",
      marginRight: "-20px",
    },
    neldolight: {
      price: 699,
      quantity: 1,
    },
    neldo: {
      price: 2999,
      quantity: 1,
    },
    neldochamp: {
      price: 4999,
      quantity: 1,
    },
    noItems: {
      display: "none",
      visibility: "hidden",
    },
  };
  addToCart = () => {
    this.setState({
      cartCount: this.state.cartCount + 1,
    });
  };
  render() {
    return (
      <CartContext.Provider
        value={{ ...this.state, addToCart: this.addToCart }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartContextProvider;
