"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[1219],{2270:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=s(5893),i=s(1151);const l={sidebar_position:1.1},r="Squirrels Project Settings",d={id:"topics/settings",title:"Squirrels Project Settings",description:"|Setting Key|Default|Description|",source:"@site/docs/topics/settings.md",sourceDirName:"topics",slug:"/topics/settings",permalink:"/docs/topics/settings",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1},sidebar:"tutorialSidebar",previous:{title:"Squirrels Project File",permalink:"/docs/topics/project-file"},next:{title:"Environment Configuration File",permalink:"/docs/topics/environcfg"}},a={},o=[{value:"In-Memory Database Setting",id:"in-memory-database-setting",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"squirrels-project-settings",children:"Squirrels Project Settings"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Setting Key"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Default"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"auth.token.expire_minutes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"30"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The length of time (in minutes) that the token for an authenticated user is valid for."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"parameters.cache.size"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1024"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The maximum number of responses that the LRU cache of the parameters API can store."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"parameters.cache.ttl_minutes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The time to live (in minutes) for the LRU cache of the parameters API. No cache when value is 0."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"results.cache.size"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"128"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The maximum number of responses that the LRU cache of the results API can store."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"results.cache.ttl_minutes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The time to live (in minutes) for the LRU cache of the results API. No cache when value is 0."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"connections.default_name_used"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"default"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The name of the connection to use when no name is specified (for parameters from source and dbview models)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"selection_test_sets.default_name_used"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"default"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["The name of the selection_test_set used when no ",(0,n.jsx)(t.code,{children:"--test-set"})," option is specified for the ",(0,n.jsx)(t.a,{href:"../cli/compile",children:"sqrl compile"})," command."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"defaults.federates.materialized"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"table"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["The default materialization for federate models that are used by other SQL models. Valid options are ",(0,n.jsx)(t.strong,{children:"table"})," and ",(0,n.jsx)(t.strong,{children:"view"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"in_memory_database"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"sqlite"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Valid options are ",(0,n.jsx)(t.strong,{children:"sqlite"})," and ",(0,n.jsx)(t.strong,{children:"duckdb"}),'. More details in the "In-Memory Database Setting" section below.']})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"in-memory-database-setting",children:"In-Memory Database Setting"}),"\n",(0,n.jsxs)(t.p,{children:["After the dbview models are run on their target database, the results are loaded into RAM in a temporary database. The in-memory database system is determined by the ",(0,n.jsx)(t.strong,{children:"in_memory_database"})," setting. Then, there's the option to run federate models against the in-memory database, which means that this setting also affects the SQL dialect used for federate models."]}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.strong,{children:"sqlite"})," is used and no additional setup is required. To use the ",(0,n.jsx)(t.strong,{children:"duckdb"})," setting, the ",(0,n.jsx)(t.strong,{children:"duckdb"})," optional dependency must be installed with squirrels."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'pip install "squirrels[duckdb]"\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"For the in-memory database, sqlite is optimal when the dbview model results are small (few rows), and the queries for the federate models are complex. Duckdb is optimal when the dbview model results are large (many rows) and federate models are used to apply further aggregations."})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>r});var n=s(7294);const i={},l=n.createContext(i);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);