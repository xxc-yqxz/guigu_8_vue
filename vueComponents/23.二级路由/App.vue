<template>
    <div>
        <div class="container">
            <Header></Header>
        </div>
        <div class="container">
            <div class="row">
                <!-- Nav tabs -->
                <ul class="nav nav-stacked col-md-6" role="tablist">
                    <li role="presentation" class="active">
                        <!-- <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a> -->
                        <router-link to="/home" aria-controls="home" role="tab" data-toggle="tab">HOME</router-link>
                    </li>
                    <li role="presentation">
                        <!-- <a href="#About">About</a> -->
                        <router-link to="/about" aria-controls="About" role="tab" data-toggle="tab">About</router-link>
                    </li>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content col-md-6">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    export default {
        name: '',
        components: {
            Header
        }
    }
</script>

<style scoped>

</style>