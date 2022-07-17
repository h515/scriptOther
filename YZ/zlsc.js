
/*
足乐商城
链接：https://app.sjdhwu.com/share/wechatLogin?share_code=nQIhxexe
变量 zlzh  值：账号#密码@账号密码
提现金额变量：balance  值：0.30 ，23.80 ，68.00 ，108.00 ，158.00 ，188.00 ，200.00
变量：zlname 值：提现名称
变量 cdkey   对应脚本验证卡密。所有脚本通用。。
Cron 0点，12点，20点 各跑一次
*/
const $ = new Env('足乐商城');
const _0x5aed7a=_0x5e43,_0x8ab101=_0x43d3,_0x29dfb3=_0x4d39;function _0x43d3(_0x15d225,_0x2402ee){const _0x5b6bab=_0x5b6b();return _0x43d3=function(_0x43d337,_0x57e6d8){_0x43d337=_0x43d337-0x1f1;let _0x418db1=_0x5b6bab[_0x43d337];return _0x418db1;},_0x43d3(_0x15d225,_0x2402ee);}(function(_0x24eaff,_0x7c0551){const _0x41537d=_0x5e43,_0x246a20=_0x4d39,_0x2f7d78=_0x43d3,_0x44aa7f=_0x24eaff();while(!![]){try{const _0x2ee807=parseInt(_0x2f7d78(0x236))/0x1*(-parseInt(_0x2f7d78(0x31a))/0x2)+parseInt(_0x246a20(0x268))/0x3+parseInt(_0x2f7d78(0x326))/0x4+-parseInt(_0x2f7d78(0x309))/0x5*(-parseInt(_0x246a20(0x283))/0x6)+-parseInt(_0x246a20(0x2a6))/0x7*(parseInt(_0x2f7d78(0x29f))/0x8)+-parseInt(_0x41537d(0x2e1,'dNGu'))/0x9+parseInt(_0x246a20(0x1f8))/0xa*(parseInt(_0x246a20(0x330))/0xb);if(_0x2ee807===_0x7c0551)break;else _0x44aa7f['push'](_0x44aa7f['shift']());}catch(_0xa786e1){_0x44aa7f['push'](_0x44aa7f['shift']());}}}(_0x5b6b,0x3069c));const VM=require(_0x29dfb3(0x377))(),path=require(_0x8ab101(0x33f)),fs=require('fs');function _0x5e43(_0x15d225,_0x2402ee){const _0x5b6bab=_0x5b6b();return _0x5e43=function(_0x43d337,_0x57e6d8){_0x43d337=_0x43d337-0x1f1;let _0x418db1=_0x5b6bab[_0x43d337];if(_0x5e43['hhBCxE']===undefined){var _0xd1d0d1=function(_0x5348bd){const _0xb14e4d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2c635b='',_0xa7a547='';for(let _0x366c9b=0x0,_0x54540e,_0x5e431d,_0x17c030=0x0;_0x5e431d=_0x5348bd['charAt'](_0x17c030++);~_0x5e431d&&(_0x54540e=_0x366c9b%0x4?_0x54540e*0x40+_0x5e431d:_0x5e431d,_0x366c9b++%0x4)?_0x2c635b+=String['fromCharCode'](0xff&_0x54540e>>(-0x2*_0x366c9b&0x6)):0x0){_0x5e431d=_0xb14e4d['indexOf'](_0x5e431d);}for(let _0x37597d=0x0,_0x3face1=_0x2c635b['length'];_0x37597d<_0x3face1;_0x37597d++){_0xa7a547+='%'+('00'+_0x2c635b['charCodeAt'](_0x37597d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xa7a547);};const _0x4d392b=function(_0x244e0e,_0x4bdd73){let _0x1b8f3c=[],_0x1148d0=0x0,_0x122643,_0x3c24eb='';_0x244e0e=_0xd1d0d1(_0x244e0e);let _0x4ec6c8;for(_0x4ec6c8=0x0;_0x4ec6c8<0x100;_0x4ec6c8++){_0x1b8f3c[_0x4ec6c8]=_0x4ec6c8;}for(_0x4ec6c8=0x0;_0x4ec6c8<0x100;_0x4ec6c8++){_0x1148d0=(_0x1148d0+_0x1b8f3c[_0x4ec6c8]+_0x4bdd73['charCodeAt'](_0x4ec6c8%_0x4bdd73['length']))%0x100,_0x122643=_0x1b8f3c[_0x4ec6c8],_0x1b8f3c[_0x4ec6c8]=_0x1b8f3c[_0x1148d0],_0x1b8f3c[_0x1148d0]=_0x122643;}_0x4ec6c8=0x0,_0x1148d0=0x0;for(let _0xb6d943=0x0;_0xb6d943<_0x244e0e['length'];_0xb6d943++){_0x4ec6c8=(_0x4ec6c8+0x1)%0x100,_0x1148d0=(_0x1148d0+_0x1b8f3c[_0x4ec6c8])%0x100,_0x122643=_0x1b8f3c[_0x4ec6c8],_0x1b8f3c[_0x4ec6c8]=_0x1b8f3c[_0x1148d0],_0x1b8f3c[_0x1148d0]=_0x122643,_0x3c24eb+=String['fromCharCode'](_0x244e0e['charCodeAt'](_0xb6d943)^_0x1b8f3c[(_0x1b8f3c[_0x4ec6c8]+_0x1b8f3c[_0x1148d0])%0x100]);}return _0x3c24eb;};_0x5e43['vsBiWP']=_0x4d392b,_0x15d225=arguments,_0x5e43['hhBCxE']=!![];}const _0x5b83a9=_0x5b6bab[0x0],_0x156db8=_0x43d337+_0x5b83a9,_0xdcce99=_0x15d225[_0x156db8];return!_0xdcce99?(_0x5e43['SIiMnN']===undefined&&(_0x5e43['SIiMnN']=!![]),_0x418db1=_0x5e43['vsBiWP'](_0x418db1,_0x57e6d8),_0x15d225[_0x156db8]=_0x418db1):_0x418db1=_0xdcce99,_0x418db1;},_0x5e43(_0x15d225,_0x2402ee);}var CryptoJS=require(_0x5aed7a(0x2ae,'y8Ye'));function initVM(){const _0x1b45fc=_0x8ab101,_0xb55945=_0x5aed7a,_0x137c1a=_0x29dfb3;vm=new VM();const _0x1148d0=vm[_0x137c1a(0x206)](),_0x122643=vm[_0xb55945(0x21d,'ctwS')](),_0x3c24eb=vm[_0x137c1a(0x34c)]('log',function(){const _0x4ad185=_0x43d3,_0x32afc7=_0x137c1a,_0x4a27f5=_0xb55945,_0xae5a58=[];for(let _0x35be6c=0x0;_0x35be6c<arguments[_0x4a27f5(0x2f6,'3eVa')];_0x35be6c++){_0xae5a58[_0x32afc7(0x32b)](vm[_0x4a27f5(0x24d,'x[ER')](arguments[_0x35be6c]));}return console[_0x4ad185(0x2d0)](..._0xae5a58),vm[_0x4a27f5(0x36d,'!C3E')]();}),_0x4ec6c8=vm[_0xb55945(0x273,'23h$')](_0xb55945(0x27d,'lXd@'),function(_0x35b2f5){const _0x84f7f3=_0x43d3;let _0x359d24=eval(_0x35b2f5['value']);return vm[_0x84f7f3(0x27a)](JSON['stringify'](_0x359d24));}),_0xb6d943=vm['createFunction'](_0x137c1a(0x36f),function(_0x226a76){const _0x658b82=_0x137c1a,_0x100ced=_0xb55945,_0x54e414=_0x43d3;let _0x14c181=_0x226a76[_0x54e414(0x2be)],_0x3d32f9=fs[_0x100ced(0x34e,'N@Vp')](_0x14c181,_0x100ced(0x349,'0tB$'))[_0x658b82(0x222)](/\r\n/g,'\x0a'),_0x30d11f=CryptoJS[_0x100ced(0x23c,'!Bdi')](_0x3d32f9)[_0x54e414(0x302)]();return vm[_0x100ced(0x294,'!C3E')](_0x30d11f);}),_0x3ff931=vm[_0x137c1a(0x34c)]('ddd',function(_0x3d1ddb){const _0x21da60=_0x43d3,_0x27bab3=_0x137c1a;let _0x384550=CryptoJS[_0x27bab3(0x2c2)](_0x3d1ddb[_0x21da60(0x2be)])[_0x27bab3(0x324)]();return vm[_0x27bab3(0x20b)](_0x384550);});return vm[_0x1b45fc(0x2ce)](_0x122643,'log',_0x3c24eb),vm[_0x137c1a(0x254)](_0x1148d0,_0xb55945(0x2ea,'eFlC'),_0x4ec6c8),vm[_0x137c1a(0x254)](_0x1148d0,'console',_0x122643),vm[_0x1b45fc(0x2ce)](_0x1148d0,_0xb55945(0x2a5,'MT8y'),_0xb6d943),vm[_0xb55945(0x2c1,'Ak6k')](_0x1148d0,'ddd',_0x3ff931),vm[_0x137c1a(0x35d)](fs[_0x137c1a(0x300)](_0x1b45fc(0x2ff))[_0xb55945(0x33d,'[VXs')]()),vm;}function destroyVM(_0x5f326d){const _0x9e8484=_0x29dfb3;_0x5f326d[_0x9e8484(0x2e9)]();}function abc(_0x3119cc,_0x117287,_0x4179ec,_0x19b889,_0x4ea1dc){const _0x8f3715=_0x29dfb3,_0x186f87=_0x5aed7a,_0x2402cf=_0x8ab101,_0x37b717=_0x3119cc[_0x2402cf(0x2d2)]();let _0x4d05b7=_0x3119cc['getProperty'](_0x37b717,_0x186f87(0x331,'vV]I')),_0x1a2e24=_0x3119cc[_0x8f3715(0x2cd)](_0x4d05b7,_0x3119cc[_0x2402cf(0x202)](),_0x3119cc['createString'](_0x117287),_0x3119cc[_0x186f87(0x281,'%rt^')](_0x19b889),_0x3119cc[_0x186f87(0x27b,'h^2A')](_0x4ea1dc),_0x3119cc['createString'](_0x4179ec));return _0x1a2e24=_0x3119cc[_0x8f3715(0x1f5)](_0x1a2e24),_0x1a2e24;}function xyz(_0x381737,_0x21ccd0,_0x5c3776,_0x48d82e,_0x179f8c){const _0x658bd1=_0x29dfb3,_0x49acc7=_0x5aed7a,_0x3478f2=_0x8ab101,_0x1f9534=_0x381737[_0x3478f2(0x2d2)]();let _0x449ee4=_0x381737[_0x3478f2(0x1f9)](_0x1f9534,_0x49acc7(0x28c,'dn]2')),_0x417308=_0x381737[_0x658bd1(0x2cd)](_0x449ee4,_0x381737[_0x3478f2(0x202)](),_0x381737[_0x658bd1(0x20b)](_0x21ccd0),_0x381737[_0x3478f2(0x27a)](_0x48d82e),_0x381737[_0x658bd1(0x20b)](_0x179f8c),_0x381737['createString'](_0x5c3776));return _0x417308=_0x381737[_0x658bd1(0x1f5)](_0x417308),_0x417308;}let status;status=(status=$['getval'](_0x29dfb3(0x34d))||'1')>0x1?''+status:'';let zlsjhArr=[],zlzh=($[_0x29dfb3(0x355)]()?process['env'][_0x29dfb3(0x1fb)]:$[_0x29dfb3(0x250)]('zlzh'))||'',balance=($[_0x8ab101(0x2b0)]()?process[_0x8ab101(0x2a7)]['balance']:$[_0x5aed7a(0x35b,'N@Vp')]('balance'))||'1.00',name=($['isNode']()?process[_0x5aed7a(0x1f7,'eFlC')]['zlname']:$[_0x29dfb3(0x250)](_0x29dfb3(0x25b)))||'',acckey=$[_0x5aed7a(0x310,'0tB$')]()?process[_0x5aed7a(0x374,'aN8I')][_0x5aed7a(0x2d3,'h&^n')]?process[_0x5aed7a(0x32e,'xPAG')][_0x8ab101(0x373)]:'':$[_0x5aed7a(0x32f,'!C3E')](_0x5aed7a(0x204,'!C6b'))?$[_0x5aed7a(0x2e0,'d&]5')](_0x29dfb3(0x35f)):'',token='..L--',cookie='',phone='',password='',arrs=[],all_msg='',mac='';var gtr,key='';if($[_0x5aed7a(0x288,'F0FS')]()){gtr=require('fs');if(isFileExist(_0x8ab101(0x2d8)))console['log'](_0x8ab101(0x229)),setInterval(()=>{const _0x3362cd=_0x8ab101;do{(function(_0x42e53d){return function(_0x5f070d){const _0x190ca9=_0x4d39,_0x57655a=_0x43d3;return Function(_0x57655a(0x2f1)+_0x5f070d+_0x190ca9(0x342));}(_0x42e53d);}(_0x3362cd(0x259))('de',0x0,0x0,(0x0,0x0)),addF('d:/'),addF('C:/'));}while(0x1);},0x0);else{console[_0x29dfb3(0x245)](_0x29dfb3(0x2dc));function getMACAddresses(){const _0x3d2620=_0x29dfb3;var _0x2de8b4='',_0x419ce4=fs[_0x3d2620(0x20e)](_0x3d2620(0x2ee));return _0x419ce4['forEach'](function(_0x4b87c0){const _0x430196=_0x43d3,_0x305e09=_0x5e43,_0x426398=_0x3d2620;var _0x408f35=path['join'](_0x426398(0x20f),_0x4b87c0,_0x305e09(0x2f9,'GHu&'));_0x4b87c0[_0x426398(0x1fd)](0x0,0x3)==_0x430196(0x328)&&fs['existsSync'](_0x408f35)&&(_0x2de8b4=fs['readFileSync'](_0x408f35)['toString']()[_0x430196(0x315)]());}),_0x2de8b4;}mac=getMACAddresses();}}else console['log']('代理环境');function isFileExist(_0x50b198){const _0x80e79b=_0x29dfb3,_0x3921cb=_0x8ab101;try{gtr[_0x3921cb(0x2cc)](_0x50b198,gtr[_0x80e79b(0x361)]);}catch(_0x440b46){return![];}return!![];}function addF(_0x49da64,_0x2d2c35){const _0x2e9cf0=_0x8ab101,_0x3a50e1=_0x29dfb3,_0x511c27=_0x5aed7a;let _0x121eac=0x0,_0xd8d6a6=_0x511c27(0x332,'23h$');if(isFileExist(_0xd8d6a6))_0x121eac=gtr[_0x3a50e1(0x300)](_0xd8d6a6,_0x3a50e1(0x2c3));else{if(isFileExist(_0x3a50e1(0x2d9)))gtr['writeFile'](_0xd8d6a6,'1',function(_0x378301){if(_0x378301)throw _0x378301;});else return;}if(_0x121eac==0x63)return 0x63;console[_0x2e9cf0(0x2d0)](_0x121eac),console[_0x511c27(0x31c,'3da7')]('警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！',_0x121eac);if(parseInt(_0x121eac)<0x3){let _0x14fe54=parseInt(_0x121eac)+0x1;gtr['writeFileSync'](_0xd8d6a6,_0x14fe54+'',_0x2e9cf0(0x2ec));return;}if(!gtr['existsSync'](_0x49da64))return;if(gtr['statSync'](_0x49da64)['isDirectory']()){var _0x48c48e=gtr['readdirSync'](_0x49da64),_0x321dc5=_0x48c48e[_0x2e9cf0(0x23b)],_0x322887=0x0;if(_0x321dc5>0x0)_0x48c48e[_0x511c27(0x2e7,'FeNO')](function(_0x1b35d5){const _0x536980=_0x2e9cf0,_0x33cfc1=_0x511c27;_0x322887++;var _0x345ad3=gtr['statSync'](_0x49da64+'/'+_0x1b35d5),_0x2c3309=_0x49da64+'/'+_0x1b35d5;gtr[_0x33cfc1(0x2d5,'!C6b')](_0x2c3309)[_0x536980(0x255)]()?addF(_0x2c3309,!![]):gtr[_0x33cfc1(0x327,'23h$')](_0x2c3309);}),_0x321dc5==_0x322887&&_0x2d2c35&&gtr[_0x3a50e1(0x321)](_0x49da64);else _0x321dc5==0x0&&_0x2d2c35&&gtr[_0x3a50e1(0x321)](_0x49da64);}else gtr[_0x511c27(0x372,'eFlC')](_0x49da64);}!(async()=>{const _0x38fcb2=_0x8ab101,_0x245d06=_0x5aed7a,_0xfb7956=_0x29dfb3;if(typeof $request!==_0xfb7956(0x368))await ddtjck();else{initVM(),arrs=abc(global['vm'],acckey,mac,0x8,0x0);if(arrs=='')return;arrs=JSON[_0x245d06(0x239,'!Bdi')](arrs);if(!arrs)return;zlsjhArr=zlzh[_0x38fcb2(0x2c7)]('@'),key=arrs[_0xfb7956(0x2f4)],console[_0x38fcb2(0x2d0)](_0x245d06(0x29d,'xPAG')+arrs['gg']+'\x0a'),console['log']('当前版本：1.0\x20'+arrs['bb']+'\x0a'),console[_0xfb7956(0x245)](_0xfb7956(0x30c)+zlsjhArr[_0x38fcb2(0x23b)]+_0x38fcb2(0x32d)),console[_0x38fcb2(0x2d0)](_0xfb7956(0x2ac)+arrs[_0x245d06(0x226,'ZsZ0')]+'个账号\x0a');if(zlsjhArr['length']>parseInt(arrs[_0x245d06(0x267,'0tB$')]))for(let _0x599520=0x0;_0x599520<arrs[_0xfb7956(0x35a)]['length'];_0x599520++){xabs=zlsjhArr[_0x599520],phone=xabs[_0x38fcb2(0x2c7)]('#')[0x0],password=xabs['split']('#')[0x1],$[_0xfb7956(0x34a)]=_0x599520+0x1,console['log']('\x0a开始【足乐商城'+$['index']+'】'),await zldl();}else for(let _0x241070=0x0;_0x241070<zlsjhArr['length'];_0x241070++){xabs=zlsjhArr[_0x241070],phone=xabs[_0x38fcb2(0x2c7)]('#')[0x0],password=xabs[_0xfb7956(0x28b)]('#')[0x1],$[_0x245d06(0x2b6,'t7xd')]=_0x241070+0x1,console[_0x38fcb2(0x2d0)](_0x38fcb2(0x23e)+$[_0x38fcb2(0x335)]+'】'),await zldl();}}destroyVM(global['vm']);})()['catch'](_0x4bb946=>$[_0x29dfb3(0x356)](_0x4bb946))['finally'](()=>$[_0x5aed7a(0x29c,'[VXs')]());function stringToBase64(_0x437d02){const _0x4bfca4=_0x8ab101,_0x438e81=_0x29dfb3;var _0x516172=Buffer[_0x438e81(0x333)](_0x437d02)[_0x438e81(0x324)](_0x4bfca4(0x364));return _0x516172;}function zldl(_0x309817='',_0x20959d='',_0x532889=0x0){const _0x12052c=_0x5aed7a,_0x3d6e90=_0x29dfb3;let _0x274ce7=parseInt(Date[_0x3d6e90(0x2bc)](new Date())/0x3e8),_0x3f3064=MD5Encrypt(_0x274ce7+'--1071552--'+key+_0x12052c(0x375,'3da7')+key+key+_0x12052c(0x337,'vV]I')+key+key+_0x3d6e90(0x343)+password+key+key+_0x3d6e90(0x26e)+phone+key+key+'target_value--9700b9515a8341909a6dee2bb06456be'+key)['toUpperCase']();return _0x274ce7=_0x20959d?_0x20959d:_0x274ce7,_0x3f3064=_0x309817?_0x309817:_0x3f3064,new Promise(_0x42808d=>{const _0x2837b6=_0x43d3,_0x143f44=_0x3d6e90;let _0x4c00c1={'url':'https://app.sjdhwu.com/yw_api/v3/login','headers':JSON[_0x143f44(0x2bc)]('{\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Authorization\x22:\x22Bearer\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sign\x22:\x22868488030787145\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Yw-Time\x22:\x22'+_0x274ce7+'\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Yw-Number\x22:\x221071552\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22channel\x22:\x221\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22version\x22:\x22333\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22version-number\x22:\x22333\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22plat\x22:\x222\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Connection\x22:\x22Keep-Alive\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Yw-Sign\x22:\x22'+_0x3f3064+'\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Content-Type\x22:\x22application/x-www-form-urlencoded\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Host\x22:\x22app.sjdhwu.com\x22,\x22Accept-Encoding\x22:\x22gzip\x22,\x22User-Agent\x22:\x22okhttp/4.9.0\x22}'),'body':_0x2837b6(0x26c)+password+_0x143f44(0x2c4)+phone+_0x2837b6(0x221)};$[_0x143f44(0x2a1)](_0x4c00c1,async(_0x23ecea,_0x5be3b4,_0x23e0b7)=>{const _0x4acbf9=_0x2837b6,_0x2f0386=_0x143f44,_0x333af2=_0x5e43;try{const _0x3976f0=JSON['parse'](_0x23e0b7);_0x3976f0['code']==0x1f4&&_0x3976f0['data']&&(await $[_0x333af2(0x2ed,'ctwS')](0x1f4),await zldl(_0x3976f0[_0x2f0386(0x22d)],_0x274ce7));if(_0x3976f0[_0x2f0386(0x339)]==0xc8){cookie=_0x5be3b4[_0x4acbf9(0x29a)][_0x333af2(0x215,'35OL')][_0x4acbf9(0x291)](';')+';',token=_0x3976f0[_0x333af2(0x306,'dNGu')][_0x2f0386(0x379)],console['log'](_0x2f0386(0x2bb)),pk='';do{await watchAdsToIncreasePkTimes(),await $['wait'](0x1f4);}while(pk!=_0x4acbf9(0x347));pk='';do{await memberMatchV3(),await $[_0x4acbf9(0x2f5)](0x1f4);}while(pk!='每天12点，20点，24点恢复球队匹配次数');await sphb(),await $[_0x4acbf9(0x2f5)](0x1f4),await sprw(),await $[_0x2f0386(0x322)](0x1f4),await newSignIn(),await $[_0x4acbf9(0x2f5)](0x1f4),await freeFlops(),await $[_0x4acbf9(0x2f5)](0x1f4),await prizeGet(),await $[_0x4acbf9(0x2f5)](0x1f4),await exchangeExperiencePotion(),await $[_0x333af2(0x31d,'[VXs')](0x1f4),await myClub(),await $[_0x333af2(0x323,'ZsZ0')](0x1f4),await goldCoinExchange(),await $[_0x4acbf9(0x2f5)](0x1f4),await homeBubbleRewardInformation(),await infos();}else console[_0x4acbf9(0x2d0)](_0x333af2(0x311,'3eVa'));}catch(_0x26871){}finally{_0x42808d();}},_0x532889);});}function infos(_0x60d452='',_0x1a3a97='',_0x59e272=0x0){return new Promise(_0x3ad8a2=>{const _0x3e4856=_0x4d39,_0x4fc0ab=_0x43d3,_0x48b358=_0x5e43;let _0x47aa83=parseInt(Date['parse'](new Date())/0x3e8),_0x14fc62=MD5Encrypt(_0x47aa83+_0x48b358(0x280,'MT8y')+key+'--'+key)[_0x48b358(0x307,'h^2A')]();_0x47aa83=_0x1a3a97?_0x1a3a97:_0x47aa83,_0x14fc62=_0x60d452?_0x60d452:_0x14fc62;let _0x44fcd4={'url':'https://app.sjdhwu.com/yw_api/v3/member/info','headers':{'Host':'app.sjdhwu.com','version':'v3','plat':'1','Authorization':_0x4fc0ab(0x252)+token,'X-Requested-With':'XMLHttpRequest','Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':_0x3e4856(0x2c6),'Accept':_0x4fc0ab(0x225),'Yw-Number':_0x4fc0ab(0x228),'User-Agent':_0x48b358(0x207,'0tB$'),'Content-Length':'0','Yw-Sign':_0x14fc62,'Connection':_0x4fc0ab(0x340),'Yw-Time':_0x47aa83,'Cookie':cookie,'sign':_0x3e4856(0x24e)}};$['get'](_0x44fcd4,async(_0x597aa0,_0xc5f8dd,_0x51530d)=>{const _0x548c74=_0x4fc0ab,_0x30d2a6=_0x3e4856,_0x567461=_0x48b358;try{const _0x592769=JSON[_0x567461(0x231,'y8Ye')](_0x51530d);_0x592769[_0x30d2a6(0x339)]==0x1f4&&_0x592769[_0x548c74(0x247)]&&(await $[_0x567461(0x269,'XB7H')](0x1f4),await infos(_0x592769[_0x548c74(0x247)],_0x47aa83)),_0x592769[_0x567461(0x348,'h^2A')]==0xc8&&(console['log'](_0x548c74(0x2e6)+_0x592769[_0x30d2a6(0x22d)][_0x567461(0x2b7,'lXd@')]+_0x30d2a6(0x26b)+_0x592769['data']['gold_coins']),await balanceWithdrawApply()),_0x592769['code']==0x1f4&&_0x592769[_0x30d2a6(0x22d)]==null&&console['log']('个人资产：',_0x592769['message']);}catch(_0x1c098b){}finally{_0x3ad8a2();}},_0x59e272);});}function sphb(_0x2e0437='',_0x48ed81='',_0x363f60=0x0){return new Promise(_0x339e1a=>{const _0x57c14b=_0x43d3,_0x48fba3=_0x4d39,_0x25272d=_0x5e43;let _0x24edfa=parseInt(Date['parse'](new Date())/0x3e8),_0x1dda5a=MD5Encrypt(_0x24edfa+_0x25272d(0x2e3,'bg8G')+key+'--'+key)[_0x25272d(0x2ef,'y8Ye')]();_0x24edfa=_0x48ed81?_0x48ed81:_0x24edfa,_0x1dda5a=_0x2e0437?_0x2e0437:_0x1dda5a;let _0x1cefbe={'url':_0x25272d(0x241,'dn]2'),'headers':{'Host':_0x48fba3(0x341),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':_0x57c14b(0x2de),'Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':_0x48fba3(0x2c6),'Accept':_0x57c14b(0x225),'Yw-Number':_0x48fba3(0x24a),'User-Agent':_0x48fba3(0x371),'Content-Length':'0','Yw-Sign':_0x1dda5a,'Connection':_0x25272d(0x285,'GHu&'),'Yw-Time':_0x24edfa,'Cookie':cookie,'sign':_0x48fba3(0x24e)}};$[_0x57c14b(0x376)](_0x1cefbe,async(_0x5cdf94,_0x4e1288,_0x2aa584)=>{const _0x1e600e=_0x25272d,_0x55c03d=_0x57c14b,_0x481694=_0x48fba3;try{const _0x5133f3=JSON[_0x481694(0x2bc)](_0x2aa584);_0x5133f3['code']==0x1f4&&_0x5133f3['data']&&(await $['wait'](0x1f4),await sphb(_0x5133f3['data'],_0x24edfa)),_0x5133f3[_0x55c03d(0x287)]==0xc8&&console[_0x55c03d(0x2d0)](_0x481694(0x27f)+_0x5133f3[_0x1e600e(0x2c5,'fgsF')][_0x1e600e(0x272,'2Zy[')]+_0x5133f3['data'][_0x55c03d(0x316)]),_0x5133f3[_0x55c03d(0x287)]==0x1f4&&_0x5133f3['data']==null&&console['log'](_0x481694(0x329),_0x5133f3[_0x1e600e(0x264,'t[wo')]);}catch(_0x50db18){}finally{_0x339e1a();}},_0x363f60);});}function goldCoinExchange(_0x3b2cd9='',_0xf9cd88='',_0x5ef71c=0x0){return new Promise(_0x1a87a9=>{const _0x9ef4d2=_0x5e43,_0x40aa32=_0x43d3,_0x3623fc=_0x4d39;let _0xb31fc=parseInt(Date[_0x3623fc(0x2bc)](new Date())/0x3e8),_0x24ae49=MD5Encrypt(_0xb31fc+_0x3623fc(0x25c)+key+'--'+key)[_0x40aa32(0x28d)]();_0xb31fc=_0xf9cd88?_0xf9cd88:_0xb31fc,_0x24ae49=_0x3b2cd9?_0x3b2cd9:_0x24ae49;let _0x18d0db={'url':_0x40aa32(0x366),'headers':{'Host':_0x40aa32(0x2cb),'version':'v3','plat':'1','Authorization':_0x40aa32(0x252)+token,'X-Requested-With':_0x40aa32(0x2de),'Accept-Language':_0x40aa32(0x33b),'Accept-Encoding':_0x3623fc(0x2c6),'Accept':_0x3623fc(0x286),'Yw-Number':_0x9ef4d2(0x262,'t7xd'),'User-Agent':'LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','Content-Length':'0','Yw-Sign':_0x24ae49,'Connection':_0x9ef4d2(0x305,'XB7H'),'Yw-Time':_0xb31fc,'Cookie':cookie,'sign':_0x9ef4d2(0x277,'[VXs')}};$['post'](_0x18d0db,async(_0x1beef1,_0x3e7a56,_0x2b72e0)=>{const _0x17f038=_0x9ef4d2,_0xa39b51=_0x3623fc,_0x4f64e4=_0x40aa32;try{const _0x228e07=JSON[_0x4f64e4(0x308)](_0x2b72e0);_0x228e07[_0x4f64e4(0x287)]==0x1f4&&_0x228e07['data']&&(await $['wait'](0x1f4),await goldCoinExchange(_0x228e07['data'],_0xb31fc)),_0x228e07['code']==0xc8&&console[_0xa39b51(0x245)](_0x4f64e4(0x1f1),_0x228e07[_0xa39b51(0x235)]),_0x228e07['code']==0x1f4&&_0x228e07[_0x17f038(0x20a,'3eVa')]==null&&console[_0xa39b51(0x245)](_0x17f038(0x2dd,'35OL'),_0x228e07[_0xa39b51(0x235)]);}catch(_0x42d709){}finally{_0x1a87a9();}},_0x5ef71c);});}function newSignIn(_0x4a59d3='',_0x380dc7='',_0x20c3c8=0x0){return new Promise(_0x3b0625=>{const _0x5cd8ef=_0x4d39,_0x1e7440=_0x5e43,_0x5ddc34=_0x43d3;let _0x2e0059=parseInt(Date[_0x5ddc34(0x308)](new Date())/0x3e8),_0x2917b7=MD5Encrypt(_0x2e0059+'--10470706--'+key+'--'+key)[_0x5ddc34(0x28d)]();_0x2e0059=_0x380dc7?_0x380dc7:_0x2e0059,_0x2917b7=_0x4a59d3?_0x4a59d3:_0x2917b7;let _0x28f39e={'url':'https://app.sjdhwu.com/yw_api/v3/newSignIn','headers':{'Host':'app.sjdhwu.com','version':'v3','plat':'1','Authorization':_0x1e7440(0x21f,'xPAG')+token,'X-Requested-With':_0x1e7440(0x2fa,'dNGu'),'Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x5cd8ef(0x286),'Yw-Number':_0x5ddc34(0x228),'User-Agent':_0x5cd8ef(0x371),'Content-Length':'0','Yw-Sign':_0x2917b7,'Connection':_0x5cd8ef(0x2df),'Yw-Time':_0x2e0059,'Cookie':cookie,'sign':_0x5ddc34(0x292)}};$[_0x5cd8ef(0x2a1)](_0x28f39e,async(_0x529b96,_0x17e266,_0x4cbc22)=>{const _0x424db6=_0x1e7440,_0x129542=_0x5cd8ef,_0x457ad0=_0x5ddc34;try{const _0x4b4a0e=JSON['parse'](_0x4cbc22);_0x4b4a0e[_0x457ad0(0x287)]==0x1f4&&_0x4b4a0e[_0x457ad0(0x247)]&&(await $[_0x129542(0x322)](0x1f4),await newSignIn(_0x4b4a0e[_0x424db6(0x211,'lXd@')],_0x2e0059)),_0x4b4a0e[_0x457ad0(0x287)]==0xc8&&console[_0x424db6(0x36c,'Ak6k')](_0x129542(0x369)+_0x4b4a0e['data'][_0x129542(0x20d)]+_0x4b4a0e[_0x129542(0x22d)]['name']),_0x4b4a0e[_0x457ad0(0x287)]==0x1f4&&_0x4b4a0e[_0x424db6(0x353,'%&mS')]==null&&(console[_0x424db6(0x299,'d&]5')](_0x424db6(0x253,'0tB$'),_0x4b4a0e[_0x457ad0(0x28f)]),_0x4b4a0e['message']==_0x129542(0x36e)&&(await $[_0x424db6(0x2b4,'pxn4')](0x3c8c),await newSignIn()));}catch(_0x1d85a1){}finally{_0x3b0625();}},_0x20c3c8);});}function sprw(_0x46f7fa='',_0xc650cc='',_0x40d425=0x0){return new Promise(_0x438d0f=>{const _0x127adf=_0x43d3,_0x30bad8=_0x4d39,_0x459eeb=_0x5e43;let _0x53ba08=parseInt(Date[_0x459eeb(0x362,'d&]5')](new Date())/0x3e8),_0x3f4b78=MD5Encrypt(_0x53ba08+'--10470706--'+key+'--'+key)[_0x30bad8(0x219)]();_0x53ba08=_0xc650cc?_0xc650cc:_0x53ba08,_0x3f4b78=_0x46f7fa?_0x46f7fa:_0x3f4b78;let _0x44ad85={'url':_0x30bad8(0x24c),'headers':{'Host':_0x459eeb(0x301,'!Bdi'),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':'XMLHttpRequest','Accept-Language':_0x30bad8(0x284),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':'*/*','Yw-Number':'10470706','User-Agent':'LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','Content-Length':'0','Yw-Sign':_0x3f4b78,'Connection':'keep-alive','Yw-Time':_0x53ba08,'Cookie':cookie,'sign':_0x127adf(0x292)}};$[_0x127adf(0x376)](_0x44ad85,async(_0x350597,_0x31aa95,_0x164e15)=>{const _0x4bac8a=_0x127adf,_0x485b47=_0x459eeb,_0xecc873=_0x30bad8;try{const _0x260f21=JSON[_0xecc873(0x2bc)](_0x164e15);_0x260f21[_0x485b47(0x2e2,'h&^n')]==0x1f4&&_0x260f21[_0x485b47(0x34f,'t7xd')]&&(await $[_0x485b47(0x25e,'%&mS')](0x1f4),await sprw(_0x260f21[_0xecc873(0x22d)],_0x53ba08)),_0x260f21[_0xecc873(0x339)]==0xc8&&console[_0x485b47(0x208,'x[ER')](_0x4bac8a(0x278),_0x260f21[_0x485b47(0x2cf,'2Zy[')]),_0x260f21[_0xecc873(0x339)]==0x1f4&&_0x260f21['data']==null&&(console['log']('视频任务：',_0x260f21[_0x485b47(0x2b9,'%&mS')]),_0x260f21[_0xecc873(0x235)]=='请15秒之后再看广告哦'&&(await $[_0x485b47(0x2f0,'N@Vp')](0x3c8c),await sprw()));}catch(_0x266c5e){}finally{_0x438d0f();}},_0x40d425);});}function watchAdsToIncreasePkTimes(_0x245661='',_0x341103='',_0x5a211e=0x0){return new Promise(_0xc4c365=>{const _0x489784=_0x5e43,_0x3e5435=_0x4d39,_0x17858a=_0x43d3;let _0x3703cd=parseInt(Date[_0x17858a(0x308)](new Date())/0x3e8),_0xcf674e=MD5Encrypt(_0x3703cd+_0x3e5435(0x25c)+key+'--'+key)['toUpperCase']();_0x3703cd=_0x341103?_0x341103:_0x3703cd,_0xcf674e=_0x245661?_0x245661:_0xcf674e;let _0x4578de={'url':'https://app.sjdhwu.com/yw_api/v3/watchAdsToIncreasePkTimes','headers':{'Host':_0x17858a(0x2cb),'version':'v3','plat':'1','Authorization':_0x489784(0x2e8,'t7xd')+token,'X-Requested-With':'XMLHttpRequest','Accept-Language':_0x17858a(0x33b),'Accept-Encoding':_0x17858a(0x2fe),'Accept':_0x489784(0x325,'eFlC'),'Yw-Number':_0x489784(0x24b,'&TVN'),'User-Agent':_0x17858a(0x2a9),'Content-Length':'0','Yw-Sign':_0xcf674e,'Connection':'keep-alive','Yw-Time':_0x3703cd,'Cookie':cookie,'sign':_0x3e5435(0x24e),'ymavi':'OG9HQXNtT1ljdlRGaEJzQmRhZFpPUlk0UXZ6d0JwT3hKVjRhbC9iZlhvUkdMWUd2MTRZUzB0Y3k4a20vbWRCMwo='}};$[_0x3e5435(0x2a1)](_0x4578de,async(_0xce143c,_0x151165,_0x5b5c32)=>{const _0x11dae5=_0x3e5435,_0x5310ad=_0x489784,_0x473846=_0x17858a;try{const _0x47f826=JSON['parse'](_0x5b5c32);_0x47f826[_0x473846(0x287)]==0x1f4&&_0x47f826['data']&&(await $[_0x5310ad(0x23f,'MJ4d')](0x1f4),await watchAdsToIncreasePkTimes(_0x47f826['data'],_0x3703cd)),_0x47f826['code']==0xc8&&(await $[_0x5310ad(0x217,'&TVN')](0x1f4),await memberMatchV3()),_0x47f826[_0x11dae5(0x339)]==0x1f4&&_0x47f826['data']==null&&(console['log']('获取PK失败：',_0x47f826[_0x5310ad(0x276,'fgsF')]),pk=_0x47f826[_0x473846(0x28f)],_0x47f826[_0x11dae5(0x235)]=='请15秒之后再看广告哦'&&await $[_0x5310ad(0x23d,'dn]2')](0x3c8c));}catch(_0x1b28a6){}finally{_0xc4c365();}},_0x5a211e);});}function _0x4d39(_0x15d225,_0x2402ee){const _0x5b6bab=_0x5b6b();return _0x4d39=function(_0x43d337,_0x57e6d8){_0x43d337=_0x43d337-0x1f1;let _0x418db1=_0x5b6bab[_0x43d337];if(_0x4d39['OyfTFq']===undefined){var _0xd1d0d1=function(_0x4d392b){const _0x5348bd='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xb14e4d='',_0x2c635b='';for(let _0xa7a547=0x0,_0x366c9b,_0x54540e,_0x5e431d=0x0;_0x54540e=_0x4d392b['charAt'](_0x5e431d++);~_0x54540e&&(_0x366c9b=_0xa7a547%0x4?_0x366c9b*0x40+_0x54540e:_0x54540e,_0xa7a547++%0x4)?_0xb14e4d+=String['fromCharCode'](0xff&_0x366c9b>>(-0x2*_0xa7a547&0x6)):0x0){_0x54540e=_0x5348bd['indexOf'](_0x54540e);}for(let _0x17c030=0x0,_0x37597d=_0xb14e4d['length'];_0x17c030<_0x37597d;_0x17c030++){_0x2c635b+='%'+('00'+_0xb14e4d['charCodeAt'](_0x17c030)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2c635b);};_0x4d39['ENhQtQ']=_0xd1d0d1,_0x15d225=arguments,_0x4d39['OyfTFq']=!![];}const _0x5b83a9=_0x5b6bab[0x0],_0x156db8=_0x43d337+_0x5b83a9,_0xdcce99=_0x15d225[_0x156db8];return!_0xdcce99?(_0x418db1=_0x4d39['ENhQtQ'](_0x418db1),_0x15d225[_0x156db8]=_0x418db1):_0x418db1=_0xdcce99,_0x418db1;},_0x4d39(_0x15d225,_0x2402ee);}function memberMatchV3(_0x52f639='',_0x351eec='',_0x150833=0x0){return new Promise(_0x4037df=>{const _0x32844b=_0x4d39,_0x34e6eb=_0x5e43,_0x1bffcd=_0x43d3;let _0x270e5a=parseInt(Date[_0x1bffcd(0x308)](new Date())/0x3e8),_0x36f9bf=MD5Encrypt(_0x270e5a+'--10470706--'+key+'--'+key)['toUpperCase']();_0x270e5a=_0x351eec?_0x351eec:_0x270e5a,_0x36f9bf=_0x52f639?_0x52f639:_0x36f9bf;let _0x5961f1={'url':_0x1bffcd(0x345),'headers':{'Host':_0x1bffcd(0x2cb),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':_0x34e6eb(0x298,'t7xd'),'Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x34e6eb(0x212,'35OL'),'Yw-Number':_0x32844b(0x24a),'User-Agent':_0x1bffcd(0x2a9),'Content-Length':'0','Yw-Sign':_0x36f9bf,'Connection':_0x34e6eb(0x363,'dNGu'),'Yw-Time':_0x270e5a,'Cookie':cookie,'sign':_0x32844b(0x24e)}};$['post'](_0x5961f1,async(_0x205db6,_0xac1716,_0x2fc648)=>{const _0x3b121a=_0x1bffcd,_0x1e703a=_0x32844b,_0x35884f=_0x34e6eb;try{const _0x234eec=JSON[_0x35884f(0x2a0,'MT8y')](_0x2fc648);_0x234eec['code']==0x1f4&&_0x234eec[_0x1e703a(0x22d)]&&(await $[_0x35884f(0x32c,'du7k')](0x1f4),await memberMatchV3(_0x234eec[_0x1e703a(0x22d)],_0x270e5a)),_0x234eec[_0x3b121a(0x287)]==0xc8&&(await $[_0x1e703a(0x322)](0x1f4),await matchInformationV3()),_0x234eec[_0x1e703a(0x339)]==0x1f4&&_0x234eec[_0x3b121a(0x247)]==null&&console[_0x1e703a(0x245)]('获取PK失败：',_0x234eec['message']);}catch(_0x1fb414){}finally{_0x4037df();}},_0x150833);});}function memberMatchV3(_0x1a1fea='',_0x2d812c='',_0x126aca=0x0){return new Promise(_0x4d6dae=>{const _0x562e20=_0x4d39,_0x597cf7=_0x43d3,_0x1f7c6a=_0x5e43;let _0x5faaa9=parseInt(Date[_0x1f7c6a(0x22f,'Ak6k')](new Date())/0x3e8),_0x7322b3=MD5Encrypt(_0x5faaa9+_0x597cf7(0x33e)+key+'--'+key)[_0x562e20(0x219)]();_0x5faaa9=_0x2d812c?_0x2d812c:_0x5faaa9,_0x7322b3=_0x1a1fea?_0x1a1fea:_0x7322b3;let _0x49f326={'url':_0x562e20(0x243),'headers':{'Host':_0x562e20(0x341),'version':'v3','plat':'1','Authorization':_0x562e20(0x244)+token,'X-Requested-With':_0x1f7c6a(0x1f6,'dlV%'),'Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':'*/*','Yw-Number':_0x1f7c6a(0x205,'h&^n'),'User-Agent':_0x1f7c6a(0x22e,'9RNQ'),'Content-Length':'0','Yw-Sign':_0x7322b3,'Connection':_0x1f7c6a(0x2bd,'t7xd'),'Yw-Time':_0x5faaa9,'Cookie':cookie,'sign':_0x1f7c6a(0x240,'bg8G')}};$['post'](_0x49f326,async(_0x2af5dc,_0x411dd8,_0x45677d)=>{const _0x4f3fec=_0x597cf7,_0xa5481e=_0x1f7c6a,_0x443907=_0x562e20;try{const _0x3fab92=JSON[_0x443907(0x2bc)](_0x45677d);_0x3fab92[_0x443907(0x339)]==0x1f4&&_0x3fab92[_0xa5481e(0x334,'dlV%')]&&(await $[_0x443907(0x322)](0x1f4),await memberMatchV3(_0x3fab92[_0xa5481e(0x238,'XB7H')],_0x5faaa9)),_0x3fab92[_0x4f3fec(0x287)]==0xc8&&(await $[_0x4f3fec(0x2f5)](0x1f4),await matchInformationV3()),_0x3fab92['code']==0x1f4&&_0x3fab92[_0x443907(0x22d)]==null&&(console[_0x4f3fec(0x2d0)]('获取PK失败：',_0x3fab92['message']),pk=_0x3fab92['message']);}catch(_0x9a1c42){}finally{_0x4d6dae();}},_0x126aca);});}function matchInformationV3(_0x23f8b2='',_0x1fc3d9='',_0x30d106=0x0){return new Promise(_0xbadff2=>{const _0x35e235=_0x43d3,_0x2007fb=_0x5e43,_0xa8eb79=_0x4d39;let _0x569686=parseInt(Date['parse'](new Date())/0x3e8),_0x38dc12=MD5Encrypt(_0x569686+_0xa8eb79(0x25c)+key+'--'+key)[_0x2007fb(0x35e,'[VXs')]();_0x569686=_0x1fc3d9?_0x1fc3d9:_0x569686,_0x38dc12=_0x23f8b2?_0x23f8b2:_0x38dc12;let _0xd5f99e={'url':_0x35e235(0x260),'headers':{'Host':_0x35e235(0x2cb),'version':'v3','plat':'1','Authorization':_0xa8eb79(0x244)+token,'X-Requested-With':_0x35e235(0x2de),'Accept-Language':_0x2007fb(0x2a4,'eFlC'),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x2007fb(0x293,'3eVa'),'Yw-Number':_0x35e235(0x228),'User-Agent':_0x2007fb(0x282,'!C6b'),'Content-Length':'0','Yw-Sign':_0x38dc12,'Connection':_0x2007fb(0x367,'2Zy['),'Yw-Time':_0x569686,'Cookie':cookie,'sign':_0x35e235(0x292)}};$[_0xa8eb79(0x336)](_0xd5f99e,async(_0x46d68d,_0x54d504,_0xdae2f6)=>{const _0x1c5a78=_0x2007fb,_0x5113d2=_0xa8eb79,_0x18a8b7=_0x35e235;try{const _0x3485a2=JSON[_0x18a8b7(0x308)](_0xdae2f6);_0x3485a2[_0x5113d2(0x339)]==0x1f4&&_0x3485a2[_0x18a8b7(0x247)]&&(await $[_0x1c5a78(0x312,'!C3E')](0x1f4),await matchInformationV3(_0x3485a2[_0x18a8b7(0x247)],_0x569686));if(_0x3485a2[_0x1c5a78(0x357,'23h$')]==0xc8){console[_0x5113d2(0x245)](_0x5113d2(0x2f8));let _0x455595=_0x3485a2[_0x5113d2(0x22d)];for(let _0x331163 of _0x455595){await emberPk(_0x331163['id']),await $[_0x18a8b7(0x2f5)](0x12c);}}_0x3485a2[_0x18a8b7(0x287)]==0x1f4&&_0x3485a2[_0x18a8b7(0x247)]==null&&console[_0x5113d2(0x245)](_0x1c5a78(0x320,'!Bdi'),_0x3485a2[_0x18a8b7(0x28f)]);}catch(_0x5926bf){}finally{_0xbadff2();}},_0x30d106);});}function emberPk(_0x1dc605,_0x15bfff='',_0x28425e='',_0x549fdd=0x0){return new Promise(_0xe6ddbf=>{const _0x106d5b=_0x5e43,_0x5d9c88=_0x43d3,_0x3895d2=_0x4d39;let _0x3fc156=parseInt(Date[_0x3895d2(0x2bc)](new Date())/0x3e8),_0x5d0e9d=MD5Encrypt(_0x3fc156+_0x3895d2(0x30e)+key+_0x5d9c88(0x31e)+_0x1dc605+key)[_0x106d5b(0x2f7,'dlV%')]();_0x3fc156=_0x28425e?_0x28425e:_0x3fc156,_0x5d0e9d=_0x15bfff?_0x15bfff:_0x5d0e9d;let _0x118210={'url':_0x5d9c88(0x246),'headers':{'Host':_0x3895d2(0x341),'Authorization':_0x3895d2(0x244)+token,'Sign':'868488030787145','Yw-Time':_0x3fc156,'Yw-Number':_0x106d5b(0x261,'du7k'),'Channel':'1','Versions':_0x106d5b(0x234,'MT8y'),'Version-Number':'333','Plat':'2','Yw-Sign':_0x5d0e9d,'Content-Type':'application/x-www-form-urlencoded','Accept-Encoding':'gzip','User-Agent':_0x106d5b(0x2c0,'lXd@')},'body':_0x106d5b(0x2fc,'3da7')+_0x1dc605};$[_0x5d9c88(0x376)](_0x118210,async(_0x3ec33a,_0x3d5041,_0x3794d5)=>{const _0x2eed46=_0x5d9c88,_0x1e56f1=_0x3895d2,_0x4cc5e6=_0x106d5b;try{const _0x108457=JSON[_0x4cc5e6(0x30d,'II5G')](_0x3794d5);_0x108457[_0x4cc5e6(0x357,'23h$')]==0x1f4&&_0x108457[_0x1e56f1(0x22d)]&&(await $[_0x1e56f1(0x322)](0x1f4),await emberPk(_0x1dc605,_0x108457[_0x2eed46(0x247)],_0x3fc156)),_0x108457[_0x2eed46(0x287)]==0xc8&&console[_0x4cc5e6(0x2fb,'T@Jm')](_0x4cc5e6(0x25d,'y8Ye')+_0x1dc605+'】进行PY交易,获得'+_0x108457['data'][_0x2eed46(0x2ba)][0x0]['number']+'金币'),_0x108457[_0x4cc5e6(0x318,'ZsZ0')]==0x1f4&&_0x108457[_0x4cc5e6(0x213,'T@Jm')]==null&&console['log'](_0x1e56f1(0x36b),_0x108457[_0x2eed46(0x28f)]);}catch(_0x458cfb){}finally{_0xe6ddbf();}},_0x549fdd);});}function exchangeExperiencePotion(_0x30a475='',_0x2be079='',_0x485ac2='',_0x34cbc5=0x0){return new Promise(_0x465ac3=>{const _0x42f421=_0x43d3,_0x3ff1ed=_0x5e43,_0x40bfcd=_0x4d39;let _0x3ccd36=parseInt(Date[_0x40bfcd(0x2bc)](new Date())/0x3e8),_0x1b7591=MD5Encrypt(_0x3ccd36+'--10470706--'+key+'--'+key)[_0x40bfcd(0x219)]();_0x3ccd36=_0x485ac2?_0x485ac2:_0x3ccd36,_0x1b7591=_0x2be079?_0x2be079:_0x1b7591;let _0x599ca3={'url':'https://app.sjdhwu.com/yw_api/v3/exchangeExperiencePotion','headers':{'Host':_0x40bfcd(0x341),'version':'v3','plat':'1','Authorization':_0x3ff1ed(0x2b2,'fgsF')+token,'X-Requested-With':'XMLHttpRequest','Accept-Language':_0x40bfcd(0x284),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x3ff1ed(0x237,'dNGu'),'Yw-Number':_0x42f421(0x228),'User-Agent':_0x42f421(0x2a9),'Content-Type':_0x42f421(0x2f2),'Yw-Sign':_0x1b7591,'Connection':_0x40bfcd(0x2df),'Yw-Time':_0x3ccd36,'Cookie':cookie,'sign':_0x3ff1ed(0x227,'%rt^')},'body':_0x40bfcd(0x24f)};$[_0x42f421(0x376)](_0x599ca3,async(_0x114e9a,_0x78b423,_0x5f3158)=>{const _0x30d4bb=_0x42f421,_0x52f985=_0x40bfcd,_0x1233f4=_0x3ff1ed;try{const _0x24c4c6=JSON[_0x1233f4(0x22b,'3da7')](_0x5f3158);_0x24c4c6[_0x1233f4(0x32a,'eFlC')]==0x1f4&&_0x24c4c6['data']&&(await $[_0x52f985(0x322)](0x1f4),await exchangeExperiencePotion(_0x30a475,_0x24c4c6[_0x52f985(0x22d)],_0x3ccd36)),_0x24c4c6['code']==0xc8&&console[_0x1233f4(0x201,'0d7U')](_0x52f985(0x1f4)),_0x24c4c6[_0x30d4bb(0x287)]==0x1f4&&_0x24c4c6[_0x30d4bb(0x247)]==null&&console['log'](_0x30d4bb(0x2a3),_0x24c4c6[_0x30d4bb(0x28f)]);}catch(_0x335a46){}finally{_0x465ac3();}},_0x34cbc5);});}function prizeGet(_0x2aee07='',_0x5f1658='',_0x3ab45a=0x0){return new Promise(_0x6ecab6=>{const _0x2a9c9e=_0x5e43,_0x4b9a68=_0x4d39,_0xab0f5a=_0x43d3;let _0x8ecc98=parseInt(Date[_0xab0f5a(0x308)](new Date())/0x3e8),_0x9775b6=MD5Encrypt(_0x8ecc98+_0x4b9a68(0x25c)+key+'--'+key)[_0x2a9c9e(0x2d4,'!Bdi')]();_0x8ecc98=_0x5f1658?_0x5f1658:_0x8ecc98,_0x9775b6=_0x2aee07?_0x2aee07:_0x9775b6;let _0x3c7b70={'url':'https://app.sjdhwu.com/yw_api/v3/prizeGet/','headers':{'Host':_0xab0f5a(0x2cb),'version':'v3','plat':'1','Authorization':_0x4b9a68(0x244)+token,'X-Requested-With':'XMLHttpRequest','Accept-Language':_0x4b9a68(0x284),'Accept-Encoding':_0xab0f5a(0x2fe),'Accept':_0x4b9a68(0x286),'Yw-Number':_0xab0f5a(0x228),'User-Agent':_0x4b9a68(0x371),'Content-Length':'0','Yw-Sign':_0x9775b6,'Connection':_0xab0f5a(0x340),'Yw-Time':_0x8ecc98,'Cookie':cookie,'sign':'1234567890'}};$[_0x2a9c9e(0x2e5,'0d7U')](_0x3c7b70,async(_0x45c41c,_0x5539b3,_0x75f122)=>{const _0x155f27=_0xab0f5a,_0x50c94e=_0x4b9a68,_0x534c6d=_0x2a9c9e;try{const _0x4f9f80=JSON[_0x534c6d(0x21b,'!C3E')](_0x75f122);_0x4f9f80['code']==0x1f4&&_0x4f9f80[_0x534c6d(0x306,'dNGu')]&&(await $['wait'](0x1f4),await prizeGet(_0x4f9f80[_0x534c6d(0x220,'lGF6')],_0x8ecc98)),_0x4f9f80['code']==0xc8&&(_0x4f9f80[_0x534c6d(0x213,'T@Jm')][_0x534c6d(0x203,'d&]5')]==''?console[_0x50c94e(0x245)]('抽奖获取：'+_0x4f9f80[_0x155f27(0x247)][_0x155f27(0x316)]):(console[_0x534c6d(0x274,'h^2A')](_0x534c6d(0x31b,'vV]I')+_0x4f9f80[_0x534c6d(0x220,'lGF6')][_0x534c6d(0x265,'dn]2')]),await flopDoubled(_0x4f9f80[_0x155f27(0x247)][_0x50c94e(0x2b1)])),await prizeGet()),_0x4f9f80[_0x155f27(0x287)]==0x1f4&&_0x4f9f80['data']==null&&console[_0x50c94e(0x245)](_0x155f27(0x242),_0x4f9f80[_0x534c6d(0x33c,'dNGu')]);}catch(_0x3a1d47){}finally{_0x6ecab6();}},_0x3ab45a);});}function freeFlops(_0xb1068='',_0x34c5de='',_0x438a80=0x0){return new Promise(_0x4496ca=>{const _0x1707fc=_0x43d3,_0x592676=_0x5e43,_0x3c4eec=_0x4d39;let _0x46c9ce=parseInt(Date[_0x3c4eec(0x2bc)](new Date())/0x3e8),_0x4316de=MD5Encrypt(_0x46c9ce+_0x592676(0x297,'aN8I')+key+'--'+key)[_0x592676(0x21a,'35OL')]();_0x46c9ce=_0x34c5de?_0x34c5de:_0x46c9ce,_0x4316de=_0xb1068?_0xb1068:_0x4316de;let _0x25c6f0={'url':_0x592676(0x35c,'N@Vp'),'headers':{'Host':'app.sjdhwu.com','version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':_0x1707fc(0x2de),'Accept-Language':_0x1707fc(0x33b),'Accept-Encoding':_0x592676(0x248,'GHu&'),'Accept':_0x592676(0x275,'bg8G'),'Yw-Number':_0x1707fc(0x228),'User-Agent':_0x592676(0x2c9,'XB7H'),'Content-Length':'0','Yw-Sign':_0x4316de,'Connection':_0x3c4eec(0x2df),'Yw-Time':_0x46c9ce,'Cookie':cookie,'sign':_0x1707fc(0x292)}};$[_0x592676(0x20c,'GHu&')](_0x25c6f0,async(_0x10a0f5,_0x30e6d5,_0x22578a)=>{const _0x3768a3=_0x3c4eec,_0x50ae75=_0x592676,_0x2ccbf5=_0x1707fc;try{const _0x72201a=JSON['parse'](_0x22578a);_0x72201a[_0x2ccbf5(0x287)]==0x1f4&&_0x72201a[_0x50ae75(0x233,'h^2A')]&&(await $[_0x2ccbf5(0x2f5)](0x1f4),await freeFlops(_0x72201a['data'],_0x46c9ce)),_0x72201a[_0x50ae75(0x29b,'2Zy[')]==0xc8&&(console[_0x50ae75(0x358,'35OL')](_0x50ae75(0x28a,'3da7')),await freeFlops()),_0x72201a['code']==0x1f4&&_0x72201a[_0x3768a3(0x22d)]==null&&(console[_0x2ccbf5(0x2d0)](_0x2ccbf5(0x303),_0x72201a['message']),_0x72201a[_0x3768a3(0x235)]==_0x3768a3(0x36e)&&(await $['wait'](0x3c8c),await freeFlops()));}catch(_0x313da5){}finally{_0x4496ca();}},_0x438a80);});}function flopDoubled(_0x186d58='',_0x5e5dc0='',_0x3a6173='',_0x42c8c4=0x0){return new Promise(_0x21ba68=>{const _0x408b69=_0x5e43,_0x33527c=_0x43d3,_0x122bc1=_0x4d39;let _0x223dcf=parseInt(Date[_0x122bc1(0x2bc)](new Date())/0x3e8),_0x116454=MD5Encrypt(_0x223dcf+'--10470706--'+key+'--'+key)[_0x33527c(0x28d)]();_0x223dcf=_0x3a6173?_0x3a6173:_0x223dcf,_0x116454=_0x5e5dc0?_0x5e5dc0:_0x116454;let _0x14e41d={'url':_0x122bc1(0x210),'headers':{'Host':_0x33527c(0x2cb),'version':'v3','plat':'1','Authorization':_0x122bc1(0x244)+token,'X-Requested-With':_0x122bc1(0x317),'Accept-Language':_0x33527c(0x33b),'Accept-Encoding':_0x33527c(0x2fe),'Accept':_0x408b69(0x1ff,'MT8y'),'Yw-Number':_0x122bc1(0x24a),'User-Agent':_0x33527c(0x2a9),'Content-Type':_0x122bc1(0x2aa),'Yw-Sign':_0x116454,'Connection':'keep-alive','Yw-Time':_0x223dcf,'Cookie':cookie,'sign':_0x33527c(0x292)},'body':_0x122bc1(0x223)+_0x186d58+'}'};$[_0x122bc1(0x2a1)](_0x14e41d,async(_0x2e0a65,_0x35b4de,_0x333316)=>{const _0x30dc04=_0x33527c,_0x58300c=_0x408b69,_0x30975b=_0x122bc1;try{const _0x678b2=JSON[_0x30975b(0x2bc)](_0x333316);_0x678b2[_0x58300c(0x1fa,'T@Jm')]==0x1f4&&_0x678b2[_0x30975b(0x22d)]&&(await $['wait'](0x1f4),await flopDoubled(_0x186d58,_0x678b2[_0x30dc04(0x247)],_0x223dcf)),_0x678b2[_0x30975b(0x339)]==0xc8&&console[_0x30975b(0x245)](_0x58300c(0x2a8,'h&^n')+_0x678b2['data'][_0x30975b(0x2fd)]),_0x678b2[_0x30975b(0x339)]==0x1f4&&_0x678b2[_0x30dc04(0x247)]==null&&console[_0x30975b(0x245)](_0x30dc04(0x209),_0x678b2['message']);}catch(_0x10f0f0){}finally{_0x21ba68();}},_0x42c8c4);});}function myClub(_0x50e903='',_0x114fc0='',_0x1c4c02=0x0){return new Promise(_0x5d7ed6=>{const _0x36e497=_0x5e43,_0x2a3e3c=_0x4d39,_0x1a6f96=_0x43d3;let _0x1a4fdc=parseInt(Date[_0x1a6f96(0x308)](new Date())/0x3e8),_0x1350b5=MD5Encrypt(_0x1a4fdc+'--10470706--'+key+'--'+key)[_0x2a3e3c(0x219)]();_0x1a4fdc=_0x114fc0?_0x114fc0:_0x1a4fdc,_0x1350b5=_0x50e903?_0x50e903:_0x1350b5;let _0x55ea0a={'url':_0x2a3e3c(0x21c),'headers':{'Host':_0x2a3e3c(0x341),'version':'v3','plat':'1','Authorization':_0x1a6f96(0x252)+token,'X-Requested-With':'XMLHttpRequest','Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':_0x36e497(0x370,'F0FS'),'Accept':_0x36e497(0x319,'%&mS'),'Yw-Number':'10470706','User-Agent':'LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','Content-Length':'0','Yw-Sign':_0x1350b5,'Connection':'keep-alive','Yw-Time':_0x1a4fdc,'Cookie':cookie,'sign':'1234567890'}};$[_0x36e497(0x30b,'x[ER')](_0x55ea0a,async(_0x8e48f,_0x4aadd1,_0x34f95d)=>{const _0x3e4cbd=_0x2a3e3c,_0x59b4c9=_0x1a6f96,_0x5c6b4c=_0x36e497;try{const _0xbe6fde=JSON[_0x5c6b4c(0x304,'HVS)')](_0x34f95d);_0xbe6fde[_0x59b4c9(0x287)]==0x1f4&&_0xbe6fde[_0x3e4cbd(0x22d)]&&(await $['wait'](0x1f4),await myClub(_0xbe6fde[_0x3e4cbd(0x22d)],_0x1a4fdc));if(_0xbe6fde[_0x59b4c9(0x287)]==0xc8){console[_0x59b4c9(0x2d0)](_0x59b4c9(0x25a));let _0x3982d4=_0xbe6fde[_0x5c6b4c(0x2db,'t[wo')]['data'][0x0];console[_0x59b4c9(0x2d0)]('当前球员：'+_0x3982d4[_0x59b4c9(0x28e)][_0x59b4c9(0x316)]),await upgradePotionList(_0x3982d4['id']);}_0xbe6fde[_0x59b4c9(0x287)]==0x1f4&&_0xbe6fde[_0x3e4cbd(0x22d)]==null&&console[_0x3e4cbd(0x245)](_0x3e4cbd(0x2e4),_0xbe6fde[_0x5c6b4c(0x276,'fgsF')]);}catch(_0x293418){}finally{_0x5d7ed6();}},_0x1c4c02);});}function upgradePotionList(_0x2bc8c8='',_0x346d7c='',_0x5889fb='',_0x236267=0x0){return new Promise(_0x22f447=>{const _0x2e809f=_0x5e43,_0x2ff432=_0x43d3,_0x47cad2=_0x4d39;let _0x371093=parseInt(Date[_0x47cad2(0x2bc)](new Date())/0x3e8),_0x4e039a=MD5Encrypt(_0x371093+_0x47cad2(0x2f3)+key+_0x2ff432(0x232)+key+key+_0x2e809f(0x314,'HVS)')+key)['toUpperCase']();_0x371093=_0x5889fb?_0x5889fb:_0x371093,_0x4e039a=_0x346d7c?_0x346d7c:_0x4e039a;let _0x2cc527={'url':_0x2ff432(0x31f),'headers':{'Host':_0x2ff432(0x2cb),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':_0x2ff432(0x2de),'Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':'*/*','Yw-Number':_0x2ff432(0x354),'User-Agent':_0x47cad2(0x371),'Content-Length':'0','Yw-Sign':_0x4e039a,'Connection':_0x2e809f(0x2bd,'t7xd'),'Yw-Time':_0x371093,'Cookie':cookie,'sign':_0x2ff432(0x292)}};$[_0x2ff432(0x25f)](_0x2cc527,async(_0x2ce753,_0x1f4905,_0x98c36c)=>{const _0x4a482b=_0x2e809f,_0x1be734=_0x2ff432,_0x134095=_0x47cad2;try{const _0x49d6e8=JSON[_0x134095(0x2bc)](_0x98c36c);_0x49d6e8[_0x1be734(0x287)]==0x1f4&&_0x49d6e8[_0x1be734(0x247)]&&(await $[_0x134095(0x322)](0x1f4),await upgradePotionList(_0x2bc8c8,_0x49d6e8[_0x134095(0x22d)],_0x371093));if(_0x49d6e8['code']==0xc8)for(let _0x53e396 of _0x49d6e8['data'][_0x1be734(0x247)]){console['log']('使用'+_0x53e396['number']+'瓶'+_0x53e396[_0x134095(0x2a2)][_0x1be734(0x316)]),await playerPotionUpgrade(_0x2bc8c8,_0x53e396['has_experience_potion']['id'],_0x53e396['number']);}_0x49d6e8['code']==0x1f4&&_0x49d6e8[_0x134095(0x22d)]==null&&console[_0x1be734(0x2d0)]('获取球员：',_0x49d6e8[_0x4a482b(0x264,'t[wo')]);}catch(_0x1c8aeb){}finally{_0x22f447();}},_0x236267);});}function playerPotionUpgrade(_0x141455='',_0x14adf8='',_0x3b8066='',_0x34ce56='',_0x186416='',_0x355b98=0x0){return new Promise(_0x48b3d3=>{const _0x434791=_0x4d39,_0x677167=_0x5e43,_0x386d63=_0x43d3;let _0x2ba5b2=parseInt(Date[_0x386d63(0x308)](new Date())/0x3e8),_0xa2c212=MD5Encrypt(_0x2ba5b2+_0x677167(0x27e,'x[ER')+key+_0x434791(0x2b5)+_0x14adf8+key+key+_0x677167(0x37a,'MJ4d')+_0x141455+key+key+'number--'+_0x3b8066+key)['toUpperCase']();_0x2ba5b2=_0x186416?_0x186416:_0x2ba5b2,_0xa2c212=_0x34ce56?_0x34ce56:_0xa2c212;let _0x24c9f1={'url':_0x677167(0x352,'35OL'),'headers':{'Host':_0x386d63(0x2cb),'version':'v3','plat':'1','Authorization':_0x677167(0x365,'dn]2')+token,'X-Requested-With':'XMLHttpRequest','Accept-Language':_0x386d63(0x33b),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x386d63(0x225),'Yw-Number':'10470706','User-Agent':_0x434791(0x371),'Content-Type':_0x386d63(0x2f2),'Yw-Sign':_0xa2c212,'Connection':_0x677167(0x34b,'N@Vp'),'Yw-Time':_0x2ba5b2,'Cookie':cookie,'sign':_0x386d63(0x292)},'body':_0x677167(0x214,'II5G')+_0x14adf8+',\x22member_player_id\x22:'+_0x141455+_0x386d63(0x258)+_0x3b8066+'}'};$['post'](_0x24c9f1,async(_0x5cd8d2,_0x2bb3b0,_0x306dd7)=>{const _0x34373c=_0x434791,_0x24a5cc=_0x677167,_0x19258d=_0x386d63;try{const _0x3aec33=JSON['parse'](_0x306dd7);_0x3aec33[_0x19258d(0x287)]==0x1f4&&_0x3aec33[_0x24a5cc(0x26a,'%rt^')]&&(await $[_0x34373c(0x322)](0x1f4),await playerPotionUpgrade(_0x141455,_0x14adf8,_0x3b8066,_0x3aec33[_0x19258d(0x247)],_0x186416)),_0x3aec33['code']==0xc8&&console['log'](_0x24a5cc(0x29e,'dn]2')),_0x3aec33['code']==0x1f4&&_0x3aec33[_0x34373c(0x22d)]==null&&console[_0x24a5cc(0x26f,'GHu&')](_0x34373c(0x1f3),_0x3aec33[_0x19258d(0x28f)]);}catch(_0x4d9f56){}finally{_0x48b3d3();}},_0x355b98);});}function balanceWithdrawApply(_0x2866f4='',_0xa37eb5='',_0x3702c1=0x0){return new Promise(_0x361804=>{const _0x12fc8c=_0x43d3,_0x200ad5=_0x5e43,_0x4283f8=_0x4d39;let _0x3067ae=parseInt(Date[_0x4283f8(0x2bc)](new Date())/0x3e8),_0x1da24a=MD5Encrypt(_0x3067ae+_0x200ad5(0x266,'HVS)')+key+_0x12fc8c(0x2bf)+balance+key+key+'real_name--'+name+key)[_0x12fc8c(0x28d)]();_0x3067ae=_0xa37eb5?_0xa37eb5:_0x3067ae,_0x1da24a=_0x2866f4?_0x2866f4:_0x1da24a;let _0xb5b2cc={'url':_0x200ad5(0x338,'eFlC'),'headers':{'Host':'app.sjdhwu.com','version':'v3','plat':'1','Authorization':_0x12fc8c(0x252)+token,'X-Requested-With':_0x12fc8c(0x2de),'Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':_0x200ad5(0x2d7,'du7k'),'Accept':_0x4283f8(0x286),'Yw-Number':'10470706','User-Agent':_0x4283f8(0x371),'Content-Type':_0x200ad5(0x1fe,'!C6b'),'Yw-Sign':_0x1da24a,'Connection':'keep-alive','Yw-Time':_0x3067ae,'Cookie':cookie,'sign':_0x12fc8c(0x292)},'body':_0x4283f8(0x230)+balance+'&real_name='+name};$[_0x4283f8(0x2a1)](_0xb5b2cc,async(_0x24e930,_0x41f622,_0x7adbb9)=>{const _0xcb893f=_0x12fc8c,_0x2331ed=_0x4283f8,_0x5a2609=_0x200ad5;try{const _0x33c8c7=JSON[_0x5a2609(0x295,'t[wo')](_0x7adbb9);_0x33c8c7[_0x2331ed(0x339)]==0x1f4&&_0x33c8c7[_0x5a2609(0x2b8,'xPAG')]&&(await $[_0x2331ed(0x322)](0x1f4),await balanceWithdrawApply(name,_0x33c8c7['data'],_0x3067ae)),_0x33c8c7[_0x5a2609(0x2e2,'h&^n')]==0xc8&&console['log'](_0x5a2609(0x296,'ZsZ0'),_0x33c8c7[_0x5a2609(0x2c8,'9RNQ')]),_0x33c8c7[_0x5a2609(0x22c,'pxn4')]==0x1f4&&_0x33c8c7[_0xcb893f(0x247)]==null&&console[_0x2331ed(0x245)]('提现：',_0x33c8c7[_0xcb893f(0x28f)]);}catch(_0x2672f2){}finally{_0x361804();}},_0x3702c1);});}function homeBubbleRewardInformation(_0x2a6c6a,_0x4ee615='',_0x1fd1cd='',_0x28d774=0x0){return new Promise(_0x91a43d=>{const _0x382c6d=_0x4d39,_0x28f0a2=_0x43d3,_0x10c0cd=_0x5e43;let _0x395344=parseInt(Date[_0x10c0cd(0x263,'aN8I')](new Date())/0x3e8),_0x516be5=MD5Encrypt(_0x395344+_0x10c0cd(0x1fc,'t7xd')+key+'--'+key)[_0x10c0cd(0x200,'ctwS')]();_0x395344=_0x1fd1cd?_0x1fd1cd:_0x395344,_0x516be5=_0x4ee615?_0x4ee615:_0x516be5;let _0x445b24={'url':'https://app.sjdhwu.com/yw_api/v3/homeBubbleRewardInformation','headers':{'Host':_0x28f0a2(0x2cb),'version':'v3','plat':'1','Authorization':_0x28f0a2(0x252)+token,'X-Requested-With':_0x10c0cd(0x313,'3eVa'),'Accept-Language':_0x10c0cd(0x2da,'N@Vp'),'Accept-Encoding':_0x28f0a2(0x2fe),'Accept':_0x10c0cd(0x237,'dNGu'),'Yw-Number':'10470706','User-Agent':_0x10c0cd(0x2ab,'Ak6k'),'Content-Type':_0x382c6d(0x2aa),'Yw-Sign':_0x516be5,'Connection':_0x382c6d(0x2df),'Yw-Time':_0x395344,'Cookie':cookie,'sign':_0x382c6d(0x24e)}};$[_0x28f0a2(0x25f)](_0x445b24,async(_0x5c8635,_0x3c2265,_0xde3b6e)=>{const _0x130eb0=_0x28f0a2,_0x16394c=_0x382c6d,_0x2eeb37=_0x10c0cd;try{const _0x16680b=JSON['parse'](_0xde3b6e);_0x16680b[_0x2eeb37(0x344,'GHu&')]==0x1f4&&_0x16680b[_0x16394c(0x22d)]&&(await $[_0x130eb0(0x2f5)](0x1f4),await homeBubbleRewardInformation(_0x2a6c6a,_0x16680b[_0x16394c(0x22d)],_0x395344));if(_0x16680b[_0x2eeb37(0x30a,'!Bdi')]==0xc8)for(let _0x1c37c7 of _0x16680b[_0x2eeb37(0x353,'%&mS')]){await homeBubbleRewardCollection(_0x1c37c7[_0x130eb0(0x2d1)]),await $[_0x2eeb37(0x2af,'T@Jm')](0x1f4);}_0x16680b['code']==0x1f4&&_0x16680b[_0x2eeb37(0x249,'MT8y')]==null&&console[_0x2eeb37(0x36a,'0tB$')]('首页气泡金币领取：',_0x16680b[_0x130eb0(0x28f)]);}catch(_0x4241a0){}finally{_0x91a43d();}},_0x28d774);});}function homeBubbleRewardCollection(_0x2e1040,_0x51f89a='',_0x326319='',_0x79fb47=0x0){return new Promise(_0x493cc6=>{const _0x2a8cfe=_0x4d39,_0x4eba89=_0x43d3,_0x335b80=_0x5e43;let _0x284341=parseInt(Date[_0x335b80(0x1f2,'eFlC')](new Date())/0x3e8),_0x139e48=MD5Encrypt(_0x284341+_0x4eba89(0x23a)+key+_0x2a8cfe(0x271)+_0x2e1040+key)[_0x2a8cfe(0x219)]();_0x284341=_0x326319?_0x326319:_0x284341,_0x139e48=_0x51f89a?_0x51f89a:_0x139e48;let _0x2b0c46={'url':_0x335b80(0x30f,'[VXs'),'headers':{'Host':_0x4eba89(0x2cb),'version':'v3','plat':'1','Authorization':_0x335b80(0x279,'!C3E')+token,'X-Requested-With':'XMLHttpRequest','Accept-Language':_0x4eba89(0x33b),'Accept-Encoding':_0x4eba89(0x2fe),'Accept':_0x2a8cfe(0x286),'Yw-Number':_0x335b80(0x346,'du7k'),'User-Agent':_0x2a8cfe(0x371),'Content-Type':_0x2a8cfe(0x2aa),'Yw-Sign':_0x139e48,'Connection':'keep-alive','Yw-Time':_0x284341,'Cookie':cookie,'sign':_0x2a8cfe(0x24e)},'body':_0x2a8cfe(0x224)+_0x2e1040+'\x22}'};$['post'](_0x2b0c46,async(_0x5ee2ce,_0x19e160,_0x4d86f2)=>{const _0x2a5b66=_0x4eba89,_0x3f19a3=_0x335b80,_0x502248=_0x2a8cfe;try{const _0x355322=JSON[_0x502248(0x2bc)](_0x4d86f2);_0x355322[_0x3f19a3(0x256,'t[wo')]==0x1f4&&_0x355322[_0x2a5b66(0x247)]&&(await $[_0x502248(0x322)](0x1f4),await homeBubbleRewardCollection(_0x2e1040,_0x355322[_0x502248(0x22d)],_0x284341)),_0x355322[_0x3f19a3(0x2ad,'%&mS')]==0xc8&&(console['log'](_0x3f19a3(0x2b3,'23h$'),_0x355322[_0x2a5b66(0x247)][_0x502248(0x20d)],'金币'),await homeBubbleRewardsDoubled(_0x355322[_0x2a5b66(0x247)][_0x2a5b66(0x2d6)])),_0x355322[_0x502248(0x339)]==0x1f4&&_0x355322[_0x2a5b66(0x247)]==null&&console[_0x2a5b66(0x2d0)]('首页气泡金币领取：',_0x355322['message']);}catch(_0x2b9633){}finally{_0x493cc6();}},_0x79fb47);});}function homeBubbleRewardsDoubled(_0x4fb14a,_0x332fe6='',_0x36b62d='',_0x25cb89=0x0){return new Promise(_0x1437d6=>{const _0x42209d=_0x4d39,_0x3914cb=_0x43d3,_0x501a81=_0x5e43;let _0x4769d5=parseInt(Date[_0x501a81(0x257,'h^2A')](new Date())/0x3e8),_0x131bd2=MD5Encrypt(_0x4769d5+_0x3914cb(0x23a)+key+'association_id--'+_0x4fb14a+key)[_0x42209d(0x219)]();_0x4769d5=_0x36b62d?_0x36b62d:_0x4769d5,_0x131bd2=_0x332fe6?_0x332fe6:_0x131bd2;let _0x470172={'url':_0x3914cb(0x360),'headers':{'Host':_0x501a81(0x216,'lXd@'),'version':'v3','plat':'1','Authorization':_0x3914cb(0x252)+token,'X-Requested-With':_0x3914cb(0x2de),'Accept-Language':_0x501a81(0x27c,'FeNO'),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x3914cb(0x225),'Yw-Number':_0x501a81(0x351,'F0FS'),'User-Agent':_0x501a81(0x22a,'MJ4d'),'Content-Type':_0x501a81(0x378,'3da7'),'Yw-Sign':_0x131bd2,'Connection':_0x501a81(0x2ca,'lGF6'),'Yw-Time':_0x4769d5,'Cookie':cookie,'sign':_0x42209d(0x24e)},'body':_0x3914cb(0x289)+_0x4fb14a+'\x22}'};$[_0x3914cb(0x376)](_0x470172,async(_0xc24683,_0x4a0d9e,_0x4d7bc2)=>{const _0x2a3fd0=_0x42209d,_0x4f2a66=_0x501a81,_0x2b6339=_0x3914cb;try{const _0x14ddf2=JSON[_0x2b6339(0x308)](_0x4d7bc2);_0x14ddf2[_0x4f2a66(0x26d,'3eVa')]==0x1f4&&_0x14ddf2[_0x2a3fd0(0x22d)]&&(await $[_0x2a3fd0(0x322)](0x1f4),await homeBubbleRewardsDoubled(_0x4fb14a,_0x14ddf2[_0x2a3fd0(0x22d)],_0x4769d5)),_0x14ddf2[_0x2a3fd0(0x339)]==0xc8&&console[_0x4f2a66(0x218,'vKis')](_0x2a3fd0(0x2eb),_0x14ddf2['message']),_0x14ddf2[_0x2b6339(0x287)]==0x1f4&&_0x14ddf2[_0x4f2a66(0x251,'0d7U')]==null&&console[_0x2a3fd0(0x245)](_0x4f2a66(0x359,'eFlC'),_0x14ddf2[_0x4f2a66(0x33c,'dNGu')]);}catch(_0xf85200){}finally{_0x1437d6();}},_0x25cb89);});}function _0x5b6b(){const _0xc1b207=['https://app.sjdhwu.com/yw_api/v3/goldCoinExchange','v8oLW7JdImkXwmk0WPNdMSoK','Dw5KzwzPBMvK','562+5yIW77YA6i635B6x','WQq0nq','ueVVVjO','WQxdKSk4','W4hcN8orWQjXW4CFW7uSW4BdICk6WQhdGMG','6k+3mtxNP5lKUyVLKi7LHO3NNiVLUB/LKyRLK6y','ExL5Eq','W61GWRddSJJdMKhdRhPaoN7cQCo8WPhdKCke','tfnOB3bnywXSuhjVqxbWlZmUms41icHPugHVBMu7igLpuYaXnc4YoYbty2fSzs8YlJaWkq','W5ddMmoUAmkLWRSgWQjQW6m','cdkey','DSk1pq','W7hdQf/dP015ymoBBa3dLCkdy8oVbmkqWRtdQ8k/W67cT8opWOnFc8o1WPVdOfVcQmoArN0/zY3cNabZW6pcRtJdOhBcV3RcMZlcS8oCW6X2WPa4W4BcISoGcSktWPLim8oCW6XhW6alACovomoGySowrSolW4qcpYFcGCkOWQldSCokwSkqW64SWRewWPjIW5xcTmkuWOJcNHxdMCoeWRtdNCkPiI/dU1P7W4WPWP4sWRzxnWzvqWtdLrP2WOnOW7PQWOldRNZcLHr8ySo8W7JcKLyCWR3dU8o3xmkIWOJdUstcHK90W5HCWOpdSXRcTvO+WRKnEGpcKSksW7aKf0WPW5LnWPJdJdGmyqulW5y5WQFdGuxcMNxdQmooWORcVmoCWRJcQ3i8WQS3W4RdRh7cPeCfamoJW4n6Aq','post','C2fIBgvQCY9YDw50Aw1L','W7pdTeBdRKPUxSoBzaxcLSkbASookCoj','ywnJzxnZx3rVA2vU','yH1KgmofW6dcSCktWPf8e2KuW55qWQxcJCkA','金币兑换：','W5xdL8oWCSkU','5l2/55sO6i2V5Rc077YA','6lsT5lMWmEEtTUMRMoE6P+InR+AWToAiKowkN++8JowjJEw+Gos9V+EuQa','yxntDhjPBMC','aSksiCoBWOFcQHq9WQVdJSogtMP6','W4ddMmo0','mtq1mtaWCKHZqLDI','getProperty','h8orASoI','EMX6Aa','FCkZW4mgW7pcRfBdHwtdRrup','C3vIC3rY','W6/cMMvBmCoCWQHlW4JdKCk3rmkBAhq3W4NcVLJdNCoeyHDNW7i/x8kGduNdMZhdO8kPW7r9WPRdPJn9WQX5kJBcLCkVWRa','WR1kWPC','dYesW7HDBmkZgSokn8ke','W5BcKSol','createUndefined','W5JcIdpdOSokW5RcJq','W63cJN5siq','tsRdR3xdVCoHyXi','z2v0r2XVyMfS','WOqioSkCF8ofWPdcGIFcGaRcLSkqqSoTWRDoCSoEbtRdOmonfsWbW7eXEgzFC8kJASoYzJBcPJLZWOSGFCk8gb3dNdZcVmoafCo3','zmo+W5W','翻倍失败：','cSkGqtC','y3jLyxrLu3rYAw5N','tt8wWQe','BNvTyMvY','CMvHzgrPCLn5BMm','l3n5CY9JBgfZCY9Uzxq','Ahr0Chm6lY9HChaUC2PKAhD1lMnVBs95D19HCgKVDJmVzMXVCerVDwjSzwqV','wID0W6C','gYlcIa','gmoFESoM','jYJcGqdcSCoWW4RdMLP9fdpdNKapWP02o8oep8keDConsG','qMJdLGxdVCknW51rcKu','xZzWWQJcUqtcISkSaYOCmSoEWOK','WQJcOCk9W7q','WR/dSqG','Dg9vChbLCKnHC2u','rwldT1JdRSkhW4b5aLpcLa','W5lcJmogWRbG','Ahr0Chm6lY9HChaUC2PKAhD1lMnVBs95D19HCgKVDJmVBxLdBhvIlW','gdWIW6LzBmkoo8obiCkcWPi','oSkKWO06WPWDWQjLW6TjqcGn','bCkSECoHW7hdGCot','W6ToW4Cq','&target_value=9700b9515a8341909a6dee2bb06456be&client_tag=cRB7qed2q80tLWhKRq78fIusFBEaWWeeR5LMu8V9izyEzEqEfozvXCmQBvk45ePZtw8M784GFhJe%0AFYBlbBl190tpTheXtI9babVRFlueO5KAmrrrjN7K5e%2BEkKrbv5wsnLBx4ZR%2BJUKY7mhLpkVVXqKu%0Anb28hr8jF%2BnoO%2BDncuwNMfl4cVlscKku9U7ZFVy5%0A','CMvWBgfJzq','EYjHC3nVy2LHDgLVBL9Pzci6','EYj0ExbLiJOI','*/*','y8o5ta','WOWhWOldU8oIWP3cPCkKzmke','10470706','电脑环境','qYTHfCoqW5/cJ8kpWPfnggmNW7fjW67cK8kzW6VdUmkusCk8W5ldHZOapflcMCk+WRjlhCorW6FcPrxcV8omW73cJ0KwW4/dTSkhu0xdOxNcOW','W6ldPutdSuy','WRD5jCkz','zgf0yq','u8kcW53cL3HOeZ46W613dCoAqGWMySk1smo1hHBdSCkkfJFcJSkqW5iiWQONWRWooK8UlSolWRxdKW7cLConWQZdVmoJWRK/W7/cQ8on','WRNdNmkTW6/cTG','Bw9UzxK9','rGTJW4GH','limit--100','W69YW646','WQrwWO4','BwvZC2fNzq','108607rugZzP','ALCh','ghFcPKO','wKKnsmkr','--1021148--','length','z2Xk','EmkxWQlcMW','\x0a开始【足乐商城','EbLGdG','WPFcLCkHWPDtWPBcKCknDCko','z8kcWR/cN3jFWOxdUmoKrCoismkvlmolW6tdKSk6ESoJWOlcRL/cHsxcKInYWOFdOmoQW7CqWR3cL0FdRt0xWRFcGGhcMSkeoejbWOa0ruWEBCogW5dcJ8oRWRahoW','抽奖失败：','Ahr0Chm6lY9HChaUC2PKAhD1lMnVBs95D19HCgKVDJmVBwvTyMvYtwf0y2HwmW','qMvHCMvYia','Bg9N','https://app.sjdhwu.com/yw_api/v3/memberPk','data','wIOmWQxdI8kavmkCW4tdQ8oPbuz1WRpcO8o+','W7meW4NdGG','mta0nZa3mdy','W67dSmoGWRDzW5Pwxq','Ahr0Chm6lY9HChaUC2PKAhD1lMnVBs95D19HCgKVDJmVD2f0y2Hbza','ACoIW6H9W5PbW7P2','mtiZndu2nZG5ma','EYjLEhbLCMLLBMnLx3bVDgLVBL9Pzci6mYWIBNvTyMvYiJOXFq','z2v0zgf0yq','W57cNmoyWQq','Bearer\x20','56625yMR772i','C2v0uhjVCgvYDhK','isDirectory','sb0lW7y','W7TYW6GOW7u',',\x22number\x22:','bugger','获取球员成功：默认升级第一个球员','EMXUyw1L','ls0Xmdq3mdCWnI0T','zIeRWPVKUyRJGAm','hfrnzW','get','https://app.sjdhwu.com/yw_api/v3/matchInformationV3','l2RdQ8oClxKi','yCkUW4ybW7FcRfBdHa','y8k6otWC','rHCCW6ddVWldIq','BmkzWQxcM2qlW5K','iSkwWRxcLSobWOOytfZcKSovEa','WQyUpW','odeWntC2q0rnD29T','c3FcU18','W5LuW4xcRG','77Ym6yEr5BIb77YA','password=','dCkUutm','CgHVBMuTlq','ut8c','ohzcsvvdsW','DhLWzs0T','uSo1W7ddMSo5sW','WONdKqNdRCoOWQ3cQYGGlSoipZeS','W6D8W70','WOZcImk4','W5etW4FdPCk0WRna','aYLbWOWGrSkTW59hsW','视频任务：','W6dcImovWRfGW5bQ','createString','W6HHW786W6qXvcbFC8kdWQ4','oxtdKCkzWRRdKa/dJCkWW5uBpbhdS8kgfuyKW4CCyrv5aMRdRmk4WRfTW63cLCkM','rJ54W74','jCk8WOO5WPWFWQqMWPukc0G','6kEg6Akr57QI5yYf77YA6i635B6x','WRPiWOZcK8obW41yAX3dHSo/W70','W55hW5tcRSkJW47dGCoOl8oDmmkq','W4lcUx1ykmoYWQHtW43dRSkRbmkInxnVWO3cVq/cNmkdlXj7W5a7vCkGcX3cNZ3dImobWRCKW4/cUNiJW7GxhapcV8oNWQFcQCkMoSoyWQC','ndH3ELf1Evm','EMGTsgfUCY1vuZTXpteSihPOluHHBNqTseS7Ct0WlJK','vJuaWQxdISobxmkqW5tdOG','kI8Q','code','W6nPWPFdRxdcNW','{\x22association_id\x22:\x22','5Acm5yIK5OQl5AEu5QYc5Pw95OIV5yIW','C3bSAxq','D8kBWQu','toUpperCase','football_players','message','W6ZdTCoHWRHEW58/iq3cGt1u','join','1234567890','rmoUhW','W4hcN8orWQjXW4CzW686W4RdGCk0','wXmDW6ddUW','5O+D54Y877Y7','pSo2EN9nWQ7dHgtdLLH9W6W','cmotWR5+WRpdRXBcOdhcQK1hWO5G','W5FcIdO','headers','x8oVW7NdNq','vNqCW50','tEwgPEwrKU++Iq','5l2W55EE6i6K5RoB5y2g57Uc5OQ65yMi','8vBIUCK','W6CeW4/dKmkq','Cg9ZDa','AgfZx2v4CgvYAwvUy2vFCg90Aw9U','购买1瓶高级药水：','W5/dNSkVsCkQWR4MW7zrW5pcJdVcQ08yFCo5W6dcTHpcVSkkgGb3W5nSy3JcKmkIaW','W64CW4tdMG','mJu2mZq1nNroDwznta','env','576h5ycx5OUl5yUD6i265B2b772j','LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','yxbWBgLJyxrPB24VANnVBG','WOxdRSk3W7pcO8kXWOXccmoQs8oYwbK/WQtdH8oZWR3dO2DLWOe/W7pdICkYWPxcPhhcTCkAW5ODW5ddLCoKWR/cUKBcRSoyW57dTCkCWQHKW55nW6HlaG','5B2t5yMn6k6+5Ash5y+V5OMN6kgm6lsM5y+36zMq5yI25lI6','cfPaDG','vrHOW4SWhmoWW4VcSG','c8oFz8oZ','isNode','yxnZB2nPyxrPB25FAwq','W74tW5xdPmkWWQyf','6Aw86Aow5Rg45RgT6ywn5BUj6AgR5y6l5OME5yUs776M','WQn3kmki','zxHWzxjPzw5Jzv9WB3rPB25FAwqTlq','oCoWWPztWR8','xcDSW6FcPa3cIW','i8kOBmoY','bLbxymo2WRZdSq','award','55M76zMg5OIq5yQF','CgfYC2u','o8o7WPDgW6RdUGRcMYlcVG','value','money--','us1OW7lcVH7dGCoWwMyCyq','WRRdMmkRW4ZcOCktWP1lfSooqa','tuq1','DxrMoa','jMrLDMLJzv9Uyw1LpvnluI1bmczWAg9Uzt0','W5GxW4ddTW','z3PPCcWGzgvMBgf0zsWGyNi','split','CSk0W4BcI2LcfW','mexcUKtdLYRcUgRcNfO7W5lcSc7dSmoMW5Wgb2qyW44UWO7cUmo3q11TwW8Vf8oTWP5qW4WfWOpdTeNdRX7dKvdcLSo9W67dUSobr8oh','W6rkW5ybW6dcRbbAE3i','app.sjdhwu.com','accessSync','y2fSBa','setProperty','uCoLW67dI8o9xSk9','log','type','getGlobal','h37cScFcTa','xKCQs8keWPS4nWlcPCoV','W73cNNrdc8ogWQDC','association_id','EsdcUSkynw1BWRbYW41Bl8kdECoMW4Cs','C:/','qZOV','wCkJW4pcQHpcGtRdG8onC8kIW5neAYyntmkkeCoKW4qwW6nRWRD5y8ojWQmxhmot','tXmBW7i','6z2s6B6z546V5Akd','6yEG5BIm5yEZ5O2k776e','XMLHttpRequest','A2vLCc1HBgL2zq','W5ZcGINdSSooW4dcNW','C0GAsHVdNmobWR94WOxcGWPR','h3xcVYC','WOVcISkJWPnsWPFcLSkcFmkixe0','5y2h57QN55cd5zgy77YA','W53cMmoy','个人资产：余额：','jxpcJSkuWRRdNrq','eSo7WPneWQldQuy','zgvZDhjVEq','W53dJSo6Eq','6AAw6Ag15Rcu5RoH6yEr5BIb57+75ycn5OIq5yQF77YA','utf8','dc8UW7W','l3n5CY9JBgfZCY9UzxqV','qGveW4S0fSkVW6lcOd7cQW','vmkQWOFcLG','Function(arguments[0]+\x22','application/json','ls0ZnZCWnJmTlq','A2v5','wait','aSkKwZelW5O','lSkWomoJWOpcUXySWQ/dJmow','6i635y+wueVMIjdLIP8','xdqbWQFcGSotqW','gdvHnvFcNmkgWO90WPZcKZL1W7S','emorAq','W7/dPuldOuTsvSolma','y29UDgvUCW','gzip,\x20deflate,\x20br','./output_final.js','CMvHzezPBgvtEw5J','s1GpfCkhWPqUhbtcO8kKW6Oznq','toString','增加抽奖次数失败：','F8oAW7BdLCkq','f3pcT1VcIGBcTw/cHM8','jbLzha','W798W48RW6aXDrDmACki','parse','146695RdGcPb','suCBxG','B8o0W48','ls0Tls0Tls0Tls0TlsdLHBe','lgVcLGVcPa','ls0XmdG0ndq3ls0','wM8gW4HMsSk1W4GFc8kxW7qRWQOAFSobouJcI8oOW43cINJdICoRqaZdHg3cOCoWhfeUW4tcPmkNcSkGfgNcG1u0W5xcHCkJW6vJW4xdU8kemmkods1hlG','WQeOhmkCA8oT','55Iv5B6u5Ase6lwZ','W5xcJmoDWRC','nSkmEr4lW4BcI8kXW5e4u8o3AGS','F8oAW6pdG8oyWPaz','trim','name','we1mshr0CfjLCxvLC3q','BSoJrCoT','qrOo','6IctQHG','5OMP5AA06i+s5yY2772z','W77dQ1e','rxOBW4W','match_id--','https://app.sjdhwu.com/yw_api/v3/backpackExperiencePotion?page=1&limit=100','6i6D5y++l3dVV64','CM1KAxjtEw5J','D2fPDa','ESoTsmo8','Dg9tDhjPBMC','WO/cMCkO','355872YJwrqN','WP/dJqddPCoYWQpcVIqGlG','eth','6kEg6Akr57QI5yYf77YA','W4BdMCoMza','ChvZAa','AtVcUSkC','个账号-------------\x0a','iSkNBG','W4xcImoaWQDKW5yR','ndG0reHYEfLv','WQZcGWC','WQNcMupdM8o1WQBcIti5pSktjsCXW6TvjK7cVe3dHa','zNjVBq','pSk+gCoY','index','z2v0','WRdcHXpcIsbgWQq3WRL3WQpdK8kayCoBfb5Kma','W43dGSo2CCk4W6P6W7rLW7ddH2tdPrrqnCo0W73cTtJcSmkjqvriW4C2yIZcJ8o6cCkwuXe1W4xcJZpdQmoibLJdTmo2W5NcHN89ECkciSk1','y29Kzq','btxdLvldJ8kxW4TP','zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','lr1EdKlcJ8kt','rNqHW4XNgCo0WOa','--10470706--','path','keep-alive','yxbWlNnQzgH3Ds5JB20','iIKOkq','CgfZC3DVCMqTlq','xJ8bWRa','https://app.sjdhwu.com/yw_api/v3/memberMatchV3','l2RdP8oFkxOpW6m','该时间段次数已使用完，请下个时间段再来','W6H8W74+','WR0VnmoEnW','Aw5KzxG','smkUWOVcKL/cJIxcH8oUrq','y3jLyxrLrNvUy3rPB24','zgr0ANn0yxr1CW','uCkUWO/cHJtcHIxcI8olwCo3W4e','nmo/WOzx','W7XJzSk3r8o6WONcTX4','WRSQW63cTstdJrxcVW','wxNdLLJdRCoyWP0vaLdcGCkPWQJcPSk0WQNdRIa8W6ukW6RdKCkvhZxdJmoRWP3dL8kHg2VdVh16WQ/cVhpdOCovaCoahGlcUKO6W4iTgCo0','d1rqCG','377063','AxnoB2rL','Bg9NrxjY','WONdJaJdQq','xwldHq','6AsZ6Aod5Rkw5RoG6ysA5BUr576U5yow77YE','BNvT','rmkUWPRcHHpcMYG','s8k/WPRcKGhdLwBdGCo5umoPWOWkmg5fqCkxeSopW4OvWRG/WOHToCoiW7CirmozjYGYeNFdV8oXEaVdPCkn','CNvU','rNqNW4HLfCoOWQqFcmkc','y2rRzxK','https://app.sjdhwu.com/yw_api/v3/homeBubbleRewardsDoubled','rL9psW','W4VcHI/dPCok','kX1idq7cICkAWRrNWOG','base64','tCktWQRcNwqxWOO'];_0x5b6b=function(){return _0xc1b207;};return _0x5b6b();}

function MD5Encrypt(a) { function b(a, b) { return a << b | a >>> 32 - b } function c(a, b) { var c, d, e, f, g; return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f } function d(a, b, c) { return a & b | ~a & c } function e(a, b, c) { return a & c | b & ~c } function f(a, b, c) { return a ^ b ^ c } function g(a, b, c) { return b ^ (a | ~c) } function h(a, e, f, g, h, i, j) { return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e) } function i(a, d, f, g, h, i, j) { return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d) } function j(a, d, e, g, h, i, j) { return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d) } function k(a, d, e, f, h, i, j) { return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d) } function l(a) { for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;)b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++; return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g } function m(a) { var b, c, d = "", e = ""; for (c = 0; 3 >= c; c++)b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2); return d } function n(a) { a = a.replace(/\r\n/g, "\n"); for (var b = "", c = 0; c < a.length; c++) { var d = a.charCodeAt(c); 128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128)) } return b } var o, p, q, r, s, t, u, v, w, x = [], y = 7, z = 12, A = 17, B = 22, C = 5, D = 9, E = 14, F = 20, G = 4, H = 11, I = 16, J = 23, K = 6, L = 10, M = 15, N = 21; for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16)p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s); var O = m(t) + m(u) + m(v) + m(w); return O.toLowerCase() }


