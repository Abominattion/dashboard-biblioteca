import Vue from "vue";

Vue.mixin({
    methods: {
        mobileSidebar() {
            let menu = document.querySelector('.sidebar');
            let mainContent = document.querySelector('.main-content');

            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
                
            } else {
                menu.classList.add("active");
            }

            if (mainContent.classList.contains("main-content-active")) {
                mainContent.classList.remove("main-content-active");
                
            } else {
                mainContent.classList.add("main-content-active");
            }
        }
    }
});