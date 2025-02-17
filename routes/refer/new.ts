import express, { Request, Response } from 'express';
import { Router } from 'express'; 
import prisma from '../../database/prisma';

const router: Router = express.Router(); 

router.post('/new', async (req:Request, res:Response) => {

    const { referrer_first_name, 
            referrer_last_name,
            referrer_email,  
            referal_code,  
            referee_first_name, 
            referee_last_name,
            referee_email, 
            referrer_source_of_information} = req.body;

    
    if (!referrer_first_name) {
        res.status(400).json({
            message: `'referrer_first_name' not found, please provide a valid Referrer First Name"`,
        }); return; 
    }

    if (!referrer_last_name) {
        res.status(400).json({
            message: `"referrer_last_name" not found, please provide a valid "referrer_last_name"`,
        }); return; 
    }

    if (!referrer_email) {
        res.status(400).json({
            message: `"referrer_email" not found, please provide a valid "referrer_email"`,
        }); return; 
    }

    if (!referal_code) {
        res.status(400).json({
            message: `"referal_code" not found, please provide a valid Referal Code`,
        }); return; 
    }

    if (!referee_first_name) {
        res.status(400).json({
            message: `"referee_first_name" not found, please provide a valid "referrer_last_name"`,
        }); return; 
    }


    if (!referee_last_name) {
        res.status(400).json({
            message: `"referee_last_name" not found, please provide a valid "referrer_last_name"`,
        }); return; 
    }

    if (!referee_email) {
        res.status(400).json({
            message: `"referee_first_name" not found, please provide a valid "referrer_email"`,
        }); return; 
    }

    if (!referrer_source_of_information) {
        res.status(400).json({
            message: `"referrer_source_of_information" not found, please provide a valid "referrer_email"`,
        }); return; 
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