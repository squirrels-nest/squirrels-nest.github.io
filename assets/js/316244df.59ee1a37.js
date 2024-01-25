"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[298],{906:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=s(5893),i=s(1151);const r={sidebar_position:5},o="5. Test the REST APIs",l={id:"tutorial/test-api",title:"5. Test the REST APIs",description:"To activate the API server, simply run:",source:"@site/docs/tutorial/5-test-api.md",sourceDirName:"tutorial",slug:"/tutorial/test-api",permalink:"/docs/tutorial/test-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Create the SQL Queries",permalink:"/docs/tutorial/queries"},next:{title:"6. Use the Context File",permalink:"/docs/tutorial/context"}},c={},a=[{value:"Test the Rendered SQL Queries",id:"test-the-rendered-sql-queries",level:2},{value:"Using Selection Test Sets",id:"using-selection-test-sets",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"5-test-the-rest-apis",children:"5. Test the REST APIs"}),"\n",(0,n.jsx)(t.p,{children:"To activate the API server, simply run:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sqrl run\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Then, in a web browser, go to ",(0,n.jsx)(t.code,{children:"http://localhost:4465/"})," to interact with the dataset APIs you've just created using the Squirrels Testing UI!"]}),"\n",(0,n.jsx)(t.p,{children:'Remember to shut down the API server by pressing "Ctrl+C" before proceeding.'}),"\n",(0,n.jsx)(t.h2,{id:"test-the-rendered-sql-queries",children:"Test the Rendered SQL Queries"}),"\n",(0,n.jsx)(t.p,{children:"In practice, you may wish to review what the rendered SQL queries look like (for some set of parameter selections) before actually running the queries."}),"\n",(0,n.jsxs)(t.p,{children:["To do so for the ",(0,n.jsx)(t.code,{children:"weather_by_time"})," dataset (using the default parameter selections), run:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sqrl compile --dataset weather_by_time\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This creates the folder path ",(0,n.jsx)(t.code,{children:"target/compile/default/weather_by_time"})," with the compiled SQL queries for all the relevant SQL models (without actually running them)."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["You can also use the short form ",(0,n.jsx)(t.code,{children:"-d"})," instead of ",(0,n.jsx)(t.code,{children:"--dataset"}),". If you omit this option, all datasets in the project will be compiled."]})}),"\n",(0,n.jsx)(t.p,{children:"If you only care about compiling one model, you can run:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sqrl compile --dataset weather_by_time --select weather_by_time\n"})}),"\n",(0,n.jsxs)(t.p,{children:["In addition to writing the file in the ",(0,n.jsx)(t.code,{children:"target"})," folder, this will print out the compiled SQL query as well."]}),"\n",(0,n.jsxs)(t.p,{children:["If ",(0,n.jsx)(t.code,{children:"--dataset"})," is not specified, then the ",(0,n.jsx)(t.code,{children:"--select"})," option is ignored. This is because the ",(0,n.jsx)(t.strong,{children:"traits"})," are undefined without specifying the dataset."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["You can also use the short form ",(0,n.jsx)(t.code,{children:"-s"})," instead of ",(0,n.jsx)(t.code,{children:"--select"}),". You can also run the sql query with the ",(0,n.jsx)(t.code,{children:"--runquery"})," or ",(0,n.jsx)(t.code,{children:"-r"})," option. When used in conjunction with ",(0,n.jsx)(t.code,{children:"-s"})," or ",(0,n.jsx)(t.code,{children:"--select"}),", this will compile and run all the upstream models as well. You can find the results as csv files in the ",(0,n.jsx)(t.code,{children:"target"})," folder."]})}),"\n",(0,n.jsx)(t.h2,{id:"using-selection-test-sets",children:"Using Selection Test Sets"}),"\n",(0,n.jsx)(t.p,{children:"You can also test on non-default parameter selections. Suppose you want to group by month instead of grouping by year (the default parameter selection)."}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.code,{children:"squirrels.yml"})," file, replace the ",(0,n.jsx)(t.strong,{children:"selection_test_sets"})," section with:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"selection_test_sets:\n  - name: group_by_month\n    parameters:\n      group_by_dim: '2'\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The '2' is the ID for \"Month\" option defined in ",(0,n.jsx)(t.code,{children:"parameters.py"}),". Now you can use the ",(0,n.jsx)(t.code,{children:"--test-set"})," or ",(0,n.jsx)(t.code,{children:"-t"})," option on the ",(0,n.jsx)(t.strong,{children:"compile"})," command to specify the test set to compile with:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sqrl compile --dataset weather_by_time --test-set group_by_month\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This creates files in the ",(0,n.jsx)(t.code,{children:"target/compile/group_by_month/weather_by_time"})," folder."]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.code,{children:"sqrl compile --help"})," or the ",(0,n.jsx)(t.a,{href:"../cli/compile",children:"compile command"})," page for more details."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>o});var n=s(7294);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);