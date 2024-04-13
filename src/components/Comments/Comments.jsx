import {useContext, useRef, useCallback, useEffect, useState} from "react";
import { Rate } from "antd";
import PropTypes from "prop-types";
import { AuthComponent } from "../AuthComponent";
import { ModalContext } from "@contexts";
import { setCommentFormData } from "@store/reducers/createCommentReducer";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction } from "../../store/reducers/createCommentReducer";
import { fetchFilmCommentsAction, deleteCommentAction } from "../../store/reducers/commentsReducer";
import {
    UIButton,
    UITextArea,
    UIAvatar,
    UILoader,
    UIErrorMsg,
} from "../UI";
import { WithPermission } from "@hoc/WithPermission"; 
import { ReactComponent as DotsIcon } from "@public/images/dots.svg";
import { ReactComponent as DeleteIcon } from "@public/images/delete.svg";
import { ReactComponent as EditIcon } from "@public/images/edit.svg";
import cn from "classnames";
import cls from './Comments.module.scss';

const Comments = (props) => {
    const {
        isLoading,
        data,
        error
    } = props;
    const dispatch = useDispatch();
    const listRef = useRef();

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = 0;
        }
    }, [data]);

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

    const onLoadMoreComments = () => {
        dispatch(fetchFilmCommentsAction());
    };

    return (
        <>
            <div className={cls.listWrap}>
                <div className={cn(cls.list)} ref={listRef}>
                    {
                        
                        data?.map(comment => (
                            <Comments.Item
                                key={comment.id}
                                id={comment?.id}
                                role={comment.reviewer?.role}
                                rating={comment?.rating}
                                avatar={comment.reviewer?.avatar}
                                name={comment.reviewer?.name}
                                email={comment.reviewer?.email}
                                comment={comment?.comment}
                            />
                        ))
                    }
                </div>
            </div>
        </>
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
        id,
        className,
        avatar,
        name,
        rating,
        email,
        comment,
        role
    } = props;
    const dispatch = useDispatch();

    const onEditComment = useCallback(() => {
        
    }, []);

    const onDeleteComment = useCallback(() => {
        console.log(id);
        dispatch(deleteCommentAction(id));
    }, []);


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
                <WithPermission>
                    <div className={cls.dropDown}>
                        <div className={cls.dropDownTrigger}>
                            <DotsIcon />
                        </div>
                        <div className={cls.dropDownList}>
                            <UIButton
                                Icon={EditIcon}
                                classes={cls.editBtn}
                                type={"primary"}
                                text="Редактировать"
                                onClick={onEditComment}
                            />
                            <UIButton
                                Icon={DeleteIcon}
                                classes={cls.deleteBtn}
                                type={"primary"}
                                text="Удалить"
                                onClick={onDeleteComment}
                            />
                        </div>
                    </div>
                </WithPermission>
            </div>
            <div className={cls.comment}>
                {
                    rating ?
                    <div className={cls.commentRate}>
                        <span className={cls.formFieldLabel}>Оценка: </span>
                        <Rate disabled allowHalf defaultValue={Number(rating)}/>
                    </div> : ""
                }
                <p>{comment}</p>
            </div>
        </div>
    );
};

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

    const onChangeCommentRating = (value) => {
        dispatch(setCommentFormData({ ...formData, rating: String(value) }));
    };

    if (!authData) {
        return (
            <div className={cls.noAuthForm}>
                <UIButton
                    classes={cls.noAuthButton}
                    type={"default"}
                    text="Авторизуйтесь,"
                    onClick={handleOpenModalClick}
                />
                <span>&nbsp;чтобы оставить комментарий</span>
            </div>
        );
    }

    return (
        <div className={cn(cls.form, className)}>
            {error && error.map(err => (
                <div key={err} className={cn(cls.formField, cls.formFieldError)}>
                    <UIErrorMsg value={err}/>  
                </div>
            ))}
            
            <div className={cn(cls.formField, cls.rateField)}>
                <span className={cls.formFieldLabel}>Оценка: </span>
                <Rate  
                    allowHalf
                    value={Number(formData?.rating)}
                    onChange={onChangeCommentRating}
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
