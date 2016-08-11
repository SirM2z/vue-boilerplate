<style>
.modal-ne{background: #fff;height: 200px;width: 8rem;padding: 10px;box-shadow: 0 0 10px #ccc; border-radius: 5px;}
</style>
<template>
<div style="height: 1200px;">
    <p><a href="#" @click="showModal">showModal</a></p>
    <p><a href="#" @click="showLoading">showLoading</a></p>
    <p><a href="#" @click="showMsgFun">showMsg</a></p>
    <Modal>
        <div class="modal-ne">
            <p>asdfasdf</p>
            <a class="blue" @click="hideModal">关闭</a>
        </div>        
    </Modal>
</div>
</template>
<script>
import Modal from '../components/popup/Modal.vue'
import {showModal, hideModal, showLoading, showMsg} from '../vuex/actions/popupActions'
export default {
    vuex: {
        actions: {
            showModal,
            hideModal,
            showLoading,
            showMsg
        }
    }, 
    ready: function(){
    },
    components: {
        Modal
    },
   	methods: {
		showMsgFun: function(){
            // showLoading(this.$store);
            showMsg(this.$store, 'hello vue!');
        }
	}
}
</script>