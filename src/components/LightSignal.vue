<template>
	<div
	v-bind:class="[ color, {on: isOn, flashing: flashing} ]"
	class="light-signal">
	<div v-if="isOn" class="timer">{{time}}</div>
	</div>
</template>

<script>
	export default{
		name: 'LightSignal',
		props: {
			color: String,
			isOn: Boolean,
			time: Number,
			flashing: Boolean
		}
	}
</script>

<style scoped>
	.light-signal{
		height: 130px;
		width: 130px;
		border-radius: 100%;
		position: relative;
	}

	.red{
		background: #DD0000;
		opacity: 0.2;
	}

	.yellow{
		background: #BBBB00;
		opacity: 0.2;
	}

	.green{
		background: #00DD00;
		opacity: 0.2;
	}

	.on{
		opacity: 1;
	}

	.timer{
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font: 72px Arial;
		color: #fff;
	}

	.flashing{
		animation: flashing 1s infinite;
	}

	@keyframes flashing {
    0% { opacity: 0.8 }
    50% { opacity: 0.3 }
    100% { opacity: 0.8 }
  }
</style>