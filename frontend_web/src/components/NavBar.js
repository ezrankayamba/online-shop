import React, { useState } from "react";
import Icon from "../_helpers/Icon";

function NavBar(props) {
  return (
    <div className="navbar">
      <button className="menu">
        <Icon name="menu" />
      </button>
      <div className="title">
        <h3>OnlineShop</h3>
      </div>
      <div className="buttons">
        <button>
          <Icon name="search" />
        </button>
        <button>
          <Icon name="person_outline" />
        </button>
        <button>
          <Icon name="shopping_cart" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
