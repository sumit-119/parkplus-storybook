"use strict";(self.webpackChunkui_v2=self.webpackChunkui_v2||[]).push([[5693],{"./components/Testimonials/Testimonials.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TestimonialsDefault:()=>TestimonialsDefault,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Testimonials_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Typography=__webpack_require__("./components/Typography/index.ts"),RatingTag=__webpack_require__("./components/RatingTag/RatingTag.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Testimonials_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./components/Testimonials/Testimonials.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Testimonials_module.A,options);const Testimonials_Testimonials_module=Testimonials_module.A&&Testimonials_module.A.locals?Testimonials_module.A.locals:void 0,Testimonials=({testimonialsData})=>(0,jsx_runtime.jsxs)("div",{className:Testimonials_Testimonials_module.testimonials_wrapper,children:[(0,jsx_runtime.jsxs)("div",{className:Testimonials_Testimonials_module.header_wrapper,children:[(0,jsx_runtime.jsx)(Typography.o,{variant:"label_2_bold",label:testimonialsData?.title1,color:"brand"}),(0,jsx_runtime.jsx)(Typography.o,{variant:"label_2_bold",label:testimonialsData?.title2})]}),(0,jsx_runtime.jsx)("div",{className:Testimonials_Testimonials_module.box_wrapper,children:testimonialsData?.data?.map((card=>(0,jsx_runtime.jsxs)("div",{className:Testimonials_Testimonials_module.box,children:[(0,jsx_runtime.jsxs)("div",{className:Testimonials_Testimonials_module.header,children:[(0,jsx_runtime.jsx)("img",{src:card?.image,alt:"user_image",className:Testimonials_Testimonials_module.image}),(0,jsx_runtime.jsxs)("div",{className:Testimonials_Testimonials_module.text,children:[(0,jsx_runtime.jsx)(Typography.o,{variant:"label_4_semi_bold",label:card?.name}),(0,jsx_runtime.jsx)(Typography.o,{variant:"label_4_semi_bold",label:card?.place,color:"secondary"})]}),(0,jsx_runtime.jsx)("div",{className:Testimonials_Testimonials_module.rating,children:(0,jsx_runtime.jsx)(RatingTag.e,{rating:card?.rating,size:"m",ratingCount:null})})]}),(0,jsx_runtime.jsxs)("div",{className:Testimonials_Testimonials_module.content_wrapper,children:[(0,jsx_runtime.jsx)(Typography.o,{variant:"label_3_semi_bold",label:card?.heading,className:Testimonials_Testimonials_module.content_heading}),(0,jsx_runtime.jsx)(Typography.o,{variant:"body_4_regular",label:card?.subHeading,color:"secondary"})]})]})))})]});Testimonials.__docgenInfo={description:"",methods:[],displayName:"Testimonials"};const Testimonials_stories={component:Testimonials},TestimonialsDefault={args:{testimonialsData:{title1:"Customer Testimonials",title2:"See what our customers are saying",data:[{image:"https://picsum.photos/id/111/200",name:"John Doe",place:"New York, USA",rating:4.5,heading:"Amazing Experience!",subHeading:"I had a fantastic car-buying experience. The staff was friendly and the process was smooth."},{image:"https://picsum.photos/id/111/200",name:"Jane Smith",place:"Los Angeles, USA",rating:4,heading:"Highly Recommend!",subHeading:"Great service and excellent customer support. I would highly recommend this dealership."},{image:"https://picsum.photos/id/111/200",name:"Mark Wilson",place:"Chicago, USA",rating:5,heading:"Top-notch service",subHeading:"Everything went seamlessly, and I am very satisfied with my new car. Will be back for my next one!"}]}}},__namedExportsOrder=["TestimonialsDefault"];TestimonialsDefault.parameters={...TestimonialsDefault.parameters,docs:{...TestimonialsDefault.parameters?.docs,source:{originalSource:'{\n  args: {\n    testimonialsData: {\n      title1: "Customer Testimonials",\n      title2: "See what our customers are saying",\n      data: [{\n        image: "https://picsum.photos/id/111/200",\n        // Placeholder image URL\n        name: "John Doe",\n        place: "New York, USA",\n        rating: 4.5,\n        heading: "Amazing Experience!",\n        subHeading: "I had a fantastic car-buying experience. The staff was friendly and the process was smooth."\n      }, {\n        image: "https://picsum.photos/id/111/200",\n        name: "Jane Smith",\n        place: "Los Angeles, USA",\n        rating: 4.0,\n        heading: "Highly Recommend!",\n        subHeading: "Great service and excellent customer support. I would highly recommend this dealership."\n      }, {\n        image: "https://picsum.photos/id/111/200",\n        name: "Mark Wilson",\n        place: "Chicago, USA",\n        rating: 5.0,\n        heading: "Top-notch service",\n        subHeading: "Everything went seamlessly, and I am very satisfied with my new car. Will be back for my next one!"\n      }]\n    }\n  }\n}',...TestimonialsDefault.parameters?.docs?.source}}}},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./components/Testimonials/Testimonials.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".K_hiwZh8aXGEaEHfnXAu .rXkhd4jFNZRUTfTR3zGl{margin-bottom:16px}.K_hiwZh8aXGEaEHfnXAu .a3qrkI3Rstih4VDIHgGJ{display:flex;gap:16px;overflow:scroll;padding-bottom:16px}.K_hiwZh8aXGEaEHfnXAu .a3qrkI3Rstih4VDIHgGJ .GsUptqyZdCLIiFsbzhCS{padding:12px;border-radius:12px;box-shadow:0px 4px 12px 0px rgba(15,15,15,.08);min-width:236px}.K_hiwZh8aXGEaEHfnXAu .a3qrkI3Rstih4VDIHgGJ .GsUptqyZdCLIiFsbzhCS .naeZtw0EO4VR2Oo1yehO{display:flex;margin-bottom:16px}.K_hiwZh8aXGEaEHfnXAu .a3qrkI3Rstih4VDIHgGJ .GsUptqyZdCLIiFsbzhCS .naeZtw0EO4VR2Oo1yehO .MwPZqIe2useQWatwTf3L{width:40px;height:40px;border-radius:50%}.K_hiwZh8aXGEaEHfnXAu .a3qrkI3Rstih4VDIHgGJ .GsUptqyZdCLIiFsbzhCS .naeZtw0EO4VR2Oo1yehO .zoGP3tQeoyW2TamXqI5V{margin-left:10px;margin-right:8px}.K_hiwZh8aXGEaEHfnXAu .a3qrkI3Rstih4VDIHgGJ .GsUptqyZdCLIiFsbzhCS .DCuPrLflrjSexlnn_NQP .TgEWTSUFH35jSSGNYRO3{margin-bottom:8px}.K_hiwZh8aXGEaEHfnXAu ::-webkit-scrollbar{display:none}","",{version:3,sources:["webpack://./components/Testimonials/Testimonials.module.scss"],names:[],mappings:"AACE,4CACE,kBAAA,CAEF,4CACE,YAAA,CACA,QAAA,CACA,eAAA,CACA,mBAAA,CACA,kEACE,YAAA,CACA,kBAAA,CACA,8CAAA,CACA,eAAA,CACA,wFACE,YAAA,CACA,kBAAA,CACA,8GACE,UAAA,CACA,WAAA,CACA,iBAAA,CAEF,8GACE,gBAAA,CACA,gBAAA,CAIF,8GACE,iBAAA,CAKR,0CACE,YAAA",sourcesContent:[".testimonials_wrapper {\n  .header_wrapper {\n    margin-bottom: 16px;\n  }\n  .box_wrapper {\n    display: flex;\n    gap: 16px;\n    overflow: scroll;\n    padding-bottom: 16px;\n    .box {\n      padding: 12px;\n      border-radius: 12px;\n      box-shadow: 0px 4px 12px 0px rgba(15, 15, 15, 0.08);\n      min-width: 236px;\n      .header {\n        display: flex;\n        margin-bottom: 16px;\n        .image {\n          width: 40px;\n          height: 40px;\n          border-radius: 50%;\n        }\n        .text {\n          margin-left: 10px;\n          margin-right: 8px;\n        }\n      }\n      .content_wrapper {\n        .content_heading {\n          margin-bottom: 8px;\n        }\n      }\n    }\n  }\n  ::-webkit-scrollbar {\n    display: none;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={testimonials_wrapper:"K_hiwZh8aXGEaEHfnXAu",header_wrapper:"rXkhd4jFNZRUTfTR3zGl",box_wrapper:"a3qrkI3Rstih4VDIHgGJ",box:"GsUptqyZdCLIiFsbzhCS",header:"naeZtw0EO4VR2Oo1yehO",image:"MwPZqIe2useQWatwTf3L",text:"zoGP3tQeoyW2TamXqI5V",content_wrapper:"DCuPrLflrjSexlnn_NQP",content_heading:"TgEWTSUFH35jSSGNYRO3"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);