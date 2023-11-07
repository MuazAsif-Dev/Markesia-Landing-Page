import { CompanyHeaderLogo } from '../../assets/CompanyLogo';

export default function Header() {
  return (
    <header className="flex items-center justify-center font-poppins">
      <nav className="flex w-11/12 max-w-7xl justify-between py-8 md:py-10">
        <div className="flex items-center justify-center">
          <a href="#">
            <CompanyHeaderLogo className="w-32 sm:w-auto" />
          </a>
        </div>

        <ul className="hidden items-center gap-12 lg:flex">
          <li>
            <a href="#" className="hover:text-brand-purple-secondary">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-purple-secondary">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-purple-secondary">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-purple-secondary">
              Blog
            </a>
          </li>
        </ul>
        <button className="rounded-lg border border-black bg-brand-orange-primary px-3 py-1 hover:bg-brand-orange-secondary active:bg-gray-200 md:mx-2 md:px-6 md:py-3">
          Request a Quote
        </button>
      </nav>
    </header>
  );
}
