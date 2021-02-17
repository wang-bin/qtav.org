# Migrating to a New [SDK](https://github.com/wang-bin/mdk-sdk)


Recent years I was actively developing a new framework. I wrote QtAV when I knew nothing about multimedia, so the framework is not well designed. The new framework MDK is better at any aspect.

MDK is written in pure C++(and of cause ObjC++ for Apple), no more Qt dependency. Qt is greate, but it's huge, and make deployment hard. Most of features QtAV needed in Qt can be easily done with powerful modern C++. Without Qt, MDK can be integrated in more applications.

C++17 is required to build MDK. But C++11 runtime is enough to use MDK. So MDK runs on all platforms providing C++11. Considering the C++ STL ABI stability, libc++ is used by default for unix platforms. GNU STL(libstdc++) is also supported, but it breaks ABI all the time, from 4.9 to 5.0, from 6.0 to 7.0 etc., so a binary SDK built with gcc may not run on another platform. With libc++, the same SDK binary should run on almost all linux distributions. On ubuntu >= 14.04 run `apt install libc++1 libc++abi1` to install libc++.

## Why Binary SDK only?
- It save lives of both users and me. Users do not have to waste times in building the code, fixing build error, and runtime errors caused by error build.
- Most users just use a library, but are not able to contribute

### Open Source?

No, at least not for all users. But some modules and dependencies will be. For example [MFT decoder](https://github.com/wang-bin/mdk-mft), [Android utilities](https://github.com/wang-bin/AND).


## ABI Stability

libmdk SDK only provides [C APIs and it's C++ wrapper](https://github.com/wang-bin/mdk-sdk/wiki/%E9%80%9A%E7%94%A8ABI%E7%9A%84CPP%E5%BA%93API%E8%AE%BE%E8%AE%A1), and the ABI of C APIs changes rarely between versions. So it's ABI can be considered stable. You can simply replace a new SDK binary without rebuilding your program to fix SDK bugs and get new features.


## Compare with QtAV
- Better performance
- More features
- More applications
- Less bugs

## Qt
Qt is a greate gui toolkit, and QML is the best language to write ui. libmdk can be used in Qt easily, via QOpenGL apis, or RHI, see https://github.com/wang-bin/mdk-examples/tree/master/Qt

There is also a [qtmultimedia plugin in Qt Marketplace](https://marketplace.qt.io/products/qtmultimedia-libmdk-backend), so you can use libmdk features without changing your qtmultimedia code. Source code is [here](https://github.com/wang-bin/qtmultimedia-plugins-mdk)


## [More about the SDK](https://github.com/wang-bin/mdk-sdk/blob/master/README.md)
