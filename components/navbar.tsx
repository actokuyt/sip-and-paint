export default function NavBar() {
  return (
    <div className="hidden lg:flex w-full fixed top-0 p-2">
      <span className="basis-1/3" ></span>
      <span className="basis-1/3 flex items-center justify-center" >
        <a href="#" className="mr-6">
          Gallery
        </a>
        <a href="#" className="">
          Next Event
        </a>
      </span>
      <span className="basis-1/3 text-center bottom-0 px-4 ">
        <p>Tel: +44 7740 169320</p>
        <p>Email: estherkyeboagministries@gmail.com</p>
      </span>
    </div>
  );
}
