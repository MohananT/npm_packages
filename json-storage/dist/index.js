class JsonStorage {
    constructor() {
        // variable to hold entire data
        this.json = {};
        // variable to hold copy of json data in case of any error
        this.copyJson = {};
    }

    backupContents() {
        // copy contents of json to jsoncopy
        // only if there is a change
        let source = JSON.stringify(this.json);
        let target = JSON.stringify(this.copyJson);

        if (source != target) this.copyJson = JSON.parse(JSON.stringify(this.json));
    }

    // add only key/value pair
    // keys are always string
    addItem(key, value) {
        if (key != null && typeof key === 'string') {
            this.json[key] = value;
            this.backupContents();
            return true;
        }
        return false;
    }

    // appendItem(key, value) {
    //     if (key != null && typeof key === 'string') {
    //         if (key in this.json) {
    //             let temp = this.json[key];
    //             this.json[key] = { temp, value };
    //         }
    //         return false;    
    //     }
    //     return false;
    // }

    getItem (key) {
        if (key != null && typeof key === 'string') {
            if (key in this.json) {
                return this.json[key];
            }
            return false;
        }
        return false;
    }

    // delete an item in object
    deleteItem(key) {
        if (key != null && typeof key === 'string') {
            if (key in this.json) {
                delete this.json[key];
                this.backupContents();
                return true;
            }
            return false;
        }
        return false;
    }

    // delete all  items in object
    reset() {
         this.json = {};
         this.copyJson = {};
         return true;
    }

    // returns no. of Items in object
    getCount() {
        if (this.json != null) {
            return Object.keys(this.json).length;
        }
        return 0;
    }
    
    // returns all the contents of the json
    getItems() {
        if (this.json != null) return this.json;
        else return this.copyJson;
    }

    // returns keys of all entries in json object
    getKeys() {
        if (this.json != null) {
            return Object.keys(this.json);
        }
    }


}

// singleton instance
const jsonObj = new JsonStorage();


module.exports = jsonObj;

