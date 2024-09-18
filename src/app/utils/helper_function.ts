import { Language } from "../services/language";

export class HelperFunction {

    static async set_heights(){
        await HelperFunction.sleep(600);
        let heights:any = document.querySelectorAll(".vh100");
        for(const height of heights){
            height.style.height = window.innerHeight +'px';
        }
    }

    static numFormatter(num: number) {
        const lookup = [
            { value: 1, symbol: "" },
            { value: 1e3, symbol: "k" },
            { value: 1e6, symbol: "M" },
            { value: 1e9, symbol: "B" },
            { value: 1e12, symbol: "T" },
            { value: 1e15, symbol: "P" },
            { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function (item) {
            return num >= item.value;
        });
        return item ? (num / item.value).toFixed(2).replace(rx, "$1") + item.symbol : "0";
    }

    static shuffle(array: any) {
        let currentIndex = array.length;
        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }


    static Ucase(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    static isInViewport(el: any) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    static sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    static getDate() {
        let currentdate = new Date();
        let datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        return datetime;
    }

    static uid() {
        let a = new Uint32Array(3);
        window.crypto.getRandomValues(a);
        return (performance.now().toString(36) + Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g, "").substring(0, 9);
    }

    static URLParser(url: string) {
        // http://localhost:4200/#/editName?id=16&color=orange&size=M
        // url = " http://localhost:4200/#/editName?id=16&color=orange&size=M";
        let paramString = url.split("?")[1];
        return `?${paramString}`;
    }

    static secondsTOHHMMSS(sec: number) {
        let sec_num = parseInt(`${sec}`, 10)
        let hours = Math.floor(sec_num / 3600)
        let minutes = Math.floor(sec_num / 60) % 60
        let seconds = sec_num % 60

        return [hours, minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v, i) => v !== "00" || i > 0)
            .join(":")
    }

    static getFormDataFromObject(object: any) {
        let form_data = new FormData();
        for (const item in object) {
            form_data.append(item, object[item]);
        }
        return form_data;
    }

    static generate_link(href: string) {
        let a = document.createElement("a");
        a.className = "ghost";
        a.href = href;
        document.body.appendChild(a);
        return a;
    }

    static async send_request(req: any) {
        try {
            let res: any = await fetch(req);
            let data: any;
            try {
                data = await res.text();
                data = this.string_to_json(data);
            } catch (e) {
                data = {};
            }

            return {
                response: res,
                data: data
            };
        } catch (e) {

            HelperFunction.show_negative_message("Erreur serveur!");
            return {
                response: {
                    status: 404,
                    statusText: "Serveur indisponible"
                },
                data: {}
            };
        }
    }

    static string_to_json(data_string: string) {
        let data_json = {};
        try {
            data_json = JSON.parse(data_string);
        } catch (e) {
            data_json = { msg: data_string }
        }
        return data_json;
    }

    static getExtension(file_name: string) {
        let file_name_array = file_name.split(".");
        return file_name_array[file_name_array.length - 1];
    }

    static isImage(file: File) {
        let extension = this.getExtension(file.name);
        extension = extension.toLowerCase();
        return extension == 'jpeg' || extension == 'jpg' || extension == 'png' || extension == 'svg' || extension == 'gif' || extension == 'webp'
    }

    static fileExceed10M(file: File) {
        return file.size > 10000000;
    }

    static file_over_1Go(file: File) {
        return file.size > 1000000000;
    }

    static remove_all_spaces(str: any) {
        return str.trim().replaceAll(/\s+/g, "");
    }

    static remove_extra_white_space(str: any) {
        return str.trim().replaceAll(/\s+/g, " ");
    }

    static remove_all_white_space(str: any) {
        return str.trim().replaceAll(/\s+/g, "");
    }

    static format_data(date: string): string {
        date = date.split('T')[0];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date_array = date.split("-");
        let day = date_array[2];
        let month = parseInt(date_array[1]);
        let year = date_array[0]

        return `${day} ${months[month - 1]} ${year}`;
    }

    static copy(content: string) {
        let textarea = document.createElement("textarea");
        textarea.value = content;
        textarea.className = 'ghost';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        textarea.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }


    static async show_positive_message(message: string) {
        let info: any = document.querySelector("#positive");
        let msg: any = document.querySelector("#positive #content");
        msg.innerHTML = message;
        info.classList.add("info_visible");
        await this.sleep(4000);
        info.classList.remove("info_visible");
    }

    static async show_negative_message(message: string) {
        if(!Language.is_fr){
            if(message == "veuillez verifier votre formulaire"){
                message = "Please check your form"
            }
            if(message == "Erreur serveur!"){
                message = "Server error!";
            }
        }
        
        let info: any = document.querySelector("#negative");
        let msg: any = document.querySelector("#negative #content");
        msg.innerHTML = message;
        info.classList.add("info_visible");
        await this.sleep(4000);
        info.classList.remove("info_visible");
    }

    static show_loader() {
        let loader: any = document.querySelector("#ankh_api_loader");
        loader.classList.add("active");
    }

    static hide_loader() {
        let loader: any = document.querySelector("#ankh_api_loader");
        loader.classList.remove("active");
    }

    static is_emojie(str: string) {
        return /^\p{Emoji}$/u.test(
            str
        );
    }

    static open_external_link(url: string) {
        var a_tag = document.createElement('a');
        a_tag.className = 'ghost';
        a_tag.setAttribute("href", url);
        a_tag.setAttribute("target", "_blank");
     
        document.body.appendChild(a_tag); // required for firefox
        a_tag.click();
        a_tag.remove();
    }

    static open_external_link_on_current(url: string) {
        var a_tag = document.createElement('a');
        a_tag.className = 'ghost';
        a_tag.setAttribute("href", url);
     
        document.body.appendChild(a_tag); // required for firefox
        a_tag.click();
        a_tag.remove();
    }

    static replace_space_with_underscore(str: any) {
        str = str.trim().replaceAll(/\s+/g, "_");
        return str.trim().replaceAll(/\/+/g, "_");
    }

    static async focus(target: string) {
        await HelperFunction.sleep(300);
        $(target).focus();
    }

    static secure_password(password: string) {
        // let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // return regex.test(password);
        return password.length >= 8;
    }

    static valid_phone(phone: string) {
        let regex =  /^\d+$/;
        return regex.test(phone);
    }


    static valid_email(email: string) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
    }

