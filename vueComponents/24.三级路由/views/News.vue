<template>
    <div role="tabpanel" class="tab-panel" id="News">
        <ul class="list-group">
            <li class="list-group-item">
                news1
                <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false"
                    autocomplete="off">
                </button>
            </li>
        </ul>
        <div class="alert alert-success" role="alert">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
    }
</script>

<style scoped>

</style>