Change import in demos.modules.ts to use ./state/demo.reducer

```typescript
import { demo_slice } from "./state/state";
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
