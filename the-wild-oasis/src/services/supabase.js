import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jrqjfgguoigjndrptbbf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpycWpmZ2d1b2lnam5kcnB0YmJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2ODc4MTIsImV4cCI6MjA1NDI2MzgxMn0.Zei0whY_96Mlti-mrXK3wYd43xhSSlQlXr5ULB8lyx0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
