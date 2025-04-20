const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">ShopEase</h3>
          <p>Your one-stop destination for curated style, tech, and home goods.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul>
            <li><a href="#" className="hover:underline">Men</a></li>
            <li><a href="#" className="hover:underline">Women</a></li>
            <li><a href="#" className="hover:underline">Home & Kitchen</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Shipping Info</a></li>
            <li><a href="#" className="hover:underline">Return Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-400">Facebook</a>
            <a href="#" className="hover:text-indigo-400">Instagram</a>
            <a href="#" className="hover:text-indigo-400">Twitter</a>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-400 mt-8">© 2025 ShopEase. All rights reserved.</p>
    </footer>
    )
}

export default Footer