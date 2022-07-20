<template>
    <div>
          <div class="container">
            <main class="form-signin text-center">
  <form @submit.prevent="send">
    <h1 class="h3 mb-3 fw-normal"> Table elave et </h1>

    <div class="form-floating">
      <input type="text" v-model="table.tableN" class="form-control" id="floatingInput" placeholder="M6">
      <label for="floatingInput">Masa Nomre</label>
    </div>
    <div class="form-floating">
      <input type="text" v-model="table.tableU" class="form-control my-3" id="floatingPassword" placeholder="mes : Admin">
      <label for="floatingPassword">Masa X</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary"  type="submit"> Gonder </button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>

        </div>
    </div>
</template>


<script>
export default {
    data(){
    return {
            table : {
                tableN : "",
                tableU : ""
            }
    }
    },

    methods : {
        send(){
            this.$store.dispatch('tableAdd', this.table);
        }
    }
}
</script>

