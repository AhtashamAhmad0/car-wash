import { useMemo, useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  User,
  Car,
  ClipboardList,
  MessageCircle,
  Mail,
  PartyPopper,
  AlertCircle,
} from "lucide-react";
import {
  SERVICES,
  PACKAGES,
  VEHICLE_TYPES,
  TIME_SLOTS,
  getUnavailableSlots,
  BUSINESS,
} from "../data/data";
import { SectionHeading } from "./Services";

const STEPS = ["Service", "Details", "Schedule", "Summary"];

const initialForm = {
  serviceId: "",
  packageId: "",
  vehicleTypeId: "",
  fullName: "",
  phone: "",
  email: "",
  whatsapp: "",
  carMake: "",
  carModel: "",
  vehicleNumber: "",
  date: "",
  time: "",
  notes: "",
};

function todayISO() {
  return new Date().toISOString().split("T")[0];
}

function maxDateISO() {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  return d.toISOString().split("T")[0];
}

export default function Booking() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [reference] = useState(() => `SB-${Math.floor(100000 + Math.random() * 900000)}`);

  const selectedService = SERVICES.find((s) => s.id === form.serviceId);
  const selectedPackage = PACKAGES.find((p) => p.id === form.packageId);
  const selectedVehicle = VEHICLE_TYPES.find((v) => v.id === form.vehicleTypeId);

  const estimatedPrice = selectedPackage?.price ?? selectedService?.price ?? 0;
  const estimatedDuration = selectedService?.duration ?? 45;

  const unavailable = useMemo(() => (form.date ? getUnavailableSlots(form.date) : []), [form.date]);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validateStep(current) {
    const e = {};
    if (current === 0) {
      if (!form.serviceId) e.serviceId = "Please select a service.";
      if (!form.vehicleTypeId) e.vehicleTypeId = "Please select your vehicle type.";
    }
    if (current === 1) {
      if (!form.fullName.trim()) e.fullName = "Name cannot be empty.";
      if (!/^[\d+\-\s]{7,15}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
      if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
        e.email = "Enter a valid email address.";
      if (!form.carMake.trim()) e.carMake = "Car make is required.";
      if (!form.carModel.trim()) e.carModel = "Car model is required.";
      if (!form.vehicleNumber.trim()) e.vehicleNumber = "Vehicle number is required.";
    }
    if (current === 2) {
      if (!form.date) e.date = "Please select a date.";
      if (!form.time) e.time = "Please select a time slot.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, STEPS.length - 1));
    else window.scrollTo({ top: document.getElementById("booking").offsetTop - 90, behavior: "smooth" });
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function confirmBooking() {
    setSubmitted(true);
  }

  function editBooking() {
    setStep(0);
  }

  const whatsappMessage = encodeURIComponent(
    `Car Wash Booking Request\n` +
      `Reference: ${reference}\n` +
      `Customer: ${form.fullName}\n` +
      `Phone: ${form.phone}\n` +
      `Vehicle: ${form.carMake} ${form.carModel} (${selectedVehicle?.name || ""})\n` +
      `Vehicle No: ${form.vehicleNumber}\n` +
      `Service: ${selectedService?.name || ""}${selectedPackage ? " + " + selectedPackage.name + " package" : ""}\n` +
      `Date: ${form.date}\n` +
      `Time: ${form.time}\n` +
      `Estimated Price: Rs. ${estimatedPrice.toLocaleString()}\n` +
      (form.notes ? `Notes: ${form.notes}\n` : "")
  );
  const whatsappLink = `https://wa.me/${BUSINESS.whatsapp}?text=${whatsappMessage}`;

  const emailSubject = encodeURIComponent(`Car Wash Booking Request — ${reference}`);
  const emailBody = encodeURIComponent(
    `Car Wash Booking Request\n\n` +
      `Reference: ${reference}\n` +
      `Customer: ${form.fullName}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Vehicle: ${form.carMake} ${form.carModel} (${selectedVehicle?.name || ""})\n` +
      `Vehicle No: ${form.vehicleNumber}\n` +
      `Service: ${selectedService?.name || ""}${selectedPackage ? " + " + selectedPackage.name + " package" : ""}\n` +
      `Date: ${form.date}\n` +
      `Time: ${form.time}\n` +
      `Estimated Duration: ${estimatedDuration} minutes\n` +
      `Estimated Price: Rs. ${estimatedPrice.toLocaleString()}\n` +
      (form.notes ? `Additional Notes: ${form.notes}\n` : "")
  );
  const emailLink = `mailto:${BUSINESS.email}?subject=${emailSubject}&body=${emailBody}`;

  function resetAll() {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
    setStep(0);
  }

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="Reserve Your Slot"
          title="Book Your Wash"
          text="Tell us about your vehicle and pick a time — takes less than two minutes."
        />

        {!submitted ? (
          <div className="mt-12 bg-mist rounded-3xl p-6 sm:p-10 border border-ink-100">
            {/* Stepper */}
            <div className="flex items-center justify-between mb-10">
              {STEPS.map((label, i) => (
                <div key={label} className="flex-1 flex items-center">
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-sm font-bold border-2 transition-colors ${
                        i < step
                          ? "bg-foam-500 border-foam-500 text-ink-900"
                          : i === step
                          ? "border-foam-500 text-foam-600"
                          : "border-ink-100 text-ink-300"
                      }`}
                    >
                      {i < step ? <Check size={16} /> : i + 1}
                    </div>
                    <span
                      className={`text-[11px] font-medium hidden sm:block ${
                        i <= step ? "text-ink-900" : "text-ink-300"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`h-0.5 flex-1 -mt-5 ${i < step ? "bg-foam-500" : "bg-ink-100"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step 0: Service */}
            {step === 0 && (
              <div className="space-y-8">
                <div>
                  <FieldLabel icon={ClipboardList}>Select Service</FieldLabel>
                  <div className="grid sm:grid-cols-2 gap-3 mt-3">
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => update("serviceId", s.id)}
                        className={`text-left rounded-xl border-2 px-4 py-3 transition-colors ${
                          form.serviceId === s.id
                            ? "border-foam-500 bg-foam-100"
                            : "border-ink-100 bg-white hover:border-foam-400"
                        }`}
                      >
                        <p className="font-semibold text-ink-900 text-sm">{s.name}</p>
                        <p className="font-mono text-xs text-ink-500 mt-1">
                          Rs. {s.price.toLocaleString()} · {s.duration} min
                        </p>
                      </button>
                    ))}
                  </div>
                  <ErrorText msg={errors.serviceId} />
                </div>

                <div>
                  <FieldLabel icon={Car}>Vehicle Type</FieldLabel>
                  <div className="grid sm:grid-cols-4 gap-3 mt-3">
                    {VEHICLE_TYPES.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => update("vehicleTypeId", v.id)}
                        className={`rounded-xl border-2 px-3 py-3 text-center transition-colors ${
                          form.vehicleTypeId === v.id
                            ? "border-foam-500 bg-foam-100"
                            : "border-ink-100 bg-white hover:border-foam-400"
                        }`}
                      >
                        <p className="font-semibold text-ink-900 text-sm">{v.name}</p>
                        <p className="font-mono text-[11px] text-ink-500 mt-1">
                          Rs. {v.startingPrice.toLocaleString()}+
                        </p>
                      </button>
                    ))}
                  </div>
                  <ErrorText msg={errors.vehicleTypeId} />
                </div>

                <div>
                  <FieldLabel icon={ClipboardList} optional>
                    Add a Package (optional)
                  </FieldLabel>
                  <div className="grid sm:grid-cols-3 gap-3 mt-3">
                    {PACKAGES.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() =>
                          update("packageId", form.packageId === p.id ? "" : p.id)
                        }
                        className={`rounded-xl border-2 px-4 py-3 text-left transition-colors ${
                          form.packageId === p.id
                            ? "border-foam-500 bg-foam-100"
                            : "border-ink-100 bg-white hover:border-foam-400"
                        }`}
                      >
                        <p className="font-semibold text-ink-900 text-sm">{p.name}</p>
                        <p className="font-mono text-xs text-ink-500 mt-1">
                          Rs. {p.price.toLocaleString()}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Customer + Vehicle details */}
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <FieldLabel icon={User}>Customer Information</FieldLabel>
                  <div className="grid sm:grid-cols-2 gap-4 mt-3">
                    <Input
                      label="Full Name"
                      value={form.fullName}
                      onChange={(v) => update("fullName", v)}
                      error={errors.fullName}
                      placeholder="Muhammad Ali"
                    />
                    <Input
                      label="Phone Number"
                      value={form.phone}
                      onChange={(v) => update("phone", v)}
                      error={errors.phone}
                      placeholder="0300-1234567"
                    />
                    <Input
                      label="Email Address (optional)"
                      value={form.email}
                      onChange={(v) => update("email", v)}
                      error={errors.email}
                      placeholder="you@example.com"
                    />
                    <Input
                      label="WhatsApp Number (optional)"
                      value={form.whatsapp}
                      onChange={(v) => update("whatsapp", v)}
                      placeholder="0300-1234567"
                    />
                  </div>
                </div>

                <div>
                  <FieldLabel icon={Car}>Vehicle Information</FieldLabel>
                  <div className="grid sm:grid-cols-2 gap-4 mt-3">
                    <Input
                      label="Car Make"
                      value={form.carMake}
                      onChange={(v) => update("carMake", v)}
                      error={errors.carMake}
                      placeholder="Toyota"
                    />
                    <Input
                      label="Car Model"
                      value={form.carModel}
                      onChange={(v) => update("carModel", v)}
                      error={errors.carModel}
                      placeholder="Corolla"
                    />
                    <Input
                      label="Vehicle Number"
                      value={form.vehicleNumber}
                      onChange={(v) => update("vehicleNumber", v)}
                      error={errors.vehicleNumber}
                      placeholder="ABC-123"
                    />
                  </div>
                </div>

                <div>
                  <FieldLabel icon={ClipboardList} optional>
                    Special Instructions (optional)
                  </FieldLabel>
                  <textarea
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    rows={3}
                    placeholder="e.g. Please focus on interior stains, park in shade, etc."
                    className="mt-3 w-full rounded-xl border-2 border-ink-100 focus:border-foam-500 outline-none px-4 py-3 text-sm bg-white"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Schedule */}
            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <FieldLabel icon={CalendarDays}>Preferred Date</FieldLabel>
                  <input
                    type="date"
                    min={todayISO()}
                    max={maxDateISO()}
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className={`mt-3 w-full sm:w-64 rounded-xl border-2 outline-none px-4 py-3 text-sm bg-white ${
                      errors.date ? "border-red-400" : "border-ink-100 focus:border-foam-500"
                    }`}
                  />
                  <ErrorText msg={errors.date} />
                </div>

                <div>
                  <FieldLabel icon={CalendarDays}>Preferred Time Slot</FieldLabel>
                  <p className="text-xs text-ink-300 mt-1 mb-3">{BUSINESS.hours}</p>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                    {TIME_SLOTS.map((slot) => {
                      const isBooked = form.date && unavailable.includes(slot);
                      const isSelected = form.time === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          disabled={isBooked}
                          onClick={() => update("time", slot)}
                          className={`rounded-lg px-2 py-2.5 text-xs font-mono font-semibold border-2 transition-colors ${
                            isBooked
                              ? "border-ink-100 bg-ink-100/50 text-ink-300 line-through cursor-not-allowed"
                              : isSelected
                              ? "border-foam-500 bg-foam-500 text-ink-900"
                              : "border-ink-100 bg-white text-ink-700 hover:border-foam-400"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex gap-4 mt-3 text-[11px] text-ink-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-white border border-ink-100" /> Available
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-foam-500" /> Selected
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-ink-100" /> Booked / Unavailable
                    </span>
                  </div>
                  <ErrorText msg={errors.time} />
                </div>
              </div>
            )}

            {/* Step 3: Summary */}
            {step === 3 && (
              <div>
                <h3 className="font-display text-2xl font-bold text-ink-900 mb-5">Booking Summary</h3>
                <div className="bg-white rounded-2xl border border-ink-100 divide-y divide-ink-100">
                  <SummaryRow label="Customer" value={form.fullName} />
                  <SummaryRow label="Phone" value={form.phone} />
                  <SummaryRow
                    label="Vehicle"
                    value={`${form.carMake} ${form.carModel} · ${selectedVehicle?.name || ""} (${form.vehicleNumber})`}
                  />
                  <SummaryRow
                    label="Service"
                    value={`${selectedService?.name || ""}${selectedPackage ? " + " + selectedPackage.name : ""}`}
                  />
                  <SummaryRow label="Date" value={form.date} />
                  <SummaryRow label="Time" value={form.time} />
                  <SummaryRow label="Estimated Duration" value={`${estimatedDuration} minutes`} />
                  <SummaryRow
                    label="Estimated Price"
                    value={`Rs. ${estimatedPrice.toLocaleString()}`}
                    strong
                  />
                  {form.notes && <SummaryRow label="Notes" value={form.notes} />}
                </div>
              </div>
            )}

            {/* Nav buttons */}
            <div className="flex items-center justify-between mt-10">
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors ${
                  step === 0
                    ? "text-ink-300 cursor-not-allowed"
                    : "text-ink-700 hover:bg-ink-100"
                }`}
              >
                <ChevronLeft size={16} /> Back
              </button>

              {step < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center gap-1.5 bg-ink-900 hover:bg-ink-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
                >
                  Continue <ChevronRight size={16} />
                </button>
              ) : (
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={editBooking}
                    className="text-sm font-semibold px-5 py-2.5 rounded-full border-2 border-ink-100 text-ink-700 hover:border-ink-300"
                  >
                    Edit Booking
                  </button>
                  <button
                    type="button"
                    onClick={confirmBooking}
                    className="inline-flex items-center gap-1.5 bg-foam-500 hover:bg-foam-400 text-ink-900 text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
                  >
                    Confirm Booking <Check size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-12 bg-ink-900 rounded-3xl p-8 sm:p-12 text-center">
            <span className="inline-flex w-16 h-16 rounded-full bg-foam-500 items-center justify-center mx-auto mb-6">
              <PartyPopper size={28} className="text-ink-900" />
            </span>
            <h3 className="font-display text-3xl font-bold text-white">
              Booking Request Submitted Successfully!
            </h3>
            <p className="text-ink-100 mt-3 max-w-md mx-auto">
              Your car wash booking request has been prepared. Send it to us via WhatsApp or Email to
              confirm your slot.
            </p>

            <div className="bg-ink-800 rounded-2xl mt-8 p-6 text-left max-w-md mx-auto divide-y divide-ink-700">
              <SummaryRow label="Reference" value={reference} light strong />
              <SummaryRow label="Customer" value={form.fullName} light />
              <SummaryRow label="Vehicle" value={`${form.carMake} ${form.carModel}`} light />
              <SummaryRow
                label="Service"
                value={`${selectedService?.name || ""}${selectedPackage ? " + " + selectedPackage.name : ""}`}
                light
              />
              <SummaryRow label="Date" value={form.date} light />
              <SummaryRow label="Time" value={form.time} light />
              <SummaryRow label="Estimated Price" value={`Rs. ${estimatedPrice.toLocaleString()}`} light strong />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foam-500 hover:bg-foam-400 text-ink-900 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <MessageCircle size={18} /> Send via WhatsApp
              </a>
              <a
                href={emailLink}
                className="inline-flex items-center justify-center gap-2 border-2 border-ink-100/30 hover:border-foam-400 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <Mail size={18} /> Send via Email
              </a>
            </div>

            <button
              type="button"
              onClick={resetAll}
              className="text-ink-300 hover:text-white text-sm font-medium mt-8 underline underline-offset-4"
            >
              Make another booking
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function FieldLabel({ icon: Icon, children, optional }) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={16} className="text-foam-600" />
      <span className="text-sm font-semibold text-ink-900">{children}</span>
      {optional && <span className="text-[11px] text-ink-300">optional</span>}
    </div>
  );
}

function Input({ label, value, onChange, error, placeholder }) {
  return (
    <div>
      <label className="text-xs font-medium text-ink-500 mb-1.5 block">{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border-2 outline-none px-4 py-2.5 text-sm bg-white ${
          error ? "border-red-400" : "border-ink-100 focus:border-foam-500"
        }`}
      />
      <ErrorText msg={error} />
    </div>
  );
}

function ErrorText({ msg }) {
  if (!msg) return null;
  return (
    <p className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5">
      <AlertCircle size={13} /> {msg}
    </p>
  );
}

function SummaryRow({ label, value, strong, light }) {
  return (
    <div className="flex items-center justify-between py-3 px-5 first:pt-4 last:pb-4">
      <span className={`text-sm ${light ? "text-ink-300" : "text-ink-500"}`}>{label}</span>
      <span
        className={`text-sm text-right max-w-[60%] ${
          strong ? "font-mono font-bold " + (light ? "text-foam-400" : "text-foam-600") : light ? "text-white" : "text-ink-900 font-medium"
        }`}
      >
        {value || "—"}
      </span>
    </div>
  );
}
