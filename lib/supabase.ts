// Supabase client setup (optional)
// Set NEXT_PUBLIC_SUPABASE_ENABLED=true in .env.local to enable Supabase

let supabaseClient: any = null;

export async function getSupabaseClient() {
  if (process.env.NEXT_PUBLIC_SUPABASE_ENABLED !== "true") {
    return null;
  }

  if (!supabaseClient) {
    try {
      const { createClient } = await import("@supabase/supabase-js");
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        console.warn("Supabase credentials not found. Lead form will log to console.");
        return null;
      }

      supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
    } catch (error) {
      console.error("Failed to initialize Supabase client:", error);
      return null;
    }
  }

  return supabaseClient;
}
