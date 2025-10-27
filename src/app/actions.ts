
"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "El alias debe contener mas de dos caracteres." }),
  email: z.string().email({ message: "Ingresa un correo valido." }),
  message: z.string().min(10, { message: "El mensaje debe contener almenos 10 caracteres." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error: Por favor verifica que los campos estén completos.",
      success: false,
    };
  }

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it and return a success message.
  console.log("Contact form submitted:", validatedFields.data);

  return {
    message: `COMPLETADO: Gracias, ${validatedFields.data.name}. tu transmision fue enviada.`,
    success: true,
    resetKey: Date.now().toString(),
  };
}
