import React, {useEffect, useState} from 'react';
import { UITitle, UITable, UIRole, UIButton } from "@components/UI";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "@store/reducers/users/usersListReducer";
import { triggerDeleteUser } from "@store/reducers/users/deleteUserSuccessReducer";
import { rolesTranslation, roles } from "@app/config/auth";
import { ReactComponent as CloseIcon } from "@public/images/close.svg";
import cls from "../../Management.module.scss";

export const UsersList = () => {
    const dispatch = useDispatch();
    const [rowUserId, setRowUserId] = useState();
    const {
        isLoading,
        data
    } = useSelector((state) => state.usersListReducer);
    const {
        isLoading: _deleteUserLoading,
    } = useSelector((state) => state.deleteUserSuccessReducer);

    useEffect(() => {
        dispatch(getUsersList());
    }, []);

    const onDeleteUser = (userId) => {
        setRowUserId(userId);
        dispatch(triggerDeleteUser(userId));
    };

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
                        <UITable.Cell width={200}>
                            <span>Юзернейм</span>
                        </UITable.Cell>
                        <UITable.Cell width={200}>
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
                    {!!data?.length && data.map((row, index) => (
                        <UITable.Row
                            key={row._id}
                            rowLoading={rowUserId === row._id && _deleteUserLoading}
                        >
                            <UITable.Cell width={50}>
                                {index+1}
                            </UITable.Cell>
                            <UITable.Cell width={200}>
                                {row.username}
                            </UITable.Cell>
                            <UITable.Cell width={200}>
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
                            {row.role !== roles.ADMIN ? (
                                <UITable.Cell width={62}>
                                    <UIButton
                                        Icon={CloseIcon}
                                        type="danger"
                                        classes={cls.deleteUserBtn}
                                        title="Удалить пользователя"
                                        onClick={() => onDeleteUser(row._id)}
                                    />
                                </UITable.Cell>
                            ) : ""}
                        </UITable.Row>
                    ))}
                </UITable.Body>
            </UITable>
        </>
    );
};