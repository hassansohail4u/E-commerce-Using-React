// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
//         <div className="flex justify-between h-16 items-center">
          
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-primary hover:text-secondary transition duration-300">
//               <span className="animate-pulse">🛒</span>
//               <span>ShopEase</span>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 items-center">
//             <Link to="/" className="text-gray-600 hover:text-primary font-medium transition">Home</Link>
//             <Link to="/about" className="text-gray-600 hover:text-primary font-medium transition">About</Link>
//             <Link to="/contact" className="text-gray-600 hover:text-primary font-medium transition">Contact</Link>
//             <Link to="/product" className="text-gray-600 hover:text-primary font-medium transition">Products</Link>
//             <button className="btn btn-outline btn-primary">Login</button>
//             <button className="btn btn-primary">Sign Up</button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-800 focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Items */}
//       {isOpen && (
//         <div className="md:hidden px-4 pb-4 bg-white shadow-md">
//           <Link to="/" className="block py-2 text-gray-700 hover:text-primary">Home</Link>
//           <Link to="/about" className="block py-2 text-gray-700 hover:text-primary">About</Link>
//           <Link to="/contact" className="block py-2 text-gray-700 hover:text-primary">Contact</Link>
//           <Link to="/product" className="block py-2 text-gray-700 hover:text-primary">Products</Link>
//           <div className="flex gap-2 mt-4">
//             <button className="btn btn-outline btn-primary btn-sm w-full">Login</button>
//             <button className="btn btn-primary btn-sm w-full">Sign Up</button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }




import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="drawer z-50">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar bg-white shadow-md px-6 md:px-10">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
              <span className="animate-pulse">🛍️</span> ShopEase
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:text-primary font-medium">Home</Link>
            <Link to="/about" className="hover:text-primary font-medium">About</Link>
            <Link to="/contact" className="hover:text-primary font-medium">Contact</Link>
            <Link to="/product" className="hover:text-primary font-medium">Products</Link>
            <button className="btn btn-outline btn-primary">Login</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <label htmlFor="nav-drawer" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Drawer Side Menu for Mobile */}
      <div className="drawer-side">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="menu p-6 w-64 min-h-full bg-base-100 text-base-content space-y-2">
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/about">📖 About</Link></li>
          <li><Link to="/contact">📞 Contact</Link></li>
          <li><Link to="/product">🛒 Products</Link></li>
          <li className="pt-4">
            <button className="btn btn-outline btn-primary w-full">Login</button>
          </li>
          <li>
            <button className="btn btn-primary w-full">Sign Up</button>
          </li>
        </ul>
      </div>

    </div>
  );
}
