import "./auth.scss";
import { useState } from "react";
import LoginPage from "./login/login";
import RegisterPage from "./resgister/resgister";

export default function AuthPage() {
    const [mode, setMode] = useState<"login" | "register">("login");
    return (
        <>
            <div className=" bg-auth min-h-[80vh] items-center justify-center flex ">
                {mode === "login" ? (
                    <LoginPage switchToRegister={() => setMode("register")}/>
                ) : (
                    <RegisterPage switchToLogin={()=> setMode("login")}/>
                )}
            </div>
        </>

    );
}