const ERROR_CODS = {
    EMAIL_NOT_FOUND: 'Пользователь с таким email не найден',
    INVALID_PASSWORD: 'Не верный пароль',
    auth: 'Войдите в систему'
}

export function error(code) {
    return ERROR_CODS[code] ? ERROR_CODS[code] : 'Пользователь не найден';
}