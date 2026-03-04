Change import in demos.modules.ts to use ./state/demo.reducer.typed

```typescript
import { reducer } from "./state/demo.reducer.typed";
```

Search for: //TODO: Use this until before Action Creators

Make Sure you use this reducer:

```
export function reducer(state: DemoState = initialDemoState, action) {
  switch (action.type) {
    case TOGGLE_SHOW_FILTER:
      {
        return {
          ...state,
          showFilter: action.payload
        };
      }
      break;
    case UPDATE_FOOD:
      {
        return {
          ...state,
          favFood: action.payload
        };
      }
      break;
    default:
      return state;
  }
```
