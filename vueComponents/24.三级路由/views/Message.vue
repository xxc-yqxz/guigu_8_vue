<template>
    <div role="tabpanel" class="tab-pane active" id="Message">
        <ul class="list-group">
            <li class="list-group-item">
                <!-- <a href="##">message01</a> -->
                <router-link to="/home/message/msgdetail">message01</router-link>
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