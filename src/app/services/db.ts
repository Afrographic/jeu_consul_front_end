
export class DB {
    static con = new JsStore.Connection(new Worker("assets/scripts/jsstore.worker.js"))

    static async init() {
        await this.con.initDb(this.get_db_schema());
    }

    static get_db_schema() {
        var images = {
            name: 'images',
            columns: {
                id: {
                    primaryKey: true,
                    autoIncrement: true
                },
                url: {
                    notNull: true,
                    dataType: 'string'
                },
                image: {
                    notNull: true,
                    dataType: 'object'
                }
            }
        }

        var db = {
            name: 'yoba',
            tables: [images]
        }
        return db;
    }


    static async get_images(url: string) {
        var results = await this.con.select({
            from: 'images',
            where: {
                url: url
            }
        });
        return results;
    }


    static async insert_image(url: string, file: any) {
        var value = {
            url: url,
            image: file
        }

        await this.con.insert({
            into: 'images',
            values: [value]
        });
    }


}


declare var JsStore: any;
