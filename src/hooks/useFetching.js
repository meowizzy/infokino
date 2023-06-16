import { useEffect } from "react";
import { useDispatch } from 'react-redux';

export const useFetching = (someFetchActionCreator, data) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data) dispatch(someFetchActionCreator());
  }, [dispatch, someFetchActionCreator])
}