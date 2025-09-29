import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  User, 
  Menu,
  Bell,
  Settings,
  X,
  Home,
  Info,
  Layers,
  Briefcase,
  BarChart3,
  Mail,
  ChevronDown,
  Sun,
  Moon,
  Monitor
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Theme hook (you might want to implement this with context)
const useTheme = () => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return { theme, toggleTheme };
};

// Magnetic Button Component for enhanced interactions
const MagneticButton = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Animated Underline Component
const AnimatedUnderline = ({ isActive, hoveredItem, itemName }) => {
  const isVisible = isActive || hoveredItem === itemName;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400"
          layoutId="navbar-underline"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.3
          }}
        />
      )}
    </AnimatePresence>
  );
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose, navigation, isPublicRoute }) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 z-50 h-full w-80 bg-white dark:bg-slate-900 shadow-2xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h2 className="font-bold text-lg text-gray-900 dark:text-white">SIH Portal</h2>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Internship & Training</p>
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <motion.nav className="flex-1 p-6">
                <motion.ul className="space-y-2" variants={menuVariants}>
                  {navigation.map((item, index) => (
                    <motion.li key={item.name} variants={itemVariants}>
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors group"
                      >
                        <item.icon className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 transition-colors" />
                        <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.nav>

              {/* CTA Buttons */}
              {isPublicRoute && (
                <motion.div 
                  className="p-6 border-t border-gray-200 dark:border-slate-700 space-y-3"
                  variants={itemVariants}
                >
                  <Button 
                    variant="outline" 
                    className="w-full h-12 border-2 border-gray-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400 rounded-xl"
                    asChild
                  >
                    <Link to="/login" onClick={onClose}>Login</Link>
                  </Button>
                  <Button 
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                    asChild
                  >
                    <Link to="/signup" onClick={onClose}>Get Started</Link>
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Header = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const isPublicRoute = ['/', '/about', '/faq', '/contact', '/login', '/signup', '/forgot-password'].includes(location.pathname);

  // Navbar background opacity based on scroll
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98]);
  const navbarBlur = useTransform(scrollY, [0, 100], [8, 16]);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Features', href: '/features', icon: Layers },
    { name: 'Opportunities', href: '/opportunities', icon: Briefcase },
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const publicNavigation = navigation.filter(item => 
    ['Home', 'About', 'Features', 'Contact'].includes(item.name)
  );

  const currentNav = isPublicRoute ? publicNavigation : navigation;

  return (
    <>
      <motion.header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-gray-200/50 dark:border-slate-700/50' 
            : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 35,
          duration: 0.8
        }}
        style={{
          backgroundColor: `rgba(255, 255, 255, ${navbarOpacity})`,
          backdropFilter: `blur(${navbarBlur}px)`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Link 
                to="/" 
                className="flex items-center space-x-3 group"
                onMouseEnter={() => setHoveredItem('logo')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.div 
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 dark:bg-blue-500"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                  }}
                  transition={{ 
                    rotate: { duration: 0.6 },
                    scale: { type: "spring", stiffness: 300 },
                    boxShadow: { duration: 0.3 }
                  }}
                >
                  <GraduationCap className="h-6 w-6 text-white" />
                </motion.div>
                <div className="hidden sm:block">
                  <motion.h1 
                    className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    SIH Portal
                  </motion.h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Internship & Training</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden lg:flex items-center space-x-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {currentNav.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    className="relative"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      to={item.href}
                      className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                        isActive 
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-800'
                      }`}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.icon className="h-4 w-4" />
                      </motion.div>
                      <span>{item.name}</span>
                      <AnimatedUnderline 
                        isActive={isActive} 
                        hoveredItem={hoveredItem} 
                        itemName={item.name} 
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            {/* Right Side */}
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'light' ? (
                    <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  ) : theme === 'dark' ? (
                    <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  ) : (
                    <Monitor className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  )}
                </motion.div>
              </motion.button>

              {isPublicRoute ? (
                <div className="hidden md:flex items-center space-x-3">
                  <MagneticButton>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-10 px-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300" 
                      asChild
                    >
                      <Link to="/login">Login</Link>
                    </Button>
                  </MagneticButton>
                  
                  <MagneticButton>
                    <Button 
                      className="h-10 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300" 
                      asChild
                    >
                      <Link to="/signup">
                        <span>Get Started</span>
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-3">
                  {/* Notifications */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="relative h-10 w-10 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                    >
                      <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      <motion.div
                        className="absolute -top-1 -right-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, delay: 0.5 }}
                      >
                        <Badge className="h-5 w-5 rounded-full p-0 text-xs bg-red-500 text-white border-2 border-white dark:border-slate-900">
                          3
                        </Badge>
                      </motion.div>
                    </Button>
                  </motion.div>

                  {/* User Menu */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          variant="ghost" 
                          className="relative h-10 w-10 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                            <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                              <User className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                        </Button>
                      </motion.div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="w-64 p-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-xl rounded-xl" 
                      align="end" 
                      forceMount
                    >
                      <DropdownMenuLabel className="font-normal p-3">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">Demo User</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            student@university.edu
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-gray-200 dark:bg-slate-700" />
                      <DropdownMenuItem className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer">
                        <User className="mr-3 h-4 w-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-900 dark:text-white">Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer">
                        <Settings className="mr-3 h-4 w-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-900 dark:text-white">Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-gray-200 dark:bg-slate-700" />
                      <DropdownMenuItem className="p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20 cursor-pointer text-red-600 dark:text-red-400">
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors lg:hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Open mobile menu"
              >
                <Menu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={currentNav}
        isPublicRoute={isPublicRoute}
      />
    </>
  );
};

export default Header;
