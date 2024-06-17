import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { UIButton }  from "@components/UI";
import cls from "./WithSidebarLayout.module.scss";

export const WithSidebarLayout = (props) => {
    const {
        navigationConfig,
    } = props;

    return (
        <div className={cls.container}>
            <aside className={cls.sidebar}>
                {navigationConfig.map(({ path, icon, title }) => (
                    <NavLink key={path} to={path}>
                        <UIButton
                            Icon={icon}
                            text={title}
                            type="default"
                        />
                    </NavLink>
                ))}
            </aside>
            <div className={cls.content}>
                <Outlet />
            </div>
        </div>
    );
};