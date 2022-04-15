import React from 'react';
import { Validation } from "../util";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const useSignUp = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState({})

    const validateCredential = () => {
        if (!Validation.email.test(email)) {
            setError({ ...error, email: "Email is invalid!" })
            return false;
        }
        if (password.length < 6) {
            setError({ ...error, password: "Password must be at least 6 characters!" })
            return false;
        }
        if (confirmPassword !== password) {
            setError({ ...error, password: "Password does not match!", confirmPassword: "Password does not match!" })
            return false;
        }

        setError({});
        return true;
    }

    const createUser = async (uid) => {
        return database().ref('users/' + uid).set({
            name: "",
            dob: "",
            gender: "",
            phone: "",
            idCard: "",
            email: email,
            address: {
                province: "",
                city: "",
                commune: "",
                details: ""
            }
        })
    }

    const signUp = async () => {
        const isValid = validateCredential();
        if (!isValid) return Promise.reject();
        const { user } = await auth().createUserWithEmailAndPassword(email, password);
        return createUser(user.uid);
    }

    const handleChange = (key, value) => {
        if (key === "email") {
            setError({ ...error, email: "" })
            setEmail(value)
            return;
        }

        if (key === "password") {
            setError({ ...error, password: "" })
            setPassword(value)
            return;
        }

        setError({ ...error, confirmPassword: "" })
        setConfirmPassword(value)
    }

    return [{ email, password, confirmPassword }, error, handleChange, signUp]
}

export default useSignUp;