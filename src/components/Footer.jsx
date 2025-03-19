export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} DayMood. All rights reserved.
        </p>
      </footer>
    );
  }
  