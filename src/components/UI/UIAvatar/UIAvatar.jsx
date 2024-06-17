import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { ReactComponent as AvatarIcon } from "@public/images/avatarIcon.svg";
import { routesPath } from "@app/config/routes";
import UIButton from "../UIButton/UIButton";
import { ReactComponent as EditIcon } from "@public/images/edit2.svg";
import { ReactComponent as CloseIcon } from "@public/images/close.svg";
import { ReactComponent as SubmitIcon } from "@public/images/ok.svg";
import { setProfileAvatar } from "@store/reducers/auth/profileAvatarReducer";
import cn from "classnames";
import cls from "./UIAvatar.module.scss";


export const UIAvatar = memo((props) => {
    const {
        avatar,
        username,
        className,
        hasLink = true,
        type = "small",
        email,
        role,
        withUpload = false,
        withZoom = false
    } = props;
    const [editableAvatar, setEditableAvatar] = useState(null);
    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.profileAvatarReducer);

    const handleInputChange = (e) => {
        setEditableAvatar(e.target.files[0]);
    };

    const handleCancelAvatarSelect = () => {
        setEditableAvatar(null);
    };

    const handleSubmitAvatar = () => {
        dispatch(setProfileAvatar(editableAvatar));
        setEditableAvatar(null);
    };

    const avatarBtns = () => {
        if (!withUpload) return null;

        return (
            editableAvatar ? (
                <>
                    <UIButton
                        Icon={CloseIcon}
                        classes={cls.cancelBtn}
                        type="clear"
                        onClick={handleCancelAvatarSelect}
                    />
                    <UIButton
                        Icon={SubmitIcon}
                        classes={cls.submitBtn}
                        onClick={handleSubmitAvatar}
                        type="clear"
                    />
                </>
            ) : (
                <div className={cls.uploadBtnCont}>
                    <input
                        className={cls.uploadBtn}
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleInputChange}
                    />
                    <EditIcon />
                </div>
            )
        )
    }

    const image = avatar ?
        (withZoom ? (
            <Image
                width="100%"
                height="100%"
                src={avatar}
            />
        ) : (<img src={avatar} alt="avatar"/>)) : <AvatarIcon/>;

    const info = (
        <>
            <div className={cls.avatar_pic_wrapper}>
                <div className={withUpload ? cn(cls.avatar_pic, { [cls.isLoading]: isLoading }, cls[role]) : cn(cls.avatar_pic, cls[role])}>
                    {withUpload && editableAvatar ? (
                        <img src={URL.createObjectURL(editableAvatar)}/>
                    ) : (
                        image
                    )}
                </div>
                {avatarBtns()}
            </div>
            <div className={cls.avatar_info}>
                <span className={cls.avatar_name}>
                    {username}
                </span>
                { email ? <span className={cls.avatar_email}>{email}</span> : "" }
            </div>
        </>
    );

    let content;

    if (hasLink) {
        content = (
            <Link to={routesPath.PROFILE} className={cn(cls.avatar, { [cls.withLink]: hasLink })}>
                {info}
            </Link>
        );
    } else {
        content = (
            <div className={cls.avatar}>
                {info}
            </div>
        );
    }

    return (
        <div className={cn(cls.avatar_wrap, className, cls[type])}>
            {content}
        </div>
    );
});

export const UIAvatarLoader = memo((props) => {
    const {
        className
    } = props;

    return (
        <div className={cn(cls.loader, className)}></div>
    );
});