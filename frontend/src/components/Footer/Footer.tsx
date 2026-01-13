import {
  FooterSocials,
  FooterContact,
  FooterSubscribe,
} from "@/components/Footer/FooterItem";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <FooterSocials />
        <FooterContact />
        <FooterSubscribe />
      </section>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Readers for Uni. All rights reserved.</p>
          <p>University-led literacy club supporting young readers.</p>
        </div>
      </div>
    </footer>
  );
}
