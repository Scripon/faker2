/*
活动名称：店铺刮刮乐
活动链接：https://shop.m.jd.com/shop/lottery?shopId=<店铺id>&venderId=<店主id>
环境变量：jd_shopLottery_activityUrl // 活动链接
        jd_shopLottery_Notify // 是否推送通知（true/false），默认不推送

注：活动链接变量只提供店主id即可，但访问活动需要同时包含店铺id和店主id

7 7 7 7 * jd_shop_lottery.js

*/

const $ = new Env('店铺刮刮乐')
const jdCookie = require('./jdCookie')
const common = require('./function/jdCommon')
const notify = require('./function/sendJDNotify')

var iｉl='jsjiami.com.v7';const i1ilIli1=lillI1Il;(function(lil11iI1,l1Il1II1,IiIIi1i1,Ii1iil1l,Ililli1,ilI1iil,ii1lII){return lil11iI1=lil11iI1>>0x6,ilI1iil='hs',ii1lII='hs',function(IilIliIl,liiiIl1i,iI1lllil,IiIliII1,II11iIlI){const i1illliI=lillI1Il;IiIliII1='tfi',ilI1iil=IiIliII1+ilI1iil,II11iIlI='up',ii1lII+=II11iIlI,ilI1iil=iI1lllil(ilI1iil),ii1lII=iI1lllil(ii1lII),iI1lllil=0x0;const IIIiIIli=IilIliIl();while(!![]&&--Ii1iil1l+liiiIl1i){try{IiIliII1=parseInt(i1illliI(0x20b,'rzAD'))/0x1+parseInt(i1illliI(0x26e,'BIQu'))/0x2*(parseInt(i1illliI(0x189,'pv&s'))/0x3)+-parseInt(i1illliI(0x284,'U4Zy'))/0x4*(-parseInt(i1illliI(0x18b,'U4Zy'))/0x5)+parseInt(i1illliI(0x215,'I&Bz'))/0x6*(-parseInt(i1illliI(0x228,'8iYk'))/0x7)+-parseInt(i1illliI(0x226,'GMLx'))/0x8+parseInt(i1illliI(0x270,'UzS@'))/0x9*(parseInt(i1illliI(0x1ba,'3(1d'))/0xa)+-parseInt(i1illliI(0x198,'GzJ5'))/0xb*(parseInt(i1illliI(0x1d3,'&2&W'))/0xc);}catch(lii1I1Il){IiIliII1=iI1lllil;}finally{II11iIlI=IIIiIIli[ilI1iil]();if(lil11iI1<=Ii1iil1l)iI1lllil?Ililli1?IiIliII1=II11iIlI:Ililli1=II11iIlI:iI1lllil=II11iIlI;else{if(iI1lllil==Ililli1['replace'](/[INWRbuXFfeTdyEklrDCMKP=]/g,'')){if(IiIliII1===liiiIl1i){IIIiIIli['un'+ilI1iil](II11iIlI);break;}IIIiIIli[ii1lII](II11iIlI);}}}}}(IiIIi1i1,l1Il1II1,function(lii1illl,Iillii1i,IiIIIlll,iIi1III,i11l11II,Iil111Il,lilllIi1){return Iillii1i='\x73\x70\x6c\x69\x74',lii1illl=arguments[0x0],lii1illl=lii1illl[Iillii1i](''),IiIIIlll=`\x72\x65\x76\x65\x72\x73\x65`,lii1illl=lii1illl[IiIIIlll]('\x76'),iIi1III=`\x6a\x6f\x69\x6e`,(0x15035c,lii1illl[iIi1III](''));});}(0x3000,0xa7c34,lilI11II,0xc2),lilI11II)&&(iｉl=0xc2);const activityUrl=process[i1ilIli1(0x16e,'pv&s')][i1ilIli1(0x248,'A@I4')]||'',isNotify=process[i1ilIli1(0x163,'%E4t')][i1ilIli1(0x1f1,'(Fu(')]===i1ilIli1(0x1c4,'BIQu');function lilI11II(){const iiIliil1=(function(){return[...[iｉl,'DjWsNIXjubieraTmdEikFD.lycPoMIfmKl.CRvr7==','puxcNSkNW7q','fSoPqa','8kQmSSka','lmoCk8kIW5W','W4HlWQvyaW','gXLYW5KnwtTAWQT6W4FdPq','W4pdSs0mxq','WOtcOXddOu4WWQtdJ8oJWRLmwx8','hbVcUSo/oG','WOldPuJcM8og','ufuAWRqN','n8k7W69pW4W','sYe5W7m0WQKOWPS','W50vySoOWQucj0FdQSkkmLpcOKdcNq','bmo2Fe9J','ptBcOmothCol','W5vxW6hcUSoiWPa8u8kmzCojWOa','tSkSuCorwW','DbJcLq','ybtcNKetAW','a8k2WPqKeL7dKMS+WRS4','fHnDAa','FualWP4Fha','xfZcKCkK','5lI25AsN5Bwj5y+x5lI26l67','DCkjWPfoW6Tvpq','pmoaA8kjaW','nCkaW55dW70','g2lcImoOW4G','o8k9pYpdRSkgdNJdKSkiWPm','iSoAzG','W7tdObpdVg4','W5hdMaKzqW','W7xdVs7dIgyg','WOPRW5vXxq7cVmoe','imk7gJ3dIq','BMZcOSkRyq','WQtdVwNcPmoG','W4qxACoQWRq','EWldP8o8WOS','WO8nWRm','pCoCzSkTgGZdRCobWPah','Bu3cG8kwW5i','mx3cMdVcVCkWvSo3W4hcQfW','gSkRW6zqW68','WQlcIg5YnW','cJBcT8oeoG','W4rLBa','W6BdUYNdLhWBW7DqiuZcGG','5lMw5lU05P6Q5yMd5zIc6lYW5zQM56U75PEr5OYt','W7LWWQpdG8kIgmoN','W4uUAmo1WRy','e2NcKCoTW5ZcUxu','5lUS5AEt5BEM57Mt5y+B5lUC6l+A5lUaW7i','W5jwW6lcTmojWPDTrSkLumoBWR/dVW','5lUT5AEm5Bw557Un5y+S5lQf6l685lU0W44','WPNdRetcVCoJW5Hx','W51FWP/dU8kh','qMCfWOiM','pCovlSk+W4pdTmkOWQldNs1c','W612meDL','mSogW4GxWQayuG','8jYcTCoA56QD5RcT','5lQa5lI15P+V5yMT5zUa6lYG5zMg56Ui5PER5OYi','WRldRSkKWRe','W4PQWQJdKmkafCoZW5e','jIdcV8ojfSowW6G','F2JcKmkTCG','yKqfWQS/g8oD','gCkOdGO','W4tdOKJcSqi','hLNcLCkKW4hcSq','WPDRW55Lfr3cMCojWQRdQW','mmouW44i','WPFcM8oa','zZVdPmoQWOhdPcu','yGFcQxCL','W7zQWP7dI8kPgG','DuNcTCkgwW','WPK5m8o+W7FcJmkMWQNdHCoKoa','vIBdN8oXWR0','W4NdVtBdL0G','nmkIaqvB','hCkQW70koGm','FxZcImkuxa','W4hdOflcTrC','44oQ5OY456AD44oZ6k6D5yAS6i+p5y2xW6isb07dHxG','p8oPoCkgW5KylW','jfdcLSonWR8','omouW4C','4PUWpUISM+weMUwTKEs6Kow/P+IKJ+EyKoEnTEwIS+wpO+MgR+wtJ+wfOUI8RUIGKUIgU+ACSG','W7fWWQ7dICkafCoZW5e','WPmdWQBdSmkz','pCofBCkQpa','abb4DCkg','W5LEWPNdJSkQ','waJcUhSW','sSk/W79oBW','whRcISk9Fa','EthdVq','n8o/t8kgoa','WPBcJCojWOuEWOW','WPXooSk5W7KNsKdcRmkulG','pCokm8kDWOBcS8kIWO7dLsDmbbvbWRCrW7q'],...(function(){return[...['WPasWRJdQSki','qJ/dM8ovWOq','WQFcOYtcNCk3','i3FcIZZcGSk3rmoH','W6i6A8o+WO4','nCohW6qxWQKqr3RdLCkUW4pcU8k6WOTOovLKW5FdRCkT','w8oVW4D3xW','WRu2W6C','jCo5W7GkWRC','W4rAW4CrqYCSEcJcQZq','W4XYWOC','WPJcQI3cUmkIW7VdJgO','wUoaJUA3L+wlUUwFU+wEMEoaSW','wIeJW4iJWRCXWP5it0bcW6qsnq','WPWhWOXmbqq','AXX6dCo+','B8oVgSkSW649kmknybeVWQlcOmo3','W7PrWRvuda','tCoTW5JdL8ob','fCkMW5S','wLFcV8kUta','cmo7iSkLW6i','pSouC8kWltZdQmom','amk6bI7dUW','BSoPF3pcQmoBqLNdJ8kQWQKeW5a','WPKgWPG','FIldHmokWQa','g1hcJCkZW4W','pmogbdldSW','mCkUjIhdIa','W57dVfFcVqr3','emopiCkLlCoMFaxdGuaErq','DLufWQTbtSoxvmkAW7mfW4/dUq5grmkH','zhVcJ8kQW54','sSkaW7HXt8oShG','fSkOdq','W4T4WPLM','lgtcJ8oUW68','hSogW7GPWQC','lSoxW4iMjq','BmoKW6K','cxnJWQ5HW69zWQDYFNTsW5S','W5hdU1W','W6SHvCooWP0','rdv8eCoz','W6vYbLXVkCkJa8oiWOxdQmowvmk/WPNcUa','k3/cH8oSW7pcV306','WOddTmk/WPBdPG','eSoDW4nQrSokkZO','WPRdPL/cVSou','WP/dTmkqWPhdSq','m8omW5W','g8kiW5jSW7e','s8kkW6W','j8osW4CdacJcNSkNWPZdPs0LW6BcQMRdIG','aCkiW6Omea','8jsFJt8','W59gW5u','WRpcR2VcJZ5cWRngowRcP25M','c8oyywrufLm','BCk9hcpdGmkLfG','lCkslGLj','z8oUW7RdKmoMocpdJmoCW6m','gM3cMJZcNW','tu81','x0S/WOie','d8obC0xdPW','5Rwc5yMH5yEz5y+l776M','Ed/dQG','FGXllmot','lJlcVCo8oG','cCoYW6GVWQW','WPBcH8oa','oflcLmoSWQ0','mGfJz8k2','W5C+r8o+WPu','Ed/dQSoFWQhdOW','W5NdVZqR','6lA55y+U5PsT5PEQ','m2VcV8ovWOOsWQO','W4aCFSo8WQ0lBa','WOpcGINcUmkW','W654WOT/aW','hYPIW4ddRmkPW4a','vmkyW74Q6k6Q5RcV5As+6lAG77YO6k2C5QkZ5P+1572H6lsm6yEw6k2H','hSoWzCkacq','gmk2W4K','omkOW6OXdq','h1xcJCkdW43cPmkBW6vNW7uu','frJdOmopqW','i2ZcVSorWRaDWQ4OW5iJWOyzWQ7cV8kSWPVcIfC','C8oJWPycWPBcSCkL5B2O5Awd44c85lQ15lUG6lEZ5y+8','WOddO3lcVSozW4jjBrpcGGJcQvVcMSoMWRFcPCoNW6xdOCo1jqBdK8kffa','qmoKW5bNs2e','W4tdU0pcTG','rYDymCoX','W5ldRY7dQMe','W7LBWRPadG','nSoKo8kNW5K','nftcPJhcGG','W5tdVuRcVH9K','WRNdTwxcHCoH','W7RcNYlcKSky','W6HQaa','WPHpW5rHyq','WOKfxapcKa'],...(function(){return['WPVcMmooW4WhW4OsW6xcJX4hsa','zfavWOfS','W4XYWODqm8kq','WRpcRsVdPwW/W7Lr','W5RdN07cVae','W4KZr8oSWOu','W43dUWG5vq','kCk1iJRdISkAfa','wmoIW6rfFW','pCovlSk+W4pdTmkO','B8kjW551AW','phhcIW','EJiBW5G3','smo9WOOFWONcQmk/pSoSt2pcMSk+','kY/dO8onumokW6Os','WPNcQCoFWQah','cSkIW5vyW67dRSoH','n8ovkCkEW4VdTmkJ','W4NdUXpdS24','4PUWpUISM+wGUEwfKUAJPEw8REAVREEJUUEzNUwpQoMhTa','q0qLWOTb','jSoldJldHa','WRdcGNfOpW','imk2zGldUCkbcsZdHmk0W4qaWQyQ','W7pcPmkzWRZdNmofW5BcTW','WOBdQeRcImodW58','WRaWexzTimk8ca','W5NcHW7cR8k8','5lQf5Aw65BsH5y2K5lM/6l24','W6/dRcNdJxLiWQWgfu7cHWPLwX/dHCo1W4BcTa4CW6zOW4vBcCkCW7KCEmomWQFdMW3cIw82zSkKxSk5W6VcISoqWQy0','r0eoWPKE','gtfVW5hdISk5W60FECkFd0HX','quZcKCk/W4NcK8o9','cIHZ','pddcUmopnW','WRagDW','WRD5v1i/eCoXdmkzWOVcSmoAfCkQW4a','us8pW7Wy','WPNcRIRcQa','mCo3imkQW74','lIhdPmozz8onW40','W7JdGMpcJtS','tJtdGmo+WRa','zCoZW6FdQq','WQe1WOddICko','W5fUWQrweW','WO/dINdcTXnUW6a','W4qkxSoMWQSc','w8oRgCkkW4O','WPimWPf8nG','d8ooFNHsgfG','WQxcGw4','zaNcLvSt','W4FdPNVcQb9T','WQ4QW77cLCo6qSowW6C4W4RcM2q','gCkObbT8WQLk','e8onDNzbfhueWRVcMSo7xmkt','5lU85lIc5P+H5yUZ5zQJ6lYn5zU856U05PEK5O60','zSoBW7LCqq','hSouW7m9WQS','z8o7W68lWQqsqW','EJhdOmo/','vmkmW6XSB8oOdXVdHHZcS3FdNtOsdq','fv/cJSouW4u','jMhcV8ofWOOoWPC8','W5X4WOpdR8kA','y8oVc8kFWQWZl8knCYi','itlcVSod','ceVcLSosWP4','WQdcGg1cnq','EeeFWR4FgG','k8oBDW','u8kpW6PAza','bCopD3zbfa','tI0WW7KdWR4wWP5isG','4PUUWPxOR7BLHOVLR5lKUkdLVz/OPkhNMABNJ4ZLOlhLJA/PHiBLKBJLH4BOV4hOOBlOHQxMNAS','ACoycmkGW4K','ohdcPCorWPXgW7f3W708WOazWQNcJSoQWPNdI1JdHanZnSonWRGQWR9kEmoRW5BdOcn1BX4pWQxdH8k7W5PVWRa','FCo6cSkoW7u3amklAZmRWQdcOq','WQFcH2PmaXCLW4i','vCo4W6VdR8onkJ3dIa','4PUyuUIVH+wHPUwfIUAJIEw8I+AVGEEGQ+EBSUMrLoAnUa','t0q3','sJzSlmoX','W53dLaJdVeC','WR5fW6ngta','gSkMW5jCW5NdTCo7','WONcGCoaWOW','W6VdTZO','W53dUH0IDW','oNNcH8oZW58','5lIB5lQc5P2u5yUV5zMS6l2D5zMq56U65PEX5OY5','x0lcI8k8W7RcGCo2','rKuMWQTlhq','qmoUWPHrAv0/W6PPW786wL4','W50wFSo7','WQFcJ2rc','WRZdTmo8WPFdUSkOW7ZcLY/dRmk+jbTSW4uhW4pdI2m','qCkmW7m','bSk8W50wmrK','WOtcR213pmk6WR7dOCofp8oKW7/cUa','4PUUWPxOR7BLOQJLH5hMOzxLVPxMR4pNOOZNM6FLJARPHBG','d8kTlJJdLSkof2q','W6BdQc3dKwmrW6jDhvhcGaTWwaldLSkSWOJcVqXbW6GPW5Lmc8knWRKEDmoCWQVdKa'];}())];}())];}());lilI11II=function(){return iiIliil1;};return lilI11II();};let cookie='';const cookiesArr=Object[i1ilIli1(0x210,']SQP')](jdCookie)[i1ilIli1(0x1e7,'n@Dh')](IIII11i=>jdCookie[IIII11i])[i1ilIli1(0x1cb,'je$5')](Ii1Ii1l1=>Ii1Ii1l1);function lillI1Il(_0x1accc5,_0x1afd5b){const _0x5ee365=lilI11II();return lillI1Il=function(_0x4fe25e,_0x26f18f){_0x4fe25e=_0x4fe25e-0x14f;let _0x3e85af=_0x5ee365[_0x4fe25e];if(lillI1Il['mTLdXY']===undefined){var _0x2aeb12=function(_0x22bd8e){const _0x3d4eb6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x54bf5f='',_0x2d2975='';for(let _0x103836=0x0,_0x3b8668,_0x5f52ad,_0x51219a=0x0;_0x5f52ad=_0x22bd8e['charAt'](_0x51219a++);~_0x5f52ad&&(_0x3b8668=_0x103836%0x4?_0x3b8668*0x40+_0x5f52ad:_0x5f52ad,_0x103836++%0x4)?_0x54bf5f+=String['fromCharCode'](0xff&_0x3b8668>>(-0x2*_0x103836&0x6)):0x0){_0x5f52ad=_0x3d4eb6['indexOf'](_0x5f52ad);}for(let _0x57805a=0x0,_0x4cd8f5=_0x54bf5f['length'];_0x57805a<_0x4cd8f5;_0x57805a++){_0x2d2975+='%'+('00'+_0x54bf5f['charCodeAt'](_0x57805a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2d2975);};const _0x1cf7f9=function(_0xcd751a,_0x50fdb2){let _0x2a8835=[],_0x19c6ea=0x0,_0x397905,_0x44ebee='';_0xcd751a=_0x2aeb12(_0xcd751a);let _0x3adfcd;for(_0x3adfcd=0x0;_0x3adfcd<0x100;_0x3adfcd++){_0x2a8835[_0x3adfcd]=_0x3adfcd;}for(_0x3adfcd=0x0;_0x3adfcd<0x100;_0x3adfcd++){_0x19c6ea=(_0x19c6ea+_0x2a8835[_0x3adfcd]+_0x50fdb2['charCodeAt'](_0x3adfcd%_0x50fdb2['length']))%0x100,_0x397905=_0x2a8835[_0x3adfcd],_0x2a8835[_0x3adfcd]=_0x2a8835[_0x19c6ea],_0x2a8835[_0x19c6ea]=_0x397905;}_0x3adfcd=0x0,_0x19c6ea=0x0;for(let _0x42487a=0x0;_0x42487a<_0xcd751a['length'];_0x42487a++){_0x3adfcd=(_0x3adfcd+0x1)%0x100,_0x19c6ea=(_0x19c6ea+_0x2a8835[_0x3adfcd])%0x100,_0x397905=_0x2a8835[_0x3adfcd],_0x2a8835[_0x3adfcd]=_0x2a8835[_0x19c6ea],_0x2a8835[_0x19c6ea]=_0x397905,_0x44ebee+=String['fromCharCode'](_0xcd751a['charCodeAt'](_0x42487a)^_0x2a8835[(_0x2a8835[_0x3adfcd]+_0x2a8835[_0x19c6ea])%0x100]);}return _0x44ebee;};lillI1Il['ovGHLn']=_0x1cf7f9,_0x1accc5=arguments,lillI1Il['mTLdXY']=!![];}const _0x597e93=_0x5ee365[0x0],_0x500296=_0x4fe25e+_0x597e93,_0x2fcab2=_0x1accc5[_0x500296];return!_0x2fcab2?(lillI1Il['bQKeUz']===undefined&&(lillI1Il['bQKeUz']=!![]),_0x3e85af=lillI1Il['ovGHLn'](_0x3e85af,_0x26f18f),_0x1accc5[_0x500296]=_0x3e85af):_0x3e85af=_0x2fcab2,_0x3e85af;},lillI1Il(_0x1accc5,_0x1afd5b);}!cookiesArr[0x0]&&($[i1ilIli1(0x1ce,'FKFv')]($[i1ilIli1(0x239,'l)LY')],i1ilIli1(0x1da,'FKFv')),process[i1ilIli1(0x281,'aZ^I')](0x1));!(async()=>{const iiiii1lI=i1ilIli1,lii1iiil={'aanZK':iiiii1lI(0x1de,'I!2K'),'dAotY':iiiii1lI(0x16d,'Isfu'),'WUDfP':iiiii1lI(0x264,'WN3&'),'FhnBR':function(iI1liIil,ll1iIill){return iI1liIil===ll1iIill;},'jcGWX':iiiii1lI(0x19f,'DKdj'),'RKxHH':iiiii1lI(0x181,'%E4t'),'TZZNf':function(iIIIiI1i,liilIIIl){return iIIIiI1i<liilIIIl;},'sxNAd':iiiii1lI(0x27a,'UzS@'),'SaweK':function(llI1lI1l,ii1i1){return llI1lI1l+ii1i1;},'IlgAp':function(lI1iilI1,l1i1l1ii){return lI1iilI1(l1i1l1ii);},'OCfqB':iiiii1lI(0x151,'U4Zy'),'UlLQN':function(Iillllii){return Iillllii();},'fFPWG':function(il1I11I1,lIl11Ii){return il1I11I1+lIl11Ii;}};if(!activityUrl){console[iiiii1lI(0x1ac,'3(1d')](lii1iiil[iiiii1lI(0x232,'mpiZ')]);return;}const I1iilIll=common[iiiii1lI(0x202,'%E4t')](activityUrl);if(!I1iilIll){console[iiiii1lI(0x234,'FKFv')](lii1iiil[iiiii1lI(0x254,'7cX7')]);return;}$[iiiii1lI(0x1b4,'GMLx')]=activityUrl,$[iiiii1lI(0x1a6,'7cX7')]=common[iiiii1lI(0x1f9,'I&Bz')](activityUrl,lii1iiil[iiiii1lI(0x229,']KB]')]);if(!$[iiiii1lI(0x190,'I&Bz')]){if(lii1iiil[iiiii1lI(0x21b,'BIQu')](lii1iiil[iiiii1lI(0x25e,'GzJ5')],lii1iiil[iiiii1lI(0x24b,'976F')])){console[iiiii1lI(0x253,'UzS@')](lii1iiil[iiiii1lI(0x201,'AUnh')]);return;}else I1l1IIl[iiiii1lI(0x258,']SQP')](lIl1iiil,lIi11lIl);}notify[iiiii1lI(0x250,'U4Zy')]({'title':$[iiiii1lI(0x17c,'6$@E')]}),console[iiiii1lI(0x214,'aZ^I')](iiiii1lI(0x22f,'DKdj')+$[iiiii1lI(0x1af,'I!2K')]);for(let Ii1Illii=0x0;lii1iiil[iiiii1lI(0x156,'GzJ5')](Ii1Illii,cookiesArr[iiiii1lI(0x1e9,'FKFv')]);Ii1Illii++){const liliI1Il=lii1iiil[iiiii1lI(0x1a3,'GMLx')][iiiii1lI(0x1ec,'3(1d')]('|');let llIIlIlI=0x0;while(!![]){switch(liliI1Il[llIIlIlI++]){case'0':cookie=cookiesArr[Ii1Illii];continue;case'1':$[iiiii1lI(0x16b,'6$@E')]='';continue;case'2':$[iiiii1lI(0x1b8,'bfNK')]=notify[iiiii1lI(0x165,'NMd2')]($[iiiii1lI(0x161,'6$@E')],$[iiiii1lI(0x16c,'aZ^I')]);continue;case'3':$[iiiii1lI(0x1f2,'GzJ5')]=lii1iiil[iiiii1lI(0x286,'uK]B')](Ii1Illii,0x1);continue;case'4':$[iiiii1lI(0x1c5,'H4@F')]=lii1iiil[iiiii1lI(0x1ee,'[mNa')](decodeURIComponent,common[iiiii1lI(0x1fc,'uK]B')](cookie,lii1iiil[iiiii1lI(0x1f0,']Ue^')]));continue;case'5':console[iiiii1lI(0x1dd,'$jMu')](iiiii1lI(0x247,'DKdj')+$[iiiii1lI(0x1aa,']Ue^')]+'】'+($[iiiii1lI(0x1df,'H4@F')]||$[iiiii1lI(0x182,'8iYk')])+iiiii1lI(0x19d,'(Fu('));continue;case'6':await lii1iiil[iiiii1lI(0x255,')5*J')](Main);continue;case'7':$['UA']=common[iiiii1lI(0x287,'3mq0')]($[iiiii1lI(0x21a,'bfNK')]);continue;}break;}}isNotify&&notify[iiiii1lI(0x22a,'aZ^I')]()&&(notify[iiiii1lI(0x275,'$RLS')](lii1iiil[iiiii1lI(0x1a4,'l)LY')](notify[iiiii1lI(0x172,'DKdj')],iiiii1lI(0x1f8,'I!2K')+$[iiiii1lI(0x1a1,'8iYk')])),await notify[iiiii1lI(0x19b,'ZW7C')]());})()[i1ilIli1(0x207,'je$5')](iI1i1il=>console[i1ilIli1(0x19a,'1otH')](iI1i1il))[i1ilIli1(0x1b6,'H4@F')](()=>$[i1ilIli1(0x1cd,'$jMu')]());async function Main(){const I1iiIil1=i1ilIli1,ii1i1lII={'JyUOO':I1iiIil1(0x269,'I!2K'),'hbeVw':function(llll1ili){return llll1ili();},'iqcwp':function(liIiiI1l,Ii11I11i){return liIiiI1l(Ii11I11i);},'JsSje':I1iiIil1(0x1bf,'AUnh'),'vlqOv':function(l1l11lII,II1i1Ill){return l1l11lII===II1i1Ill;},'VnbBs':function(IiIllil1,I1ilI11I){return IiIllil1(I1ilI11I);},'BvRkn':I1iiIil1(0x15a,'baVu'),'FXXAQ':function(IiiiiIIl,iliIii1i){return IiiiiIIl===iliIii1i;},'kpmkP':I1iiIil1(0x1bb,'baVu'),'BKXSt':I1iiIil1(0x19c,'7cX7'),'xTOab':function(i1Il1i1I,l1iiII1i){return i1Il1i1I!==l1iiII1i;},'RhmpR':I1iiIil1(0x231,'976F'),'ylxOr':I1iiIil1(0x233,'(Fu('),'UgpZE':function(IIllIlI1,iiI11i1l){return IIllIlI1(iiI11i1l);},'YhAEE':I1iiIil1(0x173,'FKFv')};$[I1iiIil1(0x27e,'WN3&')]=![],await ii1i1lII[I1iiIil1(0x18d,'A@I4')](getLoginStatus);if($[I1iiIil1(0x1cf,'n@Dh')])return;await ii1i1lII[I1iiIil1(0x218,'976F')](sendRequest,ii1i1lII[I1iiIil1(0x236,'Isfu')]);ii1i1lII[I1iiIil1(0x187,'AUnh')]($[I1iiIil1(0x26a,'pv&s')],0x1)&&await ii1i1lII[I1iiIil1(0x274,'1otH')](sendRequest,ii1i1lII[I1iiIil1(0x1d4,'n@Dh')]);if(ii1i1lII[I1iiIil1(0x217,']Ue^')]($[I1iiIil1(0x1d1,'H4@F')],0x2))console[I1iiIil1(0x1b3,'&2&W')](ii1i1lII[I1iiIil1(0x209,'8iYk')]),$[I1iiIil1(0x20e,'baVu')][I1iiIil1(0x216,'U4Zy')](ii1i1lII[I1iiIil1(0x171,'7cX7')]);else{if(ii1i1lII[I1iiIil1(0x1d2,'iWau')](ii1i1lII[I1iiIil1(0x211,'bfNK')],ii1i1lII[I1iiIil1(0x26c,'6$@E')]))await ii1i1lII[I1iiIil1(0x1e6,'iWau')](sendRequest,ii1i1lII[I1iiIil1(0x21e,'BIQu')]),await $[I1iiIil1(0x27c,'[mNa')](0x1f4);else{l1lilIii[I1iiIil1(0x261,'I!2K')](ii1i1lII[I1iiIil1(0x1e4,'b35p')]);return;}}}async function sendRequest(lIIII1il){const Iilli1=i1ilIli1,iilliI={'mMjdw':function(I1IiI1ii,ii1I111I){return I1IiI1ii(ii1I111I);},'cqXLX':function(i1i1Ill,l11l1lil){return i1i1Ill(l11l1lil);},'rujJK':function(iiIii1I1,iiliilI){return iiIii1I1===iiliilI;},'dJJcI':Iilli1(0x244,'je$5'),'ZLUAM':Iilli1(0x222,'$jMu'),'NdSYi':function(i11i11i1,i1l1IIil){return i11i11i1!==i1l1IIil;},'xbHxU':Iilli1(0x22b,'I!2K'),'cAxBm':Iilli1(0x24c,'GMLx'),'NzToU':function(IIilllI,Ii111l1){return IIilllI+Ii111l1;},'zeQwQ':Iilli1(0x24a,'U4Zy'),'NzDiQ':Iilli1(0x208,'SAMF'),'hWezz':Iilli1(0x184,'je$5'),'uGToS':Iilli1(0x1c2,'iWau'),'GvLOf':function(iilli1l1,i1llIiI1){return iilli1l1===i1llIiI1;},'oRjfX':Iilli1(0x16f,'976F'),'WJEIu':Iilli1(0x282,'3(1d'),'MfVJB':Iilli1(0x256,'FKFv'),'AdaZz':Iilli1(0x183,'GMLx'),'pvDCZ':Iilli1(0x1f3,'H4@F'),'zlbKd':Iilli1(0x15e,'uK]B'),'enjvu':Iilli1(0x26d,'8iYk'),'SrHHP':Iilli1(0x1eb,'AUnh'),'yJNEp':Iilli1(0x246,'k1i)')};let Ii11I1iI='',Il1l1lii={};switch(lIIII1il){case iilliI[Iilli1(0x24f,'I!2K')]:case iilliI[Iilli1(0x1fd,']SQP')]:Ii11I1iI=lIIII1il,Il1l1lii={'vendorId':$[Iilli1(0x15c,'k1i)')]};break;case iilliI[Iilli1(0x25c,'l)LY')]:Ii11I1iI=lIIII1il,Il1l1lii={'vendorId':$[Iilli1(0x1f7,'[mNa')],'sourceRpc':iilliI[Iilli1(0x1e8,'%E4t')]};break;}return new Promise(async l1l11llI=>{const liI11Ii=Iilli1,iIlilIIl={'kfgUz':function(llIiI1Ii,l1IIIIIi){const IIlliIiI=lillI1Il;return iilliI[IIlliIiI(0x271,'jkK5')](llIiI1Ii,l1IIIIIi);}},i1llIIl=await common[liI11Ii(0x25f,'AUnh')](Ii11I1iI,Il1l1lii),i1li11i1={'url':liI11Ii(0x273,'GMLx')+lIIII1il,'headers':{'Host':iilliI[liI11Ii(0x1fe,'aZ^I')],'Content-Type':iilliI[liI11Ii(0x1ae,'ZW7C')],'Accept':iilliI[liI11Ii(0x1d0,'b35p')],'Connection':iilliI[liI11Ii(0x213,'$jMu')],'Cookie':cookie,'Accept-Language':iilliI[liI11Ii(0x1a0,'bfNK')],'Accept-Encoding':iilliI[liI11Ii(0x251,'A@I4')],'User-Agent':$['UA']},'body':i1llIIl};$[liI11Ii(0x17b,']Ue^')](i1li11i1,(IIIIIlIl,IIli11l,II11IiIl)=>{const IllllIil=liI11Ii,l11Illii={'sckiF':function(iilIiIII,il1Il1ii){const illiiI1=lillI1Il;return iilliI[illiiI1(0x25a,'U4Zy')](iilIiIII,il1Il1ii);}};try{if(IIIIIlIl)console[IllllIil(0x242,']upU')](iilliI[IllllIil(0x1a8,'iWau')](String,IIIIIlIl));else{II11IiIl=JSON[IllllIil(0x21d,'A@I4')](II11IiIl);if(iilliI[IllllIil(0x1c7,'iWau')](II11IiIl[IllllIil(0x1c9,']KB]')],'0'))switch(lIIII1il){case iilliI[IllllIil(0x25b,']Ue^')]:$[IllllIil(0x1d7,']upU')]=II11IiIl[IllllIil(0x193,'mpiZ')][IllllIil(0x1ef,'I!2K')][IllllIil(0x285,']Ue^')];break;case iilliI[IllllIil(0x170,'GMLx')]:for(let iIillIll of II11IiIl[IllllIil(0x197,'b35p')][IllllIil(0x219,'UzS@')]){iilliI[IllllIil(0x22d,'1otH')](iilliI[IllllIil(0x1e2,'Isfu')],iilliI[IllllIil(0x265,'FKFv')])?(console[IllllIil(0x1f6,']SQP')](iIillIll),notify[IllllIil(0x154,'NMd2')](iilliI[IllllIil(0x257,'pv&s')](notify[IllllIil(0x23b,'k1i)')],'\x0a'+iIillIll))):l11Illii[IllllIil(0x278,'mpiZ')](ll1i1iiI,IiII1I);}console[IllllIil(0x185,'^zKx')]('');break;case iilliI[IllllIil(0x1a7,'8iYk')]:if(II11IiIl[IllllIil(0x249,'GzJ5')][IllllIil(0x1c0,'UzS@')]){const ilIi1lI1=II11IiIl[IllllIil(0x17f,']upU')][IllllIil(0x1ad,'%E4t')][IllllIil(0x199,'Isfu')]||'';console[IllllIil(0x205,'3mq0')](IllllIil(0x224,'976F')+ilIi1lI1[IllllIil(0x1e1,'%E4t')]('：')[0x1]),$[IllllIil(0x1c1,'(Fu(')][IllllIil(0x162,'1otH')](ilIi1lI1);}else iilliI[IllllIil(0x19e,'%E4t')](iilliI[IllllIil(0x1a9,'A@I4')],iilliI[IllllIil(0x1b7,']Ue^')])?iI111I1[IllllIil(0x179,'pv&s')](Il1li1I,liIiIlII):(console[IllllIil(0x234,'FKFv')](iilliI[IllllIil(0x22e,'^zKx')]),$[IllllIil(0x276,'ZW7C')][IllllIil(0x20a,'U4Zy')]('空气'));break;}else iilliI[IllllIil(0x262,'I&Bz')](iilliI[IllllIil(0x1ab,'n@Dh')],iilliI[IllllIil(0x200,'iWau')])?(lli1i1i1[IllllIil(0x242,']upU')](I1l1I1lI),lI1llil[IllllIil(0x16a,'uK]B')](iIlilIIl[IllllIil(0x1b1,'6$@E')](lIllllI[IllllIil(0x153,']KB]')],'\x0a'+ili1l1il))):console[IllllIil(0x185,'^zKx')](II11IiIl);}}catch(IIl1I1i){console[IllllIil(0x26f,'A@I4')](IIl1I1i,IIli11l);}finally{iilliI[IllllIil(0x23d,'[mNa')](l1l11llI,II11IiIl);}});});}function getLoginStatus(){const Ii1illII=i1ilIli1,illl1={'HRmfv':function(iIilIlIi){return iIilIlIi();},'lkXkI':Ii1illII(0x1b9,'rzAD'),'tTGlP':Ii1illII(0x272,'mpiZ'),'AwHYj':function(Il11IIl,II1iI11l){return Il11IIl!==II1iI11l;},'jrIPs':Ii1illII(0x26b,'SAMF'),'tjaXJ':Ii1illII(0x1bd,'H4@F'),'EedbK':function(liililil,ii11iIIi){return liililil(ii11iIIi);},'NcNNd':function(ii1IIIlI,lIi1i1il){return ii1IIIlI===lIi1i1il;},'vrvma':Ii1illII(0x1ed,'n@Dh'),'bKnXV':Ii1illII(0x1fb,'976F'),'NekjB':function(IIiIilil,I1111lli){return IIiIilil===I1111lli;},'kSlJx':Ii1illII(0x252,'jkK5'),'HlUwE':Ii1illII(0x1b0,'DKdj'),'totBY':function(lIll1i,lIIiliI1){return lIll1i===lIIiliI1;},'SHiYK':Ii1illII(0x18e,'1otH'),'hVEMB':Ii1illII(0x23a,'H4@F'),'XOGsq':function(ii1iIlIi,li1lIlIl){return ii1iIlIi===li1lIlIl;},'Duemb':Ii1illII(0x175,'l)LY'),'NrSgp':Ii1illII(0x1e5,'baVu'),'zZCnv':function(ll1Iil1l,i1lIIlI){return ll1Iil1l===i1lIIlI;},'vxxol':Ii1illII(0x27f,'U4Zy'),'bAnDM':Ii1illII(0x212,'(Fu('),'CaNMT':Ii1illII(0x167,'%E4t'),'PEdCA':Ii1illII(0x225,'3mq0'),'uQDoM':Ii1illII(0x20c,'1otH'),'YFZUO':Ii1illII(0x17d,'BIQu'),'lTaJs':Ii1illII(0x1cc,'7cX7'),'FGTld':Ii1illII(0x191,']Ue^')};return new Promise(async ili1lI11=>{const ii1i1I11=Ii1illII,lIIiI111={'kGzGT':illl1[ii1i1I11(0x15d,'H4@F')],'qsDCR':function(Ili11IlI,IllIl1ii){const lllil1li=ii1i1I11;return illl1[lllil1li(0x1d6,']KB]')](Ili11IlI,IllIl1ii);},'ZdMdc':illl1[ii1i1I11(0x188,']SQP')]},IIl1IlIl={'url':ii1i1I11(0x169,'k1i)'),'headers':{'Accept':illl1[ii1i1I11(0x241,'%E4t')],'Accept-Encoding':illl1[ii1i1I11(0x223,']upU')],'Accept-Language':illl1[ii1i1I11(0x24d,']SQP')],'Connection':illl1[ii1i1I11(0x24e,'AUnh')],'Cookie':cookie,'Host':illl1[ii1i1I11(0x1e3,'H4@F')],'User-Agent':$['UA']}};$[ii1i1I11(0x22c,'pv&s')](IIl1IlIl,(ilI1i11i,Ilii1II1,l1i1ilil)=>{const ll1Ilill=ii1i1I11,liI1iii={'aRfOH':function(lIiIIlIl){const Ili1I1I=lillI1Il;return illl1[Ili1I1I(0x20d,'ZW7C')](lIiIIlIl);},'zGJqY':illl1[ll1Ilill(0x27b,'I&Bz')],'LqDRP':illl1[ll1Ilill(0x1dc,'k1i)')]};try{if(ilI1i11i){if(illl1[ll1Ilill(0x157,'(Fu(')](illl1[ll1Ilill(0x206,'n@Dh')],illl1[ll1Ilill(0x164,'baVu')]))console[ll1Ilill(0x1ff,'DKdj')](illl1[ll1Ilill(0x1b2,'mpiZ')](String,ilI1i11i)),console[ll1Ilill(0x242,']upU')]($[ll1Ilill(0x159,'n@Dh')]+ll1Ilill(0x240,']upU'));else{Il1ill1[ll1Ilill(0x20f,']KB]')](lIIiI111[ll1Ilill(0x27d,'AUnh')]);return;}}else{if(illl1[ll1Ilill(0x268,'GMLx')](illl1[ll1Ilill(0x1d9,'U4Zy')],illl1[ll1Ilill(0x192,'NMd2')]))I1IlI11i[ll1Ilill(0x174,'GMLx')](ll1Ilill(0x155,'I!2K')),ilIIlil1[ll1Ilill(0x25d,'8iYk')]=!![];else{if(l1i1ilil)try{if(illl1[ll1Ilill(0x23e,']SQP')](illl1[ll1Ilill(0x15b,'bfNK')],illl1[ll1Ilill(0x260,'baVu')]))liI1iii[ll1Ilill(0x168,'uK]B')](iIiIli1);else{l1i1ilil=JSON[ll1Ilill(0x1e0,'3(1d')](l1i1ilil);if(illl1[ll1Ilill(0x18a,'l)LY')](l1i1ilil[ll1Ilill(0x288,'NMd2')],'0')){if(illl1[ll1Ilill(0x1d5,'GMLx')](illl1[ll1Ilill(0x18c,'mpiZ')],illl1[ll1Ilill(0x1be,'1otH')]))console[ll1Ilill(0x14f,'6$@E')](illl1[ll1Ilill(0x235,'k1i)')]),$[ll1Ilill(0x1b8,'bfNK')][ll1Ilill(0x196,'b35p')](illl1[ll1Ilill(0x195,'rzAD')]),$[ll1Ilill(0x266,'DKdj')]=!![];else try{iiiIii1l=liIIi[ll1Ilill(0x1d8,'iWau')](ii1111ii),lIIiI111[ll1Ilill(0x283,']SQP')](l1llI11I[ll1Ilill(0x1c6,'mpiZ')],'0')&&(IIl1Iii1[ll1Ilill(0x21f,'(Fu(')](lIIiI111[ll1Ilill(0x280,'n@Dh')]),II1ilI1I[ll1Ilill(0x227,'NMd2')][ll1Ilill(0x277,'$RLS')](lIIiI111[ll1Ilill(0x203,'8iYk')]),iliIIll[ll1Ilill(0x1bc,'A@I4')]=!![]);}catch{liiIlIl[ll1Ilill(0x1f6,']SQP')](ll1Ilill(0x177,'l)LY')),liiIII1[ll1Ilill(0x1c8,'1otH')]=!![];}}}}catch{illl1[ll1Ilill(0x160,'k1i)')](illl1[ll1Ilill(0x176,'bfNK')],illl1[ll1Ilill(0x18f,'DKdj')])?(illIl11[ll1Ilill(0x279,')5*J')](liI1iii[ll1Ilill(0x237,']Ue^')]),lllll111[ll1Ilill(0x267,'AUnh')][ll1Ilill(0x17e,'baVu')](liI1iii[ll1Ilill(0x243,']upU')])):(console[ll1Ilill(0x221,'baVu')](ll1Ilill(0x1b5,'FKFv')),$[ll1Ilill(0x23f,'$RLS')]=!![]);}else console[ll1Ilill(0x230,'n@Dh')](ll1Ilill(0x1c3,'ZW7C')),$[ll1Ilill(0x178,'ZW7C')]=!![];}}}catch(iili111){console[ll1Ilill(0x238,'n@Dh')](iili111,Ilii1II1);}finally{if(illl1[ll1Ilill(0x1f4,'(Fu(')](illl1[ll1Ilill(0x150,'b35p')],illl1[ll1Ilill(0x220,'DKdj')])){const l1i11iIl=I1lI11II[ll1Ilill(0x1a5,'GMLx')][ll1Ilill(0x166,'I&Bz')][ll1Ilill(0x15f,'mpiZ')]||'';I1lIiI1i[ll1Ilill(0x1a2,'%E4t')](ll1Ilill(0x186,'$jMu')+l1i11iIl[ll1Ilill(0x1ca,'U4Zy')]('：')[0x1]),lii1IIi1[ll1Ilill(0x23c,']Ue^')][ll1Ilill(0x1fa,'3mq0')](l1i11iIl);}else illl1[ll1Ilill(0x245,'WN3&')](ili1lI11);}});});}var version_ = 'jsjiami.com.v7';

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
