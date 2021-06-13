import { useField, useForm } from "vee-validate";
import * as yup from 'yup'

export function useRequestForm(fn) {
    const MIN_AMOUNT = 0;
    const valYup = { 
        name: yup.string().required('Введите ФИО'),
        phone: yup.string().trim().required('Введите номер телефона'),
        amount: yup.string().trim().required('Введите сумму').min(MIN_AMOUNT, `Сумма не может быть меньше ${MIN_AMOUNT}`),
    }

    const { isSubmitting, handleSubmit } = useForm({
        initialValues: {
            status: 'active'
        }
    });

    const { value: name, errorMessage: nError, handleBlur: nBlur } = useField('name', valYup.name),
    { value: phone, errorMessage: pError, handleBlur: pBlur } = useField('phone', valYup.phone),
    { value: amount, errorMessage: aError, handleBlur: aBlur } = useField('amount', valYup.amount),
    { value: status } = useField('status');

    const onSubmit = handleSubmit(fn);

    return {
        status,
        isSubmitting,
        onSubmit,
        name,
        nError,
        nBlur,
        phone,
        pError,
        pBlur,
        amount,
        aError,
        aBlur
    }
}