"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1589],{1033:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=s(5893),i=s(1151);const a={title:"Watsonx Assistant Setup",description:"Watsonx Assistant Setup",custom_edit_url:null},o="Watsonx Assistant Setup",r={id:"Create/Watsonx Assistant Setup",title:"Watsonx Assistant Setup",description:"Watsonx Assistant Setup",source:"@site/docs/02-Create/03-Watsonx Assistant Setup.mdx",sourceDirName:"02-Create",slug:"/Create/Watsonx Assistant Setup",permalink:"/solution-AskCSM/Create/Watsonx Assistant Setup",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Watsonx Assistant Setup",description:"Watsonx Assistant Setup",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Watson Discovery Setup",permalink:"/solution-AskCSM/Create/Watson Discovery Setup"},next:{title:"Watsonx.ai Setup",permalink:"/solution-AskCSM/Create/Watsonxai Setup"}},l={},c=[{value:"Pre-Requisites",id:"pre-requisites",level:3},{value:"Let&#39;s Create a new Assistant!",id:"lets-create-a-new-assistant",level:2},{value:"Upload/Download actions",id:"uploaddownload-actions",level:2},{value:"Create Custom Extension: NeuralSeek",id:"create-custom-extension-neuralseek",level:2},{value:"Pre-Requisites",id:"pre-requisites-1",level:3},{value:"Create NeuralSeek custom extension <a></a>",id:"create-neuralseek-custom-extension-",level:3},{value:"Create WA action to trigger NeuralSeek Search <a></a>",id:"create-wa-action-to-trigger-neuralseek-search-",level:3},{value:"No action matches Setup",id:"no-action-matches-setup",level:4},{value:"Modify AI Assistant",id:"modify-ai-assistant",level:2},{value:"Conversation Starters",id:"conversation-starters",level:3},{value:"Advanced Watsonx Assistant Configuration",id:"advanced-watsonx-assistant-configuration",level:2},{value:"Autocorrection",id:"autocorrection",level:3},{value:"Dynamic Links",id:"dynamic-links",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"watsonx-assistant-setup",children:"Watsonx Assistant Setup"}),"\n",(0,n.jsx)(t.p,{children:"Details regarding the technical solution on how we configured Watsons Assistant to enable Core capabilities."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Some examples of Key capabilities are:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Ask a Question"}),"\n",(0,n.jsx)(t.li,{children:"Licensing Information"}),"\n",(0,n.jsx)(t.li,{children:"Current Catalog Consumption"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Here's a preview of what AskCSM Homepage could look like!","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.img,{src:s(1336).Z+"",width:"2452",height:"1402"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Here's an example interaction of what AskCSM could help you with!","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.img,{src:s(6445).Z+"",width:"829",height:"743"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:""}),"\n",(0,n.jsx)(t.h3,{id:"pre-requisites",children:"Pre-Requisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Access to watsonx Assistant"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"lets-create-a-new-assistant",children:"Let's Create a new Assistant!"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["When you first launch the experience, you\u2019ll be prompted to create your first assistant:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Give it a name that represents the domain of topics you want it to handle."}),"\n",(0,n.jsxs)(t.li,{children:["Choose what language you want it to speak before continuing. watsonx Assistant can handle virtually any global language.\n",(0,n.jsx)(t.img,{src:s(6140).Z+"",width:"1676",height:"980"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["From here, you\u2019ll start on the home page of your brand-new assistant:\n",(0,n.jsx)(t.img,{src:s(8668).Z+"",width:"3442",height:"1652"})]}),"\n",(0,n.jsx)(t.li,{children:"Now it\u2019s time to build your first conversation. Follow along with our example or create your own!"}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Reference: ",(0,n.jsx)(t.a,{href:"https://www.ibm.com/blog/getting-started-with-the-new-watson-assistant-part-i-the-build-guide/?c=Watson%20Assistant",children:"Getting started with watsonx Assistant part I: the build guide"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"uploaddownload-actions",children:"Upload/Download actions"}),"\n",(0,n.jsx)(t.p,{children:"To reinstate a backup copy of actions that you exported from another service instance or environment, import the JSON file of the actions you exported."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["On the Actions page, click Global settings Gear icon on upper-right corner.\n",(0,n.jsx)(t.img,{src:s(6502).Z+"",width:"3440",height:"1656"})]}),"\n",(0,n.jsx)(t.li,{children:"To upload: On the Upload/Download tab, drag and drop a JSON file onto the tab or click to select a file from your local system, then click Upload."}),"\n",(0,n.jsxs)(t.li,{children:['To download: On the Upload/Download tab, click on the "Download" button to export action.json file.\n',(0,n.jsx)(t.img,{src:s(7652).Z+"",width:"3114",height:"1370"})]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Reference: ",(0,n.jsx)(t.a,{href:"https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-upload-download-actions",children:"Uploading or downloading all actions"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"create-custom-extension-neuralseek",children:"Create Custom Extension: NeuralSeek"}),"\n",(0,n.jsx)(t.h3,{id:"pre-requisites-1",children:"Pre-Requisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Access to NeuralSeek instance that has been integrated with Watson Discovery and watsonx.ai"}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"create-neuralseek-custom-extension-",children:["Create NeuralSeek custom extension ",(0,n.jsx)("a",{name:"create-neuralseek-custom-extension"})]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'In Watson Assistant, on the "Integrations" tab of Watson Assistant, click "Build Custom Extension" then "Next".'}),"\n",(0,n.jsx)(t.li,{children:'Name the extension "NeuralSeek" and give a brief description. Click "Next".'}),"\n",(0,n.jsx)(t.li,{children:'Open another browser tab and navigate to NeuralSeek -> "Integrate" tab -> Download "Custom Extension OpenApi File".'}),"\n",(0,n.jsx)(t.li,{children:'Navigate to Watson Assitant browser tab. Upload NeuralSeek OpenApi file into Waston Assiatant. Click "Next" then "Finish".'}),"\n",(0,n.jsx)(t.li,{children:'On the new "NeuralSeek" extension tile that appears, click "Add", "Add", then "Next".'}),"\n",(0,n.jsx)(t.li,{children:'On the authentication screen, select "API key auth", and enter your api key as shown in NeuralSeek "Integrate" page.'}),"\n",(0,n.jsx)(t.li,{children:'Click "Next", "Finish", then "Close".'}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"create-wa-action-to-trigger-neuralseek-search-",children:["Create WA action to trigger NeuralSeek Search ",(0,n.jsx)("a",{name:"create-wa-action-to-trigger-neuralseek-search"})]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'On the "Actions" tab of Watson Assistant, click "Create Action". Choose "Quick Start with templates", then select  "NeuralSeek Starter Kit" -> "Select this starter kit" -> "Add templatess".'}),"\n",(0,n.jsx)(t.li,{children:'Open the "NeuralSeek Search" action.'}),"\n",(0,n.jsxs)(t.li,{children:['In step 3, in the "And then" section, click "edit extension",',"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'in the Extension dropdown select "NeuralSeek"'}),"\n",(0,n.jsx)(t.li,{children:'in the Operation dropdown select "Seek an answer from NeuralSeek".'}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Set parameters.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Set ",(0,n.jsx)(t.code,{children:"question"})," To ",(0,n.jsx)(t.code,{children:"query_text"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Set ",(0,n.jsx)(t.code,{children:"user_session.system.session_id"})," to Expression ",(0,n.jsx)(t.code,{children:"context.system.session_id"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Set ",(0,n.jsx)(t.code,{children:"options.includeSourceResults"})," to ",(0,n.jsx)(t.code,{children:"True"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:'"Save" and "Close" action'}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Extension setup will look similar to screenshot below\n",(0,n.jsx)(t.img,{src:s(3207).Z+"",width:"1646",height:"1252"})]}),"\n",(0,n.jsx)(t.h4,{id:"no-action-matches-setup",children:"No action matches Setup"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'Navigate to "All items" -> "Set by assistant" -> "No action matches".'}),"\n",(0,n.jsx)(t.li,{children:'Click on the "No action matches" action and delete existing steps.'}),"\n",(0,n.jsx)(t.li,{children:'Click "New Step". In the "And then" section, select "go to a subaction"  -> select "NeuralSeek Search" in the dropdown options -> "Apply".'}),"\n",(0,n.jsx)(t.li,{children:'"Save" and "Close"'}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["References: ",(0,n.jsx)(t.a,{href:"https://developer.ibm.com/tutorials/integrate-neuralseek-with-watson-assistant-and-watson-discovery/",children:"Integrate NeuralSeek with Watson Assistant and Watson Discovery"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"modify-ai-assistant",children:"Modify AI Assistant"}),"\n",(0,n.jsx)(t.h3,{id:"conversation-starters",children:"Conversation Starters"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:['Navigate to the "Preview" tab. Click the blue "Customize web chat" button.\n',(0,n.jsx)(t.img,{src:s(7147).Z+"",width:"3428",height:"1660"})]}),"\n",(0,n.jsxs)(t.li,{children:['Navigate to the "Home screen" tab. Modify the Greeting messages and Conversation Starters to match frequently asked questions.\n',(0,n.jsx)(t.img,{src:s(761).Z+"",width:"3440",height:"1684"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"advanced-watsonx-assistant-configuration",children:"Advanced Watsonx Assistant Configuration"}),"\n",(0,n.jsx)(t.h3,{id:"autocorrection",children:"Autocorrection"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"To tackle typos, we leveraged watsonx assistant capability of Autocorrection."}),"\n",(0,n.jsxs)(t.li,{children:['To enable this feature, navitate to Actions -> All items -> Created by you. Click "Global Settings" on the upper right corner.\n',(0,n.jsx)(t.img,{src:s(797).Z+"",width:"3382",height:"946"})]}),"\n",(0,n.jsxs)(t.li,{children:["Navigate to the Autocorrection tab and make sure the toggle is switched to on.\n",(0,n.jsx)(t.img,{src:s(7937).Z+"",width:"3150",height:"1168"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:["In NeuralSeek Search action, set query_text to expression ",(0,n.jsx)(t.code,{children:"input.text"})]}),". This will allow the autocorrected input to be passed to NeuralSeek extension. Originally, query_text was set to expression ",(0,n.jsx)(t.code,{children:"input.original_text"}),", if users entered typos, the typoed text would be passed to NeuralSeek.\n",(0,n.jsx)(t.img,{src:s(7862).Z+"",width:"2418",height:"792"})]}),"\n",(0,n.jsxs)(t.li,{children:["Reference: ",(0,n.jsx)(t.a,{href:"https://cloud.ibm.com/docs/assistant-data?topic=assistant-data-dialog-runtime-spell-check",children:"Correcting user input"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"dynamic-links",children:"Dynamic Links"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"To create dynamic links based on user input, you could store the user input in a variable and then appending the variable to a specific URL within watsonx assistant action step. Then, allow assistant to output the link as part of its response."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},6445:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/AskCSM_interaction_preview-5ce5dff671e33353a03e3aad3ce766e7.png"},1336:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/AskCSM_preview-403eecd10ef96affca50bf53fd8b1fb6.png"},761:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/assistant-customize-homescreen-617a7596db26e6d825d98ff2f6506f53.png"},7147:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/assistant-preview-customize-web-chat-df546bfb8bd870a8ce38d75f7f1fc587.png"},6140:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/create-wxa-1-6ffc968099abe9d0cef11a64cd71b6d3.png"},8668:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/create-wxa-2-a7b5bbac73a4cb1fc6f594186831fd50.png"},6502:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/upload-wxa-actions1-2024aa4e6270e45dbf2388c98b3f82fb.png"},7652:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/upload-wxa-actions2-ce01477f81046ee1cf292e53b4207024.png"},7937:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/watsonx-assistant-autocorrection-df23046f1adae9b6d16f9dbc5b5565cd.png"},797:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/watsonx-assistant-global-settings-fa7fe20cf9e9fba1095fed96de9b9467.png"},3207:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/watsonx-assistant-neuralseek-extension-setup-a429eefd74aaaacf4bbd831312213809.png"},7862:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/watsonx-assistant-neuralseek-search-inputtext-a30f37380cba2331451812a2c4ac6416.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var n=s(7294);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);