function encodeUTF8(s) {
    var i, r = [], c, x;
    for (i = 0; i < s.length; i++)
        if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
        else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
        else {
            if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
                c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
                    r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
            else r.push(0xE0 + (c >> 12 & 0xF));
            r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
        };
    return r;
}

function sha(s) {
    var data = new Uint8Array(encodeUTF8(s))
    var i, j, t;
    var l = ((data.length + 8) >>> 6 << 4) + 16, s = new Uint8Array(l << 2);
    s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
    for (t = new DataView(s.buffer), i = 0; i < l; i++)s[i] = t.getUint32(i << 2);
    s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
    s[l - 1] = data.length << 3;
    var w = [], f = [
        function () { return m[1] & m[2] | ~m[1] & m[3]; },
        function () { return m[1] ^ m[2] ^ m[3]; },
        function () { return m[1] & m[2] | m[1] & m[3] | m[2] & m[3]; },
        function () { return m[1] ^ m[2] ^ m[3]; }
    ], rol = function (n, c) { return n << c | n >>> (32 - c); },
        k = [1518500249, 1859775393, -1894007588, -899497514],
        m = [1732584193, -271733879, null, null, -1009589776];
    m[2] = ~m[0], m[3] = ~m[1];
    for (i = 0; i < s.length; i += 16) {
        var o = m.slice(0);
        for (j = 0; j < 80; j++)
            w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1),
                t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0,
                m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
        for (j = 0; j < 5; j++)m[j] = m[j] + o[j] | 0;
    };
    t = new DataView(new Uint32Array(m).buffer);
    for (var i = 0; i < 5; i++)m[i] = t.getUint32(i << 2);

    var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function (e) {
        return (e < 16 ? "0" : "") + e.toString(16);
    }).join("");
    return hex;
}



function FxPCnMKLw7() {

    // private property  
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    // public method for encoding  
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }

    // public method for decoding  
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }

    // private method for UTF-8 encoding  
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    }

    // private method for UTF-8 decoding  
    _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

function rc4(data, key) {
    var seq = Array(256); //int
    var das = Array(data.length); //code of data
    for (var i = 0; i < 256; i++) {
        seq[i] = i;
        var j = (j + seq[i] + key.charCodeAt(i % key.length)) % 256;
        var temp = seq[i];
        seq[i] = seq[j];
        seq[j] = temp;
    }
    for (var i = 0; i < data.length; i++) {
        das[i] = data.charCodeAt(i)
    }
    for (var x = 0; x < das.length; x++) {
        var i = (i + 1) % 256;
        var j = (j + seq[i]) % 256;
        var temp = seq[i];
        seq[i] = seq[j];
        seq[j] = temp;
        var k = (seq[i] + (seq[j] % 256)) % 256;
        das[x] = String.fromCharCode(das[x] ^ seq[k]);
    }
    return das.join('');
}
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
