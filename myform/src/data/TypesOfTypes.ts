import { FormDataSchema } from "@/components/FormDataSchema";
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { z } from "zod";

export type SelectProps = {
    register: UseFormRegister<FieldValues>; 
    errors: FieldErrors; 
    setValue: UseFormSetValue<FieldValues>; 
    selectedPlan: string
}

export type SelectComponentProps = {
    price: string;
    src: React.ReactNode;
    type: string;
    register: UseFormRegister<FieldValues>; 
    setValue: UseFormSetValue<FieldValues>
    selectedPlan: string
};
  
export type Inputs = z.infer<typeof FormDataSchema>;
  
export type FieldName = keyof Inputs;

export type Data = {
    title: string;
    text: string;
    price: string;
}

export type AddOns = [
    data: Data
];

export type Service = string[];

export type SummaryProps = {
    selectedPlan: string;
    selectedServices: Service;
    addOnsData: Data[];
}

export type AddOnsProps = {
    selectedServices: Service;
    data: Data;
    register: FieldName; 
    errors: FieldErrors; 
    setValue: FieldName; 
    selectedPlan: string
}

export type SectionSideProps = {
    step: string;
    sideTitle: string;
    currentStepTrue: number;
};