import sendEmail from './sendMail';

const sendMailToReferee = async (
        referrer_first_name : string,
        referrer_last_name: string,
        referrer_email: string,
        referal_code: string,
        referee_first_name: string,
        referee_last_name: string,
        referee_email: string,
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
                            <h2>You've Been Referred by ${referrer_first_name}</h2> 
                            <h3><strong>Referer:</strong> ${referrer_first_name} ${referrer_last_name}</h3>
                            <p><strong>Email:</strong> ${referrer_email}</p>
                            <h2><strong>Referral Code:</strong> ${referal_code} </h2>
                            <hr>
                            <p><strong>Referee:</strong> ${referee_first_name}} ${referee_last_name}</p>
                            <p><strong>Email:</strong> ${referee_email} </p>    
                        </div>
                    </body>
                    </html> `;

    sendEmail(
        [referee_email],
        `Congratulations! You Got a Refral for [${referal_code}]`,
        htmlbody, 
    );

};


export default sendMailToReferee;