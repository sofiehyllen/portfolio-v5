import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import PageLayout from "../components/wrappers/PageLayout";
import Button from "../components/buttons/Button";
import { IoIosRocket } from "react-icons/io";
import ProfileImg from "@assets/profile_picture.png";
import { LuMapPin } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

const INITIAL = { name: "", email: "", subject: "", message: "" };

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
			<div className="flex space-x-8">
				<div className="bg-white/35 dark:bg-white/5 rounded-2xl p-10 flex flex-col items-center h-fit max-w-72">
					<div className="rounded-full bg-white dark:bg-gray-100/20 overflow-hidden">
						<img
							src={ProfileImg}
							alt={t("contact.profileAlt")}
							className="max-w-48"
							loading="lazy"
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
							rel="noopener noreferrer">
							<FaGitlab className="size-6 text-secondary-content/40 hover:text-secondary-content/60 transition-colors" />
						</a>
						<a
							href="https://github.com/sofiehyllen"
							target="_blank"
							rel="noopener noreferrer">
							<FaGithub className="size-7 text-secondary-content/40 hover:text-secondary-content/60 transition-colors" />
						</a>
					</div>
				</div>
				<div className="w-3/5 bg-gradient-to-r from-white/35 to-secondary/35 dark:from-white/5 dark:to-gray-400/10 p-6 rounded-2xl h-fit">
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
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
								<div>
									<label className="label">
										{t("contact.name")}
									</label>
									<input
										className="inputfield"
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
									<label className="label">
										{t("contact.email")}
									</label>
									<input
										className="inputfield"
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
								<label className="label">
									{t("contact.subject")}
								</label>
								<input
									className="inputfield"
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
								<label className="label">
									{t("contact.message")}
								</label>
								<textarea
									className="textfield"
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
