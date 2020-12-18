import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { setTime } from '../modules/time';

const useTimeActions = () => {
  const dispatch = useDispatch();

  const initTime = useCallback(
    (time: string) => {
      dispatch(setTime(time));
    },
    [dispatch]
  );

  return { initTime };
};

export default useTimeActions;
