import Container from "../ui/Container";
import Navigation from "./Navigation";
import BlueSpan from "../ui/BlueSpan";
import Logo from "../ui/Logo";
import { Link } from "react-router";

import { Divider } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const contactDetails = [
  {
    id: "email",
    icon: EmailIcon,
    text: "rental@gmail.com",
    href: "mailto:rental@gmail.com",
  },
  {
    id: "phone",
    icon: PhoneIcon,
    text: "+387 66 357 126",
    href: "tel:+38766357126",
  },
  {
    id: "location",
    icon: LocationOnIcon,
    text: "Sarajevo, Bosnia and Herzegovina",
    href: undefined,
  },
] as const;

export const socialLinks = [
  { name: "Instagram", icon: InstagramIcon, url: "https://instagram.com" },
  { name: "LinkedIn", icon: LinkedInIcon, url: "https://linkedin.com" },
  { name: "Facebook", icon: FacebookIcon, url: "https://facebook.com" },
  { name: "Twitter", icon: TwitterIcon, url: "https://twitter.com" },
] as const;

function Footer() {
  return (
    <footer className="border border-slate-300 bg-slate-100 px-5 pt-20 pb-6 shadow-xl">
      <Container>
        <div className="mb-8 grid grid-cols-1 place-items-start justify-items-center gap-10 sm:grid-cols-3 sm:gap-0">
          <div className="grid">
            <Logo color="black" />
            <p className="mt-3 max-w-96 text-center font-semibold tracking-wide text-slate-500 sm:max-w-full sm:text-start">
              Your trusted partner for car rentals. We provide a wide range of
              vehicles at the best prices with excellent customer service.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              Popular <BlueSpan>Cars</BlueSpan>
            </h3>
            <ul className="mt-3 grid gap-3">
              <Link className="font-medium" to="#">
                Luxury Cars Rental
              </Link>
              <Link className="font-medium" to="#">
                All Cars Rental
              </Link>
              <Link className="font-medium" to="#">
                Diesel Cars Rental
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="text-center text-2xl font-semibold sm:text-start">
              Contact
            </h3>

            <div className="mt-2 grid max-w-24 gap-3 sm:max-w-full">
              {contactDetails.map((item) => {
                const { id, icon: Icon, text, href } = item;
                return (
                  <div key={id} className="flex items-center gap-2">
                    <Icon
                      className="text-primary-color box-content rounded-full bg-slate-300 p-3"
                      fontSize="medium"
                    />
                    <a href={href} className="font-medium tracking-wide">
                      {text}
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-center gap-3 sm:justify-start">
              {socialLinks.map((item) => {
                const { name, icon: Icon, url } = item;

                return (
                  <div key={name}>
                    <a href={url}>
                      <Icon
                        className="text-primary-color box-content rounded-full bg-slate-300 p-3"
                        fontSize="medium"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Divider />

        <div className="mt-10 sm:flex sm:items-center sm:justify-between">
          <p className="text-center font-medium text-slate-500 sm:text-start">
            &copy; 2025 <BlueSpan>TL-Rent.</BlueSpan> All rights reserved.
          </p>
          <Navigation textShade={950} />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
