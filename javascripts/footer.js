"use strict";
//strict: const, let ... not work in safari
var kSF = "http://sourceforge.net/projects/qtav/files/release";
var kOS = [{url: "1.5.0/QtAV1.5.0-MinGW32.exe", icon: "images/DL_Windows.png"},
  {url: "Linux64.run", icon: "images/DL_Linux.png"},
  {url: "Player-OSX.dmg", icon: "images/DL_OSX.png"},
  {url: "QMLPlayer-android-armv7a.apk", icon: "images/DL_Android.png"},
];

var Footer = {
  create: function(ver, dir) {
    var downloads = "";
    kOS.forEach(function(value){
      downloads += '<a href="' + kSF +'/' + ver + '/QtAV' + ver + '-' + value.url +'/download"><img style="width:32px;height:32px;" src="'+dir + value.icon +'"></a>';
    });
    downloads += '<a href="' + kSF +'/1.3.3/QtAV1.3.3-SailfishOS-i486.tar.bz2/download"><img style="width:32px;height:32px;" src="'+dir + 'images/DL_Sailfish.svg"></a>';
    console.log(downloads);
    document.write(
        '<footer style="position:fixed; font-size:20px; text-align:right; bottom:20px; margin-left:-25%; height:30px; width:100%;">'
      + '<a style="color:#a5ff00;">QQ群: 121572305</a>'
      + '<a style="color:#a5ff00;">IRC: #qtav</a>'
      + downloads
      + '<a href="#donate" style="color:#ffa500;">Donate</a>'
      + '<div class="g-plus" data-action="share"></div></footer>'
    );
  }
};
