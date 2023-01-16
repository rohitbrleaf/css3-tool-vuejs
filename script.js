const vm = Vue.createApp({
	name:"tutorial",
	data(){
		return {
			pers:  0,
			rot_x: 0,
			rot_y: 0,
			rot_z: 0,
		}
	},
	computed:{
		perspective: function(){
			return {
				perspective: this.pers + 'px'
			}
		},
		rotate: function () {
			return {
				transform: 'rotateX('+this.rot_x+'deg)  rotateY('+this.rot_y+'deg)  rotateZ('+this.rot_z+'deg)'
			}
		}
	},

}).mount("#app");

