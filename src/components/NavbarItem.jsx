import Link from "next/link";

export default function NavbarItem({ title, param }) {
  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className="m-4 hover:text-amber-600 font-semibold p-2">
        {title}
      </Link>
    </div>
  )
}
