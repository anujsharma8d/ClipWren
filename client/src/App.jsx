import { useState } from "react";
import axios from "axios";
 import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [link, setLink] = useState("");
  const [newLink, setNewLink] = useState("");
  const notify = () => toast("Copied!")

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/url/shorten`,
        { link }
      );

      console.log(res.data);

      setNewLink(res.data.shortUrl);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0d0d0d] text-white flex items-center justify-center p-4">
      <main className="w-full max-w-[480px]">

        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-[54px] font-bold tracking-tight">
            ClipWren
            <span className="text-[#c94b29]">.</span>
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4"
        >
          <div className="space-y-2">
            <label
              htmlFor="url-input"
              className="block text-sm font-medium text-[#F4F0E8]"
            >
              Enter URL :
            </label>

            <div className="flex items-center bg-[#1a1a1a] border border-[#262626] rounded-xl px-4 py-3.5 transition focus-within:border-[#c94b29]">
              
              <svg
                className="w-5 h-5 text-neutral-500 mr-3 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                id="url-input"
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://example.com"
                required
                spellCheck="false"
                className="w-full bg-transparent border-0 p-0 text-sm text-[#F4F0E8] placeholder-[#77736C] focus:ring-0 focus:outline-none"
              />
            </div>
          </div>

          {/* Shorten Button */}
          <button
            type="submit"
            className="w-full bg-[#c94b29] hover:bg-[#b84323] text-white text-base font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-150 active:scale-[0.99]"
          >
            <span>Shorten</span>

            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>

        {newLink && (
          <div className="mt-6">
            <div className="flex items-center justify-between bg-[#1a1a1a] border border-[#262626] rounded-xl px-4 py-3.5">

              <div className="flex items-center min-w-0 mr-3">

                <svg
                  className="w-5 h-5 text-neutral-500 mr-3 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <a
                  href={newLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#F4F0E8] truncate tracking-wide hover:text-[#c94b29] transition"
                >
                  {newLink}
                </a>
              </div>

              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(newLink)}
                className="flex items-center gap-1.5 pl-3 border-l border-[#262626] text-sm font-medium text-[#C9C3B8] hover:text-[#F4F0E8] transition shrink-0 cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    width="13"
                    height="13"
                    x="9"
                    y="9"
                    rx="2"
                    ry="2"
                  />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>

                <span onClick={notify}>Copy</span>
                <ToastContainer
                  autoClose={3000}
                  progressClassName="clipwren-progress"
                  toastClassName="clipwren-toast"
                />
              </button>

            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default App;