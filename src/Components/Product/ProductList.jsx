import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Tomato",
    description: "Agriculture farming are the essential",
    price: "Tk 120",
    image:
    "https://wphtml.com/html/tf/farmhub/assets/img/gallery/feature1.jpg"
      ,
    category: "Vegetables",
  },
  {
    id: 2,
    name: "Meat",
    description: "Agriculture farming are the essential",
    price: "Tk 80",
    image: "https://wphtml.com/html/tf/farmhub/assets/img/service/product-small6.jpg",
    category: "Fresh",
  },
  {
    id: 3,
    name: "Blossomed",
    description: "Agriculture farming are the essential",
    price: "Tk 45",
    image: "https://wphtml.com/html/tf/farmhub/assets/img/gallery/feature3.jpg",
    category: "Vegetables",
  },
  {
    id: 4,
    name: "Egg",
    description: "Agriculture farming are the essential",
    price: "Tk 44",
    image: "https://wphtml.com/html/tf/farmhub/assets/img/gallery/feature4.jpg",
    category: "Organic",
  },
  {
    id: 5,
    name: "Corning",
    description: "Agriculture farming are the essential",
    price: "Tk 80",
    image: "https://wphtml.com/html/tf/farmhub/assets/img/gallery/feature5.jpg",
    category: "Vegetables",
  },
  {
    id: 6,
    name: "Kales",
    description: "Agriculture farming are the essential",
    price: "Tk 45",
    image: "https://wphtml.com/html/tf/farmhub/assets/img/gallery/feature6.jpg",
    category: "Vegetables",
  },
];

const categories = ["All", "Fresh", "Organic", "Vegetables"];

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="product-list-container px-10 py-16">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-green-400 font-Mali text-xl mt-10">Our Products</h1>
        <h2 className="text-4xl font-semibold font-NotoSarif ">
          Nourishing the world from seed to table
        </h2>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex justify-center mx-10 md:mx-0 space-x-1 lg:space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-lg Tk {
              selectedCategory === category
                ? "bg-green-500 text-white"
                : "bg-white border border-green-500 text-green-500"
            } focus:outline-none`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid gap-20 sm:grid-cols-1 pl-10 md:px-20 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card  grid grid-cols-2 bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-60 ml-[-80px] rounded-xl mb-4 object-contain"
              />
            </div>
            <div className="text-left ml-[-70px]">
              <h3 className="text-xl font-semibold text-gray-800  ">
                {product.name}
              </h3>
              <p className="text-gray-500 ">{product.description}</p>
              <p className="text-green-700 font-bold  mt-2">
                {product.price}
              </p>
              <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition duration-300">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
