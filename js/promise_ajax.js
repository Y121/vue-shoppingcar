var ajaxJson = {
    url: '',
    type: 'get',
    dataType: 'json'
};

function ajax() {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open("get", "../client/cart.json", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText, xhr)
                } else {
                    var resJson = { code: xhr.status, response: xhr.response }
                    reject(resJson, xhr)
                }
            }
        };
        xhr.send();
    });
}