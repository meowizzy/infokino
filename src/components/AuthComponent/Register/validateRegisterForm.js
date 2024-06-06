export const validateRegisterForm = (data) => {
    const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const {
        username,
        email,
        password,
    } = data;
    const errors = [];

    if (!username && !email && !password) {
        return "Заполните все обязательные поля!";
    }

    if (!username) {
        errors.push("Поле \"Имя\" обязательно для заполнения!");
    }
    if (!email) {
        errors.push("Поле \"Email\" обязательно для заполнения!");
    } else if (!emailRegexp.test(email)) {
        errors.push("Некорректный Email!");
    }

    if (!password) {
        errors.push("Поле \"Пароль\" обязательно для заполнения!");
    }

    return errors.join("%");
};