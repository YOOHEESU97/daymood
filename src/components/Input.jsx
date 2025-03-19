export default function Input({ label, type = "text", placeholder, value, onChange, className = "" }) {
    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        {label && <label className="text-gray-700 font-medium">{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
  