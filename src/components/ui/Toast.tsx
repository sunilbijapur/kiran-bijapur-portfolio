import { FiCheckCircle, FiXCircle, FiX } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

export type ToastState = { type: 'success' | 'error'; message: string } | null;

export default function Toast({ toast, onClose }: { toast: ToastState; onClose: () => void }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className={`fixed top-20 right-4 z-[100] flex items-start gap-3 rounded-md border px-4 py-3.5 shadow-glass-lg max-w-sm ${
            toast.type === 'success'
              ? 'bg-emerald-50 dark:bg-emerald-900/90 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-100'
              : 'bg-red-50 dark:bg-red-900/90 border-red-300 dark:border-red-700 text-red-800 dark:text-red-100'
          }`}
        >
          {toast.type === 'success' ? (
            <FiCheckCircle className="mt-0.5 shrink-0" aria-hidden="true" />
          ) : (
            <FiXCircle className="mt-0.5 shrink-0" aria-hidden="true" />
          )}
          <p className="text-sm leading-relaxed flex-1">{toast.message}</p>
          <button type="button" onClick={onClose} aria-label="Dismiss notification">
            <FiX size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
