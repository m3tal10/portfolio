import { useForm } from "react-hook-form";
import Button from "./Button";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const labelStyles = "font-medium";
  const inputStyles = "bg-bgcolor rounded-md p-3";

  function onSubmit(data) {
    return;
  }

  return (
    <form
      className="flex flex-col gap-6 rounded-md bg-brand-secondary p-8 text-text-light transition-all duration-1000 dark:bg-brand-primary-dark dark:text-brand-secondary"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label className="font-medium" for="fullName">
          Full Name(Required)
        </label>
        <input
          className="rounded-md bg-bgcolor p-3"
          type="text"
          id="fullName"
          placeholder="Full Name"
          {...register("fullName", {
            required: true,
          })}
        />
        {errors.fullName?.type === "required" && (
          <p className="text-red-500">Name is required.</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelStyles} for="email">
          Email(Required)
        </label>
        <input
          className={inputStyles}
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", {
            required: true,
          })}
        />
        {errors.email?.type === "required" && (
          <p className="text-red-500">Email is required.</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelStyles} for="subject">
          Subject
        </label>
        <input
          className={inputStyles}
          type="text"
          id="subject"
          placeholder="Subject"
          {...register("subject")}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelStyles} for="message">
          Your message
        </label>
        <textarea
          className={inputStyles}
          type="text"
          id="message"
          placeholder="Your message..."
          rows={9}
          {...register("message", {
            required: true,
          })}
        />
        {errors.message?.type === "required" && (
          <p className="text-red-500">Please enter your message.</p>
        )}
      </div>
      <Button>Send message</Button>
    </form>
  );
}

export default ContactForm;
