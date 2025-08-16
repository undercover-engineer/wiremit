export default function HeroSection() {
  return (
    <main className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <h1 className=" text-purple-800 px-3 py-1 text-4xl max-sm:text-xl">
              EASY MONEY TRANSFERS
            </h1>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl text-gray-900 leading-tight">
                Pay{" "}
                <span className="underline decoration-4 decoration-blue-500">
                  fast and smarter
                </span>{" "}
                from anywhere
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Experience the future of money transfers: fast, secure, and
                tailored for the next generation's convenience and trust.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <span>
                  <img src="/apple.svg" alt="App Store Logo" className="h-8" />
                </span>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <span>
                  <img
                    src="/playstore.svg"
                    alt="Google PlayStore Logo"
                    className="h-6"
                  />
                </span>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm">Google Play</div>
                </div>
              </button>
            </div>
            {/* Features */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Reliable and hussle-free
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Secure
              </div>
            </div>
          </div>

          {/* Right Content - Image with Overlays */}
          <div className="relative">
            <img
              src="/heroImage.png"
              alt="Happy man using Monks Pay"
              className="w-full h-auto rounded-2xl"
            />

            {/* Payment Received Card */}
            <div className="absolute top-8 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-sm text-gray-600 mb-1">Payment Received</div>
              <div className="text-2xl text-green-600 mb-1">ZAR 8,390.00</div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>7th Jan, 2024</span>
                <span className="text-green-600">13:24</span>🙏🏾
              </div>
            </div>

            {/* User Stats Card */}
            <div className="absolute bottom-8 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="text-lg text-gray-900">Msg from: Tino</div>
                  <div className="text-xs text-gray-600">
                    Makadini mama, l just
                    <br /> wanted to tell kuti I love you.
                    <br />
                    Ndokumbirawo mari
                    <br />
                    yephotosynthesis🙏🏾🙏🏾
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
