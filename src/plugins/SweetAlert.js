import Vue from "vue";
const Swal = require('sweetalert2');

Vue.mixin({
    methods: {
        successAlert(data){
            Swal.fire(data);
        },
        errorAlert(error){
            Swal.fire(error);
        }
    }
});