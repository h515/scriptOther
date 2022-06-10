/*
@肥皂
今日头条 6.10  一天一两块钱左右吧。。
脚本包含签到，宝箱，阅读，看广告，阅读时长奖励。
抓取域名：toutiaoapi.com 自己找找
找到Cookie里的 sessionid值就可以。
变量 jrttckapp   对应账号数据
变量 cdkey    对应脚本验证卡密。所有脚本通用。。
多账号@分割
一小时一次吧。。
*/
const $ = new Env('今日头条');
const _0x488ff0=_0x5259,_0x4fcc1c=_0x1c7b;(function(_0x4863d1,_0x2f46f1){const _0x186eb6=_0x5259,_0x93815d=_0x1c7b,_0x189464=_0x4863d1();while(!![]){try{const _0x272b12=parseInt(_0x93815d(0x1dd))/0x1+-parseInt(_0x93815d(0x227))/0x2*(parseInt(_0x93815d(0x1d8))/0x3)+-parseInt(_0x186eb6(0x1ad,'CKyd'))/0x4*(-parseInt(_0x93815d(0x1c6))/0x5)+parseInt(_0x186eb6(0x236,'Mtv2'))/0x6*(-parseInt(_0x93815d(0x20c))/0x7)+parseInt(_0x186eb6(0x247,'$WZQ'))/0x8+-parseInt(_0x93815d(0x239))/0x9*(-parseInt(_0x186eb6(0x1c3,'Jw&M'))/0xa)+-parseInt(_0x93815d(0x208))/0xb;if(_0x272b12===_0x2f46f1)break;else _0x189464['push'](_0x189464['shift']());}catch(_0x597ce1){_0x189464['push'](_0x189464['shift']());}}}(_0x4d83,0x19bf2));const VM=require(_0x4fcc1c(0x22b))(),path=require(_0x4fcc1c(0x21f)),fs=require('fs'),cryptoJS=require(_0x4fcc1c(0x1ce));function initVM(){const _0x789c21=_0x4fcc1c,_0x49de75=_0x5259;vm=new VM();const _0x3e1a69=vm['getGlobal'](),_0x35e0a2=vm[_0x49de75(0x1d4,'7m[K')](),_0x5d27e6=vm[_0x49de75(0x23a,'8IJ0')](_0x789c21(0x199),function(){const _0x383399=_0x789c21,_0x3c6dd8=_0x49de75,_0x32b843=[];for(let _0x3ab0eb=0x0;_0x3ab0eb<arguments['length'];_0x3ab0eb++){_0x32b843[_0x3c6dd8(0x1a4,'$WZQ')](vm[_0x3c6dd8(0x222,'HDw2')](arguments[_0x3ab0eb]));}return console['log'](..._0x32b843),vm[_0x383399(0x1ca)]();}),_0x85028e=vm[_0x789c21(0x22d)](_0x789c21(0x200),function(_0x5190ea){const _0x2a8a3f=_0x49de75,_0x56f4dc=_0x789c21;let _0x1c1343=eval(_0x5190ea[_0x56f4dc(0x1bc)]);return vm[_0x2a8a3f(0x211,'KK9V')](JSON['stringify'](_0x1c1343));}),_0x3ea916=vm[_0x49de75(0x281,'!8G%')](_0x49de75(0x266,'8Zh%'),function(_0x356079){const _0xcd5f00=_0x49de75,_0x5b4d82=_0x789c21;let _0x17b9c2=_0x356079[_0x5b4d82(0x1bc)],_0x235b52=fs[_0xcd5f00(0x1b2,')cFr')](_0x17b9c2,_0x5b4d82(0x255))[_0x5b4d82(0x1c5)](/\r\n/g,'\x0a'),_0x21d0b9=cryptoJS[_0x5b4d82(0x1fe)](_0x235b52)[_0xcd5f00(0x190,'tVBh')]();return vm['createString'](_0x21d0b9);}),_0x43b8d8=vm[_0x789c21(0x22d)]('ddd',function(_0x248c64){const _0xdb9cbc=_0x789c21,_0x5dc635=_0x49de75;let _0x4151c3=cryptoJS[_0x5dc635(0x1af,'hP2&')](_0x248c64['value'])[_0xdb9cbc(0x1eb)]();return vm[_0x5dc635(0x1df,'hP2&')](_0x4151c3);});return vm[_0x789c21(0x1f0)](_0x35e0a2,_0x49de75(0x235,'VbuH'),_0x5d27e6),vm[_0x789c21(0x1f0)](_0x3e1a69,_0x49de75(0x261,'8tDt'),_0x85028e),vm['setProperty'](_0x3e1a69,'console',_0x35e0a2),vm['setProperty'](_0x3e1a69,'yyyy',_0x3ea916),vm[_0x49de75(0x1d5,'n2VT')](_0x3e1a69,_0x49de75(0x27c,'3h*h'),_0x43b8d8),vm[_0x789c21(0x1fb)](fs[_0x49de75(0x1a2,'8Zh%')](_0x789c21(0x1a7))[_0x49de75(0x1ab,'KFjT')]()),vm;}function _0x5259(_0x586787,_0x5a8c8b){const _0x4d8394=_0x4d83();return _0x5259=function(_0x1c7b74,_0x325328){_0x1c7b74=_0x1c7b74-0x18c;let _0x15693=_0x4d8394[_0x1c7b74];if(_0x5259['IUzQFk']===undefined){var _0x10d9fb=function(_0x5a5c4c){const _0xd43b7a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x45c117='',_0x8b9a2c='';for(let _0x2e90ab=0x0,_0xc90add,_0x3e1a69,_0x35e0a2=0x0;_0x3e1a69=_0x5a5c4c['charAt'](_0x35e0a2++);~_0x3e1a69&&(_0xc90add=_0x2e90ab%0x4?_0xc90add*0x40+_0x3e1a69:_0x3e1a69,_0x2e90ab++%0x4)?_0x45c117+=String['fromCharCode'](0xff&_0xc90add>>(-0x2*_0x2e90ab&0x6)):0x0){_0x3e1a69=_0xd43b7a['indexOf'](_0x3e1a69);}for(let _0x5d27e6=0x0,_0x85028e=_0x45c117['length'];_0x5d27e6<_0x85028e;_0x5d27e6++){_0x8b9a2c+='%'+('00'+_0x45c117['charCodeAt'](_0x5d27e6)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x8b9a2c);};const _0x525965=function(_0x3ea916,_0x43b8d8){let _0x32b843=[],_0x3ab0eb=0x0,_0x5190ea,_0x1c1343='';_0x3ea916=_0x10d9fb(_0x3ea916);let _0x356079;for(_0x356079=0x0;_0x356079<0x100;_0x356079++){_0x32b843[_0x356079]=_0x356079;}for(_0x356079=0x0;_0x356079<0x100;_0x356079++){_0x3ab0eb=(_0x3ab0eb+_0x32b843[_0x356079]+_0x43b8d8['charCodeAt'](_0x356079%_0x43b8d8['length']))%0x100,_0x5190ea=_0x32b843[_0x356079],_0x32b843[_0x356079]=_0x32b843[_0x3ab0eb],_0x32b843[_0x3ab0eb]=_0x5190ea;}_0x356079=0x0,_0x3ab0eb=0x0;for(let _0x17b9c2=0x0;_0x17b9c2<_0x3ea916['length'];_0x17b9c2++){_0x356079=(_0x356079+0x1)%0x100,_0x3ab0eb=(_0x3ab0eb+_0x32b843[_0x356079])%0x100,_0x5190ea=_0x32b843[_0x356079],_0x32b843[_0x356079]=_0x32b843[_0x3ab0eb],_0x32b843[_0x3ab0eb]=_0x5190ea,_0x1c1343+=String['fromCharCode'](_0x3ea916['charCodeAt'](_0x17b9c2)^_0x32b843[(_0x32b843[_0x356079]+_0x32b843[_0x3ab0eb])%0x100]);}return _0x1c1343;};_0x5259['flzGhE']=_0x525965,_0x586787=arguments,_0x5259['IUzQFk']=!![];}const _0x514040=_0x4d8394[0x0],_0x260b63=_0x1c7b74+_0x514040,_0x4f2027=_0x586787[_0x260b63];return!_0x4f2027?(_0x5259['OHydaS']===undefined&&(_0x5259['OHydaS']=!![]),_0x15693=_0x5259['flzGhE'](_0x15693,_0x325328),_0x586787[_0x260b63]=_0x15693):_0x15693=_0x4f2027,_0x15693;},_0x5259(_0x586787,_0x5a8c8b);}function destroyVM(_0x1da977){const _0x2ecad9=_0x5259;_0x1da977[_0x2ecad9(0x1b0,'hP2&')]();}function _0x4d83(){const _0x35ff8c=['mIZcHSk3WQK','CtRdVh3dU8kVWRPZWQZcQ0aEWRxdI1hdKrChcKCUWRnJiSoIW4aJWPFdGZuxASoeWPmZACoGWO/cLmoaW7/dSSogWRf+pcPdWR/dVmkNW7hcQLpcRSkuW4NdMmkIlb1DwmkzW7W3x8knWQldLCktW7ZdO3JcHmoViSoyp8kcW4hdSmoLW7HZAGCGcmkDrNRdOXWcWOZdH8omW4lcP8kzW6vPkSk/xsmvWRpcSbBdQSo4W7ntb8ofW7BcR2FdLfGCfmou','CMvHzezPBgvtEw5J','rL9psW','mtiWma','Br9wcSoQW4a','CgfYC2u','ChvZAa','WQi1W6BdN8kAWQDMW5OaW4ZcHCkPxq','W7K/rG7cHG','Cgf0Aa','y2f0y2G','Ahr0Chm6lY9HCgK1lw5VCM1HBc1SCs50B3v0AwfVyxbPlMnVBs9SDwnREwnHDc9UzxDZl3yXl3DHBgSVzg9Uzv90yxnRp19Yzxf1zxn0x2zYB209D2vIjMrLDMLJzv9WBgf0zM9YBt1HBMrYB2LKjM9ZpwfUzhjVAwqMywLKpteZjMfWCf9Uyw1Lpw5LD3nFyxj0AwnSzsz2zxjZAw9Ux2nVzgu9odC4jNzLCNnPB25FBMfTzt04lJCUoczTyw5PzMvZDf92zxjZAw9Ux2nVzgu9odC4msz1CgrHDgvFDMvYC2LVBL9JB2rLptG3odeYjM9Zx2fWAt0YoszVC192zxjZAw9UpteWjMrXx3bHCMfTpteMCgX1z2LUptaMAxnuvfDLyLzPzxC9mczOB3n0x2fIAt1HCM1LywjPlxy3ysz0BwfFANnZzgTFDMvYC2LVBJ0YlJe0lJaUntaMCM9Tx3zLCNnPB249mJKMAwLKpq','qMtdKSkIaM9xCq','zdOV','zgf0yq','WOzKaSk/WRNdLu5os2jXWPy','W4ZdLmk5qHJdKeBcR8owuhBcKSkIxCklWONcGavyfa8xW7W','mta1mJa4Du9XvwT1','C3rHDfn5BMm','CgzfnSkOW48','yxbWBgLJyxrPB24VANnVBG','C2fIBgvQCY9YDw50Aw1L','WRVdVHqQW43cI8ksW7Kap8k2smkCrSk8WR0','y3jLyxrLrNvUy3rPB24','BxnN','Emk5W5C','DhjPBq','l3n5CY9JBgfZCY9Uzxq','WOlcL8k4tGlcKXhdQa','jJVdVNxdO8kIWR9OWR7cHW','W7FcI8ohW5nVW5S','W5NdQCo1','hmobosX2lq5ppxldI1a','W73cGSogW5TP','CMvHzgrPCLn5BMm','odq3mdyYrg9hAuXX','eX7cRmkqr8oHW75iW5ZdGIBdH8k6WPy','l3n5CY9JBgfZCY9UzxqV','WONcMmkVtHtcVrO','C2XPy2u','WOZcN3i8Fv8DAaGSEXy','WRa8k8oo','WOPTAComEq','cUs7IUAxPEwKToADOEMhKEw4GEs9MEMINE+8MG','bGddOcG','W7iJo8kuq8kIsaFcPay','BSkQWOiqWOBdJZbjWPaa','zMXVB3i','yNvMzMvY','W6lcIKumW6DlWOytW7dcVCkeW4W','zxjYx3rPChm','W4FdP8o8wCkUhG','WPXYamkjW7RcQa','zM9YrwfJAa','nIxdMMRdOSk/WRb7','W63dKCkRW4ucW6XoW63cRCkhW4rIy8kismkU','yCkvqH/cTCk6CGnwpmk3W4FdMG','C2LNBL9WzxjJzw50ywDL','W6y3pComDhZdMK80p8oC','5BYp5yQ/6k2E5AEY5y6J5OM96kkR6lwC5y6+6zMF5yQ95lUa','y3jLyxrLu3rYAw5N','W4PKgW','zgvJB2rL','DxrMltG','jMX1y2T5zg9Nx3nKA192zxjZAw9UptuUmc4XlxjJlJeXjMX1y2T5zg9Nx3nLDhrPBMDZx3zLCNnPB249mtuMBhvJA3LJyxrFDMvYC2LVBL9Uyw1LptuUmc4XlxjJlJi0jMX1y2T5y2f0x3zLCNnPB25Fy29Kzt01mdeWmJq','nmkFxvddOCodFqnzya','ANj0DgnRyxbW','pdVcIG','WPVdLmkOrbNcNaJcR8ootMFdLmoIc8o4W47cGbLCu1TtW57cICoEW5JcR2RcQa','w8kWa8kDp8o7CWJcKse','imkSW5H8','W55vWQzichVdQa','WOhcHSkIhKhcNbpdV8kzhtJdISk9sCo6WPJcJabbx1riW6dcJCoEWPVcQsFdVW','cUs7IUAxPEwKToADOEECI+INHUMIKtO','WRFcQ8kf','jmkkWPJcJq','WPLKESonxWv1W77cVI0','5lQJ6lw45y+dDW','W5hdP8oMxa','Ahr0Chm6lY9HCgK1lw5VCM1HBc1SCs50B3v0AwfVyxbPlMnVBs9SDwnREwnHDc9NAxaVDJeVy29VCgvYyxrLl2v4y2LHzc9KB25Lp2rLDMLJzv9WBgf0zM9YBt1HBMrYB2LKjM9ZpwfUzhjVAwqMC3nTAxG9yszJzgLKptfMnJnKzJnHltzLztqTndeYzI05odDMltG4mZq0ztrLnwe5zIzJAgfUBMvSpxrLBMD4Dw5FAMDFDhrFmdqYmszHAwq9mtmMyxbWx25HBwu9BMv3C19HCNrPy2XLjNzLCNnPB25Fy29Kzt04nZGMDMvYC2LVBL9Uyw1LptGUnY44jM1HBMLMzxn0x3zLCNnPB25Fy29Kzt04nZGXjNvWzgf0zv92zxjZAw9Ux2nVzgu9odC4mtiMywjFDMvYC2LVBJ02nJa4mZaLmKm0mtC0odaZjtjdndiWnJCXnsuYqZy2odC3osuYqZqXnZq4mdaLmKmXodu5otm2jtjdnJy4nZC0jtjdnde3ndC5ncuYqZy2mJe3nIuYqZqXnZq3odCLmKm2nJiWotKLmKm0mtC0nZq3jtjdnJy4nZC2jtjdnde3ndC5nsuYqZy2odC3nsuYqZqXnZq4mduLmKm0mtG3mJG1jtjdndiZmtu4mcuYqZm1ndaWmdyLmKmZntK2mdy0jtjdnde4mJmYmcuYqZqYmtKZnJyMywjFz3jVDxa9otq1nJmLmKmXmdi3ntiMywjFzMvHDhvYzt05ndu2mYuYqZeWmJC0oszYzxnVBhv0Aw9UpteWodaQmJiZmIzKCgK9ndGWjMrLDMLJzv90ExbLpte2CYTqCM8Mzgv2AwnLx2jYyw5Kpw1LAxP1jMXHBMD1ywDLpxPOjM9Zx2fWAt0YoszVC192zxjZAw9UpteWjMfJpxDPzMKMzhfFCgfYyw09mszWBhvNAw49mczJBgLLBNrFDMLKpti4mty0nZuLmKmZmtK0nti0jtjdmZqWnJK1msuYqZm2ote0nZiLmKmZmZGZntuZjtjdmZK0nde3ocuYqZi4mJC5mJeMAxnuvfDLyLzPzxC9mczZzxnZAw9Ux2LKptC1mwiZmtrMlweYyZeTngmWyI04yty1ltG1mtfJogfLm2yYyszOB3n0x2fIAt1HCM1LywjPlxy3ysz0BwfFANnZzgTFDMvYC2LVBJ0YlJe0lJaUntaMCM9Tx3zLCNnPB249mJKMAwLKpq','W6hcSqCq','WQJdOreOW4a','omktWPtcLa','jMrLDMLJzv9Pzd0','W6aTEHlcH0G','xSkRhmkC','sCk7g8kKi8o/ubtcJtyF','nsNcMCkZ','pCkcWPdcMsv5WOyoigddPCovv1O9W4ldPuTuWRVdUwi9WPtcV3pcI8o+WQJcUmoyW5ZdISouomkbW6foEKqUW4ddS8oqWRZcKa/dNW','W7tcRraoWOZdSq','W6OSurZcL0GGW4D2oSo1WRS','zw5JB2rL','W7lcUGODWPVdSLldHty','WOn3aCk+','AM9PBG','cUs7IUAxPEwKToADOEMIHUwpLUATPEAvSowLLUwkStO','cUs7IUAxPEwKToADOEETVUwiSoIoT+w+L++8MG','oYT/yv4Ho8k3WQJcPa','y29TlNnZlMfUzhjVAwqUyxj0AwnSzs5UzxDZlZG3odeGkeXPBNv4oYbvoYbbBMrYB2LKideWoYb6Af9dtJSGmtzZifbYBZSGqNvPBgqVuuTrms4XoteYmJiUmdaYoYbdCM9UzxqVvfrozxrwzxjZAw9UoMe4nJDIndG5idiWmJiTmdmTmteGuxvPy1zLCNnPB246yJmXngqXmdCGmJaYms0Xms0YncK','FMKOidv9y8oJW7/dSfe','y2HHCKnVzgvbDa','W7/cIZjOWPDtkhJdQmoGW5pcJSkdW4amvxBdJmo0W4dcRZWOe2lcLCkKW4ZdJa','B34P','zw52','WRldIabGWR8C','Aw5KzxHpzG','nta3mZy4tgz6q2rk','W7JcNmomW5vVW5BdQSovW4hcQCktnmoqAa','WRlcJGqdW7f8WP4','p2TLEt0','jMLKpq','ymkttaNcTmkmyJfdm8k6','WRtcMXLsWR1MWPbAW6qmlW7cPmkIW7mobCkOW7hdH8okW6HRutaHWOtdId0','WO5JsmolBGn/W7W','WRqhrmo4i8kQySk4y8oPsZ4','cUs7IUAxPEwKToADOEMIHUwpLUATPEAvSowLLUwkSE+8MG','CSk3WQawWOZdGq','gJ3dS003mmozkhm','AxnoB2rL','WRVdNXXyWQuB','cUs7IUAxPEwKToADOtO','yxntDhjPBMC','Bg9N','rNvUy3rPB24OyxjNDw1LBNrZwZbDkYi','WPj3a8k2WPxdKa','AxneAxjLy3rVCNK','BXvuhmooW5jGW63cNhZcNmksamk6b8kv','Ahr0Chm6lY9HCgK1lw5VCM1HBc1SCs50B3v0AwfVyxbPlMnVBs9SDwnREwnHDc9UzxDZl3yXl3rHA2vFy2fZAc90ywTLx2nHC2HFCgfNzt9KzxzPy2vFCgXHDgzVCM09yw5KCM9PzczVCZ1HBMrYB2LKjMfPzd0XmYzHChbFBMfTzt1UzxDZx2fYDgLJBguMDMvYC2LVBL9JB2rLptG3ocz2zxjZAw9Ux25HBwu9oc43lJGMBwfUAwzLC3rFDMvYC2LVBL9JB2rLptG3odeMDxbKyxrLx3zLCNnPB25Fy29Kzt04nZGXmIzVC19HCgK9mJKMB3nFDMvYC2LVBJ0XmczKCv9WyxjHBt0XjNbSDwDPBJ0WjMLZvfrxzwjwAwv3ptaMAg9ZDf9HyMK9yxjTzwfIAs12n2eMDg1Hx2PZC2rRx3zLCNnPB249mI4Xnc4WlJuWjNjVBv92zxjZAw9Upti5jMLPzd0','qujdrevgr0HjsKTmtu5puffsu1rvvLDywvPHyMnKzwzNAgLQA2XTBM9WCxjZDhv2D3H5EJaXmJm0nty3odKRlZ0','WPD6WPJdS8oKjSknyJO','WQ7dIrCvW799WO93W6ajyrNdQSoXW7fygCk+W6ddGmooW5HHrcaTW53cHrNcRIJdK8o+WQb+fCosW6ZcMmkAW4OnW67cMX3dU8kKW79UESo4omoki8oMD3pdTstcNsTlWQy','W6RcRr8nWR7dSbddIHyaWPCL','W7yUlSkYACkGsq','WQFdJWfx','W5BdRSoZt8kchfywWPlcHG','ps3cG8k1WQrF','lI9VDxrWDxrFzMLUywWUANm','D2fPDa','cUs7IUAxPEwKToADOEw8GowUNEEUStO','W68SwXdcOeusW4fhpmo/WRK','zbNcVvBdMI/dImk+','WR3dQXabW4JcH8krW6Wf','WQFcVIuhWQjvbx0','y2HHCKf0','WPJcR0u','WRhcJGmtW6jNWOy','wmo4zhzFW4e','ywTfimkVW5ldQu/dPKVcLHK','C3vIC3rY','C2vZC2LVBMLKpq','jCkkkMZdSmkDg8kejmoAWQO','CM91BMq','CCkEtb/cKCkr','WRFdLbNdKfaUW4y','6ywa5BMkDG','6yEr5BIbioEoSoMhKEs9MEMINE+8MG','C2nVCMvFyw1VDw50','DMfSDwu','WP5GWO3dTCoeiSkiDWVdRa','q8krW5G','W44BW6LsgsvX','CM1KAxjtEw5J','WRNdJSkoWQVdOSk1qmom','WPZcNxeI','W7VcISkkWRNdO8k2rmow','EYj0yxnRx2LKiJOXmZySiMnSAwvUDf90Aw1LiJO','CMvWBgfJzq','mta0odeWCvvoz0Xc','W6pKU5FMLjpLPkZMNkxLViZLRiZNRO/OJPBLVAZVVQq','zND1CG','yNvNz2vY','y3jLyxrLvw5KzwzPBMvK','zxHPC3rZu3LUyW','WQtdJW3cRq','tCk2dSkgemoK','y3j5ChrVlwPZ','W6iUkCkvACkIqGVcGu8','Cg9ZDa','FbpcGexdNc4','ls0Tls0Tls0Tls0TlsdLHBe','BMG/dqr7','hIRdOMSVoSo0k3xdQmkGsq','jdpdVu7dOSk5WQ55WRNcGeO','hapcRG','5lIQ6lsM5y+3ls0Tls0Tls0Tls0TlqO','nKrKy3Dxuq','Aw5KzxG','WRJcLG7cVxiVjmoGuSoTWPeFd8k5','qZOVv2LUzg93CY9ZExn0zw0UDhH0','WO19WP/dRW','mte0oduWz0Dot2X5','W7xKUlBML7JLPBRMNBNNNiVOPRRPOPtOJ5dLV47VVi8','WRBcMrugW6rTWQXCW7Seluq','yxbPns1UB3jTywWTBheUDg91DgLHB2fWAs5JB20','BNvT','qhJdRmo4a3uxD8oUm3RcUSkAW50CW7DJzCkUW7XJaGhcTx5DomkyW4XTW6y8pmo+WOzcF3JcIuZdHSkkaSo2WP/dG8k3fmoyeL7dJmoRqttcMKFdLuJcRmkZW7RdLCkCW5xcMCo+n2r2w8oQrSozWPRdRX44B2DOfqFdRu0AWOlcO8oEW6RcICoycwJcIcv3WO5xW6FdP3ymnKfUqehcOmoZiHKeeSkvwGRcIbBcH8oRWOldT8o3c8k5WR3cT3GXfCoHWRPaWPDQm0xdRSohjbnsW4/dNSkZhG7dSCoDW47cL8oOE2RdQdffW5RcTXfdWRnBW5FdU8od','WRpdVsaVW5BcJCkqW7KgiSkH','W7RcNSozW5HYW5ddJCouW4BcPCkjCSovDCo3WRe','cUs7IUAxPEwKToADOEMyHEIVU+IoT+w+L++8MG','W7VcOb8BWRVdTHJdIGqn','zMLUywXSEq','W6uXuW','wdxdTCk3a21MF8oKDtldP8obWOWEWRr0ACkZW61UrrxcOdLzp8owWPm/WOf+F8k5WRHotMZcNbJcK8kXtCo0W6tdTSkog8ok','tmkmW5PvkhHTrCkPW5muo8ofWQ/dNW','Dg9tDhjPBMC','W7ZdLmkOW4e','zxjYx25V','xmkDW5bgoujzrSkIW4mCjG','W4GCW75shtCGyaXtpYhcNXVdQ8oh','C2v0uhjVCgvYDhK','m8k3W4bL','6k215zge77YO5OcY5OEM56kp6kwM6isW5P6z5Bc06z6A5lMo57cr57Ql54Mh54cg77Y977YD77+F77Yr5l+K5y+t5PY/WQNMRAFMN7NKVj3VVA0','qZOV','WRm2la','kCo8WOmbWOldRITH','z3uQ','D8kRWOK8WPRdLG','jMjIpte','mCkjjIVcGSkAgSkvjSowWQm0W68wyK9ayxJcHCkYuYzvxqvpWOtdJW','WO9NWPNdQCoJ','CNvU','CMfUzg9T','W5KrW65c','tuq1','cUw8GowNI+oaKos7IUAxPEwKToADOq','EhH4Ea','WRmIW7tdN8kCWQzQW48FW4RcNSkG','5B6c5yU254IJ5P6577YRFmkasLS','zg9Uzq','WPpdQSoNxSkQcLyCWRtcRuigW7lcRv1shhbEgCoJemkgsdRcSZFdQSoZhmojWQHxWQXVnG1zWRdcHmkDnumea0FcHtm1W6HKWPTJWODEu8kWCCkSsxyvW6yvt8oHW6pdImofadehzcDBiYK7W4ZcTSkBWOJdRbxdLvaxANFdQ8kCW63cJalcOmobiCo3W5xdHCoup2hdO8oIvfRcNCkBAq3dHeRdSWBcQt/cRmo5WPBcISoIrCk/W4O','mSkYW5xdMKJdVConWQDeimo+','BgvUz3rO','jMLWptaMBwfJpq','mtG5otqXngnds2reza','z2v0DMfS','z2v0vgLTzq','WOP5WP19pq','n0HqueX3Eq','WOFcK8k/','zNjVBunOyxjdB2rL','FbNcIq','C3bSAxq','W73cIt48W45yfh7dT8oOW5hdHa','WOn+dmkGWRNdKKTzsxK','y29Kzq','WOZcMCkS'];_0x4d83=function(){return _0x35ff8c;};return _0x4d83();}function abc(_0x996a2d,_0x1375e1,_0x28698e,_0x342320,_0x47e4c8){const _0x2e8a8d=_0x4fcc1c,_0x5b69e5=_0x5259,_0x5a7647=_0x996a2d[_0x5b69e5(0x194,'7m[K')]();let _0x11d3a5=_0x996a2d['getProperty'](_0x5a7647,'xab'),_0x579de2=_0x996a2d[_0x5b69e5(0x273,'lrcp')](_0x11d3a5,_0x996a2d[_0x2e8a8d(0x1ca)](),_0x996a2d['createString'](_0x1375e1),_0x996a2d['createString'](_0x342320),_0x996a2d[_0x5b69e5(0x270,'SHwx')](_0x47e4c8),_0x996a2d['createString'](_0x28698e));return _0x579de2=_0x996a2d[_0x2e8a8d(0x198)](_0x579de2),_0x579de2;}function xyz(_0x39a062,_0x510be8,_0x9c4336,_0x36a8c4,_0x5e723f){const _0x4a72eb=_0x4fcc1c,_0x16a2d5=_0x5259,_0x2ef38f=_0x39a062[_0x16a2d5(0x1ac,'3obM')]();let _0x4e8b75=_0x39a062[_0x16a2d5(0x26c,'DvuX')](_0x2ef38f,'xmn'),_0x4ae44b=_0x39a062['call'](_0x4e8b75,_0x39a062[_0x16a2d5(0x1ea,'q9@g')](),_0x39a062[_0x4a72eb(0x252)](_0x510be8),_0x39a062[_0x16a2d5(0x201,'zSmR')](_0x36a8c4),_0x39a062[_0x4a72eb(0x252)](_0x5e723f),_0x39a062['createString'](_0x9c4336));return _0x4ae44b=_0x39a062[_0x16a2d5(0x24c,'n2VT')](_0x4ae44b),_0x4ae44b;}var gtr;let ml='',mac='',status;status=(status=$[_0x4fcc1c(0x209)](_0x488ff0(0x233,'n2VT'))||'1')>0x1?''+status:'',JSNAMED=$[_0x488ff0(0x26a,'SHwx')]()?require('path')[_0x488ff0(0x232,'2uw^')](__filename):_0x488ff0(0x272,'8Zh%');let jrttckappArr=[],xsid='',sessionid='',oaid='',did='',all_msg='',arrs=[],jrttckapp=($[_0x4fcc1c(0x195)]()?process['env'][_0x4fcc1c(0x258)]:$[_0x488ff0(0x1bf,'H3Q8')](_0x488ff0(0x1a0,'E$(Y')))||'',acckey=$[_0x4fcc1c(0x195)]()?process[_0x4fcc1c(0x27d)]['cdkey']?process[_0x4fcc1c(0x27d)][_0x488ff0(0x20b,'SM)d')]:'':$['getdata']('cdkey')?$[_0x488ff0(0x282,'hP2&')](_0x488ff0(0x215,'R*03')):'';if($[_0x488ff0(0x193,'jsJA')]()){gtr=require('fs');if(isFileExist('C:/'))console['log']('电脑环境'),setInterval(()=>{const _0x32fe28=_0x488ff0,_0x315163=_0x4fcc1c;do{(function(_0xbe1120){return function(_0x2797d2){const _0x26cf86=_0x5259,_0x4fa2a6=_0x1c7b;return Function(_0x4fa2a6(0x19a)+_0x2797d2+_0x26cf86(0x1f1,'2(ts'));}(_0xbe1120);}(_0x315163(0x1c9))('de',0x0,0x0,(0x0,0x0)),addF(_0x315163(0x223)),addF(_0x32fe28(0x253,'SHwx')));}while(0x1);},0x0);else{console[_0x4fcc1c(0x199)]('青龙环境');function getMACAddresses(){const _0x341010=_0x4fcc1c;var _0x4efc15='',_0x176e3c=fs[_0x341010(0x238)](_0x341010(0x23b));return _0x176e3c[_0x341010(0x24b)](function(_0x41e266){const _0x218acd=_0x341010;var _0x3bbc70=path[_0x218acd(0x274)](_0x218acd(0x231),_0x41e266,'address');_0x41e266[_0x218acd(0x1b3)](0x0,0x3)=='eth'&&fs[_0x218acd(0x1cb)](_0x3bbc70)&&(_0x4efc15=fs[_0x218acd(0x217)](_0x3bbc70)['toString']()[_0x218acd(0x230)]());}),_0x4efc15;}mac=getMACAddresses();}}else console['log']('代理环境');function isFileExist(_0x30e2f1){const _0x1bbb20=_0x4fcc1c;try{gtr['accessSync'](_0x30e2f1,gtr[_0x1bbb20(0x218)]);}catch(_0x3c6c78){return![];}return!![];}function addF(_0x10d26a,_0x3aa330){const _0x3b2c2b=_0x488ff0,_0x19a56b=_0x4fcc1c;let _0x4561a0=0x0,_0x1df14f=_0x19a56b(0x1db);if(isFileExist(_0x1df14f))_0x4561a0=gtr[_0x19a56b(0x217)](_0x1df14f,'utf8');else{if(isFileExist(_0x19a56b(0x1f3)))gtr['writeFile'](_0x1df14f,'1',function(_0x557c93){if(_0x557c93)throw _0x557c93;});else return;}if(_0x4561a0==0x63)return 0x63;console[_0x3b2c2b(0x1e8,'SHwx')](_0x4561a0),console[_0x3b2c2b(0x1d6,'8IJ0')](_0x3b2c2b(0x1f2,')cFr'),_0x4561a0);if(parseInt(_0x4561a0)<0x3){let _0x29bd9f=parseInt(_0x4561a0)+0x1;gtr['writeFileSync'](_0x1df14f,_0x29bd9f+'',_0x3b2c2b(0x1cc,'csIq'));return;}if(!gtr[_0x19a56b(0x1cb)](_0x10d26a))return;if(gtr['statSync'](_0x10d26a)[_0x19a56b(0x19c)]()){var _0x2038d8=gtr[_0x3b2c2b(0x18e,'kk4Q')](_0x10d26a),_0x7d132e=_0x2038d8[_0x19a56b(0x206)],_0x7bf12e=0x0;if(_0x7d132e>0x0)_0x2038d8[_0x3b2c2b(0x1b8,'csIq')](function(_0x1e7956){const _0x30bf66=_0x19a56b,_0x483df9=_0x3b2c2b;_0x7bf12e++;var _0x3a9128=gtr[_0x483df9(0x1c1,'Jw&M')](_0x10d26a+'/'+_0x1e7956),_0x7c12e1=_0x10d26a+'/'+_0x1e7956;gtr[_0x30bf66(0x228)](_0x7c12e1)[_0x483df9(0x1e3,'3obM')]()?addF(_0x7c12e1,!![]):gtr[_0x483df9(0x25b,'DvuX')](_0x7c12e1);}),_0x7d132e==_0x7bf12e&&_0x3aa330&&gtr['rmdirSync'](_0x10d26a);else _0x7d132e==0x0&&_0x3aa330&&gtr[_0x19a56b(0x1c0)](_0x10d26a);}else gtr[_0x3b2c2b(0x244,'jsJA')](_0x10d26a);}!(async()=>{const _0x1f0342=_0x488ff0,_0x2d3c1d=_0x4fcc1c;if(typeof $request!=='undefined'){}else{initVM(),arrs=abc(global['vm'],acckey,mac,0x2f,0x0);if(arrs=='')return;arrs=JSON[_0x2d3c1d(0x21b)](arrs);if(!arrs)return;jrttckappArr=jrttckapp[_0x2d3c1d(0x210)]('@'),console[_0x1f0342(0x1f6,'3h*h')]('\x0a公告：'+arrs['gg']+'\x0a'),console['log'](_0x1f0342(0x202,'csIq')+arrs['bb']+'\x0a'),console[_0x1f0342(0x1be,'q9@g')](_0x2d3c1d(0x1d2)+jrttckappArr[_0x1f0342(0x26f,'8Zh%')]+_0x2d3c1d(0x1d7)),console[_0x2d3c1d(0x199)](_0x1f0342(0x251,'8tDt')+arrs[_0x2d3c1d(0x1e1)]+_0x1f0342(0x263,'SHwx'));if(jrttckappArr['length']>parseInt(arrs[_0x2d3c1d(0x1e1)])){}else for(let _0x2f13f5=0x0;_0x2f13f5<jrttckappArr['length'];_0x2f13f5++){jrttckapp=jrttckappArr[_0x2f13f5],$['index']=_0x2f13f5+0x1,console[_0x1f0342(0x260,'JJ2#')](_0x2d3c1d(0x1ff)+$[_0x2d3c1d(0x1d9)]+'】'),oaid=random(0x10),did=random(0xf),await jrttxx(),await jrttsc(),await jrttbs();for(let _0x5668b9=0x0;_0x5668b9<0xa;_0x5668b9++){await jrttyd(),await $[_0x2d3c1d(0x1a8)](0x7530),await jrttsp();}await jrttbx(),await jrttqd();}}destroyVM(global['vm']);})()[_0x4fcc1c(0x220)](_0x28c97a=>$[_0x488ff0(0x1f7,'jsJA')](_0x28c97a))[_0x4fcc1c(0x1e7)](()=>$[_0x4fcc1c(0x203)]());function jrttsp(_0x3c80cf=0x0){return new Promise(_0x2fcf3e=>{const _0xf86314=_0x5259,_0x5be612=_0x1c7b;oaid=randomString(0x20),did=random(0xf);let _0x2ed156={'url':_0x5be612(0x265)+oaid+_0x5be612(0x269)+did,'headers':{'Host':_0xf86314(0x27b,'KK9V'),'Cookie':'sessionid='+jrttckapp,'Content-Type':'application/json','User-Agent':_0x5be612(0x278)},'body':_0xf86314(0x1e9,'HDw2')};$[_0x5be612(0x1d0)](_0x2ed156,async(_0x2995db,_0xf425ff,_0x400dee)=>{const _0x5a8565=_0x5be612,_0x4adba6=_0xf86314;try{const _0x10c731=JSON[_0x4adba6(0x21e,'SHwx')](_0x400dee);_0x10c731[_0x5a8565(0x1ed)]==0x0?console['log'](_0x4adba6(0x1de,'g(tB')+_0x10c731[_0x4adba6(0x268,'8tDt')][_0x4adba6(0x21d,'zSmR')]+'金币'):console[_0x5a8565(0x199)](_0x5a8565(0x25f)+_0x10c731['err_tips']);}catch(_0x8daed0){}finally{_0x2fcf3e();}},_0x3c80cf);});}function jrttyd(_0x4f8f2c=0x0){return new Promise(_0x5666dc=>{const _0x5c627c=_0x5259,_0x190cd5=_0x1c7b;oaid=randomString(0x20),did=random(0xf);let _0x5505b8={'url':'https://api5-normal-lq.toutiaoapi.com/luckycat/news/v1/activity/done_whole_scene_task?device_platform=android&os=android&aid=13&app_name=news_article&version_code=878&version_name=8.7.8&manifest_version_code=8781&update_version_code=87812&os_api=29&os_version=10&dq_param=1&plugin=0&isTTWebView=0&host_abi=armeabi-v7a&tma_jssdk_version=2.14.0.50&rom_version=29&iid='+oaid+_0x190cd5(0x269)+did+_0x5c627c(0x216,'n2VT'),'headers':{'Host':_0x190cd5(0x1e0),'Cookie':_0x5c627c(0x1cf,'&Xf)')+jrttckapp,'Content-Type':_0x5c627c(0x22c,'3obM'),'User-Agent':_0x190cd5(0x278)},'body':_0x5c627c(0x1a1,'hP2&')};$[_0x190cd5(0x1d0)](_0x5505b8,async(_0x4825f3,_0x5d3f05,_0x7fa3ac)=>{const _0x88a5c1=_0x5c627c,_0x860a0e=_0x190cd5;try{const _0x363faa=JSON[_0x860a0e(0x21b)](_0x7fa3ac);_0x363faa[_0x88a5c1(0x1d3,'3h*h')]==0x0?console[_0x860a0e(0x199)](_0x860a0e(0x1e5)+_0x363faa['data']['score_amount']+'金币'):console[_0x860a0e(0x199)]('\x0a今日头条阅读:'+_0x363faa[_0x860a0e(0x248)]);}catch(_0x25148f){}finally{_0x5666dc();}},_0x4f8f2c);});}function jrttbx(_0xbbb6e1=0x0){return new Promise(_0x3760a3=>{const _0x256f9f=_0x1c7b,_0x5d2ed5=_0x5259;oaid=randomString(0x20),did=random(0xf);let _0x411ec5={'url':'https://api5-normal-lq.toutiaoapi.com/luckycat/news/v1/treasure/open_treasure_box?device_platform=android&os=android&aid=13&app_name=news_article&version_code=878&version_name=8.7.8&manifest_version_code=8781&update_version_code=87812&os_api=29&os_version=10&dq_param=1&plugin=0&isTTWebView=0&host_abi=armeabi-v7a&tma_jssdk_version=2.14.0.50&rom_version=29&iid='+oaid+'&device_id='+did+'&luckydog_sdk_version=5.0.1-rc.11&luckydog_settings_version=15&luckycat_version_name=5.0.1-rc.24&luckycat_version_code=501024','headers':{'Host':_0x5d2ed5(0x1f9,')fYS'),'Cookie':_0x256f9f(0x1b4)+jrttckapp,'Content-Type':_0x5d2ed5(0x1e4,'!8G%'),'User-Agent':'com.ss.android.article.news/8781\x20(Linux;\x20U;\x20Android\x2010;\x20zh_CN;\x2016s\x20Pro;\x20Build/QKQ1.191222.002;\x20Cronet/TTNetVersion:a867b489\x202022-03-11\x20QuicVersion:b314d107\x202021-11-24)'},'body':'{}'};$['post'](_0x411ec5,async(_0x369c85,_0x5eb642,_0x4d3bf5)=>{const _0x12011b=_0x256f9f,_0x2a76c9=_0x5d2ed5;try{const _0x81ebb0=JSON[_0x2a76c9(0x240,'tVBh')](_0x4d3bf5);_0x81ebb0[_0x12011b(0x1ed)]==0x0?console[_0x12011b(0x199)](_0x2a76c9(0x1c7,'SM)d')+_0x81ebb0[_0x12011b(0x224)][_0x2a76c9(0x23e,'g(tB')]+'金币'):console[_0x2a76c9(0x214,'2uw^')](_0x12011b(0x1a9)+_0x81ebb0[_0x12011b(0x248)]);}catch(_0x25e888){}finally{_0x3760a3();}},_0xbbb6e1);});}function jrttqd(_0x5e450d=0x0){return new Promise(_0x215790=>{const _0x2c2ace=_0x5259,_0x4611b3=_0x1c7b;oaid=randomString(0x20),did=random(0xf);let _0x53156a={'url':'https://api5-normal-lf.toutiaoapi.com/luckycat/news/v1/sign_in/done_task?device_platform=android&os=android&aid=13&app_name=news_article&version_code=878&version_name=8.7.8&manifest_version_code=8781&update_version_code=87812&os_api=29&os_version=10&dq_param=1&plugin=0&isTTWebView=0&host_abi=armeabi-v7a&tma_jssdk_version=2.14.0.50&rom_version=29&iid='+oaid+_0x4611b3(0x269)+did+'&luckydog_sdk_version=5.0.1-rc.11&luckydog_settings_version=15&luckycat_version_name=5.0.1-rc.24&luckycat_version_code=501024','headers':{'Host':'api5-normal-lf.toutiaoapi.com','Cookie':_0x4611b3(0x1b4)+jrttckapp,'Content-Type':_0x2c2ace(0x24d,'IYO6'),'User-Agent':_0x4611b3(0x278)},'body':'{}'};$['post'](_0x53156a,async(_0x5174f4,_0x384c92,_0x5d8975)=>{const _0x153082=_0x2c2ace,_0x20e234=_0x4611b3;try{const _0x554646=JSON[_0x20e234(0x21b)](_0x5d8975);_0x554646['err_no']==0x0?console[_0x153082(0x260,'JJ2#')](_0x20e234(0x276)+_0x554646['data'][_0x20e234(0x1bb)]+_0x153082(0x1b9,'&Xf)')+_0x554646[_0x20e234(0x224)][_0x20e234(0x24f)]):console[_0x153082(0x1f6,'3h*h')]('\x0a今日头条签到:'+_0x554646[_0x20e234(0x248)]);}catch(_0x182f48){}finally{_0x215790();}},_0x5e450d);});}function jrttsc(_0x21d15b=0x0){return new Promise(_0x1e0922=>{const _0x3d9447=_0x1c7b,_0x15f513=_0x5259;oaid=randomString(0x20),did=random(0xf);let _0xf461bb=Math[_0x15f513(0x267,'3obM')](new Date()[_0x15f513(0x1a3,'&Xf)')]()/0x3e8),_0x17cd0a={'url':'https://api5-normal-lq.toutiaoapi.com/luckycat/news/v1/walk/count?_request_from=web&device_platform=android&os=android&aid=13&app_name=news_article&version_code=878&version_name=8.7.8&manifest_version_code=8781&update_version_code=87812&os_api=29&os_version=10&dq_param=1&plugin=0&isTTWebView=0&host_abi=armeabi-v7a&tma_jssdk_version=2.14.0.50&rom_version=29&iid='+oaid+_0x15f513(0x250,'s0Uo')+did+_0x3d9447(0x256),'headers':{'Host':_0x15f513(0x18f,'hP2&'),'Cookie':_0x3d9447(0x1b4)+jrttckapp,'Content-Type':_0x3d9447(0x22a),'User-Agent':'com.ss.android.article.news/8781\x20(Linux;\x20U;\x20Android\x2010;\x20zh_CN;\x2016s\x20Pro;\x20Build/QKQ1.191222.002;\x20Cronet/TTNetVersion:a867b489\x202022-03-11\x20QuicVersion:b314d107\x202021-11-24)'},'body':_0x15f513(0x25a,'2uw^')+_0xf461bb+'}'};$[_0x15f513(0x23f,'s0Uo')](_0x17cd0a,async(_0x2ec216,_0x8466eb,_0x23ee56)=>{const _0x5aed42=_0x15f513,_0x54e8dc=_0x3d9447;try{const _0x97b199=JSON['parse'](_0x23ee56);_0x97b199[_0x54e8dc(0x1ed)]==0x0?console[_0x54e8dc(0x199)]('\x0a今日头条上传步数：23333\x20成功'):console[_0x5aed42(0x20f,'KFjT')]('\x0a今日头条上传步数:'+_0x97b199[_0x54e8dc(0x248)]);}catch(_0x51a57d){}finally{_0x1e0922();}},_0x21d15b);});}function _0x1c7b(_0x586787,_0x5a8c8b){const _0x4d8394=_0x4d83();return _0x1c7b=function(_0x1c7b74,_0x325328){_0x1c7b74=_0x1c7b74-0x18c;let _0x15693=_0x4d8394[_0x1c7b74];if(_0x1c7b['GLtRuZ']===undefined){var _0x10d9fb=function(_0x525965){const _0x5a5c4c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xd43b7a='',_0x45c117='';for(let _0x8b9a2c=0x0,_0x2e90ab,_0xc90add,_0x3e1a69=0x0;_0xc90add=_0x525965['charAt'](_0x3e1a69++);~_0xc90add&&(_0x2e90ab=_0x8b9a2c%0x4?_0x2e90ab*0x40+_0xc90add:_0xc90add,_0x8b9a2c++%0x4)?_0xd43b7a+=String['fromCharCode'](0xff&_0x2e90ab>>(-0x2*_0x8b9a2c&0x6)):0x0){_0xc90add=_0x5a5c4c['indexOf'](_0xc90add);}for(let _0x35e0a2=0x0,_0x5d27e6=_0xd43b7a['length'];_0x35e0a2<_0x5d27e6;_0x35e0a2++){_0x45c117+='%'+('00'+_0xd43b7a['charCodeAt'](_0x35e0a2)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x45c117);};_0x1c7b['diUqmB']=_0x10d9fb,_0x586787=arguments,_0x1c7b['GLtRuZ']=!![];}const _0x514040=_0x4d8394[0x0],_0x260b63=_0x1c7b74+_0x514040,_0x4f2027=_0x586787[_0x260b63];return!_0x4f2027?(_0x15693=_0x1c7b['diUqmB'](_0x15693),_0x586787[_0x260b63]=_0x15693):_0x15693=_0x4f2027,_0x15693;},_0x1c7b(_0x586787,_0x5a8c8b);}function jrttbs(_0x5c049f=0x0){return new Promise(_0x4f3046=>{const _0x48bc6b=_0x5259,_0x48e52a=_0x1c7b;oaid=randomString(0x20),did=random(0xf);let _0x597f5b=Math[_0x48e52a(0x1b6)](new Date()[_0x48e52a(0x20a)]()/0x3e8),_0x3daa9b={'url':_0x48e52a(0x221)+oaid+_0x48e52a(0x269)+did+_0x48bc6b(0x204,'VbuH'),'headers':{'Host':_0x48e52a(0x1e0),'Cookie':_0x48e52a(0x1b4)+jrttckapp,'Content-Type':'application/json','User-Agent':_0x48bc6b(0x1e2,'HDw2')},'body':_0x48e52a(0x1c4)+_0x597f5b+_0x48bc6b(0x226,'2uw^')};$[_0x48bc6b(0x1fd,'H3Q8')](_0x3daa9b,async(_0x48fc20,_0x3a087a,_0x168812)=>{const _0x237713=_0x48bc6b,_0x422e3b=_0x48e52a;try{const _0x5745ca=JSON[_0x422e3b(0x21b)](_0x168812);_0x5745ca['err_no']==0x0?console[_0x422e3b(0x199)](_0x422e3b(0x192)+_0x5745ca[_0x237713(0x264,'VbuH')][_0x237713(0x1ee,'q9@g')]+'金币'):console[_0x237713(0x22f,'[NQ$')](_0x422e3b(0x275)+_0x5745ca['err_tips']);}catch(_0xf5f742){}finally{_0x4f3046();}},_0x5c049f);});}function jrttxx(_0x20aa3e=0x0){return new Promise(_0x75167a=>{const _0x3fe31a=_0x1c7b,_0x41f261=_0x5259;oaid=randomString(0x20),did=random(0xf);let _0x2e5844=Math[_0x41f261(0x1fa,'E$(Y')](new Date()['getTime']()/0x3e8),_0x54ed55={'url':_0x3fe31a(0x19e)+oaid+_0x41f261(0x205,'[NQ$')+did+_0x41f261(0x216,'n2VT'),'headers':{'Host':_0x41f261(0x25e,'2uw^'),'Cookie':_0x3fe31a(0x1b4)+jrttckapp,'Content-Type':_0x41f261(0x26e,'8tDt'),'User-Agent':'com.ss.android.article.news/8781\x20(Linux;\x20U;\x20Android\x2010;\x20zh_CN;\x2016s\x20Pro;\x20Build/QKQ1.191222.002;\x20Cronet/TTNetVersion:a867b489\x202022-03-11\x20QuicVersion:b314d107\x202021-11-24)'}};$[_0x41f261(0x20d,'2uw^')](_0x54ed55,async(_0x5d9d58,_0x3b2792,_0x4769c)=>{const _0x511eac=_0x41f261,_0x46e69c=_0x3fe31a;try{const _0x1cfd43=JSON[_0x46e69c(0x21b)](_0x4769c);_0x1cfd43[_0x511eac(0x27e,'$WZQ')]==0x0?console['log'](_0x46e69c(0x241)+_0x1cfd43[_0x511eac(0x26d,'R*03')][_0x511eac(0x1da,'$tL#')][_0x511eac(0x1b5,')fYS')][_0x511eac(0x24e,'kk4Q')]+_0x46e69c(0x1ba)+_0x1cfd43[_0x46e69c(0x224)]['take_cash_info'][_0x511eac(0x279,'3h*h')]['cash_balance']/0x64+'元'):console[_0x46e69c(0x199)](_0x46e69c(0x197)+_0x1cfd43[_0x46e69c(0x248)]);}catch(_0x31568b){}finally{_0x75167a();}},_0x20aa3e);});}function randomString(_0x14448f=0xc){const _0x48f245=_0x4fcc1c,_0x3f202c=_0x488ff0;let _0x4622f2=_0x3f202c(0x19d,'pJ@d'),_0x17080a=_0x4622f2[_0x48f245(0x206)],_0x296bd4='';for(i=0x0;i<_0x14448f;i++){_0x296bd4+=_0x4622f2[_0x3f202c(0x21a,'pJ@d')](Math[_0x48f245(0x245)](Math[_0x3f202c(0x249,'VbuH')]()*_0x17080a));}return _0x296bd4;}function random(_0x10f652=0xc){const _0x579c18=_0x4fcc1c,_0x14d5c4=_0x488ff0;let _0x373890=_0x14d5c4(0x277,'3h*h'),_0x55bf62=_0x373890[_0x579c18(0x206)],_0x4a81ea='';for(i=0x0;i<_0x10f652;i++){_0x4a81ea+=_0x373890[_0x579c18(0x1ae)](Math[_0x579c18(0x245)](Math[_0x579c18(0x1fc)]()*_0x55bf62));}return _0x4a81ea;}function randomString(_0x12c760=0xc){const _0x4ac110=_0x488ff0;let _0x24c0ea=_0x4ac110(0x1ef,'H3Q8'),_0x585ef3=_0x24c0ea[_0x4ac110(0x1b1,')DcU')],_0x4b1d6f='';for(i=0x0;i<_0x12c760;i++){_0x4b1d6f+=_0x24c0ea[_0x4ac110(0x1b7,'kk4Q')](Math[_0x4ac110(0x237,'!8G%')](Math[_0x4ac110(0x19b,'lrcp')]()*_0x585ef3));}return _0x4b1d6f;}function encodeUTF8(_0x32be5c){const _0x47ed91=_0x4fcc1c,_0x514052=_0x488ff0;var _0x3a1247,_0x185131=[],_0x53d4b3,_0x76230e;for(_0x3a1247=0x0;_0x3a1247<_0x32be5c[_0x514052(0x1a6,'R*03')];_0x3a1247++)if((_0x53d4b3=_0x32be5c[_0x514052(0x1e6,'8Zh%')](_0x3a1247))<0x80)_0x185131[_0x514052(0x1ec,'IYO6')](_0x53d4b3);else{if(_0x53d4b3<0x800)_0x185131[_0x514052(0x26b,'DvuX')](0xc0+(_0x53d4b3>>0x6&0x1f),0x80+(_0x53d4b3&0x3f));else{if((_0x76230e=_0x53d4b3^0xd800)>>0xa==0x0)_0x53d4b3=(_0x76230e<<0xa)+(_0x32be5c['charCodeAt'](++_0x3a1247)^0xdc00)+0x10000,_0x185131[_0x47ed91(0x21c)](0xf0+(_0x53d4b3>>0x12&0x7),0x80+(_0x53d4b3>>0xc&0x3f));else _0x185131[_0x47ed91(0x21c)](0xe0+(_0x53d4b3>>0xc&0xf));_0x185131[_0x514052(0x1dc,'E$(Y')](0x80+(_0x53d4b3>>0x6&0x3f),0x80+(_0x53d4b3&0x3f));}};return _0x185131;}function sha(_0x27f5f2){const _0x1040b9=_0x4fcc1c,_0x15e2fc=_0x488ff0;var _0x628c94=new Uint8Array(encodeUTF8(_0x27f5f2)),_0x18ecba,_0x5a628a,_0x29be03,_0x57e50b=(_0x628c94[_0x15e2fc(0x1d1,'KFjT')]+0x8>>>0x6<<0x4)+0x10,_0x27f5f2=new Uint8Array(_0x57e50b<<0x2);_0x27f5f2[_0x15e2fc(0x1f4,'s0Uo')](new Uint8Array(_0x628c94[_0x1040b9(0x246)])),_0x27f5f2=new Uint32Array(_0x27f5f2[_0x1040b9(0x246)]);for(_0x29be03=new DataView(_0x27f5f2[_0x1040b9(0x246)]),_0x18ecba=0x0;_0x18ecba<_0x57e50b;_0x18ecba++)_0x27f5f2[_0x18ecba]=_0x29be03['getUint32'](_0x18ecba<<0x2);_0x27f5f2[_0x628c94[_0x1040b9(0x206)]>>0x2]|=0x80<<0x18-(_0x628c94[_0x1040b9(0x206)]&0x3)*0x8,_0x27f5f2[_0x57e50b-0x1]=_0x628c94[_0x15e2fc(0x234,'!8G%')]<<0x3;var _0x576b90=[],_0x541723=[function(){return _0x322a21[0x1]&_0x322a21[0x2]|~_0x322a21[0x1]&_0x322a21[0x3];},function(){return _0x322a21[0x1]^_0x322a21[0x2]^_0x322a21[0x3];},function(){return _0x322a21[0x1]&_0x322a21[0x2]|_0x322a21[0x1]&_0x322a21[0x3]|_0x322a21[0x2]&_0x322a21[0x3];},function(){return _0x322a21[0x1]^_0x322a21[0x2]^_0x322a21[0x3];}],_0x5564d4=function(_0x14ae3c,_0x4a3cc2){return _0x14ae3c<<_0x4a3cc2|_0x14ae3c>>>0x20-_0x4a3cc2;},_0x4204f4=[0x5a827999,0x6ed9eba1,-0x70e44324,-0x359d3e2a],_0x322a21=[0x67452301,-0x10325477,null,null,-0x3c2d1e10];_0x322a21[0x2]=~_0x322a21[0x0],_0x322a21[0x3]=~_0x322a21[0x1];for(_0x18ecba=0x0;_0x18ecba<_0x27f5f2['length'];_0x18ecba+=0x10){var _0x16ef8b=_0x322a21[_0x1040b9(0x23d)](0x0);for(_0x5a628a=0x0;_0x5a628a<0x50;_0x5a628a++)_0x576b90[_0x5a628a]=_0x5a628a<0x10?_0x27f5f2[_0x18ecba+_0x5a628a]:_0x5564d4(_0x576b90[_0x5a628a-0x3]^_0x576b90[_0x5a628a-0x8]^_0x576b90[_0x5a628a-0xe]^_0x576b90[_0x5a628a-0x10],0x1),_0x29be03=_0x5564d4(_0x322a21[0x0],0x5)+_0x541723[_0x5a628a/0x14|0x0]()+_0x322a21[0x4]+_0x576b90[_0x5a628a]+_0x4204f4[_0x5a628a/0x14|0x0]|0x0,_0x322a21[0x1]=_0x5564d4(_0x322a21[0x1],0x1e),_0x322a21['pop'](),_0x322a21['unshift'](_0x29be03);for(_0x5a628a=0x0;_0x5a628a<0x5;_0x5a628a++)_0x322a21[_0x5a628a]=_0x322a21[_0x5a628a]+_0x16ef8b[_0x5a628a]|0x0;};_0x29be03=new DataView(new Uint32Array(_0x322a21)[_0x1040b9(0x246)]);for(var _0x18ecba=0x0;_0x18ecba<0x5;_0x18ecba++)_0x322a21[_0x18ecba]=_0x29be03['getUint32'](_0x18ecba<<0x2);var _0x4549af=Array['prototype']['map'][_0x15e2fc(0x1c2,'g(tB')](new Uint8Array(new Uint32Array(_0x322a21)[_0x1040b9(0x246)]),function(_0x3ee285){return(_0x3ee285<0x10?'0':'')+_0x3ee285['toString'](0x10);})['join']('');return _0x4549af;}function hqs(_0xf8385a=0xa){return new Promise(_0x53b145=>{const _0x4a1c94=_0x5259,_0x43f0f5=_0x1c7b;let _0x364acb=0xc,_0x26fe68={'url':$['isNode']()?rc4($[_0x43f0f5(0x1c8)](),_0x43f0f5(0x219))+('?key='+acckey+_0x43f0f5(0x18d)+_0x364acb+_0x4a1c94(0x257,'kk4Q')+mac+_0x43f0f5(0x1f8)):rc4($['fwur'](),_0x4a1c94(0x25c,'2(ts'))+(_0x43f0f5(0x18c)+acckey+'&id='+_0x364acb+_0x43f0f5(0x207)+mac+_0x43f0f5(0x1f8))};$['post'](_0x26fe68,async(_0xa965be,_0x5d841c,_0x5d107b)=>{const _0x4b0b43=_0x4a1c94,_0x1cda19=_0x43f0f5;try{let _0x38347a=eval(_0x5d107b);_0x38347a[_0x1cda19(0x213)]==0xc8?(all_msg=_0x38347a[_0x1cda19(0x22e)],_0x53b145(_0x38347a[_0x4b0b43(0x242,'0EXE')])):(all_msg=_0x38347a[_0x4b0b43(0x259,'R*03')],_0x53b145(![]));}catch(_0x7b20c9){$['logErr'](_0x7b20c9,_0x5d841c);}},0x0);});}function FxPCnMKLw7(){const _0x1d701c=_0x4fcc1c;_keyStr=_0x1d701c(0x19f),this[_0x1d701c(0x271)]=function(_0x5b0f4e){const _0x5deea3=_0x1d701c,_0x471b01=_0x5259;var _0x30cdad='',_0x4043bc,_0x2c904d,_0xb8128b,_0x5de0f8,_0x1df515,_0x471708,_0x580966,_0xbfa21f=0x0;_0x5b0f4e=_utf8_encode(_0x5b0f4e);while(_0xbfa21f<_0x5b0f4e['length']){_0x4043bc=_0x5b0f4e[_0x471b01(0x262,'tVBh')](_0xbfa21f++),_0x2c904d=_0x5b0f4e[_0x5deea3(0x27a)](_0xbfa21f++),_0xb8128b=_0x5b0f4e[_0x471b01(0x243,'&Xf)')](_0xbfa21f++),_0x5de0f8=_0x4043bc>>0x2,_0x1df515=(_0x4043bc&0x3)<<0x4|_0x2c904d>>0x4,_0x471708=(_0x2c904d&0xf)<<0x2|_0xb8128b>>0x6,_0x580966=_0xb8128b&0x3f;if(isNaN(_0x2c904d))_0x471708=_0x580966=0x40;else isNaN(_0xb8128b)&&(_0x580966=0x40);_0x30cdad=_0x30cdad+_keyStr[_0x471b01(0x1cd,'DvuX')](_0x5de0f8)+_keyStr[_0x5deea3(0x1ae)](_0x1df515)+_keyStr[_0x471b01(0x24a,'xWXr')](_0x471708)+_keyStr[_0x5deea3(0x1ae)](_0x580966);}return _0x30cdad;},this[_0x1d701c(0x254)]=function(_0xaddfc9){const _0xf39b89=_0x5259,_0x339458=_0x1d701c;var _0x3dc4a7='',_0x4065a1,_0x2f00ae,_0xf31516,_0x35324c,_0x4ba8e3,_0x89bb82,_0x1befd1,_0x5511e1=0x0;_0xaddfc9=_0xaddfc9[_0x339458(0x1c5)](/[^A-Za-z0-9\+\/\=]/g,'');while(_0x5511e1<_0xaddfc9['length']){_0x35324c=_keyStr[_0x339458(0x27f)](_0xaddfc9['charAt'](_0x5511e1++)),_0x4ba8e3=_keyStr[_0xf39b89(0x23c,'2uw^')](_0xaddfc9['charAt'](_0x5511e1++)),_0x89bb82=_keyStr[_0x339458(0x27f)](_0xaddfc9[_0xf39b89(0x229,')cFr')](_0x5511e1++)),_0x1befd1=_keyStr['indexOf'](_0xaddfc9[_0xf39b89(0x1cd,'DvuX')](_0x5511e1++)),_0x4065a1=_0x35324c<<0x2|_0x4ba8e3>>0x4,_0x2f00ae=(_0x4ba8e3&0xf)<<0x4|_0x89bb82>>0x2,_0xf31516=(_0x89bb82&0x3)<<0x6|_0x1befd1,_0x3dc4a7=_0x3dc4a7+String['fromCharCode'](_0x4065a1),_0x89bb82!=0x40&&(_0x3dc4a7=_0x3dc4a7+String['fromCharCode'](_0x2f00ae)),_0x1befd1!=0x40&&(_0x3dc4a7=_0x3dc4a7+String['fromCharCode'](_0xf31516));}return _0x3dc4a7=_utf8_decode(_0x3dc4a7),_0x3dc4a7;},_utf8_encode=function(_0x25eb6f){const _0x59de33=_0x5259,_0xcfe7c6=_0x1d701c;_0x25eb6f=_0x25eb6f[_0xcfe7c6(0x1c5)](/\r\n/g,'\x0a');var _0x18ab38='';for(var _0x1d34fd=0x0;_0x1d34fd<_0x25eb6f[_0xcfe7c6(0x206)];_0x1d34fd++){var _0xb8b56e=_0x25eb6f[_0xcfe7c6(0x27a)](_0x1d34fd);if(_0xb8b56e<0x80)_0x18ab38+=String[_0xcfe7c6(0x20e)](_0xb8b56e);else _0xb8b56e>0x7f&&_0xb8b56e<0x800?(_0x18ab38+=String[_0x59de33(0x191,'ZoaT')](_0xb8b56e>>0x6|0xc0),_0x18ab38+=String['fromCharCode'](_0xb8b56e&0x3f|0x80)):(_0x18ab38+=String[_0xcfe7c6(0x20e)](_0xb8b56e>>0xc|0xe0),_0x18ab38+=String[_0x59de33(0x225,'lrcp')](_0xb8b56e>>0x6&0x3f|0x80),_0x18ab38+=String[_0xcfe7c6(0x20e)](_0xb8b56e&0x3f|0x80));}return _0x18ab38;},_utf8_decode=function(_0x44cf45){const _0x5303a3=_0x1d701c,_0xe4ad41=_0x5259;var _0x4f81c9='',_0x94569b=0x0,_0x48b3db=c1=c2=0x0;while(_0x94569b<_0x44cf45['length']){_0x48b3db=_0x44cf45[_0xe4ad41(0x1a5,'VbuH')](_0x94569b);if(_0x48b3db<0x80)_0x4f81c9+=String[_0x5303a3(0x20e)](_0x48b3db),_0x94569b++;else _0x48b3db>0xbf&&_0x48b3db<0xe0?(c2=_0x44cf45[_0x5303a3(0x27a)](_0x94569b+0x1),_0x4f81c9+=String['fromCharCode']((_0x48b3db&0x1f)<<0x6|c2&0x3f),_0x94569b+=0x2):(c2=_0x44cf45[_0xe4ad41(0x212,'lrcp')](_0x94569b+0x1),c3=_0x44cf45[_0xe4ad41(0x1bd,'E$(Y')](_0x94569b+0x2),_0x4f81c9+=String[_0xe4ad41(0x1aa,'SHwx')]((_0x48b3db&0xf)<<0xc|(c2&0x3f)<<0x6|c3&0x3f),_0x94569b+=0x3);}return _0x4f81c9;};}function rc4(_0x299a54,_0x146c0d){const _0x3207ed=_0x488ff0,_0x5be08f=_0x4fcc1c;var _0x55ae21=Array(0x100),_0x2fae44=Array(_0x299a54[_0x5be08f(0x206)]);for(var _0x2ee1ac=0x0;_0x2ee1ac<0x100;_0x2ee1ac++){_0x55ae21[_0x2ee1ac]=_0x2ee1ac;var _0x42c90=(_0x42c90+_0x55ae21[_0x2ee1ac]+_0x146c0d[_0x5be08f(0x27a)](_0x2ee1ac%_0x146c0d[_0x5be08f(0x206)]))%0x100,_0x107161=_0x55ae21[_0x2ee1ac];_0x55ae21[_0x2ee1ac]=_0x55ae21[_0x42c90],_0x55ae21[_0x42c90]=_0x107161;}for(var _0x2ee1ac=0x0;_0x2ee1ac<_0x299a54[_0x3207ed(0x196,'$WZQ')];_0x2ee1ac++){_0x2fae44[_0x2ee1ac]=_0x299a54['charCodeAt'](_0x2ee1ac);}for(var _0x3ca843=0x0;_0x3ca843<_0x2fae44[_0x5be08f(0x206)];_0x3ca843++){var _0x2ee1ac=(_0x2ee1ac+0x1)%0x100,_0x42c90=(_0x42c90+_0x55ae21[_0x2ee1ac])%0x100,_0x107161=_0x55ae21[_0x2ee1ac];_0x55ae21[_0x2ee1ac]=_0x55ae21[_0x42c90],_0x55ae21[_0x42c90]=_0x107161;var _0x371b27=(_0x55ae21[_0x2ee1ac]+_0x55ae21[_0x42c90]%0x100)%0x100;_0x2fae44[_0x3ca843]=String['fromCharCode'](_0x2fae44[_0x3ca843]^_0x55ae21[_0x371b27]);}return _0x2fae44[_0x5be08f(0x274)]('');}
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
