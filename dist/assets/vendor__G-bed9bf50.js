var te=Object.defineProperty;var ne=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var m=(e,t,n)=>(ne(e,typeof t!="symbol"?t+"":t,n),n),Y=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var D=(e,t,n)=>(Y(e,t,"read from private field"),n?n.call(e):t.get(e)),S=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},O=(e,t,n,r)=>(Y(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);import{b as re}from"./vendor__A-998befa2.js";function ie(e,t){if(!!!e)throw new Error(t)}const Q={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},se=new Set(Object.keys(Q));function $(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&se.has(t)}let G;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(G||(G={}));let k;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(k||(k={}));function J(e){return e===9||e===32}function le(e,t){const n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),s=r.length===1,l=r.length>1&&r.slice(1).every(v=>v.length===0||J(v.charCodeAt(0))),a=n.endsWith('\\"""'),c=e.endsWith('"')&&!a,u=e.endsWith("\\"),o=c||u,f=!(t!=null&&t.minimize)&&(!s||e.length>70||o||l||a);let _="";const d=s&&J(e.charCodeAt(0));return(f&&!d||l)&&(_+=`
`),_+=n,(f||o)&&(_+=`
`),'"""'+_+'"""'}const oe=10,Z=2;function ae(e){return V(e,[])}function V(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return ue(e,t);default:return String(e)}}function ue(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(ce(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:V(r,n)}else if(Array.isArray(e))return fe(e,n);return pe(e,n)}function ce(e){return typeof e.toJSON=="function"}function pe(e,t){const n=Object.entries(e);return n.length===0?"{}":t.length>Z?"["+_e(e)+"]":"{ "+n.map(([s,l])=>s+": "+V(l,t)).join(", ")+" }"}function fe(e,t){if(e.length===0)return"[]";if(t.length>Z)return"[Array]";const n=Math.min(oe,e.length),r=e.length-n,s=[];for(let l=0;l<n;++l)s.push(V(e[l],t));return r===1?s.push("... 1 more item"):r>1&&s.push(`... ${r} more items`),"["+s.join(", ")+"]"}function _e(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}function me(e){return`"${e.replace(ye,de)}"`}const ye=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function de(e){return Ee[e.charCodeAt(0)]}const Ee=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],ge=Object.freeze({});function Te(e,t,n=Q){const r=new Map;for(const g of Object.values(k))r.set(g,he(t,g));let s,l=Array.isArray(e),a=[e],c=-1,u=[],o=e,f,_;const d=[],v=[];do{c++;const g=c===a.length,U=g&&u.length!==0;if(g){if(f=v.length===0?void 0:d[d.length-1],o=_,_=v.pop(),U)if(l){o=o.slice();let I=0;for(const[L,M]of u){const B=L-I;M===null?(o.splice(B,1),I++):o[B]=M}}else{o=Object.defineProperties({},Object.getOwnPropertyDescriptors(o));for(const[I,L]of u)o[I]=L}c=s.index,a=s.keys,u=s.edits,l=s.inArray,s=s.prev}else if(_){if(f=l?c:a[c],o=_[f],o==null)continue;d.push(f)}let h;if(!Array.isArray(o)){var w,j;$(o)||ie(!1,`Invalid AST Node: ${ae(o)}.`);const I=g?(w=r.get(o.kind))===null||w===void 0?void 0:w.leave:(j=r.get(o.kind))===null||j===void 0?void 0:j.enter;if(h=I==null?void 0:I.call(t,o,f,_,d,v),h===ge)break;if(h===!1){if(!g){d.pop();continue}}else if(h!==void 0&&(u.push([f,h]),!g))if($(h))o=h;else{d.pop();continue}}if(h===void 0&&U&&u.push([f,o]),g)d.pop();else{var C;s={inArray:l,index:c,keys:a,edits:u,prev:s},l=Array.isArray(o),a=l?o:(C=n[o.kind])!==null&&C!==void 0?C:[],c=-1,u=[],_&&v.push(_),_=o}}while(s!==void 0);return u.length!==0?u[u.length-1][1]:e}function he(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function Ve(e){return Te(e,Ne)}const Ie=80,Ne={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>i(e.definitions,`

`)},OperationDefinition:{leave(e){const t=p("(",i(e.variableDefinitions,", "),")"),n=i([e.operation,i([e.name,t]),i(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r})=>e+": "+t+p(" = ",n)+p(" ",i(r," "))},SelectionSet:{leave:({selections:e})=>E(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:s}){const l=p("",e,": ")+t;let a=l+p("(",i(n,", "),")");return a.length>Ie&&(a=l+p(`(
`,F(i(n,`
`)),`
)`)),i([a,i(r," "),s]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+p(" ",i(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>i(["...",p("on ",e),i(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:s})=>`fragment ${e}${p("(",i(n,", "),")")} on ${t} ${p("",i(r," ")," ")}`+s},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?le(e):me(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+i(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+i(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+p("(",i(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>p("",e,`
`)+i(["schema",i(t," "),E(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>p("",e,`
`)+i(["scalar",t,i(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:s})=>p("",e,`
`)+i(["type",t,p("implements ",i(n," & ")),i(r," "),E(s)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:s})=>p("",e,`
`)+t+(X(n)?p(`(
`,F(i(n,`
`)),`
)`):p("(",i(n,", "),")"))+": "+r+p(" ",i(s," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:s})=>p("",e,`
`)+i([t+": "+n,p("= ",r),i(s," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:s})=>p("",e,`
`)+i(["interface",t,p("implements ",i(n," & ")),i(r," "),E(s)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>p("",e,`
`)+i(["union",t,i(n," "),p("= ",i(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>p("",e,`
`)+i(["enum",t,i(n," "),E(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>p("",e,`
`)+i([t,i(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>p("",e,`
`)+i(["input",t,i(n," "),E(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,repeatable:r,locations:s})=>p("",e,`
`)+"directive @"+t+(X(n)?p(`(
`,F(i(n,`
`)),`
)`):p("(",i(n,", "),")"))+(r?" repeatable":"")+" on "+i(s," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>i(["extend schema",i(e," "),E(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>i(["extend scalar",e,i(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>i(["extend type",e,p("implements ",i(t," & ")),i(n," "),E(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>i(["extend interface",e,p("implements ",i(t," & ")),i(n," "),E(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>i(["extend union",e,i(t," "),p("= ",i(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>i(["extend enum",e,i(t," "),E(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>i(["extend input",e,i(t," "),E(n)]," ")}};function i(e,t=""){var n;return(n=e==null?void 0:e.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function E(e){return p(`{
`,F(i(e,`
`)),`
}`)}function p(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function F(e){return p("  ",e.replace(/\n/g,`
  `))}function X(e){var t;return(t=e==null?void 0:e.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}let ve={data:""},De=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ve,Oe=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,be=/\/\*[^]*?\*\/|  +/g,H=/\n+/g,N=(e,t)=>{let n="",r="",s="";for(let l in e){let a=e[l];l[0]=="@"?l[1]=="i"?n=l+" "+a+";":r+=l[1]=="f"?N(a,l):l+"{"+N(a,l[1]=="k"?"":t)+"}":typeof a=="object"?r+=N(a,t?t.replace(/([^,])+/g,c=>l.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,c):c?c+" "+u:u)):l):a!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=N.p?N.p(l,a):l+":"+a+";")}return n+(t&&s?t+"{"+s+"}":s)+r},T={},K=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+K(e[n]);return t}return e},Ae=(e,t,n,r,s)=>{let l=K(e),a=T[l]||(T[l]=(u=>{let o=0,f=11;for(;o<u.length;)f=101*f+u.charCodeAt(o++)>>>0;return"go"+f})(l));if(!T[a]){let u=l!==e?e:(o=>{let f,_,d=[{}];for(;f=Oe.exec(o.replace(be,""));)f[4]?d.shift():f[3]?(_=f[3].replace(H," ").trim(),d.unshift(d[0][_]=d[0][_]||{})):d[0][f[1]]=f[2].replace(H," ").trim();return d[0]})(e);T[a]=N(s?{["@keyframes "+a]:u}:u,n?"":"."+a)}let c=n&&T.g?T.g:null;return n&&(T.g=T[a]),((u,o,f,_)=>{_?o.data=o.data.replace(_,u):o.data.indexOf(u)===-1&&(o.data=f?u+o.data:o.data+u)})(T[a],t,r,c),a},xe=(e,t,n)=>e.reduce((r,s,l)=>{let a=t[l];if(a&&a.call){let c=a(n),u=c&&c.props&&c.props.className||/^go/.test(c)&&c;a=u?"."+u:c&&typeof c=="object"?c.props?"":N(c,""):c===!1?"":c}return r+s+(a??"")},"");function R(e){let t=this||{},n=e.call?e(t.p):e;return Ae(n.unshift?n.raw?xe(n,[].slice.call(arguments,1),t.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(t.p):s),{}):n,De(t.target),t.g,t.o,t.k)}let ee,q,P;R.bind({g:1});let we=R.bind({k:1});function je(e,t,n,r){N.p=t,ee=e,q=n,P=r}function Ce(e,t){let n=this||{};return function(){let r=arguments;function s(l,a){let c=Object.assign({},l),u=c.className||s.className;n.p=Object.assign({theme:q&&q()},c),n.o=/ *go\d+/.test(u),c.className=R.apply(n,r)+(u?" "+u:""),t&&(c.ref=a);let o=e;return e[0]&&(o=c.as||e,delete c.as),P&&o[0]&&P(c),ee(o,c)}return t?t(s):s}}const z=e=>{var t=new Date(e*1e3),n=t.getMonth()+1,r=t.getDate(),s=t.getFullYear(),l=`${r}-${n}-${s}`;return l},y={all_branches:{url:"repos/{owner}/{repo}/branches"},all_collaborators:{url:"repos/{owner}/{repo}/collaborators",all_pages:!0},all_invitations:{url:"repos/{owner}/{repo}/invitations",all_pages:!0},all_commits:{url:"/repos/{owner}/{repo}/commits",all_pages:!0},all_issues:{url:"repos/{owner}/{repo}/issues",all_pages:!0},all_assignees:{url:"repos/{owner}/{repo}/assignees",all_pages:!0},all_labels:{url:"repos/{owner}/{repo}/labels",all_pages:!0},weekly_commits:{url:"repos/{owner}/{repo}/stats/code_frequency",formatter:e=>{const t=[];return e&&Array.isArray(e)&&e.forEach(n=>t.push({name:z(n[0]),Added:n[1],Removed:n[2]})),t}},weekly_commits_count:{url:"repos/{owner}/{repo}/stats/participation",formatter:e=>{const t=[];return e&&e.all&&Array.isArray(e.all)&&e.all.forEach((n,r)=>t.push({name:`Week ${r}`,Commits:n})),t}},hourly_commits:{url:"repos/{owner}/{repo}/stats/punch_card",formatter:e=>{const t=[],n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return e&&e.length&&e.forEach((r,s)=>t.push({name:n[r[0]],Hour:r[1],Hour_display:`${r[1]>12?`${r[1]-12} PM`:`${r[1]} AM`}`,Commits:r[2]})),t}},last_year_commits:{url:"repos/{owner}/{repo}/stats/commit_activity",formatter:e=>{const t=[];return e&&Array.isArray(e)&&e.forEach(n=>t.push({name:z(n.week),Commits:n.total,Days:n.days})),t}},all_pulls_open:{url:"repos/{owner}/{repo}/pulls?state=open",all_pages:!0},all_pulls_closed:{url:"repos/{owner}/{repo}/pulls?state=closed",all_pages:!0},star_gazers:{url:"repos/{owner}/{repo}/stargazers",all_pages:!0},all_collaborators:{url:"repos/{owner}/{repo}/collaborators",all_pages:!0},all_milestones:{url:"repos/{owner}/{repo}/milestones",all_pages:!0},all_forks:{url:"repos/{owner}/{repo}/forks",all_pages:!0},all_contributors:{url:"repos/{owner}/{repo}/stats/contributors"}};var b,A,x,W;const Le=(W=class{constructor(t,n,r){S(this,b,"");S(this,A,"");S(this,x,"");m(this,"get_all_pages",t=>{const n=this.request,r=D(this,b),s=D(this,A),l=D(this,x);return new Promise(async function(a,c){let u=!0,o=1;const f=[];for(;u;){const _=await n(t,o,s,l,r);_.length>0?(Array.prototype.push.apply(f,_),o=o+1):(u=!1,a(f))}})});m(this,"get_data",async t=>t.all_pages?this.get_all_pages(t,this.request):this.request(t));m(this,"get",t=>this.request_proxy(y[t]));m(this,"get_all_branches",()=>this.request_proxy(y.all_branches));m(this,"get_all_collaborators",()=>this.request_proxy(y.all_collaborators));m(this,"get_all_invitations",()=>this.request_proxy(y.all_invitations));m(this,"get_all_commits",()=>this.request_proxy(y.all_commits));m(this,"get_last_year_commits",()=>this.request_proxy(y.last_year_commits));m(this,"get_all_issues",()=>this.request_proxy(y.all_issues));m(this,"get_all_assignees",()=>this.request_proxy(y.all_assignees));m(this,"get_all_labels",()=>this.request_proxy(y.all_labels));m(this,"get_weekly_commit",()=>this.request_proxy(y.weekly_commits));m(this,"get_weekly_commit_count",()=>this.request_proxy(y.weekly_commits_count));m(this,"get_hourly_commits",()=>this.request_proxy(y.hourly_commits));m(this,"get_all_pulls_open",()=>this.request_proxy(y.all_pulls_open));m(this,"get_all_pulls_closed",()=>this.request_proxy(y.all_pulls_closed));m(this,"get_all_star_gazers",()=>this.request_proxy(y.star_gazers));m(this,"get_all_collaborators",()=>this.request_proxy(y.all_collaborators));m(this,"get_all_milestones",()=>this.request_proxy(y.all_milestones));m(this,"get_all_forks",()=>this.request_proxy(y.all_forks));m(this,"get_all_contributors",()=>this.request_proxy(y.all_contributors));O(this,b,t),O(this,A,n),O(this,x,r)}set accessToken(t){O(this,b,t)}set user(t){O(this,A,t)}set repo(t){O(this,x,t)}request(t,n,r,s,l){const a={method:"GET",headers:{Accept:"application/vnd.github.v3+json"}};l&&(a.headers.authorization=`token ${l||D(this,b)}`);let c=t.url.replace("{owner}",r||D(this,A)).replace("{repo}",s||D(this,x));return n&&(c=`${c}?per_page=30&page=${n}`),re.get(`https://api.github.com/${c}`,a).then(u=>{const o=u.data,f=t.node?o[t.node]:o;return t.formatter?t.formatter(f):f}).catch(u=>(console.error(u),0))}request_proxy(t){return this.get_data(t)}},b=new WeakMap,A=new WeakMap,x=new WeakMap,W);export{Le as G,we as h,Ce as j,je as m,Ve as p,R as u};
