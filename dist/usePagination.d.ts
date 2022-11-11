export interface IPaginationState<ListItemType = any, FiltersType = any> {
    list: Record<IPaginationState['page'], ListItemType[]>;
    page: number;
    limit: number;
    total: number;
    filters: FiltersType;
    isFetching: boolean;
}
export declare enum PAGINATION_ACTION_TYPES {
    SET_TOTAL = "pagination/setTotoal",
    SET_LIST = "pagination/setList",
    SET_IS_FETCHING = "pagination/setIsFetching",
    SET_PAGE = "pagination/setPage",
    SET_LIMIT = "pagination/setLimit",
    ADD_NEW_FILTERS = "pagination/addNewFilters",
    SET_MULTIPLE_PROPERTIES = "pagination/setMultipleProperties"
}
export interface SetPageAction {
    type: PAGINATION_ACTION_TYPES.SET_PAGE;
    payload: IPaginationState['page'];
}
export interface SetTotalAction {
    type: PAGINATION_ACTION_TYPES.SET_TOTAL;
    payload: IPaginationState['total'];
}
export interface SetIsFetching {
    type: PAGINATION_ACTION_TYPES.SET_IS_FETCHING;
    payload: IPaginationState['isFetching'];
}
export interface SetLimitAction {
    type: PAGINATION_ACTION_TYPES.SET_LIMIT;
    payload: IPaginationState['limit'];
}
export interface SetListAction {
    type: PAGINATION_ACTION_TYPES.SET_LIST;
    payload: IPaginationState['list'];
}
export interface AddNewFiltersAction {
    type: PAGINATION_ACTION_TYPES.ADD_NEW_FILTERS;
    payload: IPaginationState['filters'];
}
export interface SetMultiplePropertiesAction {
    type: PAGINATION_ACTION_TYPES.SET_MULTIPLE_PROPERTIES;
    payload: Partial<IPaginationState>;
}
export declare type TActions = SetPageAction | SetTotalAction | SetIsFetching | SetLimitAction | SetListAction | AddNewFiltersAction | SetMultiplePropertiesAction;
declare const usePagination: <ListItemType = object, FiltersType = object>(filters?: FiltersType, initialState?: Partial<IPaginationState<ListItemType, FiltersType>>) => {
    list: Record<number, any[]>;
    page: number;
    limit: number;
    total: number;
    filters: any;
    isFetching: boolean;
    setPage: (currentPage: IPaginationState['page']) => void;
    setTotal: (total: IPaginationState['total']) => void;
    setLimit: (limit: IPaginationState['limit']) => void;
    setIsFetching: (isFetching: boolean) => void;
    addNewFilter: (filters: Partial<FiltersType>) => void;
    resetList: () => void;
    setList: (list: ListItemType[], force?: boolean) => void;
    updateAnyFields: (payload: Partial<IPaginationState<ListItemType, FiltersType>>) => void;
};
export default usePagination;
