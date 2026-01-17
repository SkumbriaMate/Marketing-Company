import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, website, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const leadData = {
      name,
      email,
      company: company || null,
      website: website || null,
      message,
      created_at: new Date().toISOString(),
    };

    // Try to save to Supabase if enabled
    const supabase = await getSupabaseClient();
    if (supabase) {
      try {
        const { error } = await supabase.from("leads").insert([leadData]);
        if (error) {
          console.error("Supabase error:", error);
          // Fall through to logging
        } else {
          return NextResponse.json(
            { success: true, message: "Lead saved successfully" },
            { status: 200 }
          );
        }
      } catch (error) {
        console.error("Supabase insertion error:", error);
        // Fall through to logging
      }
    }

    // If Supabase is not enabled or failed, log to console
    console.log("New lead submission:", leadData);

    return NextResponse.json(
      { success: true, message: "Lead received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
