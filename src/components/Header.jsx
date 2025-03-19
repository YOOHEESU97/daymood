import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-2 flex justify-between items-center h-14">
      {/* 로고 */}
      <div className="flex items-center mt-6">
        <img src={logo} alt="DayMood Logo" className="px-0 py-3 h-44 object-contain" />
      </div>

      {/* 네비게이션 */}
      <nav>
        <ul className="flex gap-6 text-gray-600 text-lg font-medium">
          <li>
            <a href="#" className="hover:text-blue-500 transition">홈</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition">일기</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition">소개</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
