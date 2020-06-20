## Local News Mobile

### Aggregating news sources in local areas.

For caching and other package related issues begin troubleshooting by running

```
watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules/ && rm -f package-lock.json && rm -f yarn.lock && npm cache verify && npm install && expo r -c
```