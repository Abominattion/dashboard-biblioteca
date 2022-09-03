<template>
    <div class="auth-login">
        <LoginForm />
    </div>
</template>

<script>
    import LoginForm from '@/components/Auth/LoginForm.vue';
    import { userIsLogged } from '@/services/auth';
    export default {
        components: {LoginForm},
        mounted() {
            // Verifica se existe um usuário logado
            if (userIsLogged()) {
                this.$router.push("/dashboard");
            }
        },
    }
</script>