"use client";
import { Filter, Tag, DollarSign } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 p-4 hidden md:block">
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5" /> Filters
      </h2>

      {/* Category */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
          <Tag className="w-4 h-4" /> Category
        </h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><input type="checkbox" /> Electronics</li>
          <li><input type="checkbox" /> Fashion</li>
          <li><input type="checkbox" /> Home</li>
          <li><input type="checkbox" /> Sports</li>
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
          <DollarSign className="w-4 h-4" /> Price
        </h3>
        <input type="range" min="0" max="5000" className="w-full" />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>$0</span>
          <span>$5000</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
