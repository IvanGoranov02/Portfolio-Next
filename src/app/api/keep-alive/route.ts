import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Missing environment variables:", {
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseAnonKey,
      });
      return NextResponse.json(
        {
          status: "error",
          message: "Missing Supabase credentials",
        },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data, error } = await supabase
      .from("contacts")
      .select("id")
      .limit(1);

    if (error) {
      console.error("Keep-alive error:", error);
      return NextResponse.json(
        { status: "error", message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: "alive",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Keep-alive exception:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    
    if (errorMessage.includes("ENOTFOUND") || errorMessage.includes("getaddrinfo")) {
      return NextResponse.json(
        {
          status: "error",
          message: "Cannot connect to Supabase",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        status: "error",
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}

