import React from "react";
import { Validation } from "../utils";
import app from '../configs/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const useSignIn = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState({})

    const validateCredential = () => {
        setError({})
        if (!Validation.email.test(email)) {
            setError({ ...error, email: "Email is invalid" })
            return false;
        }
        if (password.length < 6) {
            setError({ ...error, password: "Password is invalid" })
            return false;
        }

        return true;
    }

    const signIn = async () => {
        const isValid = validateCredential()
        if (!isValid) return Promise.reject();
        const auth = getAuth(app);

        return await signInWithEmailAndPassword(auth, email, password).then((data) => {
            console.log(data);
        });

    }

    const handleChange = (key, value) => {
        if (key === "email") {
            setError({ ...error, email: "" })
            setEmail(value)
            return;
        }
        setError({ ...error, password: "" })
        setPassword(value)
    }

    return [{ email, password }, error, handleChange, signIn]
}

export default useSignIn