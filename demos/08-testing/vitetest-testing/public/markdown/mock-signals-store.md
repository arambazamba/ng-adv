# Mock Signal Store — markdownEditorStore

Mock the markdownEditorStore when testing components that depend on it.

## Key Concepts
- Provide a plain object with signal() properties matching the real store
- Use vi.fn() for any method the component calls
- Mutate signals to simulate loading / error states
