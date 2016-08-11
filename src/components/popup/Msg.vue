<style>
.msg-info{
	position: fixed;
	top: 50%;
	width: 10rem;
	margin-top: -1rem;
	text-align: center;
	z-index: 1000;
}	
.msg-info span{
	display: inline-block;
	background: rgba(0,0,0,.7);
	color: #fff;
	padding:.3rem .4rem;
	border-radius: 5px;
	word-wrap: break-word;
	text-align: center;
	word-break:break-all;
	min-width: 3rem;
    max-width: 100%;
    line-height: .6rem;
}
</style>
<template>
	<div class="msg-info" v-show="msg.content != ''">
		<span class="f14">{{msg.content}}</span>
	</div>
</template>
<script>
import { showMsg, hideMsg } from '../../vuex/actions/popupActions'
export default {
	vuex:{
	    getters:{
	      	msg: ({Msg}) => Msg.message
	    },
	    actions:{
	      	showMsg,
	      	hideMsg
	    }
  	},
  	watch: {
  		'msg': {
  			handler: function(val, oldVal){
  				var _this = this;
  				if(val.content !== ''){
			       setTimeout(function(){
			       		_this.hideMsg()
			       }, 1000);	
			    }
  			},
  			deep: true
  		}
  	}
}	
</script>