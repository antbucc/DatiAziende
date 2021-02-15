(this.webpackJsonpDatiAziende=this.webpackJsonpDatiAziende||[]).push([[0],{40:function(e,t,n){},46:function(e,t){},48:function(e,t){},58:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(29),s=n.n(c),o=(n(40),n(10)),l=n(35),d=n(34),i=n(3),m=n(0),b=function(e){var t=e.type,n=e.name;return Object(m.jsx)(i.a,{type:t,name:n,className:"pl-2 rounded py-2 bg-blue-100 text-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-700 border border-blue-600"})},x=function(e){var t=e.arrayHelpers,n=e.text;return Object(m.jsx)("button",{className:"bg-blue-500 rounded-md w-64 mt-3 text-white p-2",type:"button",onClick:function(){return t.push("")},children:n})},u=function(e){var t=e.arrayHelpers,n=e.text,r=e.index;return Object(m.jsx)("button",{className:"bg-red-500 rounded-md ml-1 p-2 text-white",type:"button",onClick:function(){return t.remove(r)},children:n})},j=n(32),p=function(){var e=Object(i.e)().values,t=Object(r.useState)({companies:[],companyUsers:[],employees:[]}),n=Object(d.a)(t,2),a=n[0],c=n[1];Object(r.useEffect)((function(){var t=e.companyUsers,n=Object(l.a)(e,["companyUsers"]);c((function(e){return Object(o.a)(Object(o.a)({},e),{},{companies:[n],companyUsers:t})}))}),[e]);var s=Object(r.createRef)(),b=function(e){var t;s.current&&(null===(t=s.current)||void 0===t||t.open(e))},x=function(e){s.current&&s.current.removeFile()};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j.a,{ref:s,onFileLoad:function(e){console.log("--------------------------- here is your data");for(var t=[],n=1;n<e.length;n++){var r=e[n].data,a={name:r[0],surname:r[1],participationCode:r[2],headquarterCode:r[3]};t.push(a)}c((function(e){return Object(o.a)(Object(o.a)({},e),{},{employees:t})}))},onError:function(e){console.log(e)},noClick:!0,noDrag:!0,config:{},style:{},onRemoveFile:function(e){console.log(e)},children:function(e){var t=e.file;return Object(m.jsxs)("div",{className:"flex flex-col mt-4 border border-gray-500 rounded-md p-2",children:[Object(m.jsx)("button",{type:"button",onClick:b,className:"bg-blue-500 rounded-md w-64 mt-3 text-white p-2 mx-auto cursor-pointer",children:"Browse Employees file (.csv Format)"}),Object(m.jsx)("div",{className:"bg-blue-200 rounded-md w-64 mt-3 text-white p-2 mx-auto cursor-pointer",children:t&&t.name}),Object(m.jsx)("button",{className:"bg-red-500 rounded-md w-64 mt-3 text-white p-2 mx-auto cursor-pointer",type:"button",onClick:x,children:"Remove Employees File"})]})}}),Object(m.jsx)("a",{className:"bg-blue-500 rounded-md w-64 mt-3 text-white p-2 mx-auto",href:"data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(a,null,2))),download:"export.json",children:" Submit"})]})},f=function(){return Object(m.jsx)(i.d,{initialValues:{address:"Piazza del Municipio 2, Ferrara, 44121",campaigns:["ferrara_bike2work"],code:"comunediferrara",contactEmail:"urp@comune.fe.it",contactPhone:"+390532419111",enabledApps:["ferraraplaygo2020"],locations:[{address:"Piazza del Municipio",city:"Ferrara",country:"Italy",id:"main",latitute:44.836158,longitude:11.619019,province:"Ferrara",radius:200,region:"Emilia-Romagna",streetNumber:"2",zip:"44121"}],logo:"https://www.comune.fe.it/pix/logo.png",name:"Comune di Ferrara",web:"https://www.comune.fe.it/",companyUsers:[{companyCode:"comunediferrara",name:"Admin",role:"ROLE_COMPANY_ADMIN",surname:"ComuneDiFerrara",username:"info@test.it",password:"55MFG%ff"}]},onSubmit:function(e){return console.log(JSON.stringify(e,null,2))},children:function(e){var t=e.values;return Object(m.jsxs)(i.c,{className:"flex flex-col text-lg",children:[Object(m.jsxs)("div",{className:"flex flex-col mt-4 border border-gray-500 rounded-md p-2",children:[Object(m.jsx)("label",{htmlFor:"address",className:"font-bold",children:"Address :"}),Object(m.jsx)(b,{type:"text",name:"address"})]}),Object(m.jsxs)("div",{className:"flex flex-col mt-4 border border-gray-500 rounded-md p-2",children:[Object(m.jsx)("label",{htmlFor:"campaigns",className:"font-bold",children:"Campaigns"}),Object(m.jsx)(i.b,{name:"campaigns",render:function(e){return Object(m.jsxs)("div",{className:"flex flex-col mt-1",children:[t.campaigns&&t.campaigns.length>0?t.campaigns.map((function(t,n){return Object(m.jsxs)("div",{className:"mt-4",children:[Object(m.jsx)(b,{type:"text",name:"campaigns.".concat(n)}),Object(m.jsx)(u,{arrayHelpers:e,text:"Remove",index:n})]},n)})):Object(m.jsx)(m.Fragment,{}),Object(m.jsx)(x,{text:"Add a campaign",arrayHelpers:e})]})}})]}),[["code","text"],["contactEmail","email"],["contactPhone","text"]].map((function(e){return Object(m.jsxs)("div",{className:"flex flex-col mt-4 border border-gray-500 rounded-md p-2",children:[Object(m.jsx)("label",{htmlFor:e[0],className:"font-bold",children:e[0]}),Object(m.jsx)(b,{type:e[1],name:e[0]})]},e[0])})),Object(m.jsxs)("div",{className:"flex flex-col mt-4 border border-gray-500 rounded-md p-2",children:[Object(m.jsx)("label",{htmlFor:"enabledApps",className:"font-bold",children:"Enabled Apps"}),Object(m.jsx)(i.b,{name:"enabledApps",render:function(e){return Object(m.jsxs)("div",{className:"flex flex-col mt-1",children:[t.enabledApps&&t.enabledApps.length>0?t.enabledApps.map((function(t,n){return Object(m.jsxs)("div",{className:"mt-4",children:[Object(m.jsx)(b,{type:"text",name:"enabledApps.".concat(n)}),Object(m.jsx)(u,{arrayHelpers:e,text:"Remove",index:n})]},n)})):Object(m.jsx)(m.Fragment,{}),Object(m.jsx)(x,{text:"Add an enabled App",arrayHelpers:e})]})}})]}),Object(m.jsxs)("div",{className:"flex flex-col mt-4 border border-gray-500 rounded-md p-2",children:[Object(m.jsx)("label",{htmlFor:"locations",className:"font-bold",children:"Locations"}),Object(m.jsx)(i.b,{name:"locations",render:function(e){return Object(m.jsxs)("div",{className:"flex flex-col mt-1",children:[t.locations&&t.locations.length>0?t.locations.map((function(t,n){return Object(m.jsxs)("div",{className:"flex flex-col mt-2 border border-gray-500 rounded-md p-2",children:[[["address","text"],["city","text"],["country","text"],["id","text"],["latitute","number"],["longitude","number"],["province","text"],["radius","number"],["region","text"],["streetNumber","text"],["zip","text"]].map((function(e){return Object(m.jsxs)("div",{className:"flex flex-col p-2",children:[Object(m.jsx)("label",{htmlFor:"locations.".concat(n,".").concat(e[0]),children:e[0]}),Object(m.jsx)(b,{type:e[1],name:"locations.".concat(n,".").concat(e[0])})]},e[0])})),Object(m.jsx)("div",{className:"w-50 px-2",children:Object(m.jsx)(u,{arrayHelpers:e,text:"Remove",index:n})})]},n)})):Object(m.jsx)(m.Fragment,{}),Object(m.jsx)(x,{text:"Add a location",arrayHelpers:e})]})}})]}),[["logo","text"],["name","text"],["web","text"]].map((function(e){return Object(m.jsxs)("div",{className:"flex flex-col mt-4 border border-gray-500 rounded-md p-2",children:[Object(m.jsx)("label",{htmlFor:e[0],className:"font-bold",children:e[0]}),Object(m.jsx)(b,{type:e[1],name:e[0]})]},e[0])})),Object(m.jsxs)("div",{className:"flex flex-col mt-4 border border-gray-500 rounded-md p-2",children:[Object(m.jsx)("label",{htmlFor:"companyUsers",className:"font-bold",children:"Company Users"}),Object(m.jsx)(i.b,{name:"companyUsers",render:function(e){return Object(m.jsxs)("div",{className:"flex flex-col mt-1",children:[t.companyUsers&&t.companyUsers.length>0?t.companyUsers.map((function(t,n){return Object(m.jsxs)("div",{className:"flex flex-col mt-2 border border-gray-500 rounded-md p-2",children:[[["companyCode","text","Company Code"],["name","text","Name"],["role","text","Role"],["surname","text","Surname"],["username","text","Username"],["password","text","Password"]].map((function(e){return Object(m.jsxs)("div",{className:"flex flex-col p-2",children:[Object(m.jsx)("label",{htmlFor:"companyUsers.".concat(n,".").concat(e[0]),children:e[2]}),Object(m.jsx)(b,{type:e[1],name:"companyUsers.".concat(n,".").concat(e[0])})]},e[0])})),Object(m.jsx)("div",{className:"w-50 px-2",children:Object(m.jsx)(u,{arrayHelpers:e,text:"Remove",index:n})})]},n)})):Object(m.jsx)(m.Fragment,{}),Object(m.jsx)(x,{text:"Add a Company User",arrayHelpers:e})]})}})]}),Object(m.jsx)(p,{})]})}})};var O=function(){return Object(m.jsxs)("div",{className:"container bg-gray-100 flex flex-col justify-center items-center py-5",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"logo.jpg",alt:"logo",className:"align-center w-56 rounded-full my-5 shadow-lg"})}),Object(m.jsx)("div",{className:"container md:w-1/2 px-2",children:Object(m.jsx)(f,{})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),h()}},[[58,1,2]]]);
//# sourceMappingURL=main.f89a16ee.chunk.js.map