import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <LoaderCircle className="animate-spin" />
    </div>
  );
}
