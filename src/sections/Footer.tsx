export default function Footer() {
  return (
    <footer className="w-full py-6 mt-12 border-t border-[#e5e7eb]">
      <p className="text-[12px] text-[#aaa] text-center">
        &copy; {new Date().getFullYear()} 陈明远. All rights reserved.
      </p>
    </footer>
  );
}
