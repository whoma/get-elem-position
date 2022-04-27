export default class CanvasStage extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    connectedCallback() {
        console.log('dddd');
    }
    render(){
        const shadow = this.attachShadow({mode: 'closed'});
        
		shadow.innerHTML = `
            <style>
                .box {
                    border: 1px solid #d8c7ff;
                    height: 100%;
                }
            </style>
			<div class="box">
                画布、区域
			</div>
		`
    }
}