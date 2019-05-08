# install react native environment
https://facebook.github.io/react-native/docs/getting-started

# launch Android Studio and start an android virtual machine.

react-native init manager
npm install
react-native run-android

* update vscode extension
add eslint to vscode
* add eslint globally
npm -g install eslint
* install the eslint configuration for escode
npm install --save-dev eslint-config-rallycoding
* add .eslintrc file to root

* install axios
npm install axios

#install firebase
npm install firebase

#redux thunk to handle async action calls.
npm install redux-thunk

#react-native router
npm install react-native-router-flux

#updat the rules on the real-time database in firebase
{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    "users" : {
      "$uid" : {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}

# for text, calls, email from android and iphone
npm install react-native-communications
# https://www.npmjs.com/package/react-native-communications
