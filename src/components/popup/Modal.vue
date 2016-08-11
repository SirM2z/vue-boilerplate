<style>
.modal-box{
	position: fixed;
    z-index: 1000;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    display: flex;
    justify-content: center ;
    align-items: center ;
}	
</style>
<template>
<div class="modal-box" 
	 v-show="show"
	 @touchmove="prevent" 
	 @mousewheel="prevent"
	 @click="hideModal"
	>
	<div class="modal-content" @click="prevent">
		<slot></slot>
	</div>
</div>	
</template>
<script>
import {hideModal} from '../../vuex/actions/popupActions'
export default {
	vuex:{
		actions: {
            hideModal
        },
	    getters:{
	      	show: ({Modal}) => Modal.show
	    }
  	},
	methods: {
		prevent: function(e){
			e.preventDefault();
			e.stopPropagation();
		}
	}
}	
</script>