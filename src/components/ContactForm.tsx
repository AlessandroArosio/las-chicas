import { useState, type FormEvent } from 'react';
import { siteConfig } from '../config/site';
import { servicesData } from '../content/services';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    if (!siteConfig.web3formsKey) {
      setStatus('error');
      setErrorMessage(
        'Contact form is not configured yet. Please call or email us directly.',
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (response.ok && result.success) {
        setStatus('success');
        form.reset();
        return;
      }

      setStatus('error');
      setErrorMessage(result.message ?? 'Something went wrong. Please try again.');
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again or contact us by phone.');
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-amber-500/30 bg-amber-500/5 p-8 text-center font-sans">
        <p className="text-amber-500 text-lg mb-2">Thank you for your enquiry</p>
        <p className="text-slate-400 text-sm">
          We will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-xs tracking-widest uppercase text-white border-b border-white/30 pb-1 hover:text-amber-500 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-sans">
      <input type="hidden" name="access_key" value={siteConfig.web3formsKey} />
      <input type="hidden" name="subject" value="New enquiry — Las Chicas Cleaning" />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs tracking-widest uppercase text-slate-500 mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white text-sm focus:border-amber-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs tracking-widest uppercase text-slate-500 mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white text-sm focus:border-amber-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-slate-500 mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white text-sm focus:border-amber-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-xs tracking-widest uppercase text-slate-500 mb-2">
            Service
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white text-sm focus:border-amber-500 focus:outline-none transition-colors"
          >
            <option value="">Select a service</option>
            {servicesData.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-widest uppercase text-slate-500 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white text-sm focus:border-amber-500 focus:outline-none transition-colors resize-y"
          placeholder="Tell us about your property and preferred schedule..."
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm" role="alert">
          {errorMessage}{' '}
          <a href={`mailto:${siteConfig.email}`} className="underline hover:text-amber-500">
            Email us directly
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto px-10 py-3 text-xs tracking-widest uppercase bg-amber-500 text-[#0a0a0a] hover:bg-amber-400 disabled:opacity-50 transition-colors"
      >
        {status === 'submitting' ? 'Sending...' : 'Send enquiry'}
      </button>
    </form>
  );
}
