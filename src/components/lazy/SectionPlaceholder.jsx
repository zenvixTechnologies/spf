"use client";

export default function SectionPlaceholder({
  className = "",
  containerClassName = "",
}) {
  return (
    <div className={`bg-[#f8f9fb] ${className}`}>
      <div className={`mx-auto max-w-7xl animate-pulse px-6 ${containerClassName}`}>
        <div className="h-6 w-32 rounded-full bg-slate-200/80" />
        <div className="mt-5 h-10 max-w-2xl rounded-2xl bg-slate-200/80" />
        <div className="mt-4 h-4 max-w-3xl rounded-full bg-slate-200/70" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="h-48 rounded-[24px] bg-white shadow-sm" />
          <div className="h-48 rounded-[24px] bg-white shadow-sm" />
          <div className="h-48 rounded-[24px] bg-white shadow-sm" />
        </div>
      </div>
    </div>
  );
}
