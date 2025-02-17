import express, { Request, Response } from 'express';
import { Router } from 'express'; 
import prisma from '../../database/prisma'; 
import sendTestEmail from '../../utils/sendMail'; 

const router: Router = express.Router(); 

const isInputEmpty = (value) => !value || value.trim() === '';
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

router.post('/new', async (req:Request, res:Response) => {

    const { referrer_first_name, 
            referrer_last_name,
            referrer_email,  
            referal_code,  
            referee_first_name, 
            referee_last_name,
            referee_email, 
            referrer_source_of_information} = req.body;
    

    const requiredFields = [
        { key: "referrer_first_name", value: referrer_first_name },
        { key: "referrer_last_name", value: referrer_last_name },
        { key: "referrer_email", value: referrer_email },
        { key: "referal_code", value: referal_code },
        { key: "referee_first_name", value: referee_first_name },
        { key: "referee_last_name", value: referee_last_name },
        { key: "referee_email", value: referee_email },
        { key: "referrer_source_of_information", value: referrer_source_of_information }
    ];

    /** Checking the Field is not empty  */    
    for (const field of requiredFields) {
        if (isInputEmpty(field.value)) {
            res.status(400).json({
                message: `"${field.key}" is required. Please provide a valid "${field.key}".`
            }); return;
        }
    }

    const requiredEmailFields = [
        { key: "referrer_email", value: referrer_email },
        { key: "referee_email", value: referee_email },
    ];

    /** Checking the Field is not empty  */    
    for (const field of requiredEmailFields) {
        if (!isValidEmail(field.value)) {
            res.status(400).json({
                message: `"${field.key}" is required. Please provide a valid "${field.key}".`
            }); return;
        }
    }

    try {  

        prisma.referal.create({  
                data : {
                    referrer_first_name : referrer_first_name,  
                    referrer_last_name : referrer_last_name,
                    referrer_email: referrer_email,  
                    referal_code: referal_code,  
                    referee_first_name : referee_first_name, 
                    referee_last_name: referee_last_name,
                    referee_email: referee_email, 
                    referrer_source_of_information: referrer_source_of_information
                }
            }
        ).then(() => {
     
            sendTestEmail([referee_email]);

            res.status(200).json({
                message: "Successfully created the referal."
            });
        }).catch((err)=> {
            if (err.code === "P2002") {
                res.status(400).json({
                    message: "Referral code already exists. Please use a unique referral code."
                });
            } else {
                console.error(err);
                res.status(500).json({
                    message: "Failed to create the referral. Please try again later.",
                    error: err
                });
            }
        });

    } catch (error) {
        
        console.error(error);
        res.status(500).json({
            message: "Failed to edit the data.",
            error: error instanceof Error ? error.message : error,
        });
    }
}); 

export default router;