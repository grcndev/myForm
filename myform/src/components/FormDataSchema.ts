import { z } from 'zod'

 export const FormDataSchema = z.object({
    name: z.string().min(1, 'This field is required'),
    email: z.string().min(1, 'This field is required').email(),
    phoneNumber: z.string().refine((value) => /^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value)),
    selectedPlan:  z.string().min(1, 'This field is required'),
    add_ons: z.array(z.string().nonempty('This field is required')).min(1, 'Please select at least one add on'),
})





