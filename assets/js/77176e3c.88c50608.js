"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[1928],{150:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var l=s(5893),r=s(1151);const n={sidebar_position:2},i="About the Project",o={id:"project",title:"About the Project",description:"Project Structure",source:"@site/docs/project.md",sourceDirName:".",slug:"/project",permalink:"/docs/project",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Tutorial",permalink:"/docs/tutorial/"}},c={},d=[{value:"Project Structure",id:"project-structure",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"about-the-project",children:"About the Project"}),"\n",(0,l.jsx)(t.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,l.jsxs)(t.p,{children:["At the minimum, all Squirrels projects contain a ",(0,l.jsx)(t.a,{href:"./topics/project-file",children:"squirrels.yml"})," file for project configurations. In addition, a Squirrels project may also include the following resources:"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Resource"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Git_Ignored"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"./topics/environcfg",children:"environcfg.yml"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Contains configuration specific to the server/environment, or environment variables that must not be shared"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"./topics/models-sql",children:"models/"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Folder for data models (as Jinja SQL or Python files)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"pyconfigs/"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Contains only Python files for configurations or functionality written in Python (other than Python models)."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"./cli/deps",children:"sqrl_packages/"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Git projects used as package dependencies (downloaded with ",(0,l.jsx)(t.a,{href:"./cli/deps",children:"sqrl deps"}),") are stored here"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"target/"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["All output files generated by Squirrels (such as compiled SQL files from ",(0,l.jsx)(t.a,{href:"./cli/compile",children:"sqrl compile"}),") are created here"]})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["Within the ",(0,l.jsx)(t.code,{children:"models/"})," and ",(0,l.jsx)(t.code,{children:"pyconfigs/"})," folders, the Squirrels framework can also make use of the following resources in the project:"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Folder"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Resource"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"models"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"./topics/models-sql",children:"dbviews/"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Data models that run against an external database"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"models"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"./topics/models-sql",children:"federates/"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Data models that join together one or more other models using an embedded database"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"pyconfigs"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"./topics/database",children:"connections.py"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Specifies a set of database connections as SQLAlchemy engines that the project uses in Python. Only needed if not specified already in YAML in the ",(0,l.jsx)(t.a,{href:"./topics/project-file",children:"squirrels.yml"})," file"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"pyconfigs"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"./topics/parameters",children:"parameters.py"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Specifies a set of widget parameters (in Python) for datasets to use, typically used if the widget parameters are not specified in the ",(0,l.jsx)(t.a,{href:"./topics/project-file",children:"squirrels.yml"})," file (in YAML, which can be more verbose)"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"pyconfigs"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"./topics/context",children:"context.py"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:'Python script that processes real-time parameter selections into meaningful Python variables (or "context variables") that can be used by models'})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"pyconfigs"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"./topics/auth",children:"auth.py"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Lets you create your own user model and method for authenticating against your source of users"})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["You may also add other folders/files in your Squirrels project that's not referenced directly by the framework, but may be referenced by existing Squirrels files. For instance, it is common to create a ",(0,l.jsx)(t.code,{children:"macros"})," folder to store Jinja files used by data models written in Jinja SQL."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var l=s(7294);const r={},n=l.createContext(r);function i(e){const t=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(n.Provider,{value:t},e.children)}}}]);