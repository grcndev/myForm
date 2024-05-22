import { z } from 'zod'

 export const FormDataSchema = z.object({
    name: z.string().min(1, 'This field is required'),
    email: z.string().min(1, 'This field is required').email(),
    phoneNumber: z.number().min(1, 'This field is required'),
    selectedPlan: z.string().min(1, 'Please select a plan'),
    add_ons: z.string().min(1, 'Please select one service'),
    // arcade: z.string().min(1, 'Select one plan'),
    // advanced: z.string().min(1, 'Select one plan'),
    // pro: z.string().min(1, 'Select one plan'),
    // arcadey: z.string().min(1, 'Select one plan'),
    // advancedy: z.string().min(1, 'Select one plan'),
    // proy: z.string().min(1, 'Select one plan'),
    
    //zip: z.string().min(1, 'Zip is required'),
})