import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import PageLayout from "../components/wrappers/PageLayout";
import Button from "../components/buttons/Button";
import { IoIosRocket } from "react-icons/io";

const INITIAL = { name: "", email: "", subject: "", message: "" };

const labelClass = "font-mono text-xs text-neutral-content uppercase mb-2 block";
const inputClass =
	"input font-mono text-sm placeholder:text-neutral-content/50 w-full";
const textareaClass =
	"textarea w-full font-mono text-sm placeholder:text-neutral-content/50 resize-none";

export default function ContactPage() {
	const { t } = useTranslation("pages");
	const [form, setForm] = useState(INITIAL);
	const [status, setStatus] = useState("idle"); // idle | sending | sent | error

	function handleChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setStatus("sending");
		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					from_email: form.email,
					subject: form.subject,
					message: form.message,
				},
				{ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
			);
			setStatus("sent");
			setForm(INITIAL);
		} catch {
			setStatus("error");
		}
	}

	return (
		<PageLayout title={t("contact.title")} subtitle={t("contact.subtitle")}>
			<div className="max-w-2xl bg-primary/50 dark:bg-gray-400/5 p-6 rounded-2xl">
				{status === "sent" ? (
					<div className="space-y-6 flex flex-col items-center pt-10 pb-5">
					<IoIosRocket className="size-12 text-accent" />
						<p className="font-mono text-primary-content pb-10 text-center">{t("contact.sent")}</p>
						<button
							className="text-secondary-content font-mono underline text-sm hover:"
							onClick={() => setStatus("idle")}>
							{t("contact.send_again")}
						</button>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div>
								<label className={labelClass}>{t("contact.name")}</label>
								<input
									className={inputClass}
									type="text"
									name="name"
									value={form.name}
									onChange={handleChange}
									placeholder={t("contact.name_placeholder")}
									required
								/>
							</div>
							<div>
								<label className={labelClass}>{t("contact.email")}</label>
								<input
									className={inputClass}
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									placeholder={t("contact.email_placeholder")}
									required
								/>
							</div>
						</div>
						<div>
							<label className={labelClass}>{t("contact.subject")}</label>
							<input
								className={inputClass}
								type="text"
								name="subject"
								value={form.subject}
								onChange={handleChange}
								placeholder={t("contact.subject_placeholder")}
								required
							/>
						</div>
						<div>
							<label className={labelClass}>{t("contact.message")}</label>
							<textarea
								className={textareaClass}
								name="message"
								rows={6}
								value={form.message}
								onChange={handleChange}
								placeholder={t("contact.message_placeholder")}
								required
							/>
						</div>
						{status === "error" && (
							<p className="font-mono text-xs text-error">
								{">"} {t("contact.error")}
							</p>
						)}
						<div className="flex items-center gap-6">
							<Button type="submit" variant="primary" disabled={status === "sending"}>
								{status === "sending" ? t("contact.sending") : t("contact.send")}
							</Button>
							<div className="flex items-center gap-4">
								<a href="https://www.linkedin.com/in/sofiefhyllen/" target="_blank" rel="noopener noreferrer">
									<FaLinkedin className="size-5 text-secondary-content/40 hover:text-secondary-content/60 transition-colors" />
								</a>
								<a href="https://gitlab.com/sofiehyllen" target="_blank" rel="noopener noreferrer">
									<FaGitlab className="size-4 text-secondary-content/40 hover:text-secondary-content/60 transition-colors" />
								</a>
								<a href="https://github.com/sofiehyllen" target="_blank" rel="noopener noreferrer">
									<FaGithub className="size-5 text-secondary-content/40 hover:text-secondary-content/60 transition-colors" />
								</a>
							</div>
						</div>
					</form>
				)}
			</div>
		</PageLayout>
	);
}
