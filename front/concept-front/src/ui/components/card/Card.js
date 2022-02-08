export default {
	props: {
		id: { default: null },
		title: { default: '' },
		hasImg: { default: false },
		imgUrl: { default: null },
	},
	setup({ id, title, hasImg, imgUrl }) {
		return {
			id,
			title,
			hasImg,
			imgUrl,
		}
	},
}
