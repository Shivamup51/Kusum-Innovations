import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-6">
              Welcome to Ki
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your premier digital solutions partner, crafting exceptional experiences that drive results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
