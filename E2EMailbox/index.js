const nodemailer = require('nodemailer');
const e2e = require("e2e-mailbox");
const express = require('express');
const { MailiskClient } = require("mailisk");

const app = express()

app.post('/send', async (req, res) => {
    const body = req.body;
    const email = body.email
    const namespace = "b8fll5xg8nw0";
    // create client
    const client = new MailiskClient({ apiKey: "4hDKqg7Wo9ElkibDruRnw6HsOmTA77IYZUSsM-fXplM" });

    // send email (using virtual SMTP)
    await client.sendVirtualEmail(namespace, {
        from: `john@${namespace}.mailisk.net`,
        to: email,
        subject: "Testing",
        text: "This is a test.",
    });

    // receive email
    const result = await client.searchInbox(namespace);

    console.log(result);

    res.status(200).send("Worked")
})

app.listen(8080);
