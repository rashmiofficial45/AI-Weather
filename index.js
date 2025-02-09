import OpenAI from "openai";
import "dotenv/config";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});
console.log(process.env.OPENAI_API_KEY);



function getWeatherDetails(city){
    if (city.toLowerCase()==="patiala") return "10°C"
    if (city.toLowerCase()==="mohali") return "11°C"
    if (city.toLowerCase()==="cuttack") return "12°C"
    if (city.toLowerCase()==="rahama") return "13°C"
}

const user = "Hey, What is the weather of Patiala?"

  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: "user", content: user }],
    model: "gpt-4o-mini",
  })
  console.log(chatCompletion.choices[0].message.content)