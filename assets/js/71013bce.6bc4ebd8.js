"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[543],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8264:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7462),a=r(7294),o="layout_grid_row_wRby",i="feature_card_xcW6",s="card_wlbZ",l="card__image_FnjG",c="card__body_lrx8",p="card__footer_pPMY",u=r(4996),d=[{src:"/img/notebooks/cog_services_on_spark_2.svg",title:"The Cognitive Services on Spark",body:"Leverage the Microsoft Cognitive Services at unprecedented scales in your existing SparkML pipelines.",footer:"Read the Paper",burl:"https://arxiv.org/abs/1810.08744"},{src:"/img/notebooks/SparkServing3.svg",title:"Stress Free Serving",body:"Spark is well known for it's ability to switch between batch and streaming workloads by modifying a single line.       We push this concept even further and enable distributed web services with the same API as batch and streaming workloads.",footer:"Learn More",burl:"../features/spark_serving/about"},{src:"/img/notebooks/decision_tree_recolor.png",title:"Lightning Fast Gradient Boosting",body:"SynapseML adds GPU enabled gradient boosted machines from the popular framework LightGBM.     Users can mix and match frameworks in a single distributed environment and API.",footer:"Try an Example",burl:"../features/lightgbm/LightGBM%20-%20Overview"},{src:"/img/notebooks/vw-blue-dark-orange.svg",title:"Fast and Sparse Text Analytics",body:"Vowpal Wabbit on Spark enables new classes of workloads in scalable and performant text analytics",footer:"Try an Example",burl:"../features/vw/Vowpal%20Wabbit%20-%20Overview"},{src:"/img/notebooks/microservice_recolor.png",title:"Distributed Microservices",body:"SynapseML provides powerful and idiomatic tools to communicate with any HTTP endpoint service using Spark.     Users can now use Spark as a elastic micro-service orchestrator.",footer:"Learn More",burl:"../features/http/about"},{src:"/img/notebooks/LIME-1.svg",title:"Large Scale Model Interpretability",body:"Understand any image classifier with a distributed implementation of Local Interpretable Model Agnostic Explanations (LIME).",footer:"Try an Example",burl:"../features/responsible_ai/Interpretability%20-%20Image%20Explainers/"},{src:"/img/notebooks/cntk-1.svg",title:"Scalable Deep Learning",body:"SynapseML integrates the distributed computing framework Apache Spark with the flexible deep learning framework CNTK.     Enabling deep learning at unprecedented scales.",footer:"Read the Paper",burl:"https://arxiv.org/abs/1804.04031"},{src:"/img/multilingual.svg",title:"Broad Language Support",body:"SynapseML's API spans Scala, Python, Java, R, .NET and C# so you can integrate with any ecosystem.",footer:"Try our PySpark Examples",burl:"../features/CognitiveServices%20-%20Overview"}];function m(e){var t=e.src,r=e.title,n=e.body,o=e.footer,d=e.burl,m=(0,u.Z)(t);return a.createElement("div",{class:i},a.createElement("div",{class:s},a.createElement("div",{class:l},a.createElement("img",{src:m,alt:"Image alt text",title:"Logo Title Text 1",height:"200"})),a.createElement("div",{class:c},a.createElement("h4",null,r),a.createElement("small",null,n)),a.createElement("div",{class:p},a.createElement("a",{class:"button button--primary button--block",href:d},o))))}var b=function(){return d&&d.length&&a.createElement("div",{className:o},d.map((function(e,t){return a.createElement(m,(0,n.Z)({key:t},e))})))}},3757:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a=r(2263),o=r(9960),i="notebookCard_yJKD";var s=function(e){var t=e.url;return n.createElement(o.Z,{to:"/docs/"+t.url_path,className:i},n.createElement("strong",null,t.name))};var l=function(){return(0,a.Z)().siteConfig.customFields.examples.map((function(e){return n.createElement(s,{url:e})}))}},8708:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(4996),s=r(9960),l=r(3757),c=r(8264),p=["components"],u={title:"SynapseML",sidebar_label:"Introduction",hide_title:!0},d=void 0,m={unversionedId:"about",id:"version-0.10.0/about",title:"SynapseML",description:"SynapseML is an ecosystem of tools aimed towards expanding the distributed computing framework",source:"@site/versioned_docs/version-0.10.0/about.md",sourceDirName:".",slug:"/about",permalink:"/SynapseML/docs/about",tags:[],version:"0.10.0",frontMatter:{title:"SynapseML",sidebar_label:"Introduction",hide_title:!0},sidebar:"docs",next:{title:"Installation",permalink:"/SynapseML/docs/getting_started/installation"}},b={},f=[{value:"Examples",id:"examples",level:2},{value:"Explore our Features",id:"explore-our-features",level:2},{value:"Papers",id:"papers",level:2}],g={toc:f};function y(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{style:{textAlign:"left"}},(0,o.kt)("img",{src:(0,i.Z)("/img/logo.svg")})),(0,o.kt)("h1",{id:"synapseml"},"SynapseML"),(0,o.kt)("p",null,"SynapseML is an ecosystem of tools aimed towards expanding the distributed computing framework\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/spark"},"Apache Spark")," in several new directions.\nSynapseML adds many deep learning and data science tools to the Spark ecosystem,\nincluding seamless integration of Spark Machine Learning pipelines with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/CNTK"},"Microsoft Cognitive Toolkit\n(CNTK)"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/LightGBM"},"LightGBM")," and\n",(0,o.kt)("a",{parentName:"p",href:"http://www.opencv.org/"},"OpenCV"),". These tools enable powerful and highly-scalable predictive and analytical models\nfor a variety of datasources."),(0,o.kt)("p",null,"SynapseML also brings new networking capabilities to the Spark Ecosystem. With the HTTP on Spark project, users\ncan embed ",(0,o.kt)("strong",{parentName:"p"},"any")," web service into their SparkML models. In this vein, SynapseML provides easy to use\nSparkML transformers for a wide variety of ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/cognitive-services/"},"Microsoft Cognitive Services"),". For production grade deployment, the Spark Serving project enables high throughput,\nsub-millisecond latency web services, backed by your Spark cluster."),(0,o.kt)("p",null,"SynapseML requires Scala 2.12, Spark 3.0+, and Python 3.6+.\nSee the API documentation ",(0,o.kt)("a",{parentName:"p",href:"https://mmlspark.blob.core.windows.net/docs/0.10.0/scala/index.html#package"},"for\nScala")," and ",(0,o.kt)("a",{parentName:"p",href:"https://mmlspark.blob.core.windows.net/docs/0.10.0/pyspark/index.html"},"for\nPySpark"),"."),(0,o.kt)(s.Z,{to:"/docs/getting_started/installation",className:"button button--lg button--outline button--block button--primary",mdxType:"Link"},"Get Started"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{mdxType:"NotebookExamples"}),(0,o.kt)("h2",{id:"explore-our-features"},"Explore our Features"),(0,o.kt)(c.Z,{mdxType:"FeatureCards"}),(0,o.kt)("h2",{id:"papers"},"Papers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2009.08044"},"Large Scale Intelligent Microservices"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2007.07177"},"Conditional Image Retrieval"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1810.08744"},"SynapseML: Unifying Machine Learning Ecosystems at Massive Scales"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1804.04031"},"Flexible and Scalable Deep Learning with MMLSpark")))))}y.isMDXComponent=!0}}]);