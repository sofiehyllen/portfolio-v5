import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import PageLayout from "../components/wrappers/PageLayout";
import Button from "../components/buttons/Button";
import { IoIosRocket } from "react-icons/io";
import Image from "../components/Image";
import { buildSrcSet } from "../utils/srcset";
import { LuMapPin } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

const INITIAL = { name: "", email: "", subject: "", message: "" };

function validate(form) {
	const errors = {};
	if (!form.name.trim()) errors.name = true;
	if (!form.email.trim()) errors.email = true;
	if (!form.subject.trim()) errors.subject = true;
	if (!form.message.trim()) errors.message = true;
	return errors;
}

export default function ContactPage() {
	const { t } = useTranslation("pages");
	const [form, setForm] = useState(INITIAL);
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState("idle"); // idle | sending | sent | error

	function handleChange(e) {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
		if (errors[name]) setErrors({ ...errors, [name]: false });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const newErrors = validate(form);
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}
		setStatus("sending");
		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name.trim(),
					from_email: form.email.trim(),
					subject: form.subject.trim(),
					message: form.message.trim(),
				},
				{
					publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
					limitRate: { throttle: 10000 },
				}
			);
			setStatus("sent");
			setForm(INITIAL);
		} catch {
			setStatus("error");
		}
	}

	return (
		<PageLayout title={t("contact.title")} subtitle={t("contact.subtitle")}>
			<div className="flex flex-col md:flex-row gap-4 lg:gap-8">
				<div className="bg-white/35 dark:bg-white/5 rounded-2xl p-10 flex flex-col items-center h-fit w-full sm:max-w-72 md:p-5 md:w-5/12">
					<div className="rounded-full bg-white dark:bg-gray-100/20 overflow-hidden">
						<Image
							srcSet={buildSrcSet(
								"profile_picture.png",
								"default"
							)}
							sizes="192px"
							alt={t("contact.profileAlt")}
							className="max-w-48"
						/>
					</div>
					<p className="text-center text-2xl font-semibold text-primary-content pt-5">
						Sofie Fuglsang Hyllen
					</p>
					<div className="divider"></div>
					<div className="space-y-3 text-secondary-content">
						<div className="flex items-center space-x-4">
							<LuMapPin className="size-5" />
							<p>Copenhagen, DK</p>
						</div>
						<div className="flex items-center space-x-4">
							<LuMail className="size-5" />
							<a
								href="mailto:sofiehyllen@outlook.com"
								className="underline underline-offset-2">
								sofiehyllen@outlook.com
							</a>
						</div>
						<div className="flex items-center space-x-4">
							<FaLinkedinIn className="size-5" />
							<a
								href="https://www.linkedin.com/in/sofiefhyllen/"
								target="_blank"
								rel="noopener noreferrer"
								className="underline underline-offset-2">
								/in/sofiefhyllen
							</a>
						</div>
					</div>
					<div className="divider"></div>
					<div className="flex items-center gap-8">
						<a
							href="https://gitlab.com/sofiehyllen"
							target="_blank"
							rel="noopener noreferrer"
							aria-label={t("social.gitlab")}>
							<FaGitlab className="size-6 text-secondary-content/40 hover:text-secondary-content/60 transition-colors" />
						</a>
						<a
							href="https://github.com/sofiehyllen"
							target="_blank"
							rel="noopener noreferrer"
							aria-label={t("social.github")}>
							<FaGithub className="size-7 text-secondary-content/40 hover:text-secondary-content/60 transition-colors" />
						</a>
					</div>
				</div>
				<div className="w-full md:flex-1 bg-gradient-to-r from-white/35 to-secondary/35 dark:from-white/5 dark:to-gray-400/10 p-6 rounded-2xl h-fit">
					{status === "sent" ? (
						<div className="space-y-6 flex flex-col items-center pt-10 pb-5">
							<IoIosRocket className="size-12 text-accent" />
							<p className="font-mono text-primary-content pb-10 text-center">
								{t("contact.sent")}
							</p>
							<button
								className="text-secondary-content font-mono underline text-sm hover:"
								onClick={() => setStatus("idle")}>
								{t("contact.send_again")}
							</button>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-6 ">
							<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
								<div>
									<label
										className="label"
										htmlFor="contact-name">
										{t("contact.name")}
									</label>
									<input
										id="contact-name"
										className={`inputfield ${errors.name ? "border-error" : ""}`}
										type="text"
										name="name"
										value={form.name}
										onChange={handleChange}
										placeholder={t(
											"contact.name_placeholder"
										)}
										required
									/>
								</div>
								<div>
									<label
										className="label"
										htmlFor="contact-email">
										{t("contact.email")}
									</label>
									<input
										id="contact-email"
										className={`inputfield ${errors.email ? "border-error" : ""}`}
										type="email"
										name="email"
										value={form.email}
										onChange={handleChange}
										placeholder={t(
											"contact.email_placeholder"
										)}
										required
									/>
								</div>
							</div>
							<div>
								<label
									className="label"
									htmlFor="contact-subject">
									{t("contact.subject")}
								</label>
								<input
									id="contact-subject"
									className={`inputfield ${errors.subject ? "border-error" : ""}`}
									type="text"
									name="subject"
									value={form.subject}
									onChange={handleChange}
									placeholder={t(
										"contact.subject_placeholder"
									)}
									required
								/>
							</div>
							<div>
								<label
									className="label"
									htmlFor="contact-message">
									{t("contact.message")}
								</label>
								<textarea
									id="contact-message"
									className={`textfield ${errors.message ? "border-error" : ""}`}
									name="message"
									rows={6}
									value={form.message}
									onChange={handleChange}
									placeholder={t(
										"contact.message_placeholder"
									)}
									required
								/>
							</div>
							{status === "error" && (
								<p className="font-mono text-xs text-error">
									{">"} {t("contact.error")}
								</p>
							)}
							<div className="flex items-center gap-6">
								<Button
									type="submit"
									variant="primary"
									disabled={status === "sending"}>
									{status === "sending"
										? t("contact.sending")
										: t("contact.send")}
								</Button>
							</div>
						</form>
					)}
				</div>
			</div>
		</PageLayout>
	);
}
