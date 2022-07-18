"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[1740],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(a),k=r,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2411:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Model Interpretation on Spark",hide_title:!0,sidebar_label:"Model Interpretation on Spark",name:"Model Interpretation on Spark"},p="Model Interpretation on Spark",m={unversionedId:"features/responsible_ai/Model Interpretation on Spark",id:"version-0.9.4/features/responsible_ai/Model Interpretation on Spark",title:"Model Interpretation on Spark",description:"Interpretable Machine Learning",source:"@site/versioned_docs/version-0.9.4/features/responsible_ai/Model Interpretation on Spark.md",sourceDirName:"features/responsible_ai",slug:"/features/responsible_ai/Model Interpretation on Spark",permalink:"/SynapseML/docs/0.9.4/features/responsible_ai/Model Interpretation on Spark",tags:[],version:"0.9.4",frontMatter:{title:"Model Interpretation on Spark",hide_title:!0,sidebar_label:"Model Interpretation on Spark"},sidebar:"version-0.9.4/docs",previous:{title:"Interpretability - Text Explainers",permalink:"/SynapseML/docs/0.9.4/features/responsible_ai/Interpretability - Text Explainers"},next:{title:"About",permalink:"/SynapseML/docs/0.9.4/features/onnx/about"}},d={},u=[{value:"Interpretable Machine Learning",id:"interpretable-machine-learning",level:2},{value:"Why run model interpretation on Spark",id:"why-run-model-interpretation-on-spark",level:2},{value:"Usage",id:"usage",level:2},{value:"Common local explainer params",id:"common-local-explainer-params",level:3},{value:"Common LIME explainer params",id:"common-lime-explainer-params",level:3},{value:"Common SHAP explainer params",id:"common-shap-explainer-params",level:3},{value:"Tabular model explainer params",id:"tabular-model-explainer-params",level:3},{value:"Vector model explainer params",id:"vector-model-explainer-params",level:3},{value:"Image model explainer params",id:"image-model-explainer-params",level:3},{value:"Text model explainer params",id:"text-model-explainer-params",level:3},{value:"<code>TabularLIME</code>",id:"tabularlime",level:3},{value:"<code>TabularSHAP</code>",id:"tabularshap",level:3},{value:"<code>VectorLIME</code>",id:"vectorlime",level:3},{value:"<code>VectorSHAP</code>",id:"vectorshap",level:3},{value:"<code>ImageLIME</code>",id:"imagelime",level:3},{value:"<code>ImageSHAP</code>",id:"imageshap",level:3},{value:"<code>TextLIME</code>",id:"textlime",level:3},{value:"<code>TextSHAP</code>",id:"textshap",level:3},{value:"Result interpretation",id:"result-interpretation",level:2},{value:"LIME explainers",id:"lime-explainers",level:3},{value:"SHAP explainers",id:"shap-explainers",level:3},{value:"Base value",id:"base-value",level:4}],s={toc:u};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"model-interpretation-on-spark"},"Model Interpretation on Spark"),(0,l.kt)("h2",{id:"interpretable-machine-learning"},"Interpretable Machine Learning"),(0,l.kt)("p",null,"Interpretable Machine Learning helps developers, data scientists and business stakeholders in the organization gain a comprehensive understanding of their machine learning models. It can also be used to debug models, explain predictions and enable auditing to meet compliance with regulatory requirements."),(0,l.kt)("h2",{id:"why-run-model-interpretation-on-spark"},"Why run model interpretation on Spark"),(0,l.kt)("p",null,"Model-agnostic interpretation methods can be computationally expensive due to the multiple evaluations needed to compute the explanations. Model interpretation on Spark enables users to interpret a black-box model at massive scales with the Apache Spark\u2122 distributed computing ecosystem. Various components support local interpretation for tabular, vector, image and text classification models, with two popular model-agnostic interpretation methods: ",(0,l.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1602.04938"},"LIME")," and ",(0,l.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1705.07874"},"Kernel SHAP"),"."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Both LIME and Kernel SHAP are local interpretation methods. Local interpretation explains why does the model predict certain outcome for a given observation."),(0,l.kt)("p",null,"Both explainers extends from ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.spark.ml.Transformer"),". After setting up the explainer parameters, simply call the ",(0,l.kt)("inlineCode",{parentName:"p"},"transform")," function on a ",(0,l.kt)("inlineCode",{parentName:"p"},"DataFrame")," of observations to interpret the model behavior on these observations."),(0,l.kt)("p",null,"To see examples of model interpretability on Spark in action, take a look at these sample notebooks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../features/responsible_ai/Interpretability%20-%20Tabular%20SHAP%20explainer"},"Tabular SHAP explainer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../features/responsible_ai/Interpretability%20-%20Image%20Explainers"},"Image explainers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../features/responsible_ai/Interpretability%20-%20Text%20Explainers"},"Text explainers"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Tabular models"),(0,l.kt)("th",{parentName:"tr",align:null},"Vector models"),(0,l.kt)("th",{parentName:"tr",align:null},"Image models"),(0,l.kt)("th",{parentName:"tr",align:null},"Text models"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIME explainers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#tabularlime"},"TabularLIME")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#vectorlime"},"VectorLIME")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#imagelime"},"ImageLIME")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#textlime"},"TextLIME"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kernel SHAP explainers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#tabularshap"},"TabularSHAP")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#vectorshap"},"VectorSHAP")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#imageshap"},"ImageSHAP")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#textshap"},"TextSHAP"))))),(0,l.kt)("h3",{id:"common-local-explainer-params"},"Common local explainer params"),(0,l.kt)("p",null,"All local explainers support the following params:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"targetCol"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},'"probability"'),(0,l.kt)("td",{parentName:"tr",align:null},'The column name of the prediction target to explain (i.e. the response variable).  This is usually set to "prediction" for regression models and "probability" for probabilistic classification models.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"targetClasses"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array[Int]")),(0,l.kt)("td",{parentName:"tr",align:null},"empty array"),(0,l.kt)("td",{parentName:"tr",align:null},"The indices of the classes for multinomial classification models.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"targetClassesCol"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the column that specifies the indices of the classes for multinomial classification models.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outputCol"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the output column for interpretation results.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Transformer")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The model to be explained.")))),(0,l.kt)("h3",{id:"common-lime-explainer-params"},"Common LIME explainer params"),(0,l.kt)("p",null,"All LIME based explainers (",(0,l.kt)("a",{parentName:"p",href:"#tabularlime"},"TabularLIME"),", ",(0,l.kt)("a",{parentName:"p",href:"#vectorlime"},"VectorLIME"),", ",(0,l.kt)("a",{parentName:"p",href:"#imagelime"},"ImageLIME"),", ",(0,l.kt)("a",{parentName:"p",href:"#textlime"},"TextLIME"),") support the following params:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"regularization"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Double")),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Regularization param for the underlying lasso regression.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kernelWidth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Double")),(0,l.kt)("td",{parentName:"tr",align:null},"sqrt(number of features) * 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Kernel width for the exponential kernel.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numSamples"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Int")),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of samples to generate.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metricsCol"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},'"r2"'),(0,l.kt)("td",{parentName:"tr",align:null},"Column name for fitting metrics.")))),(0,l.kt)("h3",{id:"common-shap-explainer-params"},"Common SHAP explainer params"),(0,l.kt)("p",null,"All Kernel SHAP based explainers (",(0,l.kt)("a",{parentName:"p",href:"#tabularshap"},"TabularSHAP"),", ",(0,l.kt)("a",{parentName:"p",href:"#vectorshap"},"VectorSHAP"),", ",(0,l.kt)("a",{parentName:"p",href:"#imageshap"},"ImageSHAP"),", ",(0,l.kt)("a",{parentName:"p",href:"#textshap"},"TextSHAP"),") support the following params:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"infWeight"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Double")),(0,l.kt)("td",{parentName:"tr",align:null},"1E8"),(0,l.kt)("td",{parentName:"tr",align:null},"The double value to represent infinite weight.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numSamples"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Int")),(0,l.kt)("td",{parentName:"tr",align:null},"2 * (number of features) + 2048"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of samples to generate.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metricsCol"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},'"r2"'),(0,l.kt)("td",{parentName:"tr",align:null},"Column name for fitting metrics.")))),(0,l.kt)("h3",{id:"tabular-model-explainer-params"},"Tabular model explainer params"),(0,l.kt)("p",null,"All tabular model explainers (",(0,l.kt)("a",{parentName:"p",href:"#tabularlime"},"TabularLIME"),", ",(0,l.kt)("a",{parentName:"p",href:"#tabularshap"},"TabularSHAP"),") support the following params:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inputCols"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array[String]")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The names of input columns to the black-box model.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backgroundData"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DataFrame")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"A dataframe containing background data. It must contain all the input columns needed by the black-box model.")))),(0,l.kt)("h3",{id:"vector-model-explainer-params"},"Vector model explainer params"),(0,l.kt)("p",null,"All vector model explainers (",(0,l.kt)("a",{parentName:"p",href:"#vectorlime"},"VectorLIME"),", ",(0,l.kt)("a",{parentName:"p",href:"#vectorshap"},"VectorSHAP"),") support the following params:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inputCol"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The names of input vector column to the black-box model.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backgroundData"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DataFrame")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"A dataframe containing background data. It must contain the input vector column needed by the black-box model.")))),(0,l.kt)("h3",{id:"image-model-explainer-params"},"Image model explainer params"),(0,l.kt)("p",null,"All image model explainers (",(0,l.kt)("a",{parentName:"p",href:"#imagelime"},"ImageLIME"),", ",(0,l.kt)("a",{parentName:"p",href:"#imageshap"},"ImageSHAP"),") support the following params:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inputCol"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The names of input image column to the black-box model.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cellSize"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Double")),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"Number that controls the size of the super-pixels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"modifier"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Double")),(0,l.kt)("td",{parentName:"tr",align:null},"130"),(0,l.kt)("td",{parentName:"tr",align:null},"Controls the trade-off spatial and color distance of super-pixels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"superpixelCol"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},'"superpixels"'),(0,l.kt)("td",{parentName:"tr",align:null},"The column holding the super-pixel decompositions.")))),(0,l.kt)("h3",{id:"text-model-explainer-params"},"Text model explainer params"),(0,l.kt)("p",null,"All text model explainers (",(0,l.kt)("a",{parentName:"p",href:"#textlime"},"TextLIME"),", ",(0,l.kt)("a",{parentName:"p",href:"#textshap"},"TextSHAP"),") support the following params:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inputCol"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The names of input text column to the black-box model.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tokensCol"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},'"tokens"'),(0,l.kt)("td",{parentName:"tr",align:null},"The column holding the text tokens.")))),(0,l.kt)("h3",{id:"tabularlime"},(0,l.kt)("inlineCode",{parentName:"h3"},"TabularLIME")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"categoricalFeatures"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array[String]")),(0,l.kt)("td",{parentName:"tr",align:null},"empty array"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of columns that should be treated as categorical variables.")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For categorical features, ",(0,l.kt)("inlineCode",{parentName:"p"},"TabularLIME")," creates new samples by drawing samples based on the value distribution from the background dataset. For numerical features, it creates new samples by drawing from a normal distribution with mean taken from the target value to be explained, and standard deviation taken from the background dataset.")),(0,l.kt)("h3",{id:"tabularshap"},(0,l.kt)("inlineCode",{parentName:"h3"},"TabularSHAP")),(0,l.kt)("p",null,"No additional params are supported."),(0,l.kt)("h3",{id:"vectorlime"},(0,l.kt)("inlineCode",{parentName:"h3"},"VectorLIME")),(0,l.kt)("p",null,"No additional params are supported."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"VectorLIME")," assumes all features are numerical, and categorical features are not supported in ",(0,l.kt)("inlineCode",{parentName:"p"},"VectorLIME"),".")),(0,l.kt)("h3",{id:"vectorshap"},(0,l.kt)("inlineCode",{parentName:"h3"},"VectorSHAP")),(0,l.kt)("p",null,"No additional params are supported."),(0,l.kt)("h3",{id:"imagelime"},(0,l.kt)("inlineCode",{parentName:"h3"},"ImageLIME")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"samplingFraction"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Double")),(0,l.kt)("td",{parentName:"tr",align:null},"0.7"),(0,l.kt)("td",{parentName:"tr",align:null},"The fraction of super-pixels to keep on during sampling.")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"ImageLIME")," creates new samples by randomly turning super-pixels on or off with probability of keeping on set to ",(0,l.kt)("inlineCode",{parentName:"p"},"SamplingFraction"),".")),(0,l.kt)("h3",{id:"imageshap"},(0,l.kt)("inlineCode",{parentName:"h3"},"ImageSHAP")),(0,l.kt)("p",null,"No additional params are supported."),(0,l.kt)("h3",{id:"textlime"},(0,l.kt)("inlineCode",{parentName:"h3"},"TextLIME")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"samplingFraction"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Double")),(0,l.kt)("td",{parentName:"tr",align:null},"0.7"),(0,l.kt)("td",{parentName:"tr",align:null},"The fraction of word tokens to keep on during sampling.")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"TextLIME")," creates new samples by randomly turning word tokens on or off with probability of keeping on set to ",(0,l.kt)("inlineCode",{parentName:"p"},"SamplingFraction"),".")),(0,l.kt)("h3",{id:"textshap"},(0,l.kt)("inlineCode",{parentName:"h3"},"TextSHAP")),(0,l.kt)("p",null,"No additional params are supported."),(0,l.kt)("h2",{id:"result-interpretation"},"Result interpretation"),(0,l.kt)("h3",{id:"lime-explainers"},"LIME explainers"),(0,l.kt)("p",null,"LIME explainers return an array of vectors, and each vector maps to a class being explained. Each component of the vector is the coefficient for the corresponding feature, super-pixel, or word token from the local surrogate model."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For categorical variables, super-pixels, or word tokens, the coefficient shows the average change in model outcome if this feature is unknown to the model, if the super-pixel is replaced with background color (black), or if the word token is replaced with empty string."),(0,l.kt)("li",{parentName:"ul"},"For numeric variables, the coefficient shows the change in model outcome if the feature value is incremented by 1 unit.")),(0,l.kt)("h3",{id:"shap-explainers"},"SHAP explainers"),(0,l.kt)("p",null,"SHAP explainers return an array of vectors, and each vector maps to a class being explained. Each vector starts with the ",(0,l.kt)("a",{parentName:"p",href:"#base-value"},"base value"),", and each following component of the vector is the Shapley value for each feature, super-pixel, or token."),(0,l.kt)("p",null,"The base value and Shapley values are additive, and they should add up to the model output for the target observation."),(0,l.kt)("h4",{id:"base-value"},"Base value"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For tabular and vector models, the base value represents the mean outcome of the model for the background dataset."),(0,l.kt)("li",{parentName:"ul"},"For image models, the base value represents the model outcome for a background (all black) image."),(0,l.kt)("li",{parentName:"ul"},"For text models, the base value represents the model outcome for an empty string.")))}k.isMDXComponent=!0}}]);