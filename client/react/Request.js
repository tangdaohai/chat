
class Request{
    get(){}
    /**
     * @param {object} data
     */
    post(url, data){
        return fetch(url, {
            method: "POST",
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        }).then(res => {
            console.log(res.ok);
            return res.json();
        });
    }
}

export default new Request();