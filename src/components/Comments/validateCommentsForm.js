export const validateCommentsForm = (data) => {
    const errors = [];
    if (!data.comment) {
        errors.push("Комментарий не может быть пустым.");
    }

    if (!data.rating) {
        errors.push("Поставьте оценку!");
    }

    return errors.join("%");
};