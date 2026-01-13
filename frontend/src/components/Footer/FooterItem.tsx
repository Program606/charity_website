export function FooterSocials() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="text-sm font-semibold tracking-wide text-slate-300">
        CONNECT WITH US
      </h2>
      <ul className="flex items-center gap-4">
        {/* Facebook */}
        <li>
          <a
            href="https://facebook.com/your-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/FacebookLogo.png"
              alt="Facebook"
              className="h-7 w-7 rounded-full bg-white p-1 shadow-sm hover:shadow-md transition-shadow"
            />
          </a>
        </li>

        {/* Instagram */}
        <li>
          <a
            href="https://instagram.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/InstagramLogo.png"
              alt="Instagram"
              className="h-7 w-7 rounded-full bg-white p-1 shadow-sm hover:shadow-md transition-shadow"
            />
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <a
            href="https://linkedin.com/your-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedInLogo.png"
              alt="LinkedIn"
              className="h-7 w-7 rounded-full bg-white p-1 shadow-sm hover:shadow-md transition-shadow"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

// Contact info
export function FooterContact() {
  return (
    <div className="flex flex-col items-start gap-2 text-sm text-slate-300">
      <h2 className="text-sm font-semibold tracking-wide text-slate-300">
        CONTACT
      </h2>
      <p className="text-slate-400">email@gmail.com</p>
      <p className="text-slate-400">+1 (234) 567-890</p>
      <p className="text-slate-500 text-xs">
        Calgary, Alberta • Readers for Uni
      </p>
    </div>
  );
}

// Subscribe section
export function FooterSubscribe() {
  return (
    <div className="flex max-w-xs flex-col gap-3 text-sm text-slate-300">
      <h2 className="text-sm font-semibold tracking-wide text-slate-300">
        STAY UPDATED
      </h2>
      <p className="text-slate-400">
        Enter your email to get updates on new reading programs and events.
      </p>
      <form className="flex w-full items-center gap-2">
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
        />
        <button
          type="submit"
          className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Join
        </button>
      </form>
    </div>
  );
}
