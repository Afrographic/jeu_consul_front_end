import { HelperFunction } from './helper_function';
export class Validator {
    static valid_email(email: any) {
        if (email == 'undefined') return false;
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    }
    static correctURL(url: any) {
        if (url == 'undefined') return false;
        var urlregex = new RegExp(
            "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|192.168.232.99|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
        return urlregex.test(url);
    }
    static correctNumber(num: string) {
        if (num == 'undefined') return false;
        return /^\d+$/.test(num);
    }
    static correctFile(file?: File) {
        return file != null && file != undefined;
    }
    static isnull(item: any) {
        return item == 'undefined';
    }
    static correctString(str: string) {
        //console.log(str);
        if (str == 'undefined') return false;
        const regex = new RegExp("^[a-z 0-9]+$", "i")
        return regex.test(str);
    }
    static filledArray(arr: any) {
        if (arr == undefined) return false;
        return arr.length > 0;
    }

    static valid_date(date_string: string): boolean {
        const regex = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$")
        if (regex.test(date_string)) {
            let year = parseInt(date_string.split("-")[0]);
            let month = parseInt(date_string.split("-")[1]);
            let days = parseInt(date_string.split("-")[2]);
            let date = new Date();
            let current_year = date.getFullYear();
            return year <= current_year && month <= 12 && days <= 31;
        } else {
            return false;
        }
    }

    static valid_sex(user_sex: string) {
        return user_sex === 'M' || user_sex === 'F';
    }

    static valid_password(password: string) {
        password = password ?? "";
        return password.trim().length >= 8;
    }

    static valid_username(username: string) {
        username = username ?? "";
        return username.trim().length >= 3;
    }
    
    static valid_city(user_city: string) {
        user_city = user_city ?? "";
        return user_city.trim().length >= 3;
    }

    static valid_bio(bio: string) {
        bio = bio ?? "";
        return bio.trim().length <= 250;
    }
    static valid_phone_number(phone: string) {
        phone = phone ?? "";
        phone = HelperFunction.remove_all_spaces(phone);
        const regex = new RegExp("^\\+[0-9]{1,5}[0-9-_]{4,}$")
        return regex.test(phone);
    }
    static valid_string(str: string) {
        str = str ?? "";
        str = HelperFunction.remove_all_spaces(str.trim());
        return /^[a-zA-Z_-]{3,}$/.test(str);
    }

    // social media validations
    static valid_facebook(link: string) {
        let regex = new RegExp("^https://www\.facebook\.com.*$");
        return regex.test(link);
    }

    static valid_twitter(link: string) {
        let regex = new RegExp("^https://twitter\.com.*$");
        return regex.test(link);
    }

    static valid_instagram(link: string) {
        let regex = new RegExp("^https://www\.instagram\.com.*$");
        return regex.test(link);
    }

    static valid_tiktok(link: string) {
        let regex = new RegExp("^https://www\.tiktok\.com.*$");
        return regex.test(link);
    }
    static valid_telegram(link: string) {
        let regex = new RegExp("^https://t\.me.*$");
        return regex.test(link);
    }
    static valid_linkedin(link: string) {
        let regex = new RegExp("^https://www\.linkedin\.com.*$");
        return regex.test(link);
    }
    static valid_whatsapp(link: string) {
        let regex = new RegExp("^https://wa.me/.*$");
        return regex.test(link);
    }
}