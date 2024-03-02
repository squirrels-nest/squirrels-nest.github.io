"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[9671],{7876:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(5893),n=t(1151);const i={sidebar_position:1},r="Introduction",o={id:"intro",title:"Introduction",description:"Overview",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial",permalink:"/docs/tutorial/"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Main Features",id:"main-features",level:2},{value:"Dynamic Queries with SQL Jinja or Python",id:"dynamic-queries-with-sql-jinja-or-python",level:4},{value:"Model Dependencies",id:"model-dependencies",level:4},{value:"Cascading Parameters",id:"cascading-parameters",level:4},{value:"API Access to Datasets",id:"api-access-to-datasets",level:4},{value:"Context Variables",id:"context-variables",level:4},{value:"In-memory Caching",id:"in-memory-caching",level:4},{value:"Authentication",id:"authentication",level:4},{value:"Reusable Packages",id:"reusable-packages",level:4},{value:"REST API Types",id:"rest-api-types",level:2},{value:"The Dataset Workflow",id:"the-dataset-workflow",level:2}];function c(e){const a={a:"a",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(a.p,{children:"Squirrels is a low-code REST API framework designed to simplify and automate data analytics. It eases the burden on data / analytics engineers and eliminates the need for API engineers to create data analytics APIs. With a primary focus on reusability and flexibility, Squirrels allows for query logic to be shared across multiple front-end applications. The framework makes it easy to create REST APIs that generate complex SQL queries using query parameters for selected parameter values, and delivering tabular results that can change behaviour based on selected values."}),"\n",(0,s.jsxs)(a.p,{children:["For those familiar with ",(0,s.jsx)(a.a,{href:"https://www.getdbt.com/",children:"dbt"}),", Squirrels is essentially the dbt for real-time dynamic data analytics. In fact, the project structure and CLI are intentionally made similar to dbt such that engineers who know dbt can pick up Squirrels easily."]}),"\n",(0,s.jsx)(a.h2,{id:"main-features",children:"Main Features"}),"\n",(0,s.jsx)(a.h4,{id:"dynamic-queries-with-sql-jinja-or-python",children:"Dynamic Queries with SQL Jinja or Python"}),"\n",(0,s.jsx)(a.p,{children:"Squirrels utilizes Jinja as a templating language for rendering complex SQL queries. These templates, known as 'models', enable the dynamic generation of queries based on business needs. Additionally, Squirrels supports Python to generate dynamic queries, providing a more flexible tool of handling data transformations through sqlalchemy ORM or pandas dataframes (if preferred)."}),"\n",(0,s.jsx)(a.h4,{id:"model-dependencies",children:"Model Dependencies"}),"\n",(0,s.jsxs)(a.p,{children:["Similar to ",(0,s.jsx)(a.a,{href:"https://www.getdbt.com/",children:"dbt"}),", the ",(0,s.jsx)(a.strong,{children:"ref"})," function is available to define model dependencies, which is useful in creating real-time data pipelines. Models can even join the results of queries coming from different databases!"]}),"\n",(0,s.jsx)(a.h4,{id:"cascading-parameters",children:"Cascading Parameters"}),"\n",(0,s.jsx)(a.p,{children:"The framework supports dynamic cascading parameter widgets that adjust based on the selected values of other parameters. These parameters can be specified as hard-coded configurations, or fetched from database lookup tables. Models can use the selected parameter values to change behaviour."}),"\n",(0,s.jsx)(a.h4,{id:"api-access-to-datasets",children:"API Access to Datasets"}),"\n",(0,s.jsx)(a.p,{children:'Applications can access "datasets" and their associated parameters via well-defined API endpoints. Each dataset can be configured with a target model, a set of applicable widget parameters, and access permissions. During development, a testing UI is available to conveniently test your APIs.'}),"\n",(0,s.jsx)(a.h4,{id:"context-variables",children:"Context Variables"}),"\n",(0,s.jsx)(a.p,{children:'Squirrels allows for the creation of "context variables" in Python files which can then be used within your models. These context variables are useful to leverage your favourite Python IDE (for features like autofill suggestions) to more conveniently define variables based on selected parameter values.'}),"\n",(0,s.jsx)(a.h4,{id:"in-memory-caching",children:"In-memory Caching"}),"\n",(0,s.jsx)(a.p,{children:"After the first API call, the framework caches API responses for parameters and datasets in memory (if caching is enabled), enhancing the performance of subsequent calls."}),"\n",(0,s.jsx)(a.h4,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsx)(a.p,{children:"The framework supports defining custom user models and methods for authenticating a user given username and password. Both the parameter widgets and data model can change behaviour based on the authenticated user if needed."}),"\n",(0,s.jsx)(a.h4,{id:"reusable-packages",children:"Reusable Packages"}),"\n",(0,s.jsx)(a.p,{children:"Reuse functionality across different Squirrels projects through package installations."}),"\n",(0,s.jsx)(a.h2,{id:"rest-api-types",children:"REST API Types"}),"\n",(0,s.jsx)(a.p,{children:"Every Squirrels project defines a set of related datasets under a single version contolled project. When running the API server for a Squirrels projects, the following API types become available."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Token API"})," - Retrieve a short-lived API token if the provided credentials are valid"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Datasets Catalog API"})," - Provides a catalog of datasets available under the project (can vary with authentication)"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Parameters API"})," - Provides information of the parameter widgets for a given dataset"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Dataset Result API"})," - Provides the tabular result of a dataset given parameter selections"]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["More details are available on the ",(0,s.jsx)(a.a,{href:"./client/rest-api",children:"REST API Types"}),' page under "Client Usage".']}),"\n",(0,s.jsx)(a.h2,{id:"the-dataset-workflow",children:"The Dataset Workflow"}),"\n",(0,s.jsx)(a.p,{children:"Although a dataset is only associated to one target model, the target model may depend on multiple upstream models. When calling the dataset result API, the following happens behind the scenes:"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"Parameter selections are validated, and context variables are created."}),"\n",(0,s.jsx)(a.li,{children:"Models are compiled from SQL templates / python functions in upstream order and concurrently if possible. Compilation results are based on parameter selections, context variables, and authenticated user. Note that the compiled models should form a DAG (directed acyclic graph)."}),"\n",(0,s.jsx)(a.li,{children:"The DAG is validated to contain no cycles (i.e., the DAG is truly acyclic). This is separate from the step above since validation is done in a non-concurrent manner."}),"\n",(0,s.jsxs)(a.li,{children:['Models are executed in downstream order and concurrently if possible. Some models, called "dbviews", are run against external databases, while other models, called "federates", run in a temporary in-memory database (choice of sqlite or duckdb) created in the API server. Federates can join results of dbviews or other federates via the ',(0,s.jsx)(a.strong,{children:"ref"})," function (dbviews cannot use ",(0,s.jsx)(a.strong,{children:"ref"}),")."]}),"\n",(0,s.jsx)(a.li,{children:"Once the target model is complete, the results are loaded to JSON and provided as the REST API response."}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>r});var s=t(7294);const n={},i=s.createContext(n);function r(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);