declare namespace Deno {
  export interface Env {
    get(key: string): string | undefined;
  }
  export const env: Env;
}

declare module "std/http/server.ts" {
  export function serve(handler: (req: Request) => Promise<Response>): void;
}

declare module "@supabase/supabase-js" {
  export function createClient(url: string, key: string): any;
}

declare module "resend" {
  import { ReactElement } from "react";

  export class Resend {
    constructor(apiKey: string);
    emails: {
      send(options: {
        from: string;
        to: string | string[];
        subject: string;
        html?: string;
        react?: ReactElement;
      }): Promise<{ data?: { id: string }; error?: any }>;
    };
  }
}
