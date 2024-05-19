import { Facebook, Instagram, X } from "@mui/icons-material";
import Button from "@/components/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen p-2 ">
      <div className="lg:w-[40%] mt-24">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[6em] h-[6em] mx-auto mb-6"
        />
        <img src="/sipnpaint.png" className="w-3/5 mx-auto mb-8" />
        <img src="/welcome.png" className="w-4/5 mx-auto mb-10" />
        <div className="button-background w-3/5 mx-auto mb-10">
          <Button
            text="click to register!"
            link="register"
            styles="text-[#927383] text-center text-xl p-4 w-full mx-auto"
          />
        </div>
        <ul className="flex justify-between text-[#927383] w-[50%] mx-auto mb-4">
          <li>
            <a href="https://www.facebook.com/estherk.yeboah" className="">
              <Facebook fontSize="large" />
            </a>
          </li>
          <li>
            <a href="#" className="">
              <X fontSize="large" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/estherkyeboah?igsh=MWl0OW5zNWpqZjJlcQ%3D%3D&utm_source=qr"
              className=""
            >
              <Instagram fontSize="large" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
