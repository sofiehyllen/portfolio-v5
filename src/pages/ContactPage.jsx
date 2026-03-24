import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import PageLayout from "../components/wrappers/PageLayout";
import Button from "../components/buttons/Button";

const EMAIL = "sofiefhyllen@gmail.com";

const INITIAL = { name: "", email: "", subject: "", message: "" };

const labelClass = "font-mono text-xs text-neutral-content uppercase tracking-widest mb-2 block";
const inputClass =
	"input font-mono text-sm placeholder:text-neutral-content/50 w-full";
const textareaClass =
	"textarea w-full font-mono text-sm placeholder:text-neutral-content/50 resize-none";

export default function ContactPage() {
	const { t } = useTranslation("pages");
	const [form, setForm] = useState(INITIAL);
	const [sent, setSent] = useState(false);

	function handleChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		const body = `${t("contact.name")}: ${form.name}\n${t("contact.email")}: ${form.email}\n\n${form.message}`;
		const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailto;
		setSent(true);
	}

	return (
		<PageLayout title={t("contact.title")} subtitle={t("contact.subtitle")}>
			<div className="max-w-2xl">
				{sent ? (
					<div className="space-y-6">
						<div className="rounded-2xl bg-secondary px-6 py-5">
							<p className="font-mono text-sm text-primary-content">
								{">"} {t("contact.sent")}
							</p>
						</div>
						<button
							className="font-mono text-sm text-neutral-content hover:text-accent transition-colors"
							onClick={() => { setForm(INITIAL); setSent(false); }}>
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
						<div className="flex items-center gap-6">
							<Button type="submit" variant="primary">
								{t("contact.send")}
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
