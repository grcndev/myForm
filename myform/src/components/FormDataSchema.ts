import { z } from 'zod'

 export const FormDataSchema = z.object({
    name: z.string().min(1, 'This field is required'),
    email: z.string().min(1, 'This field is required').email(),
    phoneNumber: z.number().min(1, 'This field is required'),
    // arcade: z.string().min(1, 'Select one plan'),
    // advanced: z.string().min(1, 'Select one plan'),
    // pro: z.string().min(1, 'Select one plan'),
    // add_ons: z.string().min(1, 'selec one service'),
    //zip: z.string().min(1, 'Zip is required'),
})