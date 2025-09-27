import { useState } from "react";
import Select, { type MultiValue } from "react-select";
import logoFinal1 from "app/welcome/logoFinal1.png"; // update your path
import openboard from "app/welcome/openboard.png";
import { Link } from "react-router";

type OptionType = { value: string; label: string };

export default function SignupMultiStep() {
  const [step, setStep] = useState(1);

  // Step 1 state
  const [contentTypes, setContentTypes] = useState<MultiValue<OptionType>>([]);
  const [customOther, setCustomOther] = useState(""); // custom text for "Other"
  const contentOptions: OptionType[] = [
    { value: "coding", label: "Coding" },  
    { value: "blogging", label: "Blogging" },
    { value: "research", label: "Research" },
    { value: "design", label: "Design" },
    { value: "other", label: "Other" },
  ];

  // Step 2 state
  const [selectedActions, setSelectedActions] = useState<string[]>([]);
  const actionOptions = [
    "Upload Content",
    "Write Blog",
    "Share Video (Reels / Full)",
    "Share Code / Tutorials",
  ];

  const toggleAction = (action: string) => {
    setSelectedActions((prev) =>
      prev.includes(action) ? prev.filter((a) => a !== action) : [...prev, action]
    );
  };

  // React-select custom styles
  const customStyles = {
    control: (base: any) => ({
      ...base,
      borderColor: "#4aca35",
      boxShadow: "none",
      "&:hover": { borderColor: "#4aca35" },
      backgroundColor: "white",
    }),
    multiValue: (base: any) => ({ ...base, backgroundColor: "#e6f5e6" }),
    multiValueLabel: (base: any) => ({ ...base, color: "#4aca35" }),
    singleValue: (base: any) => ({ ...base, color: "#000" }),
    option: (base: any, state: any) => ({
      ...base,
      color: state.isSelected ? "#4aca35" : "#000",
      backgroundColor: state.isSelected ? "#e6f5e6" : "#fff",
      "&:hover": { backgroundColor: "#d4f0d4" },
    }),
    menu: (base: any) => ({ ...base, zIndex: 9999 }),
  };

  // Combine selected options + custom "Other" text
  const selectedContent = [
    ...contentTypes.map((ct) => ct.label),
    ...(customOther ? [customOther] : []),
  ];

  return (
    <div className="min-h-screen flex relative bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <Link to="/">
            <img
              src={openboard}
              alt="Logo"
              className="w-20 sm:w-24 md:w-[166px] object-contain dark:hidden cursor-pointer"
            />
            <img
              src={openboard}
              alt="Logo Dark"
              className="w-20 sm:w-24 md:w-[166px] object-contain hidden dark:block cursor-pointer"
            />
          </Link>
        </div>
      </header>

      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center px-12">
        {step === 1 && (
          <>
            <div
              className="text-xs font-semibold uppercase mb-4"
              style={{ color: "#4aca35" }}
            >
              Step 1 of 2
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              What's your content about?
            </h2>
            <p className="text-gray-500 dark:text-gray-300 mb-8">
              Create and consume knowledge.
            </p>

            {/* Multi-select Dropdown */}
            <div className="mb-8 max-w-lg">
              <Select
                value={contentTypes}
                onChange={(newValue: MultiValue<OptionType>) => setContentTypes(newValue)}
                options={contentOptions}
                placeholder="Select your content..."
                styles={customStyles}
                isMulti
                isSearchable
              />

              {/* If "Other" is selected, show a text input */}
              {contentTypes.some((ct) => ct.value === "other") && (
                <input
                  type="text"
                  placeholder="Enter your content type..."
                  className="mt-3 w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4aca35]"
                  value={customOther}
                  onChange={(e) => setCustomOther(e.target.value)}
                />
              )}
            </div>

            <div className="max-w-lg">
              <button
                type="button"
                disabled={selectedContent.length === 0}
                onClick={() => setStep(2)}
                className={`w-full py-3 rounded font-semibold transition ${
                  selectedContent.length > 0
                    ? "bg-[#4aca35] text-white hover:bg-[#3fb92e]"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div
              className="text-xs font-semibold uppercase mb-4"
              style={{ color: "#4aca35" }}
            >
              Step 2 of 3
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              What do you want to do with your OpenBoard Page?
            </h2>
            <p className="text-gray-500 dark:text-gray-300 mb-8">
              Select all that apply. You can choose multiple actions.
            </p>

            <div className="flex flex-col gap-4 max-w-lg mb-8">
              {actionOptions.map((action) => (
                <label
                  key={action}
                  className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition ${
                    selectedActions.includes(action)
                      ? "bg-[#4aca35]/20 border-[#4aca35]"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedActions.includes(action)}
                    onChange={() => toggleAction(action)}
                    className="w-5 h-5 text-[#4aca35] accent-[#4aca35] cursor-pointer"
                  />
                  <span className="text-gray-900 dark:text-white">{action}</span>
                </label>
              ))}
            </div>

            <div className="flex max-w-lg gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/2 py-3 rounded font-semibold border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Back
              </button>
              <button
                type="button"
                disabled={selectedActions.length === 0}
                className={`w-1/2 py-3 rounded font-semibold transition ${
                  selectedActions.length > 0
                    ? "bg-[#4aca35] text-white hover:bg-[#3fb92e]"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                Finish
              </button>
            </div>
          </>
        )}
      </div>

      {/* Right Section */}
      <div className="hidden md:flex flex-1 bg-gray-100 dark:bg-gray-800 items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
          alt="Decorative"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
