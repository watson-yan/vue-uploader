<template>
	<div>
		<h4>基于Vue.2X的html5上传图片组件</h4>
		<div style="width: 502px;">
			<uploader :src="'/api/imgs'"></uploader>
		</div>
	</div>
</template>
<script>
	import uploader from './uploader.vue'
	export default {
		data() {
			return {}
		},
		components: {
			uploader
		}
	}
</script>