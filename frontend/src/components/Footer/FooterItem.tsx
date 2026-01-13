// import { Camera } from 'lucide-react';
export function FooterItem() {
  return (
    <>
      <div></div>
    </>
  );
}

export function FooterSocials() {
  return (
    <ul className="flex items-center justify-center gap-6">
      {/* Facebook */}
      <li>
        <a href="https://facebook.com/your-page">
          <img
            src="/public/FacebookLogo.png"
            alt="Facebook"
            className="w-8 h-8"
          />
        </a>
      </li>

      {/* Instagram */}
      <li>
        <a href="https://instagram.com/your-handle">
          <img
            src="/public/InstagramLogo.png"
            alt="Instagram"
            className="w-8 h-8"
          />
        </a>
      </li>

      {/* LinkedIn */}
      <li>
        <a href="https://linkedin.com/your-page">
          <img
            src="/public/linkedInLogo.png"
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>
      </li>
    </ul>
  );
}
