import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .min(8, "Too Short!")
        .max(20, "Too Long!")
        .required("Required"),
});

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, "Too Short!")
        .max(20, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .min(8, "Too Short!")
        .max(20, "Too Long!")
        .required("Required"),
});

export const ForgotPassword = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
});
