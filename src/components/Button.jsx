export default function Button({ children, onClick, variant = "primary", className = "" }) {
    const baseStyles = "px-4 py-2 rounded-lg font-semibold transition duration-300";
    const variants = {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
      danger: "bg-red-500 text-white hover:bg-red-600",
    };
  
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${className}`} 
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  