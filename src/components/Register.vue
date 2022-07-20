<template>
  <div>
    <div class="container">
      <main class="form-signin text-center">
        <form @submit.prevent="send">
          <h1 class="h3 mb-3 fw-normal">
            {{ user.isLogin == false ? "Qeydiyyat" : "Login" }}
          </h1>

          <div class="form-floating">
            <input
              type="email"
              v-model="user.email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              v-model="user.password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <p class="btn" @click="user.isLogin = !user.isLogin">
              Qeyydiyatiniz varmi?
            </p>
          </div>
          <button
            class="w-100 btn btn-lg btn-primary"
            :class="{ 'btn-success': user.isLogin }"
            type="submit"
          >
            {{ user.isLogin == false ? "Qeydiyyat" : "Login" }}
          </button>
          <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: null,
        isLogin: false,
      },
    };
  },

  methods: {
    send() {
      this.$store.dispatch("userSend", this.user);
    },
    
    logOut(state) {
      state.token = ''
      this.$store.commit("delete");
  },
  }
};
</script>

<style scoped>
body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>