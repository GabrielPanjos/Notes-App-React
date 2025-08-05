function Color({ color }) {
  return (
    <button
      className={`w-[60px] h-[60px] shadow-[1px_1px_4px_0px_rgb(136,136,136)] ${color}`}
    ></button>
  );
}

export default Color;
