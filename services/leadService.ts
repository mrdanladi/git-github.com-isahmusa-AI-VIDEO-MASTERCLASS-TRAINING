
export interface LeadData {
  name: string;
  email: string;
  whatsapp: string;
}

export const submitLead = async (data: LeadData): Promise<{ success: boolean }> => {
  console.log("Submitting lead data:", data);
  // This is a mock API call. In a real application, you would send this data
  // to a backend service, a Google Sheet via an API, or Firebase.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1500);
  });
};
