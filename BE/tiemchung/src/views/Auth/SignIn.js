import React from "react";
import { ErrorMessage } from '@atlaskit/form';
import { TextField, Button } from "../../components";
import { useSignIn } from "../../hooks";
import "./styles.css";
import AppHeader from "../header";
import AppFooter from "./../footer";


const SignIn = () => {
    const [credential, error, handleChange, signIn] = useSignIn();

    return (
        <>
            <AppHeader></AppHeader>
            <div id="app-login">
                <div className="login-form">
                    <h2>Đăng nhập</h2>
                    <div className="form-elements">
                        <label>Email:</label>
                        <TextField
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Vui lòng nhập email"
                            value={credential.email}
                            onChange={(event) => handleChange("email", event.target.value)}
                            isRequired
                        ></TextField>
                        {!error.email ? null : (<ErrorMessage>{error.email}</ErrorMessage>)}
                    </div>
                    <div className="form-elements">
                        <label>Password:</label>
                        <TextField
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="Vui lòng nhập mật khẩu"
                            value={credential.password}
                            onChange={(event) => handleChange("password", event.target.value)}
                            isRequired
                        ></TextField>
                        {!error.password ? null : (<ErrorMessage>{error.password}</ErrorMessage>)}
                    </div>
                    <div className="form-elements">
                        <Button appearance="subtle" className="form-button">
                            Cancel
                        </Button>
                        <Button
                            appearance="primary"
                            type="submit"
                            className="form-button"
                            onClick={signIn}
                        >
                            Đăng nhập
                        </Button>
                    </div>
                </div>
            </div>
            <AppFooter></AppFooter>
        </>
    );
};

export default SignIn;
