import React from 'react';
import { Route, Routes} from "react-router-dom";
import { routesPath } from "@app/config/routes";
import { WithSidebarLayout } from "@layouts/withSidebar";
import { UITitle } from "@components/UI";
import { managementNavigationConfig } from "./config/managementNavigationConfig";
import { UsersList } from "./sections/usersList";

const Management = () => {
    return (
        <>
            <UITitle title="Управление"/>
            <Routes>
                <Route element={<WithSidebarLayout navigationConfig={managementNavigationConfig}/>}>
                    <Route path={routesPath.USERS} element={<UsersList />}/>
                </Route>
            </Routes>
        </>
    );
};

export default Management;