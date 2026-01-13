// import { Camera } from 'lucide-react';
import { FooterSocials } from '@/components/Footer/FooterItem';
export function Footer() {
  return (
    <section className="flex-1 flex flex-row justify-center items-center gap-4 m-6 p-6">
        <FooterSocials />
      <div className="bg-yellow-300 flex flex-col gap-4">
        <h2>CONTACT US</h2>
        <p>email@gmail.com</p>
        <p>+1234567890</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2>Subscribe</h2>
        <p>Enter your email to get notifications</p>
      </div>
      <div className=""></div>
    </section>
  );
}
