import { createFileRoute } from "@tanstack/react-router";
import { LegalNotice } from "@/features/Legal/LegalNotice.tsx";

export const Route = createFileRoute("/legal-notice")({
    component: LegalNotice,
});
