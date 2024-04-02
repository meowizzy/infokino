import cn from "classnames";
import cls from "./UIErrorMsg.module.scss";
import { memo } from "react";

const UIErrorMsg = (props) => {
    const {
        className,
        value
    } = props;
    return <p className={cn(cls.error, className)}>{value}</p>
};

export default memo(UIErrorMsg);