"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[6750],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),h=o,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1507:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),s=["components"],i={title:"GeospatialServices - Overview",hide_title:!0,status:"stable",url_path:"features/geospatial_services/GeospatialServices - Overview",name:"GeospatialServices - Overview"},p=void 0,l={unversionedId:"features/geospatial_services/GeospatialServices - Overview",id:"features/geospatial_services/GeospatialServices - Overview",title:"GeospatialServices - Overview",description:"Microsoft Azure Maps  provides developers from all industries with powerful geospatial capabilities. Those geospatial capabilities are packed with the freshest mapping data. Azure Maps is available for web, mobile (iOS and Android), Microsoft Power BI, Microsoft Power Apps and Microsoft Synapse. Azure Maps is an Open API compliant set of REST APIs. The following are only a high-level overview of the services which Azure Maps offers - Maps, Search, Routing, Traffic, Weather, Time Zones, Geolocation, Geofencing, Map Data, Creator, and Spatial Operations.",source:"@site/docs/features/geospatial_services/GeospatialServices - Overview.md",sourceDirName:"features/geospatial_services",slug:"/features/geospatial_services/GeospatialServices - Overview",permalink:"/SynapseML/docs/next/features/geospatial_services/GeospatialServices - Overview",tags:[],version:"current",frontMatter:{title:"GeospatialServices - Overview",hide_title:!0,status:"stable",url_path:"features/geospatial_services/GeospatialServices - Overview",name:"GeospatialServices - Overview"},sidebar:"docs",previous:{title:"GeospatialServices - Flooding Risk",permalink:"/SynapseML/docs/next/features/geospatial_services/GeospatialServices - Flooding Risk"},next:{title:"Data Balance Analysis",permalink:"/SynapseML/docs/next/features/responsible_ai/Data Balance Analysis"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Geocode addresses",id:"geocode-addresses",level:3},{value:"Reverse Geocode Coordinates",id:"reverse-geocode-coordinates",level:3},{value:"Get Point In Polygon",id:"get-point-in-polygon",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Shared code",id:"shared-code",level:2},{value:"Geocoding sample",id:"geocoding-sample",level:2},{value:"Reverse Geocoding sample",id:"reverse-geocoding-sample",level:2},{value:"Check Point In Polygon sample",id:"check-point-in-polygon-sample",level:2},{value:"Setup geojson Polygons in your azure maps creator account",id:"setup-geojson-polygons-in-your-azure-maps-creator-account",level:3},{value:"Use the function to check if point is in polygon",id:"use-the-function-to-check-if-point-is-in-polygon",level:3},{value:"Cleanup",id:"cleanup",level:3}],d={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{width:"500",src:"https://azurecomcdn.azureedge.net/cvt-18f087887a905ed3ae5310bee894aa53fc03cfffadc5dc9902bfe3469d832fec/less/images/section/azure-maps.png"}),(0,r.kt)("h1",{id:"azure-maps-geospatial-services"},"Azure Maps Geospatial Services"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/azure-maps/"},"Microsoft Azure Maps ")," provides developers from all industries with powerful geospatial capabilities. Those geospatial capabilities are packed with the freshest mapping data. Azure Maps is available for web, mobile (iOS and Android), Microsoft Power BI, Microsoft Power Apps and Microsoft Synapse. Azure Maps is an Open API compliant set of REST APIs. The following are only a high-level overview of the services which Azure Maps offers - Maps, Search, Routing, Traffic, Weather, Time Zones, Geolocation, Geofencing, Map Data, Creator, and Spatial Operations."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"geocode-addresses"},"Geocode addresses"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/maps/search/post-search-address-batch"},(0,r.kt)("strong",{parentName:"a"},"Address Geocoding"))," The Search Address Batch API sends batches of queries to Search Address API using just a single API call. This API geocodes text addresses or partial addresses and the geocoding search index will be queried for everything above the street level data. ",(0,r.kt)("strong",{parentName:"p"},"Note")," that the geocoder is very tolerant of typos and incomplete addresses. It will also handle everything from exact street addresses or street or intersections as well as higher level geographies such as city centers, counties, states etc."),(0,r.kt)("h3",{id:"reverse-geocode-coordinates"},"Reverse Geocode Coordinates"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/maps/search/post-search-address-reverse-batch"},(0,r.kt)("strong",{parentName:"a"},"Reverse Geocoding"))," The Search Address Reverse Batch API sends batches of queries to Search Address Reverse API using just a single API call. This API takes in location coordinates and translates them into human readable street addresses. Most often this is needed in tracking applications where you receive a GPS feed from the device or asset and wish to know what address where the coordinate is located."),(0,r.kt)("h3",{id:"get-point-in-polygon"},"Get Point In Polygon"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/maps/spatial/get-point-in-polygon"},(0,r.kt)("strong",{parentName:"a"},"Get Point in Polygon"))," This API returns a boolean value indicating whether a point is inside a set of polygons. The set of polygons can we pre-created by using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/maps/data/upload-preview"},(0,r.kt)("strong",{parentName:"a"},"Data Upload API")),"  referenced by a unique udid."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sign into the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.azure.com"},"Azure Portal")," and create an Azure Maps account by following these ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-maps/how-to-manage-account-keys#create-a-new-account"},"instructions"),"."),(0,r.kt)("li",{parentName:"ol"},"Once the Maps account is created, provision a Maps Creator Resource by following these ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-maps/how-to-manage-creator#create-creator-resource"},"instructions"),". Creator is a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-maps/creator-geographic-scope"},"geographically scoped service"),". Pick appropriate location while provisioning the creator resource. "),(0,r.kt)("li",{parentName:"ol"},"Follow these ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cognitive-services/big-data/getting-started#create-an-apache-spark-cluster"},"instructions")," to set up your Azure Databricks environment and install SynapseML."),(0,r.kt)("li",{parentName:"ol"},"After you create a new notebook in Azure Databricks, copy the ",(0,r.kt)("strong",{parentName:"li"},"Shared code")," below and paste into a new cell in your notebook."),(0,r.kt)("li",{parentName:"ol"},"Choose a service sample, below, and copy paste it into a second new cell in your notebook."),(0,r.kt)("li",{parentName:"ol"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"li"},"AZUREMAPS_API_KEY")," placeholders with your own ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-maps/how-to-manage-authentication#view-authentication-details"},"Maps account key"),"."),(0,r.kt)("li",{parentName:"ol"},"Choose the run button (triangle icon) in the upper right corner of the cell, then select ",(0,r.kt)("strong",{parentName:"li"},"Run Cell"),"."),(0,r.kt)("li",{parentName:"ol"},"View results in a table below the cell.")),(0,r.kt)("h2",{id:"shared-code"},"Shared code"),(0,r.kt)("p",null,"To get started, we'll need to add this code to the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import udf, col\nfrom pyspark.sql.types import StructType, StructField, DoubleType\nfrom pyspark.sql.functions import lit\nfrom pyspark.ml import PipelineModel\nfrom pyspark.sql.functions import col\nimport os\nimport requests\nfrom requests.adapters import HTTPAdapter\nfrom requests.packages.urllib3.util.retry import Retry\n\n# Configure more resiliant requests to stop flakiness\nretry_strategy = Retry(\n    total=3,\n    status_forcelist=[429, 500, 502, 503, 504],\n    method_whitelist=["HEAD", "GET", "PUT", "DELETE", "OPTIONS", "TRACE"],\n)\nadapter = HTTPAdapter(max_retries=retry_strategy)\nhttp = requests.Session()\nhttp.mount("https://", adapter)\nhttp.mount("http://", adapter)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'if os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n\n    spark = SparkSession.builder.getOrCreate()\n    from notebookutils.mssparkutils.credentials import getSecret\n\n    os.environ["AZURE_MAPS_KEY"] = getSecret("mmlspark-build-keys", "azuremaps-api-key")\n    from notebookutils.visualization import display\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\nfrom synapse.ml.geospatial import *\n\n# An Azure Maps account key\nazureMapsKey = os.environ["AZURE_MAPS_KEY"]\n')),(0,r.kt)("h2",{id:"geocoding-sample"},"Geocoding sample"),(0,r.kt)("p",null,"The azure maps geocoder sends batches of queries to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/maps/search/getsearchaddress"},"Search Address API"),". The API limits the batch size to 10000 queries per request.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.stages import FixedMiniBatchTransformer, FlattenBatch\n\ndf = spark.createDataFrame(\n    [\n        ("One, Microsoft Way, Redmond",),\n        ("400 Broad St, Seattle",),\n        ("350 5th Ave, New York",),\n        ("Pike Pl, Seattle",),\n        ("Champ de Mars, 5 Avenue Anatole France, 75007 Paris",),\n    ],\n    [\n        "address",\n    ],\n)\n\n\ndef extract_location_fields(df):\n    # Use this function to select only lat/lon columns into the dataframe\n    return df.select(\n        col("*"),\n        col("output.response.results")\n        .getItem(0)\n        .getField("position")\n        .getField("lat")\n        .alias("Latitude"),\n        col("output.response.results")\n        .getItem(0)\n        .getField("position")\n        .getField("lon")\n        .alias("Longitude"),\n    ).drop("output")\n\n\n# Run the Azure Maps geocoder to enhance the data with location data\ngeocoder = (\n    AddressGeocoder()\n    .setSubscriptionKey(azureMapsKey)\n    .setAddressCol("address")\n    .setOutputCol("output")\n)\n\n# Show the results of your text query in a table format\ndisplay(\n    extract_location_fields(\n        geocoder.transform(FixedMiniBatchTransformer().setBatchSize(10).transform(df))\n    )\n)\n')),(0,r.kt)("h2",{id:"reverse-geocoding-sample"},"Reverse Geocoding sample"),(0,r.kt)("p",null,"The azure maps reverse geocoder sends batches of queries to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/maps/search/get-search-address-reverse"},"Search Address Reverse API")," using just a single API call. The API allows caller to batch up to 10,000 queries per request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Create a dataframe that\'s tied to it\'s column names\ndf = spark.createDataFrame(\n    (\n        (\n            (48.858561, 2.294911),\n            (47.639765, -122.127896),\n            (47.621028, -122.348170),\n            (47.734012, -122.102737),\n        )\n    ),\n    StructType([StructField("lat", DoubleType()), StructField("lon", DoubleType())]),\n)\n\n# Run the Azure Maps geocoder to enhance the data with location data\nrev_geocoder = (\n    ReverseAddressGeocoder()\n    .setSubscriptionKey(azureMapsKey)\n    .setLatitudeCol("lat")\n    .setLongitudeCol("lon")\n    .setOutputCol("output")\n)\n\n# Show the results of your text query in a table format\n\ndisplay(\n    rev_geocoder.transform(FixedMiniBatchTransformer().setBatchSize(10).transform(df))\n    .select(\n        col("*"),\n        col("output.response.addresses")\n        .getItem(0)\n        .getField("address")\n        .getField("freeformAddress")\n        .alias("In Polygon"),\n        col("output.response.addresses")\n        .getItem(0)\n        .getField("address")\n        .getField("country")\n        .alias("Intersecting Polygons"),\n    )\n    .drop("output")\n)\n')),(0,r.kt)("h2",{id:"check-point-in-polygon-sample"},"Check Point In Polygon sample"),(0,r.kt)("p",null,"This API returns a boolean value indicating whether a point is inside a set of polygons. The polygon can be added to you creator account using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/maps/data/upload-preview"},(0,r.kt)("strong",{parentName:"a"},"Data Upload API")),". The API then returnrs a unique udid to reference the polygon."),(0,r.kt)("h3",{id:"setup-geojson-polygons-in-your-azure-maps-creator-account"},"Setup geojson Polygons in your azure maps creator account"),(0,r.kt)("p",null,"Based on where the creator resource was provisioned, we need to prefix the appropriate geography code to the azure maps URL. In this example, the assumption is that the creator resource was provisioned in ",(0,r.kt)("inlineCode",{parentName:"p"},"East US 2")," Location and hence we pick ",(0,r.kt)("inlineCode",{parentName:"p"},"us")," as our geo prefix. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import time\nimport json\n\n# Choose a geography, you want your data to reside in.\n# Allowed values\n# us => North American datacenters\n# eu -> European datacenters\nurl_geo_prefix = "us"\n\n# Upload a geojson with polygons in them\nr = http.post(\n    f"https://{url_geo_prefix}.atlas.microsoft.com/mapData/upload?api-version=1.0&dataFormat=geojson&subscription-key={azureMapsKey}",\n    json={\n        "type": "FeatureCollection",\n        "features": [\n            {\n                "type": "Feature",\n                "properties": {"geometryId": "test_geometry"},\n                "geometry": {\n                    "type": "Polygon",\n                    "coordinates": [\n                        [\n                            [-122.14290618896484, 47.67856488312544],\n                            [-122.03956604003906, 47.67856488312544],\n                            [-122.03956604003906, 47.7483271435476],\n                            [-122.14290618896484, 47.7483271435476],\n                            [-122.14290618896484, 47.67856488312544],\n                        ]\n                    ],\n                },\n            }\n        ],\n    },\n)\n\nlong_running_operation = r.headers.get("location")\ntime.sleep(30)  # Sometimes this may take upto 30 seconds\nprint(f"Status Code: {r.status_code}, Long Running Operation: {long_running_operation}")\n# This Operation completes in approximately 5 ~ 15 seconds\nuser_data_id_resource_url = json.loads(\n    http.get(f"{long_running_operation}&subscription-key={azureMapsKey}").content\n)["resourceLocation"]\nuser_data_id = json.loads(\n    http.get(f"{user_data_id_resource_url}&subscription-key={azureMapsKey}").content\n)["udid"]\n')),(0,r.kt)("h3",{id:"use-the-function-to-check-if-point-is-in-polygon"},"Use the function to check if point is in polygon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Create a dataframe that\'s tied to it\'s column names\ndf = spark.createDataFrame(\n    (\n        (\n            (48.858561, 2.294911),\n            (47.639765, -122.127896),\n            (47.621028, -122.348170),\n            (47.734012, -122.102737),\n        )\n    ),\n    StructType([StructField("lat", DoubleType()), StructField("lon", DoubleType())]),\n)\n\n# Run the Azure Maps geocoder to enhance the data with location data\ncheck_point_in_polygon = (\n    CheckPointInPolygon()\n    .setSubscriptionKey(azureMapsKey)\n    .setGeography(url_geo_prefix)\n    .setUserDataIdentifier(user_data_id)\n    .setLatitudeCol("lat")\n    .setLongitudeCol("lon")\n    .setOutputCol("output")\n)\n\n# Show the results of your text query in a table format\ndisplay(\n    check_point_in_polygon.transform(df)\n    .select(\n        col("*"),\n        col("output.result.pointInPolygons").alias("In Polygon"),\n        col("output.result.intersectingGeometries").alias("Intersecting Polygons"),\n    )\n    .drop("output")\n)\n')),(0,r.kt)("h3",{id:"cleanup"},"Cleanup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'res = http.delete(\n    f"https://{url_geo_prefix}.atlas.microsoft.com/mapData/{user_data_id}?api-version=1.0&subscription-key={azureMapsKey}"\n)\n')))}h.isMDXComponent=!0}}]);