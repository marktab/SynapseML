"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[9874],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3361:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"CognitiveServices - OpenAI",hide_title:!0,status:"stable",name:"CognitiveServices - OpenAI"},l="Cognitive Services - OpenAI",p={unversionedId:"features/cognitive_services/CognitiveServices - OpenAI",id:"features/cognitive_services/CognitiveServices - OpenAI",title:"CognitiveServices - OpenAI",description:"Large language models are capable of successfully completing multiple downstream tasks with little training data required from users. This is because these models are already trained using enormous amounts of text. The 175 billion-parameter GPT-3 model for example, can generate text and even code given a short prompt containing instructions.",source:"@site/docs/features/cognitive_services/CognitiveServices - OpenAI.md",sourceDirName:"features/cognitive_services",slug:"/features/cognitive_services/CognitiveServices - OpenAI",permalink:"/SynapseML/docs/next/features/cognitive_services/CognitiveServices - OpenAI",tags:[],version:"current",frontMatter:{title:"CognitiveServices - OpenAI",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"CognitiveServices - Multivariate Anomaly Detection",permalink:"/SynapseML/docs/next/features/cognitive_services/CognitiveServices - Multivariate Anomaly Detection"},next:{title:"CognitiveServices - Overview",permalink:"/SynapseML/docs/next/features/cognitive_services/CognitiveServices - Overview"}},c={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cognitive-services---openai"},"Cognitive Services - OpenAI"),(0,a.kt)("p",null,"Large language models are capable of successfully completing multiple downstream tasks with little training data required from users. This is because these models are already trained using enormous amounts of text. The 175 billion-parameter GPT-3 model for example, can generate text and even code given a short prompt containing instructions. "),(0,a.kt)("p",null,"While large models are becoming more powerful, more multimodal, and relatively cheaper to train, inferencing also needs to scale to handle larger volume of requests from customers. Using SynapseML, customers can now leverage enterprise grade models from Azure OpenAI Service to apply advanced language models on data stored in Azure Synapse Analytics. "),(0,a.kt)("p",null,"SynapseML is an open source library with a set of consistent APIs that integrate with a number of deep learning and data science tools, including Azure OpenAI. The OpenAI project itself maintains a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openai/openai-quickstart-node"},"great tool")," for experimenting with GPT-3 to get an idea of how it works. SynapseML's integration with Azure OpenAI provides a simple and intuitive coding interface that can be called from Scala, Python or R. It is intended for use in industrial-grade applications, but it is also flexible enough to nimbly handle the demands of consumer website."),(0,a.kt)("p",null,"This tutorial walks you through a couple steps you need to perform to integrate Azure OpenAI Services to Azure SynapseML and how to apply the large language models available in Azure OpenAI at a distributed scale."),(0,a.kt)("p",null,"First, set up some administrative details."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import os\n\nservice_name = "M3Test11"\ndeployment_name = "text-davinci-001"\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n\n    spark = SparkSession.builder.getOrCreate()\n    from notebookutils.mssparkutils.credentials import getSecret\n\n    os.environ["OPENAI_API_KEY"] = getSecret("mmlspark-build-keys", "openai-api-key")\n    from notebookutils.visualization import display\n\n# put your service keys here\nkey = os.environ["OPENAI_API_KEY"]\nlocation = "eastus"\nassert key is not None and service_name is not None\n')),(0,a.kt)("p",null,"Next, create a dataframe consisting of a series of rows, with one prompt per row. Each prompt is followed by a comma and then ensconsed in a set of parentheses. This format forms a tuple. Then add a string to identify the column containing the prompts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# Create or load a dataframe of text, can load directly from adls or other databases\n\ndf = spark.createDataFrame(\n    [\n        ("Once upon a time",),\n        ("Hello my name is",),\n        ("The best code is code thats",),\n        ("The meaning of life is",),\n    ]\n).toDF("prompt")\n')),(0,a.kt)("p",null,"To set up the completion interaction with the OpenAI service, create an ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenAICompletion")," object. Set ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxTokens")," to 200. A token is around 4 characters, and this limit applies to the some of the prompt and the result. Set the prompt column with the same name used to identify the prompt column in the dataframe."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'from synapse.ml.cognitive import OpenAICompletion\n\ncompletion = (\n    OpenAICompletion()\n    .setSubscriptionKey(key)\n    .setDeploymentName(deployment_name)\n    .setUrl("https://{}.openai.azure.com/".format(service_name))\n    .setMaxTokens(200)\n    .setPromptCol("prompt")\n    .setOutputCol("completions")\n)\n')),(0,a.kt)("p",null,"Now that you have the dataframe and the completion object, you can obtain the prompt completions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Map the dataframe through OpenAI\ncompleted_df = completion.transform(df).cache()\n")),(0,a.kt)("p",null,"And display them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'from pyspark.sql.functions import col\n\ndisplay(completed_df.select(col("prompt"), col("completions.choices.text")))\n')),(0,a.kt)("p",null,'The method above makes several requests to the service, one for each prompt. To complete multiple prompts in a single request, use batch mode. First, in the OpenAICompletion object, instead of setting the Prompt column to "Prompt", specify "batchPrompt" for the BatchPrompt column.'),(0,a.kt)("p",null,"The method used above makes several requests to the service, one for each prompt. To complete multiple prompts in a single request, use batch mode. "),(0,a.kt)("p",null,"To do so, create a dataframe with a list of prompts per row."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenAICompletion")," object, rather than setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"prompt")," column, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"batchPrompt")," column instead."),(0,a.kt)("p",null,"In the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," a request will then be made per row. Since there are multiple prompts in a single row, each request will be sent with all prompts in that row. The results will contain a row for each row in the request."),(0,a.kt)("p",null,'Note that as of this writing there is currently a limit of 20 prompts in a single request, as well as a hard limit of 2048 "tokens", or approximately 1500 words.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'df = spark.createDataFrame(\n    [\n        (["The time has come", "Pleased to", "Today stocks", "Here\'s to"],),\n        (["The only thing", "Ask not what", "Every litter", "I am"],),\n    ]\n).toDF("batchPrompt")\n\nbatchCompletion = (\n    OpenAICompletion()\n    .setSubscriptionKey(key)\n    .setDeploymentName(deployment_name)\n    .setUrl("https://{}.openai.azure.com/".format(service_name))\n    .setMaxTokens(200)\n    .setBatchPromptCol("batchPrompt")\n    .setOutputCol("completions")\n)\n\ncompleted_df = batchCompletion.transform(df).cache()\ndisplay(completed_df.select(col("batchPrompt"), col("completions.choices.text")))\n')),(0,a.kt)("p",null,"If your data is in column format, you can transpose it to row format using SynapseML's ",(0,a.kt)("inlineCode",{parentName:"p"},"FixedMiniBatcherTransformer"),", along with help from Spark's ",(0,a.kt)("inlineCode",{parentName:"p"},"coalesce")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'from pyspark.sql.types import StringType\nfrom synapse.ml.stages import FixedMiniBatchTransformer\n\ndf = spark.createDataFrame(\n    ["This land is", "If I had a", "How many roads", "You can get anything"],\n    StringType(),\n).toDF("batchPrompt")\n\n# Force a single partition\ndf = df.coalesce(1)\n\ndf = FixedMiniBatchTransformer(batchSize=4, buffered=False).transform(df)\n\ncompleted_df = batchCompletion.transform(df).cache()\ndisplay(completed_df.select(col("batchPrompt"), col("completions.choices.text")))\n')),(0,a.kt)("p",null,"You can try your hand at translation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'df = spark.createDataFrame(\n    [\n        ("Japanese: Ookina hako\\nEnglish: Big box\\nJapanese: Midori tako\\nEnglish:",),\n        (\n            "French: Quel heure et il au Montreal?\\nEnglish: What time is it in Montreal?\\nFrench: Ou est le poulet?\\nEnglish:",\n        ),\n    ]\n).toDF("prompt")\n\ncompleted_df = completion.transform(df).cache()\ndisplay(completed_df.select(col("prompt"), col("completions.choices.text")))\n')),(0,a.kt)("p",null,"You can prompt for general knowledge."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'df = spark.createDataFrame(\n    [\n        (\n            "Q: Where is the Grand Canyon?\\nA: The Grand Canyon is in Arizona.\\n\\nQ: What is the weight of the Burj Khalifa in kilograms?\\nA:",\n        )\n    ]\n).toDF("prompt")\n\ncompleted_df = completion.transform(df).cache()\ndisplay(completed_df.select(col("prompt"), col("completions.choices.text")))\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"")))}d.isMDXComponent=!0}}]);