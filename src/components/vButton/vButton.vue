<template>
	<button :class="`button${' button_' + type}`">
		<slot/>
	</button>
</template>

<script>
	export default {
		name: "vButton",
		props: {
			type: { required: true, type: String}
		}
	}
</script>

<style scoped>

</style>