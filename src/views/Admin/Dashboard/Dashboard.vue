<template>
    <div class="dashboard">
        <Sidebar />
        <DashboardHome />
    </div>
</template>

<script>
import Sidebar from '../../../components/Admin/Sidebar/Sidebar.vue'
import DashboardHome from '../../../components/Admin/Dashboard/DashboardHome.vue'
export default {
    components: {
        Sidebar, DashboardHome
    }
}
</script>

