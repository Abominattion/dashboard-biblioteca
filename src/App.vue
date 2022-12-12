<template>
    <div v-if="userIsLogged()">
        <Sidebar />
        <section class="main-content">
            <router-view />
        </section>
    </div>

    <div v-else>
        <router-view />
    </div>
</template>

<script>
    import Sidebar from '@/components/Admin/Sidebar/Sidebar.vue'
    import {
        userIsLogged
    } from '@/services/auth'

    export default {
        components: {
            Sidebar,
        },
        data() {
            return {
                session: false
            }
        },
        created() {
            if (userIsLogged()) {
                this.session = true;
            }
        },
        watch: {
            $route() {
                if (userIsLogged()) {
                    this.session = true;
                } else {
                    this.session = false;
                }
            }
        },
    }
</script>

<style>
    @import url('@/assets/css/global.css');
</style>