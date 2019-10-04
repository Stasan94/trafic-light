<template>
	<div class="trafic-light">
		<LightSignal
		v-bind:color="'red'"
		v-bind:isOn="redIsOn"
		v-bind:time="$store.getters.TIME"
		v-bind:flashing="redIsOn ? flashing : false"
		/>
		<LightSignal
		v-bind:color = "'yellow'"
		v-bind:isOn="yellowIsOn"
		v-bind:time="$store.getters.TIME"
		v-bind:flashing="yellowIsOn ? flashing : false"
		/>
		<LightSignal
		v-bind:color = "'green'"
		v-bind:isOn="greenIsOn"
		v-bind:time="$store.getters.TIME"
		v-bind:flashing="greenIsOn ? flashing : false"
		/>
	</div>
</template>

<script>
	import LightSignal from './LightSignal';
	import {store} from '../store/store.js';

	export default{
		name: 'TraficLight',
		components: {
			LightSignal
		},
		data: function(){
			return {
				redIsOn: false,
				yellowIsOn: false,
				greenIsOn: true,
				timer: null,
				time: 15,
				currentLightSignal: 'green',
				previousLightSignal: null,
				flashing: false
			}
		},
		props: {
			light: String,
			lightTime: Number
		},
		created: function(){
			this.changeLightSignal();
			this.startTimer();
		},
		watch: {
			'light': function(){
				this.flashing = false;
				this.currentLightSignal = this.light;
				this.$store.dispatch('SET_TIME', this.lightTime);
				this.changeLightSignal();
				this.startTimer();
			}
		},
		methods: {
			changeLightSignal: function(){
				if (this.light == 'red'){
					this.redIsOn = true;
					this.yellowIsOn = false;
					this.greenIsOn = false;
				}
				else if (this.light == 'yellow'){
					this.redIsOn = false;
					this.yellowIsOn = true;
					this.greenIsOn = false;
					this.flashing = true;
				}
				else if (this.light == 'green'){
					this.redIsOn = false;
					this.yellowIsOn = false;
					this.greenIsOn = true;
				}
			},
			startTimer: function(){
				if(this.timer){
					clearInterval(this.timer);
				}
				this.timer = setInterval(this.changeTime, 1000);
			},
			changeTime: function(){
				if(this.$store.getters.TIME > 1){
					this.$store.dispatch('SET_TIME', this.$store.getters.TIME - 1);
				}
				else{
					clearInterval(this.timer);
					this.changePage();
				}
				if(this.$store.getters.TIME === 3) {
        			this.flashingOn();
      			}
			},
			changePage: function(){
				if(this.currentLightSignal == 'green' || this.currentLightSignal == 'red'){
					this.previousLightSignal = this.currentLightSignal;
					this.currentLightSignal = 'yellow';
					this.$router.replace('/yellow');
				}
				else if(this.currentLightSignal == 'yellow' && this.previousLightSignal == 'green'){
					this.previousLightSignal = 'yellow';
					this.currentLightSignal = 'red';
					this.$router.replace('/red');
				}
				
				else if(this.currentLightSignal == 'yellow' && this.previousLightSignal == 'red'){
					this.previousLightSignal = 'yellow';
					this.currentLightSignal = 'green';
					this.$router.replace('/green');
				}
				else if(this.currentLightSignal == 'yellow' && this.previousLightSignal == 'yellow'){
					this.currentLightSignal = 'red';
					this.$router.replace('/red');
				}
			},
			flashingOn: function(){
				this.flashing = true;
				return this.flashing;
			}
		}
	}
</script>

<style scoped>
	.trafic-light{
    	height: 500px;
    	width: 180px;
    	background: #222;
    	border-radius: 30px;
    	margin: 10px auto;
    	display: flex;
    	flex-direction: column;
    	justify-content: space-around;
    	align-items: center;
  }
</style>