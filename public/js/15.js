(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"M+96":function(t,r,e){"use strict";e.r(r);var o=e("+SZM"),a=e("Z84v"),n=e("Ujtf"),l=e("pF+r"),s={metaInfo:{title:"Create Contact"},layout:o.a,components:{LoadingButton:a.a,SelectInput:n.a,TextInput:l.a},props:{errors:Object,organizations:Array},remember:"form",data:function(){return{sending:!1,form:{first_name:null,last_name:null,organization_id:null,email:null,phone:null,address:null,city:null,region:null,country:null,postal_code:null}}},methods:{submit:function(){var t=this;this.$inertia.post(this.route("contacts.store"),this.form,{onStart:function(){return t.sending=!0},onFinish:function(){return t.sending=!1}})}}},i=e("KHd+"),u=Object(i.a)(s,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("h1",{staticClass:"mb-8 font-bold text-3xl"},[e("inertia-link",{staticClass:"text-indigo-400 hover:text-indigo-600",attrs:{href:t.route("contacts")}},[t._v("Contacts")]),t._v(" "),e("span",{staticClass:"text-indigo-400 font-medium"},[t._v("/")]),t._v(" Create\n  ")],1),t._v(" "),e("div",{staticClass:"bg-white rounded shadow overflow-hidden max-w-3xl"},[e("form",{on:{submit:function(r){return r.preventDefault(),t.submit(r)}}},[e("div",{staticClass:"p-8 -mr-6 -mb-8 flex flex-wrap"},[e("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.first_name,label:"First name"},model:{value:t.form.first_name,callback:function(r){t.$set(t.form,"first_name",r)},expression:"form.first_name"}}),t._v(" "),e("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.last_name,label:"Last name"},model:{value:t.form.last_name,callback:function(r){t.$set(t.form,"last_name",r)},expression:"form.last_name"}}),t._v(" "),e("select-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.organization_id,label:"Organization"},model:{value:t.form.organization_id,callback:function(r){t.$set(t.form,"organization_id",r)},expression:"form.organization_id"}},[e("option",{domProps:{value:null}}),t._v(" "),t._l(t.organizations,(function(r){return e("option",{key:r.id,domProps:{value:r.id}},[t._v(t._s(r.name))])}))],2),t._v(" "),e("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.email,label:"Email"},model:{value:t.form.email,callback:function(r){t.$set(t.form,"email",r)},expression:"form.email"}}),t._v(" "),e("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.phone,label:"Phone"},model:{value:t.form.phone,callback:function(r){t.$set(t.form,"phone",r)},expression:"form.phone"}}),t._v(" "),e("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.address,label:"Address"},model:{value:t.form.address,callback:function(r){t.$set(t.form,"address",r)},expression:"form.address"}}),t._v(" "),e("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.city,label:"City"},model:{value:t.form.city,callback:function(r){t.$set(t.form,"city",r)},expression:"form.city"}}),t._v(" "),e("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.region,label:"Province/State"},model:{value:t.form.region,callback:function(r){t.$set(t.form,"region",r)},expression:"form.region"}}),t._v(" "),e("select-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.country,label:"Country"},model:{value:t.form.country,callback:function(r){t.$set(t.form,"country",r)},expression:"form.country"}},[e("option",{domProps:{value:null}}),t._v(" "),e("option",{attrs:{value:"CA"}},[t._v("Canada")]),t._v(" "),e("option",{attrs:{value:"US"}},[t._v("United States")])]),t._v(" "),e("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.postal_code,label:"Postal code"},model:{value:t.form.postal_code,callback:function(r){t.$set(t.form,"postal_code",r)},expression:"form.postal_code"}})],1),t._v(" "),e("div",{staticClass:"px-8 py-4 bg-gray-100 border-t border-gray-200 flex justify-end items-center"},[e("loading-button",{staticClass:"btn-indigo",attrs:{loading:t.sending,type:"submit"}},[t._v("Create Contact")])],1)])])])}),[],!1,null,null,null);r.default=u.exports}}]);
//# sourceMappingURL=15.js.map?id=c13be0140be25c8e8ee2