import React, { act, useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 599,
  originalPrice: 860,
  description: "This is a stylish Jacket perfect for any occasion",
  brand: "Fashion Brand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
};

const similarProduts = [
  {
    _id: 1,
    name: "Product 1",
    price: 400,
    image: [{ url: "https://picsum.photos/500/500?random=7" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 400,
    image: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 400,
    image: [{ url: "https://picsum.photos/500/500?random=9" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 400,
    image: [{ url: "https://picsum.photos/500/500?random=10" }],
  },
];

const ProductDetails = () => {
  const [mainImage, setmainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct.images?.length > 0) {
      setmainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddtoCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color before adding to cart.", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart!", { duration: 1000 });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row">
        {/* left Thumbnails */}
        <div className="hidden md:flex flex-col space-y-4 mr-6">
          {selectedProduct.images.map((image, index) => (
            <img
              src={image.url}
              alt={image.altText || `Thumbnail ${index}`}
              key={index}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                mainImage === image.url ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setmainImage(image.url)}
            />
          ))}
        </div>
        {/* main image */}
        <div className="md:w-1/2">
          <div className="mb-4">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Mobile Thumbnail */}
        <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
          {selectedProduct.images.map((image, index) => (
            <img
              src={image.url}
              alt={image.altText || `Thumbnail ${index}`}
              key={index}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                mainImage === image.url ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setmainImage(image.url)}
            />
          ))}
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 md:ml-10">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            {selectedProduct.name}
          </h1>
          <p className="text-lg text-gray-600 mb-1 line-through">
            {selectedProduct.originalPrice &&
              `${selectedProduct.originalPrice}`}
          </p>
          <p className="text-xl text-gray-500 mb-2">
            Rs. {selectedProduct.price}
          </p>

          <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

          <div className="mb-4">
            <p className="text-gray-700">Color:</p>
            <div className="flex gap-4 mt-2">
              {selectedProduct.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border ${
                    selectedColor === color
                      ? "border-4 border-black"
                      : "border-gray-300"
                  }`}
                  style={{
                    backgroundColor: color.toLowerCase(),
                    filter: "brightness(0.5)",
                  }}
                ></button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-700">Size:</p>
            <div
              className="
            flex gap-2 mt-2"
            >
              {selectedProduct.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded border ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-700">Qyantity</p>
            <div className="flex items-center space-x-4 mt-2">
              <button
                onClick={() => handleQuantityChange("minus")}
                className="px-2 py-1 bg-gray-200 rounded text-lg"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("plus")}
                className="px-2 py-1 bg-gray-200 rounded text-lg"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddtoCart}
            disabled={isButtonDisabled}
            className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
              isButtonDisabled
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-gray-900"
            }`}
          >
            {isButtonDisabled ? "Adding..." : "ADD TO CART"}
          </button>

          <div className="mt-10 text-gray-700">
            <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
            <table className="w-full text-left text-sm text-gray-600">
              <tbody>
                <tr>
                  <td className="py-1">Brand</td>
                  <td className="py-1">{selectedProduct.brand}</td>
                </tr>
                <tr>
                  <td className="py-1">Material</td>
                  <td className="py-1">{selectedProduct.material}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-2xl text-center font-medium mb-4">
          You May Also Like
        </h2>
        <ProductGrid product={similarProduts} />
      </div>
    </div>
  );
};

export default ProductDetails;
