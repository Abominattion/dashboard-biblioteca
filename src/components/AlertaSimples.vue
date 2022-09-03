<template>
    <div class="col-12">
        <div :class="classe" role="alert">
            <span><i :class="icone"></i></span>
            {{alerta.mensagem}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            alerta: {Type: Object, Default: []}
        },
        data(){
            return{
                classe: null,
                icone: null
            }
        },
        created() {
            switch (this.alerta.tipo) {
                case 'info':
                    this.classe = 'alert alert-info';
                    this.icone = 'bx bxs-info-circle';
                    break;

                case 'success':
                    this.classe = 'alert alert-success';
                    this.icone = 'bx bxs-check-circle';
                    break;
                
                case 'warning':
                    this.classe = 'alert alert-warning';
                    this.icone = 'bx bxs-error-circle';
                    break;
                
                case 'danger':
                    this.classe = 'alert alert-danger';
                    this.icone = 'bx bxs-error';
                    break;
            }
        }
    }
</script>