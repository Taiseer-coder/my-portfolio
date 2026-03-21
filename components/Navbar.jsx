import { MdEmail, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    
    <>
      <nav className="top-0 left-0 w-full shadow z-10 fixed bg-white">
        <div className="max-auto px-4 py-4 flex items-center justify-between">

          {/* الاسم + القائمة */}
          <div className="flex gap-6 items-center">

            <div className="text-2xl">
              تيسير البحري
            </div>

            {/* روابط - تظهر فقط في الشاشات الكبيرة */}
            <div className="gap-4 underline hidden md:flex">
              <Link to="/">الرئيسية</Link>
              <Link to="/skills">المهارات</Link>
              <Link to="/services">الخدمات</Link>
              <Link to="/Projects">المشاريع</Link>
            </div>
          </div>

          {/* أيقونات اليمين */}
          <div className="flex gap-4 items-center">

            {/* ايميل */}
            <a href="https://wa.me/+967776231475" target="_blank">
              <MdEmail />
            </a>

            {/* زر القائمة - يظهر فقط في الموبايل */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              <MdMenu />
            </button>
          </div>
        </div>

        {/* القائمة المنسدلة للموبايل */}
        {open && (
          <div className="flex flex-col items-center gap-4 py-4 bg-white md:hidden shadow">
            <Link to="/" onClick={() => setOpen(false)}>الرئيسية</Link>
            <Link to="/skills" onClick={() => setOpen(false)}>المهارات</Link>
            <Link to="/services" onClick={() => setOpen(false)}>الخدمات</Link>
            <Link to="/Projects" onClick={() => setOpen(false)}>المشاريع</Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;