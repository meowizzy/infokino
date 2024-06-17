import React, { useEffect } from 'react';
import { UITitle, UITable, UIRole, UIErrorMsg } from "@components/UI";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "@store/reducers/users/usersListReducer";
import { rolesTranslation } from "@app/config/auth";

export const UsersList = () => {
    const dispatch = useDispatch();
    const {
        isLoading,
        error,
        data
    } = useSelector((state) => state.usersListReducer);

    useEffect(() => {
        dispatch(getUsersList());
    }, []);

    return (
        <>
            <UITitle
                title="Пользователи"
                type="title-s"
            />
            <UITable>
                <UITable.Head>
                    <UITable.Row>
                        <UITable.Cell width={50}>
                            <span>№</span>
                        </UITable.Cell>
                        <UITable.Cell>
                            <span>Юзернейм</span>
                        </UITable.Cell>
                        <UITable.Cell>
                            <span>Электронная почта</span>
                        </UITable.Cell>
                        <UITable.Cell width={150}>
                            <span>Дата создания</span>
                        </UITable.Cell>
                        <UITable.Cell >
                            <span>Роль</span>
                        </UITable.Cell>
                    </UITable.Row>
                </UITable.Head>
                <UITable.Body
                    loading={isLoading}
                    empty={!data?.length}
                >
                    {!!data && data.map((row, index) => (
                        <UITable.Row key={row._id}>
                            <UITable.Cell width={50}>
                                {index+1}
                            </UITable.Cell>
                            <UITable.Cell >
                                {row.username}
                            </UITable.Cell>
                            <UITable.Cell >
                                <a href={`mailto:${row.email}`}>{row.email}</a>
                            </UITable.Cell>
                            <UITable.Cell width={150}>
                                {new Date(row.createdAt).toLocaleDateString()}
                            </UITable.Cell>
                            <UITable.Cell >
                                <UIRole role={row.role}>
                                    {rolesTranslation[row.role]}
                                </UIRole>
                            </UITable.Cell>
                        </UITable.Row>
                    ))}
                </UITable.Body>
            </UITable>
        </>
    );
};