(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Vr32:function(r,t,e){"use strict";e.r(t);var o=e("+SZM"),n=e("Z84v"),a=e("Ujtf"),s=e("pF+r"),l={metaInfo:{title:"Criar Carro"},layout:o.a,components:{LoadingButton:n.a,SelectInput:a.a,TextInput:s.a},props:{errors:Object,colors:Object},remember:"form",data:function(){return{sending:!1,form:{name:null,brand:null,year:null,color:null}}},methods:{submit:function(){var r=this;this.$inertia.post(this.route("cars.store"),this.form,{onStart:function(){return r.sending=!0},onFinish:function(){return r.sending=!1}})}}},i=e("KHd+"),u=Object(i.a)(l,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",[e("h1",{staticClass:"mb-8 font-bold text-3xl"},[e("inertia-link",{staticClass:"text-indigo-400 hover:text-indigo-600",attrs:{href:r.route("cars.index")}},[r._v("Carros")]),r._v(" "),e("span",{staticClass:"text-indigo-400 font-medium"},[r._v("/")]),r._v(" Criar\n  ")],1),r._v(" "),e("div",{staticClass:"bg-white rounded shadow overflow-hidden max-w-3xl"},[e("form",{on:{submit:function(t){return t.preventDefault(),r.submit(t)}}},[e("div",{staticClass:"p-8 -mr-6 -mb-8 flex flex-wrap"},[e("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:r.errors.name,label:"Nome"},model:{value:r.form.name,callback:function(t){r.$set(r.form,"name",t)},expression:"form.name"}}),r._v(" "),e("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:r.errors.brand,label:"Marca"},model:{value:r.form.brand,callback:function(t){r.$set(r.form,"brand",t)},expression:"form.brand"}}),r._v(" "),e("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:r.errors.year,label:"Ano"},model:{value:r.form.year,callback:function(t){r.$set(r.form,"year",t)},expression:"form.year"}}),r._v(" "),e("select-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:r.errors.color,label:"Cor"},model:{value:r.form.color,callback:function(t){r.$set(r.form,"color",t)},expression:"form.color"}},[e("option",{domProps:{value:null}}),r._v(" "),r._l(r.colors,(function(t,o){return e("option",{key:o,domProps:{value:o}},[r._v(r._s(o))])}))],2)],1),r._v(" "),e("div",{staticClass:"px-8 py-4 bg-gray-100 border-t border-gray-200 flex justify-end items-center"},[e("loading-button",{staticClass:"btn-indigo",attrs:{loading:r.sending,type:"submit"}},[r._v("Registrar Carro")])],1)])])])}),[],!1,null,null,null);t.default=u.exports}}]);
//# sourceMappingURL=13.js.map?id=189ffa93eb9f52f48b42