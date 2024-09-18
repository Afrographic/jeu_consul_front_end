import { HelperFunction } from "../utils/helper_function";


export async function set_view_port() {

    await HelperFunction.sleep(200);

    let viewPort: any = document.querySelectorAll(".vh100");
    let overlay: any = document.querySelectorAll(".overlay");
    let confirmation_box: any = document.querySelector("app-confirm-component");

    if (confirmation_box)
        confirmation_box.style.height = window.innerHeight + "px";

    for (const item of viewPort) {
        item.style.height = window.innerHeight + "px";
    }
    for (const item of overlay) {
        item.style.height = window.innerHeight + "px";
    }
}