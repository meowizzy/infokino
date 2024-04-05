import {useContext, useState, memo, useCallback} from "react";
import PropTypes from "prop-types";
import {
    UIButton,
    UITextArea,
    UIAvatar,
    UILoader,
    UIErrorMsg,
    UISelect
} from "../UI";
import { AuthComponent } from "../AuthComponent";
import { ModalContext } from "@contexts";
import { setCommentFormData } from "@store/reducers/createCommentReducer";
import cn from "classnames";
import cls from './Comments.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction } from "../../store/reducers/createCommentReducer";

const Comments = (props) => {
    const {
        isLoading,
        data,
        error
    } = props;

    if (isLoading) {
        return (
            <UILoader />
        );
    }

    if (error) {
        return (
            <UIErrorMsg
                value={error}
            />
        )
    }

    if (!data?.length) {
        return (
            <UIErrorMsg
                value="Комментариев к этому фильму пока нет. Будьте первым, кто оставит комментарий."
            />
        );
    }

    return (
        <div className={cn(cls.list)}>
            {
                data?.map(comment => (
                    <Comments.Item
                        key={comment.id}
                        role={comment.reviewer?.role}
                        avatar={comment.reviewer?.avatar}
                        name={comment.reviewer?.name}
                        email={comment.reviewer?.email}
                        comment={comment?.comment}
                    />
                ))
            }
        </div>
    );
};

Comments.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.string
}

const Item = (props) => {
    const {
        className,
        avatar,
        name,
        email,
        comment,
        role
    } = props;


    return (
        <div className={cn(cls.commentItem, className)}>
            <div className={cls.info}>
                <UIAvatar
                    name={name}
                    email={email}
                    role={role}
                    avatar={avatar}
                    type="medium"
                    hasLink={false}
                />
            </div>
            <p className={cls.comment}>
                {comment}
            </p>
        </div>
    );
};


const ratingOptions = [
    {title: "Рекомендуемые", param: ''},
    {title: "По дате", param: 'year'},
    {title: "По рейтингу", param: 'rating.kp'}
];

const Form = (props) => {
    const {
        className,
        authData
    } = props;
    const { openModal } = useContext(ModalContext);
    const dispatch = useDispatch();
    const { isLoading, error, formData } = useSelector(state => state.createCommentReducer);
    const handleOpenModalClick = e => {
        e.preventDefault();
        openModal({
             content: <AuthComponent/>
        });
    };

    const onChangeComment = useCallback((value) => {
        dispatch(setCommentFormData({ ...formData, comment: value }));
    }, [dispatch, formData]);

    const onSubmitFormData = useCallback(() => {
        dispatch(createCommentAction());
    }, [dispatch]);

    const onSelectChange = () => {

    };

    // const onChangeCommentRating = useCallback((value) => {
    //    dispatch(setCommentFormData({ ...formData, rating: String(value) }));
    // }, [dispatch, formData]);

    if (!authData) {
        return (
            <div className={cls.noAuthForm}>
                <UIButton
                    type={"default"}
                    text="Авторизуйтесь,"
                    onClick={handleOpenModalClick}
                />
                <span>&nbsp;чтоб оставить комментарий</span>
            </div>
        );
    }

    return (
        <div className={cn(cls.form, className)}>
            <div className={cls.formField}>
                <UISelect
                    options={ratingOptions}
                    onChange={onSelectChange}
                />
            </div>
            <div className={cls.formField}>
                <UITextArea
                    value={formData?.comment}
                    onChange={onChangeComment}
                    placeholder="Комментарий"
                    inputStyle="large"
                    rows="7"
                    className={cls.field}
                />
            </div>
            <UIButton
                isLoading={isLoading}
                onClick={onSubmitFormData}
                type={"accent"}
                text="Оставить комментарий"
            />
        </div>
    );
};

Comments.Item = Item;
Comments.Form = Form;

Comments.Item.propTypes = {
    className: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    comment: PropTypes.string
}

Comments.Form.propTypes = {
    className: PropTypes.string,
    authData: PropTypes.object,
    isLoading: PropTypes.bool
}

export default Comments;
