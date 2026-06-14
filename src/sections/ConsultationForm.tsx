import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { Field } from "@/components/form/Field";
import { controlClass } from "@/components/form/controls";
import { Button } from "@/components/ui/Button";
import { practiceAreas } from "@/data/practiceAreas";

interface FormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  legalMatter: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  legalMatter: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Field-level validation. Returns a map of errors keyed by field name. */
function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.phone.trim()) errors.phone = "Please enter a phone number.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please enter a subject.";
  if (!values.legalMatter) errors.legalMatter = "Please select a legal matter.";
  if (values.message.trim().length < 20) {
    errors.message = "Please provide at least a brief outline (20+ characters).";
  }
  return errors;
}

/**
 * Consultation request form. Client-side validated and accessible. With no
 * backend wired, a valid submission resolves to a confirmation state — swap
 * the submit handler for an API/email endpoint in production.
 */
export function ConsultationForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      // Clear a field's error as the user corrects it.
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("submitting");
    // Placeholder for a real submission (API route / email service).
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 border border-line bg-surface p-8"
      >
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
          <Check className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <h3 className="font-display text-2xl text-ink">
          Thank you — your request has been noted.
        </h3>
        <p className="text-sm leading-relaxed text-muted">
          The chamber will review your message and respond promptly. For urgent
          matters, please call or reach us on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" required error={errors.name}>
          {(props) => (
            <input
              {...props}
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={update("name")}
              className={controlClass()}
              placeholder="Your full name"
            />
          )}
        </Field>

        <Field label="Phone" required error={errors.phone}>
          {(props) => (
            <input
              {...props}
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={update("phone")}
              className={controlClass()}
              placeholder="01XXX-XXXXXX"
            />
          )}
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email" required error={errors.email}>
          {(props) => (
            <input
              {...props}
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={update("email")}
              className={controlClass()}
              placeholder="you@example.com"
            />
          )}
        </Field>

        <Field label="Legal Matter" required error={errors.legalMatter}>
          {(props) => (
            <select
              {...props}
              value={values.legalMatter}
              onChange={update("legalMatter")}
              className={controlClass("appearance-none")}
            >
              <option value="" disabled>
                Select an area
              </option>
              {practiceAreas.map((area) => (
                <option key={area.slug} value={area.title}>
                  {area.title}
                </option>
              ))}
              <option value="Other">Other / General enquiry</option>
            </select>
          )}
        </Field>
      </div>

      <Field label="Subject" required error={errors.subject}>
        {(props) => (
          <input
            {...props}
            type="text"
            value={values.subject}
            onChange={update("subject")}
            className={controlClass()}
            placeholder="A brief subject line"
          />
        )}
      </Field>

      <Field label="Message" required error={errors.message}>
        {(props) => (
          <textarea
            {...props}
            rows={5}
            value={values.message}
            onChange={update("message")}
            className={controlClass("resize-y")}
            placeholder="Please outline your matter. Avoid sharing sensitive details until an engagement is confirmed."
          />
        )}
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request Consultation"}
          {status !== "submitting" && (
            <Send className="h-4 w-4" strokeWidth={1.75} />
          )}
        </Button>
        <p className="text-xs leading-relaxed text-muted">
          Your enquiry is treated in strict confidence.
        </p>
      </div>
    </form>
  );
}
