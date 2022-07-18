"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[5661],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return N}});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function m(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},r=Object.keys(a);for(s=0;s<r.length;s++)t=r[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(s=0;s<r.length;s++)t=r[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var i=s.createContext({}),p=function(a){var e=s.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},o=function(a){var e=p(a.components);return s.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},u=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,r=a.originalType,i=a.parentName,o=m(a,["components","mdxType","originalType","parentName"]),u=p(t),N=n,k=u["".concat(i,".").concat(N)]||u[N]||c[N]||r;return t?s.createElement(k,l(l({ref:e},o),{},{components:t})):s.createElement(k,l({ref:e},o))}));function N(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var r=t.length,l=new Array(r);l[0]=u;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=a,m.mdxType="string"==typeof a?a:n,l[1]=m;for(var p=2;p<r;p++)l[p]=t[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4114:function(a,e,t){t.r(e),t.d(e,{assets:function(){return o},contentTitle:function(){return i},default:function(){return N},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return c}});var s=t(7462),n=t(3366),r=(t(7294),t(3905)),l=["components"],m={title:"DataBalanceAnalysis - Adult Census Income",hide_title:!0,status:"stable",url_path:"features/responsible_ai/DataBalanceAnalysis - Adult Census Income",name:"DataBalanceAnalysis - Adult Census Income"},i=void 0,p={unversionedId:"features/responsible_ai/DataBalanceAnalysis - Adult Census Income",id:"version-0.10.0/features/responsible_ai/DataBalanceAnalysis - Adult Census Income",title:"DataBalanceAnalysis - Adult Census Income",description:"Data Balance Analysis using the Adult Census Income dataset",source:"@site/versioned_docs/version-0.10.0/features/responsible_ai/DataBalanceAnalysis - Adult Census Income.md",sourceDirName:"features/responsible_ai",slug:"/features/responsible_ai/DataBalanceAnalysis - Adult Census Income",permalink:"/SynapseML/docs/features/responsible_ai/DataBalanceAnalysis - Adult Census Income",tags:[],version:"0.10.0",frontMatter:{title:"DataBalanceAnalysis - Adult Census Income",hide_title:!0,status:"stable",url_path:"features/responsible_ai/DataBalanceAnalysis - Adult Census Income",name:"DataBalanceAnalysis - Adult Census Income"},sidebar:"docs",previous:{title:"Data Balance Analysis",permalink:"/SynapseML/docs/features/responsible_ai/Data Balance Analysis"},next:{title:"Interpretability - Explanation Dashboard",permalink:"/SynapseML/docs/features/responsible_ai/Interpretability - Explanation Dashboard"}},o={},c=[{value:"Data Balance Analysis using the Adult Census Income dataset",id:"data-balance-analysis-using-the-adult-census-income-dataset",level:2},{value:"Perform preliminary analysis on columns of interest",id:"perform-preliminary-analysis-on-columns-of-interest",level:3},{value:"Calculate Feature Balance Measures",id:"calculate-feature-balance-measures",level:3},{value:"Visualize Feature Balance Measures",id:"visualize-feature-balance-measures",level:4},{value:"Interpret Feature Balance Measures",id:"interpret-feature-balance-measures",level:4},{value:"Calculate Distribution Balance Measures",id:"calculate-distribution-balance-measures",level:3},{value:"Visualize Distribution Balance Measures",id:"visualize-distribution-balance-measures",level:4},{value:"Interpret Distribution Balance Measures",id:"interpret-distribution-balance-measures",level:4},{value:"Calculate Aggregate Balance Measures",id:"calculate-aggregate-balance-measures",level:3},{value:"Interpret Aggregate Balance Measures",id:"interpret-aggregate-balance-measures",level:4},{value:"Summary",id:"summary",level:3}],u={toc:c};function N(a){var e=a.components,t=(0,n.Z)(a,l);return(0,r.kt)("wrapper",(0,s.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"data-balance-analysis-using-the-adult-census-income-dataset"},"Data Balance Analysis using the Adult Census Income dataset"),(0,r.kt)("p",null,"In this example, we will conduct Data Balance Analysis (which consists on running three groups of measures) on the Adult Census Income dataset to determine how well features and feature values are represented in the dataset."),(0,r.kt)("p",null,"This dataset can be used to predict whether annual income exceeds $50,000/year or not based on demographic data from the 1994 U.S. Census. The dataset we're reading contains 32,561 rows and 14 columns/features."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://archive.ics.uci.edu/ml/datasets/Adult"},"More info on the dataset here")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Data Balance Analysis consists of a combination of three groups of measures: Feature Balance Measures, Distribution Balance Measures, and Aggregate Balance Measures.\nIn summary, Data Balance Analysis, when used as a step for building ML models, has the following benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It reduces costs of ML building through the early identification of data representation gaps that prompt data scientists to seek mitigation steps (such as collecting more data, following a specific sampling mechanism, creating synthetic data, and so on) before proceeding to train their models."),(0,r.kt)("li",{parentName:"ul"},"It enables easy end-to-end debugging of ML systems in combination with the ",(0,r.kt)("a",{parentName:"li",href:"https://responsibleaitoolbox.ai/responsible-ai-toolbox-capabilities/"},"RAI Toolbox")," by providing a clear view of model-related issues versus data-related issues.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Note: If you are running this notebook in a Spark environment such as Azure Synapse or Databricks, then you can easily visualize the imbalance measures using the built-in plotting features."),(0,r.kt)("p",null,"Python dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"matplotlib==3.2.2\nnumpy==1.19.2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport pyspark.sql.functions as F\nimport os\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n\n    spark = SparkSession.builder.getOrCreate()\n    from notebookutils.visualization import display\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'df = spark.read.parquet(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/AdultCensusIncome.parquet"\n)\ndisplay(df)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Convert the "income" column from {<=50K, >50K} to {0, 1} to represent our binary classification label column\nlabel_col = "income"\ndf = df.withColumn(\n    label_col, F.when(F.col(label_col).contains("<=50K"), F.lit(0)).otherwise(F.lit(1))\n)\n')),(0,r.kt)("h3",{id:"perform-preliminary-analysis-on-columns-of-interest"},"Perform preliminary analysis on columns of interest"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'display(df.groupBy("race").count())\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'display(df.groupBy("sex").count())\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Choose columns/features to do data balance analysis on\ncols_of_interest = ["race", "sex"]\ndisplay(df.select(cols_of_interest + [label_col]))\n')),(0,r.kt)("h3",{id:"calculate-feature-balance-measures"},(0,r.kt)("a",{parentName:"h3",href:"/docs/features/responsible_ai/Data%20Balance%20Analysis/"},"Calculate Feature Balance Measures")),(0,r.kt)("p",null,"Feature Balance Measures allow us to see whether each combination of sensitive feature is receiving the positive outcome (true prediction) at equal rates."),(0,r.kt)("p",null,"In this context, we define a feature balance measure, also referred to as the parity, for label y as the absolute difference between the association metrics of two different sensitive classes ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"x"),(0,r.kt)("mi",{parentName:"msub"},"A")),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"x"),(0,r.kt)("mi",{parentName:"msub"},"B")),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[x_A, x_B]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.32833099999999993em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"A")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.32833099999999993em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05017em"}},"B")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]"))))),", with respect to the association metric ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"x"),(0,r.kt)("mi",{parentName:"msub"},"i")),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"y"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A(x_i, y)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.31166399999999994em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),". That is:"),(0,r.kt)("p",null,(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"y"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"y"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"x"),(0,r.kt)("mi",{parentName:"msub"},"A")),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"x"),(0,r.kt)("mi",{parentName:"msub"},"B")),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"mo",mathvariant:"normal"},"\u2254")),(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"x"),(0,r.kt)("mi",{parentName:"msub"},"A")),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"y"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"x"),(0,r.kt)("mi",{parentName:"msub"},"B")),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"y"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"parity(y \\vert x_A, x_B, A(\\cdot)) \\coloneqq A(x_A, y) - A(x_B, y)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.32833099999999993em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"A")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.32833099999999993em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05017em"}},"B")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u22c5"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},(0,r.kt)("span",{parentName:"span",className:"mrel"},(0,r.kt)("span",{parentName:"span",className:"mop",style:{position:"relative",top:"-0.03472em"}},":")),(0,r.kt)("span",{parentName:"span",className:"mrel"},(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.06666666666666667em"}})),(0,r.kt)("span",{parentName:"span",className:"mrel"},"=")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.32833099999999993em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"A")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.32833099999999993em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05017em"}},"B")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("p",null,"Using the dataset, we can see if the various sexes and races are receiving >50k income at equal or unequal rates."),(0,r.kt)("p",null,"Note: Many of these metrics were influenced by this paper ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2103.03417"},"Measuring Model Biases in the Absence of Ground Truth"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.exploratory import FeatureBalanceMeasure\n\nfeature_balance_measures = (\n    FeatureBalanceMeasure()\n    .setSensitiveCols(cols_of_interest)\n    .setLabelCol(label_col)\n    .setVerbose(True)\n    .transform(df)\n)\n\n# Sort by Statistical Parity descending for all features\ndisplay(feature_balance_measures.sort(F.abs("FeatureBalanceMeasure.dp").desc()))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Drill down to feature == "sex"\ndisplay(\n    feature_balance_measures.filter(F.col("FeatureName") == "sex").sort(\n        F.abs("FeatureBalanceMeasure.dp").desc()\n    )\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Drill down to feature == "race"\ndisplay(\n    feature_balance_measures.filter(F.col("FeatureName") == "race").sort(\n        F.abs("FeatureBalanceMeasure.dp").desc()\n    )\n)\n')),(0,r.kt)("h4",{id:"visualize-feature-balance-measures"},"Visualize Feature Balance Measures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'races = [row["race"] for row in df.groupBy("race").count().select("race").collect()]\ndp_rows = (\n    feature_balance_measures.filter(F.col("FeatureName") == "race")\n    .select("ClassA", "ClassB", "FeatureBalanceMeasure.dp")\n    .collect()\n)\nrace_dp_values = [(row["ClassA"], row["ClassB"], row["dp"]) for row in dp_rows]\n\nrace_dp_array = np.zeros((len(races), len(races)))\nfor class_a, class_b, dp_value in race_dp_values:\n    i, j = races.index(class_a), races.index(class_b)\n    dp_value = round(dp_value, 2)\n    race_dp_array[i, j] = dp_value\n    race_dp_array[j, i] = -1 * dp_value\n\ncolormap = "RdBu"\ndp_min, dp_max = -1.0, 1.0\n\nfig, ax = plt.subplots()\nim = ax.imshow(race_dp_array, vmin=dp_min, vmax=dp_max, cmap=colormap)\n\ncbar = ax.figure.colorbar(im, ax=ax)\ncbar.ax.set_ylabel("Statistical Parity", rotation=-90, va="bottom")\n\nax.set_xticks(np.arange(len(races)))\nax.set_yticks(np.arange(len(races)))\nax.set_xticklabels(races)\nax.set_yticklabels(races)\n\nplt.setp(ax.get_xticklabels(), rotation=45, ha="right", rotation_mode="anchor")\n\nfor i in range(len(races)):\n    for j in range(len(races)):\n        text = ax.text(j, i, race_dp_array[i, j], ha="center", va="center", color="k")\n\nax.set_title("Statistical Parity of Races in Adult Dataset")\nfig.tight_layout()\nplt.show()\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/responsible_ai/DataBalanceAnalysis_AdultCensusIncome_RacesDP.png",alt:"Statistical Parity of Races in Adult Dataset"})),(0,r.kt)("h4",{id:"interpret-feature-balance-measures"},"Interpret Feature Balance Measures"),(0,r.kt)("p",null,"Statistical Parity:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When it is positive, it means that ClassA sees the positive outcome more than ClassB."),(0,r.kt)("li",{parentName:"ul"},"When it is negative, it means that ClassB sees the positive outcome more than ClassA.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"From the results, we can tell the following:"),(0,r.kt)("p",null,"For Sex:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'SP(Male, Female) = 0.1963 shows "Male" observations are associated with ">50k" income label more often than "Female" observations.')),(0,r.kt)("p",null,"For Race:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'SP(Other, Asian-Pac-Islander) = -0.1734 shows "Other" observations are associated with ">50k" income label less than "Asian-Pac-Islander" observations.'),(0,r.kt)("li",{parentName:"ul"},'SP(White, Other) = 0.1636 shows "White" observations are associated with ">50k" income label more often than "Other" observations.'),(0,r.kt)("li",{parentName:"ul"},'SP(Asian-Pac-Islander, Amer-Indian-Eskimo) = 0.1494 shows "Asian-Pac-Islander" observations are associated with ">50k" income label more often than "Amer-Indian-Eskimo" observations.')),(0,r.kt)("p",null,"Again, you can take mitigation steps to upsample/downsample your data to be less biased towards certain features and feature values."),(0,r.kt)("p",null,"Built-in mitigation steps are coming soon."),(0,r.kt)("h3",{id:"calculate-distribution-balance-measures"},"Calculate ",(0,r.kt)("a",{parentName:"h3",href:"/docs/features/responsible_ai/Data%20Balance%20Analysis/"},"Distribution Balance Measures")),(0,r.kt)("p",null,"Distribution Balance Measures allow us to compare our data with a reference distribution (i.e. uniform distribution). They are calculated per sensitive column and don't use the label column.                          |"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.exploratory import DistributionBalanceMeasure\n\ndistribution_balance_measures = (\n    DistributionBalanceMeasure().setSensitiveCols(cols_of_interest).transform(df)\n)\n\n# Sort by JS Distance descending\ndisplay(\n    distribution_balance_measures.sort(\n        F.abs("DistributionBalanceMeasure.js_dist").desc()\n    )\n)\n')),(0,r.kt)("h4",{id:"visualize-distribution-balance-measures"},"Visualize Distribution Balance Measures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'distribution_rows = distribution_balance_measures.collect()\nrace_row = [row for row in distribution_rows if row["FeatureName"] == "race"][0][\n    "DistributionBalanceMeasure"\n]\nsex_row = [row for row in distribution_rows if row["FeatureName"] == "sex"][0][\n    "DistributionBalanceMeasure"\n]\n\nmeasures_of_interest = [\n    "kl_divergence",\n    "js_dist",\n    "inf_norm_dist",\n    "total_variation_dist",\n    "wasserstein_dist",\n]\nrace_measures = [round(race_row[measure], 4) for measure in measures_of_interest]\nsex_measures = [round(sex_row[measure], 4) for measure in measures_of_interest]\n\nx = np.arange(len(measures_of_interest))\nwidth = 0.35\n\nfig, ax = plt.subplots()\nrects1 = ax.bar(x - width / 2, race_measures, width, label="Race")\nrects2 = ax.bar(x + width / 2, sex_measures, width, label="Sex")\n\nax.set_xlabel("Measure")\nax.set_ylabel("Value")\nax.set_title("Distribution Balance Measures of Sex and Race in Adult Dataset")\nax.set_xticks(x)\nax.set_xticklabels(measures_of_interest)\nax.legend()\n\nplt.setp(ax.get_xticklabels(), rotation=20, ha="right", rotation_mode="default")\n\n\ndef autolabel(rects):\n    for rect in rects:\n        height = rect.get_height()\n        ax.annotate(\n            "{}".format(height),\n            xy=(rect.get_x() + rect.get_width() / 2, height),\n            xytext=(0, 1),  # 1 point vertical offset\n            textcoords="offset points",\n            ha="center",\n            va="bottom",\n        )\n\n\nautolabel(rects1)\nautolabel(rects2)\n\nfig.tight_layout()\n\nplt.show()\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/responsible_ai/DataBalanceAnalysis_AdultCensusIncome_DistributionMeasures.png",alt:"Distribution Balance Measures of Sex and Race in Adult Dataset"})),(0,r.kt)("h4",{id:"interpret-distribution-balance-measures"},"Interpret Distribution Balance Measures"),(0,r.kt)("p",null,"Race has a JS Distance of 0.5104 while Sex has a JS Distance of 0.1217."),(0,r.kt)("p",null,"Knowing that JS Distance is between ","[0, 1]"," where 0 means perfectly balanced distribution, we can tell that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There is a larger disparity between various races than various sexes in our dataset."),(0,r.kt)("li",{parentName:"ul"},"Race is nowhere close to a perfectly balanced distribution (i.e. some races are seen ALOT more than others in our dataset)."),(0,r.kt)("li",{parentName:"ul"},"Sex is fairly close to a perfectly balanced distribution.")),(0,r.kt)("h3",{id:"calculate-aggregate-balance-measures"},"Calculate ",(0,r.kt)("a",{parentName:"h3",href:"/docs/features/responsible_ai/Data%20Balance%20Analysis/"},"Aggregate Balance Measures")),(0,r.kt)("p",null,"Aggregate Balance Measures allow us to obtain a higher notion of inequality. They are calculated on the global set of sensitive columns and don't use the label column."),(0,r.kt)("p",null,"These measures look at distribution of records across all combinations of sensitive columns. For example, if Sex and Race are sensitive columns, it shall try to quantify imbalance across all combinations - (Male, Black), (Female, White), (Male, Asian-Pac-Islander), etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.exploratory import AggregateBalanceMeasure\n\naggregate_balance_measures = (\n    AggregateBalanceMeasure().setSensitiveCols(cols_of_interest).transform(df)\n)\n\ndisplay(aggregate_balance_measures)\n")),(0,r.kt)("h4",{id:"interpret-aggregate-balance-measures"},"Interpret Aggregate Balance Measures"),(0,r.kt)("p",null,"An Atkinson Index of 0.7779 lets us know that 77.79% of data points need to be foregone to have a more equal share among our features."),(0,r.kt)("p",null,"It lets us know that our dataset is leaning towards maximum inequality, and we should take actionable steps to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upsample data points where the feature value is barely observed."),(0,r.kt)("li",{parentName:"ul"},"Downsample data points where the feature value is observed much more than others.")),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Throughout the course of this sample notebook, we have:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Chosen "Race" and "Sex" as columns of interest in the Adult Census Income dataset.'),(0,r.kt)("li",{parentName:"ol"},"Done preliminary analysis on our dataset. "),(0,r.kt)("li",{parentName:"ol"},"Ran the 3 groups of measures that compose our ",(0,r.kt)("strong",{parentName:"li"},"Data Balance Analysis"),":")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Feature Balance Measures"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Calculated Feature Balance Measures to see that the highest Statistical Parity is in "Sex": Males see >50k income much more than Females.'),(0,r.kt)("li",{parentName:"ul"},"Visualized Statistical Parity of Races to see that Asian-Pac-Islander sees >50k income much more than Other, in addition to other race combinations."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Distribution Balance Measures")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Calculated Distribution Balance Measures to see that "Sex" is much closer to a perfectly balanced distribution than "Race".'),(0,r.kt)("li",{parentName:"ul"},'Visualized various distribution balance measures to compare their values for "Race" and "Sex".'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Aggregate Balance Measures"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Calculated Aggregate Balance Measures to see that we need to forego 77.79% of data points to have a perfectly balanced dataset. We identified that our dataset is leaning towards maximum inequality, and we should take actionable steps to:"),(0,r.kt)("li",{parentName:"ul"},"Upsample data points where the feature value is barely observed."),(0,r.kt)("li",{parentName:"ul"},"Downsample data points where the feature value is observed much more than others.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In conclusion:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These measures provide an indicator of disparity on the data, allowing for users to explore potential mitigations before proceeding to train. "),(0,r.kt)("li",{parentName:"ul"},'Users can use these measures to set thresholds on their level of "tolerance" for data representation.'),(0,r.kt)("li",{parentName:"ul"},"Production pipelines can use these measures as baseline for models that require frequent retraining on new data. "),(0,r.kt)("li",{parentName:"ul"},"These measures can also be saved as key metadata for the model/service built and added as part of model cards or transparency notes helping drive overall accountability for the ML service built and its performance across different demographics or sensitive attributes.")))}N.isMDXComponent=!0}}]);