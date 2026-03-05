NgRx SignalStore also allows you to create custom features that are not provided out of the box to enable reusability. Examine `shared/request-status/request-status.feature.ts`. It represents a custom store feature. It is used in `topics.store.ts` and `topic-list.component.ts`.

```typescript
export type RequestStatus = 'idle' | 'pending' | 'fulfilled' | { error: string };
export type RequestStatusState = { requestStatus: RequestStatus };

export function withRequestStatus() {
    return signalStoreFeature(
        withState<RequestStatusState>({ requestStatus: 'idle' }),
        withComputed(({ requestStatus }) => ({
            isPending: computed(() => requestStatus() === 'pending'),
            isFulfilled: computed(() => requestStatus() === 'fulfilled'),
            error: computed(() => {
                const status = requestStatus();
                return typeof status === 'object' ? status.error : null;
            }),
        }))
    );
}

export function setPending(): RequestStatusState {
    return { requestStatus: 'pending' };
}
```

Notice how updateTopic changes the request status to pending before calling the service. It then updates the topic and changes the request status to fulfilled.

```typescript
updateTopic: (topic: Topic) => {
    patchState(store, setPending());
    service.updateTopic(topic).subscribe((updatedTopic) => {
        patchState(store, updateEntity({ id: updatedTopic.id, changes: updatedTopic }));
        patchState(store, setFulfilled())
    }
```