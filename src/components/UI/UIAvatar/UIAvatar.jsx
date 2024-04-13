import {memo, useCallback, useState} from "react";
import { Link } from "react-router-dom";
import cls from "./UIAvatar.module.scss";
import cn from "classnames";
import { routesPath } from "../../../api/routes";
import { rolesTranslation } from "@api/roles";
import { ReactComponent as AvatarIcon } from "@public/images/avatarIcon.svg";
import { Image } from "antd";

export const UIAvatar = memo((props) => {
    const {
        avatar,
        name,
        className,
        hasLink = true,
        type = "small",
        email,
        role,
        withZoom = false
    } = props;
    const [isValidImg, setIsValidImg] = useState(true);

    const onImgError = useCallback(() => {
        setIsValidImg(false);
    }, []);

    let content;
    let image = isValidImg ? withZoom ? 
            <Image 
                width="100%" 
                height="100%" 
                src={avatar}
            /> : <img src={avatar} alt="avatar" onError={onImgError}/> : <AvatarIcon/>;
    let info = (
        <>
            <div className={cls.avatar_pic}>
                {image}
            </div>
            <div className={cls.avatar_info}>
                <span className={cls.avatar_name}>
                    {name}{role ? ` - ${rolesTranslation[role]}` : ""}
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