export const validateCommentsList = (e) => {
    const statusCode = e?.response?.status;

    if (statusCode === 404) {
        return "Комментариев к этому фильму пока нет, будьте первым кто оставит комментарий."
    }

    return e.message;
}