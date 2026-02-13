import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "motion/react";
import pic from "/images/my_pic.jpg";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { useMutation } from "@tanstack/react-query";
import { ApiClient } from "../utils/api-client";
import { toast } from "sonner";
import { IoPerson, IoSend } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { PiLinkedinLogoLight } from "react-icons/pi";

interface FormType {
  fullname: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormType>();

  const { mutate: sendMessage, isPending: isSending } = useMutation({
    mutationFn: (data: FormType) => ApiClient.postMessage({ ...data }),
    onSuccess: () => {
      toast.success("Sent successfully.");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (e: FormType) => {
    sendMessage({ ...e });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-8 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 z-10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute animate-bounce top-1/8 right-1/8  w-60 h-60 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute animate-pulse bottom-15 left-0 w-70 h-70 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      {/* Projects Content */}
      <div className="container mx-auto my-10">
        {/* Section Title */}
        <SectionTitle
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        {/* Sections */}
        <div className="z-10 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5">
          {/* Picture Side */}
          <div className="w-full h-full flex flex-col gap-5 rounded-md border-2 border-neutral-100/6 bg-linear-to-br from-indigo-500/8 to-blue-500/8 backdrop-blur-md p-8 shadow-gray-900/50 shadow-lg">
            {/* Section Icon and Title */}
            <div className="flex flex-row gap-3 items-center mb-10">
              <IoPerson className="text-4xl p-2 rounded-lg bg-neutral-100/10" />
              <h3 className="text-xl text-semibold">{t("contact.me")}</h3>
            </div>

            {/* Picture with Animated Balls */}
            <div className="relative mx-auto w-60 h-60 mt-10 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 rotate-5">
              {/* Animated Balls */}
              <div className="absolute -top-3 -right-12 w-8 h-8 animate-bounce rounded-full bg-linear-to-r from-amber-200 to-orange-400 shadow-gray-950/50 shadow-md" />
              <div className="absolute -bottom-5 -left-15 w-12 h-12 animate-bounce rounded-full bg-linear-to-r from-blue-600 to-purple-600 shadow-gray-950/50 shadow-md" />

              {/* Picture */}
              <img
                src={pic}
                alt="My Picture"
                className="-rotate-5 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-1 hover:scale-105"
              />
            </div>

            {/* Separator */}
            <div className="flex flex-row gap-2 w-[75%] mx-auto items-center mt-10">
              <div className="w-full h-px rounded-full bg-neutral-100/20" />
              <span className="text-xs text-neutral-100/60 whitespace-nowrap">
                {t("contact.social")}
              </span>
              <div className="w-full h-px rounded-full bg-neutral-100/20" />
            </div>

            {/* Social Media Links */}
            <div className="flex flex-row gap-5 justify-center items-center">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/essaidabdelemjid/"
                target="_blank"
                className="relative group p-2 rounded-lg bg-neutral-100/15 hover:bg-neutral-100/20 transition-all duration-150 hover:-translate-y-1 shadow-gray-900/30 shadow-md"
              >
                <div className="absolute top-0 lef-0 -ml-2 z-0 animate-ping w-full h-full rounded-full bg-neutral-100/10" />
                <FaInstagram
                  size={25}
                  className="text-neutral-100/60 group-hover:text-pink-500 transition-all duration-150"
                />
              </a>
              {/* Facebook */}
              <a
                href="https://www.instagram.com/essaidabdelemjid/"
                target="_blank"
                className="relative group p-2 rounded-lg bg-neutral-100/15 hover:bg-neutral-100/20 transition-all duration-150 hover:-translate-y-1 shadow-gray-900/30 shadow-md"
              >
                <div className="absolute top-0 lef-0 -ml-2 z-0 animate-ping w-full h-full rounded-full bg-neutral-100/10" />
                <FiFacebook
                  size={25}
                  className="text-neutral-100/60 group-hover:text-blue-500 transition-all duration-150"
                />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="relative group p-2 rounded-lg bg-neutral-100/15 hover:bg-neutral-100/20 transition-all duration-150 hover:-translate-y-1 shadow-gray-900/30 shadow-md"
              >
                <div className="absolute top-0 lef-0 -ml-2 z-0 animate-ping w-full h-full rounded-full bg-neutral-100/10" />
                <PiLinkedinLogoLight
                  size={25}
                  className="text-neutral-100/60 group-hover:text-blue-400 transition-all duration-150"
                />
              </a>
            </div>
          </div>
          {/* Form Side */}
          <div className="flex flex-col rounded-md border-2 border-neutral-100/6 bg-linear-to-br from-indigo-500/8 to-blue-500/8 backdrop-blur-md p-8 shadow-gray-900/50 shadow-lg">
            {/* Section Icon and Title */}
            <div className="flex flex-row gap-3 items-center mb-6">
              <MdOutlineMessage className="text-4xl p-2 rounded-lg bg-neutral-100/10" />
              <h3 className="text-xl text-semibold">{t("contact.send_me")}</h3>
            </div>

            <div className="flex flex-col gap-5 mt-3">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 justify-center"
              >
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fullname"
                    className="text-sm text-neutral-100 -mb-2"
                  >
                    {t("contact.fullname")}
                  </label>
                  <input
                    className="w-full p-3 border border-neutral-100/15 rounded-md outline-none shadow-neutral-100/40 focus:shadow-sm focus:border-neutral-100/80 transition-all duration-150 ease-in-out"
                    placeholder={t("contact.fullname_placeholder")}
                    type="text"
                    {...register("fullname", {
                      required: "Full Name is required!",
                      minLength: { value: 3, message: "Min 3 characters" },
                    })}
                  />
                  <AnimatePresence>
                    {errors?.fullname && (
                      <motion.span
                        initial={{ opacity: 0, translateX: -15 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        exit={{ opacity: 0, translateX: -15 }}
                        transition={{ duration: 0.1 }}
                        className="text-xs text-red-500 font-bold"
                      >
                        {errors?.fullname?.message}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm text-neutral-100 -mb-2"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    className="w-full p-3 border border-neutral-100/15 rounded-md outline-none shadow-neutral-100/40 focus:shadow-sm focus:border-neutral-100/80 transition-all duration-150 ease-in-out"
                    placeholder={t("contact.email_placeholder")}
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <AnimatePresence>
                    {errors?.email && (
                      <motion.span
                        initial={{ opacity: 0, translateX: -15 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        exit={{ opacity: 0, translateX: -15 }}
                        transition={{ duration: 0.1 }}
                        className="text-xs text-red-500 font-bold"
                      >
                        {errors?.email?.message}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm text-neutral-100 -mb-2"
                  >
                    {t("contact.message")}
                  </label>
                  <textarea
                    className="w-full min-h-38 p-3 border border-neutral-100/15 rounded-md outline-none shadow-neutral-100/40 focus:shadow-sm focus:border-neutral-100/80 transition-all duration-150 ease-in-out"
                    placeholder={t("contact.message_placeholder")}
                    {...register("message", {
                      required: "Message is required!",
                      minLength: { value: 15, message: "Min 15 characters" },
                    })}
                  />
                  <AnimatePresence>
                    {errors?.message && (
                      <motion.span
                        initial={{ opacity: 0, translateX: -15 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        exit={{ opacity: 0, translateX: -15 }}
                        transition={{ duration: 0.1 }}
                        className="text-xs text-red-500 font-bold"
                      >
                        {errors?.message?.message}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="group w-full mt-3 p-3 flex flex-row items-center justify-center gap-4 font-semibold rounded-md bg-linear-to-r from-indigo-600 to-purple-600 transition-all ease-in-out duration-200 shadow-indigo-500/50 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  {isSending
                    ? t("contact.sending").toUpperCase()
                    : t("contact.send").toUpperCase()}
                  <IoSend
                    className={`${isSending ? "animate-slide" : "group-hover:animate-slide"}`}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
