(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{4414:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]",function(){return t(6982)}])},6673:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893);function a(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("br",{})})}},1952:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),a=t(9008),o=t(1664);function i(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"MyDocs"})}),(0,r.jsx)("div",{className:"bg-gray-600 h-10 leading-10 text-2xl",children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{className:"no-underline text-gray-100 mx-2",children:"MyDocs"})})})]})})}},239:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893),a=t(1664);function o(e){var n=e.docData;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"mx-3",children:"Docs:"}),(0,r.jsx)("div",{className:"mx-5",children:n.map((function(e){var n=e.title,t=e.date,o=e.tags;return(0,r.jsxs)("div",{children:["".concat(i(t),": "),(0,r.jsx)(a.default,{href:"/docs/[id]",as:"/docs/".concat(t),children:(0,r.jsx)("a",{className:"text-blue-500",children:n})}),(0,r.jsxs)("span",{children:[" : Tags [",o.join(", "),"]"]})]},t)}))})]})}function i(e){return e.toString().substr(0,4)+"/"+e.toString().substr(4,2)+"/"+e.toString().substr(6,2)}},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,o=(a=t(7294))&&a.__esModule?a:{default:a},i=t(6273),c=t(387),u=t(7190);var s={};function l(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=c.useRouter(),f=o.default.useMemo((function(){var n=r(i.resolveHref(a,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?i.resolveHref(a,e.as):o||t}}),[a,e.href,e.as]),d=f.href,v=f.as,h=e.children,p=e.replace,x=e.shallow,y=e.scroll,g=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var m=(n=o.default.Children.only(h))&&"object"===typeof n&&n.ref,j=r(u.useIntersection({rootMargin:"200px"}),2),b=j[0],_=j[1],w=o.default.useCallback((function(e){b(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,b]);o.default.useEffect((function(){var e=_&&t&&i.isLocalURL(d),n="undefined"!==typeof g?g:a&&a.locale,r=s[d+"%"+v+(n?"%"+n:"")];e&&!r&&l(a,d,v,{locale:n})}),[v,d,_,g,t,a]);var E={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,c,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:u,scroll:c}))}(e,a,d,v,p,x,y,g)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(a,d,v,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof g?g:a&&a.locale,M=a&&a.isLocaleDomain&&i.getDomainLocale(v,N,a&&a.locales,a&&a.domainLocales);E.href=M||i.addBasePath(i.addLocale(v,N,a&&a.defaultLocale))}return o.default.cloneElement(n,E)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,u=a.useRef(),s=r(a.useState(!1),2),l=s[0],f=s[1],d=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||l||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,i=r.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,l]);return a.useEffect((function(){if(!i&&!l){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[l]),[d,l]};var a=t(7294),o=t(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},6982:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return u},default:function(){return s}});var r=t(5893),a=t(1163),o=t(1952),i=t(6673),c=t(239),u=!0;function s(e){var n=e.docData,t=(0,a.useRouter)(),u=n.filter((function(e){return e.tags.includes(String(t.query.tag))}));return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)("p",{className:"mx-3",children:"Tags:"}),(0,r.jsx)("div",{className:"mx-5",children:(0,r.jsx)("span",{children:[String(t.query.tag)]})}),(0,r.jsx)("hr",{}),(0,r.jsx)(c.Z,{docData:u}),(0,r.jsx)(i.Z,{})]})})}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[774,888,179],(function(){return n=4414,e(e.s=n);var n}));var n=e.O();_N_E=n}]);