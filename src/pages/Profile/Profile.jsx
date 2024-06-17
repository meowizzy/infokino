import { UITitle, UILoader } from "@components/UI";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard/ProfileCard";
import { ProfileNavigation } from "./ProfileNavigation/ProfileNavigation";
import UIErrorMsg from "@components/UI/UIErrorMsg/UIErrorMsg";
import { UIButton } from "@components/UI";
import cls from "./Profile.module.scss";

const Profile = () => {
    const {
        authData,
        isLoading,
        error
    } = useSelector(state => state.userReducer);

    const updatePage = () => window.location.reload();

    if (isLoading) {
        return (
            <UILoader />
        )
    }

    if (error) {
        return (
            <>
                <UIErrorMsg
                    value={error}
                />
                <br/>
                <UIButton
                    onClick={updatePage}
                    text="Обновить страницу"
                    type="primary"
                />
            </>
        )
    }

    return (
        <div className={cls.profilePage}>
            <div className={cls.left}>
                <UITitle title="Профиль"/>
                <ProfileCard
                    authData={authData}
                />
            </div>
            <div className={cls.right}>
                <ProfileNavigation />
            </div>
        </div>
    );
};

export default Profile;