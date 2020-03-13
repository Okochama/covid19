(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{559:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"ja":{"検査陽性者の状況":"検査陽性者の状況","陽性患者数":"陽性患者数","陽性患者の属性":"陽性患者の属性","検査実施数":"検査実施数","新型コロナコールセンター相談件数":"新型コロナコールセンター相談件数","新型コロナ受診相談窓口相談件数":"新型コロナ受診相談窓口相談件数","都営地下鉄の利用者数の推移":"都営地下鉄の利用者数の推移","都庁来庁者数の推移":"都庁来庁者数の推移"},"en":{"検査陽性者の状況":"Details of confirmed cases","陽性患者数":"Number of confirmed cases","陽性患者の属性":"Confirmed patient attributes","検査実施数":"Number of tests conducted","新型コロナコールセンター相談件数":"Number of inquiries to COVID-19 telephone advisory center","新型コロナ受診相談窓口相談件数":"Number of inquiries to combined telephone advisory center","都営地下鉄の利用者数の推移":"The predicted number of Toei subway passengers","都庁来庁者数の推移":"Trend in the number of TMG visitors"},"zh-cn":{"検査陽性者の状況":"确诊案例状况","陽性患者数":"确诊人数","陽性患者の属性":"确诊患者的信息","検査実施数":"送检件数","新型コロナコールセンター相談件数":"新型冠状病毒咨询中心咨询件数","新型コロナ受診相談窓口相談件数":"新冠肺炎就诊咨询窗口的咨询数","都営地下鉄の利用者数の推移":"都营地下铁搭乘人数趋势","都庁来庁者数の推移":"东京都厅来访人数推移"},"zh-tw":{"検査陽性者の状況":"確診案例狀況","陽性患者数":"確診人數","陽性患者の属性":"確診案例概況","検査実施数":"送檢件數","新型コロナコールセンター相談件数":"新型冠狀病毒諮詢中心諮詢件數","新型コロナ受診相談窓口相談件数":"就診窗口諮詢數","都営地下鉄の利用者数の推移":"都營地下鐵搭乘人數走勢","都庁来庁者数の推移":"東京都廳來訪人數走勢"},"ko":{"検査陽性者の状況":"확진자의 현황","陽性患者数":"확진자 수","陽性患者の属性":"확진 사례의 세부 사항","検査実施数":"검사실시수","新型コロナコールセンター相談件数":"코로나 19 콜센터 문의 건수","新型コロナ受診相談窓口相談件数":"코로나19 진찰 상담 창구 상담 건수","都営地下鉄の利用者数の推移":"도에이 지하철 의 예상 승객 수","都庁来庁者数の推移":"도쿄도 청사 방문자 수"},"ja-basic":{"検査陽性者の状況":"びょうきの ひとは いま","陽性患者数":"びょうきの ひとの かず","陽性患者の属性":"びょうきの ひとの じょうほう","検査実施数":"けんさした かず","新型コロナコールセンター相談件数":"コロナウイルス そうだんで でんわが あった かず","新型コロナ受診相談窓口相談件数":"コロナのことで とうきょうと に そうだんした ひとの かず","都営地下鉄の利用者数の推移":"とえいちかてつを つかった ひとの かず","都庁来庁者数の推移":"議事堂（ぎじどう）に 来（き）た 人（ひと）の 合計（ごうけい）"}}'),delete e.options._Ctor}},725:function(e,t,r){"use strict";var o=r(559),n=r.n(o);t.default=n.a},735:function(e,t,r){"use strict";r.r(t);var o=r(467),n=r(565),c=r(566),d=r(567),m=r(574),f=r(568),h=r(569),l=r(573),y=r(572),$=r(570),v=r(571),C={components:{ConfirmedCasesDetailsCard:d.a,ConfirmedCasesNumberCard:m.a,ConfirmedCasesAttributesCard:f.a,TestedNumberCard:h.a,TelephoneAdvisoryReportsNumberCard:l.a,ConsultationDeskReportsNumberCard:y.a,MetroCard:$.a,AgencyCard:v.a},data:function(){var title,e;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),e=o.inspections_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),e=o.patients.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),e=o.patients.date;break;case"number-of-tested":title=this.$t("検査実施数"),e=o.inspections_summary.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),e=o.contacts.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("新型コロナ受診相談窓口相談件数"),e=o.querents.date;break;case"predicted-number-of-toei-subway-passengers":title=this.$t("都営地下鉄の利用者数の推移"),e=n.date;break;case"agency":title=this.$t("都庁来庁者数の推移"),e=c.date}var data={title:title,updatedAt:e};return data},head:function(){var e="https://stopcovid19.metro.tokyo.lg.jp",t=e+"/ogp-"+this.$route.params.card+".png",r=this.updatedAt+" 更新 | 当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、東京都が開設したものです。";return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:e+this.$route.path},{hid:"og:title",property:"og:title",content:this.title+" | 東京都 新型コロナウイルス感染症対策サイト"},{hid:"description",name:"description",content:r},{hid:"og:description",property:"og:description",content:r},{hid:"og:image",property:"og:image",content:t},{hid:"twitter:image",name:"twitter:image",content:t}]}}},k=r(14),w=r(725),component=Object(k.a)(C,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",["details-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?t("tested-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?t("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?t("consultation-desk-reports-number-card"):"predicted-number-of-toei-subway-passengers"==this.$route.params.card?t("metro-card"):"agency"==this.$route.params.card?t("agency-card"):this._e()],1)}),[],!1,null,null,null);"function"==typeof w.default&&Object(w.default)(component);t.default=component.exports}}]);