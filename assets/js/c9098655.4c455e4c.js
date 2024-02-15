"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[5342],{1908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(5893),i=n(1151);const o={sidebar_position:5},r="Context File",a={id:"topics/context",title:"Context File",description:"The context file (pyconfigs/context.py) is where you can process runtime inputs, such as (but not limited to) parameter selections, into meaningful variables that can be used in the data models. The file contains a single main function with the arguments ctx and sqrl.",source:"@site/docs/topics/context.md",sourceDirName:"topics",slug:"/topics/context",permalink:"/docs/topics/context",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Widget Parameters",permalink:"/docs/topics/parameters"},next:{title:"SQL Models",permalink:"/docs/topics/models-sql"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"context-file",children:"Context File"}),"\n",(0,s.jsxs)(t.p,{children:["The context file (",(0,s.jsx)(t.code,{children:"pyconfigs/context.py"}),") is where you can process runtime inputs, such as (but not limited to) parameter selections, into meaningful variables that can be used in the data models. The file contains a single ",(0,s.jsx)(t.strong,{children:"main"})," function with the arguments ",(0,s.jsx)(t.strong,{children:"ctx"})," and ",(0,s.jsx)(t.strong,{children:"sqrl"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ctx"}),' (short for "context) is the output dictionary that is written to in the function. The keys should be strings, and the values can be anything.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"sqrl"})," is an object of type ",(0,s.jsx)(t.a,{href:"../python/arguments/ContextArgs",children:"ContextArgs"})," that contains inputs/utilities you may choose to use. Some examples include:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"sqrl.prms"})," attribute, a dictionary for parameter names to the associated Parameter object."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"sqrl.user"})," attribute, the authorized user if authenticated else None. The attributes for the user can be defined in the User model in ",(0,s.jsx)(t.code,{children:"pyconfigs/auth.py"})," (more details can be found at ",(0,s.jsx)(t.a,{href:"./auth",children:"Authentication"}),")."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"sqrl.traits"})," attributes, a dictionary of the dataset traits (defined in ",(0,s.jsx)(t.a,{href:"./project-file",children:"squirrels.yml"}),") for the running dataset"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["This file is run for every dataset request, and this same file is used for all datasets. Thus, it is important to use ",(0,s.jsx)(t.em,{children:"if statements"})," to avoid running blocks of code that don't apply to the situation (for instance, context variables for parameters that don't exist for the dataset)."]}),"\n",(0,s.jsx)(t.p,{children:"Although it is often possible to define variables similarly in Jinja (with reusable macros), IDEs tend to have better support for providing auto-fill suggestions in Python than in Jinja. Not to mention, there are many situations where it's much easier to process variables in Python than in Jinja."}),"\n",(0,s.jsxs)(t.p,{children:["The following is a sample ",(0,s.jsx)(t.strong,{children:"main"}),' function in the "context.py" file.']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'def main(ctx: dict[str, Any], sqrl: sr.ContextArgs) -> None:\n    if "group_by" in sqrl.prms:\n        group_by_param: sr.MultiSelectParameter = sqrl.prms["group_by"]\n        dimension_columns: list[str] = group_by_param.get_selected("columns")\n        ctx["group_by_cols"] = ",".join(dimension_columns)\n'})}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"If you wish to use some custom Python function in Jinja, it's possible to do so by setting a context variable to the function!"}),(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.code,{children:"context.py"}),":"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'def my_func(args):\n    ...\n\nctx["my_function"] = my_func\n'})}),(0,s.jsx)(t.p,{children:"In Jinja:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jinja",children:'{%- set my_func = ctx["my_function"] -%}\n\n{{ my_func("some_args") }}\n'})})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(7294);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);