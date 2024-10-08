export default function Header() {
  return (
    <div className="relative">
      <div className="flex justify-between px-20 py-10">
        <div className="w-14 z-50 bg-black px-2 py-2">
          <img src="/logo.png" alt="" />
        </div>
        <div className="flex justify-between gap-10 text-2xl uppercase h-10 z-20">
          <div className="border-2 border-white rounded-3xl px-3">
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a href="#">Package</a>
          </div>
          <div>
            <a href="#">Gallery</a>
          </div>
          <div>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>

      <div className="absolute w-full z-0 top-0 shape1-animation">
        <img src="/shape-1.png" alt="" />
      </div>
      <div className="absolute w-full z-10 top-0 shape2-animation">
        <img src="/shape-2.png" alt="" />
      </div>
      <div className="absolute w-full z-0 -top-20 shape3-animation">
        <img src="/shape-3.png" alt="" />
      </div>
    </div>
  );
}
