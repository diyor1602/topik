import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <Link className="flex items-center space-x-4" to={"/"}>
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800 cursor-pointer">
            TOPIK Master
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
