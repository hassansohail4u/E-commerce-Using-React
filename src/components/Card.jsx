import React from "react";
import { ShoppingCart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ image, title, description, price , id}) => {
    const navigate = useNavigate();
  return (
    <div className="max-w-sm w-full bg-white rounded-3xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold text-md px-4 py-1 rounded-full shadow-md animate-pulse">
          ${price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-extrabold text-gray-800 mb-2 group-hover:text-indigo-600 transition">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          {description.length > 120 ? `${description.slice(0, 117)}...` : description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full font-semibold transition-all cursor-pointer">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-medium transition-all cursor-pointer" onClick={() => {navigate(`/product/${id}`)}}>
            <Eye size={18} />
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


