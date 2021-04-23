/**
 * 
 * 
 * 
 * 
 */

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * 
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
exports.handler = async (event, context, callback) => {
    // const data = JSON.parse(event.body)
    // const body = Object.keys(data).map((k) => {
    //     return `${k}: ${data[k]}`
    // }).join("<br><br>");
    const mail_to_send = {
        to: "muhammad.ahmod@novationtech.co.za",
        from:  "mo.ahmod90@gmail.com",
        subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
    };
    try {
        await sgMail.send(mail_to_send)
        return {
            statusCode: 200,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: "Completed"
        }
    } catch (e) {
        return {
            statusCode: e.code,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: e.message
        }
    }
};