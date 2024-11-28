import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ItemCard({ title, imgUrl, url }) {
  return (
    <div className="itemCardContainer">
      <Link href={url}>
        <Image src={imgUrl} fill alt={`Visitez ${title}`} />
      </Link>
      <h3>{title}</h3>
    </div>
  );
}
