<template>
  <svg class="svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       width="45.974px" height="45.975px" viewBox="0 0 45.974 45.975" style="enable-background:new 0 0 45.974 45.975;"
       xml:space="preserve">
		<g>
			<g>
				<g>
					<path d="M9.629,44.68c-1.154,1.16-2.895,1.51-4.407,0.885c-1.513-0.623-2.5-2.1-2.5-3.735V4.043c0-1.637,0.987-3.112,2.5-3.736
						c1.513-0.625,3.253-0.275,4.407,0.885l17.862,17.951c2.088,2.098,2.088,5.488,0,7.585L9.629,44.68z"/>
				</g>
				<g>
					<g>
						<path d="M38.252,45.975c-2.763,0-5-2.238-5-5V5c0-2.762,2.237-5,5-5c2.762,0,5,2.238,5,5v35.975
							C43.252,43.736,41.013,45.975,38.252,45.975z"/>
					</g>
				</g>
			</g>
		</g>
  </svg>
</template>

<script>
    export default {
        name: "stopWatchImg"
    }
</script>

<style scoped lang="scss">
  .svg {
    width: 26px;
    height: auto;
    fill: #F2E9E4;

    transition: transform .25s;
    cursor: pointer;

    &:hover, &:focus {
      // transform: rotate(45deg);
    }
  }
</style>
