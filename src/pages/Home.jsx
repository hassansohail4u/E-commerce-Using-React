import React from "react";

const Home = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* HERO SECTION */}
      <section className="bg-cover bg-center bg-no-repeat py-32" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1470&q=80')` }}>
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Welcome to ShopEase</h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">Effortless shopping, joyful living.</p>
          <button className="bg-white text-pink-600 px-6 py-3 font-semibold rounded-full shadow-xl hover:bg-pink-100 transition cursor-pointer" onClick={() => window.location = "/product"}>
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
                image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-37a0-61f6-bcd2-0f8a81472dd6/raw?se=2025-04-20T20%3A59%3A05Z&sp=r&sv=2024-08-04&sr=b&scid=2b8e4fc1-6952-50c6-8b43-7f7176b7a599&skoid=2f36945c-3adc-4614-ac2b-eced8f672c58&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-20T10%3A23%3A47Z&ske=2025-04-21T10%3A23%3A47Z&sks=b&skv=2024-08-04&sig=wrot/ZkExnV7L5tyNYw8W%2B3dtFNdpa9cdtv2r2rOzU0%3D",
              },
              {
                name: "Stylish Handbag",
                image: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-641c-61f7-b104-c1c769befe81/raw?se=2025-04-20T21%3A12%3A31Z&sp=r&sv=2024-08-04&sr=b&scid=2b70639c-8d08-5699-bf64-9f8616c09733&skoid=ae70be19-8043-4428-a990-27c58b478304&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-20T17%3A28%3A35Z&ske=2025-04-21T17%3A28%3A35Z&sks=b&skv=2024-08-04&sig=ANCiRBZTQtJ8A80wIRKd4%2BJwAVmBloi%2Bg5Xs/TLTvWo%3D",
              },
              {
                name: "Smart Watch",
                image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-5190-61f6-9e5c-8dae72c922e7/raw?se=2025-04-20T20%3A43%3A40Z&sp=r&sv=2024-08-04&sr=b&scid=874d62ab-4988-54c2-b739-ca2baff200f4&skoid=3f3a9132-9530-48ef-96b7-fee5a811733f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-20T17%3A27%3A39Z&ske=2025-04-21T17%3A27%3A39Z&sks=b&skv=2024-08-04&sig=z2AXpncUbkhOAZJrfWqbI7/b6Ez7tsQtEeAHzuyhAvc%3D",
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
              { name: "Modern Furniture", img: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-db60-61f6-8fe1-c571a5c6cf81/raw?se=2025-04-20T20%3A55%3A38Z&sp=r&sv=2024-08-04&sr=b&scid=72a41655-faac-5122-a621-42affe75b693&skoid=2f36945c-3adc-4614-ac2b-eced8f672c58&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-20T11%3A51%3A47Z&ske=2025-04-21T11%3A51%3A47Z&sks=b&skv=2024-08-04&sig=JtBGFMd5XXTPKfO8uxgri%2B2VKtT9a7a83kO/zkFKEJk%3D" },
              { name: "Premium Perfumes", img: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-98e0-61f7-aca1-fb9a87276859/raw?se=2025-04-20T21%3A07%3A32Z&sp=r&sv=2024-08-04&sr=b&scid=12e427d8-6b18-501a-b91d-f66ccc67b3bd&skoid=ae70be19-8043-4428-a990-27c58b478304&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-20T17%3A28%3A36Z&ske=2025-04-21T17%3A28%3A36Z&sks=b&skv=2024-08-04&sig=5ENsAVlp3Jrd%2B1S16931tsJfeIDO7fSSmxTx78sp8Kc%3D" },
              { name: "Beauty", img: "https://images.pexels.com/photos/2537930/pexels-photo-2537930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { name: "Home Appliances", img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80" }
            ].map((cat, idx) => (
              <div key={idx} className="p-6 border rounded-xl hover:shadow-md transition cursor-pointer" onClick={() => window.location = "/product"}>
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
          <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition cursor-pointer" onClick={() => window.location = "/product"}>
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
