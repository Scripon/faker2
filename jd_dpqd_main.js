/*
活动名称：批量店铺签到（活动查询）
活动链接：https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=<token>
环境变量：jd_dpqd_tokens // 活动令牌，多个用英文逗号分割

查询活动信息主脚本，IP限制严重建议使用代理，请勿频繁运行
自动去重并过滤无效活动，默认过滤垃圾奖品活动
运行后会在本地目录生成缓存文件以用于签到脚本使用

7 7 7 7 *

*/

const $ = new Env('批量店铺签到（活动查询）')
const common = require('./function/jdCommon')
const { H5st, jsTk } = require('./function/jdCrypto')

var iｉl='jsjiami.com.v7';const III11il=I1lI1i;(function(l1ilI1Il,liIiIiI,illI1II1,lI1llII,II1IiII,IlIlIIl1,l1ll1I1I){return l1ilI1Il=l1ilI1Il>>0x8,IlIlIIl1='hs',l1ll1I1I='hs',function(liI11l11,lIi11ii1,iIl1111,illliIli,iiiilIl){const l1IlI1i=I1lI1i;illliIli='tfi',IlIlIIl1=illliIli+IlIlIIl1,iiiilIl='up',l1ll1I1I+=iiiilIl,IlIlIIl1=iIl1111(IlIlIIl1),l1ll1I1I=iIl1111(l1ll1I1I),iIl1111=0x0;const i1III11l=liI11l11();while(!![]&&--lI1llII+lIi11ii1){try{illliIli=-parseInt(l1IlI1i(0x1c5,'!ZFU'))/0x1*(-parseInt(l1IlI1i(0x1da,'iEXb'))/0x2)+-parseInt(l1IlI1i(0x2d3,'0Qeg'))/0x3*(parseInt(l1IlI1i(0x288,'1I%X'))/0x4)+-parseInt(l1IlI1i(0x233,'rW1T'))/0x5+-parseInt(l1IlI1i(0x2e0,'*cLG'))/0x6+-parseInt(l1IlI1i(0x252,'Q!Z@'))/0x7*(parseInt(l1IlI1i(0x319,'pT3['))/0x8)+parseInt(l1IlI1i(0x204,'kEPg'))/0x9*(parseInt(l1IlI1i(0x33a,'NzcB'))/0xa)+-parseInt(l1IlI1i(0x29f,'g6cz'))/0xb*(-parseInt(l1IlI1i(0x1e8,'rW1T'))/0xc);}catch(iI1IIiil){illliIli=iIl1111;}finally{iiiilIl=i1III11l[IlIlIIl1]();if(l1ilI1Il<=lI1llII)iIl1111?II1IiII?illliIli=iiiilIl:II1IiII=iiiilIl:iIl1111=iiiilIl;else{if(iIl1111==II1IiII['replace'](/[pMCYTXRBxlALyrIbUkndG=]/g,'')){if(illliIli===lIi11ii1){i1III11l['un'+IlIlIIl1](iiiilIl);break;}i1III11l[l1ll1I1I](iiiilIl);}}}}}(illI1II1,liIiIiI,function(l111l11,li1Ili1i,Ill1i11l,II1iiliI,IlIIIlII,l11IlIII,lili1lI1){return li1Ili1i='\x73\x70\x6c\x69\x74',l111l11=arguments[0x0],l111l11=l111l11[li1Ili1i](''),Ill1i11l=`\x72\x65\x76\x65\x72\x73\x65`,l111l11=l111l11[Ill1i11l]('\x76'),II1iiliI=`\x6a\x6f\x69\x6e`,(0x15e9da,l111l11[II1iiliI](''));});}(0xc400,0xa0fea,l1liIl11,0xc6),l1liIl11)&&(iｉl=III11il(0x1eb,'98pX'));let tokensList=(process[III11il(0x2ad,'!Ur@')][III11il(0x25e,'0Qeg')]||'')[III11il(0x1cb,'3Xc1')](',')||[];function I1lI1i(_0xd21430,_0x128ea5){const _0x3713b1=l1liIl11();return I1lI1i=function(_0x4343f4,_0x2ccef7){_0x4343f4=_0x4343f4-0x1a1;let _0x2f4ae7=_0x3713b1[_0x4343f4];if(I1lI1i['uDNRLN']===undefined){var _0x219c2b=function(_0x5e7834){const _0x5cdab1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x13d549='',_0x7cb452='';for(let _0xfca2e5=0x0,_0x51776d,_0x2db8bc,_0x2f5bcc=0x0;_0x2db8bc=_0x5e7834['charAt'](_0x2f5bcc++);~_0x2db8bc&&(_0x51776d=_0xfca2e5%0x4?_0x51776d*0x40+_0x2db8bc:_0x2db8bc,_0xfca2e5++%0x4)?_0x13d549+=String['fromCharCode'](0xff&_0x51776d>>(-0x2*_0xfca2e5&0x6)):0x0){_0x2db8bc=_0x5cdab1['indexOf'](_0x2db8bc);}for(let _0x5c2665=0x0,_0x49e7b1=_0x13d549['length'];_0x5c2665<_0x49e7b1;_0x5c2665++){_0x7cb452+='%'+('00'+_0x13d549['charCodeAt'](_0x5c2665)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x7cb452);};const _0x10685b=function(_0x2d2384,_0x3ffe41){let _0x231c7c=[],_0x5a8ab4=0x0,_0x220b25,_0x1d7b2f='';_0x2d2384=_0x219c2b(_0x2d2384);let _0x1b7d54;for(_0x1b7d54=0x0;_0x1b7d54<0x100;_0x1b7d54++){_0x231c7c[_0x1b7d54]=_0x1b7d54;}for(_0x1b7d54=0x0;_0x1b7d54<0x100;_0x1b7d54++){_0x5a8ab4=(_0x5a8ab4+_0x231c7c[_0x1b7d54]+_0x3ffe41['charCodeAt'](_0x1b7d54%_0x3ffe41['length']))%0x100,_0x220b25=_0x231c7c[_0x1b7d54],_0x231c7c[_0x1b7d54]=_0x231c7c[_0x5a8ab4],_0x231c7c[_0x5a8ab4]=_0x220b25;}_0x1b7d54=0x0,_0x5a8ab4=0x0;for(let _0x5c16e5=0x0;_0x5c16e5<_0x2d2384['length'];_0x5c16e5++){_0x1b7d54=(_0x1b7d54+0x1)%0x100,_0x5a8ab4=(_0x5a8ab4+_0x231c7c[_0x1b7d54])%0x100,_0x220b25=_0x231c7c[_0x1b7d54],_0x231c7c[_0x1b7d54]=_0x231c7c[_0x5a8ab4],_0x231c7c[_0x5a8ab4]=_0x220b25,_0x1d7b2f+=String['fromCharCode'](_0x2d2384['charCodeAt'](_0x5c16e5)^_0x231c7c[(_0x231c7c[_0x1b7d54]+_0x231c7c[_0x5a8ab4])%0x100]);}return _0x1d7b2f;};I1lI1i['QRoGtp']=_0x10685b,_0xd21430=arguments,I1lI1i['uDNRLN']=!![];}const _0x5d11ab=_0x3713b1[0x0],_0x39f3fb=_0x4343f4+_0x5d11ab,_0x195cfb=_0xd21430[_0x39f3fb];return!_0x195cfb?(I1lI1i['SYsVri']===undefined&&(I1lI1i['SYsVri']=!![]),_0x2f4ae7=I1lI1i['QRoGtp'](_0x2f4ae7,_0x2ccef7),_0xd21430[_0x39f3fb]=_0x2f4ae7):_0x2f4ae7=_0x195cfb,_0x2f4ae7;},I1lI1i(_0xd21430,_0x128ea5);}function l1liIl11(){const iIlIIli1=(function(){return[...[iｉl,'CYBjsyUjixlamlin.TbcCom.rvp7LCdGpCXMARIk==','a8kkWPqlWQBdTxyDqwddHG/dKG','Amo3c1dcMqenySkW','W4O0jCovjq','WRvbxtRdUW','W4VcVmk0C8kR','W43dV8k3W64WhG','4P+ZaUInKUwoI+A2QowiKos8MoAaMowMIEI3MW','j8oGrG','W7Sugq','AUISOUAYKowqP+w7Ury','WRJdPaC2W6y','WQK0g8kyASoFudedW6e','d8k8g3Py','WONcHCkFeCoLtIRcVZC','W6ZcSCoDlmow','W4pcQJS','WQ/NJBZLOk/LJOZPHyJVVzq','W7DTxCkatmo7FGub','W6ajf8k9u8oeBmkJbMzih8kh','W6NcPCoUfSoM','WPBdOmoKW4fJW4ndvCojWPqrW5yZk8k+','W4lcTJS','nsRdHdSPWOtcQq','W4GrygJcJ8kB','WQCIWOVcMSo1W7xdHgW','kSobyCkMwmocWOhcOa','WO1BwehdQG','oMFdMa','WPaWW7uyWR8','y+E6PUAESE+9Jos7RoASNoAwLUEdQ+AEMEwqQCoTW4i','W7VNJAJLOBBLJP/PHllVV4W','WQhdMsVdItaz','4P+PW7pMNOBOGQNMR6tNOkdLPPRNKAb+','W4muW7akW5noWQFdOCkMWPhcOH18WPNcULZcHLJcVIS','zdldRCogW6m','W4ldTSomC8ojW6lcI3tdICk2W4f9DG','q1xdP8kUsa','W73cPSknp8kuvSobECoEAeKP','WP8KW79UwG','4PUUWPNORARLHAdLRQNKUzpLVAJOPBVNM4/NJyBLOjFLJBBPHQZLK4lLH7ZOVBZOOBJOH4RMN4tVV48','WOHlqvS4','uSkWhCkswCkOWONcShq','WRhcGmkQdCo2','W4CjW6m','5BQV6zc556AD5yU6','8k+RNSoo','WPZcRSkBc8kyWQddNhi','lmkEWOqwW4e','mUE4KoACREAuIUMxNE++GW','W6CSWQqB','bKtdM2zd','WQzuaCo3WQ0','WR1cemosWOVdKSoQ','W6ief8oEb8oI','ECoKW6VdNLKcW6VcSGC9nhZcUq','c8k8WPK8WPa','W5xdKwxdTSoa','WRpcQ8k2cCkP','W5RNVltLRlVLHlJLHO/LRlNMRzO','tHpdNcWB','WPBdSgJcNCoRWR9xFMmpoLdcHa','yM4IW4nuwG','WQyrbmkpBW','lbBcHa7cJq','WQS9W5Wc','WQfdCxe','D2KJW6y','ydZcLXpcJmkUWO4','WQSYyXBcUCk8WPdcGa','WPHzxq/dLSkJWOy','FCkYWOWZ','W5vgWRO5W6pdICkDkmoiWOZdMSocWRlcRSoWoaW','W5PqWPCqW6ddNW','W6qscSoIiq','WOOKW4u/WQS','WRHXkmoKWQ0','zWRdVa','ESoHgG','WQCABGNcOG','lSk0WQBcIW','B1RdMSkoEW','n3niAuXNmG','c8omFwhdNq','WPe7W7dcGa','WP9lEq','WRe6ur7cUW','WRSnWRlcKSo2','smk2aCku','5RwY5yIN5Bc35zYRWRy','jCoGvG','iWlcRcVcGW','lCk2peDS','irRdUsKaW712WOpcLetdRW','nCkmWO4OWRS','mmohESkZzmocWO/cSCk9Eh1Hy1eJWORcRLLLWOxcICoFfCoRENZcG8k2WQddOrmrWRNdPCoEW6H1W6PKW4y','rCkSWOC3WPe','W4jdFIZdJq','WPBcOSkbbSkEWQldKgJdImkJW7naB8o9W7a','WQtdNIFdPYy','8lE5UbpMNixORkRMTAZLIBFKVixMG4VLPAZOTOPS4PYekq','CwhdL8kQ','WQnsamocWO/dHSo8','5RwT5yUe5Bs05lUtW5q','a8kxWPxcGWy','jY7cJZW','W6TezHRdRa','W6hcVf3cLmkToCkRW4NdSctdNYK','WQZdLtJdPtqcWPJcNCo4iW','kMvMFa9+oSkJWQ3cUG','WQGTW5S','gmkvWOmCW6K','W4ykxe/cGa','WOTbt0/dMdW','WQS6W4yqWP/cHbaewW','iSowW7O','WOpcM8klkmob','8yoBO8kP5P+P6k+C5RAy5yMf5lYl5Ok+5AE16lsQW6pINAlcQq','WPvUBeSw','W7aEcSkivCo2Bmk5cKfiomkkeJa','W7q2WRmw','5BYD5Awp5PAy6zEL77+Z','eJtdMHXRW4NdOa','yxawW5PE','mCkwWOm+W6C','4P69WQxOHORMNQZOV5dOO7VPGA3LIjpKUkBPL7NOROFcLq','BmodWR4oW4WqW4uO','jg3dJLPcgmkj','WPLLxIZdJq','5Q685PsD566d5yMb','WRFdQmobW5zV','4P69WQxMNRRNNAxOR7FMS7uk','WPFcKmko','WPbgWPuSW7FdP8kngmotWPVdNCoFW6JcM8oMorq','W4RcP0FcKmk7BCoWW4VdJgJcGshcTMmMb8omWOxcI8k2','W6S2mCoakW','iSkqWOtcHsG'],...(function(){return[...['5RwM5yMB5Bsh5lUvWQS','W6JdG8knW40h','rt3dMCoAW5S','pGNcPZNcKCkyWO8','W4eLmmoDga','W4JdTmkTW6W2nCojuCkfWOXWkSousx4sW6ZcNgtdNa','W49AxsldMa','y30PW70','W7GScmkyFG','zb/dOtqYWRtcSK/dICkRW4PJW4lcMmkd','cCoZoCkPBSoFW4JdHq','DmoQghdcHrG9t8kGpG','oSogymkIF8onWPNcOmkYAxf1CMyKWRNcUh1JWOBcRG','bmoKW5xdUJ1EWRH1','W4qlFu3cJCkdCCk3','qCk1WORcQw0FW4r6xmkHWRv0W5S','raxdVI5JW5JdHqxdG8ktxCkQW4GUnG','WRuMWPhcNW','W4pcOedcICkVoq','ndFcPdFcNa','WRyPW58','saxdRX8TW43dGbRdNmkc','WRfxdComWRS','WRCiWQtcV8oh','4PYcWPNMNRFOG5xMRzdNOBtLPQNNK7XR','W5dcVCoAlSoa','WOVcTCoZ','W5aAW5pcMWv9WRa','u+w/UowKTU+9VEAAMEEaNUwgJUACLowqG1lcPq','i8k5WOrUW7m','WQC/gCkQBSozrd4bW7Hp','WQ0SCJNcRG','5RER5yQp5BgL5z6jW4O','amkiWPeyWRC','5QY35PEq562q5yIl','ksdcNYe','oCksWOWO','WRm4W4jVBW','WRXcdCogWP7dNq','WPWOWOJcSSoC','W6ZdU0ZdS8oc','BX/dUXiLWQG','5l2B5Okv5yUw','W4xcT8kLWRC4WOyAymopWQufW5iv','n25OAuXNmSkdWQFcOa','WQy9DbS','W6ldV2pdV8o+','W4tcSmoypCoXj8oQhXFdNW','p1ZcO8kKWP4ljw41W6zGW5C','dmk6iui','FCk2ctdcOW1DWO7dIYbfW6m','5ywu57M/5y+G','k8oCymktEmoh','lXRcIq','k8kkWReIW6O','5yUG5BYp5lIY','W6pcQCoPlmoR','ng93zG','W5KzW7ygW5fB','WPTHiSo1WRO','W4muW7ioW41gWQddLmkvWPC','lYdcKq','WPZdPCo+a8o+h8ojma','5BQu6zka5zky56Af772lW6m','WR0HW4mEWP/cUG','nhn0yufJp8oSWQFcU8owEfldOG','W4hdUhm','imkYWRuLW67dO1mGygtcMG','WQ89EdBcQCkUWPdcNW','WRddRHqQW6e','WR0HW4elWPBcPaa','WP8mWQpcRCoD','zINdOdaq','WRXiba','WPVdTSoeW69RW5je','W4hcSSoynq','WRy1Br8','WOZcK8k0aCoq','WQ4ZzW','WRDdtfGr','W7BcJ8kTxSkD','WOxcTCkaiG','WPeuW6dcNsS','W4JcOcJdR8kXW70hsKS/j1tcNSk3mq','kJZcGG/cLW','W5mRd8kywW','776i5BAX5yYr5A+Y','WOqiW63cMWa','D245W7rc','W44hz0dcI8kbFCkTWOD9WOjbeCkYeW','D8kmWQKBcIZcLmk4cSkTW7ddOXC','W4SzW7agW5DgWRddRmk/WOC','nZBcHIO','zsBcJqewrCon','W7nfqshdRq','o8kKbNbi','Dmk8WPe+WQG','A3K+W6Ltvq','cfvxF0y','WPBcNSkz','pSomW65a','nCogAq','gLBdMdH5W73dUYu','WQDZz2Wb','jupdI15U','WP3cQmks','WPrAsq','WQbhE3BdJG','WOVdOYJdRJi','WO8HW7q','Ca/dTHy0WRpcQa','et3cVsJcMW','BCkGj8kOxG','WOfEEWNdK8kHWOhcGCkW','WQZdSGddQc0','W4ZcTsRdPSkK','WPvqxuJdJcGf','lCksWOC6W6yLW7amWO3cKa','W4yvW6m','CrhdRtX0','5P6a556F5AEs5zkU776P','W44BW70C','WQbsemoj','WPVcKSkkcSoNCZFcQXVcJa','WPCRW63cJaTQWRu+','WOfyurFdJq','WOa9W7dcGqL2','WOGlWO3cPmo/','aEw6N+ISTEELRoMBJ+EAVEA1V+wkNo+9PW','WRDLlmodWRa','gNLzy0W','W6BcMmogpCou','m8oAzmk/D8ooWOxdQ8kbDhuHyqm','WQFdKCo3W6fp','W7C3WRixfhryWPnQ','4P6Dz+IhV+AFKUI9GoIJI+MdIUwiUos5OEMuPEITPNq','WOaTW7FcGrHXWOGJWQJcH08tW6Tx','WPhdOCkzy8k/F8kUjthdVSk/jua'],...(function(){return['WRyIWPhcTSkLW7tdUq','WPtdPCkAzCkWEmkMbcZdTmk+awK','WP9zBG','mIlcHWlcGW','f07cVG','W5BORzJMSipLPztOTO7dPEkCKmkh','WRijDc3cMq','WQqUBXFcICk2WOhcGqeQCq','W5dNUPVMN5BVVidKUlxMROlMLitNGzpMNRtLK6nXW4K','W6SsbCotbCo+WQK','W6PcstBdPq','A3m3','WPmSW40yWPC','WQtORRtMSOlLKRpLU64Z','WQGUW74oWO0','W5hcTwlcHmk/','W43dTCk+','EbhdUSoJW55k','WRvjfq','xSkmm8k9FG','WQrRwhOO','WRabWPxcTmo7','WOOGWQrpCmkpWPFcGSo8WOXUWQ3cJCkYW7tdJ8krWOFcKq','W4ldLmkbW7Sm','WPRdNbZdRHa','4PUQW7xORkxLHQlLR7FKUB/LVjZOPzNNM6VNJ7pLO7ZLJ5dPHihLKl7LHRlOVQ3OOzBOHiNMNQlVV7m','WQXky2Kw','W4BcHxlcH8kb','WOPbttRdRW','vmkSfq','W6X/WP8tWRdcHtmctG','WQngdSoeW4FdMSo9wNFcIdS','n2VdI0zraSkjW6RdJMK','omkDWPepW6i7W5e','W5BcVfJcHCkM','W7Cyd8osdG','WOClW7pcIr8','hgzSzha','fmkDWOKWWQddK2OhtvJdLJxdIhLN','vCkIcSkWtmoVW5ZdRa','A8oHahxcJamqAG','nSkpWQqLWQC','Ar7dIHeHWRhcV2BdLmkWW5HpW4lcJq','W4XQrYZdUG','8yUlRmof','W6GMWQ4zdNS','zxxdNCkX','WOlLV5pLP7JVV6ZMMPlNG67LHzlMNOhLKOmJWQu','W4NcVmol','WRvxE2O','W5noEdC','vqxdPaTLW57dPrC','nsRcMcVcRmolW7ZcIW','WRBdGmoe','x8kMbSk9sSoTW5ddTI7dSxRdQ8kOWQmf','W4qpW6KnW4rD','WPldJJue','WRNcNSkDiSkO','iGBcNGhcGq','smogkhlcKq','ACoTa3q','WOfbFc7dNmkRWO0','WQtdMdRdRs4cWOJcPCosmW','W4pcMvNcK8kR','WPbWEftdQa','W73dO2ZdJSoJ','W6OnFxxcJCkBymo2WRPWWOTT','W7VcRWRdT8k9','WRfXlSoTWOu','W4CiWQOxkq','5yEMWPBLJ40','bSkMa0Xm','WRHbtGxdTa','WPxdPsldTrC','g8kQjMTTlgXMWO9wWPBcNmoYBSkx','vqVdSGzm','W4xcSX7dT8k+','dSomqCkzFG','g8oVW43dVZrfWPvqFmkM','oSo7q2RdUfHvWRldUG','oSowW7znxsC','WOmcW6VcQsK','umk3bSkmwSkJWPBcRYBdTwRcJmkRW6SaWPVdUCoAkfNcSmowW7DG','W7mAb8k6','W6ervCkqW53cG8k3uwlcRJLhW4K','yM4IW6fv','W44dfW3cLtK0WOKHe8ok','rSkXWReLWO0','W5TdWPWU','W6ZcNmkMC8kF','WPxdPmoPW7m','W5DBCdhdI8omWRb3cq','WPeRW71LsmokWPNcK8kyWQa','AEITUoAXS+wKSUI2SX/INQddToAvO+wsLEw6P+AxNoAoMW','zapdHcCw','nW/cSJtcGSkdWOJdGmkiAq','gmkMiuLHlwTK','vahdOXS','oCkCWPS+','WPWNW64','WReNW4ye','W4eaW6CGW6O','W55bWPe0W6xdKCkndSoXWPO','kZVcGJ/cUSkdWPRdGbmoWPpcJCoHWRHnWPSXWRVcQt5IW4ddVCkcwHVdSLldICkOmfFdK8kyuapcMLbwoConBCkcW74SiZNcKqSBW6LwWPXkWOSmk8o1W557abtdRrz1WONcGdzZW5HFWOdcKa','CMxdMSkytCkyuH0CW4VcIZ7dGmoPWRe','AtFdGYXu','WPqWWRZcQSo0','WPLoWRvyWPqCW7hdVSk1WPdcGcrG','W5WFW6OlW4rDWO3dSq','WPODzX3cIG','W6mMWRq/gwDyWOn6oSkGW5FdHCk1W68','krRcHY4','WPDeBttdLmkRWO0','zSkWWPqqWOO','W7JcOqJdVSkq','5RsS5yM15Bsx57Qo5P6FtW','W7dcUCkd','W69UWOeuW7C','WPJdGgWgW4tcT8o/','WOTtCbNcKmklWQxdISkTsxP7EWBdGdC','h1VdNe10','W4FcVuu','WRVdKYldQcCzWQxcGa','WOPaqL7dNG','BHFdQCoAW5HE','W4NdTMddTq','ESo+b2hdHve9A8kLjNBcPKpdPwlcGX8','WPhdIJuKW4JcSCoLW5e5W4JcMvldPM3dQG','oujrANO','WRaObmkdyW','k8k+WRFcJIm','WQzcdCofWO/dH8ogvW','W65oWReLW54','e1dcUG','EwxdGmk+wSke','WOO9CsJcIW','rCoZk1ZcHq'];}())];}())];}());l1liIl11=function(){return iIlIIli1;};return l1liIl11();};const printEnvValue=process[III11il(0x246,'1I%X')][III11il(0x304,'h4MS')]===III11il(0x1fb,'*cLG');let TokensMap=null;const CacheFile=__dirname+III11il(0x1a6,'h4MS');!(async()=>{const Il11III1=III11il,lIilIIii={'kzcOK':function(i1iii1I1){return i1iii1I1();}};await lIilIIii[Il11III1(0x299,'g6cz')](Main);})()[III11il(0x20a,'L%D(')](Ill11llI=>$[III11il(0x2dc,'jTXw')](Ill11llI))[III11il(0x1f0,'Q!Z@')](()=>$[III11il(0x296,'NzcB')]());async function Main(){const IIlIl1i1=III11il,Il1ilI={'NKFSM':IIlIl1i1(0x22a,'iEXb'),'aIPxZ':function(ili1I1l,lIIlI){return ili1I1l-lIIlI;},'sfQdw':function(IiI1iIi,li1IIi1I){return IiI1iIi!==li1IIi1I;},'oWvQH':IIlIl1i1(0x2a1,'$fwk'),'qmqMJ':function(Ii1IIIl,lIiIii1){return Ii1IIIl>lIiIii1;},'jvBYl':function(I1l111i1,I1Il1I1i){return I1l111i1<=I1Il1I1i;},'CpKcQ':IIlIl1i1(0x250,'Lqw['),'xDdMS':IIlIl1i1(0x337,'YPQb'),'kOWLp':IIlIl1i1(0x2e4,'kEPg'),'KqTng':IIlIl1i1(0x1e1,'vzsr'),'XrUMc':function(lllIlIlI,IlIli1lI,llIIIliI,i1iIiiI1){return lllIlIlI(IlIli1lI,llIIIliI,i1iIiiI1);},'eSuEA':IIlIl1i1(0x29b,'z&gK'),'aDLdo':IIlIl1i1(0x1ed,'3Xc1'),'FAUOJ':IIlIl1i1(0x207,'RHiB'),'eFnsn':function(IiilI1il,i1ll1Iil){return IiilI1il<i1ll1Iil;},'CKjiS':IIlIl1i1(0x1f9,'L$[A'),'JkGeI':function(I1Ill11l,lliIiI11){return I1Ill11l(lliIiI11);},'vyDya':IIlIl1i1(0x25a,'3Xc1'),'fOAAW':function(iI1iii1,il1Iilll){return iI1iii1===il1Iilll;},'gBObZ':function(iIi1IIiI,Il1iI1ii){return iIi1IIiI===Il1iI1ii;},'EwYTd':IIlIl1i1(0x1d8,'77O$'),'XSnyU':IIlIl1i1(0x2c3,'h4MS'),'GkTZF':IIlIl1i1(0x2ab,'Lqw['),'vsbVG':IIlIl1i1(0x1d4,'vV!u'),'UcUTw':function(l1ii1l1,IlI11Il1){return l1ii1l1/IlI11Il1;},'Hdbrm':IIlIl1i1(0x200,']^!K'),'WdTPB':function(lIIIliI,Iil11l1){return lIIIliI>Iil11l1;},'hAUwK':IIlIl1i1(0x28d,'U[cV'),'jJWlf':IIlIl1i1(0x22c,'98pX'),'UBFcx':function(llii1Ili,illiIlIl){return llii1Ili>illiIlIl;},'WjPbR':function(I1IlIiil,lilillil){return I1IlIiil===lilillil;},'vbJbA':IIlIl1i1(0x2a7,'L%D('),'QljUQ':function(I1li1lI1,IillIi1I){return I1li1lI1-IillIi1I;},'WeOOh':function(iIIlIi1l,ili11iIi){return iIIlIi1l===ili11iIi;},'unvzG':IIlIl1i1(0x324,'qbME'),'olvbd':IIlIl1i1(0x27f,'kmIs'),'YLhZo':IIlIl1i1(0x2cb,'rW1T'),'bQons':function(I1lIlIIi,lilIli11){return I1lIlIIi(lilIli11);},'pZcuE':IIlIl1i1(0x2f7,'1I%X'),'BRTjx':IIlIl1i1(0x2cd,'rW1T'),'QlTxM':IIlIl1i1(0x318,'40&#')};try{if(Il1ilI[IIlIl1i1(0x243,'!Ur@')](Il1ilI[IIlIl1i1(0x2df,'iEXb')],Il1ilI[IIlIl1i1(0x1b2,'F!&S')]))IliiiIIi[IIlIl1i1(0x1df,'vV!u')](IIlIl1i1(0x1ca,'1I%X')+II1i11Il+IIlIl1i1(0x263,'!Ur@')),i1iIiIii[IIlIl1i1(0x310,'!ZFU')](Iili1iIl),ill1ili=![];else{if(Il1ilI[IIlIl1i1(0x2ec,'NzcB')](tokensList[IIlIl1i1(0x2ba,'@zrt')],0x0))tokensList=[...new Set(tokensList[IIlIl1i1(0x1ea,'Q!Z@')](lIIiIl1i=>lIIiIl1i!==''))];if(Il1ilI[IIlIl1i1(0x280,'mD5y')](tokensList[IIlIl1i1(0x1d0,'1I%X')],0x0)){if(Il1ilI[IIlIl1i1(0x242,'Q!Z@')](Il1ilI[IIlIl1i1(0x1cf,'2bz!')],Il1ilI[IIlIl1i1(0x2f4,'3Xc1')])){console[IIlIl1i1(0x309,'iEXb')](Il1ilI[IIlIl1i1(0x1a1,'Lqw[')]);return;}else li1IIIil[IIlIl1i1(0x220,'g6cz')](IIlIl1i1(0x231,'DYrU')+Ii1iI1i);}TokensMap=new Map(tokensList[IIlIl1i1(0x1be,'Q!Z@')]((I1Ill11i,ilI1I11)=>[I1Ill11i,{'index':ilI1I11+0x1,'venderId':'','shopName':'','activityId':'','startTime':'','endTime':'','isValid':!![],'rules':[],'minLevel':null,'maxLevel':null}]));const ii1I1lli=[];console[IIlIl1i1(0x213,'*cLG')](''),$['UA']=common[IIlIl1i1(0x306,'BzoO')](Il1ilI[IIlIl1i1(0x2e7,'fXG%')]),{jsToken:$[IIlIl1i1(0x302,'Lqw[')]}=await Il1ilI[IIlIl1i1(0x215,'vzsr')](jsTk,$['UA'],Il1ilI[IIlIl1i1(0x1f2,'0Qeg')],{'bizId':Il1ilI[IIlIl1i1(0x21c,'jTXw')],'v':Il1ilI[IIlIl1i1(0x1ef,'2r$Z')],'qs':IIlIl1i1(0x284,'kEPg')+tokensList[0x0]});for(const Il11lIil of tokensList){let ll1llIi=!![];$[IIlIl1i1(0x256,'!Ur@')]=Il11lIil;let IIlIlI1=0x0;$[IIlIl1i1(0x203,'7Kmq')]='',$[IIlIl1i1(0x1e6,'g6cz')]=![];const il1iIii1=0xa;while(!$[IIlIl1i1(0x26a,'JZj2')]&&Il1ilI[IIlIl1i1(0x30b,'$fwk')](IIlIlI1,il1iIii1)&&!$[IIlIl1i1(0x1b5,'tOEm')]){if(Il1ilI[IIlIl1i1(0x312,'$fwk')](Il1ilI[IIlIl1i1(0x279,']^!K')],Il1ilI[IIlIl1i1(0x22d,'rW1T')]))lIiiii11[IIlIl1i1(0x2d8,'RHiB')](IIlIl1i1(0x331,'2bz!')+llillI1l[IIlIl1i1(0x2e8,'g6cz')]),illiI11l[IIlIl1i1(0x2c8,'t*e9')]=!![];else{$[IIlIl1i1(0x1ba,'kmIs')]='',await Il1ilI[IIlIl1i1(0x27c,'Lqw[')](sendRequest,Il1ilI[IIlIl1i1(0x1e0,'NzcB')]),await $[IIlIl1i1(0x295,'kmIs')](0x3e8),IIlIlI1++;if(Il1ilI[IIlIl1i1(0x247,'JZj2')](IIlIlI1,il1iIii1)){if(Il1ilI[IIlIl1i1(0x22b,'1I%X')](Il1ilI[IIlIl1i1(0x25d,'3Xc1')],Il1ilI[IIlIl1i1(0x29e,'DYrU')]))console[IIlIl1i1(0x1e7,'z&gK')]($[IIlIl1i1(0x2fa,'YPQb')]||Il1ilI[IIlIl1i1(0x27d,'jTXw')]),$[IIlIl1i1(0x305,'h4MS')]='';else{IiIiil1[IIlIl1i1(0x1ec,'77O$')](Il1ilI[IIlIl1i1(0x2c7,'2r$Z')]);for(const II11i1l of lilI1iIl){ililIi11[IIlIl1i1(0x214,'vzsr')](II11i1l);}}}}}if(!$[IIlIl1i1(0x2d1,'bVCs')])continue;const I111liii=$[IIlIl1i1(0x2b3,'2r$Z')][IIlIl1i1(0x2ae,'jTXw')],ilIiilI1=$[IIlIl1i1(0x29c,'@zrt')]['id'],iIil1l1I=$[IIlIl1i1(0x26a,'JZj2')][IIlIl1i1(0x232,'!ZFU')],lIiliIii=$[IIlIl1i1(0x2a2,']^!K')][IIlIl1i1(0x1b6,'nCD!')]||[],IiiI11I=$[IIlIl1i1(0x1b3,'0Qeg')][IIlIl1i1(0x2bd,'3Xc1')]||[],iiIli1l1=$[IIlIl1i1(0x333,'F!&S')][IIlIl1i1(0x2ca,'fXG%')],iil1iIli=$[IIlIl1i1(0x31e,'*cLG')][IIlIl1i1(0x255,'NzcB')],iliiIiiI=$[IIlIl1i1(0x270,'tOEm')](Il1ilI[IIlIl1i1(0x209,'40&#')],iiIli1l1),IIlIIi1=$[IIlIl1i1(0x1f6,'$fwk')](Il1ilI[IIlIl1i1(0x2c0,'Lqw[')],iil1iIli);let Ii111lI1=![];const IiIiIlIl=[],ii1ii11i=[...IiiI11I,...lIiliIii];for(const I1il1ill of ii1ii11i){const iIllli1=I1il1ill[IIlIl1i1(0x338,'NzcB')],il1111Il=I1il1ill[IIlIl1i1(0x32e,'Q!Z@')]||[],ll1IliI1=[];for(const i11lIll of il1111Il){let lliilIil='';const l11Iill1=i11lIll[IIlIl1i1(0x294,'40&#')],i1I1II1l=i11lIll[IIlIl1i1(0x206,'z&gK')],Iil1IllI=i11lIll[IIlIl1i1(0x26b,'g6cz')],iiiilil=i11lIll[IIlIl1i1(0x245,'iEXb')],IliI1l1l=Il1ilI[IIlIl1i1(0x1c1,'DYrU')](iiiilil,0x5);switch(i1I1II1l){case 0x1:lliilIil=Il1ilI[IIlIl1i1(0x2f0,'1I%X')];break;case 0x4:lliilIil=l11Iill1+'京豆';break;case 0x6:lliilIil=l11Iill1+IIlIl1i1(0x2e9,'JZj2');break;case 0x9:lliilIil=''+i11lIll?.[IIlIl1i1(0x2de,'g6cz')][0x0]?.[IIlIl1i1(0x271,'Lqw[')];break;case 0xa:lliilIil=l11Iill1+IIlIl1i1(0x27a,'rW1T');break;case 0xe:lliilIil=Il1ilI[IIlIl1i1(0x21a,'JZj2')](l11Iill1,0x64)+IIlIl1i1(0x1dd,'L%D(');break;default:lliilIil=IIlIl1i1(0x222,'g6cz')+i1I1II1l+'）';}if(![0x1,0x6][IIlIl1i1(0x301,'$fwk')](i1I1II1l)&&!IliI1l1l)Ii111lI1=!![];ll1IliI1[IIlIl1i1(0x2fd,'Q!Z@')](lliilIil+'（共'+Iil1IllI+'份'+(IliI1l1l?Il1ilI[IIlIl1i1(0x240,'Q!Z@')]:'')+'）');}IiIiIlIl[IIlIl1i1(0x262,'@zrt')]({'days':iIllli1,'prize':ll1IliI1,'havePrize':Ii111lI1});}const ilI1iI=await common[IIlIl1i1(0x1c8,'t*e9')]({'venderId':I111liii});console[IIlIl1i1(0x316,'e!P%')]('【'+Il11lIil+'】\x0a'+(ilI1iI&&IIlIl1i1(0x1e9,'0Qeg')+ilI1iI+'\x0a')+IIlIl1i1(0x335,'tOEm')+iliiIiiI+IIlIl1i1(0x2ed,'JZj2')+IIlIIi1);Il1ilI[IIlIl1i1(0x2a6,'mD5y')](IiIiIlIl[IIlIl1i1(0x1d3,'0Qeg')],0x0)&&console[IIlIl1i1(0x23f,'YPQb')](IiIiIlIl[IIlIl1i1(0x311,'Lqw[')](llii1ii1=>(llii1ii1[IIlIl1i1(0x1ce,'NzcB')]===0x0?IIlIl1i1(0x1a2,'3Xc1'):'连续'+(llii1ii1[IIlIl1i1(0x223,'g6cz')]<0xa?'\x20':'')+llii1ii1[IIlIl1i1(0x287,'F!&S')]+'天')+'：'+llii1ii1[IIlIl1i1(0x202,'YPQb')][IIlIl1i1(0x303,'L%D(')]('，'))[IIlIl1i1(0x2a3,'vV!u')]('\x0a'));console[IIlIl1i1(0x316,'e!P%')]('');const iIilI111=Date[IIlIl1i1(0x217,'!ZFU')]();iiIli1l1&&Il1ilI[IIlIl1i1(0x201,'!ZFU')](iIilI111,iiIli1l1)&&(Il1ilI[IIlIl1i1(0x2b4,'98pX')](Il1ilI[IIlIl1i1(0x1a8,'BzoO')],Il1ilI[IIlIl1i1(0x313,'DYrU')])?l11i1iiI[IIlIl1i1(0x228,'!ZFU')](IiilIiii,lii1lIii):(console[IIlIl1i1(0x297,'2bz!')](IIlIl1i1(0x315,'e!P%')+iliiIiiI+IIlIl1i1(0x1c6,'3Xc1')),ii1I1lli[IIlIl1i1(0x224,'1I%X')](Il11lIil),ll1llIi=![]));if(iil1iIli&&Il1ilI[IIlIl1i1(0x26f,'tOEm')](iIilI111,iil1iIli))console[IIlIl1i1(0x2cc,'mD5y')](IIlIl1i1(0x323,'ZWc)')+IIlIIi1+IIlIl1i1(0x2da,'vV!u')),ii1I1lli[IIlIl1i1(0x265,'L$[A')](Il11lIil),ll1llIi=![];else Il1ilI[IIlIl1i1(0x24c,'jTXw')](iIil1l1I,0x3)&&(console[IIlIl1i1(0x2a8,'U[cV')](Il1ilI[IIlIl1i1(0x1f7,'fXG%')]),ii1I1lli[IIlIl1i1(0x334,']^!K')](Il11lIil),ll1llIi=![]);!Ii111lI1&&(ii1I1lli[IIlIl1i1(0x2ff,'YPQb')](Il11lIil),ll1llIi=![]);const ilil1li1=TokensMap[IIlIl1i1(0x30a,'tOEm')](Il11lIil);ilil1li1[IIlIl1i1(0x226,'!ZFU')]=I111liii,ilil1li1[IIlIl1i1(0x2d6,'nCD!')]=ilI1iI,ilil1li1[IIlIl1i1(0x29a,'h4MS')]=ilIiilI1,ilil1li1[IIlIl1i1(0x28f,'3nuP')]=iiIli1l1,ilil1li1[IIlIl1i1(0x2a4,'Lqw[')]=iil1iIli,ilil1li1[IIlIl1i1(0x30e,'98pX')]=ll1llIi,ilil1li1[IIlIl1i1(0x2af,'vzsr')]=IiIiIlIl,Il1ilI[IIlIl1i1(0x237,'z&gK')](IiIiIlIl[IIlIl1i1(0x2c2,'LzK0')],0x0)&&(ilil1li1[IIlIl1i1(0x2eb,'*cLG')]=IiIiIlIl[0x0][IIlIl1i1(0x1ce,'NzcB')],ilil1li1[IIlIl1i1(0x25b,'JZj2')]=IiIiIlIl[Il1ilI[IIlIl1i1(0x307,'Q!Z@')](IiIiIlIl[IIlIl1i1(0x261,']^!K')],0x1)][IIlIl1i1(0x321,'@zrt')]),TokensMap[IIlIl1i1(0x32a,'Q!Z@')](Il11lIil,ilil1li1);}if(Il1ilI[IIlIl1i1(0x2a5,'L%D(')](ii1I1lli[IIlIl1i1(0x20b,'YPQb')],0x0)){if(Il1ilI[IIlIl1i1(0x281,'nCD!')](Il1ilI[IIlIl1i1(0x1c3,'rW1T')],Il1ilI[IIlIl1i1(0x2d7,'vzsr')])){console[IIlIl1i1(0x1f3,'1I%X')](Il1ilI[IIlIl1i1(0x1f1,'DYrU')]);for(const iIIiiiIi of ii1I1lli){Il1ilI[IIlIl1i1(0x208,'3nuP')](Il1ilI[IIlIl1i1(0x2e3,'2bz!')],Il1ilI[IIlIl1i1(0x229,'DYrU')])?(lI11IIIi[IIlIl1i1(0x1b8,'7Kmq')]=IliilIl[0x0][IIlIl1i1(0x1b1,'YPQb')],iIIll1il[IIlIl1i1(0x1ee,'$fwk')]=I1lllIlI[Il1ilI[IIlIl1i1(0x248,'L$[A')](l11lIii1[IIlIl1i1(0x261,']^!K')],0x1)][IIlIl1i1(0x28c,'h4MS')]):console[IIlIl1i1(0x2cc,'mD5y')](iIIiiiIi);}}else IiIIii1I[IIlIl1i1(0x264,'rW1T')]('❓'+lIi1ii1l+'\x20'+llI1IiI[IIlIl1i1(0x230,']^!K')](ll11l1ll)),lii1lll1[IIlIl1i1(0x1d6,'98pX')]=!![];}const lliilIl=Object[IIlIl1i1(0x23b,'$fwk')](TokensMap),l11ilI=Il1ilI[IIlIl1i1(0x211,'L$[A')](require,'fs');l11ilI[IIlIl1i1(0x2cf,'F!&S')](CacheFile,JSON[IIlIl1i1(0x21b,'Lqw[')](lliilIl)),console[IIlIl1i1(0x213,'*cLG')](Il1ilI[IIlIl1i1(0x1fc,'!ZFU')]);if(printEnvValue){console[IIlIl1i1(0x20f,'nCD!')](Il1ilI[IIlIl1i1(0x1ae,'BzoO')]);let IIii1ili=[];for(const [lIl1lili,llIillI]of TokensMap){Il1ilI[IIlIl1i1(0x2c1,'U[cV')](Il1ilI[IIlIl1i1(0x28b,'L%D(')],Il1ilI[IIlIl1i1(0x2b8,'h4MS')])?llIillI[IIlIl1i1(0x225,'fXG%')]&&llIillI[IIlIl1i1(0x267,'kmIs')]&&IIii1ili[IIlIl1i1(0x20e,'kEPg')](lIl1lili+':'+llIillI[IIlIl1i1(0x293,'ZWc)')]+':'+llIillI[IIlIl1i1(0x25c,'tOEm')]):Iili1i11[IIlIl1i1(0x309,'iEXb')](IIlIl1i1(0x2dd,'rW1T')+l1i11III+IIlIl1i1(0x241,']^!K')+(iIli1ilI[IIlIl1i1(0x21e,'vzsr')]||I11lIIlI));}console[IIlIl1i1(0x32f,'kEPg')](IIii1ili[IIlIl1i1(0x1e3,'98pX')](','));}}}catch(I1llIi1I){console[IIlIl1i1(0x244,'LzK0')](IIlIl1i1(0x339,'bVCs')+I1llIi1I);}}async function handleResponse(IlliliII,lIiI1IlI){const ll11I11l=III11il,iiiIiIIi={'RrKgR':ll11I11l(0x327,'!Ur@'),'iIlOp':ll11I11l(0x27e,'40&#'),'hEVoE':function(illiiIi,I1l1I1iI){return illiiIi===I1l1I1iI;},'ihkkd':ll11I11l(0x1c0,'1I%X'),'TjVYo':function(ll1Iiii1,IIl1iIi1){return ll1Iiii1===IIl1iIi1;},'sKtqI':ll11I11l(0x2bb,'$fwk'),'zZtWU':ll11I11l(0x273,'!Ur@'),'xFqbm':function(iI1lilI1,iIlIlIli){return iI1lilI1!==iIlIlIli;},'zzBSy':ll11I11l(0x21d,'mD5y'),'wxRxU':ll11I11l(0x2d9,'Q!Z@')};try{switch(IlliliII){case iiiIiIIi[ll11I11l(0x1fe,'vV!u')]:if(iiiIiIIi[ll11I11l(0x25f,'3nuP')](lIiI1IlI[ll11I11l(0x2ee,']^!K')],0xc8)&&iiiIiIIi[ll11I11l(0x1a9,'qbME')](lIiI1IlI[ll11I11l(0x322,'1I%X')],!![])&&lIiI1IlI[ll11I11l(0x26c,'2r$Z')])$[ll11I11l(0x31e,'*cLG')]=lIiI1IlI[ll11I11l(0x1d7,'$fwk')];else lIiI1IlI[ll11I11l(0x2d2,'mD5y')]?iiiIiIIi[ll11I11l(0x274,'vzsr')](iiiIiIIi[ll11I11l(0x24e,'L$[A')],iiiIiIIi[ll11I11l(0x31f,'jTXw')])?(console[ll11I11l(0x297,'2bz!')](ll11I11l(0x320,'!Ur@')+lIiI1IlI[ll11I11l(0x236,'Lqw[')]),$[ll11I11l(0x272,'jTXw')]=!![]):(delete l1lIIIiI[ll11I11l(0x30c,'qbME')],delete iIiiI1ii[ll11I11l(0x23d,'BzoO')][iiiIiIIi[ll11I11l(0x219,'z&gK')]]):iiiIiIIi[ll11I11l(0x277,'mD5y')](iiiIiIIi[ll11I11l(0x212,'RHiB')],iiiIiIIi[ll11I11l(0x30d,'@zrt')])?l11IlII1[ll11I11l(0x290,'2bz!')]&&IlliI1I[ll11I11l(0x268,'z&gK')]&&IiilI1i1[ll11I11l(0x314,'JZj2')](lliiIII+':'+ili1l1II[ll11I11l(0x1d9,'rW1T')]+':'+iiIiI1i[ll11I11l(0x1b7,']wZp')]):(console[ll11I11l(0x309,'iEXb')]('❓'+IlliliII+'\x20'+JSON[ll11I11l(0x283,'e!P%')](lIiI1IlI)),$[ll11I11l(0x282,']wZp')]=!![]);break;}}catch(IIli1I1){iiiIiIIi[ll11I11l(0x2f5,'77O$')](iiiIiIIi[ll11I11l(0x2fc,'ZWc)')],iiiIiIIi[ll11I11l(0x1bd,'z&gK')])?console[ll11I11l(0x32f,'kEPg')](ll11I11l(0x1c2,'kEPg')+IlliliII+ll11I11l(0x2c6,'qbME')+(IIli1I1[ll11I11l(0x2f1,'1I%X')]||IIli1I1)):lI1llllI[ll11I11l(0x334,']^!K')](iII1I1Ii+':'+lI1I1l1i[ll11I11l(0x254,'RHiB')]+':'+IIl1liIi[ll11I11l(0x2a0,'g6cz')]);}}async function sendRequest(Ii1illl){const Illli1I1=III11il,IliI11l={'gyQRG':Illli1I1(0x2db,'*cLG'),'BlCNT':Illli1I1(0x24d,'qbME'),'MiIYJ':Illli1I1(0x269,'bVCs'),'FmQVo':Illli1I1(0x1fd,'mD5y'),'NmXuZ':Illli1I1(0x1c7,'L%D('),'KFATP':Illli1I1(0x31b,'nCD!'),'cNXrH':Illli1I1(0x1af,'LzK0'),'BCLbK':function(IIIiIi,Iil1ilii){return IIIiIi(Iil1ilii);},'FtsYx':Illli1I1(0x238,'kmIs'),'IYTDC':Illli1I1(0x286,'JZj2'),'EfvGb':Illli1I1(0x2e6,'JZj2'),'srXwp':function(lllIiIi1,I1ii1111){return lllIiIi1/I1ii1111;},'PLdId':function(ll1I1il1,iIilil1I){return ll1I1il1!==iIilil1I;},'pUtWU':Illli1I1(0x285,'!ZFU'),'PtxZN':Illli1I1(0x258,'!ZFU'),'BfrlP':Illli1I1(0x1c4,'LzK0'),'ICAbE':Illli1I1(0x2b2,'tOEm'),'aspAf':Illli1I1(0x24a,'2bz!'),'RqgSt':Illli1I1(0x1bf,'kmIs'),'RqbjQ':Illli1I1(0x329,'98pX'),'FzExl':Illli1I1(0x2e2,'U[cV'),'ssIPV':Illli1I1(0x1a7,'!Ur@'),'HYheU':Illli1I1(0x1e4,'g6cz'),'NXBMp':Illli1I1(0x2aa,'2r$Z'),'MomLL':Illli1I1(0x253,'1I%X'),'unjvw':function(IliIi11l,iilI1I1I){return IliIi11l===iilI1I1I;},'ohONh':Illli1I1(0x29d,'kmIs'),'jYIOd':Illli1I1(0x2b6,'qbME'),'VTgaO':Illli1I1(0x276,'7Kmq'),'fKivi':function(I1iIiI1l,i111Il1I){return I1iIiI1l<i111Il1I;},'DPqQm':function(iiIi1l1l,i111i){return iiIi1l1l===i111i;},'kuLag':Illli1I1(0x24f,'!Ur@'),'FUdbp':Illli1I1(0x2d0,'rW1T'),'hVKEG':function(iI11Ii11,l1l1i111){return iI11Ii11>l1l1i111;},'IScbS':Illli1I1(0x2bc,'tOEm'),'yjuKP':Illli1I1(0x326,'3nuP'),'oprCb':function(ii11lIlI,ll1iIIl){return ii11lIlI===ll1iIIl;},'VUIwf':Illli1I1(0x278,'1I%X'),'ziQfB':function(I11l1ilI,l1IIlIli,lI1llIl1){return I11l1ilI(l1IIlIli,lI1llIl1);},'aFpJk':function(liiIliI1,illllII){return liiIliI1>=illllII;},'AlXgo':function(il1liI1,iIIiIIli){return il1liI1!==iIIiIIli;}};if($[Illli1I1(0x1de,'nCD!')])return;let llIIIiII='',li111iII=null,liilIili=null,i11l1ll1=IliI11l[Illli1I1(0x2e5,'L$[A')],ilIiI11l={},IIll11I1={};switch(Ii1illl){case IliI11l[Illli1I1(0x1a3,'bVCs')]:IIll11I1={'appId':IliI11l[Illli1I1(0x23e,'3nuP')],'functionId':IliI11l[Illli1I1(0x1e5,'1I%X')],'appid':IliI11l[Illli1I1(0x24b,'LzK0')],'body':{'token':$[Illli1I1(0x257,'BzoO')],'venderId':IliI11l[Illli1I1(0x30f,'e!P%')](parseInt,$[Illli1I1(0x2b7,'1I%X')])||''},'version':IliI11l[Illli1I1(0x31a,'3Xc1')],'ua':$['UA']},ilIiI11l=await H5st[Illli1I1(0x234,'DYrU')](IIll11I1),llIIIiII=IliI11l[Illli1I1(0x1ab,'LzK0')],liilIili=Object[Illli1I1(0x1bc,'!Ur@')]({},ilIiI11l[Illli1I1(0x21f,'NzcB')],{'jsonp':IliI11l[Illli1I1(0x32b,'NzcB')]});break;default:console[Illli1I1(0x251,'JZj2')](Illli1I1(0x1a4,'bVCs')+Ii1illl);return;}const i1iliIi1={'t':Math[Illli1I1(0x31d,'3nuP')](IliI11l[Illli1I1(0x227,'Lqw[')](Date[Illli1I1(0x2c4,'e!P%')](),0x3e8))+Illli1I1(0x2b9,'kmIs'),'loginType':'2','x-api-eid-token':$[Illli1I1(0x1f4,'bVCs')]};li111iII&&Object[Illli1I1(0x2d4,'7Kmq')](li111iII,i1iliIi1);if(liilIili){if(IliI11l[Illli1I1(0x332,'L$[A')](IliI11l[Illli1I1(0x23a,'$fwk')],IliI11l[Illli1I1(0x275,'77O$')]))Object[Illli1I1(0x2f2,'BzoO')](liilIili,i1iliIi1);else{Ii1lliI1[Illli1I1(0x20d,'fXG%')](IliI11l[Illli1I1(0x292,'0Qeg')]);let il1Illll=[];for(const [iIlIiIIi,iilili1]of iIli1i11){iilili1[Illli1I1(0x205,'g6cz')]&&iilili1[Illli1I1(0x226,'!ZFU')]&&il1Illll[Illli1I1(0x1db,'40&#')](iIlIiIIi+':'+iilili1[Illli1I1(0x328,'jTXw')]+':'+iilili1[Illli1I1(0x2d5,'DYrU')]);}ili111ll[Illli1I1(0x220,'g6cz')](il1Illll[Illli1I1(0x298,'Q!Z@')](','));}}const IlIIiiI1={'url':llIIIiII,'method':i11l1ll1,'headers':{'Accept':IliI11l[Illli1I1(0x259,'98pX')],'Accept-Encoding':IliI11l[Illli1I1(0x2bf,'BzoO')],'Accept-Language':IliI11l[Illli1I1(0x26e,'vV!u')],'Connection':IliI11l[Illli1I1(0x221,'kmIs')],'Content-Type':IliI11l[Illli1I1(0x31c,'L%D(')],'Host':IliI11l[Illli1I1(0x1e2,'rW1T')],'Referer':IliI11l[Illli1I1(0x2c9,'40&#')],'Sec-Fetch-Dest':IliI11l[Illli1I1(0x26d,'*cLG')],'Sec-Fetch-Mode':IliI11l[Illli1I1(0x1ac,'iEXb')],'Sec-Fetch-Site':IliI11l[Illli1I1(0x1d1,'DYrU')],'User-Agent':$['UA']},'params':liilIili,'data':li111iII,'timeout':0x7530,'httpsTlsOptions':common[Illli1I1(0x2be,'tOEm')]()};if(IliI11l[Illli1I1(0x317,'ZWc)')](i11l1ll1,IliI11l[Illli1I1(0x2f8,'0Qeg')])){if(IliI11l[Illli1I1(0x2ef,'RHiB')](IliI11l[Illli1I1(0x32c,'7Kmq')],IliI11l[Illli1I1(0x1fa,'U[cV')]))delete IlIIiiI1[Illli1I1(0x2b1,'77O$')],delete IlIIiiI1[Illli1I1(0x1ad,'ZWc)')][IliI11l[Illli1I1(0x22f,'bVCs')]];else{l11i1Ill[Illli1I1(0x2c5,'F!&S')](IliI11l[Illli1I1(0x2f6,'*cLG')]);return;}}const lii1lIi1=0x1;let l1li1Ii=0x0,liii11ii=null,I1ll1Ii1=null;while(IliI11l[Illli1I1(0x2fb,'t*e9')](l1li1Ii,lii1lIi1)){if(IliI11l[Illli1I1(0x1ff,'F!&S')](IliI11l[Illli1I1(0x1b0,'3nuP')],IliI11l[Illli1I1(0x216,'jTXw')]))iIlI1IIi[Illli1I1(0x1e7,'z&gK')](iiiIII1i);else{IliI11l[Illli1I1(0x308,'1I%X')](l1li1Ii,0x0)&&await $[Illli1I1(0x266,'3nuP')](0x7d0);const lI1iIi1=await common[Illli1I1(0x33b,'RHiB')](IlIIiiI1);if(!lI1iIi1[Illli1I1(0x218,'0Qeg')]){if(IliI11l[Illli1I1(0x2a9,'h4MS')](IliI11l[Illli1I1(0x2ac,'RHiB')],IliI11l[Illli1I1(0x330,'fXG%')])){I1ll1Ii1=lI1iIi1[Illli1I1(0x32d,'vzsr')],liii11ii=Illli1I1(0x2ea,'vV!u')+Ii1illl+Illli1I1(0x239,'2r$Z')+lI1iIi1[Illli1I1(0x289,'YPQb')],l1li1Ii++;continue;}else l1Ii1ii[Illli1I1(0x20d,'fXG%')](Illli1I1(0x1aa,'NzcB')+IIili1li+Illli1I1(0x23c,'2bz!')),iiiiIlII[Illli1I1(0x314,'JZj2')](ilI1llIi),iIllIi=![];}if(!lI1iIi1[Illli1I1(0x1f5,'rW1T')]){if(IliI11l[Illli1I1(0x1c9,'$fwk')](IliI11l[Illli1I1(0x2e1,'@zrt')],IliI11l[Illli1I1(0x20c,'98pX')])){liii11ii=Illli1I1(0x260,'DYrU')+Ii1illl+Illli1I1(0x291,'e!P%'),l1li1Ii++;continue;}else IiIIiii1[Illli1I1(0x1f8,'$fwk')](li11Iii[Illli1I1(0x1a5,'fXG%')](i11Iilli=>(i11Iilli[Illli1I1(0x325,'z&gK')]===0x0?Illli1I1(0x1cc,'vzsr'):'连续'+(i11Iilli[Illli1I1(0x28e,'bVCs')]<0xa?'\x20':'')+i11Iilli[Illli1I1(0x2fe,'L$[A')]+'天')+'：'+i11Iilli[Illli1I1(0x2b5,'t*e9')][Illli1I1(0x303,'L%D(')]('，'))[Illli1I1(0x1cd,'z&gK')]('\x0a'));}await IliI11l[Illli1I1(0x27b,'40&#')](handleResponse,Ii1illl,lI1iIi1[Illli1I1(0x1bb,'DYrU')]),ipBlack=![];break;}}IliI11l[Illli1I1(0x249,'DYrU')](l1li1Ii,lii1lIi1)&&($[Illli1I1(0x2b0,'iEXb')]=liii11ii,IliI11l[Illli1I1(0x1d2,'77O$')](I1ll1Ii1,0x193)&&console[Illli1I1(0x309,'iEXb')](liii11ii));}var version_ = 'jsjiami.com.v7';

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
