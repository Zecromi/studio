
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
    <Button type="submit" disabled={pending} className="w-full border border-primary bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground z-10 relative">
      {pending ? "> Transmitiendo..." : ">  Transmitir"}
    </Button>
  );
}

const LuckyCatSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full text-primary">
        <g fill="currentColor">
            <path d="M50,95c-24.8,0-45-20.2-45-45S25.2,5,50,5s45,20.2,45,45S74.8,95,50,95z M50,15c-19.3,0-35,15.7-35,35s15.7,35,35,35 s35-15.7,35-35S69.3,15,50,15z" />
            <path d="M60,45h-5c0-11-9-20-20-20v-5C46.6,20,60,31.4,60,45z" />
            <path d="M70,60c-3.3,0-6-2.7-6-6h-5c0,6.1,4.9,11,11,11V60z" />
            <path d="M35,60c-3.3,0-6-2.7-6-6h-5c0,6.1,4.9,11,11,11V60z" />
            <ellipse cx="40" cy="70" rx="3" ry="2" />
            <ellipse cx="60" cy="70" rx="3" ry="2" />
            <path d="M50,80c-5,0-9-4-9-9h18C59,76,55,80,50,80z" />
            <circle cx="35" cy="50" r="3" />
            <circle cx="65" cy="50" r="3" />
            <path d="M80,40c-2.8,0-5,2.2-5,5v10h5c2.8,0,5-2.2,5-5S82.8,40,80,40z" />
        </g>
    </svg>
);

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
      <div className="relative mx-auto max-w-2xl rounded-lg border border-primary/50 bg-card p-6 shadow-[0_0_20px_hsl(var(--primary)/0.1)] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none p-8">
            <LuckyCatSvg />
        </div>
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
                    <Input placeholder="> Ingresa tu alias..." {...field} className="bg-background/50 focus:bg-background z-10 relative" />
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
                    <Input placeholder="> Ingresa comando..." {...field} className="bg-background/50 focus:bg-background z-10 relative" />
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
                    <Textarea placeholder="> Que deseas transmitir..." {...field} className="min-h-[150px] bg-background/50 focus:bg-background z-10 relative" />
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
