import cls from "./UIRole.module.scss";
import cn from "classnames";

export const UIRole = (props) => {
    const {
        role,
        children,
        className,
    } = props;

    return (
        <div className={cn(cls.flag, className, cls[role])}>
            {children}
        </div>
    )
};