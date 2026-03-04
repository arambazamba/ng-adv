- Effects are basically async actions that typically interact with the data store

- The shared/markdown-editor contains an effect implementation that is more complex, because it is using a facade to respond to completed actions. This is used to toggle display of the editor.

- Use the Mock Markdown Editor to update a Comment of your choice. Check the `db.json` file in the root of the project if it has been updated. Display of the editor is controlled by `sidepanel.service.ts`

- Examine the `saveComment` method of the `comment.service.ts`

```javascript
saveComment(item: CommentItem) {
    if (item.id === undefined) {return this.http.post<CommentItem>(this.url, item);} 
    else {return this.http.put<CommentItem>(`${this.url}/${item.id}`, item);}
```

- Examine how it is consumed be the effect implemented in `editor.effects.ts`

- Notice on how to respond on completed effects in `editor.facade.ts`:

```javascript
this.actions.pipe(takeUntilDestroyed(this.destroyRef),
  ofType(
    MarkdownEditorActions.saveCommentsSuccess,
    MarkdownEditorActions.saveCommentsFailure,
    ...
  )
).subscribe((data) => {
  this.effectCompleted.next(true);
});
```

This is used in `editor-container.component.ts` to toggle display of the editor

```javascript
this.ef.effectCompleted$.subscribe(() => {
  this.editorEdit = false;
});
```
