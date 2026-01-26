import { useState } from "react";
import { RegisterPageProps } from "./register.type";

export default function RegisterPage({ switchToLogin }: RegisterPageProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setError("Vui lòng nhập đầy đủ thông tin.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Mật khẩu xác nhận không khớp.");
            return;
        }

        setError(null);

        const payload = {
            email,
            password,
        };

        console.log("REGISTER DATA:", payload);
        //   API register 
    };

    return (
        <div className="min-w-[400px]">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-md p-6 rounded-xl shadow-md"
            >
                <h1 className="text-2xl font-semibold text-center mb-6">
                    Đăng ký
                </h1>

                <div className="mb-4">
                    <label className="block text-sm mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập email"
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm mb-1">Mật khẩu</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Nhập mật khẩu"
                            className="w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:border-orange-500"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2.5 text-sm cursor-pointer text-gray-500 select-none"
                        >
                            {showPassword ? "Ẩn" : "Hiện"}
                        </span>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="block text-sm mb-1">Xác nhận mật khẩu</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Nhập lại mật khẩu"
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                    />
                </div>

                {error && (
                    <p className="text-red-500 text-sm mb-3">{error}</p>
                )}

                <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition"
                >
                    Tạo tài khoản
                </button>

                <p className="text-center text-sm mt-4">
                    Đã có tài khoản?{" "}
                    <span
                        onClick={switchToLogin}
                        className="text-orange-500 cursor-pointer hover:underline"
                    >
                        Đăng nhập
                    </span>
                </p>
            </form>
        </div>
    );
}
