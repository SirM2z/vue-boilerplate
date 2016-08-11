import * as types from '../types'

//显示消息
export const showMsg = ({
	dispatch
}, content, cb = () => {}, type = 'error') => {
	dispatch(types.SHOW_POPUP_MSG, {
		content: content,
		type: type
	})
	setTimeout(function() {
		cb();
	}, 1000)
}

//隐藏消息
export const hideMsg = ({
	dispatch
}) => {
	dispatch(types.HIDE_POPUP_MSG)
}

//显示加载
export const showLoading = ({
	dispatch
}, content = '正在加载') => {
	dispatch(types.SHOW_POPUP_LOADING, {
		content: content
	})
}

//隐藏加载
export const hideLoading = ({
	dispatch
}) => {
	dispatch(types.HIDE_POPUP_LOADING)
}

//显示Modal
export const showModal = ({
	dispatch
}) => {
	dispatch(types.MODAL_SHOW)
}

//隐藏Modal
export const hideModal = ({
	dispatch
}) => {
	dispatch(types.MODAL_HIDE)
}