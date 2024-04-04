import { useContext, useState } from "react";
import PropTypes from "prop-types";
import {
    UIButton,
    UITextArea,
    UIAvatar,
    UILoader,
    UIErrorMsg
} from "../UI";
import { AuthComponent } from "../AuthComponent";
import { ModalContext } from "@contexts";
import cn from "classnames";
import cls from './Comments.module.scss';

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
            <UIErrorMsg value={error}/>
        )
    }

    return (
        <div className={cn(cls.list)}>
            {
                data.map(comment => (
                    <Comments.Item
                        avatar={comment?.avatar}
                        name={comment?.name}
                        email={comment?.email}
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
        comment
    } = props;

    return (
        <div className={cn(cls.commentItem, className)}>
            <div className={cls.info}>
                <UIAvatar
                    name={name}
                    email={email}
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



const Form = (props) => {
    const {
        className,
        authData,
        isLoading,
    } = props;
    const [value, setValue] = useState();
    const { openModal } = useContext(ModalContext);

    const handleOpenModalClick = e => {
        e.preventDefault();
        openModal({
             content: <AuthComponent/>
        });
   };

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
                <UITextArea
                    value={value}
                    onChange={setValue}
                    placeholder="Комментарий"
                    inputStyle="large"
                    rows="7"
                    className={cls.field}
                />
            </div>
            <UIButton
                isLoading={isLoading}
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
