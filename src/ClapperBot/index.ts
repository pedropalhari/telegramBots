import Telegraf from "telegraf";
import tokens from "../tokens/bot_tokens.json";

const spaces = /\ /g;

export default function clapperBotInit() {
  let token = tokens.clapper_bot_token;
  const clapperBot = new Telegraf(token);

  clapperBot.on("inline_query", ctx => {
    let message = ctx.inlineQuery?.query;

    if (!message) return;

    message = message.replace(spaces, " 👏 ") + " 👏";

    ctx.answerInlineQuery([
      {
        type: "article",
        id: Math.random().toString(),
        title: " 👏 ",
        description: message,
        thumb_url:
          "https://i.kym-cdn.com/photos/images/original/001/389/465/663.jpg",
        input_message_content: {
          message_text: message
        }
      }
    ]);
  });

  clapperBot.on("message", ctx => {
    ctx.reply(
      "I work inline! Try typing !the_clapper_bot <message> and see what happens!"
    );
  });

  clapperBot.launch();

  console.log("ClapperBot initialized");
}
