import sendEmail from './sendMail';

const sendMailToReferrer = async (
        referrer_first_name,
        referrer_last_name,
        referrer_email,
        referal_code,
        referee_first_name,
        referee_last_name,
        referee_email
    ) => {

    const htmlbody = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Referral Details</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                background-color: #f9f9f9;
                                color: #333;
                            }
                            .email-container {
                                max-width: 600px;
                                margin: auto;
                                background: white;
                                padding: 20px;
                                border-radius: 8px;
                                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                                text-align: center;
                            }
                            h2 {
                                color: #444;
                            }
                            p {
                                line-height: 1.5;
                            }
                            .logo {
                                display: block;
                                margin: 0 auto 20px;
                                max-width: 150px;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="email-container">
                            <img src="https://media.licdn.com/dms/image/v2/D4D0BAQEyN33xZ31Bbw/company-logo_200_200/company-logo_200_200/0/1687299738804/insaid_logo?e=2147483647&v=beta&t=wU-qyHhPmC0U6iH7PJWMOPFoRW45HQGij_4gdiA8ZLs" alt="Company Logo" class="logo">
                            <h3>You've clamed a Refral for  ${referee_first_name}</h3>
                            <p><strong>Referer:</strong> ${referrer_first_name} ${referrer_last_name}</p>
                            <p><strong>Email:</strong> ${referrer_email}</p>
                            <h2><strong>Referral Code:</strong> ${referal_code} </h2>
                            <hr>
                            <p><strong>Referee:</strong> ${referee_first_name}} ${referee_last_name}</p>
                            <p><strong>Email:</strong> ${referee_email} </p>    
                        </div>
                    </body>
                    </html> `;

    sendEmail(
        [referrer_email],
        `Successfully, Claimed a Refral for [${referee_first_name}]`,
        htmlbody, 
    );

};


export default sendMailToReferrer;