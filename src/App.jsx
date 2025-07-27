import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Circ, Expo } from "gsap/all";
import { CartProvider, useCart } from "./CartContext";
import { AuthProvider, useAuth } from "./AuthContext";
import Products from "./Products";
import Cart from "./Cart";
import AuthModal from "./AuthModal";

function AppContent() {
  const [showCanvas, setShowCanvas] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);
  
  const { getCartItemsCount } = useCart();
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#fff",
            background: "linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #2c3e50 50%, #34495e 75%, #2c3e50 100%)",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#000",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
            backgroundSize: "400% 400%",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener on unmount
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      
      {/* Navigation - Always visible */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between z-50 bg-transparent">
        <div 
          className="brand text-2xl font-bold cursor-pointer text-white drop-shadow-lg" 
          onClick={() => setCurrentPage('home')}
        >
          Green Basket
        </div>
        <div className="links flex gap-10 items-center">
          <button
            onClick={() => setCurrentPage('products')}
            className={`text-md hover:opacity-70 transition-opacity text-white drop-shadow-lg ${currentPage === 'products' ? 'underline' : ''}`}
          >
            Shop
          </button>
          <button
            onClick={() => setCurrentPage('home')}
            className={`text-md hover:opacity-70 transition-opacity text-white drop-shadow-lg ${currentPage === 'home' ? 'underline' : ''}`}
          >
            Home
          </button>
          
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-md hover:opacity-70 transition-opacity text-white drop-shadow-lg"
          >
            Cart ({getCartItemsCount()})
          </button>
          
          {/* Auth Buttons */}
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-white drop-shadow-lg">Hello, {user.name}</span>
              <button
                onClick={logout}
                className="text-sm bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="text-sm bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition-all"
            >
              Login
            </button>
          )}
        </div>
      </nav>
      
      {/* Conditional Page Rendering */}
      {currentPage === 'home' ? (
        <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
          {showCanvas &&
            data[0].map((canvasdets, index) => <Canvas key={index} details={canvasdets} />)}
          <div className="w-full relative z-[1] h-screen ">
            {/* W. Button */}
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
              <div className="bg-black text-white w-12 h-24 flex items-center justify-center writing-mode-vertical-rl text-orientation-mixed">
                <span className="transform rotate-90 text-sm font-bold">W.</span>
              </div>
            </div>
            
            <div className="textcontainer w-full px-[20%] pt-32">
              <div className="text w-[50%]">
                <h3 className="text-4xl leading-[1.2]">
                  Fresh, organic vegetables delivered straight to your door with Green Basket.
                </h3>
                <p className="text-lg w-[80%] mt-10 font-normal">
                  We're your trusted local source for premium organic produce, 
                  connecting you directly with local farmers to bring the freshest 
                  vegetables to your table every day.
                </p>
                <p className="text-md mt-10">Scroll</p>
              </div>
              {/* Circular logo element */}
              <div className="absolute top-[20%] right-[10%] w-40 h-40 border-2 border-black rounded-full flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm">
                <div className="text-xs font-semibold text-center leading-tight">
                  FRESH DAILY<br/>
                  100% ORGANIC<br/>
                  GUARANTEED
                </div>
              </div>
            </div>
            <div className="w-full absolute bottom-0 left-0">
              <h1
                ref={headingref}
                className="text-[14rem] font-normal tracking-tight leading-none pl-5 cursor-pointer hover:opacity-80 transition-opacity"
              >
                Green Basket
              </h1>
            </div>
          </div>
          
          <div id="about" className="w-full relative h-screen mt-32 px-10 font-['Helvetica_Now_Display']">
            {showCanvas &&
              data[1].map((canvasdets, index) => <Canvas key={index} details={canvasdets} />)}
            <h1 className="text-8xl tracking-tighter font-light">about our produce</h1>
            <p className="text-4xl leading-[1.8] w-[80%] mt-10 font-light">
              We partner with local organic farmers to bring you the freshest, 
              highest-quality vegetables. Every item in your Green Basket is 
              carefully selected, pesticide-free, and delivered within 24 hours 
              of harvest to ensure maximum freshness and nutrition.
            </p>
          </div>
        </div>
      ) : (
        <div className="pt-20">
          <Products />
        </div>
      )}

      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
