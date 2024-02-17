<template>
  <div
    class="modal fade"
    id="userProductMoreModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="userProductMoreModal"
    >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ tempData.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
            >
          </button>
        </div>
        <div class="modal-body">
          <div class="row my-3">
            <div class="col-sm-6">
              <img class="img-fluid" :src="tempData.imageUrl" alt="">
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill">{{ }}</span>
              <h6>商品描述：</h6>
              <p>{{ tempData.description }}</p>
              <h6>商品內容：</h6>
              <p>{{ tempData.content }}</p>
              <div class="h5" v-if="tempData.origin_price === tempData.price">{{ tempData.price }} 元</div>
                <div v-else>
                  <del class="h6">原價 {{ tempData.origin_price }} 元</del>
                  <div class="h5 text-danger">銷售價 {{ tempData.price }} 元</div>
                </div>
              <div>
                <div class="input-group mb-3">
                  <!-- <input type="number" class="form-control" min="1" v-model="qty"> -->
                  <select name="" id="" class="form-control" v-model="qty">
                    <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
                  </select>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="addToCart(tempData.id, qty)"
                    >加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['tempData','addToCart'],
  data() {
    return {
      userProductMoreModal: null,
      pData: {},
      qty: 1,
    };
  },

  methods: {
    openModal() {
      this.userProductMoreModal.show();
    },
    closeModal() {
      this.userProductMoreModal.hide();
      this.qty = 1;
    },
  },

  watch: {
    tempData(){
      this.qty = 1;
    }
  },

  mounted() {
    this.userProductMoreModal = new this.$bs.Modal(this.$refs.userProductMoreModal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
};
</script>