const Step3 = ({ formData, handleSubmit, handleChange, handleReset, prev, step }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">Step 3: Skill Set</h1>

        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
            Enter your skill set:
          </label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g., React, Node.js, Tailwind CSS"
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleReset}
            className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition"
          >
            Reset
          </button>

          <div className="space-x-2">
            <button
              onClick={prev}
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Finish {step} / 3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
