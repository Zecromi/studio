
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TypewriterText } from "@/components/typewriter-text";
import { Mail, MessageSquare, ExternalLink } from "lucide-react";
import Image from "next/image";

const ContactCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  buttonLink,
  qrCodeUrl,
  qrCodeAlt,
  color,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  qrCodeUrl: string;
  qrCodeAlt: string;
  color: string;
}) => {
  return (
    <Card 
      className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-[var(--card-color)] transition-colors duration-300 shadow-[0_0_20px_hsl(var(--primary)/0.1)] group"
      style={{ '--card-color': color } as React.CSSProperties}
    >
      <CardHeader>
        <div className="flex items-center gap-4">
          <Icon className="h-8 w-8 transition-colors text-primary group-hover:text-[var(--card-color)]" />
          <div>
            <CardTitle className="text-2xl transition-colors text-primary group-hover:text-[var(--card-color)] group-hover:text-glow">{title}</CardTitle>
            <CardDescription className="text-foreground/70">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center p-6 pt-0">
        <div className="relative w-40 h-40 rounded-lg overflow-hidden border-2 border-primary/30 group-hover:border-[var(--card-color)] p-2 bg-background/50">
            <Image
                src={qrCodeUrl}
                alt={qrCodeAlt}
                width={256}
                height={256}
                className="w-full h-full object-contain"
            />
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full border bg-transparent text-primary border-primary/30 group-hover:bg-[var(--card-color)] group-hover:text-primary-foreground group-hover:border-[var(--card-color)] transition-all">
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            {buttonText} <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const ContactSection = () => {
  const userPhoneNumber = "5211234567890"; // Replace with your WhatsApp number
  const userEmail = "dev@example.com"; // Replace with your email

  return (
    <section className="w-full">
      <h2 className="mb-8 text-3xl font-bold md:text-4xl">
        <TypewriterText text="> Contacto..." />
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-stretch gap-8 md:grid-cols-2">
        <ContactCard
          icon={MessageSquare}
          title="WhatsApp"
          description="Envíame un mensaje directo."
          buttonText="Chatear Ahora"
          buttonLink={`https://wa.me/${userPhoneNumber}`}
          qrCodeUrl={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=https://wa.me/${userPhoneNumber}&bgcolor=0f172a&color=0aff9d&qzone=1`}
          qrCodeAlt="QR Code para WhatsApp"
          color="hsl(var(--primary))"
        />
        <ContactCard
          icon={Mail}
          title="Email"
          description="Escríbeme un correo electrónico."
          buttonText="Enviar Correo"
          buttonLink={`mailto:${userEmail}`}
          qrCodeUrl={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=mailto:${userEmail}&bgcolor=0f172a&color=aa65ff&qzone=1`}
          qrCodeAlt="QR Code para Email"
          color="hsl(var(--secondary))"
        />
      </div>
    </section>
  );
};

export default ContactSection;
