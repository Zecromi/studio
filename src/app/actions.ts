
"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "El alias debe contener mas de dos caracteres." }),
  email: z.string().email({ message: "Ingresa un correo valido." }),
  message: z.string().min(10, { message: "El mensaje debe contener almenos 10 caracteres." }),
});
