webpackJsonp([0,2],[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){var e={state:{conversation_list:[],history:[],chosen_conversation_id:0,enable_table_mode:!1}};i.default.component("settings-vue",{template:"#settings-vue-component",data:function(){return e.state},methods:{closeSettingsDialog:function(){var e=document.querySelector(".setting-dialog");e.classList.add("setting-not-visible")}}}),i.default.component("menu-vue",{template:"#menu-vue-component",data:function(){return e.state},methods:{switchConv:function(e){this.$root.$data.chosen_conversation_id=e;var t=document.querySelector(".mdl-layout__obfuscator");t.click()},openSettingsDialog:function(){var e=document.querySelector(".setting-dialog");e.classList.remove("setting-not-visible");var t=document.querySelector(".mdl-layout__obfuscator");t.click()}}}),i.default.component("detail-vue",{template:"#detail-vue-component",data:function(){return{sharedState:this.$root.$data,chosen_conversation_id:0,enable_table_mode:!1}},watch:{sharedState:{deep:!0,handler:function(){this.$root.$data.chosen_conversation_id!==this.chosen_conversation_id&&(this.chosen_conversation_id=this.$root.$data.chosen_conversation_id,this.$root.$data.history=u.conversations.get(this.chosen_conversation_id)),this.$root.$data.enable_table_mode!==this.enable_table_mode&&(this.enable_table_mode=this.$root.$data.enable_table_mode)}}},methods:{}});var t=new i.default({el:"#app",data:e.state});return console.log("Vue is live!"),t}var r=o(1),s=o(4),i=n(s),c=o(5),l=n(c),u={conversations:[]};!function(e){var t=a(),o=e.querySelector("#modal-example"),n=o.querySelector("button"),s=e.querySelector("#show-modal-example");o.showModal||l.default.registerDialog(o);var i=function(e){e&&o.close()},c=function(e){e&&o.showModal()};s.addEventListener("click",c),n.addEventListener("click",i);var d=(0,r.createSelectImageStream)("app-logo-container",t,u);d.subscribe(function(e){console.log(e)})}(document)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(2),a=o(3),r=function(e,t,o){function r(e){t.conversation_list=e.conversation_list,o.conversations=e.conversations;var n=document.querySelector(".upload-status");n.classList.remove("upload-complete-not-visible"),n=document.querySelector(".upload-progress-bar"),n.classList.add("progress-bar-not-visible"),n=document.querySelector(".upload-dialog"),n.classList.add("upload-not-visible");var a=document.querySelector("#load-complete"),r={message:"JSON loaded",timeout:5e3,actionHandler:function(e){e&&a.classList.remove("mdl-snackbar--active")},actionText:"Close"};a.MaterialSnackbar.showSnackbar(r),n=document.querySelector(".mdl-layout__drawer-button"),n.click()}function s(e){var t=e;if(t){var o=t[0];return o?(u.value=o.name,i.postMessage({file:o}),a.Observable.create(function(e){i.onmessage=function(t){t.data.conversation_list&&e.next({data:t.data})}})):a.Observable.just(0)}return a.Observable.just(0)}var i=new n,c="#"+e,l=document.querySelector(c+' input[type="file"].kev-inputFile'),u=document.querySelector(c+' input[type="text"].kev-inputFileName'),d=document.querySelector(c+" div.kev-dropzone"),v=document.querySelector(c+" .kev-img-container > img.kev-preview"),m=document.querySelector(c+" .kev-inputFile-btn"),f=a.Observable.create(function(e){m.addEventListener("click",function(t){e.next({event:t,context:this,action:"click"})},!1)}).do(function(e){console.log(e),l.click()}),p=a.Observable.create(function(e){l.addEventListener("change",function(t){e.next({event:t,context:this,action:"change"})},!1)}).flatMap(function(e){var t=document.querySelector(".upload-progress-bar");return t.classList.remove("progress-bar-not-visible"),s(e.context.files)}).do(function(e){0!==e&&r(e.data)}),b=a.Observable.create(function(e){d.addEventListener("dragenter",function(t){t.stopPropagation(),t.preventDefault(),e.next({event:t,context:this,action:"dragenter"})},!1)}),g=a.Observable.create(function(e){d.addEventListener("dragleave",function(t){t.stopPropagation(),t.preventDefault(),d.classList.remove("kev-dragover"),v.classList.remove("kev-dragover"),e.next({event:t,context:this,action:"dragleave"})},!1)}),h=a.Observable.create(function(e){d.addEventListener("dragover",function(t){t.stopPropagation(),t.preventDefault(),d.classList.add("kev-dragover"),v.classList.add("kev-dragover"),e.next({event:t,context:this,action:"dragover"})},!1)}),_=a.Observable.create(function(e){d.addEventListener("drop",function(t){t.stopPropagation(),t.preventDefault();var o=t.dataTransfer,n=o.files,a=document.querySelector(".upload-progress-bar");a.classList.remove("progress-bar-not-visible"),e.next({event:t,context:this,action:"drop",files:n})},!1)}).flatMap(function(e){return s(e.files)}).do(function(e){0!==e&&(r(e.data),d.classList.remove("kev-dragover"),v.classList.remove("kev-dragover"),d.classList.remove("kev-init"))}),S=a.Observable.merge(f,p,b,g,h,_);return S};t.createSelectImageStream=r},function(e,t,o){e.exports=function(){return new Worker(o.p+"dd241a729c195c70e5a4.worker.js")}},function(e,t){e.exports=Rx},function(e,t){e.exports=Vue},function(e,t){e.exports=dialogPolyfill}]);
//# sourceMappingURL=about_page.js.map