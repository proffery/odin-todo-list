(()=>{var t={705:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);n&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},476:t=>{"use strict";t.exports=function(t){var e=t[1],r=t[3];if(!r)return e;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},890:(t,e,r)=>{"use strict";r.d(e,{Z:()=>c});var n=r(476),a=r.n(n),o=r(705),i=r.n(o)()(a());i.push([t.id,":root {\r\n    --main-font: clamp(16px, calc(16px + (28 - 16) * ((100vw - 360px) / 1560)), 28px);\r\n    --font-color: rgb(0, 0, 0);\r\n    --background-color-main: rgb(230, 243, 241);\r\n    --background-color-block: rgb(255, 255, 255);\r\n    --shadow-window: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\r\n    --shadow-line: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    outline: none           ;\r\n}\r\n\r\nbody {\r\n    background-color: var(--background-color-main);\r\n    padding: 1rem;\r\n    font-size: var(--main-font);\r\n}\r\n\r\n.main-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows:  1fr 5fr;\r\n    gap: 1rem;\r\n}\r\n\r\n.header {\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n.project-header, .tasks-header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n.projects, .tasks {\r\n    background-color: var(--background-color-block);\r\n    padding: 1rem;\r\n    box-shadow: var(--shadow-window);\r\n    border-radius: .5rem;\r\n}\r\n\r\n.projects {\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.tasks {\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n\r\n.task-completed {\r\n    text-decoration:line-through;\r\n}\r\n\r\n.icon-container{\r\n    display: flex;\r\n}\r\n\r\n.project, .task {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    text-align: left;\r\n    padding: .5rem;\r\n    border-radius: .2rem;\r\n    transition: all ease-in .1s;\r\n}\r\n\r\n.project:focus, .task:hover {\r\n    box-shadow: var(--shadow-line);\r\n    transform: scale(1.005);\r\n}\r\n\r\n.add-projects-button, .add-tasks-button, .check-mark, .remove-button, .edit-button {\r\n    width: var(--main-font);\r\n    opacity: .6;\r\n}\r\n\r\n\r\n.add-project-window, .add-task-window {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 50%;\r\n    transform: translateY(-35%);\r\n    transform: translateX(-50%);\r\n    height: fit-content;\r\n    width: fit-content;\r\n    box-shadow: var(--shadow-window);\r\n    background-color: var(--background-color-block);\r\n    padding: 1.5rem;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.task-low {\r\n    background-color: rgb(231, 255, 231);\r\n}\r\n\r\n.task-medium {\r\n    background-color: rgb(255, 251, 212);\r\n}\r\n\r\n.task-hight {\r\n    background-color: rgb(255, 223, 232);\r\n}\r\n.buttons-holder {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.add-project-button, .add-task-button, .cancel-button {\r\n    margin-left: 1rem;\r\n    margin-right: 1rem;\r\n    width: calc(var(--main-font) + 2rem);\r\n}\r\n \r\ninput, select, textarea{\r\n    display: flex;\r\n    margin-bottom: 1rem;\r\n    max-width: 13rem;\r\n    min-width:fit-content;\r\n    max-height: 10rem;\r\n}\r\n\r\nlabel {\r\n    display: flex;\r\n    font-size: calc(var(--main-font) - 3px);\r\n\r\n}\r\n\r\n#input-status {\r\n    display: flex;\r\n    margin-left: auto;\r\n}\r\n\r\n.footer {\r\n    position: static;\r\n    display: flex;\r\n    bottom: 0;\r\n    /* left: 50%;\r\n    transform: translateX(-50%); */\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: calc(var(--main-font) - 3px);\r\n    padding: 1rem;\r\n}\r\n\r\n.github-mark {\r\n    width: var(--main-font);\r\n    transition: all .3s;\r\n}\r\n\r\n.github-mark:hover {\r\n    transform: rotate(360deg);\r\n}\r\n\r\na {\r\n    color: var(--font-color);\r\n}\r\n\r\n.warning {\r\n    display: flex;\r\n    position:relative;\r\n    transform: translateY(-60%);\r\n    border: 1px solid #f39389;\r\n    border-radius: 2px;\r\n    padding: .3rem;\r\n    background-color: #fbd8d4;\r\n    color: #3b3c40;\r\n    font-size: calc(var(--main-font) - 5px);\r\n}","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"AAAA;IACI,iFAAiF;IACjF,0BAA0B;IAC1B,2CAA2C;IAC3C,4CAA4C;IAC5C,mJAAmJ;IACnJ,+EAA+E;AACnF;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,8CAA8C;IAC9C,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA;IACI,+CAA+C;IAC/C,aAAa;IACb,gCAAgC;IAChC,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;;AAGA;IACI,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;IAChB,cAAc;IACd,oBAAoB;IACpB,2BAA2B;AAC/B;;AAEA;IACI,8BAA8B;IAC9B,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,WAAW;AACf;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,2BAA2B;IAC3B,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;IAClB,gCAAgC;IAChC,+CAA+C;IAC/C,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uCAAuC;;AAE3C;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;IACT;kCAC8B;IAC9B,mBAAmB;IACnB,uBAAuB;IACvB,uCAAuC;IACvC,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,2BAA2B;IAC3B,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;IACd,yBAAyB;IACzB,cAAc;IACd,uCAAuC;AAC3C",sourcesContent:[":root {\r\n    --main-font: clamp(16px, calc(16px + (28 - 16) * ((100vw - 360px) / 1560)), 28px);\r\n    --font-color: rgb(0, 0, 0);\r\n    --background-color-main: rgb(230, 243, 241);\r\n    --background-color-block: rgb(255, 255, 255);\r\n    --shadow-window: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\r\n    --shadow-line: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    outline: none           ;\r\n}\r\n\r\nbody {\r\n    background-color: var(--background-color-main);\r\n    padding: 1rem;\r\n    font-size: var(--main-font);\r\n}\r\n\r\n.main-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows:  1fr 5fr;\r\n    gap: 1rem;\r\n}\r\n\r\n.header {\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n.project-header, .tasks-header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n.projects, .tasks {\r\n    background-color: var(--background-color-block);\r\n    padding: 1rem;\r\n    box-shadow: var(--shadow-window);\r\n    border-radius: .5rem;\r\n}\r\n\r\n.projects {\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.tasks {\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n\r\n.task-completed {\r\n    text-decoration:line-through;\r\n}\r\n\r\n.icon-container{\r\n    display: flex;\r\n}\r\n\r\n.project, .task {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    text-align: left;\r\n    padding: .5rem;\r\n    border-radius: .2rem;\r\n    transition: all ease-in .1s;\r\n}\r\n\r\n.project:focus, .task:hover {\r\n    box-shadow: var(--shadow-line);\r\n    transform: scale(1.005);\r\n}\r\n\r\n.add-projects-button, .add-tasks-button, .check-mark, .remove-button, .edit-button {\r\n    width: var(--main-font);\r\n    opacity: .6;\r\n}\r\n\r\n\r\n.add-project-window, .add-task-window {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 50%;\r\n    transform: translateY(-35%);\r\n    transform: translateX(-50%);\r\n    height: fit-content;\r\n    width: fit-content;\r\n    box-shadow: var(--shadow-window);\r\n    background-color: var(--background-color-block);\r\n    padding: 1.5rem;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.task-low {\r\n    background-color: rgb(231, 255, 231);\r\n}\r\n\r\n.task-medium {\r\n    background-color: rgb(255, 251, 212);\r\n}\r\n\r\n.task-hight {\r\n    background-color: rgb(255, 223, 232);\r\n}\r\n.buttons-holder {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.add-project-button, .add-task-button, .cancel-button {\r\n    margin-left: 1rem;\r\n    margin-right: 1rem;\r\n    width: calc(var(--main-font) + 2rem);\r\n}\r\n \r\ninput, select, textarea{\r\n    display: flex;\r\n    margin-bottom: 1rem;\r\n    max-width: 13rem;\r\n    min-width:fit-content;\r\n    max-height: 10rem;\r\n}\r\n\r\nlabel {\r\n    display: flex;\r\n    font-size: calc(var(--main-font) - 3px);\r\n\r\n}\r\n\r\n#input-status {\r\n    display: flex;\r\n    margin-left: auto;\r\n}\r\n\r\n.footer {\r\n    position: static;\r\n    display: flex;\r\n    bottom: 0;\r\n    /* left: 50%;\r\n    transform: translateX(-50%); */\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: calc(var(--main-font) - 3px);\r\n    padding: 1rem;\r\n}\r\n\r\n.github-mark {\r\n    width: var(--main-font);\r\n    transition: all .3s;\r\n}\r\n\r\n.github-mark:hover {\r\n    transform: rotate(360deg);\r\n}\r\n\r\na {\r\n    color: var(--font-color);\r\n}\r\n\r\n.warning {\r\n    display: flex;\r\n    position:relative;\r\n    transform: translateY(-60%);\r\n    border: 1px solid #f39389;\r\n    border-radius: 2px;\r\n    padding: .3rem;\r\n    background-color: #fbd8d4;\r\n    color: #3b3c40;\r\n    font-size: calc(var(--main-font) - 5px);\r\n}"],sourceRoot:""}]);const c=i},379:t=>{"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var o={},i=[],c=0;c<t.length;c++){var s=t[c],u=n.base?s[0]+n.base:s[0],l=o[u]||0,d="".concat(u," ").concat(l);o[u]=l+1;var A=r(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==A)e[A].references++,e[A].updater(p);else{var m=a(p,n);n.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,a){var o=n(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var c=r(o[i]);e[c].references--}for(var s=n(t,a),u=0;u<o.length;u++){var l=r(o[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:t=>{"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},596:()=>{Object.defineProperty(String.prototype,"capitalizeFirstLetter",{value:function(){return this.charAt(0).toUpperCase()+this.slice(1)},writable:!0,configurable:!0}),Object.defineProperty(String.prototype,"stringCutter",{value:function(){return this.length<=15?this:this.substring(0,15)+"..."},writable:!0,configurable:!0})}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={id:n,exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),r.nc=void 0,(()=>{"use strict";var t,e=(t=[],{getProjectList:function(){return t},addProjectToList:function(e){t.push(e)},removeProjectFromList:function(e){t.splice(e,1)},getProject:function(e){return t[e]}});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function a(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,"string");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(a.key),"symbol"===n(o)?o:String(o)),a)}var o}var o=function(){function t(e,r,n,a,o,i){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e.length>0?this.title=e:console.log("Task title can't be empty!"),this.description=r,""!==n){var c=new Date("".concat(n,"Z"));this.dueDate=new Date(c.getTime()+6e4*c.getTimezoneOffset())}else this.dueDate=new Date;"low"===a.toLowerCase()||"medium"===a.toLowerCase()||"hight"===a.toLowerCase()?this.priority=a:this.priority="low",this.notes=o,this.complete=i}var e,r;return e=t,(r=[{key:"getTitle",value:function(){return this.title}},{key:"setTitle",value:function(t){this.title=t}},{key:"getDescription",value:function(){return this.description}},{key:"setDescription",value:function(t){this.description=t}},{key:"getDueDate",value:function(){return this.dueDate}},{key:"setDueDate",value:function(t){regexDate.test(dueDate)&&(this.dueDate=t),this.dueDate=new Date}},{key:"getPriority",value:function(){return this.priority}},{key:"setPriority",value:function(t){this.priority="low"===t||"medium"===t||"hight"===t?t:"low"}},{key:"getNotes",value:function(){return this.priority}},{key:"setNotes",value:function(t){this.notes=t}},{key:"getComplete",value:function(){return this.complete}},{key:"setComplete",value:function(t){this.complete=t}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,a=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===i(a)?a:String(a)),n)}var a}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e.length>0?this.name=e:console.log("Project name can't be empty!"),this.tasks=[]}var e,r;return e=t,(r=[{key:"getName",value:function(){return this.name}},{key:"setName",value:function(t){t.length>0?this.name=t:console.log("Project name can't be empty!")}},{key:"getTasks",value:function(){return this.tasks}},{key:"getTask",value:function(t){return this.tasks[t]}},{key:"setTask",value:function(t,e){this.tasks[t]=e}},{key:"addTask",value:function(t){this.tasks.push(t)}},{key:"removeTask",value:function(t){this.tasks.length>0?this.tasks.splice(t,1):console.log("".concat(this.name," is empty"))}},{key:"isEmpty",value:function(){return 0==this.tasks.length}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u=r(379),l=r.n(u),d=r(795),A=r.n(d),p=r(569),m=r.n(p),g=r(565),f=r.n(g),v=r(216),b=r.n(v),h=r(589),C=r.n(h),y=r(890),k={};k.styleTagTransform=C(),k.setAttributes=f(),k.insert=m().bind(null,"head"),k.domAPI=A(),k.insertStyleElement=b(),l()(y.Z,k),y.Z&&y.Z.locals&&y.Z.locals,r.p;const B=r.p+"image/trash.svg",x=r.p+"image/edit.svg";r.p,r(596);var w,I=document.querySelector(".projects"),j=document.querySelector(".tasks"),E=document.querySelector(".add-projects-button"),T=document.querySelector(".add-tasks-button"),S="0",P=function(){function t(){document.querySelectorAll(".project").forEach((function(t){return t.remove()}));for(var t=0;t<e.getProjectList().length;t++){var n=document.createElement("div");n.classList.add("project"),n.textContent="".concat(e.getProject(t).name),n.setAttribute("value","".concat(t)),n.setAttribute("tabindex","0"),I.appendChild(n),n.addEventListener("click",f);var a=document.createElement("img");a.classList.add("remove-button"),a.src=B,a.alt="Remove button",n.appendChild(a),a.addEventListener("click",d)}var o;E.addEventListener("click",c),T.addEventListener("click",r),0!=e.getProjectList().length?(o=document.querySelectorAll(".project"),g(),e.getProjectList().length>0?(o[S].focus(),u(S)):(o[0].focus(),u(0))):T.removeEventListener("click",r)}function r(t){n(),w=t;var e=document.createElement("div");e.classList.add("add-task-window"),j.appendChild(e);var r=document.createElement("label");r.setAttribute("for","name"),r.textContent="Name:",e.appendChild(r);var o=document.createElement("input");o.classList.add("input-task-name"),o.type="text",o.id="name",e.appendChild(o);var i=document.createElement("label");i.setAttribute("for","descr"),i.textContent="Description:",e.appendChild(i);var c=document.createElement("input");c.classList.add("input-task-descr"),c.type="text",c.id="descr",e.appendChild(c);var s=document.createElement("label");s.setAttribute("for","date"),s.textContent="Date:",e.appendChild(s);var u=document.createElement("input");u.classList.add("input-task-date"),u.type="datetime-local",u.id="date",e.appendChild(u);var l=document.createElement("label");l.setAttribute("for","input-priority"),l.textContent="Priority:";var d=document.createElement("select");d.className="input-priority",d.id="input-priority";var A=document.createElement("option");A.textContent="Low",A.value="low",A.setAttribute("selected","");var m=document.createElement("option");m.textContent="Medium",m.value="medium";var g=document.createElement("option");g.textContent="Hight",g.value="hight",d.append(A,m,g),e.append(l,d);var f=document.createElement("textarea");f.className="input-notes",f.setAttribute("cols","23"),f.setAttribute("rows","5"),f.placeholder="Notes",e.appendChild(f);var v=document.createElement("label");v.setAttribute("for","input-status"),v.textContent="Completed:";var b=document.createElement("input");b.type="checkbox",b.id="input-status",b.className="input-status",v.appendChild(b),e.append(v);var h=document.createElement("div");h.classList.add("buttons-holder"),e.appendChild(h);var C=document.createElement("button");C.classList.add("add-task-button"),C.setAttribute("type","button"),C.textContent="Ok",h.appendChild(C),C.addEventListener("click",p);var y=document.createElement("button");y.classList.add("cancel-button"),y.setAttribute("type","button"),y.textContent="Cancel",h.appendChild(y),y.addEventListener("click",a),o.focus()}function n(){T.removeEventListener("click",r),E.removeEventListener("click",c),document.querySelectorAll(".project").forEach((function(t){return t.removeEventListener("click",f)}));var t=document.querySelectorAll(".remove-button");t.forEach((function(t){return t.removeEventListener("click",d)})),t.forEach((function(t){return t.removeEventListener("click",A)})),document.querySelectorAll(".edit-button").forEach((function(t){return t.removeEventListener("click",l)})),document.querySelectorAll(".task").forEach((function(t){return t.removeEventListener("click",l)}))}function a(){document.querySelector(".add-task-window").remove(),t()}function i(){document.querySelector(".add-project-window").remove(),t()}function c(){n();var t=document.createElement("div");t.classList.add("add-project-window"),I.appendChild(t);var e=document.createElement("label");e.setAttribute("for","input-project-name"),e.textContent="Project name:";var r=document.createElement("input");r.classList.add("input-project-name"),r.id="input-project-name",r.type="text",t.append(e,r);var a=document.createElement("div");a.classList.add("buttons-holder"),t.appendChild(a);var o=document.createElement("button");o.classList.add("add-project-button"),o.setAttribute("type","button"),o.textContent="Add",a.appendChild(o),o.addEventListener("click",m);var c=document.createElement("button");c.classList.add("cancel-button"),c.setAttribute("type","button"),c.textContent="Cancel",a.appendChild(c),c.addEventListener("click",i),r.focus()}function u(t){for(var r=0;r<e.getProject(t).tasks.length;r++){var n=document.createElement("div");n.classList.add("task"),"low"===e.getProject(t).getTask(r).priority&&n.classList.add("task-low"),"medium"===e.getProject(t).getTask(r).priority&&n.classList.add("task-medium"),"hight"===e.getProject(t).getTask(r).priority&&n.classList.add("task-hight"),n.textContent="".concat(e.getProject(t).getTask(r).title.capitalizeFirstLetter(),":\n            ").concat(e.getProject(t).getTask(r).description.capitalizeFirstLetter(),"\n            (").concat(e.getProject(t).getTask(r).dueDate.getDate(),"/").concat(e.getProject(t).getTask(r).dueDate.getMonth()+1,"/").concat(e.getProject(t).getTask(r).dueDate.getFullYear(),")\n            ").concat(e.getProject(t).getTask(r).notes.capitalizeFirstLetter().stringCutter()),n.setAttribute("value","".concat(r)),n.setAttribute("projectvalue","".concat(t)),n.setAttribute("tabindex","-1"),j.appendChild(n);var a=document.createElement("div");a.className="icon-container",n.appendChild(a),e.getProject(t).getTask(r).complete&&n.classList.add("task-completed"),n.addEventListener("click",l);var o=document.createElement("img");o.className="edit-button",o.src=x,o.setAttribute("alt","Edit task"),a.appendChild(o),o.addEventListener("click",l);var i=document.createElement("img");i.className="remove-button",i.src=B,i.setAttribute("alt","Remove task"),a.appendChild(i),i.addEventListener("click",A)}}function l(t){t.stopPropagation(),w=t,r(t);var n=document.querySelector(".input-task-name"),a=document.querySelector(".input-task-descr"),o=document.querySelector(".input-priority"),i=document.querySelector('label[for="input-priority"]'),c=document.querySelector(".input-notes"),s=document.querySelector(".input-status"),u=document.querySelector('label[for="input-status"]'),l=document.querySelector(".input-task-date"),d=document.querySelector(".add-task-button"),A=document.querySelector(".add-task-window");if(w.target.getAttribute("class").includes("task")){n.value="".concat(e.getProject(t.target.getAttribute("projectvalue")).getTask(t.target.getAttribute("value")).title),a.value="".concat(e.getProject(t.target.getAttribute("projectvalue")).getTask(t.target.getAttribute("value")).description),o.value="".concat(e.getProject(t.target.getAttribute("projectvalue")).getTask(t.target.getAttribute("value")).priority),c.value="".concat(e.getProject(t.target.getAttribute("projectvalue")).getTask(t.target.getAttribute("value")).notes),s.checked=e.getProject(t.target.getAttribute("projectvalue")).getTask(t.target.getAttribute("value")).complete;var p=e.getProject(t.target.getAttribute("projectvalue")).getTask(t.target.getAttribute("value")).dueDate,m=new Date(p.getTime()-6e4*p.getTimezoneOffset()).toISOString().slice(0,-1);l.value=m,n.setAttribute("readonly",""),a.setAttribute("readonly",""),"low"===e.getProject(t.target.getAttribute("projectvalue")).getTask(t.target.getAttribute("value")).priority&&A.classList.add("task-low"),"medium"===e.getProject(t.target.getAttribute("projectvalue")).getTask(t.target.getAttribute("value")).priority&&A.classList.add("task-medium"),"hight"===e.getProject(t.target.getAttribute("projectvalue")).getTask(t.target.getAttribute("value")).priority&&A.classList.add("task-hight"),s.checked?u.textContent="Task is completed!":u.textContent="Task is not completed!",c.setAttribute("readonly",""),s.setAttribute("readonly",""),l.setAttribute("readonly",""),s.remove(),o.remove(),i.remove(),d.remove()}else{n.value="".concat(e.getProject(t.target.parentNode.parentNode.getAttribute("projectvalue")).getTask(t.target.parentNode.parentNode.getAttribute("value")).title),a.value="".concat(e.getProject(t.target.parentNode.parentNode.getAttribute("projectvalue")).getTask(t.target.parentNode.parentNode.getAttribute("value")).description),o.value="".concat(e.getProject(t.target.parentNode.parentNode.getAttribute("projectvalue")).getTask(t.target.parentNode.parentNode.getAttribute("value")).priority),c.value="".concat(e.getProject(t.target.parentNode.parentNode.getAttribute("projectvalue")).getTask(t.target.parentNode.parentNode.getAttribute("value")).notes),s.checked=e.getProject(t.target.parentNode.parentNode.getAttribute("projectvalue")).getTask(t.target.parentNode.parentNode.getAttribute("value")).complete;var g=e.getProject(t.target.parentNode.parentNode.getAttribute("projectvalue")).getTask(t.target.parentNode.parentNode.getAttribute("value")).dueDate,f=new Date(g.getTime()-6e4*g.getTimezoneOffset()).toISOString().slice(0,-1);l.value=f,console.log(w.target.getAttribute("class"))}}function d(r){r.stopPropagation(),S=0,e.removeProjectFromList(r.target.parentNode.getAttribute("value")),g(),t()}function A(r){r.stopPropagation(),e.getProject(r.target.parentNode.parentNode.getAttribute("projectvalue")).removeTask(r.target.parentNode.parentNode.getAttribute("value")),g(),t()}function p(r){r.preventDefault();var n=document.querySelector(".input-task-name"),i=document.querySelector(".input-task-descr"),c=document.querySelector(".input-task-date"),s=document.querySelector(".input-priority"),u=document.querySelector(".input-notes"),l=document.querySelector(".input-status");n.value.length<1?v(n,"Task name can't be emty!"):"add-tasks-button"===w.target.getAttribute("class")?(e.getProject(S).addTask(new o(n.value,i.value,c.value,s.value,u.value,l.checked)),a(),t()):"edit-button"===w.target.getAttribute("class")&&(e.getProject(S).setTask(w.target.parentNode.parentNode.getAttribute("value"),new o(n.value,i.value,c.value,s.value,u.value,l.checked)),a(),t())}function m(r){r.preventDefault();var n=document.querySelector(".input-project-name");n.value.length<1?v(n,"Project name can't be emty!"):(e.addProjectToList(new s(n.value)),i(),t())}function g(){document.querySelectorAll(".task").forEach((function(t){return t.remove()}))}function f(t){g(),S=t.target.getAttribute("value"),u(t.target.getAttribute("value"))}function v(t,e){var r=document.createElement("div");r.className="warning",r.textContent=e;var n=setTimeout((function(){r.parentNode.removeChild(r),n=-1}),2e3);document.body.contains(r)?clearTimeout(n):t.parentNode.insertBefore(r,t.nextSibling)}return{projects:t}}(),L=new o("Today task","finish this project",new Date,"hight","",!0),N=new o("New Year","celebrations","12/31/23","medium","Happy New Year!",!1),q=new o("The Odin Project","Finish this course","02/1/24","medium","I CAN DO THIS",!1),D=new o("task","random task","6/11/22","ddd","notes",!0),z=new s("My goals");z.addTask(L),z.addTask(N),z.addTask(q),z.addTask(D),e.addProjectToList(z),P.projects()})()})();
//# sourceMappingURL=maine62da93d9af733bdb465.js.map