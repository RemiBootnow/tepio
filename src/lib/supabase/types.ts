export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          created_at: string;
          service: string;
          housing_type: string;
          house_age: string;
          ownership_type: string;
          heating_type: string;
          heating_budget: string;
          first_name: string;
          last_name: string;
          email: string;
          phone: string;
          postal_code: string;
          city: string;
          consent: boolean;
          status: string;
          source_url: string | null;
          utm_source: string | null;
          utm_medium: string | null;
          utm_campaign: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          service: string;
          housing_type: string;
          house_age: string;
          ownership_type: string;
          heating_type: string;
          heating_budget: string;
          first_name: string;
          last_name: string;
          email: string;
          phone: string;
          postal_code: string;
          city: string;
          consent: boolean;
          status?: string;
          source_url?: string | null;
          utm_source?: string | null;
          utm_medium?: string | null;
          utm_campaign?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          service?: string;
          housing_type?: string;
          house_age?: string;
          ownership_type?: string;
          heating_type?: string;
          heating_budget?: string;
          first_name?: string;
          last_name?: string;
          email?: string;
          phone?: string;
          postal_code?: string;
          city?: string;
          consent?: boolean;
          status?: string;
          source_url?: string | null;
          utm_source?: string | null;
          utm_medium?: string | null;
          utm_campaign?: string | null;
        };
      };
    };
  };
};

export type Lead = Database["public"]["Tables"]["leads"]["Row"];
export type LeadInsert = Database["public"]["Tables"]["leads"]["Insert"];
