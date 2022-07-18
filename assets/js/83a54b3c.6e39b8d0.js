"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[8714],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1431:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],i={title:"R setup",hide_title:!0,sidebar_label:"R setup",description:"R setup and example for SynapseML"},s="R setup and example for SynapseML",p={unversionedId:"reference/R-setup",id:"version-0.9.5/reference/R-setup",title:"R setup",description:"R setup and example for SynapseML",source:"@site/versioned_docs/version-0.9.5/reference/R-setup.md",sourceDirName:"reference",slug:"/reference/R-setup",permalink:"/SynapseML/docs/0.9.5/reference/R-setup",tags:[],version:"0.9.5",frontMatter:{title:"R setup",hide_title:!0,sidebar_label:"R setup",description:"R setup and example for SynapseML"},sidebar:"docs",previous:{title:"Docker Image",permalink:"/SynapseML/docs/0.9.5/reference/docker"},next:{title:"SAR Algorithm",permalink:"/SynapseML/docs/0.9.5/reference/SAR"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Importing libraries and setting up spark context",id:"importing-libraries-and-setting-up-spark-context",level:3},{value:"Example",id:"example",level:2},{value:"Azure Databricks",id:"azure-databricks",level:2},{value:"Building from Source",id:"building-from-source",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"r-setup-and-example-for-synapseml"},"R setup and example for SynapseML"),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Requirements"),": You will need to have R and\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/hadley/devtools"},"devtools")," installed on your\nmachine."),(0,l.kt)("p",null,"To install the current SynapseML package for R use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-R"},'...\ndevtools::install_url("https://mmlspark.azureedge.net/rrr/synapseml-0.9.5.zip")\n...\n')),(0,l.kt)("h3",{id:"importing-libraries-and-setting-up-spark-context"},"Importing libraries and setting up spark context"),(0,l.kt)("p",null,"It will take some time to install all dependencies.  Then, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-R"},'...\nlibrary(sparklyr)\nlibrary(dplyr)\nconfig <- spark_config()\nconfig$sparklyr.defaultPackages <- "com.microsoft.azure:synapseml_2.12:0.9.5"\nsc <- spark_connect(master = "local", config = config)\n...\n')),(0,l.kt)("p",null,"This will create a spark context on local machine."),(0,l.kt)("p",null,"We will then need to import the R wrappers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-R"},"...\nlibrary(synapseml)\n...\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"We can use the faithful dataset in R:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-R"},'...\nfaithful_df <- copy_to(sc, faithful)\ncmd_model = ml_clean_missing_data(\n              x=faithful_df,\n              inputCols = c("eruptions", "waiting"),\n              outputCols = c("eruptions_output", "waiting_output"),\n              only.model=TRUE)\nsdf_transform(cmd_model, faithful_df)\n...\n')),(0,l.kt)("p",null,"You should see the output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-R"},"...\n# Source:   table<sparklyr_tmp_17d66a9d490c> [?? x 4]\n# Database: spark_connection\n   eruptions waiting eruptions_output waiting_output\n          <dbl>   <dbl>            <dbl>          <dbl>\n          1     3.600      79            3.600             79\n          2     1.800      54            1.800             54\n          3     3.333      74            3.333             74\n          4     2.283      62            2.283             62\n          5     4.533      85            4.533             85\n          6     2.883      55            2.883             55\n          7     4.700      88            4.700             88\n          8     3.600      85            3.600             85\n          9     1.950      51            1.950             51\n          10     4.350      85            4.350             85\n          # ... with more rows\n...\n")),(0,l.kt)("h2",{id:"azure-databricks"},"Azure Databricks"),(0,l.kt)("p",null,'In Azure Databricks, you can install devtools and the spark package from URL\nand then use spark_connect with method = "databricks":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-R"},'install.packages("devtools")\ndevtools::install_url("https://mmlspark.azureedge.net/rrr/synapseml-0.9.5.zip")\nlibrary(sparklyr)\nlibrary(dplyr)\nsc <- spark_connect(method = "databricks")\nfaithful_df <- copy_to(sc, faithful)\nunfit_model = ml_light_gbmregressor(sc, maxDepth=20, featuresCol="waiting", labelCol="eruptions", numIterations=10, unfit.model=TRUE)\nml_train_regressor(faithful_df, labelCol="eruptions", unfit_model)\n')),(0,l.kt)("h2",{id:"building-from-source"},"Building from Source"),(0,l.kt)("p",null,"Our R bindings are built as part of the ",(0,l.kt)("a",{parentName:"p",href:"/SynapseML/docs/0.9.5/reference/developer-readme"},"normal build\nprocess"),".  To get a quick build, start at the root\nof the synapsemldirectory, and:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./runme TESTS=NONE\nunzip ./BuildArtifacts/packages/R/synapseml-0.0.zip\n")),(0,l.kt)("p",null,"You can then run R in a terminal and install the above files directly:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-R"},'...\ndevtools::install_local("./BuildArtifacts/packages/R/synapseml")\n...\n')))}m.isMDXComponent=!0}}]);