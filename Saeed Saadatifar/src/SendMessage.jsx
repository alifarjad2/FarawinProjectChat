import Profile from "./Profile";

export default function Send({ text, pro, name, date, id }) {
  function wordWrap(str, maxWidth) {
    var newLineStr = "\n";
    let res = "";
    while (str.length > maxWidth) {
      let found = false;
      // Inserts new line at first whitespace of the line
      for (let i = maxWidth - 1; i >= 0; i--) {
        if (testWhite(str.charAt(i))) {
          res = res + [str.slice(0, i), newLineStr].join("");
          str = str.slice(i + 1);
          found = true;
          break;
        }
      }
      // Inserts new line at maxWidth position, the word is too long to wrap
      if (!found) {
        res += [str.slice(0, maxWidth), newLineStr].join("");
        str = str.slice(maxWidth);
      }
    }

    return res + str;
  }

  function testWhite(x) {
    var white = new RegExp(/^\s$/);
    return white.test(x.charAt(0));
  }
  let words = text.split(" ");
  return (
    <div
      id={id}
      className="flex rounded-md p-2 self-start w-3/4 justify-start "
    >
      <div className="flex shrink-0 ml-[15px] pt-[11px] items-end">
        <Profile name={pro} />
      </div>
      <div className="bg-[#6B8AFE] p-2.5 rounded-[20px] relative">
        <div className="text-[18px] mb-[6px]">{name}</div>
        <div className="before:absolute before:border-[#6B8AFE] before:border-[25px] before:right-[-16px] before:bottom-[0px] before:border-r-transparent whitespace-break-spaces before:border-l-transparent before:border-t-transparent before:rounded-[40%] grow text-[14px]">
          {words.map((word) => {
            if (word.length > 39) return wordWrap(word, 39);
            return `${word} `;
          })}
        </div>
        <div className="bottom-[7px] text-right pr-[11px] text-[10px]">
          {date}
        </div>
      </div>
    </div>
  );
}
