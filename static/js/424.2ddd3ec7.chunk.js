"use strict";(self.webpackChunkdrive_ukraine_now=self.webpackChunkdrive_ukraine_now||[]).push([[424],{424:function(n,e,i){i.r(e),i.d(e,{default:function(){return N}});var t,r,o,a,l,c,s,d,u,p,x,f,h,g,m,Z=i(439),b=i(791),j=i(434),v=i(299),k=function(n){return n.adverts.items},w=i(168),y=i(109),C=y.Z.div(t||(t=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),z=y.Z.ul(r||(r=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  grid-gap: 29px;\n  margin-top: 30px;\n  margin-bottom: 20px;\n  padding: 0;\n  list-style: none;\n"]))),F=y.Z.button(o||(o=(0,w.Z)(["\n  color: #3470FF;\n  cursor: pointer;\n  border: none;\n  background: white;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  font-weight: 500;\n  font-size: 16px;\n\n  &:hover, &:focus {\n  text-decoration: underline;\n  }\n"]))),S=y.Z.h3(a||(a=(0,w.Z)(["\n  font-family: ManropeRegular;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex; \n"]))),_=y.Z.span(l||(l=(0,w.Z)(["\n  color: rgba(52, 112, 255, 1);\n  margin-left: 6px;\n"]))),M=y.Z.span(c||(c=(0,w.Z)(["\n  margin-left: auto;\n"]))),E=y.Z.li(s||(s=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 274px;\n  height: 426px;\n"]))),L=y.Z.img(d||(d=(0,w.Z)(["\n  width: 100%;\n  height: 268px;\n  border-radius: 10px;\n  object-fit: cover;\n  background: linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%);\n"]))),O=y.Z.div(u||(u=(0,w.Z)(["\n  display: flex;\n"]))),P=y.Z.h4(p||(p=(0,w.Z)(["\n  display: flex;\n  font-size: 12px;\n  line-height: 1.5em;\n  font-family: ManropeThin;\n  color: rgba(18, 20, 23, 0.5);\n"]))),T=y.Z.button(x||(x=(0,w.Z)(["\n  width: 274px;\n  height: 44px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  background: #3470FF;\n  color: white;\n  cursor: pointer;\n  border: none;\n\n  &:hover, &:focus {\n      fill: var(--white-color);\n  background-color: #2196F3;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),G=i(164),I=y.Z.div(f||(f=(0,w.Z)(["\nposition: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.1); \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000; \n"]))),R=y.Z.div(h||(h=(0,w.Z)(["\n  background-color: rgba(255, 255, 255, 1);\n  border-radius: 24px;\n  padding: 20px;\n  ","\n  overflow: auto;\n  position: relative;\n  width: 541px;\n  height: 752px;\n"])),""),q=y.Z.button(g||(g=(0,w.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 30px;\n  cursor: pointer;\n  font-size: 24px;\n  background-color: white;\n  color: rgba(18, 20, 23, 1);\n  width: 12px;\n  height: 12px;\n\n  :hover,\n  :focus {\n    transform: scale(1.1);\n  }\n"]))),A=i(184),B=function(n){var e=n.isOpen,i=n.onClose,t=n.children;return e?G.createPortal((0,A.jsx)(I,{onClick:i,children:(0,A.jsxs)(R,{children:[(0,A.jsx)(q,{onClick:i,children:"\u2715"}),t]})}),document.body):null},D=function(n){var e=n.advert,i=n.index,t=(0,b.useState)(!1),r=(0,Z.Z)(t,2),o=r[0],a=r[1],l=i<3,c=e.address.split(" ").slice(-2).join(" ").replace(","," | "),s=e.functionalities[0];return(0,A.jsxs)(E,{children:[(0,A.jsx)(L,{src:e.img,alt:e.make}),(0,A.jsxs)(S,{children:[e.make,l&&(0,A.jsxs)(_,{children:[" ",e.model]}),", ",e.year," ",(0,A.jsx)(M,{children:e.rentalPrice})]}),(0,A.jsx)(O,{children:(0,A.jsxs)(P,{children:[c," | ",e.rentalCompany," | ",e.type," | ",e.make," | ",e.mileage," | ",s]})}),(0,A.jsx)(T,{onClick:function(){a(!0)},children:"Learn More"}),(0,A.jsx)(B,{isOpen:o,onClose:function(){a(!1)}})]})},H=i(849),J=function(){var n=(0,j.I0)(),e=(0,j.v9)(k),i=(0,b.useState)([]),t=(0,Z.Z)(i,2),r=t[0],o=t[1],a=(0,b.useState)(0),l=(0,Z.Z)(a,2),c=l[0],s=l[1],d=(0,b.useState)(!1),u=(0,Z.Z)(d,2),p=u[0],x=u[1];(0,b.useEffect)((function(){n((0,v.G)())}),[n]),(0,b.useEffect)((function(){e&&e.length>0&&o(e.slice(0,c+8))}),[e,c]);return e&&0!==e.length?(0,A.jsxs)(C,{children:[(0,A.jsx)(z,{children:r.map((function(n,e){return(0,A.jsx)(D,{advert:n,index:e},n.id)}))}),!p&&r.length<e.length&&(0,A.jsx)(F,{onClick:function(){x(!0),setTimeout((function(){s(c+8),x(!1)}),1e3)},children:"Load more"}),p&&(0,A.jsx)(H.Z,{})]}):(0,A.jsx)(H.Z,{})},K=y.Z.div(m||(m=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 1184px;\n  margin: 0 auto;\n"]))),N=function(){return(0,A.jsx)(K,{children:(0,A.jsx)(J,{})})}}}]);
//# sourceMappingURL=424.2ddd3ec7.chunk.js.map