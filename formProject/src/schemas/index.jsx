import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email:yup
    .string()
    .email('Geçerli bir email giriniz.')
    .required('Email alanı zorunludur.'),

    age:yup
    .number()
    .positive('Yaş değeri pozitif olmalıdır.')
    .integer('Yaşınızı tam sayı olarak giriniz.')
    .required('Yaş alanı zorunludur.'),

    password:yup
    .string()
    .min(5,'Şifre minimum 5 karakter olmalıdır.')
    .matches(passwordRules,{
        message: 'Şifre en az 1 büyük harf, 1 küçük harf ve 1 sayı içermelidir.'
    })
    .required('Şifre alanı zorunludur.'),

    confirmPassword:yup
    .string()
    .oneOf([yup.ref('password')], 'Şifreler eşleşmiyor.')
    .required('Şifre Tekrar alanı zorunludur.')

});