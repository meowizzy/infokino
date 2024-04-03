import cn from "classnames";
import cls from "./ProfileCard.module.scss";
import { UIButton, UIAvatar } from "@components/UI";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { clearUserData } from "@store/reducers/userReducer";
import { useNavigate } from "react-router";
import { routesPath } from "../../../api/routes";

export const roles = {
    "admin": "Администратор",
    "customer": "Пользователь"
}
const ProfileCard = (props) => {
    const {
        className,
        authData
    } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogoutClick = useCallback(() => {
        dispatch(clearUserData());
        navigate(routesPath.HOME);
    }, [dispatch]);

    return (
        <div className={cn(cls.card_wrapper, className)}>
            <UIAvatar
                avatar={authData?.avatar}
                name={authData?.name}
                type="large"
                hasLink={false}
            />
            <ul className={cls.infoTable}>
                <li className={cls.infoTableRow}>
                    <span className={cls.infoTableLabel}>
                        Имя:
                    </span>
                    <span className={cls.infoTableValue}>
                        {authData?.name ? authData?.name : "-"}
                    </span>
                </li>
                <li className={cls.infoTableRow}>
                    <span className={cls.infoTableLabel}>
                        Email:
                    </span>
                    <span className={cls.infoTableValue}>
                        {authData?.email ? authData?.email : "-"}
                    </span>
                </li>
                <li className={cls.infoTableRow}>
                    <span className={cls.infoTableLabel}>
                        Профиль создан:
                    </span>
                    <span className={cls.infoTableValue}>
                        {authData?.creationAt ? new Date(authData?.creationAt).toLocaleString() : "-"}
                    </span>
                </li>
                <li className={cls.infoTableRow}>
                    <span className={cls.infoTableLabel}>
                        Роль:
                    </span>
                    <span className={cls.infoTableValue}>
                        {authData?.role ? roles[authData?.role] : "-"}
                    </span>
                </li>
            </ul>
            <UIButton
                type={"accent"}
                text="Выйти из профиля"
                onClick={handleLogoutClick}
            />
        </div>
    );
};

export default ProfileCard;