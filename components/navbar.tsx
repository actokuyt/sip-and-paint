export default function NavBar() {
  return (
    <div className="hidden md:flex w-full fixed top-0 p-2 bg-[#eee] drop-shadow-md">
      <span className="basis-1/5"></span>
      <span className="basis-3/5 flex items-center justify-center">
        <a href="/" className="mr-4 hover:underline">
          Home
        </a>
        <a href="/about" className="mr-4 hover:underline">
          About Us
        </a>
        <a href="/register" className="mr-4 hover:underline">
          Buy a Ticket
        </a>
        <a href="/contact" className="mr-4 hover:underline">
          Contact Us
        </a>
      </span>
      <span className="basis-1/5 text-center bottom-0 px-4 "></span>
    </div>
  );
}
