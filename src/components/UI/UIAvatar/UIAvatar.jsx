import {memo, useCallback, useState} from "react";
import { Link } from "react-router-dom";
import cls from "./UIAvatar.module.scss";
import cn from "classnames";
import { routesPath } from "../../../api/routes";
import { roles } from "@pages/Profile/ProfileCard/ProfileCard";
import { ReactComponent as AvatarIcon } from "@public/images/avatarIcon.svg";

export const UIAvatar = memo((props) => {
    const {
        avatar,
        name,
        className,
        hasLink = true,
        type = "small",
        email,
        role
    } = props;
    const [isValidImg, setIsValidImg] = useState(true);

    const onImgError = useCallback(() => {
        setIsValidImg(false);
    }, []);

    let content;
    let info = (
        <>
            <div className={cls.avatar_pic}>
                {
                    isValidImg ? <img src={avatar} alt="avatar" onError={onImgError}/> : <AvatarIcon/>
                }
            </div>
            <div className={cls.avatar_info}>
                <span className={cls.avatar_name}>
                    {name}{role ? ` - ${roles[role]}` : ""}
                </span>
                { email ? <span className={cls.avatar_email}>{email}</span> : "" }
            </div>
        </>
    );

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