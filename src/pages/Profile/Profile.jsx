import React from 'react';
import { UITitle, UILoader } from "@components/UI";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard/ProfileCard";
import UIErrorMsg from "../../components/UI/UIErrorMsg/UIErrorMsg";

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
        <>
            <UITitle title="Профиль"/>
            <ProfileCard
                authData={authData}
            />
        </>
    );
};

export default Profile;