import { memo } from "react";
import { Link } from "react-router-dom";
import cls from "./UIAvatar.module.scss";
import cn from "classnames";
import { routesPath } from "../../../api/routes";

export const UIAvatar = memo((props) => {
    const {
        avatar,
        name,
        className,
        hasLink = true,
        type = "small",
        email
    } = props;

    let content;
    let info = (
        <>
            <div className={cls.avatar_pic}>
                <img src={avatar} alt="avatar"/>
            </div>
            <div className={cls.avatar_info}>
                <span className={cls.avatar_name}>{name}</span>
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