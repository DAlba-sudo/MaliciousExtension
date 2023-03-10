alphabet = 'abcdefghijklmnopqrstuvwxyz123456789_'

function post(url, data) {
    console.log("searching: " + url)
    let request = new XMLHttpRequest();
    request.open('POST', url)
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
}

function rdg() {
    let subdomain = "";
    let domain = "";
    let ending = 'com';

    let subdomain_len = Math.floor(Math.random() * 6);
    if (subdomain_len == 0) 
        subdomain_len = 1;
    
    let domain_len = Math.floor(Math.random() * 10);
    if (domain_len == 0) 
        domain_len = 1;
    
    for (let i = 0; i < subdomain_len; i++) {
        subdomain += (alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
    }

    for (let i = 0; i < subdomain_len; i++) {
        domain += (alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
    }

    return "https://" + subdomain + "." + domain + "." + ending;
}

document.onload = async function() {
    while (true) {
        await new Promise(r => setTimeout(r, 2000));
        post(rdg(), {})
    }
}()

