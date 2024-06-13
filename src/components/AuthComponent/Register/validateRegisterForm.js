export const validateRegisterForm = (data) => {
    const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const passwordHasNumberRegExp = /\D/g;

    const {
        username,
        email,
        confirmPassword,
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
    } else if (!emailRegExp.test(email)) {
        errors.push("Некорректный Email!");
    }

    if (!password) {
        errors.push("Поле \"Пароль\" обязательно для заполнения!");
    }

    if (!confirmPassword || confirmPassword !== password) {
        errors.push("Пароли не совпадают!");
    }

    if (password.length < 9) {
        errors.push("Пароль должен состоять не менее чем из 9 символов!");
    }

    if (!passwordHasNumberRegExp.test(password)) {
        errors.push("Пароль должен иметь хотя бы одну цифру!");
    }

    return errors.join("%");
};