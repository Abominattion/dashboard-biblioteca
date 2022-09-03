import Vue from "vue";

Vue.mixin({
    filters: {
        // Formata data para o padrão brasileiro | Exemplo: 2020-01-01 - 01/01/2020
        formatarData(date) {
            let format = date.slice(0, 19).replace("T", " ");
            format = format.substr(0, 10).split("-").reverse().join("/");
            return format;
        },
        // Formata CPF adicionando os pontos
        formataCPF(cpf) {
            cpf = cpf.replace(/[^\d]/g, "");
            return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        } 
    },
})