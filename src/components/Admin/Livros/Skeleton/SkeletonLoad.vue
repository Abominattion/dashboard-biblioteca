<template>
    <div class="loading-skeleton">
        <div class="input-group justify-content-between">
            <div class="form-group">
                <label for="nome"></label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="nome"></label>
                <input type="text" class="form-control" >
            </div>
        </div>
        <div class="input-group justify-content-between">
            <div class="form-group">
                <label for="nome"></label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="nome"></label>
                <input type="text" class="form-control" >
            </div>
        </div>
        <div class="input-group justify-content-between">
            <div class="form-group">
                <label for="nome"></label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="nome"></label>
                <input type="text" class="form-control" >
            </div>
        </div>

        <div class="d-flex justify-content-end mt-3">
            <b-skeleton type="button"></b-skeleton>
        </div>
    </div>
</template>

<style scoped>
    .loading-skeleton .form-control {
        color: transparent;
        appearance: none;
        -webkit-appearance: none;
        background-color: #eee;
        border-color: #eee;
    }

    @keyframes loading-skeleton {
        from {
            opacity: 0.4;
        }

        to {
            opacity: 1;
        }
    }

    .loading-skeleton {
        pointer-events: none;
        animation: loading-skeleton 1s infinite alternate;
    }

    .form-group {
        flex-basis: calc(50% - 10px);
    }

    input,
    select {
        margin: 10px 0;
    }
</style>