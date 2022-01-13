export let styles = `
		#HUDChanger {
			position: fixed;
			z-index: 99999;
			top: 0;
			left: 0;
			pointer-events: none;
			width: 100vw;
			height: 100vh;
		}


		#main-svgCont {
			position: relative;
    		pointer-events: all;
			cursor: grab;
			overflow: visible;
			width: 75px;
			height: 75px;
		}

		#main-svgCont:active, #secondHTMLPage:active {
			cursor: grabbing;
		}

		#sizeboxSVG {
			position: absolute;
			height: 100%;
			width: 100%;
			z-index: 9999;
		}

		#mySVGisAmazing{
			z-index: 9999;
		}

/*
		#Layer_1, #mySVGisAmazing {
			opacity: 1;
			animation-name: fadeIn;
			animation-iteration-count: 1;
			animation-timing-function: ease-in;
			animation-duration: .25s;
		}
*/

		.checkmark {
			stroke: #fff;
			stroke-width: 3;
		}

		.checkmark__check {
			clip-path: circle(35% at 50% 50%);
		}

		#subCont {
			width: 100%;
			height: 100%;
		}

		#secondHTMLPage {
			position: absolute;
			top: 0;
			left: 0;
			border: 1px solid rgb(68, 68, 68);
			width: 40vw;
			height: 40vh;
			z-index: -1;
			color: white;
			background-color: black;
			padding-top: 75px;
			cursor: grab;
		}

		.HTML2-Open {
			animation: 0.25s openWindow ease-in-out, 0.25s fadeIn ease-in;
		}

		.HTML2-Close {
			animation: 0.25s closeWindow ease-in-out forwards, 0.25s fadeOut ease-in forwards;
		}

		

		@keyframes fadeIn {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}

		@keyframes fadeOut {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}

		@keyframes openWindow {
			0% {
				transform: scale(0);
  				transform-origin: top left;
			}
			100% {
				transform: scale(1);
  				transform-origin: top left;
			}
		}

		@keyframes closeWindow {
			0% {
				transform: scale(1);
  				transform-origin: top left;
			}
			100% {
				transform: scale(0);
  				transform-origin: top left;
			}
		}



		
		
		`;