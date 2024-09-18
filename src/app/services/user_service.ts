import { User } from "../models/user_model";
import { HelperFunction } from "../utils/helper_function";
import { APICallSecure } from "./api_call_secure";

export class User_Service{
    static async init_user() {
        let token = localStorage.getItem("token");
        if (token == undefined) {
            return;
        }
        APICallSecure.token = token;
        let res = await APICallSecure.get_data("/get_user_data");
        if (res.response.status == 200) {
            User.user = User.from_json(res.data.user);
            this.check_pro();
            this.check_entreprise();
            this.commercial();
            this.have_auto_extends();
        } 

    }
 
    static async check_pro() {
        let res = await APICallSecure.get_data(`/is_pro/${User.user.user_id}`);
        if (res.response.status == 200) {
            User.is_pro = res.data.is_pro;
        }
    }
    static async check_entreprise() {
        let res = await APICallSecure.get_data(`/is_company/${User.user.user_id}`);
        if (res.response.status == 200) {
            User.is_entreprise = res.data.is_company;
        }
    }
    static async commercial() {
        let res = await APICallSecure.get_data(`/is_commercial/${User.user.user_id}`);
        if (res.response.status == 200) {
            User.is_commercial = res.data.is_commercial;
        }
    }

    static async have_auto_extends() {
        let res = await APICallSecure.get_data("/have_auto_extends");
        if (res.response.status == 200) {
            User.have_auto_extends = res.data.auto_extends;
        }
    }
}