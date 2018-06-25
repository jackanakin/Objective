# ReactNativeTemplate

# Android Emulator Initializer: C:\Users\jarde\AppData\Local\Android\Sdk\tools\emulator -avd Nexus_5

# Bundle: react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug

# react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

# Build: gradlew assembleRelease

#Troubleshoot:
 Android: cd android && gradlew clean

# FLEX BOX CHEATSHEET:
- Choose the main axis:
flexDirection: 'column' || 'row'
- Align the main axis:
justifyContent: 'flex-start' || 'flex-end' || 'center' || 'space-around' || 'space-between'
- Align the cross axis:
alignItems: 'flex-start' || 'flex-end' || 'center' || 'stretch'
- Align individual elements:
alignSelf: 'flex-start' || 'flex-end' || 'center' || 'stretch' || 'auto'
- Give it a wrap:
flexWrap: 'wrap' || 'nowrap'
- Define relative fluidity of an element:
flex: number (e.g. 1, 1/2)
