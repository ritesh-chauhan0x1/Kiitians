import got from 'got';
import fs from 'fs';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

async function fetchMe(URI) {
    console.log(`\n[+] Fetching ${URI}`);

    const requestOptions = {
        'headers': {
            'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-User': '?1',
            'Sec-Fetch-Dest': 'document',
            'Accept-Language': 'en-US,en;q=0.9'
        }
    }

    let data = await got(URI, requestOptions).text();

    console.log("[-] Parsing response as html");

    data = (new JSDOM(data)).window.document

    return data;
}

function decodeEmail(encodedString) {
    if (encodedString == "")
        return "";

    var email = "", r = parseInt(encodedString.substr(0, 2), 16), n, i;
    for (n = 2; encodedString.length - n; n += 2) {
        i = parseInt(encodedString.substr(n, 2), 16) ^ r;
        email += String.fromCharCode(i);
    }
    return email;
}


let document = await fetchMe("https://kiit.ac.in/academics/faculty-kiit-university");


let arrayOfIndexLinks = [...document.querySelectorAll(".fusion-li-item-content")];
arrayOfIndexLinks = arrayOfIndexLinks.slice(0, arrayOfIndexLinks.length - 2);
arrayOfIndexLinks = arrayOfIndexLinks.map(elem => elem.querySelector("a").href);

let newJSONElement = {};

for (let URI of arrayOfIndexLinks) {

    if (URI.includes("fashion.kiit.ac.in"))
        continue;                       // Since this page returns 404 error

    let document = await fetchMe(URI);

    console.log("[-] Reading staff list.");

    var a = [...document.querySelectorAll(".wmts_member")];


    let branch = URI.slice(URI.indexOf("://") + 3, URI.indexOf("ac.in") + 5);
    newJSONElement[branch] = [];

    a.forEach(elem => {
        console.log("[-] Finding details of html.")
        let name = elem.querySelector(".wmts_name").textContent;
        let email = elem.querySelector(".__cf_email__");
        let profile = elem.querySelector(".wph_lazy_load_image_placeholder.wmts_image.wmts_element");
        let socials = [...elem.querySelector(".wph_element.wmts_links.wmts_element").querySelectorAll("a")];

        console.log("[-] Pushing into database.");

        newJSONElement[branch].push({
            name: name,
            email: email ? decodeEmail(email.getAttribute("data-cfemail")) : "",
            profile: profile ? profile.getAttribute("data-src") : "",
            socials: socials ? socials.map(elem => elem.href) : []
        });
    });
    console.log("[-] Closing the finished window from memory");

    document.close();
}

document.close();

console.log("[+] Saving final database.");
fs.writeFileSync('faculties.json', JSON.stringify(newJSONElement));
