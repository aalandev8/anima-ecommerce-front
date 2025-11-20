import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "@/redux/slices/authSlice";
import {
  toggleMainMenu,
  toggleUserMenu,
  closeUserMenu,
  openCategories,
  closeCategories,
  setScrolled,
  setIsMobile,
  toggleSearch,
  closeSearch,
} from "@/redux/slices/menuSlice";
import { MobileMenu } from "./navbar/MobileMenu";
import { CategoriesDropdown } from "./navbar/CategoriesDropdown";
import { UserMenu } from "./navbar/UserMenu";
import { SearchBar } from "../store/SearchBar";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  const {
    isMainMenuOpen,
    isUserMenuOpen,
    isCategoriesOpen,
    isScrolled,
    isMobile,
    isSearchOpen,
  } = useSelector((state) => state.menu);
  const cartItems = useSelector((state) => state.cart.items);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const classScrolled = `font-medium flex transition ${
    isScrolled
      ? "text-green-100 hover:text-green-200"
      : "text-white hover:text-[#c8d6a8]"
  }`;

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrolled(window.scrollY > 20));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobile(window.innerWidth < 768));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(closeUserMenu());
    navigate("/");
  };

  const getNavbarBackground = () => {
    if (isScrolled) {
      return "bg-[#556030]/85 backdrop-blur-sm shadow-lg";
    }
    return "bg-white/20 backdrop-blur-md";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${getNavbarBackground()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
              <img
                src="/tenedor-logo.png"
                alt="AppTo Icon"
                className={`${
                  isScrolled ? "h-8" : "h-13"
                } w-auto drop-shadow-[0_0_14px_rgba(207,255,141,1)] transition-all duration-500`}
              />
              <img
                src="/letras-logo.png"
                alt="AppTo Text"
                className={`${
                  isScrolled ? "h-8" : "h-9"
                } w-auto drop-shadow-[0_0_12px_rgba(207,255,141,0.95)] transition-all duration-500`}
              />
            </div>
          </Link>

          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              <CategoriesDropdown
                isScrolled={isScrolled}
                isCategoriesOpen={isCategoriesOpen}
                onOpen={() => dispatch(openCategories())}
                onClose={() => dispatch(closeCategories())}
              />
              <Link to="/about" className={classScrolled}>
                Sobre Nosotros
              </Link>
            </div>
          )}

          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch(toggleSearch())}
              className={classScrolled}
            >
              <svg
                className="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <Link to="/cart" className={`${classScrolled} relative`}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 000-4z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#6b7c5a] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                  {totalItems}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <UserMenu
                isScrolled={isScrolled}
                isUserMenuOpen={isUserMenuOpen}
                user={user}
                onToggle={() => dispatch(toggleUserMenu())}
                onClose={() => dispatch(closeUserMenu())}
                onLogout={handleLogout}
              />
            ) : (
              <Link to="/login" className={classScrolled}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
            )}

            {isMobile && (
              <button
                onClick={() => dispatch(toggleMainMenu())}
                className={classScrolled}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMainMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            )}
          </div>
        </div>

        <MobileMenu
          isOpen={isMainMenuOpen}
          isAuthenticated={isAuthenticated}
          user={user}
          onClose={() => dispatch(toggleMainMenu())}
          onLogout={handleLogout}
        />
      </div>

      <SearchBar
        isScrolled={isScrolled}
        isOpen={isSearchOpen}
        onClose={() => dispatch(closeSearch())}
      />
    </nav>
  );
};
