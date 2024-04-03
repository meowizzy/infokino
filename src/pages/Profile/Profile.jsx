import { UITitle, UILoader } from "@components/UI";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard/ProfileCard";
import UIErrorMsg from "../../components/UI/UIErrorMsg/UIErrorMsg";
import cls from "./Profile.module.scss";

const Profile = () => {
    const {
        authData,
        isLoading,
        error
    } = useSelector(state => state.userReducer);

    if (isLoading) {
        return (
            <UILoader />
        )
    }

    if (error) {
        return (
            <UIErrorMsg
                value={error}
            />
        )
    }

    return (
        <div className={cls.profilePage}>
            <UITitle title="Профиль"/>
            <ProfileCard
                authData={authData}
            />
        </div>
    );
};

export default Profile;