import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        <div>
          <h3 className="font-bold text-lg mb-4">Filters</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">All</a></li>
            <li><a href="#" className="hover:underline">Electronics</a></li>
          </ul>
          <p className="mt-4 text-sm">© 2024 American</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#"><Facebook fill="white" /></a>
            <a href="#"><Twitter fill="white" /></a>
            <a href="#"><Instagram fill="white" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
