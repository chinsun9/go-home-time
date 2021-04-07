import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { setMsg, setTime } from '../modules/time';

const useTimeActions = () => {
  const dispatch = useDispatch();

  const initTime = useCallback(
    (time: string) => {
      dispatch(setTime(time));
    },
    [dispatch]
  );

  const initMsg = useCallback(
    (msg: string) => {
      dispatch(setMsg(msg));
    },
    [dispatch]
  );

  return { initTime, initMsg };
};

export default useTimeActions;
