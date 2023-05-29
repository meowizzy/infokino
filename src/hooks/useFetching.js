import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

export const useFetching = (someFetchActionCreator, data) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(someFetchActionCreator());
  }, [dispatch, someFetchActionCreator])
}