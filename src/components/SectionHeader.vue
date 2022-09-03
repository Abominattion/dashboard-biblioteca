<template>
    <div class="section-header">
        <div class="breadcrumb">
            <h1><i :class='icone'></i>{{TitleView}}</h1>
            <button class="btn-menu btn btn-primary" @click="mobileSidebar()"><i class='bx bx-menu'></i></button>
        </div>

        <div class="search" v-if="search">
            <input type="text" class="form-control" placeholder="Pesquisar por aluno" v-model="busca">
            <select class="form-select bg-primary text-white" v-model="filtro">      
                <option 
                    class="bg-white text-dark" 
                    v-for="option in options" 
                    :key="option.id" 
                    :value="option.value"
                    selected>{{option.text}}</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            TitleView: {type: String, Default: 'Titulo'},
            view: { type: String, Default: 'View' },
            search: { type: Boolean, Default: false },
        },
        data() {
            return {
                busca: '',
                filtro: null,
                options: [],
                icone: null
            }
        },
        created() {
            switch (this.TitleView) {
                case 'Alunos':
                    this.options = 
                    [
                        { value: 'nome', text: 'Nome' },
                        { value: 'email', text: 'Email' },
                        { value: 'documento', text: 'Documento' },
                    ];
                    this.icone = 'bx bxs-user';
                    break;
            }

            this.filtro = this.options[0].value;
        },
        methods: {
            buscar(busca, options) {
                this.$emit('buscar', busca, options);
            },
            filtrar(filtro) {
                this.$emit('filtrar', filtro);
            }
        },
        watch: {
            busca(newValue) {
                this.buscar(newValue, this.options);
            },
            filtro(newValue) {
                this.filtrar(newValue);
            }
        },
    }
</script>

<style scoped>
    .form-select {
        max-width: 135px;
    }
</style>