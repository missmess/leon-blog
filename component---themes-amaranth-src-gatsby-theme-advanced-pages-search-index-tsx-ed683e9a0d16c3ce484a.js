"use strict";(self.webpackChunkwang_blog=self.webpackChunkwang_blog||[]).push([[570],{7120:function(e,t,n){function s(e){return Array.isArray?Array.isArray(e):"[object Array]"===d(e)}n.r(t),n.d(t,{default:function(){return H}});const i=1/0;function r(e){return null==e?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-i?"-0":t}(e)}function c(e){return"string"==typeof e}function o(e){return"number"==typeof e}function a(e){return!0===e||!1===e||function(e){return l(e)&&null!==e}(e)&&"[object Boolean]"==d(e)}function l(e){return"object"==typeof e}function h(e){return null!=e}function u(e){return!e.trim().length}function d(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const g=e=>`Missing ${e} property in key`,f=e=>`Property 'weight' in key '${e}' must be a positive integer`,p=Object.prototype.hasOwnProperty;class m{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach((e=>{let n=x(e);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight})),this._keys.forEach((e=>{e.weight/=t}))}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function x(e){let t=null,n=null,i=null,r=1,o=null;if(c(e)||s(e))i=e,t=y(e),n=A(e);else{if(!p.call(e,"name"))throw new Error(g("name"));const s=e.name;if(i=s,p.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(f(s));t=y(s),n=A(s),o=e.getFn}return{path:t,id:n,weight:r,src:i,getFn:o}}function y(e){return s(e)?e:e.split(".")}function A(e){return s(e)?e.join("."):e}var M={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(e,t){let n=[],i=!1;const l=(e,t,u)=>{if(h(e))if(t[u]){const d=e[t[u]];if(!h(d))return;if(u===t.length-1&&(c(d)||o(d)||a(d)))n.push(r(d));else if(s(d)){i=!0;for(let e=0,n=d.length;e<n;e+=1)l(d[e],t,u+1)}else t.length&&l(d,t,u+1)}else n.push(e)};return l(e,c(t)?t.split("."):t,0),i?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const w=/[^ ]+/g;class v{constructor({getFn:e=M.getFn,fieldNormWeight:t=M.fieldNormWeight}={}){this.norm=function(e=1,t=3){const n=new Map,s=Math.pow(10,t);return{get(t){const i=t.match(w).length;if(n.has(i))return n.get(i);const r=1/Math.pow(i,.5*e),c=parseFloat(Math.round(r*s)/s);return n.set(i,c),c},clear(){n.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach(((e,t)=>{this._keysMap[e.id]=t}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,c(this.docs[0])?this.docs.forEach(((e,t)=>{this._addString(e,t)})):this.docs.forEach(((e,t)=>{this._addObject(e,t)})),this.norm.clear())}add(e){const t=this.size();c(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!h(e)||u(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach(((t,i)=>{let r=t.getFn?t.getFn(e):this.getFn(e,t.path);if(h(r))if(s(r)){let e=[];const t=[{nestedArrIndex:-1,value:r}];for(;t.length;){const{nestedArrIndex:n,value:i}=t.pop();if(h(i))if(c(i)&&!u(i)){let t={v:i,i:n,n:this.norm.get(i)};e.push(t)}else s(i)&&i.forEach(((e,n)=>{t.push({nestedArrIndex:n,value:e})}))}n.$[i]=e}else if(c(r)&&!u(r)){let e={v:r,n:this.norm.get(r)};n.$[i]=e}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function _(e,t,{getFn:n=M.getFn,fieldNormWeight:s=M.fieldNormWeight}={}){const i=new v({getFn:n,fieldNormWeight:s});return i.setKeys(e.map(x)),i.setSources(t),i.create(),i}function E(e,{errors:t=0,currentLocation:n=0,expectedLocation:s=0,distance:i=M.distance,ignoreLocation:r=M.ignoreLocation}={}){const c=t/e.length;if(r)return c;const o=Math.abs(s-n);return i?c+o/i:o?1:c}const j=32;function k(e,t,n,{location:s=M.location,distance:i=M.distance,threshold:r=M.threshold,findAllMatches:c=M.findAllMatches,minMatchCharLength:o=M.minMatchCharLength,includeMatches:a=M.includeMatches,ignoreLocation:l=M.ignoreLocation}={}){if(t.length>j)throw new Error(`Pattern length exceeds max of ${j}.`);const h=t.length,u=e.length,d=Math.max(0,Math.min(s,u));let g=r,f=d;const p=o>1||a,m=p?Array(u):[];let x;for(;(x=e.indexOf(t,f))>-1;){let e=E(t,{currentLocation:x,expectedLocation:d,distance:i,ignoreLocation:l});if(g=Math.min(e,g),f=x+h,p){let e=0;for(;e<h;)m[x+e]=1,e+=1}}f=-1;let y=[],A=1,w=h+u;const v=1<<h-1;for(let M=0;M<h;M+=1){let s=0,r=w;for(;s<r;){E(t,{errors:M,currentLocation:d+r,expectedLocation:d,distance:i,ignoreLocation:l})<=g?s=r:w=r,r=Math.floor((w-s)/2+s)}w=r;let o=Math.max(1,d-r+1),a=c?u:Math.min(d+r,u)+h,x=Array(a+2);x[a+1]=(1<<M)-1;for(let c=a;c>=o;c-=1){let s=c-1,r=n[e.charAt(s)];if(p&&(m[s]=+!!r),x[c]=(x[c+1]<<1|1)&r,M&&(x[c]|=(y[c+1]|y[c])<<1|1|y[c+1]),x[c]&v&&(A=E(t,{errors:M,currentLocation:s,expectedLocation:d,distance:i,ignoreLocation:l}),A<=g)){if(g=A,f=s,f<=d)break;o=Math.max(1,2*d-f)}}if(E(t,{errors:M+1,currentLocation:d,expectedLocation:d,distance:i,ignoreLocation:l})>g)break;y=x}const _={isMatch:f>=0,score:Math.max(.001,A)};if(p){const e=function(e=[],t=M.minMatchCharLength){let n=[],s=-1,i=-1,r=0;for(let c=e.length;r<c;r+=1){let c=e[r];c&&-1===s?s=r:c||-1===s||(i=r-1,i-s+1>=t&&n.push([s,i]),s=-1)}return e[r-1]&&r-s>=t&&n.push([s,r-1]),n}(m,o);e.length?a&&(_.indices=e):_.isMatch=!1}return _}function C(e){let t={};for(let n=0,s=e.length;n<s;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<s-n-1}return t}class b{constructor(e,{location:t=M.location,threshold:n=M.threshold,distance:s=M.distance,includeMatches:i=M.includeMatches,findAllMatches:r=M.findAllMatches,minMatchCharLength:c=M.minMatchCharLength,isCaseSensitive:o=M.isCaseSensitive,ignoreLocation:a=M.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:s,includeMatches:i,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:a},this.pattern=o?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(e,t)=>{this.chunks.push({pattern:e,alphabet:C(e),startIndex:t})},h=this.pattern.length;if(h>j){let e=0;const t=h%j,n=h-t;for(;e<n;)l(this.pattern.substr(e,j),e),e+=j;if(t){const e=h-j;l(this.pattern.substr(e),e)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}const{location:s,distance:i,threshold:r,findAllMatches:c,minMatchCharLength:o,ignoreLocation:a}=this.options;let l=[],h=0,u=!1;this.chunks.forEach((({pattern:t,alphabet:d,startIndex:g})=>{const{isMatch:f,score:p,indices:m}=k(e,t,d,{location:s+g,distance:i,threshold:r,findAllMatches:c,minMatchCharLength:o,includeMatches:n,ignoreLocation:a});f&&(u=!0),h+=p,f&&m&&(l=[...l,...m])}));let d={isMatch:u,score:u?h/this.chunks.length:1};return u&&n&&(d.indices=l),d}}class N{constructor(e){this.pattern=e}static isMultiMatch(e){return L(e,this.multiRegex)}static isSingleMatch(e){return L(e,this.singleRegex)}search(){}}function L(e,t){const n=e.match(t);return n?n[1]:null}class S extends N{constructor(e,{location:t=M.location,threshold:n=M.threshold,distance:s=M.distance,includeMatches:i=M.includeMatches,findAllMatches:r=M.findAllMatches,minMatchCharLength:c=M.minMatchCharLength,isCaseSensitive:o=M.isCaseSensitive,ignoreLocation:a=M.ignoreLocation}={}){super(e),this._bitapSearch=new b(e,{location:t,threshold:n,distance:s,includeMatches:i,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class I extends N{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,n=0;const s=[],i=this.pattern.length;for(;(t=e.indexOf(this.pattern,n))>-1;)n=t+i,s.push([t,n-1]);const r=!!s.length;return{isMatch:r,score:r?0:1,indices:s}}}const R=[class extends N{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},I,class extends N{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends N{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends N{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends N{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends N{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},S],$=R.length,F=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const O=new Set([S.type,I.type]);class G{constructor(e,{isCaseSensitive:t=M.isCaseSensitive,includeMatches:n=M.includeMatches,minMatchCharLength:s=M.minMatchCharLength,ignoreLocation:i=M.ignoreLocation,findAllMatches:r=M.findAllMatches,location:c=M.location,threshold:o=M.threshold,distance:a=M.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:s,findAllMatches:r,ignoreLocation:i,location:c,threshold:o,distance:a},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map((e=>{let n=e.trim().split(F).filter((e=>e&&!!e.trim())),s=[];for(let i=0,r=n.length;i<r;i+=1){const e=n[i];let r=!1,c=-1;for(;!r&&++c<$;){const n=R[c];let i=n.isMultiMatch(e);i&&(s.push(new n(i,t)),r=!0)}if(!r)for(c=-1;++c<$;){const n=R[c];let i=n.isSingleMatch(e);if(i){s.push(new n(i,t));break}}}return s}))}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:s}=this.options;e=s?e:e.toLowerCase();let i=0,r=[],c=0;for(let o=0,a=t.length;o<a;o+=1){const s=t[o];r.length=0,i=0;for(let t=0,o=s.length;t<o;t+=1){const o=s[t],{isMatch:a,indices:l,score:h}=o.search(e);if(!a){c=0,i=0,r.length=0;break}if(i+=1,c+=h,n){const e=o.constructor.type;O.has(e)?r=[...r,...l]:r.push(l)}}if(i){let e={isMatch:!0,score:c/i};return n&&(e.indices=r),e}}return{isMatch:!1,score:1}}}const D=[];function Q(e,t){for(let n=0,s=D.length;n<s;n+=1){let s=D[n];if(s.condition(e,t))return new s(e,t)}return new b(e,t)}const B="$and",W="$or",P="$path",U="$val",z=e=>!(!e[B]&&!e[W]),K=e=>({[B]:Object.keys(e).map((t=>({[t]:e[t]})))});function J(e,t,{auto:n=!0}={}){const i=e=>{let r=Object.keys(e);const o=(e=>!!e[P])(e);if(!o&&r.length>1&&!z(e))return i(K(e));if((e=>!s(e)&&l(e)&&!z(e))(e)){const s=o?e[P]:r[0],i=o?e[U]:e[s];if(!c(i))throw new Error((e=>`Invalid value for key ${e}`)(s));const a={keyId:A(s),pattern:i};return n&&(a.searcher=Q(i,t)),a}let a={children:[],operator:r[0]};return r.forEach((t=>{const n=e[t];s(n)&&n.forEach((e=>{a.children.push(i(e))}))})),a};return z(e)||(e=K(e)),i(e)}function V(e,t){const n=e.matches;t.matches=[],h(n)&&n.forEach((e=>{if(!h(e.indices)||!e.indices.length)return;const{indices:n,value:s}=e;let i={indices:n,value:s};e.key&&(i.key=e.key.src),e.idx>-1&&(i.refIndex=e.idx),t.matches.push(i)}))}function q(e,t){t.score=e.score}class H{constructor(e,t={},n){this.options={...M,...t},this.options.useExtendedSearch,this._keyStore=new m(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof v))throw new Error("Incorrect 'index' type");this._myIndex=t||_(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){h(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let n=0,s=this._docs.length;n<s;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,s-=1,t.push(i))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:s,shouldSort:i,sortFn:r,ignoreFieldNorm:a}=this.options;let l=c(e)?c(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,{ignoreFieldNorm:t=M.ignoreFieldNorm}){e.forEach((e=>{let n=1;e.matches.forEach((({key:e,norm:s,score:i})=>{const r=e?e.weight:null;n*=Math.pow(0===i&&r?Number.EPSILON:i,(r||1)*(t?1:s))})),e.score=n}))}(l,{ignoreFieldNorm:a}),i&&l.sort(r),o(t)&&t>-1&&(l=l.slice(0,t)),function(e,t,{includeMatches:n=M.includeMatches,includeScore:s=M.includeScore}={}){const i=[];return n&&i.push(V),s&&i.push(q),e.map((e=>{const{idx:n}=e,s={item:t[n],refIndex:n};return i.length&&i.forEach((t=>{t(e,s)})),s}))}(l,this._docs,{includeMatches:n,includeScore:s})}_searchStringList(e){const t=Q(e,this.options),{records:n}=this._myIndex,s=[];return n.forEach((({v:e,i:n,n:i})=>{if(!h(e))return;const{isMatch:r,score:c,indices:o}=t.searchIn(e);r&&s.push({item:e,idx:n,matches:[{score:c,value:e,norm:i,indices:o}]})})),s}_searchLogical(e){const t=J(e,this.options),n=(e,t,s)=>{if(!e.children){const{keyId:n,searcher:i}=e,r=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(t,n),searcher:i});return r&&r.length?[{idx:s,item:t,matches:r}]:[]}const i=[];for(let r=0,c=e.children.length;r<c;r+=1){const c=e.children[r],o=n(c,t,s);if(o.length)i.push(...o);else if(e.operator===B)return[]}return i},s=this._myIndex.records,i={},r=[];return s.forEach((({$:e,i:s})=>{if(h(e)){let c=n(t,e,s);c.length&&(i[s]||(i[s]={idx:s,item:e,matches:[]},r.push(i[s])),c.forEach((({matches:e})=>{i[s].matches.push(...e)})))}})),r}_searchObjectList(e){const t=Q(e,this.options),{keys:n,records:s}=this._myIndex,i=[];return s.forEach((({$:e,i:s})=>{if(!h(e))return;let r=[];n.forEach(((n,s)=>{r.push(...this._findMatches({key:n,value:e[s],searcher:t}))})),r.length&&i.push({idx:s,item:e,matches:r})})),i}_findMatches({key:e,value:t,searcher:n}){if(!h(t))return[];let i=[];if(s(t))t.forEach((({v:t,i:s,n:r})=>{if(!h(t))return;const{isMatch:c,score:o,indices:a}=n.searchIn(t);c&&i.push({score:o,key:e,value:t,idx:s,norm:r,indices:a})}));else{const{v:s,n:r}=t,{isMatch:c,score:o,indices:a}=n.searchIn(s);c&&i.push({score:o,key:e,value:s,norm:r,indices:a})}return i}}H.version="6.6.2",H.createIndex=_,H.parseIndex=function(e,{getFn:t=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){const{keys:s,records:i}=e,r=new v({getFn:t,fieldNormWeight:n});return r.setKeys(s),r.setIndexRecords(i),r},H.config=M,H.parseQuery=J,function(...e){D.push(...e)}(G)},8674:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var s=n(4506),i=n(6540),r=n(9196),c=n(3137),o=n(2146),a=n(8154),l=n(2942),h=n(8742),u=n(2885),d=n(3453),g=n(9100),f=(n(5852),n(4525),n(9985),n(7910)),p=(n(2114),n(3254),n(206),n(6348),n(2986),n(3312)),m=(n(3294),n(3799),n(9816),n(6082));const x=d.default.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1apjhjn-0"})(["display:flex;flex-direction:column;align-items:flex-start;gap:60px;padding:0;@media (max-width:","){gap:32px;padding:0 16px;}"],g.fi.sm),y=(0,d.default)(m.H2).withConfig({displayName:"styles__ListHead",componentId:"sc-1apjhjn-1"})(["width:100%;display:inline-flex;align-items:center;justify-content:center;font-weight:bolder;"]),A=d.default.img.withConfig({displayName:"styles__IndIcon",componentId:"sc-1apjhjn-2"})(["width:60px;height:auto;margin-right:24px;@media (max-width:","){width:40px;margin-right:8px;}"],g.fi.sm),M=d.default.div.withConfig({displayName:"styles__ResultBlock",componentId:"sc-1apjhjn-3"})(["display:flex;flex-direction:column;gap:24px;@media (max-width:","){gap:16px;}"],g.fi.sm),w=(0,d.default)(p.$h).withConfig({displayName:"styles__ResultBox",componentId:"sc-1apjhjn-4"})(["width:100%;display:flex;flex-direction:row;align-items:flex-start;background-color:white;box-shadow:4px 4px #ddd;padding:24px;gap:24px;transition:all 0.4s ease;@media (max-width:","){padding:16px;gap:16px;}:hover{transform:translate(-4px,-4px);box-shadow:8px 8px #ddd;}"],g.fi.sm),v=(0,d.default)(o.G).withConfig({displayName:"styles__ResultCover",componentId:"sc-1apjhjn-5"})(["flex:0 0 30%;max-height:200px;align-self:center;background-color:#f7f7f7;@media (max-width:","){display:none;}"],g.fi.lg),_=d.default.div.withConfig({displayName:"styles__ResultContentWrap",componentId:"sc-1apjhjn-6"})(["flex:1;display:flex;flex-direction:column;justify-content:flex-start;gap:12px;"]),E=d.default.div.withConfig({displayName:"styles__ResultContentTop",componentId:"sc-1apjhjn-7"})(["display:flex;justify-content:space-between;align-items:flex-start;"]),j=d.default.span.withConfig({displayName:"styles__ResultScore",componentId:"sc-1apjhjn-8"})(["color:var(--color-grey-200);font-size:14px;"]),k=d.default.div.withConfig({displayName:"styles__ResultTotal",componentId:"sc-1apjhjn-9"})(["color:var(--color-grey-600);font-size:14px;align-self:flex-end;"]),C=d.default.div.withConfig({displayName:"styles__AuthorDiv",componentId:"sc-1apjhjn-10"})(["align-self:center;"]);var b=n(8747);const N=d.default.div.withConfig({displayName:"SearchContent__Wrapper",componentId:"sc-2kutj8-0"})(["color:var(--color-grey-600);span{","}strong{color:#ff0000;margin:0 4px;}"],b.R.Body);var L=e=>{let{keyword:t,matches:n,className:s}=e;const r=(0,i.useMemo)((()=>{const e=n.find((e=>"body"===e.key))||n[0],[s,i]=e.indices.find((e=>{let[n,s]=e;return s+1-n===t.length}))||e.indices[0];return[e.value.substring(s-50,s),e.value.substring(s,i+1),e.value.substring(i+1,i+50)]}),[t,n]);return i.createElement(N,{className:s},i.createElement("span",null,"...",r[0]),i.createElement("strong",null,r[1]),i.createElement("span",null,r[2],"..."))};var S=()=>{const e=(0,l.UK)(),t=(0,r.useStaticQuery)("3285982362"),{0:n,1:d}=(0,i.useState)("");(0,i.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get("k");d(e||"")}),[]);const g=(0,c.useGatsbyPluginFusejs)(n,t.fusejs,{includeScore:!0,includeMatches:!0,threshold:0,ignoreLocation:!0}),p=(0,i.useMemo)((()=>(0,s.A)(g).reverse()),[g]);return i.createElement(h.A,{showSidebar:!0},i.createElement(x,null,i.createElement(a.m,{title:`搜索结果：${n} | ${e.website.title}`}),i.createElement(u.A,{breadcrumbs:[{label:`「${n}」的搜索结果`}]}),i.createElement(y,null,i.createElement(A,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwwAAAGkAgMAAADhwUpCAAAACVBMVEUAAAD////7MooqSiEPAAAAAnRSTlMAAHaTzTgAAAD4SURBVHja7dqxCQAwCABBl3RJp0ydIkKIkOauFcHvjQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhtSN3NUcDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNDQN7xc2e/2Uw0aNGjQoEGDBg0aNGjQoEGDBg0aNGjQoEGDBg0aNGjQoEGDBg0aNGjQoEGDBg0aNGjQ8OtnPVsaNGjQoEGDBg0aNGjQoEGDBg0aNGjQoEGDBg0aNGjQoEGDBg0aNGjQoEGDBg0aNGjQoAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOFuFlOAXPWaOjAAAAABJRU5ErkJggg==",alt:"search"}),`搜索「${n}」`),i.createElement(M,null,p.map((e=>{let{item:t,score:s,matches:r}=e;return i.createElement(w,{key:t.id,to:t.slug},i.createElement(v,{image:(0,o.c)(t.coverImg),objectFit:"contain",alt:t.title}),i.createElement(_,null,i.createElement(E,null,i.createElement("h4",null,t.title),i.createElement(j,null,"匹配度：",null==s?void 0:s.toFixed(2))),i.createElement(L,{keyword:n,matches:r})))})),i.createElement(k,null,"共有",i.createElement("strong",null,p.length),"个搜索结果")),i.createElement(C,null,i.createElement(f.A,null))))}},3137:function(e,t,n){var s,i=Object.create,r=Object.defineProperty,c=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,h=(e,t,n,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of o(t))l.call(e,i)||i===n||r(e,i,{get:()=>t[i],enumerable:!(s=c(t,i))||s.enumerable});return e},u={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(u,{default:()=>m,useFusejs:()=>f,useGatsbyPluginFusejs:()=>p}),e.exports=(s=u,h(r({},"__esModule",{value:!0}),s));var d=((e,t,n)=>(n=null!=e?i(a(e)):{},h(!t&&e&&e.__esModule?n:r(n,"default",{value:e,enumerable:!0}),e)))(n(7120)),g=n(6540);function f(e,t,n,s,i,r){const[c,o]=(0,g.useState)(null);return(0,g.useEffect)((()=>{if(!t||!n)return void o(null);const e=new d.default(t,s,d.default.parseIndex(n,i));o(e)}),[t,n]),(0,g.useMemo)((()=>e&&c&&c?.search(e,r)||[]),[e,c])}function p(e,t,n,s,i){const[r,c]=(0,g.useState)(null);return(0,g.useEffect)((()=>{if(!t?.data||!t?.index)return void c(null);const e=new d.default(t.data,n,d.default.parseIndex(JSON.parse(t.index),s));c(e)}),[t]),(0,g.useMemo)((()=>e&&r&&r?.search(e,i)||[]),[e,r])}var m=f}}]);
//# sourceMappingURL=component---themes-amaranth-src-gatsby-theme-advanced-pages-search-index-tsx-ed683e9a0d16c3ce484a.js.map