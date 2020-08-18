## Local News Mobile

### Mobile app for aggregating local news sources.

<p float="left">
  <img src="/assets/images/feed-example.png" width="200" />
  <img src="/assets/images/sources-example.png" width="200" />
</p>

### Get started

#### Steps:

__Pre-Requisites:__
  This application requires [Nodejs](https://nodejs.org/en/download/package-manager/ "Node Installation"), [npm](https://www.npmjs.com/get-npm "npm Installation"), and [Expo cli](https://docs.expo.io/versions/v33.0.0/introduction/installation/ "React-Native Setup")

  For Mobile App (Android/iOS): [Android Studio](https://developer.android.com/studio/install "Android Studio Installation") and/or [Xcode](https://developer.apple.com/xcode/ "Xcode Installation")

1) Start by cloning the repository.

  ```
  git clone https://github.com/JohnRyanJordan/local-news-mobile.git
  cd local-news-mobile
  ```

2) Install application dependencies:

  ```
  npm install
  ```

3) Add **custom-exports.js** file with your credentials:

  **Note**: Guideline for this file can be found in "custom-exports-template.js"

3) Start the local application server in terminal:

  ```
  npm start
  ```

4) Follow expo instructions in command line for deployment options


**Troubleshooting:** For caching and other package related issues begin troubleshooting by running

```
watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules/ && rm -f package-lock.json && rm -f yarn.lock && npm cache verify && npm install && expo r -c
```
