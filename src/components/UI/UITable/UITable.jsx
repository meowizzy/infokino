import cn from "classnames";
import cls from "./UITable.module.scss";
import UILoader from "../UILoader/UILoader";
import UITitle from "../UITitle/UITitle";

const UITable = (props) => {
    const {
        children,
        className
    } = props;

    return (
        <div className={cn(cls.table, className)}>
            {children}
        </div>
    );
};

const Row = (props) => {
    const {
        children,
        className,
        rowLoading
    } = props;

    return (
        <div className={cn(cls.tableRow, className, { [cls.isLoading]: rowLoading })}>
            {children}
        </div>
    );
};

const Cell = (props) => {
    const {
        children,
        className,
        width
    } = props;

    return (
        <div className={cn(cls.tableCell, className)} style={{ maxWidth: width }}>
            {children}
        </div>
    )
};

const Body = (props) => {
    const {
        children,
        className,
        loading,
        empty
    } = props;

    if (loading) {
        return <UILoader />;
    }

    if (empty) {
        return (
            <UITitle
                classes={cls.tableEmpty}
                title="Нет данных"
                type="title-m"
            />
        )
    }

    return (
        <div className={cn(cls.tableBody, className)}>
            {children}
        </div>
    )
};

const Head = (props) => {
    const {
        children,
        className
    } = props;

    return (
        <div className={cn(cls.tableHead, className)}>
            {children}
        </div>
    )
};

export default UITable;

UITable.Row = Row;
UITable.Cell = Cell;
UITable.Body = Body;
UITable.Head = Head;

