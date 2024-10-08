export default function Page() {
  return (
    <div className="flex px-20 justify-between">
      <div className="z-0 w-[48rem]">
        <img src="/page.png" alt="" />
      </div>
      <div className="grid items-center text-right ">
        <div className="z-30">
          <h1 className="font-black text-7xl ">
            We Would Love <br />
            To Move You <br />
          </h1>

          <div className="grid gap-10">
            <h3 className="font-bold text-3xl">You gonna love this</h3>

            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Et odit veritatis perferendis vel libero impedit vero a delectus{" "}
              <br />
              corrupti ad, modi dolorum sed, officia perspiciatis <br />
              inventore voluptas consequatur sapiente expedita. <br />
            </p>
          </div>
          <div className="w-full flex justify-center pt-20">
            <div className="border-2 border-white px-4 py-2 w-52 rounded-3xl flex justify-center items-center font-medium text-xl">
              <a href="#">Shop New</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
