import { useContext, useState } from "react";
import cn from "classnames";
import styles from './Comments.module.scss';
import { UIButton, UITextArea, UIAvatar } from "../UI";
import { AuthComponent } from "../AuthComponent";
import { ModalContext } from "@contexts";

const Comments = () => {
    return <></>;
};

const Item = (props) => {
    const {
        className,
        avatar,
        name,
        email,
        comment
    } = props;

    return (
        <div className={cn(styles.commentItem, className)}>
            <div className={styles.info}>
                <UIAvatar 
                    name={name}
                    email={email}
                    avatar={avatar}
                    type="medium"
                    hasLink={false}
                />  
            </div>
            <p className={styles.comment}>
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
            <div className={styles.noAuthForm}>
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
        <div className={cn(styles.form, className)}>
            <div className={styles.formField}>
                <UITextArea 
                    value={value}
                    onChange={setValue}
                    placeholder="Комментарий"
                    inputStyle="large"
                    rows="7"
                    className={styles.field}
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

export default Comments;
