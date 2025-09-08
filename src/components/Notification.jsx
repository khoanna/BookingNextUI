"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react"; // icon đóng gọn gàng hơn
import clsx from "clsx";

export default function Notification({ type = "success", message, onClose }) {
    const isSuccess = type === "success";
    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={clsx(
                "relative flex items-center max-w-sm w-full rounded-lg shadow-lg px-4 py-3 border border-l-4 ",
                isSuccess
                    ? "bg-white text-blue-700 border-blue-600"
                    : "bg-red-50 text-red-700 border-red-600"
            )}
        >
            <p className="text-sm flex-1">{message}</p>

            <button
                type="button"
                aria-label="close"
                onClick={onClose}
                className="ml-3 text-gray-500 hover:text-gray-700 transition cursor-pointer"
            >
                <X size={18} />
            </button>
        </motion.div>
    );
}
