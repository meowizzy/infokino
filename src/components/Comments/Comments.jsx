import PropTypes from "prop-types";
import { useContext, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useClickOutside } from "@hooks/useClickOutside";
import { Rate } from "antd";
import { ModalContext } from "@contexts";
import { setCommentFormData, createUpdateCommentAction, clearCommentForm } from "@store/reducers/reviews/createUpdateCommentReducer";
import { deleteCommentAction } from "@store/reducers/reviews/commentsReducer";
import { AuthComponent } from "../AuthComponent";
import { WithPermission } from "@hoc/WithPermission";
import {
    UIButton,
    UITextArea,
    UIAvatar,
    UILoader,
    UIErrorMsg,
} from "../UI";
import { ReactComponent as DotsIcon } from "@public/images/dots.svg";
import { ReactComponent as DeleteIcon } from "@public/images/delete.svg";
import { ReactComponent as EditIcon } from "@public/images/edit.svg";
import cn from "classnames";
import cls from './Comments.module.scss';


const Comments = (props) => {
    const {
        isLoading,
        data,
        authData,
        error
    } = props;
    const [reviewIsEditing, setReviewIsEditing] = useState(false);

    const dispatch = useDispatch();
    const listRef = useRef();

    const onCreateUpdateComment = () => {
        dispatch(createUpdateCommentAction({ reviewIsEditing, setReviewIsEditing }));

        if (!reviewIsEditing) {
            if (listRef.current) {
                listRef.current.scrollTop = 0;
            }
        }
    };

    const onDeleteComment = useCallback((id) => {
        dispatch(deleteCommentAction(id));
    }, [dispatch]);

    const onEditComment = (payload) => {
        setReviewIsEditing(true);
        dispatch(setCommentFormData(payload));
    };

    /*const onLoadMoreComments = () => {
        dispatch(fetchFilmCommentsAction());
    };*/

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

    let content;

    if (!data?.length) {
        content = (
            <UIErrorMsg
                value="Комментариев к этому фильму пока нет. Будьте первым, кто оставит комментарий."
            />
        );
    } else {
        content = (
            <div className={cls.listWrap}>
                <div className={cn(cls.list)} ref={listRef}>
                    {data?.map(comment => (
                        <Comments.Item
                            key={comment._id}
                            data={comment}
                            onEditComment={() => onEditComment({
                                id: comment._id,
                                comment: comment.comment,
                                rating: comment.rating
                            })}
                            onDeleteComment={() => onDeleteComment(comment._id)}
                        />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <>
            {content}
            <Comments.Form
                authData={authData}
                reviewIsEditing={reviewIsEditing}
                setReviewIsEditing={setReviewIsEditing}
                onCreateUpdateComment={onCreateUpdateComment}
            />
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
        className,
        data,
        onEditComment,
        onDeleteComment
    } = props;
    const [isDropdownVisible, setIsDropDownVisible] = useState(false);
    const dropDownRef = useClickOutside(setIsDropDownVisible);

    const onToggleDropdown = () => setIsDropDownVisible(!isDropdownVisible);

    const handleOnEditCommentClick = () => {
        setIsDropDownVisible(false);
        onEditComment();
    }

    return (
        <div className={cn(cls.commentItem, className)}>
            <div className={cls.info}>
                <UIAvatar
                    username={data?.username}
                    role={data?.role}
                    email={new Date(data?.createdAt).toLocaleString()}
                    avatar={data?.avatar}
                    type="medium"
                    hasLink={false}
                />
                <WithPermission>
                    <div className={cls.dropDown} ref={dropDownRef}>
                        <div className={cn(cls.dropDownTrigger, {[cls.active]: isDropdownVisible})} onClick={onToggleDropdown}>
                            <DotsIcon />
                        </div>
                        <div className={cn(cls.dropDownList, {[cls.visible]: isDropdownVisible})}>
                            <UIButton
                                Icon={EditIcon}
                                classes={cls.editBtn}
                                type={"primary"}
                                text="Редактировать"
                                onClick={handleOnEditCommentClick}
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
                {data?.rating ? (
                    <div className={cls.commentRate}>
                        <span className={cls.formFieldLabel}>Оценка: </span>
                        <Rate disabled allowHalf defaultValue={Number(data?.rating)}/>
                    </div>
                ) : ""}
                <p>{data?.comment}</p>
            </div>
        </div>
    );
};

const Form = (props) => {
    const {
        className,
        authData,
        onCreateUpdateComment,
        setReviewIsEditing,
        reviewIsEditing
    } = props;
    const { openModal } = useContext(ModalContext);
    const dispatch = useDispatch();
    const { isLoading, error, formData } = useSelector(state => state.createUpdateCommentReducer);
    const handleOpenModalClick = (e) => {
        e.preventDefault();
        openModal({
             content: <AuthComponent/>
        });
    };

    const onChangeComment = useCallback((value) => {
        dispatch(setCommentFormData({ ...formData, comment: value }));
    }, [dispatch, formData]);

    const onChangeCommentRating = (value) => {
        dispatch(setCommentFormData({ ...formData, rating: value }));
    };

    const onClearCommentForm = () => {
        dispatch(clearCommentForm());
        setReviewIsEditing(false);
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
                    disabled={reviewIsEditing}
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
            {reviewIsEditing ? (
                <div className={cls.updateBtns}>
                    <UIButton
                        isLoading={isLoading}
                        onClick={onCreateUpdateComment}
                        type="accent"
                        text="Сохранить"
                    />
                    <UIButton
                        onClick={onClearCommentForm}
                        type="primary"
                        text="Отмена"
                    />
                </div>
            ) : (
                <UIButton
                    isLoading={isLoading}
                    onClick={onCreateUpdateComment}
                    type={"accent"}
                    text="Оставить комментарий"
                />
            )}
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
