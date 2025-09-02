import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function ProductModal({ product, onClose }) {
	const MotionDiv = motion.div;
	return (
		<AnimatePresence>
			{product ? (
				<MotionDiv
					className="fixed inset-0 z-50 flex items-center justify-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					aria-modal="true"
					role="dialog"
				>
					{/* Backdrop */}
					<MotionDiv
						className="absolute inset-0 bg-black/40"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
					/>

					{/* Modal Card */}
					<MotionDiv
						className="relative z-10 mx-4 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
						initial={{ y: 40, opacity: 0, scale: 0.98 }}
						animate={{ y: 0, opacity: 1, scale: 1 }}
						exit={{ y: 40, opacity: 0, scale: 0.98 }}
						transition={{ type: "spring", stiffness: 260, damping: 24 }}
					>
						{/* Header Image */}
						<div className="relative aspect-video w-full h-64">
							<img src={product.image} alt={product.title} className="h-full w-full object-cover" />
							<button
								aria-label="Close"
								onClick={onClose}
								className="absolute right-3 top-3 rounded-full bg-white/80 p-2 text-gray-700 shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
							>
								<X className="h-5 w-5" />
							</button>
						</div>

						{/* Content */}
						<div className="space-y-4 p-6">
							<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
								<h3 className="text-2xl font-semibold text-gray-900">{product.title}</h3>
								{product.status !== "available" && (
									<Badge className="bg-yellow-100 text-yellow-800">{product.status.replace("-", " ")}</Badge>
								)}
							</div>
							<p className="text-gray-700">{product.description}</p>
                            <p className="text-gray-700">{product.LongDescription}</p>
							{product.features?.length > 0 && (
								<div>
									<h4 className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">Key Features</h4>
									<div className="flex flex-wrap gap-2">
										{product.features.map((f) => (
											<Badge key={f.name} variant="secondary" className="flex items-center gap-1 bg-green-100 text-green-800">
												<f.icon className="h-3.5 w-3.5" />
												{f.name}
											</Badge>
										))}
									</div>
								</div>
							)}

							{product.specs?.length > 0 && (
								<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
									{product.specs.map((s) => (
										<div key={s.label} className="rounded-lg border bg-gray-50 px-4 py-3">
											<div className="text-xs font-medium uppercase tracking-wide text-gray-500">{s.label}</div>
											<div className="text-gray-800">{s.value}</div>
										</div>
									))}
								</div>
							)}

							<div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
								<Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100" onClick={onClose}>
									Close
								</Button>
								<Button className="bg-green-600 text-white hover:bg-green-700">Contact Sales</Button>
							</div>
						</div>
								</MotionDiv>
							</MotionDiv>
			) : null}
		</AnimatePresence>
	);
}

