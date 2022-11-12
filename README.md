# @expoplatformportal/hooks

The simple react custom hooks are aimed to make the building process is esier and more understandable :)

## Acknowledgements

- [usePagination](#use-pagination)
- [useDebounce](#useDebounce)

![Logo](https://expoplatform.com/wp-content/uploads/2021/04/logo-full-blue-1.png)

## Installation

Install the package with npm, yarn

```bash
  npm install @expoplatformportal/hooks

  yarn add @xpoplatformportal/hooks
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Usage/Examples

#### <a name="use-pagination"></a> usePagination

####

- [more examples](https://codesandbox.io/p/sandbox/modest-wright-pnzst5?file=%2Fsrc%2FApp.tsx&selection=%5B%7B%22endColumn%22%3A1%2C%22endLineNumber%22%3A4%2C%22startColumn%22%3A1%2C%22startLineNumber%22%3A4%7D%5D)

```javascript
import { usePagination } from '@expoplatformportal/hooks'

function App() {
  const { list, page, number, total, filters, isFetching } = usePagination()

  return <Component />
}
```

## API Reference

#### usePagination

| Parameter      | Type                            | Description  |
| :------------- | :------------------------------ | :----------- |
| `filter`       | `{order:'asc', search:'', ...}` | **Optional** |
| `initialState` | `object`                        | **Optional** |

#### useDebounce

```javascript

```
