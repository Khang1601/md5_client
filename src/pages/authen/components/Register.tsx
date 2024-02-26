import { UserCreate } from "@/interfaces/user.interface";
import { api } from "@/services/apis";
import { Modal, message } from "antd";
import { MutableRefObject } from "react";
export default function Register({containerRef}: {
    containerRef: MutableRefObject<any>
}) {

    async function handleRegister(e: React.FormEvent) {
        e.preventDefault();
        try {
            let newUser: UserCreate = {
                userName: (e.target as any).userName.value,
                email: (e.target as any).email.value,
                password: (e.target as any).password.value,
                avatar: "https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png"
            }
            await api.userApi.register(newUser);
            Modal.success({
                title: "Thông Báo",
                content: "Tạo tài khoản thành công",
                onOk: () => {
                    containerRef.current.classList.remove("right-panel-active");
                }
            })
        }catch(err: any) {
            message.error(err?.response?.data?.message || "Loi server")
        }
    }
    
    return (
        <div className="form-container sign-up-container">
            <form onSubmit={(e: React.FormEvent) => {
                handleRegister(e)
            }}>
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#" className="social">
                        <i className="fab fa-google-plus-g" />
                    </a>
                    <a href="#" className="social">
                        <i className="fab fa-linkedin-in" />
                    </a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="User name" name="userName"/>
                <input type="email" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
