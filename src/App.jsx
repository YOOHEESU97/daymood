import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Input from "./components/Input";

import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-6 text-center">
        <h2 className="text-xl font-semibold">회원 가입</h2>
        <p className="text-gray-600 mb-4">정보를 입력해주세요.</p>

        <div className="max-w-md mx-auto space-y-4">
          <Input
            label="이름"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            label="이메일"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={() => alert(`이름: ${name}, 이메일: ${email}`)}>제출</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
