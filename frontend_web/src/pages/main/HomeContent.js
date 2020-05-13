import React from "react";
import ShowCaseCard from "../../components/ShowCaseCard";

function HomeContent(props) {
  const categories = [
    {
      name: "Women",
      items: [
        {
          name: "Gown",
          image: { src: "https://source.unsplash.com/1600x900/?gown" },
        },
        {
          name: "Hand Bags",
          image: { src: "https://source.unsplash.com/1600x900/?bags" },
        },
        {
          name: "Jewelry",
          image: { src: "https://source.unsplash.com/1600x900/?jewelry" },
        },
      ],
    },
    {
      name: "Men",
      items: [
        {
          name: "Trouser",
          image: { src: "https://source.unsplash.com/1600x900/?Trouser" },
        },
        {
          name: "Shoes",
          image: { src: "https://source.unsplash.com/1600x900/?men+shoes" },
        },
        {
          name: "Shirts",
          image: { src: "https://source.unsplash.com/1600x900/?Shirts" },
        },
      ],
    },
  ];
  return (
    <>
      <div className="slideshow">
        <img src="/static/images/grocery-cart-with-item.jpg" alt="" srcset="" />
      </div>
      {categories.map((cat) => (
        <ShowCaseCard category={cat.name} items={cat.items} />
      ))}
    </>
  );
}

export default HomeContent;
