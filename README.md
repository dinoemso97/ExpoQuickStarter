   

# ExpoQuickStarter

ExpoQuickStart is a pre-configured React Native Expo starter project that saves you time and effort when starting new mobile app projects. It includes essential dependencies, a clean project structure, and common configurations, allowing you to jump right into building your app's unique features without the need to set up everything from scratch. Simplify your development process with ExpoQuickStart and accelerate your app development journey.










## What does the project bring with it?

- EAS and eas.json configuration with default values
- App.config.js with default values
- Typescript
- Zustand
- Axios 
- React navigation 
- Native base UI 
- React native svg 
- Expo font 
- Husky 
- Prettier 
- Eslint 
- Localization with i18n-js
- Expo constants
- Environment variables
- Expo permissions(location, library, camera etc..)
- Expo build properties(suitable for deployment)




## Installation

You can use this template with this command

```bash
git clone https://github.com/dinoemso97/ExpoQuickStarter my-project

```
    
## Run Locally

Go to the project directory

```bash
  cd my-project
```

Start the project

```bash
  npm install && npx expo start 
```


## Tech Stack

**Client:** React, React native, Zustand, Native base UI


## Before we create the build

What you, as users of this ExpoQuickStart project, should know is that before you create a build, you need to do the following: 

    1. You enter the eas.json file and within the build object, we have three profiles: 
       Preview, production and development. Inside them, there is an env object containing the APP_NAME variable. 
       Depending on how you want your app to be named, change the value of the APP_NAME variable.
       Also, in the env object, we can define as many variables as we need, for example, it can be API_URL, etc. Examples of what the eas.json 
       file looks like are provided in the project itself.

    2. The second step is to enter the app.config.js file, and we must define the following values: slug, 
       owner, bundleIdentifier in the ios object, and package in the android object. Additionally, we need to define 
       the app name, but in the previous step, we added a global variable for the application name, so we will simply define it as process.env.APP_NAME. 
       An example of what app.config.js looks like is provided in the project itself.


Also, there is expo documentation: https://docs.expo.dev/build/eas-json/




## Environment variables and constants

To create global variables, we need to define the name and value of the global variable in the eas.json file, within the env object. We can simply call them as process.env.VARIABLE_NAME and use them throughout the project. https://docs.expo.dev/build-reference/variables/

To create constants, it's enough to define the value and name of the variable we want to use as a constant within the "extra" object located in the app.config.js file. Typically, we extract the values of these constants from global variables defined in the eas.json file. https://docs.expo.dev/versions/latest/sdk/constants/ 

```bash
 import Constants from 'expo-constants'

 export const API_URL = Constants.expoConfig.extra.API_URL
```






# How to create build

Install the latest EAS CLI 

```bash
npm install -g eas-cli
```

If you don't have an Expo account, you will need to create one at https://expo.dev/.

In the terminal, simply type and log in with the account you will be using.


```bash
expo login
```

In the app.config.js file, change the 'slug' and 'owner' fields, and set the value to the username of the Expo account you have created.


In the terminal, simply type to configure EAS for builds on your Expo account.

```bash
eas build:configure
```

After your project or EAS is configured on your Expo account, you will receive a project ID that you should add to the app.config.js file within the 'extra' object. 


```bash
  "extra": {
      "eas": {
        "projectId": "YOUR-PROJECT-ID"
      }
    }
```

#### Note! It is very likely that the projectId will be automatically added to your app.config.js file. In case it hasn't been added automatically, please add it manually and then run the 'eas build:configure' command again. You will be prompted to configure the build for iOS, Android, or both. I recommend selecting both.

If you have completed every step up to this point, an eas.json file should have been created in your project. Next, copy the following "build" object in place of the default "build" object to automate everything

```bash
  "build": {
    "preview": {
      "distribution": "internal",
      "channel": "preview",
      "env": {
        "APP_NAME": "expoquick-preview"
      },
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "channel": "production",
      "env": {
        "APP_NAME": "expoquick-production"
      }
    },
    "development": {
      "channel": "development",
      "env": {
        "APP_NAME": "expoquick-development"
      },
      "android": {
        "buildType": "apk"
      }
    }
  }
```




To create an android build 
```bash
eas build -p android --profile "profile-name"
```

To create an ios build 
```bash
eas build -p ios --profile "profile-name"
```
To create an iOS build, you will need an Apple developer account.

You can find all other information aboud eas build https://docs.expo.dev/build/setup/










## Used By

This project is used by the following companies:

- Visiot d.o.o



## Authors

- [@dinoemso](https://github.com/dinoemso97)


## Feedback

If you have any feedback, please reach out to us at dino.emso@visiot.net


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

