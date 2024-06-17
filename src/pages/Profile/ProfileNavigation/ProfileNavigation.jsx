import React from 'react';
import { Link } from "react-router-dom";
import { routesPath } from "@app/config/routes";
import { UIButton } from "@components/UI";
import { ReactComponent as SettingsIcon } from "@public/images/settings.svg";
import { ReactComponent as FavoriteSvg } from "@public/images/favorites.svg";
import { ReactComponent as Recommend } from "@public/images/like.svg";
import { WithPermission } from "@hoc/WithPermission";
import cn from 'classnames';
import cls from "./ProfileNavigation.module.scss";


export const ProfileNavigation = (props) => {
    const {
        className
    } = props;
    return (
        <div className={cn(className, cls.container)}>
            <WithPermission>
                <Link to={`/${routesPath.MANAGEMENT}/${routesPath.USERS}`}>
                    <UIButton
                        Icon={SettingsIcon}
                        type="default"
                        text="Управление"
                    />
                </Link>
            </WithPermission>
            <Link to={`/${routesPath.FAVORITES}`}>
                <UIButton
                    Icon={FavoriteSvg}
                    type="default"
                    text="Избранное"
                />
            </Link>
            <Link to={`/${routesPath.RECOMMENDS}`}>
                <UIButton
                    Icon={Recommend}
                    type="default"
                    text="Рекоммендации"
                />
            </Link>
        </div>
    );
};