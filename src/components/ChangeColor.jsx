import Color from "./Color";

function ChangeColor({ noteId, colors, changeColorNote }) {
  return (
    <div className="bg-neutral-50 min-w-[200px] min-h-[340px] ml-8 rounded-[1px] shadow-[1px_1px_4px_0px_rgb(136,136,136)] flex gap-4 items-center justify-center ">
      <div className="flex flex-col gap-4">
        <Color
          noteId={noteId}
          changeColorNote={changeColorNote}
          color={colors.green.color}
          shadowColor={colors.green.shadowColor}
        />
        <Color
          noteId={noteId}
          changeColorNote={changeColorNote}
          color={colors.blue.color}
          shadowColor={colors.blue.shadowColor}
        />
        <Color
          noteId={noteId}
          changeColorNote={changeColorNote}
          color={colors.yellow.color}
          shadowColor={colors.yellow.shadowColor}
        />
        <Color
          noteId={noteId}
          changeColorNote={changeColorNote}
          color={colors.red.color}
          shadowColor={colors.red.shadowColor}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Color
          noteId={noteId}
          changeColorNote={changeColorNote}
          color={colors.pink.color}
          shadowColor={colors.pink.shadowColor}
        />
        <Color
          noteId={noteId}
          changeColorNote={changeColorNote}
          color={colors.purple.color}
          shadowColor={colors.purple.shadowColor}
        />
        <Color
          noteId={noteId}
          changeColorNote={changeColorNote}
          color={colors.orange.color}
          shadowColor={colors.orange.shadowColor}
        />
        <Color
          noteId={noteId}
          changeColorNote={changeColorNote}
          color={colors.neutral.color}
          shadowColor={colors.neutral.shadowColor}
        />
      </div>
    </div>
  );
}

export default ChangeColor;
