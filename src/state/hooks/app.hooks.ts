/* libraries */
import { useDispatch, useSelector } from 'react-redux';

/* types */
import type { TypedUseSelectorHook } from 'react-redux';

/* redux */
import type { RootState, AppDispatch } from '../store';

/* exports */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
