export const validateLoginForm = (data) => {
    const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const {
        email,
        password,
    } = data;
    const errors = [];

    if (!email && !password) {
        return "Email и пароль не должны быть пустыми";
    }

    if (!email) {
        errors.push("Поле \"Email\" обязательно для заполнения!");
    } else if (!emailRegexp.test(email)) {
        errors.push("Введите корректный email!");
    }

    if (!password) {
        errors.push("Поле \"Пароль\" обязательно для заполнения!");
    }

    return errors.join("%");
};