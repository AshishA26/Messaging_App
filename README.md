# Messaging_App
A messaging app that uses React Native, Expo, and Firebase Authentication and Database.

Apk is available [here](https://expo.dev/artifacts/eas/2uEZAfpt1Y56tmVyGacosw.apk) or in the releases page of this repo.

## Setup
Do ```npm install``` and ```npm start``` and look at the commands I ran if wanted:
```
npm install firebase
npm install -g firebase-tools
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated @react-native/community/masked-view
npm install @react-navigation/stack
npm install @react-navigation/native-stack
npm install
npm install react-native-elements
npx expo install firebase
npm install --global yarn
yarn add -D gh-pages
yarn deploy
npm install --global eas-cli
eas login
npx expo install expo-updates
eas update:configure
eas build:configure
eas build -p android --profile preview
```
Do ```yarn deploy``` whenever you change the code.

Install ```ES7+ React/Redux/React-Native snippets``` from VS code extensions to make your life a bit easier when coding in react.

## Notes
### Expo Go App
In order for it to work on my phone on expo go, I had to disable the other networks on my computer so that WiFi was the 1st active one. Then I had to use hotspot from my phone to the computer, then do npm start. Then I scanned the bar code, waited for it to download, then retryed on my phone. Then it worked. Android emulator did not work for me.

### Hosting on website
I could not get it to host on Firebase. I instead hosted it on github pages. But this is what I tried:

Firebase login or any firebase command not working? Go to this [link](
https://stackoverflow.com/questions/64149680/how-can-i-activate-a-conda-environment-from-powershell) or follow directions below 

```
Open PowerShell and browse to condabin folder in your Conda installation directory, for example: C:\Users\<username>\anaconda3\condabin

Run ./conda init powershell in that folder, and reopen the PowerShell.

Please note: If you encountered ps1 cannot be loaded because running scripts is disabled on this system, simply run the PowerShell as Administrator and enter the following: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted

Restart the PowerShell and enjoy!
```
Now you can do:
```
firebase login
firebase logout
firebase init
firebase init hosting
npx expo export:web
npx serve dist
```

## Links:
- https://www.youtube.com/watch?v=MJzmZ9qmdaE
- https://www.youtube.com/watch?v=VozPNrt-LfE
- https://docs.expo.dev/distribution/publishing-websites/
- https://loisthash.medium.com/getting-started-in-node-js-with-conda-cd543de24311
- https://reactnative.dev/docs/environment-setup?package-manager=npm
- https://www.youtube.com/watch?v=coW942jEnak
- https://reactnavigation.org/docs/hello-react-navigation/
- https://docs.expo.dev/eas-update/build-locally/
- https://docs.expo.dev/build-reference/apk/
- https://dev.to/chinmaymhatre/how-to-generate-apk-using-react-native-expo-kae
- https://docs.expo.dev/eas-update/getting-started/