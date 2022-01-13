import {
    iconSVG,
    noSVG
} from "svgs.js";
import draggabilly from 'https://cdn.skypack.dev/draggabilly';

/** @param {NS} ns **/
export async function eventlistener(ns) {

    let getSVG = document.getElementById("main-svgCont");
    let count = true;
    let iFrame = `<iframe id="secondHTMLPage" class="HTML2-Open"></iframe>`;
    let iFrameLoc = document.getElementById("main-svgCont");
    let secondHTML = `
	<html id="HTML2-HTML">
	<head>
		<style>
				button, input[type="submit"], input[type="reset"] {
					background: none;
					color: inherit;
					border: none;
					padding: 0;
					font: inherit;
					cursor: pointer;
					outline: inherit;
				}

				#HTML2-HTML{
					width: 100%;
					height: 100%;
					overflow: hidden;
					background-color: black;
					border-top: 1px solid rgb(68, 68, 68);
				}
			
				#HTML2-body{
					margin: 0;
					width: 100%;
					height: 100%;
				}

				#HTML2-onlineButt{
					margin: 0px;
    				font-family: "Lucida Console", "Lucida Sans Unicode", "Fira Mono", Consolas, "Courier New", Courier, monospace, "Times New Roman";
    				font-weight: 400;
    				font-size: 2rem;
    				line-height: 1.5;
    				color: rgb(0, 204, 0);
					padding: 0.5em 1em;
					border: 1px solid rgb(0,204,0);
					transition: background-color 0.15s ease-in-out;
				}

				#HTML2-onlineButt:active {
					background-color: rgb(0,204,0);
				}

				#HTML2-buttCont {
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				#canv {
					animation: 5s fadeOpacity;
					animation-fill-mode: forwards; 
					animation-delay: 5s; 
				}


				
				@keyframes fadeOpacity {
					0% {
						opacity: 1;
					}
					100% {
						opacity: 0.15;
					}
				}

		</style>
	</head>
		<body id="HTML2-body">
			<div id="HTML2-container">
				<div id="HTML2-buttCont">
					<button id="HTML2-onlineButt" type="button">Go Online</button>
				</div>
			</div>


			<script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js'></script>
			<script>
				document.getElementById("HTML2-onlineButt").addEventListener("click", e => {
					document.getElementById("HTML2-container").innerHTML = '<canvas id="canv" width="100%" height="100%"></canvas>';


					const canvas = document.getElementById('canv');
					const ctx = canvas.getContext('2d');

					const w = canvas.width = document.body.offsetWidth;
					const h = canvas.height = document.body.offsetHeight;
					const cols = Math.floor(w / 20) + 1;
					const ypos = Array(cols).fill(0);

					ctx.fillStyle = '#000';
					ctx.fillRect(0, 0, w, h);

					function matrix() {
  						ctx.fillStyle = '#0001';
  						ctx.fillRect(0, 0, w, h);

  						ctx.fillStyle = '#0f0';
  						ctx.font = '15pt monospace';

  						ypos.forEach((y, ind) => {
    						const text = String.fromCharCode(Math.random() * 128);
    						const x = ind * 20;
    						ctx.fillText(text, x, y);
    						if (y > 100 + Math.random() * 10000) ypos[ind] = 0;else
    						ypos[ind] = y + 20;
  						});
					}
					setInterval(matrix, 50);

					setTimeout(goOnline() ,7000);

					function goOnline(){
						
						fetch("")
						.then(response => response.json())
						.then(data => {
							
						});


					}
				});

			</script>
		</body>
	</html>`;

    let draggy = new draggabilly(getSVG, {
        containment: "#HUDChanger"
    });

    draggy.on("staticClick", (event, pointer) => {
        if (count) {
            count = false;
            document.getElementById("main-svgCont").innerHTML = noSVG;
            iFrameLoc.insertAdjacentHTML("beforeend", iFrame)
            document.getElementById("secondHTMLPage").classList.add("HTML2-Open");
            document.getElementById("secondHTMLPage").src = "data:text/html;charset=utf-8," + escape(secondHTML);
        } else if (!count) {
            count = true;
            document.getElementById("main-svgCont").innerHTML = iconSVG;
            if (document.getElementById("secondHTMLPage")) {
                document.getElementById("secondHTMLPage").className = "HTML2-Close";
                setTimeout(() => document.getElementById('secondHTMLPage').remove(), 250);
            }
        }
    });



    draggy.on("pointerDown", (event, pointer) => {
        getSVG.style.cursor = "grabbing";
    });

    draggy.on("pointerUp", (event, pointer) => {
        getSVG.style.cursor = "pointer";
    });
}