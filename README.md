# @expoplatformportal/hooks

The simple react custom hooks are aimed to make the building process is esier and more understandable :)

![Logo](https://expoplatform.com/wp-content/uploads/2021/04/logo-full-blue-1.png)

## Acknowledgements

- [usePagination](#user-content--usepagination)
- [useDebounce](#user-content--usedebounce)
- [useInput](#user-content--useinput)
- [useInterval](#user-content--useinterval)
- [useAbortController](#user-content-useabortcontroller)

## Installation

Install the package with npm, yarn

```bash
  npm install @expoplatformportal/hooks

  yarn add @expoplatformportal/hooks
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Usage/Examples

#### <a name="use-pagination"></a><a name="user-content--usepagination"></a> usePagination

####

```javascript
import { usePagination } from '@expoplatformportal/hooks'

const filters={order:'asc'};
const newState={
  page:1,
  limit:4,
  ...
}

function App() {
  const { list, page, limit, total, filters, isFetching, updateAnyFields,setPage, setTotal, setLimit, setIsFetching, setList } = usePagination(filters, newState);

  /**

  in order to change some property we can use updateAnyFields function
  - update isFetching - updateAnyFields({isFetching:true})
  - update page - updateAnyFields({page:3})
  - update limit - updateAnyFields({limit:10})
  - update list - updateAnyFields({list:newList})
  - update total - updateAnyFields({total:100})
  - update filters -updateAnyFields({filters:newFilters})

  or

  usePagination returns util functions for every single property to update
  - isFetching- setIsFetching(true)
  - page - setPage(3)
  - limit - setLimit(10)
  - list - setList(newList)
  - total - setTotal(100)
  - filters - addNewFilter(newFilters)

  */



  return <Pagination
            page={page}
            changePage={setPage}
            availableNumberElementsOnPage={[8, 16, 24, 48]}
            count={count}
            elementsOnPage={limit}
            changeElementsOnPage={changeElementsOnPage}
         />
}
```

| Parameter      | Type                                                             | Description                                   |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- |
| `filter`       | `{order:'asc', search:'', ...}`                                  | **<span style="color:green">Optional</span>** |
| `initialState` | `{list:{},page:1,limit:4, total:0, filters:{},isFetching:false}` | **<span style="color:green">Optional</span>** |

#### <a name="use-debounce"></a><a name="user-content--usedebounce"></a> useDebounce

```javascript
function App() {
  const [search, setSearch] = useState('')
  const debouncedValue = useDebounce(search, 2000)

  const onHandleChange = (e) => {
    setSearch(e.target.value)
  }

  return <input value={search} onChange={onHandleChange} />
}
```

| Parameter | Type     | Description                                                                                                 |
| :-------- | :------- | :---------------------------------------------------------------------------------------------------------- |
| `search`  | `string` | **<span style="color:red">Required</span>**                                                                 |
| `time`    | `number` | **<span style="color:green">Optional</span>** the delay time, _default_: <span style="color:blue">1s</span> |

#### <a name="use-input"></a><a name="user-content--useinput"></a> useInput

```javascript
function App() {
  const { value, onChange, setValue } = useInput('')

  return <input value={value} onChange={onChange} />
}
```

| Parameter      | Type     | Description                                                                                                                |
| :------------- | :------- | :------------------------------------------------------------------------------------------------------------------------- |
| `initialValue` | `string` | **<span style="color:red">Required</span>** this is used as a initial value. _default_: <span style="color:blue">''</span> |

#### <a name="use-interval"></a><a name="user-content--useinterval"></a> useInterval

```javascript
function App() {
  const [counter, setCounter] = useState(0)

  useInterval(() => {
    setCounter(counter - 1)
  }, 1000)

  return <h1>{counter}</h1>
}
```

| Parameter  | Type       | Description                                                                                |
| :--------- | :--------- | :----------------------------------------------------------------------------------------- |
| `callback` | `function` | **<span style="color:red">Required</span>**                                                |
| `delay`    | `number`   | **<span style="color:green">Optional</span>** _default_:<span style="color:blue">1s</span> |

#### <a name="use-abortcontroller"></a><a name="user-content--useabortcontroller"></a> useAbortController

In default case, when the component is unmount, the endpoint will be aborted. If we don't want the endpoint to abort in unmount, we need to pass **isAbortonUnMount=false**: useAbortController(false)

```javascript
function App() {
  const { signal, abort, regenerateController } = useAbortController();

  useEffect(()=>{
    fetch(endpointUrl, signal)
  },[]);

  return <Component>
}
```

- If we want to abort with any kind of events, we can use abort function

```javascript
function App() {
  const { signal, abort, regenerateController } = useAbortController()

  useEffect(() => {
    fetch(endpointUrl, signal)
  }, [])

  return (
    <>
      <button onClick={abort}>Cancel Request</button>
    </>
  )
}
```

| Parameter          | Type      | Description                                                                                   |
| :----------------- | :-------- | :-------------------------------------------------------------------------------------------- |
| `isAbortonUnMount` | `boolean` | **<span style="color:green">Optional</span>** _default_: <span style="color:blue">true</span> |
