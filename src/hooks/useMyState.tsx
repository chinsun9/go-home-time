import { useSelector } from 'react-redux';
import { RootState } from '../modules';

function useTime() {
  const timeState = useSelector((state: RootState) => state.time);

  return timeState;
}

export default useTime;
