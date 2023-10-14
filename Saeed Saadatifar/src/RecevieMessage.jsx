import Profile from "./Profile";

export default function Recevie({ text, pro, name, date, id }) {
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
      className="flex rounded-md p-2 w-3/4 m-[5px] self-end justify-end"
    >
      <div className="bg-[#30323E] self-end p-2.5 rounded-[20px] min-w-[84px] relative">
        <div className="text-[18px] mb-[6px] text-left">{name}</div>
        <div
          dir={`${
            (text[0].charCodeAt() <= 122 && text[0].charCodeAt() >= 97) ||
            (text[0].charCodeAt() <= 90 && text[0].charCodeAt() >= 65)
              ? "ltr"
              : "rtl"
          }`}
          className="before:absolute before:border-[#30323E] before:border-[25px] before:left-[-16px] before:bottom-[0px] before:border-r-transparent before:border-l-transparent before:border-t-transparent before:rounded-[40%] grow text-[14px]"
        >
          {words.map((word) => {
            if (word.length > 39) return wordWrap(word, 39);
            return `${word} `;
          })}
        </div>
        <div className="bottom-[7px] text-right text-[10px] pr-[11px]">
          {date}
        </div>
      </div>
      <div className="shrink-0 self-end mr-[15px] pt-[11px] flex items-end">
        <Profile name={pro} />
      </div>
    </div>
  );
}
