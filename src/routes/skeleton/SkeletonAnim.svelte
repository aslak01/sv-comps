<script lang="ts">
	export let type: 'circular' | 'linear' = 'circular';
	export let color = '#ddd';
	export let duration = '20s';
</script>

<div class="animated {type}" style="--_anim-color: {color}; --_anim-dur: {duration}"></div>

<style>
	.animated {
		background: conic-gradient(#efefef, #ddd, #aaa, #ddd);
		position: absolute;
		top: -100%;
		left: -100%;
		height: 300%;
		width: 300%;
		min-width: 200px;
	}
	.circular {
		background: radial-gradient(#dfdfdf, #eee, #efefef);
		animation: spin 2s cubic-bezier(0.5, 0.75, 0.75, 1.25) infinite alternate both;
	}
	.linear {
		opacity: 0.3;
		animation: move 4s cubic-bezier(0.5, 0.75, 0.75, 1.25) infinite alternate both;

		/* opacity: 0.5; */
	}
	@keyframes move {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(100%);
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0) scale(1);
		}
		to {
			transform: rotate(359deg) scale(2) translateX(30%) translateY(-20%);
		}
	}
</style>