    static dataURLtoBlob(dataURL: any) {
        const byteString = atob(dataURL.split(",")[1]);
        const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    }

    //this function trim long word in a text
    static trim_long_text(text: any, maxlen: number) {
        let tempTextWord: string[] = [];
        let tempword;
        //formatiing the text
        text = text.trim();
        text = text.replace(/\s+/g, " ");

        text = text.split(" ");
        text.forEach((word: string) => {
            if (word.length > maxlen) {
                word = word.substring(0, maxlen);
                word = word + "...";
                tempword = word;
            } else {
                tempword = word;
            }

            tempTextWord.push(tempword);
        });

        text = tempTextWord.join(" ");

        return text;
    }


    static random(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static get_year(){
        let date = new Date();
        return date.getFullYear();
    }

    static  compute_total(arr:number[]){
        let total = 0;
        for(let i = 0;i<=arr.length-1;i++){
          total+= arr[i];
        }
        return total;
    }

    static seamless_download(url: string, file_name: string) {
        var a_tag = document.createElement('a');
        a_tag.className = 'ghost';
        a_tag.setAttribute("href", url);
        a_tag.setAttribute("download", file_name);
        document.body.appendChild(a_tag); // required for firefox
        a_tag.click();
        a_tag.remove();
    }

    static format_bytes(bytes: number, decimals = 2) {
        if (!+bytes) return '0 Bytes'

        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

        const i = Math.floor(Math.log(bytes) / Math.log(k))

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }

    


}

declare var $: any;