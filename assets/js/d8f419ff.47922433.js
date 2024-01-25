"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[1176],{2547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=r(5893),i=r(1151);const s={sidebar_position:4},o="4. Create the SQL Queries",a={id:"tutorial/queries",title:"4. Create the SQL Queries",description:"If you haven't already:",source:"@site/docs/tutorial/4-queries.md",sourceDirName:"tutorial",slug:"/tutorial/queries",permalink:"/docs/tutorial/queries",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. Create the Dataset Parameters",permalink:"/docs/tutorial/parameters"},next:{title:"5. Test the REST APIs",permalink:"/docs/tutorial/test-api"}},l={},d=[{value:"Define the Database View",id:"define-the-database-view",level:2},{value:"Define the Final View",id:"define-the-final-view",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"4-create-the-sql-queries",children:"4. Create the SQL Queries"}),"\n",(0,n.jsx)(t.p,{children:"If you haven't already:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["rename ",(0,n.jsx)(t.code,{children:"database_view1.sql"})," to ",(0,n.jsx)(t.code,{children:"aggr_weather_metrics.sql"})," in the ",(0,n.jsx)(t.code,{children:"models/dbviews"})," folder"]}),"\n",(0,n.jsxs)(t.li,{children:["rename ",(0,n.jsx)(t.code,{children:"dataset_example.sql"})," to ",(0,n.jsx)(t.code,{children:"weather_by_time.sql"})," in the ",(0,n.jsx)(t.code,{children:"models/federates"})," folder."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In these files, we will write a pipeline of sql transformations to return tabular results for the dataset."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["These sql query can be templated using Jinja, with access to a variety of dictionaries such as ",(0,n.jsx)(t.strong,{children:"prms"}),", ",(0,n.jsx)(t.strong,{children:"ctx"}),", and ",(0,n.jsx)(t.strong,{children:"traits"}),', which stand for "Parameter Set", "Context", and "Traits". More information about these variables can be found in the ',(0,n.jsx)(t.a,{href:"../topics/models-sql",children:"Create SQL Models"})," page. For now, just know that we can access parameters with ",(0,n.jsx)(t.code,{children:'prms["parameter name"]'})," in Jinja, and access selected value(s) of the parameter by calling certain methods (such as ",(0,n.jsx)(t.strong,{children:"get_selected"})," or ",(0,n.jsx)(t.strong,{children:"get_selected_label"}),")."]})}),"\n",(0,n.jsx)(t.h2,{id:"define-the-database-view",children:"Define the Database View"}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.code,{children:"aggr_weather_metrics.sql"}),", change its contents to the following:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'{%- set dim_col = prms["group_by_dim"].get_selected("dim_col") -%}\r\n{%- set order_col = prms["group_by_dim"].get_selected("order_by_col", default_field="dim_col") -%}\r\n\r\nSELECT {{ dim_col }}\r\n    , {{ order_col }} as ordering\r\n    , avg(temp_max) as temperature_high_C\r\n    , avg(temp_min) as temperature_low_C\r\n    , avg(precipitation) as precipitation_inches\r\n    , avg(wind) as wind_mph\r\nFROM weather\r\nGROUP BY {{ dim_col }}, {{ order_col }}\n'})}),"\n",(0,n.jsx)(t.p,{children:'This query finds the average temperature, precipitation level, and wind speed by group based the selected value of the "group_by_dim" parameter (by year, by year of month, by day of year, etc.).'}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"set"})," keyword is Jinja syntax for assigning variables. The ",(0,n.jsx)(t.code,{children:"prms['group_by_dim']"})," returns a ",(0,n.jsx)(t.strong,{children:"SingleSelectParameter"})," (as we previously defined in ",(0,n.jsx)(t.code,{children:"parameters.py"}),"), which contains the method ",(0,n.jsx)(t.strong,{children:"get_selected"})," for getting specific fields of the selected ",(0,n.jsx)(t.strong,{children:"SelectParameterOption"}),'. We\'ve previously defined "dim_col" in all the options in ',(0,n.jsx)(t.code,{children:"parameters.py"}),', but only specified "order_by_col" for one of the options. The ',(0,n.jsx)(t.strong,{children:"get_selected"}),' method has the argument "default_field" to pick "dim_col" for the "order_by_col" if "order_by_col" does not exist as a custom field.']})}),"\n",(0,n.jsx)(t.h2,{id:"define-the-final-view",children:"Define the Final View"}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.code,{children:"weather_by_time.sql"}),", change its contents to the following:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'{%- set dim_col = prms["group_by_dim"].get_selected("dim_col") -%}\r\n\r\nSELECT {{ dim_col }}\r\n    , temperature_high_C\r\n    , temperature_low_C\r\n    , precipitation_inches\r\n    , wind_mph\r\nFROM {{ ref("aggr_weather_metrics") }}\r\nORDER BY ordering\n'})}),"\n",(0,n.jsx)(t.p,{children:'This query takes the result of "aggr_weather_metrics" and orders by a column called "ordering".'}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"A few things to note here:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"ref"})," function only exists for federate models to reference other models (which can be other federates in addition to dbviews). In this case, the model depends on running the results from ",(0,n.jsx)(t.code,{children:"aggr_weather_metrics.sql"})," first."]}),"\n",(0,n.jsx)(t.li,{children:'In this query, we are selecting all columns except the "ordering" column, which is what we use in the "ORDER BY" clause instead.'}),"\n",(0,n.jsxs)(t.li,{children:['The first line where we set "dim_col" is repeated in ',(0,n.jsx)(t.code,{children:"aggr_weather_metrics.sql"}),". This can be avoided either by using ",(0,n.jsx)(t.a,{href:"https://ttl255.com/jinja2-tutorial-part-6-include-and-import/",children:"Jinja's include/import"}),", or by using the ",(0,n.jsx)(t.code,{children:"context.py"})," file which will be discussed later in the tutorial."]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>o});var n=r(7294);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);