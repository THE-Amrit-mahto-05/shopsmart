import Navbar from "./navbar";

const Homepage = () => {
  return (
    <>
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Shop the Best Products 🛒
        </h1>
        <p className="text-gray-600 mb-6">
          Best quality • Best price • Fast delivery
        </p>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
          Shop Now
        </button>
      </section>

      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-200 mb-4"></div>
              <h3 className="font-semibold">Product {item}</h3>
              <p className="text-gray-500">₹999</p>
              <button className="mt-3 w-full bg-black text-white py-2 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-black text-white text-center py-4">
        © 2026 YourShop. All rights reserved.
      </footer>
    </>
  );
};

export default Homepage;
