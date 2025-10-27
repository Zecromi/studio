
"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { TypewriterText } from "@/components/typewriter-text";


const contactSchema = z.object({
  name: z.string().min(2, { message: "Tu alias es requerido (minimo 2 caracteres)." }),
  email: z.string().email({ message: "Comando de seguridad invalido (correo)." }),
  message: z.string().min(10, { message: "Transmision corta (minimo 10 cararteres)." }),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full border border-primary bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground">
      {pending ? "> Transmitiendo..." : ">  Transmitir"}
    </Button>
  );
}

const ContactSection = () => {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitContactForm, null);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  useEffect(() => {
    if (state?.success === false && state.message) {
      toast({
        variant: "destructive",
        title: "Transmission Error",
        description: state.message,
      });
    }
    if (state?.success === true) {
      toast({
        title: "Transmission Complete",
        description: state.message,
        className: "bg-primary/10 border-primary text-primary",
      });
      form.reset();
    }
  }, [state, toast, form]);

  return (
    <section className="w-full">
      <h2 className="mb-8 text-3xl font-bold md:text-4xl">
        <TypewriterText text="> Contacto..." />
      </h2>
      <div className="mx-auto max-w-2xl rounded-lg border border-primary/50 bg-card p-6 shadow-[0_0_20px_hsl(var(--primary)/0.1)]">
        <Form {...form}>
          <form
            ref={formRef}
            action={formAction}
            className="space-y-6"
            key={state?.resetKey}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">// Tu_Alias</FormLabel>
                  <FormControl>
                    <Input placeholder="> Ingresa tu alias..." {...field} className="bg-background/50 focus:bg-background" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">// Comando_Seguridad (Correo)</FormLabel>
                  <FormControl>
                    <Input placeholder="> Ingresa comando..." {...field} className="bg-background/50 focus:bg-background" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">// Base de datos (Mensaje)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="> Que deseas transmitir..." {...field} className="min-h-[150px] bg-background/50 focus:bg-background" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitButton />
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;
