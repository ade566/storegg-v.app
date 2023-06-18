import Image from "next/image";
import Link from "next/link";

export default function FooterAboutUs() {
  return (
    <div className="col-lg-4 text-lg-start text-center">
      <Link className="mb-30" href="/">
        <Image src="/icon/logo.svg" width={60} height={60} alt="" />
      </Link>
      <p className="mt-30 text-lg color-palette-1 mb-30">StoreGG membantu gamers<br /> untuk menjadi
        pemenang sejati</p>
      <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
    </div>
  )
}