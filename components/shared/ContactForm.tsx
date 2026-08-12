'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      service_interest: formData.get('service_interest') as string,
      message: formData.get('message') as string,
    };

    // Validate
    if (!data.name || !data.email || !data.message) {
      setStatus('error');
      setErrorMessage('Por favor completa los campos obligatorios.');
      return;
    }

    try {
      // TODO: Replace with Supabase insert when connected
      // const supabase = createClient();
      // await supabase.from('contacts').insert(data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
      setErrorMessage('Hubo un error al enviar tu mensaje. Intenta nuevamente.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">
          ¡Mensaje enviado correctamente!
        </h3>
        <p className="text-text-secondary mb-6">
          Nos pondremos en contacto contigo a la brevedad posible.
        </p>
        <Button
          onClick={() => setStatus('idle')}
          variant="outline"
          size="sm"
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  const inputClasses =
    'w-full px-4 py-3 bg-white border border-border rounded-lg text-text-primary placeholder:text-text-tertiary outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all duration-200';

  return (
    <form onSubmit={handleSubmit} className={className} id="contact-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-text-primary mb-1.5">
            Nombre *
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            placeholder="Tu nombre completo"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-text-primary mb-1.5">
            Teléfono
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            placeholder="+51 999 999 999"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-text-primary mb-1.5">
            Email *
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            placeholder="tu@email.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-text-primary mb-1.5">
            Empresa
          </label>
          <input
            type="text"
            id="contact-company"
            name="company"
            placeholder="Nombre de tu empresa"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="contact-service" className="block text-sm font-medium text-text-primary mb-1.5">
          Servicio de interés
        </label>
        <select
          id="contact-service"
          name="service_interest"
          className={inputClasses}
        >
          <option value="">Selecciona un servicio</option>
          <option value="domotica">Domótica</option>
          <option value="automatizacion">Automatización</option>
          <option value="seguridad">Seguridad / CCTV</option>
          <option value="audio-video">Audio y Video</option>
          <option value="cine-en-casa">Cine en Casa</option>
          <option value="oficinas">Oficinas Inteligentes</option>
          <option value="control-acceso">Control de Acceso</option>
          <option value="video-wall">Video Wall</option>
          <option value="redes">Redes</option>
          <option value="instalacion">Instalación</option>
          <option value="mantenimiento">Mantenimiento</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="contact-message" className="block text-sm font-medium text-text-primary mb-1.5">
          Mensaje *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Cuéntanos sobre tu proyecto o necesidad..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      {status === 'error' && errorMessage && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === 'loading'}
        id="contact-submit"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Solicitar cotización
          </>
        )}
      </Button>
    </form>
  );
}
