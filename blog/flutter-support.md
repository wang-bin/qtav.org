# FVP - a Platform Plugin for Flutter video_player

The official [video player](https://pub.dev/packages/video_player) package only supports android and ios. There are a few third party players support other platforms, for example dart_vlc, media_kit. But AFAIK there is no plugin directly support official video player for other platforms. So you have to learn how to use third-party player apis.

[FVP project](https://pub.dev/packages/fvp) is the solution. Add [fvp](https://pub.dev/packages/fvp) as a dependency in pubspec.yaml, and add 2 lines of code in your existing video_player project, then all mobile and desktop platforms are supported.


```dart
import 'package:fvp/fvp.dart';

MdkVideoPlayer.registerWith();
```

## Features

With this plugin, almost all the features provided by [libmdk](https://github.com/wang-bin/mdk-sdk) are available for flutter video player plugin, including HDR, subtitle, high performance renderer, professional codecs(braw, r3d) etc.

The increased size is about 10MB(platform dependent), only 3 additional dynamic libraries, which should be acceptable. If you have your own ffmpeg build or ffmpeg is provided by system, the size can be smaller, about 2MB.

The performance should be the best and cpu/gpu/memory load should be the lowest compared to other players, because we use gpu decoders and optimal renderer(d3d11, metal, opengl) on all platforms.

## How is This Possible

### External Texture

[libmdk](https://github.com/wang-bin/mdk-sdk) is designed to support all platforms, and all gui toolkit/frameworks. The key point to support flutter is video rendering. Now flutter provides texture apis to let you render things into a texture, with the help of [libmdk](https://github.com/wang-bin/mdk-sdk) [render apis](https://github.com/wang-bin/mdk-sdk/wiki/Render-API), the solution becomes quit easy. But I have to say flutter is **BULLSHIT** compared to Qt RHI. In flutter, you have to use different programing languages for each platform. Even if the language is c/c++ on windows and linux, on windows you can use standard c++, but on linux you have to use gtk c macro shit. So it's impossible to share code in different platform plugins(except macOS and iOS). Luckly [libmdk](https://github.com/wang-bin/mdk-sdk) provides convenience apis to let you write code as less as possible.

### FFI

Only video rendering is platform specific. Ideally the code of other playback features should be shared. Like other languages, dart also supports ffi. With ffi, you can call c apis in dart, and also execute dart code in c/c++. A few years ago, when the first time I tried to use [libmdk](https://github.com/wang-bin/mdk-sdk) in flutter, I found dart ffi is too poor to generate c bindings. So I didn't write anything(platform channel is not an option for me). Now I find that all the bugs I saw at that time are resolved, so it's time to write the plugin.

You can download and extract [libmdk](https://github.com/wang-bin/mdk-sdk) in fvp source code, then run ["FFIGen" task in VSCode](https://github.com/wang-bin/fvp/blob/v0.0.6/.vscode/tasks.json#L97) or ffigen command to generate dart binding. The binding code is hard to use, so I wrote a wrapper around it(`src/lib/{global,media_info,player}.dart`) and some utility files, apis are similar to c++.

### Platform Interface

In flutter [video_player]() package is a [federated plugin](https://docs.flutter.dev/packages-and-plugins/developing-packages#federated-plugins). Package users use the apis from it's app-facing package, i.e. video_player package. For me, I have to implement `VideoPlayerPlatform` in it's platform interface package. The implementation is quite straightforward using ffi wrapper code.

## The Future

I may also expose mdk wrappers around ffi to users, because the official [video player](https://pub.dev/packages/video_player) is not enough. Then you can use mdk player directly, and develop your own player.