<style scoped>
    h1{
        color: #28a7e1;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
    h2{
        text-align: center;
        font-size: 20px;
        margin-top: 50px;
    }
    img{
        width: 150px;
    }
</style>
<template>
    <h2>
        <img src="../images/logo.png">
    </h2>
    <h1>
        welcome to vue!:
        {{ 3731700153 |  NumberSeparator }}
    </h1>
    <h2 v-time></h2>
    <a v-link="{name: 'test'}">go to test</a>
</template>
<script>
    import NumberSeparator from '../filters/number-separator';
    import Time from '../directives/time';

    module.exports = {
        filters: {
            NumberSeparator: NumberSeparator
        },
        directives: {
            time: Time
        },
        data: function() {
            return {

            }
        },
        ready: function() {
            
        },
        beforeDestroy: function() {

        },
        methods: {
            
        }
    }
</script>
