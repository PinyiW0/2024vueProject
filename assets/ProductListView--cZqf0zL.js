import{_ as d,d as i,o as c,c as n,a as t,e as r}from"./index-ly-seFic.js";var u={VITE_URL:"https://ec-course-api.hexschool.io/",VITE_PATH:"pinyi9",BASE_URL:"/2024vueProject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:a,VITE_PATH:b}=u,m={data(){return{products:[],isNew:!1,tempProduct:{},productModal:null,delProductModal:null}},methods:{checkAdmin(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)leleToken\s*=\s*([^;]*).*$)|^.*$/,"$1");i.defaults.headers.common.Authorization=e,this.axios.post(`${a}V2/api/user/check`).then(s=>{this.getProducts()}).catch(s=>{alert(s.response.data.message),this.$router.push({name:"LoginView"})})},getProducts(){this.axios.get(`${a}V2/api/${b}/admin/products`).then(e=>{this.products=e.data.products}).catch(e=>{alert(e.response.data.message)})},openProduct(e){this.tempProduct=e},openModal(e,s){e==="new"?(this.tempProduct={},this.isNew=!0,this.productModal.show()):e==="edit"?(this.tempProduct={...s},this.isNew=!1,this.productModal.show()):e==="delete"&&(this.tempProduct={...s},this.delProductModal.show())}},mounted(){this.checkAdmin(),this.productModal=new this.$bs.Modal(document.getElementById("productModal"),{keyboard:!1,backdrop:"static"}),this.delProductModal=new this.$bs.Modal(document.getElementById("delProductModal"),{keyboard:!1,backdrop:"static"})}},p={id:"app"},h={class:"container"},f={class:"text-end mt-4"},_={class:"table mt-4"},v=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),y=t("td",null,null,-1),g=t("td",null,null,-1),x=t("td",{class:"text-end"},null,-1),M=t("td",{class:"text-end"},null,-1),w=t("td",null,[t("span",{class:"text-success"},"啟用"),t("span",null,"未啟用")],-1),k={class:"btn-group"},P={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},$=t("div",{class:"modal-dialog modal-xl"},[t("div",{class:"modal-content border-0"},[t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"productModalLabel",class:"modal-title"},[t("span",null,"新增產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),t("div",{class:"modal-body"},[t("div",{class:"row"},[t("div",{class:"col-sm-4"},[t("div",{class:"mb-2"},[t("div",{class:"mb-3"},[t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址"),t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結"})]),t("img",{class:"img-fluid",src:"",alt:""})]),t("div",null,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100"}," 新增圖片 ")])]),t("div",{class:"col-sm-8"},[t("div",{class:"mb-3"},[t("label",{for:"title",class:"form-label"},"標題"),t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題"})]),t("div",{class:"row"},[t("div",{class:"mb-3 col-md-6"},[t("label",{for:"category",class:"form-label"},"分類"),t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類"})]),t("div",{class:"mb-3 col-md-6"},[t("label",{for:"price",class:"form-label"},"單位"),t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位"})])]),t("div",{class:"row"},[t("div",{class:"mb-3 col-md-6"},[t("label",{for:"origin_price",class:"form-label"},"原價"),t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"})]),t("div",{class:"mb-3 col-md-6"},[t("label",{for:"price",class:"form-label"},"售價"),t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"})])]),t("hr"),t("div",{class:"mb-3"},[t("label",{for:"description",class:"form-label"},"產品描述"),t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述"},`
                    `)]),t("div",{class:"mb-3"},[t("label",{for:"content",class:"form-label"},"說明內容"),t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容"},`
                    `)]),t("div",{class:"mb-3"},[t("div",{class:"form-check"},[t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0}),t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用")])])])])]),t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 "),t("button",{type:"button",class:"btn btn-primary"}," 確認 ")])])],-1),V=[$],E={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},L=r('<div class="modal-dialog"><div class="modal-content border-0"><div class="modal-header bg-danger text-white"><h5 id="delProductModalLabel" class="modal-title"><span>刪除產品</span></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"> 是否刪除 <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。 </div><div class="modal-footer"><button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"> 取消 </button><button type="button" class="btn btn-danger"> 確認刪除 </button></div></div></div>',1),T=[L];function A(e,s,B,I,C,l){return c(),n("main",null,[t("div",p,[t("div",h,[t("div",f,[t("button",{class:"btn btn-primary",onClick:s[0]||(s[0]=o=>l.openModal("new"))}," 建立新的產品 ")]),t("table",_,[v,t("tbody",null,[t("tr",null,[y,g,x,M,w,t("td",null,[t("div",k,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:s[1]||(s[1]=o=>l.openModal("edit",e.item))}," 編輯 "),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:s[2]||(s[2]=o=>l.openModal("delete",e.item))}," 刪除 ")])])])])])]),t("div",P,V,512),t("div",E,T,512)])])}const R=d(m,[["render",A]]);export{R as default};
