import{_ as P,o as a,c as r,a as t,b as n,v as u,F as f,r as v,w as p,d as w,e as V,n as g,t as h,f as $,g as M,h as k,i as U}from"./index-pMo-sbKA.js";const C={props:["tempProduct","updateProduct"],data(){return{productModal:null,curProduct:{}}},watch:{tempProduct(){this.curProduct={...this.tempProduct}}},methods:{openModal(){this.productModal.show()},closeModal(){this.productModal.hide()}},mounted(){this.productModal=new this.$bs.Modal(document.getElementById("productModal"),{keyboard:!1,backdrop:"static"})}},I={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},E={class:"modal-dialog modal-xl"},A={class:"modal-content border-0"},L={class:"modal-header bg-dark text-white"},N=t("h5",{id:"productModalLabel",class:"modal-title"},[t("span",null,"新增產品")],-1),T={class:"modal-body"},B={class:"row"},D={class:"col-sm-4"},R={class:"mb-2"},S={class:"mb-3"},z=t("label",{for:"imageUrl",class:"form-label"},"請輸入主要產品圖網址",-1),F=["src"],H=t("h6",null,"新增其他產品圖",-1),O={key:0},j=["src"],q=t("label",{for:"imageUrl",class:"form-label mt-3"},"請輸入圖片網址",-1),G=["onUpdate:modelValue"],J={class:"col-sm-8"},K={class:"mb-3"},Q=t("label",{for:"title",class:"form-label"},"標題",-1),W={class:"row"},X={class:"mb-3 col-md-6"},Y=t("label",{for:"category",class:"form-label"},"分類",-1),Z={class:"mb-3 col-md-6"},tt=t("label",{for:"price",class:"form-label"},"單位",-1),et={class:"row"},ot={class:"mb-3 col-md-6"},st=t("label",{for:"origin_price",class:"form-label"},"原價",-1),lt={class:"mb-3 col-md-6"},dt=t("label",{for:"price",class:"form-label"},"售價",-1),at=t("hr",null,null,-1),rt={class:"mb-3"},it=t("label",{for:"description",class:"form-label"},"產品描述",-1),nt={class:"mb-3"},ct=t("label",{for:"content",class:"form-label"},"說明內容",-1),ut={class:"mb-3"},pt={class:"form-check"},mt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),ht={class:"modal-footer"};function _t(l,e,d,y,s,c){return a(),r("div",I,[t("div",E,[t("div",A,[t("div",L,[N,t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:e[0]||(e[0]=(...o)=>l.clearInput&&l.clearInput(...o))})]),t("div",T,[t("div",B,[t("div",D,[t("div",R,[t("div",S,[z,n(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結",id:"imageUrl","onUpdate:modelValue":e[1]||(e[1]=o=>s.curProduct.imageUrl=o)},null,512),[[u,s.curProduct.imageUrl]])]),t("img",{class:"img-fluid",src:d.tempProduct.imageUrl,alt:""},null,8,F)]),t("div",null,[H,Array.isArray(d.tempProduct.imagesUrl)?(a(),r("div",O,[(a(!0),r(f,null,v(d.tempProduct.imagesUrl,(o,m)=>(a(),r("div",{key:m+123},[t("img",{src:o,alt:"",class:"img-fluid"},null,8,j),q,n(t("input",{type:"text",class:"form-control mb-3","onUpdate:modelValue":i=>s.curProduct.imagesUrl[m]=i},null,8,G),[[u,s.curProduct.imagesUrl[m]]])]))),128)),d.tempProduct.imagesUrl.length===0||d.tempProduct.imagesUrl[d.tempProduct.imagesUrl.length-1]?(a(),r("button",{key:0,class:"btn btn-outline-primary w-100 mb-3",onClick:e[2]||(e[2]=p(o=>s.curProduct.imagesUrl.push(""),["prevent"]))}," 新增圖片 ")):(a(),r("button",{key:1,class:"btn btn-outline-danger mb-3 d-block w-100",onClick:e[3]||(e[3]=p(o=>s.curProduct.imagesUrl.pop(),["prevent"]))}," 刪除圖片 "))])):w("",!0)])]),t("div",J,[t("div",K,[Q,n(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[4]||(e[4]=o=>s.curProduct.title=o)},null,512),[[u,s.curProduct.title,void 0,{trim:!0}]])]),t("div",W,[t("div",X,[Y,n(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[5]||(e[5]=o=>s.curProduct.category=o)},null,512),[[u,s.curProduct.category]])]),t("div",Z,[tt,n(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[6]||(e[6]=o=>s.curProduct.unit=o)},null,512),[[u,s.curProduct.unit]])])]),t("div",et,[t("div",ot,[st,n(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[7]||(e[7]=o=>s.curProduct.origin_price=o)},null,512),[[u,s.curProduct.origin_price]])]),t("div",lt,[dt,n(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[8]||(e[8]=o=>s.curProduct.price=o)},null,512),[[u,s.curProduct.price]])])]),at,t("div",rt,[it,n(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[9]||(e[9]=o=>s.curProduct.description=o)},`
                    `,512),[[u,s.curProduct.description]])]),t("div",nt,[ct,n(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[10]||(e[10]=o=>s.curProduct.content=o)},`
                    `,512),[[u,s.curProduct.content]])]),t("div",ut,[t("div",pt,[n(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[11]||(e[11]=o=>s.curProduct.is_enabled=o)},null,512),[[V,s.curProduct.is_enabled]]),mt])])])])]),t("div",ht,[t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal",onClick:e[12]||(e[12]=(...o)=>l.clearInput&&l.clearInput(...o))}," 取消 "),t("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=(...o)=>d.updateProduct&&d.updateProduct(...o))}," 確認 ")])])])],512)}const bt=P(C,[["render",_t]]),gt={props:["pages","getProducts"]},Pt={"aria-label":"Page navigation"},ft={class:"pagination"},vt=t("a",{class:"page-link",href:"#","aria-label":"Previous"},[t("span",{"aria-hidden":"true"},"«")],-1),yt=[vt],Mt=["onClick"],kt=t("span",{"aria-hidden":"true"},"»",-1),Ut=[kt];function xt(l,e,d,y,s,c){return a(),r("nav",Pt,[t("ul",ft,[t("li",{class:g(["page-item",{disabled:!d.pages.has_pre}]),onClick:e[0]||(e[0]=p(o=>d.getProducts(1),["prevent"]))},yt,2),(a(!0),r(f,null,v(d.pages.total_pages,o=>(a(),r("li",{class:g(["page-item",{active:o===d.pages.current_page}]),key:o+"forPage"},[t("a",{class:"page-link",href:"#",onClick:p(m=>d.getProducts(o),["prevent"])},h(o),9,Mt)],2))),128)),t("li",{class:g(["page-item",{disabled:!d.pages.has_next}])},[t("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=p(o=>d.getProducts(d.pages.total_pages),["prevent"]))},Ut)],2)])])}const wt=P(gt,[["render",xt]]);var Vt={VITE_URL:"https://ec-course-api.hexschool.io/",VITE_PATH:"pinyi9",BASE_URL:"/2024vueProject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_,VITE_PATH:b}=Vt,$t={data(){return{products:[],isNew:!1,tempProduct:{imagesUrl:[]},pages:{},productModal:null,delProductModal:null}},methods:{async checkAdmin(){var l,e;try{const d=document.cookie.replace(/(?:(?:^|.*;\s*)leleToken\s*=\s*([^;]*).*$)|^.*$/,"$1");$.defaults.headers.common.Authorization=d,await this.axios.post(`${_}V2/api/user/check`),this.getProducts()}catch(d){alert(((e=(l=d.response)==null?void 0:l.data)==null?void 0:e.message)||"Error occurred."),this.$router.push({name:"LoginView"})}},getProducts(l=1){this.axios.get(`${_}V2/api/${b}/admin/products?page=${l}`).then(e=>{this.products=e.data.products,this.pages=e.data.pagination,console.log(e)}).catch(e=>{alert(e.response.data.message)})},openProduct(l){this.tempProduct=l},openModal(l,e){l==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.pModal.openModal()):l==="edit"?(this.tempProduct={...e},Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.$refs.pModal.openModal()):l==="delete"&&(this.tempProduct={...e},this.delProductModal.show())},updateProduct(){this.isNew?this.axios.post(`${_}V2/api/${b}/admin/product`,{data:this.tempProduct}).then(l=>{alert("產品新增成功"),this.$refs.pModal.closeModal(),this.getProducts()}).catch(l=>{alert(l.response.data.message)}):this.axios.put(`${_}V2/api/${b}/admin/product/${this.tempProduct.id}`,{data:this.tempProduct}).then(l=>{alert("產品更新成功"),this.$refs.pModal.closeModal(),this.getProducts()}).catch(l=>{alert(l.response.data.message)})},delProduct(){this.axios.delete(`${_}V2/api/${b}/admin/product/${this.tempProduct.id}`).then(l=>{alert(l.data.message),this.delProductModal.hide(),this.getProducts()}).catch(l=>{alert(l.response.data.message)})},clearInput(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")}},mounted(){this.checkAdmin(),this.productModal=new this.$bs.Modal(document.getElementById("productModal"),{keyboard:!1,backdrop:"static"}),this.delProductModal=new this.$bs.Modal(document.getElementById("delProductModal"),{keyboard:!1,backdrop:"static"})},components:{PaginationItem:wt,ProductModal:bt}},Ct={id:"app"},It={class:"container"},Et={class:"text-end mt-4"},At={class:"table table-hover mt-4"},Lt=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),Nt={class:"text-end"},Tt={class:"text-end"},Bt={key:0,class:"text-success"},Dt={key:1,class:"text-danger"},Rt={class:"btn-group"},St=["onClick"],zt=["onClick"],Ft={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Ht={class:"modal-dialog"},Ot={class:"modal-content border-0"},jt={class:"modal-header bg-danger text-white"},qt={id:"delProductModalLabel",class:"modal-title"},Gt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Jt=t("div",{class:"modal-body"},[U(" 是否刪除 "),t("strong",{class:"text-danger"}),U(" 商品(刪除後將無法恢復)。 ")],-1),Kt={class:"modal-footer"},Qt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),Wt={class:"container"};function Xt(l,e,d,y,s,c){const o=M("Product-Modal"),m=M("PaginationItem");return a(),r("main",null,[t("div",Ct,[t("div",It,[t("div",Et,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=p(i=>c.openModal("new"),["prevent"]))}," 建立新的產品 ")]),t("table",At,[Lt,t("tbody",null,[(a(!0),r(f,null,v(s.products,i=>(a(),r("tr",{key:i.id},[t("td",null,h(i.category),1),t("td",null,h(i.title),1),t("td",Nt,h(i.origin_price),1),t("td",Tt,h(i.price),1),t("td",null,[i.is_enabled?(a(),r("span",Bt,"啟用")):(a(),r("span",Dt,"未啟用"))]),t("td",null,[t("div",Rt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:p(x=>c.openModal("edit",i),["prevent"])}," 編輯 ",8,St),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:p(x=>c.openModal("delete",i),["prevent"])}," 刪除 ",8,zt)])])]))),128))])])]),k(o,{"temp-Product":s.tempProduct,updateProduct:c.updateProduct,ref:"pModal"},null,8,["temp-Product","updateProduct"]),t("div",Ft,[t("div",Ht,[t("div",Ot,[t("div",jt,[t("h5",qt,[t("span",null,"刪除 "+h(s.tempProduct.title),1)]),Gt]),Jt,t("div",Kt,[Qt,t("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=(...i)=>c.delProduct&&c.delProduct(...i))}," 確認刪除 ")])])])],512),t("div",Wt,[k(m,{pages:s.pages,"get-products":c.getProducts},null,8,["pages","get-products"])])])])}const Zt=P($t,[["render",Xt]]);export{Zt as default};