
"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
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
      message: "Error: Please check the fields.",
      success: false,
    };
  }

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it and return a success message.
  console.log("Contact form submitted:", validatedFields.data);

  return {
    message: `SUCCESS: Thank you, ${validatedFields.data.name}. Your message has been received.`,
    success: true,
    resetKey: Date.now().toString(),
  };
}
