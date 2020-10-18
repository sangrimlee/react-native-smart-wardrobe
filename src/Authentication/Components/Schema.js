import * as Yup from 'yup';

const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('올바른 이메일 형식이 아닙니다.')
    .required('이메일을 입력해주세요.'),
  password: Yup.string()
    .matches(
      passwordRule,
      '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
    )
    .required('비밀번호를 입력해주세요.'),
});

export const SignupSchema = Yup.object().shape({
  name: Yup.string().required('이름을 입력해주세요.'),
  email: Yup.string()
    .email('올바른 이메일 형식이 아닙니다.')
    .required('이메일을 입력해주세요.'),
  password: Yup.string()
    .matches(
      passwordRule,
      '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
    )
    .required('비밀번호를 입력해주세요.'),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('올바른 이메일 형식이 아닙니다.')
    .required('이메일을 입력해주세요.'),
});

export const CheckCodeSchema = Yup.object().shape({
  code: Yup.string()
    .matches(/\d\d\d\d/, '4자리 입력해주세요.')
    .required('코드를 입력해주세요.'),
});

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .matches(
      passwordRule,
      '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
    )
    .required('비밀번호를 입력해주세요.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
    .required('다시 한 번 비밀번호를 입력해주세요.'),
});
