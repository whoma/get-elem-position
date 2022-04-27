export default class operationalArea extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render(){
        const shadow = this.attachShadow({mode: 'closed'});

		shadow.innerHTML = `
            <style>
                .box {
                    border: 1px solid #6f5656;
                    height: 100%;
                }
            </style>

			<div class="box">
                文件上传
                标记区域
                区域列表(可删除某项)
                判断事件(js <js 代码>)
                导出(弹框，所有的代码)
			</div>
		`
    }
}