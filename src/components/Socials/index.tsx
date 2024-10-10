import { Fragment } from "react";
import Git from "./Git";
import Link from "next/link";

const socialsLinks = [
  {
    url: "https://github.com",
    icon: Git,
  },
];

export default function Socials() {
  return (
    <>
      {socialsLinks.map((x, index) => (
        <Fragment key={`$logo_${index}`}>
          <Link href={x.url}>
            <x.icon />
          </Link>
        </Fragment>
      ))}
    </>
  );
}
