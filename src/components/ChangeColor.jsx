import Color from "./Color";

function ChangeColor() {
  return (
    <div className="bg-neutral-50 min-w-[200px] min-h-[340px] ml-8 rounded-[1px] shadow-[1px_1px_4px_0px_rgb(136,136,136)] flex gap-4 items-center justify-center ">
      <div className="flex flex-col gap-4">
        <Color color="bg-green-200" />

        <Color color="bg-blue-200" />

        <Color color="bg-yellow-100" />
        <Color color="bg-red-200" />
      </div>
      <div className="flex flex-col gap-4">
        <Color color="bg-pink-200" />
        <Color color="bg-purple-200" />
        <Color color="bg-orange-200" />
        <Color color="bg-neutral-50" />
      </div>
    </div>
  );
}

export default ChangeColor;
