import{_ as P,o as r,c as n,a as t,b as c,v as u,F as k,r as x,w as p,d as V,e as C,t as h,f as U,n as v,g as $,h as M,i as y}from"./index-tnszN9Rx.js";const I={props:["tempProduct","updateProduct"],data(){return{productModal:null,curProduct:{}}},watch:{tempProduct(){this.curProduct={...this.tempProduct}}},methods:{openModal(){this.productModal.show()},closeModal(){this.productModal.hide()},clearInput(){this.$emit("clear-input")},sendData(){this.$emit("send-data",this.curProduct)}},mounted(){this.productModal=new this.$bs.Modal(document.getElementById("productModal"),{keyboard:!1,backdrop:"static"})}},D={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},E={class:"modal-dialog modal-xl"},A={class:"modal-content border-0"},L={class:"modal-header bg-dark text-white"},N=t("h5",{id:"productModalLabel",class:"modal-title"},[t("span",null,"新增產品")],-1),T={class:"modal-body"},B={class:"row"},S={class:"col-sm-4"},R={class:"mb-2"},z={class:"mb-3"},F=t("label",{for:"imageUrl",class:"form-label"},"請輸入主要產品圖網址",-1),H=["src"],O=t("h6",null,"新增其他產品圖",-1),j={key:0},q=["src"],G=t("label",{for:"imageUrl",class:"form-label mt-3"},"請輸入圖片網址",-1),J=["onUpdate:modelValue"],K={class:"col-sm-8"},Q={class:"mb-3"},W=t("label",{for:"title",class:"form-label"},"標題",-1),X={class:"row"},Y={class:"mb-3 col-md-6"},Z=t("label",{for:"category",class:"form-label"},"分類",-1),tt={class:"mb-3 col-md-6"},et=t("label",{for:"price",class:"form-label"},"單位",-1),ot={class:"row"},st={class:"mb-3 col-md-6"},lt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),dt={class:"mb-3 col-md-6"},at=t("label",{for:"price",class:"form-label"},"售價",-1),rt=t("hr",null,null,-1),nt={class:"mb-3"},ct=t("label",{for:"description",class:"form-label"},"產品描述",-1),it={class:"mb-3"},ut=t("label",{for:"content",class:"form-label"},"說明內容",-1),pt={class:"mb-3"},mt={class:"form-check"},ht=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),_t={class:"modal-footer"};function bt(d,e,l,g,s,a){return r(),n("div",D,[t("div",E,[t("div",A,[t("div",L,[N,t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:e[0]||(e[0]=(...o)=>a.clearInput&&a.clearInput(...o))})]),t("div",T,[t("div",B,[t("div",S,[t("div",R,[t("div",z,[F,c(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結",id:"imageUrl","onUpdate:modelValue":e[1]||(e[1]=o=>s.curProduct.imageUrl=o)},null,512),[[u,s.curProduct.imageUrl]])]),t("img",{class:"img-fluid",src:l.tempProduct.imageUrl,alt:""},null,8,H)]),t("div",null,[O,Array.isArray(l.tempProduct.imagesUrl)?(r(),n("div",j,[(r(!0),n(k,null,x(l.tempProduct.imagesUrl,(o,m)=>(r(),n("div",{key:m+123},[t("img",{src:o,alt:"",class:"img-fluid"},null,8,q),G,c(t("input",{type:"text",class:"form-control mb-3","onUpdate:modelValue":f=>s.curProduct.imagesUrl[m]=f},null,8,J),[[u,s.curProduct.imagesUrl[m]]])]))),128)),l.tempProduct.imagesUrl.length===0||l.tempProduct.imagesUrl[l.tempProduct.imagesUrl.length-1]?(r(),n("button",{key:0,class:"btn btn-outline-primary w-100 mb-3",onClick:e[2]||(e[2]=p(o=>s.curProduct.imagesUrl.push(""),["prevent"]))}," 新增圖片 ")):(r(),n("button",{key:1,class:"btn btn-outline-danger mb-3 d-block w-100",onClick:e[3]||(e[3]=p(o=>s.curProduct.imagesUrl.pop(),["prevent"]))}," 刪除圖片 "))])):V("",!0)])]),t("div",K,[t("div",Q,[W,c(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[4]||(e[4]=o=>s.curProduct.title=o)},null,512),[[u,s.curProduct.title,void 0,{trim:!0}]])]),t("div",X,[t("div",Y,[Z,c(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[5]||(e[5]=o=>s.curProduct.category=o)},null,512),[[u,s.curProduct.category]])]),t("div",tt,[et,c(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[6]||(e[6]=o=>s.curProduct.unit=o)},null,512),[[u,s.curProduct.unit]])])]),t("div",ot,[t("div",st,[lt,c(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[7]||(e[7]=o=>s.curProduct.origin_price=o)},null,512),[[u,s.curProduct.origin_price]])]),t("div",dt,[at,c(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[8]||(e[8]=o=>s.curProduct.price=o)},null,512),[[u,s.curProduct.price]])])]),rt,t("div",nt,[ct,c(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[9]||(e[9]=o=>s.curProduct.description=o)},`
                    `,512),[[u,s.curProduct.description]])]),t("div",it,[ut,c(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[10]||(e[10]=o=>s.curProduct.content=o)},`
                    `,512),[[u,s.curProduct.content]])]),t("div",pt,[t("div",mt,[c(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[11]||(e[11]=o=>s.curProduct.is_enabled=o)},null,512),[[C,s.curProduct.is_enabled]]),ht])])])])]),t("div",_t,[t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal",onClick:e[12]||(e[12]=(...o)=>a.clearInput&&a.clearInput(...o))}," 取消 "),t("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=(...o)=>a.sendData&&a.sendData(...o))}," 確認 ")])])])],512)}const Pt=P(I,[["render",bt]]),gt={props:["tempProduct","delProduct"],data(){return{delProductModal:null,curProduct:{}}},methods:{openModal(){this.delProductModal.show()},closeModal(){this.delProductModal.hide()}},mounted(){this.delProductModal=new this.$bs.Modal(document.getElementById("delProductModal"),{keyboard:!1,backdrop:"static"})}},ft={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},vt={class:"modal-dialog"},Mt={class:"modal-content border-0"},yt={class:"modal-header bg-danger text-white"},kt={id:"delProductModalLabel",class:"modal-title"},xt=t("div",{class:"modal-body"},[U(" 是否刪除 "),t("strong",{class:"text-danger"}),U(" 商品(刪除後將無法恢復)。 ")],-1),Ut={class:"modal-footer"};function wt(d,e,l,g,s,a){return r(),n("div",ft,[t("div",vt,[t("div",Mt,[t("div",yt,[t("h5",kt,[t("span",null,"刪除 "+h(l.tempProduct.title),1)]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:e[0]||(e[0]=(...o)=>a.closeModal&&a.closeModal(...o))})]),xt,t("div",Ut,[t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal",onClick:e[1]||(e[1]=(...o)=>a.closeModal&&a.closeModal(...o))}," 取消 "),t("button",{type:"button",class:"btn btn-danger",onClick:e[2]||(e[2]=(...o)=>l.delProduct&&l.delProduct(...o))}," 確認刪除 ")])])])],512)}const Vt=P(gt,[["render",wt]]),Ct={props:["pages","getProducts"]},$t={"aria-label":"Page navigation"},It={class:"pagination"},Dt=t("a",{class:"page-link",href:"#","aria-label":"Previous"},[t("span",{"aria-hidden":"true"},"«")],-1),Et=[Dt],At=["onClick"],Lt=t("span",{"aria-hidden":"true"},"»",-1),Nt=[Lt];function Tt(d,e,l,g,s,a){return r(),n("nav",$t,[t("ul",It,[t("li",{class:v(["page-item",{disabled:!l.pages.has_pre}]),onClick:e[0]||(e[0]=p(o=>l.getProducts(1),["prevent"]))},Et,2),(r(!0),n(k,null,x(l.pages.total_pages,o=>(r(),n("li",{class:v(["page-item",{active:o===l.pages.current_page}]),key:o+"forPage"},[t("a",{class:"page-link",href:"#",onClick:p(m=>l.getProducts(o),["prevent"])},h(o),9,At)],2))),128)),t("li",{class:v(["page-item",{disabled:!l.pages.has_next}])},[t("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=p(o=>l.getProducts(l.pages.total_pages),["prevent"]))},Nt)],2)])])}const Bt=P(Ct,[["render",Tt]]);var St={VITE_URL:"https://ec-course-api.hexschool.io/",VITE_PATH:"pinyi9",BASE_URL:"/2024vueProject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_,VITE_PATH:b}=St,Rt={data(){return{products:[],isNew:!1,tempProduct:{imagesUrl:[]},pages:{},productModal:null,delProductModal:null}},methods:{async checkAdmin(){var d,e;try{const l=document.cookie.replace(/(?:(?:^|.*;\s*)leleToken\s*=\s*([^;]*).*$)|^.*$/,"$1");$.defaults.headers.common.Authorization=l,await this.axios.post(`${_}V2/api/user/check`),this.getProducts()}catch(l){alert(((e=(d=l.response)==null?void 0:d.data)==null?void 0:e.message)||"Error occurred."),this.$router.push({name:"LoginView"})}},getProducts(d=1){this.axios.get(`${_}V2/api/${b}/admin/products?page=${d}`).then(e=>{this.products=e.data.products,this.pages=e.data.pagination,console.log(e)}).catch(e=>{alert(e.response.data.message)})},openProduct(d){this.tempProduct=d},openModal(d,e){d==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.pModal.openModal()):d==="edit"?(this.tempProduct={...e},Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.$refs.pModal.openModal()):d==="delete"&&(this.tempProduct={...e},this.$refs.dModal.openModal())},updateProduct(d){this.isNew?this.axios.post(`${_}V2/api/${b}/admin/product`,{data:d}).then(e=>{alert("產品新增成功"),this.getProducts(),this.$refs.pModal.closeModal()}).catch(e=>{alert(e.response.data.message)}):this.axios.put(`${_}V2/api/${b}/admin/product/${this.tempProduct.id}`,{data:d}).then(e=>{alert("產品更新成功"),this.$refs.pModal.closeModal(),this.getProducts()}).catch(e=>{alert(e.response.data.message)})},delProduct(){this.axios.delete(`${_}V2/api/${b}/admin/product/${this.tempProduct.id}`).then(d=>{alert(d.data.message),this.$refs.dModal.closeModal(),this.getProducts()}).catch(d=>{alert(d.response.data.message)})},clearInput(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push(""),this.$refs.pModal.closeModal()}},mounted(){this.checkAdmin(),this.productModal=new this.$bs.Modal(document.getElementById("productModal"),{keyboard:!1,backdrop:"static"}),this.delProductModal=new this.$bs.Modal(document.getElementById("delProductModal"),{keyboard:!1,backdrop:"static"})},components:{PaginationItem:Bt,ProductModal:Pt,DelModal:Vt}},zt={id:"app"},Ft={class:"container"},Ht={class:"text-end mt-4"},Ot={class:"table table-hover mt-4"},jt=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),qt={class:"text-end"},Gt={class:"text-end"},Jt={key:0,class:"text-success"},Kt={key:1,class:"text-danger"},Qt={class:"btn-group"},Wt=["onClick"],Xt=["onClick"],Yt={class:"container"};function Zt(d,e,l,g,s,a){const o=M("Product-Modal"),m=M("Del-Modal"),f=M("PaginationItem");return r(),n("main",null,[t("div",zt,[t("div",Ft,[t("div",Ht,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=p(i=>a.openModal("new"),["prevent"]))}," 建立新的產品 ")]),t("table",Ot,[jt,t("tbody",null,[(r(!0),n(k,null,x(s.products,i=>(r(),n("tr",{key:i.id},[t("td",null,h(i.category),1),t("td",null,h(i.title),1),t("td",qt,h(i.origin_price),1),t("td",Gt,h(i.price),1),t("td",null,[i.is_enabled?(r(),n("span",Jt,"啟用")):(r(),n("span",Kt,"未啟用"))]),t("td",null,[t("div",Qt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:p(w=>a.openModal("edit",i),["prevent"])}," 編輯 ",8,Wt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:p(w=>a.openModal("delete",i),["prevent"])}," 刪除 ",8,Xt)])])]))),128))])])]),y(o,{"temp-Product":s.tempProduct,updateProduct:a.updateProduct,onClearInput:a.clearInput,onSendData:a.updateProduct,ref:"pModal"},null,8,["temp-Product","updateProduct","onClearInput","onSendData"]),y(m,{"temp-Product":s.tempProduct,delProduct:a.delProduct,ref:"dModal"},null,8,["temp-Product","delProduct"]),t("div",Yt,[y(f,{pages:s.pages,"get-products":a.getProducts},null,8,["pages","get-products"])])])])}const ee=P(Rt,[["render",Zt]]);export{ee as default};