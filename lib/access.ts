export type FounderAccessResult = {
  hasAccess: boolean;
};

// Server-side access boundary. Keep this helper out of client components.
// Real auth/payment checks can replace the temporary environment flag later.
export async function userHasFounderAccess(): Promise<FounderAccessResult> {
  return {
    hasAccess: process.env.SDM_FOUNDER_ACCESS === "true",
  };
}
