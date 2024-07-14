import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/features/Footer/components/Contact.tsx";

export const Route = createFileRoute("/contact")({
    component: () => Contact(),
});
