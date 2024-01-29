import { api } from "@/services/apis";
import React, { useState } from "react";
import utils from '@utils/index'
import { Spin, Modal } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { User } from "firebase/auth";

interface UserGoogle extends User {
    accessToken: string;
}

export default function Login() {
    const [load, setLoad] = useState(false);
    return (
        <div className="form-container sign-in-container">
            <form onSubmit={async (e: React.FormEvent) => {
                e.preventDefault();
                try {
                    let data = {
                        loginId: (e.target as any).loginId.value,
                        password: (e.target as any).password.value
                    }
                    let res = await api.userApi.login(data)
                    localStorage.setItem("token", res.data.token)
                    Modal.success({
                        title: "Thông báo",
                        content: "Dang nhap thanh cong, comeback homepage",
                        onOk: () => {
                            window.location.href = "/"
                        }
                    })
                } catch (err: any) {
                    Modal.warning({
                        title: "Thông báo",
                        content: err?.response?.data?.message
                    })
                }
            }}>
                <h1>Sign in</h1>
                <div className="social-container">
                    <a href="#" className="social">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a onClick={async () => {
                        try {
                            if(load) return
                            setLoad(true)
                            let googleRes = await utils.firebase.handleLoginWithGoogle()
                            let result = await  api.userApi.loginGoogle({
                                token: (googleRes.user as UserGoogle).accessToken
                            })
                            localStorage.setItem("token", result.data.token)
                            Modal.success({
                                title: "Thông báo",
                                content: "Dang nhap thanh cong, comeback homepage",
                                onOk: () => {
                                    window.location.href = "/"
                                }
                            })
                            setLoad(false)
                        } catch (err) {
                            console.log("err", err)
                            setLoad(false)
                            Modal.error({
                                title: "Thông báo",
                                content: "Đăng nhập với google phát sinh vấn đề, vui lòng thử lại."
                            })
                        }
                    }} className="social">
                        <i className="fab fa-google-plus-g" />
                    </a>
                    <a href="#" className="social">
                        <i className="fab fa-linkedin-in" />
                    </a>
                </div>
                <span>or use your account</span>
                <input type="text" placeholder="Email" name="loginId" />
                <input type="password" placeholder="Password" name="password" />
                <a href="#">Forgot your password?</a>
                <div className="div_btn_load_box">
                    <button type="submit">Sign In</button>
                    {
                        load && (
                            <div className="btn_box">
                                <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                            </div>
                        )
                    }
                </div>
            </form>
        </div>
    )
}
