import NavbarItem from "./NavbarItem"

export default function Navbar() {
  return (
    <div className="flex justify-center bg-gray-600 lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
