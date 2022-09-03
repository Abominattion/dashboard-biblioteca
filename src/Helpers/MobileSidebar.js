import Vue from "vue";

Vue.mixin({
    methods: {
        mobileSidebar() {
            let menu = document.querySelector('.sidebar');
            
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
                
            } else {
                menu.classList.add("active");
            }
        }
    }
});