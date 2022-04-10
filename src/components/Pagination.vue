<template>
<div>
  <p class="pagination-container">
   <button @click="changePage(0)">Btn</button>
   <button @click="changePage(-1)"> Btn</button>
    <span class="inner-pagination-content">
                Page {{ page }} of {{ pages }}
            </span>
  <button @click="changePage(1)">Btn</button>
    <i class="fal fa-chevron-double-right" @click="changePage(pages)"/>
    <span
        class="showing"
        :class="perPage === amount && 'active'"
        v-for="(amount, index) in perPageOptions"
        :key="index"
        @click="setPerPage(amount)"
    >{{amount}}</span>
  </p>
</div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['totalRecords', 'perPageOptions'],
  data: function () {
    return {
      page: 1,
perPage:10,
    }
  },
  methods: {
    setPerPage(amount) {
      this.perPage = amount
      this.$emit('input', {page: this.page, perPage: amount})
    },
    changePage (val) {
      console.log('vv',val)
      switch (val) {
        case 0: this.page = 1; break;
        case -1: this.page = this.page > 1 ? this.page - 1 : this.page; break;
        case 1: this.page = this.page < this.pages ? this.page + 1 : this.page; break;
        case this.pages: this.page = this.pages; break;
      }
      this.$emit('update:option', { page: this.page, perPage: this.perPage })
    }
  },
  created() {
    console.log(this.totalRecords)
    console.log(this.perPage)
  },
  computed: {
    pages () {
      const remainder = this.totalRecords % this.perPage
      if (remainder > 0) {
        return Math.floor(this.totalRecords / this.perPage) + 1
      } else {
        return this.totalRecords / this.perPage
      }
    }
  },
}
</script>

<style scoped>

</style>