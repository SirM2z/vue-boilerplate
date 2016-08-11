<style>
.loading-box {
    position: fixed;
    z-index: 1000;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0);
}
.loading-css3{
	position: fixed;
    top: 50%;
    left: 50%;

    margin-top: -2rem;
    margin-left: -1.1rem;
    padding: .3rem;

    text-align: center;
	background: rgba(0, 0, 0, .65);
    border-radius: .15rem;
    z-index: 1001;
    color: #fff;
    min-width: 2.1rem;
    max-width: 5rem;
}
.loading-box .loader {
    -webkit-animation: loading 1.1s infinite linear;
            animation: loading 1.1s infinite linear;
    text-indent: -9999em;

    border-top: .3em solid rgba(255, 255, 255, .2);
    border-right: .3em solid rgba(255, 255, 255, .2);
    border-bottom: .3em solid rgba(255, 255, 255, .2);
    border-left: .3em solid #fff;
}
.loading-box .loader,
.loading-box .loader:after {
    width: 2.5em;
    height: 2.5em;
	margin: 0 auto .125rem auto;
    border-radius: 50%;
}
@-webkit-keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}
@keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}
</style>
<template>
<div class="loading-box"
	 v-show="msg.content != ''"  
	 @touchmove="prevent" 
	 @mousewheel="prevent"
	>
	<div class="loading-css3">
		<div class="loader">Loading...</div>
		<div>{{msg.content}}</div>
	</div>
</div>	
</template>
<script>
export default {
	methods: {
		prevent: function(e){
			e.preventDefault();
			e.stopPropagation();
		}
	},
	vuex:{
	    getters:{
	      	msg: ({Loading}) => Loading.message
	    }
  	}
}	
</script>