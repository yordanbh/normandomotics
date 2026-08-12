// Contact form submission service
// Currently simulated — replace with Supabase insert when connected

import type { ContactMessage } from '@/types';

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service_interest?: string;
  message: string;
}

export async function submitContact(data: ContactData): Promise<{ success: boolean }> {
  // TODO: Replace with Supabase insert
  // const supabase = await createClient();
  // const { error } = await supabase.from('contacts').insert(data);
  // if (error) throw error;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('Contact submitted:', data);
  return { success: true };
}

export async function getContacts(): Promise<ContactMessage[]> {
  // Admin-only: will be used in /admin panel
  return [];
}
