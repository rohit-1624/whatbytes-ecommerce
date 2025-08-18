"use client";
import { useMemo } from "react";
import { ShoppingCart, Search } from "lucide-react";

const Header = ({ cartCount = 0 }) => {
  // clamp badge (no negative)
  const count = useMemo(() => Math.max(0, Number(cartCount) || 0), [cartCount]);

  return (
    <header className="w-full">
      <div className="bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
          {/* Logo (left) */}
          <div className="text-white font-semibold text-2xl tracking-wide select-none">
            Logo
          </div>

          {/* Center search (kept centered using flex grow + max width) */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-xl">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <Search className="w-4 h-4 text-white/80" aria-hidden />
              </span>
              <input
                type="text"
                placeholder="Search for products..."
                aria-label="Search products"
                className="w-full rounded-lg bg-white/10 placeholder-white/80 text-white
                           pl-10 pr-4 py-2 outline-none border border-white/30
                           focus:border-white/60 focus:ring-0"
              />
            </div>
          </div>

          {/* Cart (right) */}
          <button
            type="button"
            className="relative inline-flex items-center gap-2 rounded-lg px-4 py-2
                      bg-[#002A5A] text-white
                       border border-white/20 hover:from-blue-500 hover:to-blue-700
                       focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Cart"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="font-semibold">Cart</span>

            {/* Badge */}
            {count > 0 && (
              <span
                className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1
                           rounded-full bg-red-500 text-white text-xs
                           flex items-center justify-center"
                aria-label={`${count} items in cart`}
              >
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
