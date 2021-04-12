<template>
  <div id="components-modal-demo-position">
    <AButton style="height: 100%;width: 30%;border-radius: 20px;text-align:center;color:green;border: 1px solid green" @click="() => setModal1Visible(true)">ADD TO CART</AButton>
    <a-modal
      title="20px to Top"
      :dialog-style="{ top: '20px' }"
      :visible="modal1Visible"
      @ok="() => setModal1Visible(false)"
      @cancel="() => setModal1Visible(false)"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "CartModal",
  data(){
    return {
      modal1Visible: false,
    };
  },
  methods: {
    setModal1Visible(modal1Visible) {
      this.modal1Visible = modal1Visible;
    },
  },
}
</script>

<style scoped>

</style>
