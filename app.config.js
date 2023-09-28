//const IS_DEV = process.env.APP_NAME === 'ExpoQuick-development'
export default {
    expo: {
        name: process.env.APP_NAME || 'ExpoQuick-development',
        slug: 'ExpoQuick',
        owner: 'ExpoQuick',
        version: '1.0.0',
        orientation: 'portrait',
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        splash: {
          image: "./assets/splash.png",
          resizeMode: "contain",
          backgroundColor: "#ffffff"
        },
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: true,
            bundleIdentifier: 'com.expo.starter',
            buildNumber: '1',
        },
        android: {
            package: 'com.expo.starter',
            adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon.png",
                 backgroundColor: "#ffffff"
            },
            permissions: ['ACCESS_COARSE_LOCATION', 'ACCESS_FINE_LOCATION', 'FOREGROUND_SERVICE'],
            usesCleartextTraffic: true,
            versionCode:  1,
         
        },
        web: {
            favicon: './assets/favicon.png'
        },
        extra: {
            APP_NAME: process.env.APP_NAME,
            eas: {
                projectId: "b9137733-eb15-4104-a286-01dd929d5c5c"
              }
        },
        runtimeVersion: {
            policy: 'sdkVersion'
        },
        plugins: [
            [
                'expo-build-properties',
                {
                  android: {
                    compileSdkVersion: 33,
                    targetSdkVersion: 33,
                    buildToolsVersion: '33.0.0',
                  },
                  ios: {
                      deploymentTarget: '13.0',
                    },
                },
              ],
            [
                'expo-location',
                {
                    locationAlwaysAndWhenInUsePermission: `Allow ${
                        process.env.APP_NAME || 'ExpoQuick-development'
                    } to use your location.`
                }
            ],
            [
                'expo-image-picker',
                {
                    photosPermission:
                        'The app accesses your photos to let you share them with your friends.'
                }
            ],
            [
                'expo-barcode-scanner',
                {
                    cameraPermission: `Allow ${
                        process.env.APP_NAME || 'ExpoQuick-development'
                    } to access camera.`
                }
            ],
            [
                'expo-media-library',
                {
                    photosPermission: `Allow ${
                        process.env.APP_NAME || 'ExpoQuick-development'
                    } to access your photos.`,
                    savePhotosPermission: `Allow ${
                        process.env.APP_NAME || 'ExpoQuick-development'
                    } to save photos.`,
                    isAccessMediaLocationEnabled: true
                }
            ]
        ]
    }
}
