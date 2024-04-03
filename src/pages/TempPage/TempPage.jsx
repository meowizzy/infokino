import { useState } from "react";
import Comments from "@components/Comments/Comments";
import { useSelector } from "react-redux";

export const TempPage = () => {
    const [value, setValue] = useState("");
    const isLoading = true;
    const authData = useSelector(state => state.userReducer.authData);
    return (
        <>
            <h1>Temp page</h1>
            <Comments.Item
                avatar={authData?.avatar}
                name={authData?.name}
                email={authData?.email}
                comment={`
                    Фильм очень хороший!!! рекомендую к просмотру
                    не пожалеете!!!   
                `}
            />
            <Comments.Form 
                isLoading={isLoading}
                authData={authData}
            />
        </>
    )
};