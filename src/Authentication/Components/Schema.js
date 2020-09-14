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

export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
});

export const CheckCodeSchema = Yup.object().shape({
    code: Yup.string()
        .matches(/\d\d\d\d/, "4자리 입력해주세요.")
        .required("코드를 입력해주세요."),
});

export const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Too Short!")
        .max(20, "Too Long!")
        .required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords don't match")
        .required("Confirm Password is required"),
});
