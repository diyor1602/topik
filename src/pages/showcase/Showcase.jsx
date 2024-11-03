import React from "react";
import { Link } from "react-router-dom";
import { Book, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Showcase = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Topshirmoqchi bo'lgan TOPIK darajangizni tanlang
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                level: "TOPIK I",
                description: "Boshlang'ich",
                icon: Book,
                link: "/topik1",
              },
              {
                level: "TOPIK II",
                description: "Yuqori",
                icon: FileText,
                link: "/topik2",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              >
                <item.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.level}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link
                  to={item.link}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Boshlash
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Showcase;
