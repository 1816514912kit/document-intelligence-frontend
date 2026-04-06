import { motion } from "framer-motion";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300"
      >
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">{title}</h2>
          <p className="text-center text-base-content/70">{subtitle}</p>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default AuthLayout;
