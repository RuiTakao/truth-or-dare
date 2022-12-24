class Cookie {
    set(key, value) {
        document.cookie = key + "=" + value;
    }

    get() {
        let r = document.cookie.replace(/ /g,"");
        r = r.split(";");

        let array = [];
        r.forEach(value => {
            let content = value.split('=');

            value = value.substring(0, value.indexOf('='))
            array[value] = content[1];
        });

        return array;
    }
}