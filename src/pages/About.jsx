import React from "react";

const About = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* HERO */}
      <section
        className="bg-cover bg-center bg-no-repeat py-32 text-white relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-xl animate-fadeIn">
            About ShopEase
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-md">
            Bringing joy to your shopping journey, one product at a time.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 md:flex items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80"
              alt="Our Story"
              className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-indigo-600">Our Story</h2>
            <p className="mb-4 text-lg">
              ShopEase was born out of a simple idea: to make online shopping delightful, trustworthy, and effortless. We believe in curated collections, amazing value, and outstanding customer experience.
            </p>
            <p className="text-lg">
              Since our launch, we’ve been committed to delivering top-notch products and building a platform where style meets convenience. Your happiness is what keeps us innovating every day.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-14 text-indigo-600">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              {
                title: "Customer First",
                icon: "💖",
                desc: "We prioritize your happiness above all. Your experience is at the heart of what we do.",
              },
              {
                title: "Quality & Style",
                icon: "🎯",
                desc: "We carefully curate every product to ensure it’s fashionable, functional, and built to last.",
              },
              {
                title: "Innovation",
                icon: "🚀",
                desc: "From smart tech to fresh trends, we’re always moving forward to serve you better.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="p-8 border rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 bg-gray-50"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-indigo-700">{value.title}</h3>
                <p className="text-gray-600 text-md">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-14 text-indigo-600">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                name: "Emma Wilson",
                role: "Founder & CEO",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Liam Smith",
                role: "CTO",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Sofia Davis",
                role: "Head of Design",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
              },
              {
                name: "Noah Johnson",
                role: "Marketing Lead",
                image: "https://randomuser.me/api/portraits/men/45.jpg",
              },
            ].map((person, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-500"
                />
                <h3 className="text-xl font-semibold text-indigo-700">{person.name}</h3>
                <p className="text-sm text-gray-500">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-indigo-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">We’re Just Getting Started</h2>
          <p className="mb-8 text-lg">
            Join millions of happy customers shopping smarter with ShopEase.
          </p>
          <button className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition cursor-pointer">
            Explore Our Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
