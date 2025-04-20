import React from "react";

const Home = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* HERO SECTION */}
      <section className="bg-cover bg-center bg-no-repeat py-32" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1470&q=80')` }}>
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Welcome to ShopEase</h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">Effortless shopping, joyful living.</p>
          <button className="bg-white text-pink-600 px-6 py-3 font-semibold rounded-full shadow-xl hover:bg-pink-100 transition cursor-pointer">
            Start Shopping
          </button>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Modern Headphones",
                image: "https://cdn5.vectorstock.com/i/1000x1000/85/99/modern-headphones-in-black-design-vector-46888599.jpg",
              },
              {
                name: "Stylish Handbag",
                image: "https://media.istockphoto.com/id/1271796113/photo/women-is-holding-handbag-near-luxury-car.jpg?s=612x612&w=0&k=20&c=-jtXLmexNgRa-eKqA1X8UJ8QYWhW7XgDiWNmzuuCHmM=",
              },
              {
                name: "Smart Watch",
                image: "https://hf-store.pk/wp-content/uploads/2024/01/Smartwatch-Da-Apple.jpeg",
              },
              {
                name: "Elegant Sunglasses",
                image: "https://pinksugarbikini.com/wp-content/uploads/2023/04/00-Designer-Gold-Accent-UV-Sunglasses-2-1.jpg",
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">Premium quality at the best price.</p>
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { name: "Modern Furniture", img: "https://media.istockphoto.com/id/1285065780/photo/furniture-showroom-with-plants-spotlights-and-brick-wall.jpg?s=612x612&w=0&k=20&c=5X2jXOu4kAEW978_fNmdLGcnyqFjyl06Z-WDlX_FDVU=" },
              { name: "Premium Perfumes", img: "https://images.unsplash.com/photo-1593487568720-92097fb460fb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D" },
              { name: "Beauty", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZ4fB_aEHAlz04an4rX1adyYvyW0_5FXLhg&s" },
              { name: "Home Appliances", img: "https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.jpg?s=612x612&w=0&k=20&c=blm3IyPyZo5ElWLOjI-hFMG-NrKQ0G76JpWGyNttF8s=" }
            ].map((cat, idx) => (
              <div key={idx} className="p-6 border rounded-xl hover:shadow-md transition cursor-pointer">
                <img src={cat.img} alt={cat.name} className="mx-auto mb-4 rounded-lg h-28 w-28 object-cover" />
                <h4 className="text-lg font-semibold">{cat.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="relative py-20 bg-pink-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-pink-700">💥 Spring Sale Is Live!</h2>
          <p className="text-lg text-pink-800 mb-6">Up to 70% off on selected collections. Limited time!</p>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition cursor-pointer" >
            Grab Now
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <p className="italic mb-4">“Absolutely love ShopEase. It’s now my favorite online store!”</p>
                <div className="flex items-center gap-4">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                    className="w-12 h-12 rounded-full"
                    alt="Customer"
                  />
                  <div>
                    <p className="font-bold">Alex Smith</p>
                    <p className="text-sm text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SIGNUP */}
      <section className="bg-indigo-500 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with ShopEase</h2>
          <p className="mb-6">Get exclusive deals and product updates directly in your inbox.</p>
          <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto ">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg text-white-800"
            />
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
