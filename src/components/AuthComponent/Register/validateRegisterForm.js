export const validateRegisterForm = (data) => {
    const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const urlRegexp = new RegExp('^http[s]?:\\/\\/[a-zA-Z\\d.-]+[:]?[\\d]{0,4}[\\/]?[a-zA-Z\\d\\/-]+');
    const {
        name,
        email,
        password,
        avatar
    } = data;
    const errors = [];

    if (!name && !email && !password && !avatar) {
        return "Заполните все обязательные поля!";
    }

    if (!name) {
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

    if (!avatar) {
        errors.push("Поле \"Аватар\" обязательно для заполнения!");
    } else if (!urlRegexp.test(avatar)) {
        errors.push("Поле \"Аватар\" должен состоять из url изображения!");
    }

    return errors.join("%");
};