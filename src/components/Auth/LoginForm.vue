<template>
    <div class="auth-login">
        <div class="auth-form">
            <div class="auth-form-header text-center">
                <img src="@/assets/logo-nubbi.png" alt="Logo Nubbi" srcset="">
            </div>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="email"><i class='bx bx-envelope'></i>Email</label>
                    <input type="email" class="form-control" placeholder="Email" v-model="loginDates.email">
                </div>

                <div class="form-group">
                    <label for="password"><i class='bx bxs-key'></i>Senha</label>
                    <input type="password" class="form-control" placeholder="Senha" v-model="loginDates.password">
                </div>

                <button class="btn btn-primary">Entrar</button>
            </form>

            <div class="auth-login-footer text-center">
                <h2>POWERED BY NUBBI</h2>
            </div>
        </div>

        <!-- ==== ALERTAS ==== -->
        <div class="alerts-contents">
            <div class="alerts">
                <div v-if="alertas">
                    <div v-bind:class="alertas.tipo" role="alert">
                        <span><i v-bind:class="alertas.icone"></i></span>
                        {{ alertas.mensagem }}
                    </div>
                </div>
            </div>
        </div>

        <div class="preloader" v-if="loader === true">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Login from "./../../services/login";
    export default {
        data() {
            return {
                loginDates: {
                    email: "adonay.douglas@nubbi.com.br",
                    password: "adonaymaiden1997"
                },
                alertas: {
                    tipo: "",
                    icone: "",
                    mensagem: "",
                },
                loader: false,
            }
        },
        methods: {
            login() {
                let email = this.loginDates.email;
                let password = this.loginDates.password;
                this.loader = true;

                // Verifica se os campos de login estão vazios
                switch (email && password) {
                    case (''):
                        this.loader = false;
                        this.alertas.tipo = "alert alert-info animate__animated animate__shakeX";
                        this.alertas.icone = "bx bx-info-circle";
                        this.alertas.mensagem = "Informe seus dados para fazer login!";
                        return false;
                }

                // Chama a função de fazer login
                Login.login(email, password).then((resposta) => {
                    console.log(resposta);
                    // Adiciona o token e os dados do usuário no LocalStorage
                    localStorage.setItem("token", resposta.data.access_token);
                    localStorage.setItem("user", resposta.data.id);
                    localStorage.setItem("nome", resposta.data.nome);

                    // Faz o login
                    if (localStorage.getItem("token") != null) {
                        this.loader = false;
                        this.$router.push("/dashboard");
                    }
                }).catch((e) => {
                    //Verifica se os dados informados para login estão corretos
                    if (e.response.data.status == 1) {
                        this.loader = false;
                        this.alertas.tipo = "alert alert-danger animate__animated animate__shakeY";
                        this.alertas.icone = "bx bx-error";
                        this.alertas.mensagem = "Email ou senha incorretos!";
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .auth-login {
        background-image: url('@/assets/images/library.png');
        background-color: #fff;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        height: 100vh;
    }

    .auth-form {
        position: fixed;
        top: 0;
        left: 0;
        width: 30%;
        height: 100%;
        background-color: #fff;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .auth-form-header img {
        width: 80%;
    }

    .form-group {
        margin-bottom: 20px;
    }

    label {
        display: flex;
        align-items: center;
        color: #555555;
        font-size: 1.2em;
    }

    label i {
        margin-right: 5px;
        font-size: 1.5em;
    }

    button {
        width: 100%;
        height: 50px;
        color: #fff;
        font-size: 1.2em;
        font-weight: bold;
    }

    .auth-login-footer h2 {
        color: #555555;
        font-weight: bold;
        font-size: 18px;
    }

    .alerts-contents {
        position: absolute;
        padding: 20px;
        top: 0;
        right: 0;
    }

    .alert {
        display: flex;
        align-items: center;
        font-size: 1.2em;
    }

    span i {
        font-size: 2em;
        padding: 10px;
        height: 100%;
        vertical-align: middle;
    }

    .preloader {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
        z-index: 9999;
    }

    input,
    button {
        height: 60px;
    }

    @media screen and (max-width: 1220px) {
        .auth-form {
            width: 100%;
        }
    }
</style>