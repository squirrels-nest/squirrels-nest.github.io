"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[2822],{4308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(5893),r=n(1151);const i={sidebar_position:6},s="6. Use the Context File",a={id:"tutorial/context",title:"6. Use the Context File",description:'Let\'s revisit the SQL/Jinja files. In both files, we use prms["groupbydim"].getselected("dimcol") to get the "dim_col" attribute from the selected parameter option. Writing this sort of "Python-like" code in a SQL/Jinja file can be a poor developer experience, especially if you\'re using an IDE that can provide auto-completion for Python files.',source:"@site/docs/tutorial/6-context.md",sourceDirName:"tutorial",slug:"/tutorial/context",permalink:"/docs/tutorial/context",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. Test the REST APIs",permalink:"/docs/tutorial/test-api"},next:{title:"What's Next?",permalink:"/docs/tutorial/what-next"}},c={},l=[];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"6-use-the-context-file",children:"6. Use the Context File"}),"\n",(0,o.jsxs)(t.p,{children:["Let's revisit the SQL/Jinja files. In both files, we use ",(0,o.jsx)(t.code,{children:'prms["group_by_dim"].get_selected("dim_col")'}),' to get the "dim_col" attribute from the selected parameter option. Writing this sort of "Python-like" code in a SQL/Jinja file can be a poor developer experience, especially if you\'re using an IDE that can provide auto-completion for Python files.']}),"\n",(0,o.jsxs)(t.p,{children:["Instead, we can use the ",(0,o.jsx)(t.code,{children:"pyconfigs/context.py"})," file to improve the developer experience. We use its ",(0,o.jsx)(t.strong,{children:"main"})," function to transform all selected parameter options into useful values (usually strings), set as dictionary values. Then, in the SQL/Jinja files, the dictionary values can be referenced using the ",(0,o.jsx)(t.strong,{children:"ctx"})," keyword."]}),"\n",(0,o.jsxs)(t.p,{children:["For example, we can update the ",(0,o.jsx)(t.code,{children:"context.py"})," file contents to look like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'from typing import Any\nimport squirrels as sr\n\ndef main(ctx: dict[str, Any], sqrl: sr.ContextArgs) -> None:\n    if "group_by_dim" in sqrl.prms:\n        group_by_param: sr.SingleSelectParameter = sqrl.prms["group_by_dim"]\n        ctx["dim_col"] = group_by_param.get_selected("dim_col")\n        ctx["order_col"] = group_by_param.get_selected("order_by_col", default_field="dim_col")\n'})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["Notice that type hints were added to ",(0,o.jsx)(t.strong,{children:"group_by_param"})," variable. This is useful to provide the IDE information on suggesting methods to auto-complete. For instance, with a list of suggestions, we don't have to memorize that the ",(0,o.jsx)(t.strong,{children:"get_selected"}),' method exists for SingleSelectParameter objects to get the selected parameter option, or memorize what method names are available for other parameter classes. When starting to type ".get", suggestions provided by the IDE would allow appropriate methods to be discovered more easily, if the IDE is configured to the correct Python interpreter / virtual environment.']})}),"\n",(0,o.jsx)(t.p,{children:"Now the SQL queries can be written more concisely to reference the context variables instead."}),"\n",(0,o.jsxs)(t.p,{children:["The contents for ",(0,o.jsx)(t.code,{children:"aggr_weather_metrics.sql"})," can be changed to the following."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:'SELECT {{ ctx["dim_col"] }}\n    , {{ ctx["order_col"] }} as ordering\n    , avg(temp_max) as temperature_high_C\n    , avg(temp_min) as temperature_low_C\n    , avg(precipitation) as precipitation_inches\n    , avg(wind) as wind_mph\nFROM weather\nGROUP BY {{ ctx["dim_col"] }}, {{ ctx["order_col"] }}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["In addition, the contents for ",(0,o.jsx)(t.code,{children:"weather_by_time.sql"})," can now be changed to the following."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:'SELECT {{ ctx["dim_col"] }}\n    , temperature_high_C\n    , temperature_low_C\n    , precipitation_inches\n    , wind_mph\nFROM {{ ref("aggr_weather_metrics") }}\nORDER BY ordering\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Congratulations, you have reached the end of the tutorial! We will it up to you to try out ",(0,o.jsx)(t.code,{children:"sqrl run"})," or ",(0,o.jsx)(t.code,{children:"sqrl compile"})," again on these new changes."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(7294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);