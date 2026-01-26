import { useState } from "react";
import type { LoginPageProps } from "./login.type";

export default function LoginPage({ switchToRegister }: LoginPageProps) {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!account || !password) {
            setError("Vui lòng nhập đầy đủ thông tin.");
            return;
        }

        setError(null);

        const payload = {
            account,
            password,
        };

        console.log("LOGIN DATA:", payload);
        //  API login 
    };

    return (
        <div className="w-[400px]">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-md p-6 rounded-xl shadow-md"
            >
                <h1 className="text-2xl font-semibold text-center mb-6">
                    Đăng nhập
                </h1>

                <div className="mb-4">
                    <label className="block text-sm mb-1">Email hoặc Username</label>
                    <input
                        type="text"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                        placeholder="Nhập email hoặc username"
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                    />
                </div>

                <div className="mb-3">
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

                {error && (
                    <p className="text-red-500 text-sm mb-3">{error}</p>
                )}

                <div className="text-right mb-4">
                    <button type="button" className="text-sm text-orange-500 hover:underline">
                        Quên mật khẩu?
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition"
                >
                    Đăng nhập
                </button>

                <p className="text-center text-sm mt-4">
                    Chưa có tài khoản?{" "}
                    <span className="text-orange-500 cursor-pointer hover:underline" onClick={switchToRegister}>
                        Đăng ký ngay
                    </span>
                </p>
            </form>
        </div>
    );
}
