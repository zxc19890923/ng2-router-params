import {Component, OnInit} from "@angular/core";
// 获取路由传递传递过来的params(id) 增加模块激活的路由(ActivatedRoute)
import {ActivatedRoute} from "@angular/router";
@Component({
    selector: "my-info",
    templateUrl: "../templates/about-info.html"
})

export class AboutInfoComponent implements OnInit{
    // 初始化变量
    id: Object;
    constructor(public route: ActivatedRoute) {
    }
    // 方法中操作id, 通过id查询信息等等
    ngOnInit() {
        this.route.params.subscribe(params => {
            console.log(params); //{ id : "xx" }
        });
        // 详细写法
        this.route.params.sbuscripbe(
            params => this.id = params // {id: 2} 对象
        )
    }
}
