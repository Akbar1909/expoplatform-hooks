"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const defaultState = {
    list: {},
    page: 1,
    limit: 4,
    total: 0,
    filters: {},
    isFetching: false,
};
const paginationReducer = (state, { type, payload }) => {
    switch (type) {
        case PAGINATION_ACTION_TYPES.SET_PAGE:
            return Object.assign(Object.assign({}, state), { page: payload });
        case PAGINATION_ACTION_TYPES.SET_TOTAL:
            return Object.assign(Object.assign({}, state), { total: payload });
        case PAGINATION_ACTION_TYPES.SET_IS_FETCHING:
            return Object.assign(Object.assign({}, state), { isFetching: payload });
        case PAGINATION_ACTION_TYPES.SET_LIMIT:
            return Object.assign(Object.assign({}, state), { limit: payload });
        case PAGINATION_ACTION_TYPES.SET_LIST:
            return Object.assign(Object.assign({}, state), { list: payload });
        case PAGINATION_ACTION_TYPES.ADD_NEW_FILTERS:
            return Object.assign(Object.assign({}, state), { filters: Object.assign(Object.assign({}, state.filters), payload) });
        case PAGINATION_ACTION_TYPES.SET_MULTIPLE_PROPERTIES:
            return Object.assign(Object.assign({}, state), payload);
        default:
            return state;
    }
};
const usePagination = (filters, initialState) => {
    const [state, dispatch] = (0, react_1.useReducer)((paginationReducer), Object.assign(Object.assign(Object.assign({}, defaultState), initialState), { filters }));
    const setPage = (0, react_1.useCallback)((currentPage) => dispatch({
        type: PAGINATION_ACTION_TYPES.SET_PAGE,
        payload: currentPage,
    }), []);
    const setTotal = (0, react_1.useCallback)((total) => dispatch({ type: PAGINATION_ACTION_TYPES.SET_TOTAL, payload: total }), []);
    const setIsFetching = (0, react_1.useCallback)((isFetching) => dispatch({
        type: PAGINATION_ACTION_TYPES.SET_IS_FETCHING,
        payload: isFetching,
    }), []);
    const setLimit = (0, react_1.useCallback)((limit) => dispatch({ type: PAGINATION_ACTION_TYPES.SET_LIMIT, payload: limit }), []);
    const addNewFilter = (0, react_1.useCallback)(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (filters) => dispatch({
        type: PAGINATION_ACTION_TYPES.ADD_NEW_FILTERS,
        payload: filters,
    }), []);
    const resetList = (0, react_1.useCallback)(() => dispatch({ type: PAGINATION_ACTION_TYPES.SET_LIST, payload: {} }), []);
    const setList = (0, react_1.useCallback)((list, force = false) => {
        const newList = force ? { [state.page]: list } : Object.assign(Object.assign({}, state.list), { [state.page]: list });
        dispatch({ type: PAGINATION_ACTION_TYPES.SET_LIST, payload: newList });
    }, [state]);
    const updateAnyFields = (0, react_1.useCallback)((payload) => dispatch({
        type: PAGINATION_ACTION_TYPES.SET_MULTIPLE_PROPERTIES,
        payload,
    }), []);
    return Object.assign({ setPage,
        setTotal,
        setLimit,
        setIsFetching,
        addNewFilter,
        resetList,
        setList,
        updateAnyFields }, state);
};
exports.default = usePagination;
