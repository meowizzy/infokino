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
        type = "small"
    } = props;

    let content;

    if (hasLink) {
        content = (
            <Link to={routesPath.PROFILE} className={cn(cls.avatar, { [cls.withLink]: hasLink })}>
                <div className={cls.avatar_pic}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <span className={cls.avatar_name}>{name}</span>
            </Link>
        );
    } else {
        content = (
            <div className={cls.avatar}>
                <div className={cls.avatar_pic}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <span className={cls.avatar_name}>{name}</span>
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