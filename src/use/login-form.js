import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useLoginForm() {
    const { handleSubmit, isSubmitting } = useForm(),
    store = useStore(),
    router = useRouter();
        
    const MIN_PASSWORD = 6;
    const valYup = { 
        email: yup
            .string()
            .trim()
            .required('Пожалуйста, заполните электронную почту.')
            .email('Пожалуйста, проверьте, правильно ли указан адрес электронной почты.'),
        password: yup
            .string()
            .trim()
            .required('Пожалуйста, введите ваш пароль.')
            .min(MIN_PASSWORD, `Пароль не может быть меньше ${MIN_PASSWORD} символов`)
    }

    const { value: email, errorMessage: eError, handleBlur: eBlur } = useField('email', valYup.email),
    { value: password, errorMessage: pError, handleBlur: pBlur } = useField('password', valYup.password);

    const onSubmit = handleSubmit( async val => {
        await store.dispatch('auth/login', val);
        router.push('/');
    });
    
    return {
        email,
        eError,
        eBlur,
        password,
        pError,
        pBlur,
        onSubmit,
        isSubmitting
    }
}