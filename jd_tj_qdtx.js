/*
活动名称：特价-签到提现
环境变量：jd_tj_qdtx_threads // 控制并发线程数（正整数），默认1，最大3
        jd_tj_qdtx_interval // 自定义运行间隔时长（整数，单位毫秒），默认1000
        jd_tj_qdtx_notify // 是否推送通知（true/false），默认不推送
        jd_tj_qdtx_pinFilter // 账号pin过滤，多个用@进行分割
        jd_tj_qdtx_exchange_mode // 兑换模式，0 红包  1  现金 默认兑换现金

cron:1 1,17 * * *

*/

const $ = new Env('特价-签到提现')
const _0x484e87=_0x4314;function _0x4314(_0x3914be,_0x22b5b0){const _0x2f818b=_0x2f81();return _0x4314=function(_0x43144f,_0x5ad082){_0x43144f=_0x43144f-0x7d;let _0x46f9a2=_0x2f818b[_0x43144f];if(_0x4314['SrQrfQ']===undefined){var _0x218a7a=function(_0x4f188a){const _0x1e1085='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2c824c='',_0x5ab166='';for(let _0x130cf3=0x0,_0x4189f4,_0x407377,_0x4c2355=0x0;_0x407377=_0x4f188a['charAt'](_0x4c2355++);~_0x407377&&(_0x4189f4=_0x130cf3%0x4?_0x4189f4*0x40+_0x407377:_0x407377,_0x130cf3++%0x4)?_0x2c824c+=String['fromCharCode'](0xff&_0x4189f4>>(-0x2*_0x130cf3&0x6)):0x0){_0x407377=_0x1e1085['indexOf'](_0x407377);}for(let _0x5398e4=0x0,_0x327d33=_0x2c824c['length'];_0x5398e4<_0x327d33;_0x5398e4++){_0x5ab166+='%'+('00'+_0x2c824c['charCodeAt'](_0x5398e4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5ab166);};const _0x4403f9=function(_0x172ae3,_0x31e280){let _0x82c36b=[],_0xa318ed=0x0,_0x4195d0,_0x1a26be='';_0x172ae3=_0x218a7a(_0x172ae3);let _0x199f9c;for(_0x199f9c=0x0;_0x199f9c<0x100;_0x199f9c++){_0x82c36b[_0x199f9c]=_0x199f9c;}for(_0x199f9c=0x0;_0x199f9c<0x100;_0x199f9c++){_0xa318ed=(_0xa318ed+_0x82c36b[_0x199f9c]+_0x31e280['charCodeAt'](_0x199f9c%_0x31e280['length']))%0x100,_0x4195d0=_0x82c36b[_0x199f9c],_0x82c36b[_0x199f9c]=_0x82c36b[_0xa318ed],_0x82c36b[_0xa318ed]=_0x4195d0;}_0x199f9c=0x0,_0xa318ed=0x0;for(let _0x545355=0x0;_0x545355<_0x172ae3['length'];_0x545355++){_0x199f9c=(_0x199f9c+0x1)%0x100,_0xa318ed=(_0xa318ed+_0x82c36b[_0x199f9c])%0x100,_0x4195d0=_0x82c36b[_0x199f9c],_0x82c36b[_0x199f9c]=_0x82c36b[_0xa318ed],_0x82c36b[_0xa318ed]=_0x4195d0,_0x1a26be+=String['fromCharCode'](_0x172ae3['charCodeAt'](_0x545355)^_0x82c36b[(_0x82c36b[_0x199f9c]+_0x82c36b[_0xa318ed])%0x100]);}return _0x1a26be;};_0x4314['CugwGh']=_0x4403f9,_0x3914be=arguments,_0x4314['SrQrfQ']=!![];}const _0x4b0a9a=_0x2f818b[0x0],_0x40bd94=_0x43144f+_0x4b0a9a,_0x3b05ab=_0x3914be[_0x40bd94];return!_0x3b05ab?(_0x4314['biCWxS']===undefined&&(_0x4314['biCWxS']=!![]),_0x46f9a2=_0x4314['CugwGh'](_0x46f9a2,_0x5ad082),_0x3914be[_0x40bd94]=_0x46f9a2):_0x46f9a2=_0x3b05ab,_0x46f9a2;},_0x4314(_0x3914be,_0x22b5b0);}function _0x2f81(){const _0x181911=['W5nQnW','562J5yMy6ywn77+Fea','WR5KWQq','qmo/WP4/WPHn','WQfIWQqXWRZcRCogW7pdOmog','WPCUEa','uSo3W4RcHf3dGatcNSkpW74BW4tcPGrrnSk8','4PQVWRxOH5BLRA7KU4lOV6xOOj3PLlpPM77MLPJPLRVORRlNVOZPLB3ORl4','56Yx5yQR6ywc5lQ26lAm5lUq5ywr5O6S772Z5ysK6lsh5lIW5yQI5zgOaG','WRddN1zSW4BcMaqLW63cOYtcKq','WRn7WOCWWRNcQSoTW7BdTCo1r0D5W7VdSvTr','lU+/G+ITT+MgQoAuVEIoQowpVHddPaD9wNK','W6j0WQ8','44oa5O2r56w+44gp6kY+5ysQ6i+15y2IW4hdTG0eW4ZcUG','5lIX5lM657IU5yY/','WOuxACktxKKVW4yGW6K7','rgS1WRtdUJrfCCoDrmoXW4KuW7q','566P5yUk5Awf6lE17765','6yok556H5OYg6yoiBg/cIq','WQ3cU8kJW4S','wmkRW7tdN0X9uCki','WR3cOZRcVubCFa','WO8NWPG','f005WP/dVYpcNtxdH8kgWQL6WQCszGuFkCopWRX7dSokW6RdVSojFq','5y+f6yAN54IQ5Ooe57Qy5PYnumknxZpcJqJcL3SDWQC','tmkgxa','W53XGBkxW7dOVBpOOQBNUzVMNiSv','fWxcKs5cW49SrSo2i8o3rG7dOCksW7dcPmoxl1JcHCk+zNS','vh5mW4tcJhhdV0L+WQnjqXz3WO9WbSo1qG','W5xcUeShWOFdKxZdKXjFrrPubCo6WQXJW63cUW','t8o5WOe','6ls65y2o54Mq5OkL772KWRq','dLD7W5VcPhNcT3/dVSkzWOfp','WQ7dNKnvW7VcGSkGWOW','6lsp5yYl6lY/5RUlfCo3WQK','WQ/cQCkVW40KW4zbva','gMOn','WQ7cU8k5W5q2W5nqvG','WP4VAq','WRZcGv7dKSk/W4BdImoLW5SGW4Ltqu9nkSkqDcy','s8o8WRHqW4jNyINdNGa','W5O7WR/cTa','v05rW4RcLfhdPwvJWRn+uHrXWP4','WOy0C8kWx1qGW70K','DSkRFXSJW40v','c8oEW7pcU8kJWRtcQa','WPqTz8kAEw4cW6eMW6O','566s5yIp6iYU5BYe','xbOVWOpdTYhcIx/dGCkAWRT6','qHOT','WRNcJutdNG','g8oAW67cH8ocWQ7cSCk+','WPuLESoYWR9cW7K5W5tdGHBcQSkLWOBcRSotWOlcGvZcMcJdTmke','W501WQxcS1ik','WR7cLbFcVmowWO7dRCoK','r8oHWRC','WRSzvMvIW4GlW71kamoTyfRdGa','hSokW44ygW','WRdcNWdcLCorWPJdP8oLuSkvWQy','ivtcK37cV8oh','WO5bWPBcQCoxWOZcTXpcQqieWOGWW54uW4NcVtZdUmoxW45immoI','f3uAWPBdL2PCW6ZcMmk5W6RcU1/cLwVcS1BcOmoiWPddQwT3WOX0WPFdK0pcVsqQW5tcQq','hmkGWPKqBYCwWRvbFubpzmkqW57dPSoY','W7tdNmkk','WORcK3XlW79fWOGhra','eSk4W6exW6LyqsxdRGzyrNhcKX7dVW','WQKFsbhdVIldS8kwBGNcH8kWW6q6kq','4P6RzoACQUECKEIVH+AXGMe','WQmTuIBdOGldS8kNvWNcM8kyW6q7iW','tCkDWOXo','xSkDWPfB','dK58','WRfKWQC6','tmkEWP1mta','WORcK3XlW79fWOGlranH','s8kpWPfiqCkEWPWOAmo1zmo5WRHwttrjW7K','W5XaW7nEW6zekchdVmkciu0RD8kX','BW3dRmkPkJei','kmklWQhdGb3cICk0iW','a8kUW7ieW6bSBdldVWK','F8olWOpdHqRcIG','x3LNW5NcKeFdUKrVWQHjrXjKWP53dCo0','WOjuWPBcUa','WQJcHSojWPFcSaOVjmoepxhdN8kjW6Tqm1fEj8kAsY/cPSkCC04','WR7dML5PWPRcMmk5','W447WRNcTfyEfCoJWRr3','sZHxW4FcGZqaWQxdJmoR','i8kUWPPMWQvLb8oM','W7JcOaVdImkznSkswmkgvbNcQ8oGWP7dTq','j1ZcKL7cKa','W5VdSNr+W6fLWOeb','cCkGWOKioZCj','WRz6WRhcJq','vSk+WOPUW64hmLZcKmotW4b3pW','DCksW63dJxxcTZmpWQxcQWS0','xCkiWRq','bmkQWPqU','ecisWRldNtzwrG','ahjYgLLkWO8bWPNcPmo8wr7dNfG','W7BcIxa5WQldVvC','q0a/WRVdTrnmxmoHxCo1','WRhcH0tdNmk9W4C','W7WjWQlcSLuKp8opWRLuySoBW5tcVCoTjq','WRS5uH4','DGZdIdZdOCoqhmo/BX7cLa','FCoAWPldJqJcHSkmkmogWQnYmSkTW4OQhb42ya','tSoIWOy7WO4faHLDxw1uW7iFeGeTWOOBWRDQAg3cJWyQ','euH8e35TWQiRWOJcQq','WQvQWQORWQhcQSoTW7O','fKbOfMn6WPeH','BL/dHCkm','6lsa5y2H5Pss5Psd','8y+zMCkD','r8o1WOyIWOTwwv9qg0jiW78kaaGWWPvy','aLvPvaysW4zTWQeZWRu','tSkWWP4','s8ktWPDdsSk2WPW','d1j8','rSk+WO1K','WQ7cL8oyWOpcKvvTzmoABuldNmkhW7rFowPDBCkvvW','bmkUW6KrW5L2rty','4P6mW5lMNPFOGjRMRQdNOz7LPitNKi3cJa','W7X6WRuId8kuwmkS','E8oCWPldOqZcNCkxm8oUWQnk','w8kDrmoIxfK','6lY95ywq6Aw06AkS5AAv6lAt776c','rNyIWPNdQsHnzSodq8o3','WQWPvtxdVWtdTSk6CZZcJSk9W784','WRFcOZ3cI1njDSorfZX0','5Rss5yMu5yAD5y+mfCo35lME5zEK54MJ5lMRx8omWQWj562s5yMZ5O+p54Yg','W7XJWPKUomkvvmkNW5Kt','WPuLESo2W6TfW6G','xSkjq8ot','5lIx5yQE5yQo6ko75AEI6lsU77YZ','eLvUxG','b8oEW77cGa','mxfo','W7WeWRa','mKZcKK7cV8ox','WQabva','W790WQG3n8k8wmkMW4SyW4m','d8ouW6pcLG','WQdcMX3cPmo3WOpdPCoY','W6OhW6vo','5lQv5PAk5Bsh5yET5O+s6l6H772I6k+v5PIP5AsD5yw+5P6sW4C','5ys45O+55AAI6lAE77YL','WODwWPBcSmosW5/dRfxcRqeYW5yXWPekW4VdVc3dUG','6zEf6k6t77YU5PYF5yYP6yEQ5yMd5A295BQn5QMv5B6dhG','WOmLDmkv','zCksW6RdHW','WPO0ESooWQ0mWRnLW4hdVHBdSmkTW6NcTmohW7RcH0hcHM7dUSkAWOS','W4FIN5GG','DL/dJMNdPW','WRpcTmkPW5mxW45fqa','tCkjxSog','h1TP','b8o+W7BdN21qBCkHcqNcLCkKBcqvwLXrW7HWW7S','W64kW6vzWRa','W5dcVKWn','vg1lW6NcLuZdQLnW','WRpcHSopWO7cRvDPBCov','5AAS6lwd776w','W6qzWQlcPa','c8oEW7pcTSoKWRxcS8kPj8o7WOm','W6e9W7bRW4hdT8k4W5NdKmopEN9y','FmoHxCkaW75g','W6j9WPBdUgv8W6pdSYjyWQP1gq','qSoZWOeO','WQFdOc0Q','lfBcMW','WRSTuXFdVrJdMCkYyGS','fubYcq','8yUBR8ko','W4rXA8kmWRW','CqFdUW','WRZcKvNdKSkUW4e','wbiiWOtdMIBcG3pdOCk3WQjYWQ41waur','4P6hBoIeU+ADMUI9GoIGP+MdMUwlO+s6KoMvS+ISGmoB','oqBcJq','56Yi5yIe5AsR6lsA772y','hfTZuq','meVcLxhcTmoLnSoRwY0','ios6MUwjR+wVLUAiUmkQpq','566+5yUc6ywS5lUQ6lwW5lUv5ywr5O2P776G5ywa6lEq5lMi5yMj5zk4sa','WRCHW5RcHtC7WRFdRIjGWO1SdmkJytddRColxumJW4BdRG','WQ3dVMG','h2SjWPBdI21yW6S','WRhcJu0','hge1WO7dLfzmW7ZcHCkUW5VdVvVcKMhcRWZdOCoq','k8oiW7RdNff8BSkdbI7cT8kNyIeFwG','lCkbW5BcLeFdLSopC8omWPf7nmk3W60','vNi/WQG','cmoAW7pcKG','W6aFWOJcSCoLWPC','uSkTWPb/W5G5peFcSCoF','eCkJW5HbWPXKmmoCgNCbtdGvW7hcOvVdQLDjWOC4','dHtcRtLnW6nU','uCouW6FcJh/dOaFcSSkdW4KAW4JcRtDv','txWX','eq7cQq','WRXUWQy7WQFcPSoTW7ddT8oeBuvZW4tdUu1ZWPPnp8o/','W73ORjxMSAJLKBBLUz3cJW','s8kSWRH3W48oja','m8kUWP1S','W6dcJXurWPhdNs4HW6hcVa','WPmFW5vEW65Al1RdJ8kukhWUACklWOG','W74kWRRcPa','bKbVha','W6hdVNNdVHGclSkrnq5fWRRcUCoK','u2y4WPNdTt4','vCk+WPbXW6Kgme4','6lYq5ysP6AA36Acd5AAH6lwo776h','eadcVG','rCkzWPziw8k/','W74oWRlcPCoEWPZcSCk6WOhcRhVcNSoOlrVcSCoRF8kpW74y','WOlcMCoQ','W750fexcOa','WOy0vmkvq2SfW7WUW7mFWOdcMmoGta','aSoEW6lcL8oeWQlcSCk0hmoTWQC5W4TaWPDIW4CfAc05','rCktWP8','WPBORydMSP/LPldOTOhcOEkCMCka5PE/5zcq5BIL5Pwg5O6D','sSkRWO11W45vCGtcPCokW501n2fQWOpdJmo5hmk5fmoqWPBdMW','xCkDWOTeFmk/WP0ptSo1ASoWWPK','W63cUtldJmkMnmk7q8ktCZ3cRSoOWOpdTq','f1L1sIWj','WR3cV8k+W7mdW55fqeSsW41LWRZcQNH3W5v6tZFcN3Lk','W5i1WQW','WRJcR8kOW50oW490vKCQ','W74jW6HF','WQSDs0feW44EW6e','qmo5WRnrWRKRebxdMGzczLG','W6RcPtZdISkplSkL','j8o/BMf0','vYtdR0K','A8o0smkv','WRatrq','W73cSsVdIa','5yAb5OYM5OQ+5yMwEUMgNUMHJ8kNDG','WRutuq','ahxcQr7cIWextCktdf9U','WRWRW4K','W63cJJ4OWP7dSsWKW7lcOthcRY9kW6BdU2G','cCkGWOKmBZayWQnbDffyACkWW4ddSCobo8o2g8oaWQ3dRa','WOddTqG','WPeVymoDWOPxW68H','W5JcTfG','WOdcGSoPnSkuW6ldJSoyxSklW6G','tCogvCktW6v8p8kkeYZcPwdcGWRcSIu','amo0W6a','WP5AW6JdPSk2Ef0','y8o6wW','W7usW7HkWQBdIIhdNSk0k8olwXxcQSonW4tdGHRcUvPQWP3cK8kO','W7edW6jDWQhcMa','y8oWuSktW79D','xwLmW53cIslcPa96WQb/hrC4WPfYr8oKqfdcVSkEBSou','W5ZcVL4kWPtdINS','5yEA5O255QU95B2zyCoDBG','W6VcHqy','lfJdU8kHobO8W7y','WQdcPZVcR0XixCoclI4','bxelWO7dI3O','WOyNDmkDrMK1W6CQW7CbWOFcLCoZxaqvhNq','WO/cPwfHW7r/WPuItaS','W6tcHqu5','WOdcTgfCW6i2W4LSsH5TW67cSCoKodyojIWxW7f9WOJcGG','mmkQWP1fW4rVaW','WRBcV8kKW5GwW4i','BHBcIx/cUmoFjmkOFc3cR8kDW6XUkG8Ksb4DBZiB','W5RcTeG','5lMK55oS5B2H5ysVW47cJGy','bCouW7q','W781W6vDWRVcUwdcTCk6','W5WjWQlcSLuKp8ogWQ8','q8k8WO1SW4SgkulcOCojW6TRnI50WOhcJCoOhG','dmo1W6u','WO9BWPhcVmowW4i','qCoZWOyhWPjyrfHMhhXmW6yy','W7WKWQK7WRBcRmoVW7tdQmoe','W6NcIWW5','AXJcMSouW780cW','WPzuWPdcUmojW4xdNf3cVbm','WR/cKupdNmkNW6BdKSoCW4W6W6XgAvXyo8kPsq','wSo3WROKBsiXWRi','WRtcK8ooWOZcKf91ECopBvtdGCke','oqBcMCoiW5uu','5ysS5OYd5OUE5yUfboMfGEMIGbJcOG','F+IUMoAYT+wMJEI2LuBIN7ic','xGC4WQFdTZVcI2NdOCkVWQjRWQ4GsqySiSozWOvwl8ol','WOVcISoGpmkzWRZcUmkDiSoG','qmktWOS','c8k9WP4OBYOAWRvHquHj','rCk6WPH3','W75FW45EW6jykfJdICkioNW','WPmWwSoFWQ1DW5aJW5pdUG','bZldTeddSgyf','wa8JWP7dUdS','qgmLWPJdTa5dz8oL','gLT9','ASoTvCka','W6BcScfSWQS','amkKWPaL','gCo6W6hdMLjgrmkVcW0','WRVcLrm','W4tdGSkZrmokW6u','WQhcGSoPWOBcSfTmySoFFa','W6NdQSo4WOLwWP9xDwWhW4HL','uxiKWR3dTILMDCo6uq','hmooW7tcMW'];_0x2f81=function(){return _0x181911;};return _0x2f81();}(function(_0x3aac50,_0x110763){const _0x7acaf8=_0x4314,_0x42055d=_0x3aac50();while(!![]){try{const _0x448d90=parseInt(_0x7acaf8(0x162,'Z1Ox'))/0x1*(-parseInt(_0x7acaf8(0x12c,'vw[f'))/0x2)+parseInt(_0x7acaf8(0x143,'8AUZ'))/0x3+parseInt(_0x7acaf8(0x194,'KilV'))/0x4*(-parseInt(_0x7acaf8(0x1a2,'lh!I'))/0x5)+-parseInt(_0x7acaf8(0x120,'fhV1'))/0x6*(parseInt(_0x7acaf8(0xf5,'vw[f'))/0x7)+-parseInt(_0x7acaf8(0xec,'Z1Ox'))/0x8+-parseInt(_0x7acaf8(0xac,'tvwx'))/0x9*(parseInt(_0x7acaf8(0x108,'gUCH'))/0xa)+-parseInt(_0x7acaf8(0x19b,'8yxz'))/0xb*(-parseInt(_0x7acaf8(0xd6,'k2aP'))/0xc);if(_0x448d90===_0x110763)break;else _0x42055d['push'](_0x42055d['shift']());}catch(_0x4435b){_0x42055d['push'](_0x42055d['shift']());}}}(_0x2f81,0x84ad1));const jdCookie=require(_0x484e87(0x11b,'5%3w')),notify=require(_0x484e87(0x151,'kg3y')),common=require(_0x484e87(0x111,'lh!I')),{H5st}=require(_0x484e87(0xd3,'Z9di'));let linkId=_0x484e87(0xc9,'eohi'),taskThreads=process['env'][_0x484e87(0x18b,'Q&nU')]||'1';const runInterval=process['env'][_0x484e87(0xc2,'NXP7')]||_0x484e87(0x1a8,'oUD$'),isNotify=(process[_0x484e87(0x13f,'fHe^')][_0x484e87(0xf7,'8AUZ')]||process['env']['jd_tj_qdtx_Notify'])===_0x484e87(0xa8,'@PEQ'),pinFilter=(process[_0x484e87(0x118,'dwre')]['jd_tj_qdtx_pinFilter']||'')['split']('@'),Exchange_mode=process[_0x484e87(0x153,'yUV[')][_0x484e87(0x155,'3Ckf')]||'1',maxThreads=0x3;let cookiesArr=Object[_0x484e87(0x8d,'1)Am')](jdCookie)[_0x484e87(0xda,'3Ckf')](_0x4403f9=>jdCookie[_0x4403f9])[_0x484e87(0x122,'oUD$')](_0x4f188a=>_0x4f188a);!cookiesArr[0x0]&&($[_0x484e87(0x1af,'UuFZ')]($[_0x484e87(0xd4,'@PEQ')],_0x484e87(0x147,'2spY')),process[_0x484e87(0x130,'Brn!')](0x1));!(async()=>{const _0x547583=_0x484e87;notify[_0x547583(0x16f,'t@Q2')]({'title':$[_0x547583(0x132,'fhV1')]}),await Main(),isNotify&&notify[_0x547583(0xd2,'8AUZ')]()&&await notify[_0x547583(0x139,'1)Am')]();})()['catch'](_0x1e1085=>$['logErr'](_0x1e1085))['finally'](()=>$[_0x484e87(0x16c,'6(6^')]());async function Main(){const _0x373454=_0x484e87;try{try{const _0x5ab166=parseInt(taskThreads);_0x5ab166>0x0&&_0x5ab166!==0x1&&(taskThreads=_0x5ab166);}catch{taskThreads=0x1;}taskThreads=Math['min'](taskThreads,maxThreads),$[_0x373454(0xd8,'fxPN')]=null;if(runInterval)try{const _0x130cf3=parseInt(runInterval);_0x130cf3>=0x0&&($[_0x373454(0x1a6,'5%3w')]=_0x130cf3);}catch{console[_0x373454(0x160,'fHe^')](_0x373454(0x141,'Brn!'));}console['log'](_0x373454(0x190,'NXP7')+$[_0x373454(0x11c,'8AUZ')]+'变量开启状态=========='),console['log'](_0x373454(0x87,'kjaJ')),console[_0x373454(0xe8,'t@Q2')](_0x373454(0x106,'Jl@o')+(Exchange_mode==='1'?'现金':'红包')+']'),console['log'](_0x373454(0x113,'8AUZ')+common[_0x373454(0x172,'Tg^s')]()+']'),console[_0x373454(0x8f,'@PEQ')](_0x373454(0x14c,'tvwx')+(isNotify?'开启':'关闭')+']'),console[_0x373454(0xaf,'lh!I')](_0x373454(0x15c,'kjaJ')+pinFilter[_0x373454(0xba,'b%oi')](',\x20')+']'),console[_0x373454(0xcd,'3Ckf')](_0x373454(0x126,'O0)r')+$['name']+_0x373454(0x152,'gUCH')),console[_0x373454(0xaf,'lh!I')](''),$[_0x373454(0x7d,'Dt01')]=[],await common[_0x373454(0xfa,'fHe^')](taskThreads,cookiesArr,taskFnc),$[_0x373454(0x17e,'j3mj')]=![],$['runEnd']=![];$['needRemoveCookieIndex']['length']>0x0&&(cookiesArr=cookiesArr[_0x373454(0x13d,'qmmN')]((_0x4189f4,_0x407377)=>!$[_0x373454(0xe0,'1)Am')][_0x373454(0x9f,'7pCS')](_0x407377+0x1)),$[_0x373454(0xce,'5%3w')]=[]);const _0x2c824c=notify[_0x373454(0x10c,'KilV')]();_0x2c824c&&console[_0x373454(0xc1,'6(6^')](_0x373454(0x154,'xY@g')+_0x2c824c[_0x373454(0x187,'gUCH')](/：/g,_0x373454(0x9d,'^@VC')));}catch(_0x4c2355){console[_0x373454(0x100,'Brn!')](_0x373454(0xb7,'j3mj')+_0x4c2355);}}async function taskFnc(_0x5398e4,_0x327d33){const _0x2cd1db=_0x484e87;if($[_0x2cd1db(0xd7,'8yxz')])return{'runEnd':!![]};const _0x172ae3=decodeURIComponent(common[_0x2cd1db(0x85,'j3mj')](_0x5398e4,_0x2cd1db(0xc7,'@PEQ')));function _0x31e280(_0x18f2ea,_0x591b47){const _0x251d37=_0x2cd1db;if(_0x18f2ea[_0x251d37(0x19f,'6(6^')]<=0x4)return _0x18f2ea;else{const _0x5bff0a=_0x18f2ea[_0x251d37(0xa3,'L#8a')](0x0,0x2),_0x67e1ea=_0x18f2ea['slice'](-0x2),_0x2d2cb7=Math['max'](_0x591b47-_0x5bff0a[_0x251d37(0xdb,'kjaJ')]-_0x67e1ea[_0x251d37(0x103,'Brn!')],0x0),_0x1e09ec='*'['repeat'](_0x2d2cb7);return _0x5bff0a+_0x1e09ec+_0x67e1ea;}}const _0x82c36b=decodeURIComponent(_0x172ae3),_0xa318ed=_0x31e280(_0x82c36b,0x6),_0x4195d0='【账号'+_0x327d33+'】'+_0xa318ed+'：',_0x1a26be=notify[_0x2cd1db(0x18a,'UkJx')](_0x327d33,_0x172ae3);if(pinFilter[_0x2cd1db(0x110,'7pCS')]>0x0&&(pinFilter[_0x2cd1db(0x170,'xY@g')](_0x172ae3)||pinFilter[_0x2cd1db(0xc0,'NXP7')](encodeURIComponent(_0x172ae3)))){_0x1a26be['fix']('已设置跳过运行当前账号'),console[_0x2cd1db(0x13c,'5%3w')](_0x1a26be['getInlineContent']()),$[_0x2cd1db(0xdc,'@PEQ')]['push'](_0x327d33);return;}const _0x199f9c=await common[_0x2cd1db(0x11a,'qmmN')](_0x5398e4);if(!_0x199f9c&&typeof _0x199f9c===_0x2cd1db(0x1ae,'kjaJ')){console[_0x2cd1db(0x134,'xY@g')](_0x4195d0+_0x2cd1db(0x1a9,'qmmN')),_0x1a26be[_0x2cd1db(0xb8,'oUD$')]('账号无效'),$[_0x2cd1db(0xa2,'dwre')][_0x2cd1db(0x1a1,'j3mj')](_0x327d33);return;}const _0x545355=common[_0x2cd1db(0x193,'lh!I')](_0x172ae3);let _0x31adfb=![],_0x326482,_0x1c472c,_0xde9daf,_0x898e5e,_0x1de6d6,_0x16b7c3,_0x258206,_0xb1d2c3;_0x326482='',await _0x1ffb64(_0x2cd1db(0x19e,'8yxz')),await $['wait'](parseInt($['waitTime']*0x1+0x1f4,0xa));if($[_0x2cd1db(0x135,'O0)r')]||_0x31adfb)return;if(_0x326482){let _0x5e8e3d=_0x326482[_0x2cd1db(0x1a5,'UuFZ')],_0x2a9f68=_0x326482[_0x2cd1db(0xe9,'7pCS')],_0x1a371f=_0x326482[_0x2cd1db(0x13e,'5%3w')],_0x2fb1f8=_0x326482[_0x2cd1db(0x15d,'7pCS')];if(_0x2fb1f8!==0x2){console['log'](_0x4195d0+_0x2cd1db(0x13b,'gUCH')+_0x5e8e3d+_0x2cd1db(0x150,'5%3w')+(_0x2a9f68||'不可兑换')+']现金或红包');_0x1a371f!==0x1&&await _0x1ffb64(_0x2cd1db(0x116,'t@Q2'));await _0x1ffb64(_0x2cd1db(0x12b,'fHe^'));if(_0x1de6d6&&Array[_0x2cd1db(0xd0,'fxPN')](_0x1de6d6))for(let _0x2702ed=0x0;_0x2702ed<_0x1de6d6['length'];_0x2702ed++){_0x1c472c=_0x1de6d6[_0x2702ed],_0xde9daf=_0x1c472c[_0x2cd1db(0x121,'Dt01')];const _0x3cd8d4=_0x1c472c[_0x2cd1db(0x198,'eT#2')],_0x5a2ea3=_0x1c472c[_0x2cd1db(0x197,'fxPN')],_0x49d246=_0x1c472c['taskLimitTimes'],_0x4b8301=_0x1c472c[_0x2cd1db(0x1ac,'b%oi')],_0x41553a=_0x1c472c[_0x2cd1db(0xe5,'C^x7')],_0x4dfbf2=_0x1c472c[_0x2cd1db(0x15f,'7pCS')];if(!_0x3cd8d4&&_0x4dfbf2['includes'](_0x2cd1db(0x19d,'OnaC'))){if(!_0x41553a)for(let _0x58fcee=_0x4b8301;_0x58fcee<_0x49d246;_0x58fcee++){await _0x1ffb64(_0x2cd1db(0xa5,'Q&nU')),await $[_0x2cd1db(0xae,'2spY')](parseInt($[_0x2cd1db(0xeb,'Tg^s')]*0x1+0x5dc,0xa)),await _0x1ffb64('apTaskDrawAward'),await $[_0x2cd1db(0xc5,'8yxz')](parseInt($[_0x2cd1db(0x94,'xY@g')]*0x1+0x5dc,0xa));}else for(let _0x5e736b=_0x4b8301;_0x5e736b<_0x49d246;_0x5e736b++){await _0x1ffb64(_0x2cd1db(0x186,'Z9di')),await $['wait'](_0x41553a*0x3e8+0x5dc,0xa),await _0x1ffb64(_0x2cd1db(0x140,'Se!l')),await $[_0x2cd1db(0x95,'L#8a')](parseInt($['waitTime']*0x1+0x5dc,0xa)),await _0x1ffb64(_0x2cd1db(0xdf,'^@VC')),await $[_0x2cd1db(0x14d,'7pCS')](parseInt($[_0x2cd1db(0x7e,'Z1Ox')]*0x1+0x5dc,0xa));}}if(_0x31adfb)break;}_0x16b7c3='',await _0x1ffb64(_0x2cd1db(0xc3,'dwre')),await $['wait'](parseInt($[_0x2cd1db(0x15b,'Uy(f')]*0x1+0x5dc,0xa));if(_0x16b7c3){let _0xa1780d=_0x16b7c3[_0x2cd1db(0x92,'Jl@o')],_0x494447=_0x16b7c3[_0x2cd1db(0x88,'Jl@o')]||[],_0x4acd3d=_0x16b7c3[_0x2cd1db(0x178,'fhV1')]||[],_0x3906b2=_0x16b7c3[_0x2cd1db(0x14a,'8yxz')],_0x30849d=0x0,_0x2ecdc0=0x0,_0x10fde3,_0x305e9a;if(_0x3906b2!==0x0){console[_0x2cd1db(0xb4,'gUCH')](_0x4195d0+_0x2cd1db(0x96,'oUD$'));return;}switch(Exchange_mode){case'0':for(let _0x4c10b5=0x0;_0x4c10b5<_0x4acd3d['length'];_0x4c10b5++){let _0x282104=_0x4acd3d[_0x4c10b5][_0x2cd1db(0x12d,'kg3y')];_0x282104<=_0xa1780d&&_0x282104>_0x30849d&&(_0x30849d=_0x282104,_0x2ecdc0=_0x4acd3d[_0x4c10b5]['gear'],_0x10fde3=_0x4acd3d[_0x4c10b5][_0x2cd1db(0x128,'fhV1')],_0x305e9a=_0x4acd3d[_0x4c10b5][_0x2cd1db(0x10a,'NXP7')]);}_0x30849d>0x0?(_0x258206=0x2,_0xb1d2c3=_0x2ecdc0,await _0x1ffb64(_0x2cd1db(0x19c,'UuFZ')),await $['wait'](parseInt($['waitTime']*0x1+0x5dc,0xa))):console[_0x2cd1db(0xe1,'kjaJ')](_0x4195d0+_0x2cd1db(0xbd,'Dt01'));break;case'1':for(let _0x178a61=0x0;_0x178a61<_0x494447[_0x2cd1db(0x102,'L#8a')];_0x178a61++){let _0x2a89af=_0x494447[_0x178a61][_0x2cd1db(0xe6,'b%oi')];_0x2a89af<=_0xa1780d&&_0x2a89af>_0x30849d&&(_0x30849d=_0x2a89af,_0x2ecdc0=_0x494447[_0x178a61][_0x2cd1db(0x129,'fxPN')],_0x10fde3=_0x494447[_0x178a61][_0x2cd1db(0x16a,'kg3y')],_0x305e9a=_0x494447[_0x178a61][_0x2cd1db(0xab,'Brn!')]);}_0x30849d>0x0?(_0x258206=0x4,_0xb1d2c3=_0x2ecdc0,await _0x1ffb64(_0x2cd1db(0x164,'Q&nU')),await $[_0x2cd1db(0xb1,'UuFZ')](parseInt($[_0x2cd1db(0x16d,'1)Am')]*0x1+0x5dc,0xa))):console['log'](_0x4195d0+_0x2cd1db(0x142,'dwre'));break;default:console[_0x2cd1db(0xf1,'Tg^s')](''+_0x4195d0+Exchange_mode+_0x2cd1db(0x99,'Tg^s'));}}}else console[_0x2cd1db(0x107,'8AUZ')](_0x4195d0+_0x2cd1db(0x159,'UkJx')+_0x2fb1f8+_0x2cd1db(0x145,'Z1Ox'));}if($[_0x2cd1db(0x82,'yUV[')])return{'runEnd':!![]};await $[_0x2cd1db(0x180,'kjaJ')](parseInt($[_0x2cd1db(0x80,'Jl@o')]*0x1+0x1f4,0xa));async function _0x4e23b3(_0xf60790,_0x5362d6){const _0x2033b4=_0x2cd1db;try{switch(_0xf60790){case _0x2033b4(0x184,'KilV'):_0x5362d6[_0x2033b4(0x93,'1)Am')]==0x0?_0x5362d6[_0x2033b4(0xca,'3Ckf')]?_0x326482=_0x5362d6[_0x2033b4(0xf0,'Brn!')]:(msg=common['getErrorMsg'](_0x5362d6[_0x2033b4(0xd5,'UuFZ')]),console[_0x2033b4(0x1ad,'fxPN')](_0x4195d0+_0x2033b4(0xd9,'j3mj')+msg)):(msg=common[_0x2033b4(0x174,'xY@g')](_0x5362d6),console[_0x2033b4(0xf6,'tvwx')](_0x4195d0+_0x2033b4(0x83,'ce3B')+msg));break;case _0x2033b4(0x17a,'KilV'):if(_0x5362d6[_0x2033b4(0x182,'5%3w')]==0x0){let _0x47f617=_0x4195d0+_0x2033b4(0x169,'VA!S');_0x5362d6[_0x2033b4(0xa0,'yUV[')]['signInCoin']>0x0&&(_0x47f617+='，'+_0x5362d6[_0x2033b4(0xd1,'eohi')][_0x2033b4(0x168,'^@VC')]+'签到金'),_0x5362d6[_0x2033b4(0x17f,'kjaJ')][_0x2033b4(0x185,'kjaJ')]&&_0x5362d6[_0x2033b4(0x18c,'ce3B')]['bsignInPrizeDrawVO'][_0x2033b4(0xbb,'lh!I')]>0x0&&(_0x47f617+='，'+_0x5362d6[_0x2033b4(0x163,'t@Q2')][_0x2033b4(0x11f,'6(6^')][_0x2033b4(0xc8,'fxPN')]+_0x2033b4(0x148,'L#8a')),console[_0x2033b4(0x181,'UuFZ')](_0x47f617);}else msg=common[_0x2033b4(0x86,'k2aP')](_0x5362d6),console[_0x2033b4(0x100,'Brn!')](_0x4195d0+_0x2033b4(0x14b,'xY@g')+msg);break;case _0x2033b4(0xfd,'Brn!'):_0x5362d6[_0x2033b4(0x182,'5%3w')]==0x0?_0x16b7c3=_0x5362d6['data']:(msg=common['getErrorMsg'](_0x5362d6),console[_0x2033b4(0xcc,'8yxz')](_0x4195d0+_0x2033b4(0xb9,'b%oi')+msg));break;case _0x2033b4(0xcb,'Se!l'):_0x5362d6['code']==0x0?(console['log'](_0x4195d0+_0x2033b4(0xf3,'tvwx')+(_0x5362d6[_0x2033b4(0x1b0,'fxPN')][_0x2033b4(0x12d,'kg3y')]||'')+'--'+(_0x5362d6['data'][_0x2033b4(0xa4,'OnaC')]||'')),_0x1a26be[_0x2033b4(0x119,'ce3B')](_0x2033b4(0x123,'3Ckf')+(_0x5362d6[_0x2033b4(0x9a,'^@VC')][_0x2033b4(0x175,'lh!I')]||'')+'--'+(_0x5362d6[_0x2033b4(0xef,'vw[f')][_0x2033b4(0xad,'qmmN')]||''))):(msg=common[_0x2033b4(0xa9,'1)Am')](_0x5362d6),console['log'](_0x4195d0+_0x2033b4(0x97,'dwre')+msg));break;case'apTaskDrawAward':if(_0x5362d6[_0x2033b4(0x10d,'8AUZ')]==0x0){let _0x484599=[];for(let _0x235740 of _0x5362d6[_0x2033b4(0x9b,'eT#2')]||[]){_0x235740&&_0x235740[_0x2033b4(0x17b,'Z1Ox')]&&_0x484599['push'](_0x235740['awardGivenNumber']+'签到金');}_0x484599[_0x2033b4(0x103,'Brn!')]&&console[_0x2033b4(0x15e,'NXP7')](_0x4195d0+'['+_0x1c472c['taskShowTitle']+_0x2033b4(0xbc,'3Ckf')+_0x484599[_0x2033b4(0x19a,'fhV1')](',\x20'));}else msg=common[_0x2033b4(0x81,'UkJx')](_0x5362d6),console['log'](_0x4195d0+'领取失败：'+msg);break;case _0x2033b4(0x136,'Dt01'):_0x5362d6['code']==0x0?_0x1de6d6=_0x5362d6?.[_0x2033b4(0xef,'vw[f')]:(msg=common['getErrorMsg'](_0x5362d6),console[_0x2033b4(0x100,'Brn!')](_0x4195d0+_0x2033b4(0x8b,'VA!S')+msg));break;case _0x2033b4(0x12e,'8yxz'):_0x5362d6[_0x2033b4(0xea,'L#8a')]==0x0?console[_0x2033b4(0xc1,'6(6^')](''+_0x4195d0+_0x1c472c[_0x2033b4(0xe4,'kjaJ')]+'完成'):(msg=common[_0x2033b4(0x84,'8yxz')](_0x5362d6),console['log'](''+_0x4195d0+_0x1c472c['taskShowTitle']+_0x2033b4(0xa7,'L#8a')+msg));break;case _0x2033b4(0x186,'Z9di'):case _0x2033b4(0x144,'5%3w'):break;}}catch(_0x2a2051){console[_0x2033b4(0x12f,'b%oi')](_0x2033b4(0x7f,'Dt01')+_0xf60790+_0x2033b4(0xcf,'6(6^')+(_0x2a2051[_0x2033b4(0x14f,'k2aP')]||_0x2a2051));}}async function _0x1ffb64(_0x45ec72){const _0x3916b9=_0x2cd1db;if($[_0x3916b9(0x90,'lh!I')])return;let _0x552c5f='',_0x713d8c=null,_0x6a8e8=null,_0x291a24=_0x3916b9(0x196,'ce3B'),_0x26788f={},_0x235d8c={};switch(_0x45ec72){case _0x3916b9(0x149,'^@VC'):_0x235d8c={'appId':_0x3916b9(0x173,'kjaJ'),'functionId':_0x45ec72,'appid':_0x3916b9(0x157,'OnaC'),'clientVersion':common[_0x3916b9(0xf8,'fhV1')](),'client':_0x3916b9(0xfe,'dwre'),'body':{'linkId':linkId},'version':_0x3916b9(0x13a,'^@VC'),'ua':_0x545355,'t':!![]},_0x26788f=await H5st['getH5st'](_0x235d8c),_0x552c5f=_0x3916b9(0x9c,'fHe^'),_0x713d8c=_0x26788f[_0x3916b9(0x11e,'ce3B')];break;case _0x3916b9(0x115,'L#8a'):_0x235d8c={'appId':_0x3916b9(0xee,'$$y7'),'functionId':_0x45ec72,'appid':'activities_platform','clientVersion':common['getLatestLiteAppVersion'](),'client':_0x3916b9(0xf4,'Tg^s'),'body':{'linkId':linkId},'version':_0x3916b9(0x16b,'b%oi'),'ua':_0x545355,'t':!![]},_0x26788f=await H5st[_0x3916b9(0x167,'1)Am')](_0x235d8c),_0x552c5f=_0x3916b9(0x101,'L#8a'),_0x713d8c=_0x26788f[_0x3916b9(0x109,'k2aP')];break;case _0x3916b9(0x1a0,'t@Q2'):_0x235d8c={'appId':_0x3916b9(0xb3,'fHe^'),'functionId':_0x45ec72,'appid':_0x3916b9(0x161,'6(6^'),'clientVersion':common['getLatestLiteAppVersion'](),'client':'ios','body':{'linkId':linkId},'version':_0x3916b9(0x179,'Dt01'),'ua':_0x545355,'t':!![]},_0x26788f=await H5st[_0x3916b9(0x10f,'eohi')](_0x235d8c),_0x552c5f='https://api.m.jd.com/api',_0x713d8c=_0x26788f[_0x3916b9(0x138,'8yxz')];break;case _0x3916b9(0x17c,'j3mj'):_0x235d8c={'appId':_0x3916b9(0x131,'2spY'),'functionId':_0x45ec72,'appid':_0x3916b9(0x98,'ce3B'),'clientVersion':common[_0x3916b9(0x16e,'fHe^')](),'client':_0x3916b9(0x158,'qmmN'),'body':{'awardType':_0x258206,'gear':_0xb1d2c3,'linkId':linkId},'version':_0x3916b9(0xf9,'OnaC'),'ua':_0x545355,'t':!![]},_0x26788f=await H5st[_0x3916b9(0x195,'fhV1')](_0x235d8c),_0x552c5f=_0x3916b9(0x104,'Q&nU'),_0x713d8c=_0x26788f[_0x3916b9(0xb0,'j3mj')];break;case'apTaskList':_0x291a24=_0x3916b9(0x91,'^@VC'),_0x552c5f='https://api.m.jd.com/api',_0x6a8e8={'functionId':_0x45ec72,'body':JSON[_0x3916b9(0xa6,'Dt01')]({'linkId':linkId}),'t':Date[_0x3916b9(0x112,'OnaC')](),'appid':_0x3916b9(0x156,'Q&nU'),'client':_0x3916b9(0x114,'1)Am'),'clientVersion':common['getLatestLiteAppVersion']()};break;case _0x3916b9(0x165,'^@VC'):_0x235d8c={'appId':'54ed7','functionId':_0x45ec72,'appid':_0x3916b9(0x1a3,'UkJx'),'clientVersion':common[_0x3916b9(0xbe,'tvwx')](),'client':_0x3916b9(0xa1,'b%oi'),'body':{'taskType':_0x1c472c[_0x3916b9(0x191,'eohi')],'taskId':_0x1c472c['id'],'channel':0x4,'checkVersion':!![],'linkId':linkId,'itemId':_0xde9daf,'taskInsert':_0x898e5e},'version':_0x3916b9(0xbf,'C^x7'),'ua':_0x545355,'t':!![]},_0x26788f=await H5st[_0x3916b9(0x18e,'Uy(f')](_0x235d8c),_0x552c5f=_0x3916b9(0xe3,'fxPN'),_0x713d8c=_0x26788f[_0x3916b9(0x133,'dwre')];break;case'apStartTaskTime':_0x235d8c={'appId':'54ed7','functionId':_0x45ec72,'appid':_0x3916b9(0x117,'fxPN'),'clientVersion':common[_0x3916b9(0x125,'kg3y')](),'client':_0x3916b9(0x127,'kjaJ'),'body':{'taskId':_0x1c472c['id'],'channel':0x4,'linkId':linkId,'itemId':_0xde9daf},'version':_0x3916b9(0x171,'Z1Ox'),'ua':_0x545355,'t':!![]},_0x26788f=await H5st[_0x3916b9(0x166,'$$y7')](_0x235d8c),_0x552c5f=_0x3916b9(0x176,'ce3B'),_0x713d8c=_0x26788f[_0x3916b9(0x18f,'t@Q2')];break;case _0x3916b9(0xb6,'kg3y'):_0x235d8c={'appId':_0x3916b9(0x183,'kjaJ'),'functionId':_0x45ec72,'appid':_0x3916b9(0x1ab,'qmmN'),'clientVersion':common['getLatestLiteAppVersion'](),'client':'ios','body':{'linkId':linkId},'version':_0x3916b9(0xdd,'O0)r'),'ua':_0x545355,'t':!![]},_0x26788f=await H5st[_0x3916b9(0x89,'fHe^')](_0x235d8c),_0x552c5f='https://api.m.jd.com/api',_0x713d8c=_0x26788f['paramsData'];break;case _0x3916b9(0x192,'C^x7'):_0x235d8c={'appId':_0x3916b9(0x9e,'lh!I'),'functionId':_0x45ec72,'appid':_0x3916b9(0x10b,'^@VC'),'clientVersion':common[_0x3916b9(0xe7,'7pCS')](),'client':_0x3916b9(0x146,'Jl@o'),'body':{'taskType':_0x1c472c[_0x3916b9(0x1a7,'UuFZ')],'taskId':_0x1c472c['id'],'channel':0x4,'checkVersion':!![],'cityId':_0x3916b9(0x199,'1)Am'),'provinceId':'4','countyId':_0x3916b9(0xde,'j3mj'),'linkId':linkId},'version':'4.7','ua':_0x545355,'t':!![]},_0x26788f=await H5st['getH5st'](_0x235d8c),_0x552c5f=_0x3916b9(0x10e,'KilV'),_0x713d8c=_0x26788f[_0x3916b9(0x189,'Z1Ox')];break;default:console[_0x3916b9(0xfb,'OnaC')](_0x3916b9(0x17d,'^@VC')+_0x45ec72);return;}const _0x5d10a9={};_0x713d8c&&Object['assign'](_0x713d8c,_0x5d10a9);_0x6a8e8&&Object[_0x3916b9(0xb5,'6(6^')](_0x6a8e8,_0x5d10a9);const _0x2abcf8={'url':_0x552c5f,'method':_0x291a24,'headers':{'origin':_0x3916b9(0x18d,'Dt01'),'Referer':_0x3916b9(0x1a4,'qmmN'),'User-Agent':_0x545355,'Cookie':_0x5398e4,'content-type':'application/x-www-form-urlencoded','accept':_0x3916b9(0x177,'NXP7')},'params':_0x6a8e8,'data':_0x713d8c,'timeout':0x7530};_0x291a24===_0x3916b9(0x8e,'b%oi')&&(delete _0x2abcf8[_0x3916b9(0xf2,'C^x7')],delete _0x2abcf8[_0x3916b9(0x105,'OnaC')][_0x3916b9(0x12a,'Z9di')]);const _0x382efb=0x1;let _0x16ee2e=0x0,_0x50fa68=null;while(_0x16ee2e<_0x382efb){_0x16ee2e>0x0&&await $[_0x3916b9(0x8a,'yUV[')](0x3e8);const _0x5e0ee1=await common[_0x3916b9(0xff,'VA!S')](_0x2abcf8);if(!_0x5e0ee1[_0x3916b9(0xed,'C^x7')]){_0x50fa68=_0x3916b9(0xb2,'tvwx')+_0x45ec72+_0x3916b9(0x124,'oUD$')+_0x5e0ee1['error'],_0x16ee2e++;continue;}if(!_0x5e0ee1[_0x3916b9(0x8c,'b%oi')]){_0x50fa68=_0x3916b9(0x1aa,'Dt01')+_0x45ec72+_0x3916b9(0xe2,'O0)r'),_0x16ee2e++;continue;}await _0x4e23b3(_0x45ec72,_0x5e0ee1[_0x3916b9(0xc6,'1)Am')]);break;}_0x16ee2e>=_0x382efb&&console[_0x3916b9(0xe8,'t@Q2')](_0x50fa68);}}
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
