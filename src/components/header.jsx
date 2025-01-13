export default function Header() {
  return (
    <div className="justify-center flex h-[76px] bg-white px-4 py-6 w-full">
      <img
        className=" h-[31px] w-[139px]"
        src="https://valueglance.com/assets/landing_logo-b7aad0b9.png"
      ></img>
      <div className="items center">
        <ul className="flex justify-between">
          <li className="px-4 py-2">About</li>
          <li className="px-4 py-2">Features</li>
          <li className="px-4 py-2">Price</li>
          <li className="px-4 py-2">Demo</li>
          <li className="px-4 py-2">Book</li>
          <li className="px-4 py-2">FAQ</li>
        </ul>
      </div>
    </div>
  );
}
