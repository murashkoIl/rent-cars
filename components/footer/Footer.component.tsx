import Image from 'next/image';
import Link from 'next/link';

import { FOOTER_LINKS } from '@/constants';

const FooterComponent = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={'/logo.svg'}
            alt="Car Rent logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Car Rent 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {FOOTER_LINKS.map(({ title, links }) => (
            <div key={title} className="footer__link">
              <h3 className="font-bold">{title}</h3>
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500 hover:text-secondary-blue"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500 hover:text-secondary-blue">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500 hover:text-secondary-blue">
            Rerms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
