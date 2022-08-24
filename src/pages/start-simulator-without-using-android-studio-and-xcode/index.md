---
slug: "start-simulator-without-using-android-studio-and-xcode"
date: "2021-03-26"
title: "Start simulator without using Android Studio and Xcode"
spoiler: 'Life is too short to start simulator using conventional ways'
---

While working with the cross-platform frameworks like React Native, we do not need to build our app every time to test our code on a simulator or real device. It is obvious to open the simulator before we can test the app on the simulator. The common approach to open a simulator can be to start a new build from the Android Studio or the Xcode. It works very well. But it may become frustrating sometimes when you want the things to happen very quickly but the build is taking a long time to open the simulator and test the app. Today, we will be creating some bash scripts to automate the process and start our simulators by just double clicking on the bash script files without creating a new build every time we start working on a code.

> The below scripts are tested only for MacOS.

## iOS

### 1. List the installed simulators

First, we will check the device id for the simulator which we want to start. Hit below command to list all of the installed iOS simulators:

```bash
xcrun simctl list
```

The output will be like:

```
== Device Types ==
iPhone 11 (com.apple.CoreSimulator.SimDeviceType.iPhone-11)
iPhone 11 Pro (com.apple.CoreSimulator.SimDeviceType.iPhone-11-Pro)
iPhone 11 Pro Max (com.apple.CoreSimulator.SimDeviceType.iPhone-11-Pro-Max)
iPhone SE (2nd generation) (com.apple.CoreSimulator.SimDeviceType.iPhone-SE--2nd-generation-)
iPhone 12 mini (com.apple.CoreSimulator.SimDeviceType.iPhone-12-mini)
iPhone 12 (com.apple.CoreSimulator.SimDeviceType.iPhone-12)
iPhone 12 Pro (com.apple.CoreSimulator.SimDeviceType.iPhone-12-Pro)
iPhone 12 Pro Max (com.apple.CoreSimulator.SimDeviceType.iPhone-12-Pro-Max)
...

== Runtimes ==
iOS 14.5 (14.5 - 18E182) - com.apple.CoreSimulator.SimRuntime.iOS-14-5
tvOS 14.5 (14.5 - 18L191) - com.apple.CoreSimulator.SimRuntime.tvOS-14-5
watchOS 7.4 (7.4 - 18T187) - com.apple.CoreSimulator.SimRuntime.watchOS-7-4

== Devices ==
-- iOS 14.5 --
    iPhone 11 (B8GFGPCF-CA22-4932-85H2-CA2980351D53) (Shutdown) 
    iPhone 11 Pro (C8GFGPCF-CA22-4932-85H2-CA2980351D75) (Shutdown) 
    iPhone 11 Pro Max (D8GFGPCF-CA22-4932-85H2-CA2980351D33) (Shutdown) 
    iPhone SE (2nd generation) (E8GFGPCF-CJ22-4932-85H2-CA2980351D89) (Shutdown) 
    iPhone 12 mini (F8GFGPCF-CA22-4932-81H2-CA2980351D00) (Shutdown) 
    iPhone 12 (G8GFGPCF-CA22-4932-85H2-CA2990351D34) (Shutdown) 
    iPhone 12 Pro (H8GFGPCF-CA22-4932-85H2-JA2980351D62) (Shutdown) 
    iPhone 12 Pro Max (I8GFGPCF-CA22-4932-85H2-LA2980351D85) (Shutdown) 
    ...
```

Choose the ID for the simulator of your choice from the above list. For example, `B8GFGPCF-CA22-4932-85H2-CA2980351D31` for **iPhone 11**.

### 2. Create the bash script

Create a `bash` file with a name of your choice, e.g. `start_iphone11.sh`:

```bash
touch start_iphone11.sh
```

and add the following content in this file(by replacing <YOUR-DEVICE-ID> with the simulator id):

```bash
#!/bin/bash

xcrun simctl boot <YOUR-DEVICE-ID>
open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/
```

In our example, for **iPhone 11**, the content will be like:

```bash
#!/bin/bash

xcrun simctl boot B8GFGPCF-CA22-4932-85H2-CA2980351D53
open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/
```

It will boot the simulator app and open the simulator with the selected device.

## Android

### 1. List the installed emulators

Hit below command to list all of the installed android emulators(assuming that you have already installed some emulators in Android Studio’s AVD Manager):

```bash
emulator -list-avds
```

It will list the name of all of the installed emulators like:

```
Pixel_2_API_29
Pixel_3_API_27_8_
```

### 2. Create the bash script

Create a new `bash` file with a name of your choice, e.g. `start_pixel_2.sh`:

```bash
touch start_pixel_2.sh
```

and add the following content in this file(by replacing <YOUR-DEVICE-NAME> with the emulator name):

```bash
#!/bin/bash

emulator -avd <YOUR-DEVICE-NAME>
```

In our example, for `Pixel 2`, the content of the file will be like:

```bash
#!/bin/bash

emulator -avd Pixel_2_API_29
```

## Making the scripts executable

Now, our next step will be to make these bash scripts to be executable by double tapping on them. In order to do so, hit the following commands in the terminal inside the same file directory as that of the bash files:

```bash
chmod +x start_iphone11.sh
chmod +x start_pixel_2.sh
```

That's it.

## Running the simulators

When you execute these scripts(for example, by double tapping on them), your simulators will be up and running within 2 minutes.
